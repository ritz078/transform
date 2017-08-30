var is;
(function(is) {
  var ObjProto = Object.prototype;
  var ArrayProto = Array.prototype;
  var toString = ObjProto.toString;
  var hasOwn = ObjProto.hasOwnProperty;
  var index_of = ArrayProto.indexOf
    ? function(arr, val) {
        return arr.indexOf(val);
      }
    : function(arr, val) {
        for (var i = 0, l = arr.length; i < l; i++) {
          if (arr[i] === val) {
            return i;
          }
        }
        return -1;
      };
  function string(s) {
    return typeof s === "string" || s instanceof String;
  }
  is.string = string;
  function number(n) {
    return typeof n === "number" || n instanceof Number;
  }
  is.number = number;
  function boolean(b) {
    return b === !!b || b instanceof Boolean;
  }
  is.boolean = boolean;
  function fn(f) {
    return typeof f === "function";
  }
  is.fn = fn;
  is.array =
    Array.isArray ||
    function(a) {
      return toString.call(a) === "[object Array]";
    };
  function object(o) {
    return o === Object(o);
  }
  is.object = object;
  function regex(r) {
    return !!(
      r &&
      r.test &&
      r.exec &&
      (r.ignoreCase || r.ignoreCase === false)
    );
  }
  is.regex = regex;
  is.element =
    typeof HTMLElement !== "undefined"
      ? function(e) {
          return e instanceof HTMLElement;
        }
      : function(e) {
          return !!(e && e.nodeType === 1);
        };
  function numeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  is.numeric = numeric;
  function hash(o) {
    if (
      !o ||
      typeof o !== "object" ||
      is.element(o) ||
      (typeof window !== "undefined" && o === window) ||
      (o.constructor &&
        !hasOwn.call(o, "constructor") &&
        !hasOwn.call(o.constructor.prototype, "isPrototypeOf"))
    ) {
      return false;
    }
    for (var key in o) {
    }
    return key === undefined || hasOwn.call(o, key);
  }
  is.hash = hash;
  function inside(container, val) {
    if (is.array(container)) {
      return index_of(container, val) > -1;
    } else if (is.object(container)) {
      for (var prop in container) {
        if (hasOwn.call(container, prop) && container[prop] === val) {
          return true;
        }
      }
      return false;
    } else {
      return false;
    }
  }
  is.inside = inside;
  function set(v) {
    return v !== null && v !== void 0;
  }
  is.set = set;
  function empty(container) {
    if (is.array(container)) {
      return container.length === 0;
    } else if (is.object(container)) {
      if (is.fn(container.valueOf) && !is.object(container.valueOf())) {
        return is.empty(container.valueOf());
      }
      for (var x in container) {
        if (hasOwn.call(container, x)) {
          return false;
        }
      }
      return true;
    } else {
      return !container;
    }
  }
  is.empty = empty;
})(is || (is = {}));
function SHA1(msg) {
  function rotate_left(n, s) {
    var t4 = (n << s) | (n >>> (32 - s));
    return t4;
  }
  function lsb_hex(val) {
    var str = "";
    var i;
    var vh;
    var vl;
    for (i = 0; i <= 6; i += 2) {
      vh = (val >>> (i * 4 + 4)) & 0x0f;
      vl = (val >>> (i * 4)) & 0x0f;
      str += vh.toString(16) + vl.toString(16);
    }
    return str;
  }
  function cvt_hex(val) {
    var str = "";
    var i;
    var v;
    for (i = 7; i >= 0; i--) {
      v = (val >>> (i * 4)) & 0x0f;
      str += v.toString(16);
    }
    return str;
  }
  function Utf8Encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }
    return utftext;
  }
  var blockstart;
  var i, j;
  var W = new Array(80);
  var H0 = 0x67452301;
  var H1 = 0xefcdab89;
  var H2 = 0x98badcfe;
  var H3 = 0x10325476;
  var H4 = 0xc3d2e1f0;
  var A, B, C, D, E;
  var temp;
  msg = Utf8Encode(msg);
  var msg_len = msg.length;
  var word_array = new Array();
  for (i = 0; i < msg_len - 3; i += 4) {
    j =
      (msg.charCodeAt(i) << 24) |
      (msg.charCodeAt(i + 1) << 16) |
      (msg.charCodeAt(i + 2) << 8) |
      msg.charCodeAt(i + 3);
    word_array.push(j);
  }
  switch (msg_len % 4) {
    case 0:
      i = 0x080000000;
      break;
    case 1:
      i = (msg.charCodeAt(msg_len - 1) << 24) | 0x0800000;
      break;
    case 2:
      i =
        (msg.charCodeAt(msg_len - 2) << 24) |
        (msg.charCodeAt(msg_len - 1) << 16) |
        0x08000;
      break;
    case 3:
      i =
        (msg.charCodeAt(msg_len - 3) << 24) |
        (msg.charCodeAt(msg_len - 2) << 16) |
        (msg.charCodeAt(msg_len - 1) << 8) |
        0x80;
      break;
  }
  word_array.push(i);
  while (word_array.length % 16 != 14) word_array.push(0);
  word_array.push(msg_len >>> 29);
  word_array.push((msg_len << 3) & 0x0ffffffff);
  for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
    for (i = 0; i < 16; i++) W[i] = word_array[blockstart + i];
    for (i = 16; i <= 79; i++)
      W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
    A = H0;
    B = H1;
    C = H2;
    D = H3;
    E = H4;
    for (i = 0; i <= 19; i++) {
      temp =
        (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5a827999) &
        0x0ffffffff;
      E = D;
      D = C;
      C = rotate_left(B, 30);
      B = A;
      A = temp;
    }
    for (i = 20; i <= 39; i++) {
      temp =
        (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ed9eba1) & 0x0ffffffff;
      E = D;
      D = C;
      C = rotate_left(B, 30);
      B = A;
      A = temp;
    }
    for (i = 40; i <= 59; i++) {
      temp =
        (rotate_left(A, 5) +
          ((B & C) | (B & D) | (C & D)) +
          E +
          W[i] +
          0x8f1bbcdc) &
        0x0ffffffff;
      E = D;
      D = C;
      C = rotate_left(B, 30);
      B = A;
      A = temp;
    }
    for (i = 60; i <= 79; i++) {
      temp =
        (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xca62c1d6) & 0x0ffffffff;
      E = D;
      D = C;
      C = rotate_left(B, 30);
      B = A;
      A = temp;
    }
    H0 = (H0 + A) & 0x0ffffffff;
    H1 = (H1 + B) & 0x0ffffffff;
    H2 = (H2 + C) & 0x0ffffffff;
    H3 = (H3 + D) & 0x0ffffffff;
    H4 = (H4 + E) & 0x0ffffffff;
  }
  var temp2 =
    cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
  return temp2.toLowerCase();
}
var Types = (function() {
  function Types() {}
  Types.STRING = "string";
  Types.NUMBER = "number";
  Types.BOOLEAN = "boolean";
  Types.ARRAY = "[]";
  return Types;
})();
exports.Types = Types;
var Json2dts = (function() {
  function Json2dts() {
    this.is_value_consistent = function(o) {
      var _this = this;
      if (this.size(o) == 0) {
        return true;
      } else {
        if (!is.array(o)) {
          o = this.values(o);
        }
        var n = o[0];
        var nn = is.object(n) ? this.generate_signature(n) : typeof n;
        return Object.keys(o).every(function(key) {
          return (
            (is.object(o[key])
              ? _this.generate_signature(o[key])
              : typeof o[key]) == nn
          );
        });
      }
    };
  }
  Json2dts.prototype.parse = function(obj, objectName, moduleName) {
    if (objectName === void 0) {
      objectName = "_RootInterface";
    }
    if (moduleName === void 0) {
      moduleName = "";
    }
    this.moduleName = moduleName;
    this.classes = {};
    this.classesCache = {};
    this.classesInUse = {};
    this.analyse_object(obj, objectName);
    return this.classes;
  };
  Json2dts.prototype.getCode = function(flow) {
    var _this = this;
    var output;
    var classes = {};
    var outputModule = this.moduleName == "" ? false : true;
    var interfaceTab = outputModule ? "\t" : "";
    var propertyTab = interfaceTab + "\t";
    Object.keys(this.classes).map(function(clsName) {
      output = flow
        ? interfaceTab + "type " + clsName + " = \n" + interfaceTab + "{\n"
        : interfaceTab + "interface " + clsName + " \n" + interfaceTab + "{\n";
      Object.keys(_this.classes[clsName]).map(function(key) {
        output +=
          propertyTab +
          key +
          ":" +
          _this.classes[clsName][key] +
          (flow ? ",\n" : ";\n");
      });
      output += interfaceTab + (flow ? "};\n\n" : "}\n\n");
      classes[clsName] = output;
    });
    output = outputModule ? "module " + this.moduleName + "\n{\n" : "";
    Object.keys(classes)
      .sort()
      .forEach(function(key) {
        output += classes[key];
      });
    return output + (outputModule ? "\n}" : "");
  };
  Json2dts.prototype.analyse_object = function(obj, objectName) {
    var _this = this;
    if (objectName === void 0) {
      objectName = "json";
    }
    objectName = this.getInterfaceType(objectName, obj);
    this.classes[objectName] = this.classes[objectName] || {};
    Object.keys(obj).map(function(key) {
      var type = "string";
      var sha = "";
      var value = obj[key];
      switch (true) {
        case is.string(value):
          type = Types.STRING;
          break;
        case is.number(value):
          type = Types.NUMBER;
          break;
        case is.boolean(value):
          type = Types.BOOLEAN;
          break;
        case is.array(value):
          type = "any[]";
          if (_this.is_value_consistent(value)) {
            if (_this.size(value) == 0) {
              type = "any[]";
            } else {
              if (is.object(value[0])) {
                type = _this.getInterfaceType(key, value[0]) + "[]";
                _this.analyse_object(value[0], key);
              } else {
                type = _this.getBasicType(value[0]) + "[]";
              }
            }
          }
          break;
        case is.object(value) && !is.array(value):
          type = "any";
          if (!is.empty(value)) {
            type = _this.getInterfaceType(key, value);
            _this.analyse_object(value, key);
          }
          break;
      }
      if (_this.hasSpecialChars(key)) {
        key = '"' + key + '"';
      }
      _this.classes[objectName][key] = type;
    });
  };
  Json2dts.prototype.objectParser = function(key) {};
  Json2dts.prototype.getBasicType = function(value) {
    var type = Types.STRING;
    switch (true) {
      case is.string(value):
        type = Types.STRING;
        break;
      case is.number(value):
        type = Types.NUMBER;
        break;
      case is.boolean(value):
        type = Types.BOOLEAN;
        break;
    }
    return type;
  };
  Json2dts.prototype.getInterfaceType = function(key, value) {
    // get a valid className
    key = key
      .replace(/_/gi, " ")
      .replace(/-/gi, " ")
      .replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1);
      })
      .replace(/ /gi, "");
    var currentObjectSignature = this.generate_signature(value);
    var isKnownClass =
      Object.keys(this.classesCache).indexOf(currentObjectSignature) != -1;
    if (isKnownClass) return this.classesCache[currentObjectSignature];
    if (this.classesInUse[key] != undefined) {
      this.classesInUse[key]++;
      this.classesCache[currentObjectSignature] = key + this.classesInUse[key];
      return this.classesCache[currentObjectSignature];
    }
    this.classesCache[currentObjectSignature] = key;
    this.classesInUse[key] = 0;
    return key;
  };
  Json2dts.prototype.size = function(obj) {
    if (obj == null) return 0;
    return obj.length === +obj.length ? obj.length : Object.keys(obj).length;
  };
  Json2dts.prototype.values = function(obj) {
    return Object.keys(obj).map(function(key) {
      return obj[key];
    });
  };
  Json2dts.prototype.generate_signature = function(o) {
    if (is.object(o)) {
      return SHA1(
        Object.keys(o)
          .map(function(n) {
            return n.toLowerCase();
          })
          .sort()
          .join("|")
      );
    } else {
      return SHA1(
        Object.keys(o)
          .map(function(n) {
            return typeof n;
          })
          .sort()
          .join("|")
      );
    }
  };
  Json2dts.prototype.hasSpecialChars = function(str) {
    return /[ ~`!#$%\^&*+=\-\[\]\\';,\/{}|\\":<>\?]/g.test(str);
  };
  Json2dts.prototype.keysrt = function(key, desc) {
    if (desc === void 0) {
      desc = false;
    }
    return function(a, b) {
      return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
    };
  };
  return Json2dts;
})();
exports.Json2dts = Json2dts;
function extractLineFeeds(s) {
  return s.replace(/[^\n]+/g, "");
}
function toValidJSON(input, keepLineNumbers) {
  if (keepLineNumbers === void 0) {
    keepLineNumbers = false;
  }
  var UNESCAPE_MAP = { '\\"': '"', "\\`": "`", "\\'": "'" };
  var ML_ESCAPE_MAP = { "\n": "\\n", "\r": "\\r", "\t": "\\t", '"': '\\"' };
  function unescapeQuotes(r) {
    return UNESCAPE_MAP[r] || r;
  }
  return input
    .replace(
      /`(?:\\.|[^`])*`|'(?:\\.|[^'])*'|"(?:\\.|[^"])*"|\/\*[^]*?\*\/|\/\/.*\n?/g,
      function(s) {
        if (s.charAt(0) == "/") {
          return keepLineNumbers ? extractLineFeeds(s) : "";
        } else {
          return s;
        }
      }
    )
    .replace(
      /(?:true|false|null)(?=[^\w_$]|$)|([a-zA-Z_$][\w_$]*)|`((?:\\.|[^`])*)`|'((?:\\.|[^'])*)'|"(?:\\.|[^"])*"|(,)(?=\s*[}\]])/g,
      function(s, identifier, multilineQuote, singleQuote, lonelyComma) {
        if (lonelyComma) {
          return "";
        } else if (identifier != null) {
          return '"' + identifier + '"';
        } else if (multilineQuote != null) {
          return (
            '"' +
            multilineQuote
              .replace(/\\./g, unescapeQuotes)
              .replace(/[\n\r\t"]/g, function(r) {
                return ML_ESCAPE_MAP[r];
              }) +
            '"' +
            (keepLineNumbers ? extractLineFeeds(multilineQuote) : "")
          );
        } else if (singleQuote != null) {
          return (
            '"' +
            singleQuote.replace(/\\./g, unescapeQuotes).replace(/"/g, '\\"') +
            '"'
          );
        } else {
          return s;
        }
      }
    );
}
exports.toValidJSON = toValidJSON;
