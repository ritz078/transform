import SHA1 from "sha1";
import {
  isEmpty,
  isArray,
  isObject,
  isBoolean,
  isNumber,
  isString,
  merge,
  isInteger,
  intersection,
  difference,
  union,
  assign,
  camelCase,
  upperFirst,
  snakeCase,
  padStart
} from "lodash";
import rustReserved from "rust-keywords";

const typeNames = {
  STRING: "string",
  NUMBER: "number",
  INTEGER: "number",
  BOOLEAN: "boolean",
  ARRAY: "[]",
  ANY: "any"
};

const mapping = {
  "rust-serde": {
    interface: "struct",
    separator: ",",
    startingBrace: "{",
    endingBrace: "}",
    terminator: "",
    equator: "",
    types: merge({}, typeNames, {
      STRING: "String",
      NUMBER: "f64",
      INTEGER: "i64",
      BOOLEAN: "bool",
      ANY: "()"
    }),
    handleOptionalValue: value => `Option<${value}>`,
    handleArray: (className = "") => `Vec<${className}>`,
    preInterface: "#[derive(Serialize, Deserialize)]\n"
  }
};

let langDetails = {};
let classes = {};
let classesCache = {};
let classesInUse = {};
let optionalProperties = {};

function pascalCase(str) {
  return upperFirst(camelCase(str));
}

function setOptionalProperties(arr, objectName) {
  if (!isValueConsistent(arr)) return;
  const arrayOfKeys = arr.map(a => Object.keys(a));
  optionalProperties[objectName] = difference(
    union(...arrayOfKeys),
    intersection(...arrayOfKeys)
  );
}

function hasSpecialChars(str) {
  return /[ ~`!@#$%\^&*+=\-\[\]\\';,\/{}|\\":<>\?]/g.test(str);
}

function getBasicType(value) {
  const { types } = langDetails;

  let type = types.STRING;
  switch (true) {
    case isString(value):
      type = types.STRING;
      break;
    case isInteger(value):
      type = types.INTEGER;
      break;
    case isNumber(value):
      type = types.NUMBER;
      break;
    case isBoolean(value):
      type = types.BOOLEAN;
      break;
  }
  return type;
}

function generateSignature(o) {
  if (isObject(o)) {
    return SHA1(
      Object.keys(o)
        .map(n => n.toLowerCase())
        .sort()
        .join("|")
    );
  } else {
    return SHA1(
      Object.keys(o)
        .map(n => typeof n)
        .sort()
        .join("|")
    );
  }
}

function getValidClassName(key) {
  return pascalCase(key);
}

function getInterfaceType(key, value, classes, classesCache, classesInUse) {
  // get a valid className
  const className = getValidClassName(key);
  const currentObjectSignature = generateSignature(value);
  const isKnownClass =
    Object.keys(classesCache).indexOf(currentObjectSignature) !== -1;
  if (isKnownClass) return classesCache[currentObjectSignature];
  if (classesInUse[className] !== undefined) {
    classesInUse[className]++;
    classesCache[currentObjectSignature] = className + classesInUse[className];
    return classesCache[currentObjectSignature];
  }
  classesCache[currentObjectSignature] = className;
  classesInUse[className] = 0;
  return className;
}

function isValueConsistent(arr) {
  if (!isEmpty(arr)) {
    arr.every(x => (isObject(x) ? "object" : typeof x));
  }
  return true;
}

function analyzeObject(obj, objectName) {
  objectName = getInterfaceType(
    objectName,
    obj,
    classes,
    classesCache,
    classesInUse
  );
  classes[objectName] = classes[objectName] || {};

  Object.keys(obj).map(key => {
    let type = "string";
    const value = obj[key];
    const { types, handleArray } = langDetails;

    switch (true) {
      case isString(value):
        type = types.STRING;
        break;
      case isInteger(value):
        type = types.INTEGER;
        break;
      case isNumber(value):
        type = types.NUMBER;
        break;
      case isBoolean(value):
        type = types.BOOLEAN;
        break;
      case isArray(value):
        type = handleArray("", true);
        if (isValueConsistent(value)) {
          if (isEmpty(value)) {
            type = handleArray("", true);
          } else {
            if (isObject(value[0])) {
              const clsName = getInterfaceType(
                key,
                assign({}, ...value),
                classes,
                classesCache,
                classesInUse
              );
              type = handleArray(clsName);
              setOptionalProperties(value, clsName);
              analyzeObject(assign({}, ...value), key);
            } else {
              type = `${handleArray(getBasicType(value[0]))}`;
            }
          }
        }
        break;
      case isObject(value) && !isArray(value):
        type = types.ANY;
        if (!isEmpty(value)) {
          type = getInterfaceType(
            key,
            value,
            classes,
            classesCache,
            classesInUse
          );
          analyzeObject(value, key);
        }
        break;
    }
    if (hasSpecialChars(key)) {
      key = `"${key}"`;
    }
    classes[objectName][key] = type;
  });

  return { classes, classesCache, classesInUse };
}

function isOptionalKey(key, objName) {
  return (
    optionalProperties[objName] && optionalProperties[objName].indexOf(key) >= 0
  );
}

function setOptional(key, objName) {
  if (isOptionalKey(key, objName) && langDetails.optional) {
    return langDetails.optional;
  }
  return "";
}

let countMapping = {};

function getKey(key) {
  let _key = isNumber(+key[0]) ? `_${key}` : key;
  if (countMapping[key]) {
    _key = `${key}_${padStart(countMapping[key].toString(), 2, "0")}`;
    countMapping[key]++;
  } else {
    countMapping[key] = 1;
  }

  return _key;
}

function rustRename(key, lang, clsName, rustCase) {
  const caseFunc = rustCase === "camelCase" ? camelCase : snakeCase;
  const casedText =
    hasSpecialChars(key) || rustCase === "snakeCase" ? caseFunc(key) : key;
  if (
    lang === "rust-serde" &&
    (rustReserved.indexOf(key) >= 0 ||
      key.indexOf(" ") >= 0 ||
      key !== casedText ||
      isNumber(+key[0]))
  ) {
    const changedKey = `${casedText.indexOf("_") >= 0 ? "" : "_"}${casedText}`;

    return `  #[serde(rename = "${key.replace(/"/g, "")}")]\n  ${getKey(
      changedKey
    )}`;
  }

  return `  ${getKey(key)}${setOptional(key, clsName)}`;
}

export default function transform(obj, options) {
  countMapping = {};

  obj = isString(obj) ? JSON.parse(obj) : obj;

  if (isArray(obj)) {
    obj = merge({}, ...obj);
  }

  const defaultOptions = {
    objectName: "_RootInterface",
    lang: "flow",
    rustCase: "camelCase"
  };

  langDetails = {};
  optionalProperties = {};

  const { objectName, lang, rustCase } = merge({}, defaultOptions, options);

  if (rustCase !== "camelCase" && rustCase !== "snakeCase") {
    throw new Error("rustCase can only be 'camelCase' or 'snakeCase'.");
  }

  langDetails = mapping[lang];
  let output = langDetails.preText ? `${langDetails.preText};\n\n` : "";
  const localClasses = {};
  classes = {};
  classesCache = {};
  classesInUse = {};

  analyzeObject(obj, objectName);

  const {
    equator,
    separator,
    endingBrace,
    startingBrace,
    terminator,
    preInterface,
    hideTerminatorAtLast,
    handleOptionalValue
  } = langDetails;

  Object.keys(classes).map(clsName => {
    output = preInterface || "";
    output += `${langDetails.interface} ${clsName}${equator} ${startingBrace}\n`;

    const keys = Object.keys(classes[clsName]);

    keys.map((key, i) => {
      const _separator =
        i === keys.length - 1 && hideTerminatorAtLast ? "" : separator;
      const _key = rustRename(key, lang, clsName, rustCase);
      let _value = classes[clsName][key];
      _value =
        isOptionalKey(key, clsName) && handleOptionalValue
          ? handleOptionalValue(_value)
          : _value;

      output += `${_key}: ${_value}${_separator}\n`;
    });
    output += `${endingBrace}${terminator}\n\n`;
    localClasses[clsName] = output;
  });

  output = "";

  Object.keys(localClasses)
    .sort()
    .forEach(key => {
      output += localClasses[key];
    });

  return output;
}
