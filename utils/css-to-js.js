const SPACE = '    ';
function toProperty(name){
  if(name.charAt(0) === "-") name = name.slice(0);

  return name.replace(/[^a-z0-9]([a-z0-9])?/gi, function(v, l){
    if(l) return l.toUpperCase();
    return "";
  }) ;
}

function toSelectors(name){
  const names = name.split(',')

  return names.map(function(name){
    name = name.trim();
    let newName = ''

    if(name.charAt(0) === "."){
      newName += "Class";
      name = name.slice(1);
    }else if(name.charAt(0) === "#"){
      newName += "Id";
      name = name.slice(1);
    }else{
      newName += "Element";
    }

    return name.replace(/([^a-z0-9])([a-z0-9])?/gi, function(v, c, l){
      if(l) return (c === "," || c === " ") ?  l.toLowerCase() : l.toUpperCase();
      return "";
    }) + newName;

  });

}

function tokenizer(code){

  const tokens = [];
  let token = '';
  const whitespc = ['\r\n', '\n\r', '\n', '\r'];
  let lastChar = '\0';
  let nextChar = '\0';
  let char = '\0';
  const specialChars = ["{","}",":",";"];
  const specialCharsPB = ["{","}",";"];
  let sc = null;
  let inBrackets = false;

  for(let i = 0; i < code.length; i++){

    if(i) lastChar = code.charAt(i-1);
    char = code.charAt(i);
    if(i+1 < code.length) nextChar = code.charAt(i+1);

    if(~whitespc.indexOf(char) && ~whitespc.indexOf(lastChar)){
      continue;
    }

    sc = inBrackets ? specialChars : specialCharsPB;



    if(~sc.indexOf(char)){
      if(char === "{") inBrackets = true;
      if(char === "}") inBrackets = false;
      tokens.push(token);
      tokens.push(char);
      token = '';
      continue;
    }

    token += char;

  }

  if(token) tokens.push(token);


  return tokens
    .map(function(token){ return token.trim(); })
    .filter(function(token){ return token; });

}

function convertoToJS(tokens){
  const items = []
  let actualItem = null
  let actualProp = null
  function readSelector(token){
    const selectors = toSelectors(token)

    actualItem = {
      originalValue: token,
      selectors: selectors,
      values: {}
    };

    actualProp = null;
    items.push(actualItem);

    return readBracketO;
  }

  function readBracketO(token){

    if(token !== "{") throw new Error("expected '{' ");

    return readProperty;
  }

  function readBracketC(token){
    if(token !== "}") throw new Error("expected '}' ");
    return readSelector;
  }

  function readDefinition(token){
    if(token !== ":") throw new Error("expected ':' ");

    return readValue;
  }

  function readProperty(token){

    if(token === "}") return readBracketC(token);

    const property = toProperty(token)
    actualProp = property;

    if(!actualItem.values[property]){
      actualItem.values[property] = [];
    }

    return readDefinition;
  }

  function readValue(token){

    actualItem.values[actualProp].push(token);

    return readFinal;
  }

  function readFinal(token){
    if(token === "}") return readBracketC(token);
    if(token !== ";")  throw new Error("expected ';' ");
    return readProperty;
  }

  let nextAction = readSelector
  let i = 0
  tokens.forEach(function(token){
    i++;
    nextAction = nextAction(token);

  });

  return renderJS(items);

}

function renderJS(items){

  let objects = ['var styles = {']
  objects = objects.concat(items.map(renderItem).join(","));
  objects.push("}");
  return objects.join("\n");
}

function renderItem(item){

  const code = ['\n//' + item.originalValue]

  let properties = []

  for(const prop in item.values){
    if(item.values.hasOwnProperty(prop)) {
      const propitem = {
        name: prop,
        value: item.values[prop][item.values[prop].length - 1]
      }
      let markup = '"'
      if (~propitem.value.indexOf('"')) {
        markup = "'";
        propitem.value = propitem.value.replace(/'/gi, "\\'");
      }
      properties.push(SPACE + SPACE + propitem.name + ": " + markup + propitem.value + markup);
    }
  }

  properties = properties.map(function(x){ return SPACE +  x; });

  item.selectors.forEach(function(i){

    code.push(SPACE + i + ": {");
    code.push(properties.join(",\n"));
    code.push(SPACE + "}");

  });

  return code.join("\n");

}


export default function transformCode (code) {
  return convertoToJS(tokenizer(code))
}


