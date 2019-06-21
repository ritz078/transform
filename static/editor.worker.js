/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s =
      "./node_modules/monaco-editor/esm/vs/editor/editor.worker.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/array/is-array */ "./node_modules/core-js/library/fn/array/is-array.js"
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/json/stringify */ "./node_modules/core-js/library/fn/json/stringify.js"
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
      /*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/map */ "./node_modules/core-js/library/fn/map.js"
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js"
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/freeze */ "./node_modules/core-js/library/fn/object/freeze.js"
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-names.js":
      /*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-names.js ***!
  \**************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/get-own-property-names */ "./node_modules/core-js/library/fn/object/get-own-property-names.js"
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
      /*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js"
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
      /*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js"
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
      /*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js"
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
      /*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/parse-float */ "./node_modules/core-js/library/fn/parse-float.js"
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
      /*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/parse-int */ "./node_modules/core-js/library/fn/parse-int.js"
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
      /*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/promise */ "./node_modules/core-js/library/fn/promise.js"
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/set-immediate.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/set-immediate.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/set-immediate */ "./node_modules/core-js/library/fn/set-immediate.js"
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/set.js":
      /*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/set.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/set */ "./node_modules/core-js/library/fn/set.js"
        );

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/array/is-array.js":
      /*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.array.is-array */ "./node_modules/core-js/library/modules/es6.array.is-array.js"
        );
        module.exports = __webpack_require__(
          /*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js"
        ).Array.isArray;

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/json/stringify.js":
      /*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var core = __webpack_require__(
          /*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js"
        );
        var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
        module.exports = function stringify(it) {
          // eslint-disable-line no-unused-vars
          return $JSON.stringify.apply($JSON, arguments);
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/map.js":
      /*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/map.js ***!
  \************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js"
        );
        __webpack_require__(
          /*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js"
        );
        __webpack_require__(
          /*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js"
        );
        __webpack_require__(
          /*! ../modules/es6.map */ "./node_modules/core-js/library/modules/es6.map.js"
        );
        __webpack_require__(
          /*! ../modules/es7.map.to-json */ "./node_modules/core-js/library/modules/es7.map.to-json.js"
        );
        __webpack_require__(
          /*! ../modules/es7.map.of */ "./node_modules/core-js/library/modules/es7.map.of.js"
        );
        __webpack_require__(
          /*! ../modules/es7.map.from */ "./node_modules/core-js/library/modules/es7.map.from.js"
        );
        module.exports = __webpack_require__(
          /*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js"
        ).Map;

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/object/create.js":
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js"
        );
        var $Object = __webpack_require__(
          /*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js"
        ).Object;
        module.exports = function create(P, D) {
          return $Object.create(P, D);
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/object/freeze.js":
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/freeze.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.object.freeze */ "./node_modules/core-js/library/modules/es6.object.freeze.js"
        );
        module.exports = __webpack_require__(
          /*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js"
        ).Object.freeze;

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/object/get-own-property-names.js":
      /*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-names.js ***!
  \**************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.object.get-own-property-names */ "./node_modules/core-js/library/modules/es6.object.get-own-property-names.js"
        );
        var $Object = __webpack_require__(
          /*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js"
        ).Object;
        module.exports = function getOwnPropertyNames(it) {
          return $Object.getOwnPropertyNames(it);
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js"
        );
        module.exports = __webpack_require__(
          /*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js"
        ).Object.getPrototypeOf;

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/object/keys.js":
      /*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js"
        );
        module.exports = __webpack_require__(
          /*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js"
        ).Object.keys;

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js"
        );
        module.exports = __webpack_require__(
          /*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js"
        ).Object.setPrototypeOf;

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/parse-float.js":
      /*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/parse-float.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../modules/es6.parse-float */ "./node_modules/core-js/library/modules/es6.parse-float.js"
        );
        module.exports = __webpack_require__(
          /*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js"
        ).parseFloat;

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/parse-int.js":
      /*!******************************************************!*\
  !*** ./node_modules/core-js/library/fn/parse-int.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../modules/es6.parse-int */ "./node_modules/core-js/library/modules/es6.parse-int.js"
        );
        module.exports = __webpack_require__(
          /*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js"
        ).parseInt;

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/promise.js":
      /*!****************************************************!*\
  !*** ./node_modules/core-js/library/fn/promise.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js"
        );
        __webpack_require__(
          /*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js"
        );
        __webpack_require__(
          /*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js"
        );
        __webpack_require__(
          /*! ../modules/es6.promise */ "./node_modules/core-js/library/modules/es6.promise.js"
        );
        __webpack_require__(
          /*! ../modules/es7.promise.finally */ "./node_modules/core-js/library/modules/es7.promise.finally.js"
        );
        __webpack_require__(
          /*! ../modules/es7.promise.try */ "./node_modules/core-js/library/modules/es7.promise.try.js"
        );
        module.exports = __webpack_require__(
          /*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js"
        ).Promise;

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/set-immediate.js":
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/set-immediate.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../modules/web.immediate */ "./node_modules/core-js/library/modules/web.immediate.js"
        );
        module.exports = __webpack_require__(
          /*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js"
        ).setImmediate;

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/set.js":
      /*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/set.js ***!
  \************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js"
        );
        __webpack_require__(
          /*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js"
        );
        __webpack_require__(
          /*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js"
        );
        __webpack_require__(
          /*! ../modules/es6.set */ "./node_modules/core-js/library/modules/es6.set.js"
        );
        __webpack_require__(
          /*! ../modules/es7.set.to-json */ "./node_modules/core-js/library/modules/es7.set.to-json.js"
        );
        __webpack_require__(
          /*! ../modules/es7.set.of */ "./node_modules/core-js/library/modules/es7.set.of.js"
        );
        __webpack_require__(
          /*! ../modules/es7.set.from */ "./node_modules/core-js/library/modules/es7.set.from.js"
        );
        module.exports = __webpack_require__(
          /*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js"
        ).Set;

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_a-function.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function(it) {
          if (typeof it != "function")
            throw TypeError(it + " is not a function!");
          return it;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function() {
          /* empty */
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_an-instance.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function(it, Constructor, name, forbiddenField) {
          if (
            !(it instanceof Constructor) ||
            (forbiddenField !== undefined && forbiddenField in it)
          ) {
            throw TypeError(name + ": incorrect invocation!");
          }
          return it;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_an-object.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js"
        );
        module.exports = function(it) {
          if (!isObject(it)) throw TypeError(it + " is not an object!");
          return it;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-from-iterable.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var forOf = __webpack_require__(
          /*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js"
        );

        module.exports = function(iter, ITERATOR) {
          var result = [];
          forOf(iter, false, result.push, result, ITERATOR);
          return result;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_array-includes.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // false -> Array#indexOf
        // true  -> Array#includes
        var toIObject = __webpack_require__(
          /*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js"
        );
        var toLength = __webpack_require__(
          /*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js"
        );
        var toAbsoluteIndex = __webpack_require__(
          /*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js"
        );
        module.exports = function(IS_INCLUDES) {
          return function($this, el, fromIndex) {
            var O = toIObject($this);
            var length = toLength(O.length);
            var index = toAbsoluteIndex(fromIndex, length);
            var value;
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare
            if (IS_INCLUDES && el != el)
              while (length > index) {
                value = O[index++];
                // eslint-disable-next-line no-self-compare
                if (value != value) return true;
                // Array#indexOf ignores holes, Array#includes - not
              }
            else
              for (; length > index; index++)
                if (IS_INCLUDES || index in O) {
                  if (O[index] === el) return IS_INCLUDES || index || 0;
                }
            return !IS_INCLUDES && -1;
          };
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_array-methods.js":
      /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 0 -> Array#forEach
        // 1 -> Array#map
        // 2 -> Array#filter
        // 3 -> Array#some
        // 4 -> Array#every
        // 5 -> Array#find
        // 6 -> Array#findIndex
        var ctx = __webpack_require__(
          /*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js"
        );
        var IObject = __webpack_require__(
          /*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js"
        );
        var toObject = __webpack_require__(
          /*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js"
        );
        var toLength = __webpack_require__(
          /*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js"
        );
        var asc = __webpack_require__(
          /*! ./_array-species-create */ "./node_modules/core-js/library/modules/_array-species-create.js"
        );
        module.exports = function(TYPE, $create) {
          var IS_MAP = TYPE == 1;
          var IS_FILTER = TYPE == 2;
          var IS_SOME = TYPE == 3;
          var IS_EVERY = TYPE == 4;
          var IS_FIND_INDEX = TYPE == 6;
          var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
          var create = $create || asc;
          return function($this, callbackfn, that) {
            var O = toObject($this);
            var self = IObject(O);
            var f = ctx(callbackfn, that, 3);
            var length = toLength(self.length);
            var index = 0;
            var result = IS_MAP
              ? create($this, length)
              : IS_FILTER
              ? create($this, 0)
              : undefined;
            var val, res;
            for (; length > index; index++)
              if (NO_HOLES || index in self) {
                val = self[index];
                res = f(val, index, O);
                if (TYPE) {
                  if (IS_MAP) result[index] = res;
                  // map
                  else if (res)
                    switch (TYPE) {
                      case 3:
                        return true; // some
                      case 5:
                        return val; // find
                      case 6:
                        return index; // findIndex
                      case 2:
                        result.push(val); // filter
                    }
                  else if (IS_EVERY) return false; // every
                }
              }
            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
          };
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js"
        );
        var isArray = __webpack_require__(
          /*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js"
        );
        var SPECIES = __webpack_require__(
          /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js"
        )("species");

        module.exports = function(original) {
          var C;
          if (isArray(original)) {
            C = original.constructor;
            // cross-realm fallback
            if (typeof C == "function" && (C === Array || isArray(C.prototype)))
              C = undefined;
            if (isObject(C)) {
              C = C[SPECIES];
              if (C === null) C = undefined;
            }
          }
          return C === undefined ? Array : C;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_array-species-create.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
        var speciesConstructor = __webpack_require__(
          /*! ./_array-species-constructor */ "./node_modules/core-js/library/modules/_array-species-constructor.js"
        );

        module.exports = function(original, length) {
          return new (speciesConstructor(original))(length);
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_classof.js":
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // getting tag from 19.1.3.6 Object.prototype.toString()
        var cof = __webpack_require__(
          /*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js"
        );
        var TAG = __webpack_require__(
          /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js"
        )("toStringTag");
        // ES3 wrong here
        var ARG =
          cof(
            (function() {
              return arguments;
            })()
          ) == "Arguments";

        // fallback for IE11 Script Access Denied error
        var tryGet = function(it, key) {
          try {
            return it[key];
          } catch (e) {
            /* empty */
          }
        };

        module.exports = function(it) {
          var O, T, B;
          return it === undefined
            ? "Undefined"
            : it === null
            ? "Null"
            : // @@toStringTag case
            typeof (T = tryGet((O = Object(it)), TAG)) == "string"
            ? T
            : // builtinTag case
            ARG
            ? cof(O)
            : // ES3 arguments fallback
            (B = cof(O)) == "Object" && typeof O.callee == "function"
            ? "Arguments"
            : B;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_cof.js":
      /*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        var toString = {}.toString;

        module.exports = function(it) {
          return toString.call(it).slice(8, -1);
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_collection-strong.js":
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-strong.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var dP = __webpack_require__(
          /*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js"
        ).f;
        var create = __webpack_require__(
          /*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js"
        );
        var redefineAll = __webpack_require__(
          /*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js"
        );
        var ctx = __webpack_require__(
          /*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js"
        );
        var anInstance = __webpack_require__(
          /*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js"
        );
        var forOf = __webpack_require__(
          /*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js"
        );
        var $iterDefine = __webpack_require__(
          /*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js"
        );
        var step = __webpack_require__(
          /*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js"
        );
        var setSpecies = __webpack_require__(
          /*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js"
        );
        var DESCRIPTORS = __webpack_require__(
          /*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"
        );
        var fastKey = __webpack_require__(
          /*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js"
        ).fastKey;
        var validate = __webpack_require__(
          /*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js"
        );
        var SIZE = DESCRIPTORS ? "_s" : "size";

        var getEntry = function(that, key) {
          // fast case
          var index = fastKey(key);
          var entry;
          if (index !== "F") return that._i[index];
          // frozen object case
          for (entry = that._f; entry; entry = entry.n) {
            if (entry.k == key) return entry;
          }
        };

        module.exports = {
          getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
            var C = wrapper(function(that, iterable) {
              anInstance(that, C, NAME, "_i");
              that._t = NAME; // collection type
              that._i = create(null); // index
              that._f = undefined; // first entry
              that._l = undefined; // last entry
              that[SIZE] = 0; // size
              if (iterable != undefined)
                forOf(iterable, IS_MAP, that[ADDER], that);
            });
            redefineAll(C.prototype, {
              // 23.1.3.1 Map.prototype.clear()
              // 23.2.3.2 Set.prototype.clear()
              clear: function clear() {
                for (
                  var that = validate(this, NAME),
                    data = that._i,
                    entry = that._f;
                  entry;
                  entry = entry.n
                ) {
                  entry.r = true;
                  if (entry.p) entry.p = entry.p.n = undefined;
                  delete data[entry.i];
                }
                that._f = that._l = undefined;
                that[SIZE] = 0;
              },
              // 23.1.3.3 Map.prototype.delete(key)
              // 23.2.3.4 Set.prototype.delete(value)
              delete: function(key) {
                var that = validate(this, NAME);
                var entry = getEntry(that, key);
                if (entry) {
                  var next = entry.n;
                  var prev = entry.p;
                  delete that._i[entry.i];
                  entry.r = true;
                  if (prev) prev.n = next;
                  if (next) next.p = prev;
                  if (that._f == entry) that._f = next;
                  if (that._l == entry) that._l = prev;
                  that[SIZE]--;
                }
                return !!entry;
              },
              // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
              // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
              forEach: function forEach(callbackfn /* , that = undefined */) {
                validate(this, NAME);
                var f = ctx(
                  callbackfn,
                  arguments.length > 1 ? arguments[1] : undefined,
                  3
                );
                var entry;
                while ((entry = entry ? entry.n : this._f)) {
                  f(entry.v, entry.k, this);
                  // revert to the last existing entry
                  while (entry && entry.r) entry = entry.p;
                }
              },
              // 23.1.3.7 Map.prototype.has(key)
              // 23.2.3.7 Set.prototype.has(value)
              has: function has(key) {
                return !!getEntry(validate(this, NAME), key);
              }
            });
            if (DESCRIPTORS)
              dP(C.prototype, "size", {
                get: function() {
                  return validate(this, NAME)[SIZE];
                }
              });
            return C;
          },
          def: function(that, key, value) {
            var entry = getEntry(that, key);
            var prev, index;
            // change existing entry
            if (entry) {
              entry.v = value;
              // create new entry
            } else {
              that._l = entry = {
                i: (index = fastKey(key, true)), // <- index
                k: key, // <- key
                v: value, // <- value
                p: (prev = that._l), // <- previous entry
                n: undefined, // <- next entry
                r: false // <- removed
              };
              if (!that._f) that._f = entry;
              if (prev) prev.n = entry;
              that[SIZE]++;
              // add to index
              if (index !== "F") that._i[index] = entry;
            }
            return that;
          },
          getEntry: getEntry,
          setStrong: function(C, NAME, IS_MAP) {
            // add .keys, .values, .entries, [@@iterator]
            // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
            $iterDefine(
              C,
              NAME,
              function(iterated, kind) {
                this._t = validate(iterated, NAME); // target
                this._k = kind; // kind
                this._l = undefined; // previous
              },
              function() {
                var that = this;
                var kind = that._k;
                var entry = that._l;
                // revert to the last existing entry
                while (entry && entry.r) entry = entry.p;
                // get next entry
                if (
                  !that._t ||
                  !(that._l = entry = entry ? entry.n : that._t._f)
                ) {
                  // or finish the iteration
                  that._t = undefined;
                  return step(1);
                }
                // return step by kind
                if (kind == "keys") return step(0, entry.k);
                if (kind == "values") return step(0, entry.v);
                return step(0, [entry.k, entry.v]);
              },
              IS_MAP ? "entries" : "values",
              !IS_MAP,
              true
            );

            // add [@@species], 23.1.2.2, 23.2.2.2
            setSpecies(NAME);
          }
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-to-json.js ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // https://github.com/DavidBruant/Map-Set.prototype.toJSON
        var classof = __webpack_require__(
          /*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js"
        );
        var from = __webpack_require__(
          /*! ./_array-from-iterable */ "./node_modules/core-js/library/modules/_array-from-iterable.js"
        );
        module.exports = function(NAME) {
          return function toJSON() {
            if (classof(this) != NAME)
              throw TypeError(NAME + "#toJSON isn't generic");
            return from(this);
          };
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_collection.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var global = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js"
        );
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js"
        );
        var meta = __webpack_require__(
          /*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js"
        );
        var fails = __webpack_require__(
          /*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js"
        );
        var hide = __webpack_require__(
          /*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js"
        );
        var redefineAll = __webpack_require__(
          /*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js"
        );
        var forOf = __webpack_require__(
          /*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js"
        );
        var anInstance = __webpack_require__(
          /*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js"
        );
        var isObject = __webpack_require__(
          /*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js"
        );
        var setToStringTag = __webpack_require__(
          /*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js"
        );
        var dP = __webpack_require__(
          /*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js"
        ).f;
        var each = __webpack_require__(
          /*! ./_array-methods */ "./node_modules/core-js/library/modules/_array-methods.js"
        )(0);
        var DESCRIPTORS = __webpack_require__(
          /*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"
        );

        module.exports = function(
          NAME,
          wrapper,
          methods,
          common,
          IS_MAP,
          IS_WEAK
        ) {
          var Base = global[NAME];
          var C = Base;
          var ADDER = IS_MAP ? "set" : "add";
          var proto = C && C.prototype;
          var O = {};
          if (
            !DESCRIPTORS ||
            typeof C != "function" ||
            !(
              IS_WEAK ||
              (proto.forEach &&
                !fails(function() {
                  new C().entries().next();
                }))
            )
          ) {
            // create collection constructor
            C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
            redefineAll(C.prototype, methods);
            meta.NEED = true;
          } else {
            C = wrapper(function(target, iterable) {
              anInstance(target, C, NAME, "_c");
              target._c = new Base();
              if (iterable != undefined)
                forOf(iterable, IS_MAP, target[ADDER], target);
            });
            each(
              "add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(
                ","
              ),
              function(KEY) {
                var IS_ADDER = KEY == "add" || KEY == "set";
                if (KEY in proto && !(IS_WEAK && KEY == "clear"))
                  hide(C.prototype, KEY, function(a, b) {
                    anInstance(this, C, KEY);
                    if (!IS_ADDER && IS_WEAK && !isObject(a))
                      return KEY == "get" ? undefined : false;
                    var result = this._c[KEY](a === 0 ? 0 : a, b);
                    return IS_ADDER ? this : result;
                  });
              }
            );
            IS_WEAK ||
              dP(C.prototype, "size", {
                get: function() {
                  return this._c.size;
                }
              });
          }

          setToStringTag(C, NAME);

          O[NAME] = C;
          $export($export.G + $export.W + $export.F, O);

          if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

          return C;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_core.js":
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        var core = (module.exports = { version: "2.6.9" });
        if (typeof __e == "number") __e = core; // eslint-disable-line no-undef

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_ctx.js":
      /*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // optional / simple context binding
        var aFunction = __webpack_require__(
          /*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js"
        );
        module.exports = function(fn, that, length) {
          aFunction(fn);
          if (that === undefined) return fn;
          switch (length) {
            case 1:
              return function(a) {
                return fn.call(that, a);
              };
            case 2:
              return function(a, b) {
                return fn.call(that, a, b);
              };
            case 3:
              return function(a, b, c) {
                return fn.call(that, a, b, c);
              };
          }
          return function(/* ...args */) {
            return fn.apply(that, arguments);
          };
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_defined.js":
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // 7.2.1 RequireObjectCoercible(argument)
        module.exports = function(it) {
          if (it == undefined) throw TypeError("Can't call method on  " + it);
          return it;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_descriptors.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // Thank's IE8 for his funny defineProperty
        module.exports = !__webpack_require__(
          /*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js"
        )(function() {
          return (
            Object.defineProperty({}, "a", {
              get: function() {
                return 7;
              }
            }).a != 7
          );
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_dom-create.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js"
        );
        var document = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js"
        ).document;
        // typeof document.createElement is 'object' in old IE
        var is = isObject(document) && isObject(document.createElement);
        module.exports = function(it) {
          return is ? document.createElement(it) : {};
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
      /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // IE 8- don't enum bug keys
        module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
          ","
        );

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_export.js":
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js"
        );
        var core = __webpack_require__(
          /*! ./_core */ "./node_modules/core-js/library/modules/_core.js"
        );
        var ctx = __webpack_require__(
          /*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js"
        );
        var hide = __webpack_require__(
          /*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js"
        );
        var has = __webpack_require__(
          /*! ./_has */ "./node_modules/core-js/library/modules/_has.js"
        );
        var PROTOTYPE = "prototype";

        var $export = function(type, name, source) {
          var IS_FORCED = type & $export.F;
          var IS_GLOBAL = type & $export.G;
          var IS_STATIC = type & $export.S;
          var IS_PROTO = type & $export.P;
          var IS_BIND = type & $export.B;
          var IS_WRAP = type & $export.W;
          var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
          var expProto = exports[PROTOTYPE];
          var target = IS_GLOBAL
            ? global
            : IS_STATIC
            ? global[name]
            : (global[name] || {})[PROTOTYPE];
          var key, own, out;
          if (IS_GLOBAL) source = name;
          for (key in source) {
            // contains in native
            own = !IS_FORCED && target && target[key] !== undefined;
            if (own && has(exports, key)) continue;
            // export native or passed
            out = own ? target[key] : source[key];
            // prevent global pollution for namespaces
            exports[key] =
              IS_GLOBAL && typeof target[key] != "function"
                ? source[key]
                : // bind timers to global for call from export context
                IS_BIND && own
                ? ctx(out, global)
                : // wrap global constructors for prevent change them in library
                IS_WRAP && target[key] == out
                ? (function(C) {
                    var F = function(a, b, c) {
                      if (this instanceof C) {
                        switch (arguments.length) {
                          case 0:
                            return new C();
                          case 1:
                            return new C(a);
                          case 2:
                            return new C(a, b);
                        }
                        return new C(a, b, c);
                      }
                      return C.apply(this, arguments);
                    };
                    F[PROTOTYPE] = C[PROTOTYPE];
                    return F;
                    // make static versions for prototype methods
                  })(out)
                : IS_PROTO && typeof out == "function"
                ? ctx(Function.call, out)
                : out;
            // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
            if (IS_PROTO) {
              (exports.virtual || (exports.virtual = {}))[key] = out;
              // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
              if (type & $export.R && expProto && !expProto[key])
                hide(expProto, key, out);
            }
          }
        };
        // type bitmap
        $export.F = 1; // forced
        $export.G = 2; // global
        $export.S = 4; // static
        $export.P = 8; // proto
        $export.B = 16; // bind
        $export.W = 32; // wrap
        $export.U = 64; // safe
        $export.R = 128; // real proto method for `library`
        module.exports = $export;

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_fails.js":
      /*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function(exec) {
          try {
            return !!exec();
          } catch (e) {
            return true;
          }
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_for-of.js":
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var ctx = __webpack_require__(
          /*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js"
        );
        var call = __webpack_require__(
          /*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js"
        );
        var isArrayIter = __webpack_require__(
          /*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js"
        );
        var anObject = __webpack_require__(
          /*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js"
        );
        var toLength = __webpack_require__(
          /*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js"
        );
        var getIterFn = __webpack_require__(
          /*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js"
        );
        var BREAK = {};
        var RETURN = {};
        var exports = (module.exports = function(
          iterable,
          entries,
          fn,
          that,
          ITERATOR
        ) {
          var iterFn = ITERATOR
            ? function() {
                return iterable;
              }
            : getIterFn(iterable);
          var f = ctx(fn, that, entries ? 2 : 1);
          var index = 0;
          var length, step, iterator, result;
          if (typeof iterFn != "function")
            throw TypeError(iterable + " is not iterable!");
          // fast case for arrays with default iterator
          if (isArrayIter(iterFn))
            for (length = toLength(iterable.length); length > index; index++) {
              result = entries
                ? f(anObject((step = iterable[index]))[0], step[1])
                : f(iterable[index]);
              if (result === BREAK || result === RETURN) return result;
            }
          else
            for (
              iterator = iterFn.call(iterable);
              !(step = iterator.next()).done;

            ) {
              result = call(iterator, f, step.value, entries);
              if (result === BREAK || result === RETURN) return result;
            }
        });
        exports.BREAK = BREAK;
        exports.RETURN = RETURN;

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_global.js":
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = (module.exports =
          typeof window != "undefined" && window.Math == Math
            ? window
            : typeof self != "undefined" && self.Math == Math
            ? self
            : // eslint-disable-next-line no-new-func
              Function("return this")());
        if (typeof __g == "number") __g = global; // eslint-disable-line no-undef

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_has.js":
      /*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function(it, key) {
          return hasOwnProperty.call(it, key);
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_hide.js":
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var dP = __webpack_require__(
          /*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js"
        );
        var createDesc = __webpack_require__(
          /*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js"
        );
        module.exports = __webpack_require__(
          /*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"
        )
          ? function(object, key, value) {
              return dP.f(object, key, createDesc(1, value));
            }
          : function(object, key, value) {
              object[key] = value;
              return object;
            };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_html.js":
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var document = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js"
        ).document;
        module.exports = document && document.documentElement;

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          !__webpack_require__(
            /*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"
          ) &&
          !__webpack_require__(
            /*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js"
          )(function() {
            return (
              Object.defineProperty(
                __webpack_require__(
                  /*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js"
                )("div"),
                "a",
                {
                  get: function() {
                    return 7;
                  }
                }
              ).a != 7
            );
          });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_invoke.js":
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_invoke.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // fast apply, http://jsperf.lnkit.com/fast-apply/5
        module.exports = function(fn, args, that) {
          var un = that === undefined;
          switch (args.length) {
            case 0:
              return un ? fn() : fn.call(that);
            case 1:
              return un ? fn(args[0]) : fn.call(that, args[0]);
            case 2:
              return un
                ? fn(args[0], args[1])
                : fn.call(that, args[0], args[1]);
            case 3:
              return un
                ? fn(args[0], args[1], args[2])
                : fn.call(that, args[0], args[1], args[2]);
            case 4:
              return un
                ? fn(args[0], args[1], args[2], args[3])
                : fn.call(that, args[0], args[1], args[2], args[3]);
          }
          return fn.apply(that, args);
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_iobject.js":
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        var cof = __webpack_require__(
          /*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js"
        );
        // eslint-disable-next-line no-prototype-builtins
        module.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function(it) {
              return cof(it) == "String" ? it.split("") : Object(it);
            };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
      /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // check on default Array iterator
        var Iterators = __webpack_require__(
          /*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js"
        );
        var ITERATOR = __webpack_require__(
          /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js"
        )("iterator");
        var ArrayProto = Array.prototype;

        module.exports = function(it) {
          return (
            it !== undefined &&
            (Iterators.Array === it || ArrayProto[ITERATOR] === it)
          );
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_is-array.js":
      /*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 7.2.2 IsArray(argument)
        var cof = __webpack_require__(
          /*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js"
        );
        module.exports =
          Array.isArray ||
          function isArray(arg) {
            return cof(arg) == "Array";
          };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_is-object.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function(it) {
          return typeof it === "object"
            ? it !== null
            : typeof it === "function";
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_iter-call.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // call something on iterator step with safe closing on error
        var anObject = __webpack_require__(
          /*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js"
        );
        module.exports = function(iterator, fn, value, entries) {
          try {
            return entries ? fn(anObject(value)[0], value[1]) : fn(value);
            // 7.4.6 IteratorClose(iterator, completion)
          } catch (e) {
            var ret = iterator["return"];
            if (ret !== undefined) anObject(ret.call(iterator));
            throw e;
          }
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_iter-create.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var create = __webpack_require__(
          /*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js"
        );
        var descriptor = __webpack_require__(
          /*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js"
        );
        var setToStringTag = __webpack_require__(
          /*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js"
        );
        var IteratorPrototype = {};

        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        __webpack_require__(
          /*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js"
        )(
          IteratorPrototype,
          __webpack_require__(
            /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js"
          )("iterator"),
          function() {
            return this;
          }
        );

        module.exports = function(Constructor, NAME, next) {
          Constructor.prototype = create(IteratorPrototype, {
            next: descriptor(1, next)
          });
          setToStringTag(Constructor, NAME + " Iterator");
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_iter-define.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var LIBRARY = __webpack_require__(
          /*! ./_library */ "./node_modules/core-js/library/modules/_library.js"
        );
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js"
        );
        var redefine = __webpack_require__(
          /*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js"
        );
        var hide = __webpack_require__(
          /*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js"
        );
        var Iterators = __webpack_require__(
          /*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js"
        );
        var $iterCreate = __webpack_require__(
          /*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js"
        );
        var setToStringTag = __webpack_require__(
          /*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js"
        );
        var getPrototypeOf = __webpack_require__(
          /*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js"
        );
        var ITERATOR = __webpack_require__(
          /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js"
        )("iterator");
        var BUGGY = !([].keys && "next" in [].keys()); // Safari has buggy iterators w/o `next`
        var FF_ITERATOR = "@@iterator";
        var KEYS = "keys";
        var VALUES = "values";

        var returnThis = function() {
          return this;
        };

        module.exports = function(
          Base,
          NAME,
          Constructor,
          next,
          DEFAULT,
          IS_SET,
          FORCED
        ) {
          $iterCreate(Constructor, NAME, next);
          var getMethod = function(kind) {
            if (!BUGGY && kind in proto) return proto[kind];
            switch (kind) {
              case KEYS:
                return function keys() {
                  return new Constructor(this, kind);
                };
              case VALUES:
                return function values() {
                  return new Constructor(this, kind);
                };
            }
            return function entries() {
              return new Constructor(this, kind);
            };
          };
          var TAG = NAME + " Iterator";
          var DEF_VALUES = DEFAULT == VALUES;
          var VALUES_BUG = false;
          var proto = Base.prototype;
          var $native =
            proto[ITERATOR] ||
            proto[FF_ITERATOR] ||
            (DEFAULT && proto[DEFAULT]);
          var $default = $native || getMethod(DEFAULT);
          var $entries = DEFAULT
            ? !DEF_VALUES
              ? $default
              : getMethod("entries")
            : undefined;
          var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
          var methods, key, IteratorPrototype;
          // Fix native
          if ($anyNative) {
            IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
            if (
              IteratorPrototype !== Object.prototype &&
              IteratorPrototype.next
            ) {
              // Set @@toStringTag to native iterators
              setToStringTag(IteratorPrototype, TAG, true);
              // fix for some old engines
              if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function")
                hide(IteratorPrototype, ITERATOR, returnThis);
            }
          }
          // fix Array#{values, @@iterator}.name in V8 / FF
          if (DEF_VALUES && $native && $native.name !== VALUES) {
            VALUES_BUG = true;
            $default = function values() {
              return $native.call(this);
            };
          }
          // Define iterator
          if (
            (!LIBRARY || FORCED) &&
            (BUGGY || VALUES_BUG || !proto[ITERATOR])
          ) {
            hide(proto, ITERATOR, $default);
          }
          // Plug for library
          Iterators[NAME] = $default;
          Iterators[TAG] = returnThis;
          if (DEFAULT) {
            methods = {
              values: DEF_VALUES ? $default : getMethod(VALUES),
              keys: IS_SET ? $default : getMethod(KEYS),
              entries: $entries
            };
            if (FORCED)
              for (key in methods) {
                if (!(key in proto)) redefine(proto, key, methods[key]);
              }
            else
              $export(
                $export.P + $export.F * (BUGGY || VALUES_BUG),
                NAME,
                methods
              );
          }
          return methods;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_iter-detect.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var ITERATOR = __webpack_require__(
          /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js"
        )("iterator");
        var SAFE_CLOSING = false;

        try {
          var riter = [7][ITERATOR]();
          riter["return"] = function() {
            SAFE_CLOSING = true;
          };
          // eslint-disable-next-line no-throw-literal
          Array.from(riter, function() {
            throw 2;
          });
        } catch (e) {
          /* empty */
        }

        module.exports = function(exec, skipClosing) {
          if (!skipClosing && !SAFE_CLOSING) return false;
          var safe = false;
          try {
            var arr = [7];
            var iter = arr[ITERATOR]();
            iter.next = function() {
              return { done: (safe = true) };
            };
            arr[ITERATOR] = function() {
              return iter;
            };
            exec(arr);
          } catch (e) {
            /* empty */
          }
          return safe;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_iter-step.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function(done, value) {
          return { value: value, done: !!done };
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_iterators.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = {};

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_library.js":
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = true;

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_meta.js":
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var META = __webpack_require__(
          /*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js"
        )("meta");
        var isObject = __webpack_require__(
          /*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js"
        );
        var has = __webpack_require__(
          /*! ./_has */ "./node_modules/core-js/library/modules/_has.js"
        );
        var setDesc = __webpack_require__(
          /*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js"
        ).f;
        var id = 0;
        var isExtensible =
          Object.isExtensible ||
          function() {
            return true;
          };
        var FREEZE = !__webpack_require__(
          /*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js"
        )(function() {
          return isExtensible(Object.preventExtensions({}));
        });
        var setMeta = function(it) {
          setDesc(it, META, {
            value: {
              i: "O" + ++id, // object ID
              w: {} // weak collections IDs
            }
          });
        };
        var fastKey = function(it, create) {
          // return primitive with prefix
          if (!isObject(it))
            return typeof it == "symbol"
              ? it
              : (typeof it == "string" ? "S" : "P") + it;
          if (!has(it, META)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible(it)) return "F";
            // not necessary to add metadata
            if (!create) return "E";
            // add missing metadata
            setMeta(it);
            // return object ID
          }
          return it[META].i;
        };
        var getWeak = function(it, create) {
          if (!has(it, META)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible(it)) return true;
            // not necessary to add metadata
            if (!create) return false;
            // add missing metadata
            setMeta(it);
            // return hash weak collections IDs
          }
          return it[META].w;
        };
        // add metadata on freeze-family methods calling
        var onFreeze = function(it) {
          if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META))
            setMeta(it);
          return it;
        };
        var meta = (module.exports = {
          KEY: META,
          NEED: false,
          fastKey: fastKey,
          getWeak: getWeak,
          onFreeze: onFreeze
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_microtask.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_microtask.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js"
        );
        var macrotask = __webpack_require__(
          /*! ./_task */ "./node_modules/core-js/library/modules/_task.js"
        ).set;
        var Observer = global.MutationObserver || global.WebKitMutationObserver;
        var process = global.process;
        var Promise = global.Promise;
        var isNode =
          __webpack_require__(
            /*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js"
          )(process) == "process";

        module.exports = function() {
          var head, last, notify;

          var flush = function() {
            var parent, fn;
            if (isNode && (parent = process.domain)) parent.exit();
            while (head) {
              fn = head.fn;
              head = head.next;
              try {
                fn();
              } catch (e) {
                if (head) notify();
                else last = undefined;
                throw e;
              }
            }
            last = undefined;
            if (parent) parent.enter();
          };

          // Node.js
          if (isNode) {
            notify = function() {
              process.nextTick(flush);
            };
            // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
          } else if (
            Observer &&
            !(global.navigator && global.navigator.standalone)
          ) {
            var toggle = true;
            var node = document.createTextNode("");
            new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
            notify = function() {
              node.data = toggle = !toggle;
            };
            // environments with maybe non-completely correct, but existent Promise
          } else if (Promise && Promise.resolve) {
            // Promise.resolve without an argument throws an error in LG WebOS 2
            var promise = Promise.resolve(undefined);
            notify = function() {
              promise.then(flush);
            };
            // for other environments - macrotask based on:
            // - setImmediate
            // - MessageChannel
            // - window.postMessag
            // - onreadystatechange
            // - setTimeout
          } else {
            notify = function() {
              // strange IE + webpack dev server bug - use .call(global)
              macrotask.call(global, flush);
            };
          }

          return function(fn) {
            var task = { fn: fn, next: undefined };
            if (last) last.next = task;
            if (!head) {
              head = task;
              notify();
            }
            last = task;
          };
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        // 25.4.1.5 NewPromiseCapability(C)
        var aFunction = __webpack_require__(
          /*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js"
        );

        function PromiseCapability(C) {
          var resolve, reject;
          this.promise = new C(function($$resolve, $$reject) {
            if (resolve !== undefined || reject !== undefined)
              throw TypeError("Bad Promise constructor");
            resolve = $$resolve;
            reject = $$reject;
          });
          this.resolve = aFunction(resolve);
          this.reject = aFunction(reject);
        }

        module.exports.f = function(C) {
          return new PromiseCapability(C);
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-create.js":
      /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        var anObject = __webpack_require__(
          /*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js"
        );
        var dPs = __webpack_require__(
          /*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js"
        );
        var enumBugKeys = __webpack_require__(
          /*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js"
        );
        var IE_PROTO = __webpack_require__(
          /*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js"
        )("IE_PROTO");
        var Empty = function() {
          /* empty */
        };
        var PROTOTYPE = "prototype";

        // Create object with fake `null` prototype: use iframe Object with cleared prototype
        var createDict = function() {
          // Thrash, waste and sodomy: IE GC bug
          var iframe = __webpack_require__(
            /*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js"
          )("iframe");
          var i = enumBugKeys.length;
          var lt = "<";
          var gt = ">";
          var iframeDocument;
          iframe.style.display = "none";
          __webpack_require__(
            /*! ./_html */ "./node_modules/core-js/library/modules/_html.js"
          ).appendChild(iframe);
          iframe.src = "javascript:"; // eslint-disable-line no-script-url
          // createDict = iframe.contentWindow.Object;
          // html.removeChild(iframe);
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(
            lt + "script" + gt + "document.F=Object" + lt + "/script" + gt
          );
          iframeDocument.close();
          createDict = iframeDocument.F;
          while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
          return createDict();
        };

        module.exports =
          Object.create ||
          function create(O, Properties) {
            var result;
            if (O !== null) {
              Empty[PROTOTYPE] = anObject(O);
              result = new Empty();
              Empty[PROTOTYPE] = null;
              // add "__proto__" for Object.getPrototypeOf polyfill
              result[IE_PROTO] = O;
            } else result = createDict();
            return Properties === undefined ? result : dPs(result, Properties);
          };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-dp.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(
          /*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js"
        );
        var IE8_DOM_DEFINE = __webpack_require__(
          /*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js"
        );
        var toPrimitive = __webpack_require__(
          /*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js"
        );
        var dP = Object.defineProperty;

        exports.f = __webpack_require__(
          /*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"
        )
          ? Object.defineProperty
          : function defineProperty(O, P, Attributes) {
              anObject(O);
              P = toPrimitive(P, true);
              anObject(Attributes);
              if (IE8_DOM_DEFINE)
                try {
                  return dP(O, P, Attributes);
                } catch (e) {
                  /* empty */
                }
              if ("get" in Attributes || "set" in Attributes)
                throw TypeError("Accessors not supported!");
              if ("value" in Attributes) O[P] = Attributes.value;
              return O;
            };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-dps.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var dP = __webpack_require__(
          /*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js"
        );
        var anObject = __webpack_require__(
          /*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js"
        );
        var getKeys = __webpack_require__(
          /*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js"
        );

        module.exports = __webpack_require__(
          /*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"
        )
          ? Object.defineProperties
          : function defineProperties(O, Properties) {
              anObject(O);
              var keys = getKeys(Properties);
              var length = keys.length;
              var i = 0;
              var P;
              while (length > i) dP.f(O, (P = keys[i++]), Properties[P]);
              return O;
            };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-gopd.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var pIE = __webpack_require__(
          /*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js"
        );
        var createDesc = __webpack_require__(
          /*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js"
        );
        var toIObject = __webpack_require__(
          /*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js"
        );
        var toPrimitive = __webpack_require__(
          /*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js"
        );
        var has = __webpack_require__(
          /*! ./_has */ "./node_modules/core-js/library/modules/_has.js"
        );
        var IE8_DOM_DEFINE = __webpack_require__(
          /*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js"
        );
        var gOPD = Object.getOwnPropertyDescriptor;

        exports.f = __webpack_require__(
          /*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"
        )
          ? gOPD
          : function getOwnPropertyDescriptor(O, P) {
              O = toIObject(O);
              P = toPrimitive(P, true);
              if (IE8_DOM_DEFINE)
                try {
                  return gOPD(O, P);
                } catch (e) {
                  /* empty */
                }
              if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
            };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
      /*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
        var toIObject = __webpack_require__(
          /*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js"
        );
        var gOPN = __webpack_require__(
          /*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js"
        ).f;
        var toString = {}.toString;

        var windowNames =
          typeof window == "object" && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [];

        var getWindowNames = function(it) {
          try {
            return gOPN(it);
          } catch (e) {
            return windowNames.slice();
          }
        };

        module.exports.f = function getOwnPropertyNames(it) {
          return windowNames && toString.call(it) == "[object Window]"
            ? getWindowNames(it)
            : gOPN(toIObject(it));
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-gopn.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
        var $keys = __webpack_require__(
          /*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js"
        );
        var hiddenKeys = __webpack_require__(
          /*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js"
        ).concat("length", "prototype");

        exports.f =
          Object.getOwnPropertyNames ||
          function getOwnPropertyNames(O) {
            return $keys(O, hiddenKeys);
          };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-gpo.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
        var has = __webpack_require__(
          /*! ./_has */ "./node_modules/core-js/library/modules/_has.js"
        );
        var toObject = __webpack_require__(
          /*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js"
        );
        var IE_PROTO = __webpack_require__(
          /*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js"
        )("IE_PROTO");
        var ObjectProto = Object.prototype;

        module.exports =
          Object.getPrototypeOf ||
          function(O) {
            O = toObject(O);
            if (has(O, IE_PROTO)) return O[IE_PROTO];
            if (
              typeof O.constructor == "function" &&
              O instanceof O.constructor
            ) {
              return O.constructor.prototype;
            }
            return O instanceof Object ? ObjectProto : null;
          };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var has = __webpack_require__(
          /*! ./_has */ "./node_modules/core-js/library/modules/_has.js"
        );
        var toIObject = __webpack_require__(
          /*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js"
        );
        var arrayIndexOf = __webpack_require__(
          /*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js"
        )(false);
        var IE_PROTO = __webpack_require__(
          /*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js"
        )("IE_PROTO");

        module.exports = function(object, names) {
          var O = toIObject(object);
          var i = 0;
          var result = [];
          var key;
          for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
          // Don't enum bug & hidden keys
          while (names.length > i)
            if (has(O, (key = names[i++]))) {
              ~arrayIndexOf(result, key) || result.push(key);
            }
          return result;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-keys.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.14 / 15.2.3.14 Object.keys(O)
        var $keys = __webpack_require__(
          /*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js"
        );
        var enumBugKeys = __webpack_require__(
          /*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js"
        );

        module.exports =
          Object.keys ||
          function keys(O) {
            return $keys(O, enumBugKeys);
          };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-pie.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        exports.f = {}.propertyIsEnumerable;

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-sap.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // most Object methods by ES6 should accept primitives
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js"
        );
        var core = __webpack_require__(
          /*! ./_core */ "./node_modules/core-js/library/modules/_core.js"
        );
        var fails = __webpack_require__(
          /*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js"
        );
        module.exports = function(KEY, exec) {
          var fn = (core.Object || {})[KEY] || Object[KEY];
          var exp = {};
          exp[KEY] = exec(fn);
          $export(
            $export.S +
              $export.F *
                fails(function() {
                  fn(1);
                }),
            "Object",
            exp
          );
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_parse-float.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_parse-float.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var $parseFloat = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js"
        ).parseFloat;
        var $trim = __webpack_require__(
          /*! ./_string-trim */ "./node_modules/core-js/library/modules/_string-trim.js"
        ).trim;

        module.exports =
          1 /
            $parseFloat(
              __webpack_require__(
                /*! ./_string-ws */ "./node_modules/core-js/library/modules/_string-ws.js"
              ) + "-0"
            ) !==
          -Infinity
            ? function parseFloat(str) {
                var string = $trim(String(str), 3);
                var result = $parseFloat(string);
                return result === 0 && string.charAt(0) == "-" ? -0 : result;
              }
            : $parseFloat;

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_parse-int.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_parse-int.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var $parseInt = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js"
        ).parseInt;
        var $trim = __webpack_require__(
          /*! ./_string-trim */ "./node_modules/core-js/library/modules/_string-trim.js"
        ).trim;
        var ws = __webpack_require__(
          /*! ./_string-ws */ "./node_modules/core-js/library/modules/_string-ws.js"
        );
        var hex = /^[-+]?0[xX]/;

        module.exports =
          $parseInt(ws + "08") !== 8 || $parseInt(ws + "0x16") !== 22
            ? function parseInt(str, radix) {
                var string = $trim(String(str), 3);
                return $parseInt(
                  string,
                  radix >>> 0 || (hex.test(string) ? 16 : 10)
                );
              }
            : $parseInt;

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_perform.js":
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_perform.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function(exec) {
          try {
            return { e: false, v: exec() };
          } catch (e) {
            return { e: true, v: e };
          }
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
      /*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(
          /*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js"
        );
        var isObject = __webpack_require__(
          /*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js"
        );
        var newPromiseCapability = __webpack_require__(
          /*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js"
        );

        module.exports = function(C, x) {
          anObject(C);
          if (isObject(x) && x.constructor === C) return x;
          var promiseCapability = newPromiseCapability.f(C);
          var resolve = promiseCapability.resolve;
          resolve(x);
          return promiseCapability.promise;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_property-desc.js":
      /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function(bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
          };
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_redefine-all.js":
      /*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var hide = __webpack_require__(
          /*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js"
        );
        module.exports = function(target, src, safe) {
          for (var key in src) {
            if (safe && target[key]) target[key] = src[key];
            else hide(target, key, src[key]);
          }
          return target;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_redefine.js":
      /*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js"
        );

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        // https://tc39.github.io/proposal-setmap-offrom/
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js"
        );
        var aFunction = __webpack_require__(
          /*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js"
        );
        var ctx = __webpack_require__(
          /*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js"
        );
        var forOf = __webpack_require__(
          /*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js"
        );

        module.exports = function(COLLECTION) {
          $export($export.S, COLLECTION, {
            from: function from(source /* , mapFn, thisArg */) {
              var mapFn = arguments[1];
              var mapping, A, n, cb;
              aFunction(this);
              mapping = mapFn !== undefined;
              if (mapping) aFunction(mapFn);
              if (source == undefined) return new this();
              A = [];
              if (mapping) {
                n = 0;
                cb = ctx(mapFn, arguments[2], 2);
                forOf(source, false, function(nextItem) {
                  A.push(cb(nextItem, n++));
                });
              } else {
                forOf(source, false, A.push, A);
              }
              return new this(A);
            }
          });
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        // https://tc39.github.io/proposal-setmap-offrom/
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js"
        );

        module.exports = function(COLLECTION) {
          $export($export.S, COLLECTION, {
            of: function of() {
              var length = arguments.length;
              var A = new Array(length);
              while (length--) A[length] = arguments[length];
              return new this(A);
            }
          });
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_set-proto.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // Works with __proto__ only. Old v8 can't work with null proto objects.
        /* eslint-disable no-proto */
        var isObject = __webpack_require__(
          /*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js"
        );
        var anObject = __webpack_require__(
          /*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js"
        );
        var check = function(O, proto) {
          anObject(O);
          if (!isObject(proto) && proto !== null)
            throw TypeError(proto + ": can't set as prototype!");
        };
        module.exports = {
          set:
            Object.setPrototypeOf ||
            ("__proto__" in {} // eslint-disable-line
              ? (function(test, buggy, set) {
                  try {
                    set = __webpack_require__(
                      /*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js"
                    )(
                      Function.call,
                      __webpack_require__(
                        /*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js"
                      ).f(Object.prototype, "__proto__").set,
                      2
                    );
                    set(test, []);
                    buggy = !(test instanceof Array);
                  } catch (e) {
                    buggy = true;
                  }
                  return function setPrototypeOf(O, proto) {
                    check(O, proto);
                    if (buggy) O.__proto__ = proto;
                    else set(O, proto);
                    return O;
                  };
                })({}, false)
              : undefined),
          check: check
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_set-species.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var global = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js"
        );
        var core = __webpack_require__(
          /*! ./_core */ "./node_modules/core-js/library/modules/_core.js"
        );
        var dP = __webpack_require__(
          /*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js"
        );
        var DESCRIPTORS = __webpack_require__(
          /*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"
        );
        var SPECIES = __webpack_require__(
          /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js"
        )("species");

        module.exports = function(KEY) {
          var C = typeof core[KEY] == "function" ? core[KEY] : global[KEY];
          if (DESCRIPTORS && C && !C[SPECIES])
            dP.f(C, SPECIES, {
              configurable: true,
              get: function() {
                return this;
              }
            });
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var def = __webpack_require__(
          /*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js"
        ).f;
        var has = __webpack_require__(
          /*! ./_has */ "./node_modules/core-js/library/modules/_has.js"
        );
        var TAG = __webpack_require__(
          /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js"
        )("toStringTag");

        module.exports = function(it, tag, stat) {
          if (it && !has((it = stat ? it : it.prototype), TAG))
            def(it, TAG, { configurable: true, value: tag });
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_shared-key.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var shared = __webpack_require__(
          /*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js"
        )("keys");
        var uid = __webpack_require__(
          /*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js"
        );
        module.exports = function(key) {
          return shared[key] || (shared[key] = uid(key));
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_shared.js":
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var core = __webpack_require__(
          /*! ./_core */ "./node_modules/core-js/library/modules/_core.js"
        );
        var global = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js"
        );
        var SHARED = "__core-js_shared__";
        var store = global[SHARED] || (global[SHARED] = {});

        (module.exports = function(key, value) {
          return store[key] || (store[key] = value !== undefined ? value : {});
        })("versions", []).push({
          version: core.version,
          mode: __webpack_require__(
            /*! ./_library */ "./node_modules/core-js/library/modules/_library.js"
          )
            ? "pure"
            : "global",
          copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_species-constructor.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 7.3.20 SpeciesConstructor(O, defaultConstructor)
        var anObject = __webpack_require__(
          /*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js"
        );
        var aFunction = __webpack_require__(
          /*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js"
        );
        var SPECIES = __webpack_require__(
          /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js"
        )("species");
        module.exports = function(O, D) {
          var C = anObject(O).constructor;
          var S;
          return C === undefined || (S = anObject(C)[SPECIES]) == undefined
            ? D
            : aFunction(S);
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_string-at.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(
          /*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js"
        );
        var defined = __webpack_require__(
          /*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js"
        );
        // true  -> String#at
        // false -> String#codePointAt
        module.exports = function(TO_STRING) {
          return function(that, pos) {
            var s = String(defined(that));
            var i = toInteger(pos);
            var l = s.length;
            var a, b;
            if (i < 0 || i >= l) return TO_STRING ? "" : undefined;
            a = s.charCodeAt(i);
            return a < 0xd800 ||
              a > 0xdbff ||
              i + 1 === l ||
              (b = s.charCodeAt(i + 1)) < 0xdc00 ||
              b > 0xdfff
              ? TO_STRING
                ? s.charAt(i)
                : a
              : TO_STRING
              ? s.slice(i, i + 2)
              : ((a - 0xd800) << 10) + (b - 0xdc00) + 0x10000;
          };
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_string-trim.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-trim.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js"
        );
        var defined = __webpack_require__(
          /*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js"
        );
        var fails = __webpack_require__(
          /*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js"
        );
        var spaces = __webpack_require__(
          /*! ./_string-ws */ "./node_modules/core-js/library/modules/_string-ws.js"
        );
        var space = "[" + spaces + "]";
        var non = "\u200b\u0085";
        var ltrim = RegExp("^" + space + space + "*");
        var rtrim = RegExp(space + space + "*$");

        var exporter = function(KEY, exec, ALIAS) {
          var exp = {};
          var FORCE = fails(function() {
            return !!spaces[KEY]() || non[KEY]() != non;
          });
          var fn = (exp[KEY] = FORCE ? exec(trim) : spaces[KEY]);
          if (ALIAS) exp[ALIAS] = fn;
          $export($export.P + $export.F * FORCE, "String", exp);
        };

        // 1 -> String#trimLeft
        // 2 -> String#trimRight
        // 3 -> String#trim
        var trim = (exporter.trim = function(string, TYPE) {
          string = String(defined(string));
          if (TYPE & 1) string = string.replace(ltrim, "");
          if (TYPE & 2) string = string.replace(rtrim, "");
          return string;
        });

        module.exports = exporter;

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_string-ws.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-ws.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          "\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003" +
          "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_task.js":
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_task.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var ctx = __webpack_require__(
          /*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js"
        );
        var invoke = __webpack_require__(
          /*! ./_invoke */ "./node_modules/core-js/library/modules/_invoke.js"
        );
        var html = __webpack_require__(
          /*! ./_html */ "./node_modules/core-js/library/modules/_html.js"
        );
        var cel = __webpack_require__(
          /*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js"
        );
        var global = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js"
        );
        var process = global.process;
        var setTask = global.setImmediate;
        var clearTask = global.clearImmediate;
        var MessageChannel = global.MessageChannel;
        var Dispatch = global.Dispatch;
        var counter = 0;
        var queue = {};
        var ONREADYSTATECHANGE = "onreadystatechange";
        var defer, channel, port;
        var run = function() {
          var id = +this;
          // eslint-disable-next-line no-prototype-builtins
          if (queue.hasOwnProperty(id)) {
            var fn = queue[id];
            delete queue[id];
            fn();
          }
        };
        var listener = function(event) {
          run.call(event.data);
        };
        // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
        if (!setTask || !clearTask) {
          setTask = function setImmediate(fn) {
            var args = [];
            var i = 1;
            while (arguments.length > i) args.push(arguments[i++]);
            queue[++counter] = function() {
              // eslint-disable-next-line no-new-func
              invoke(typeof fn == "function" ? fn : Function(fn), args);
            };
            defer(counter);
            return counter;
          };
          clearTask = function clearImmediate(id) {
            delete queue[id];
          };
          // Node.js 0.8-
          if (
            __webpack_require__(
              /*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js"
            )(process) == "process"
          ) {
            defer = function(id) {
              process.nextTick(ctx(run, id, 1));
            };
            // Sphere (JS game engine) Dispatch API
          } else if (Dispatch && Dispatch.now) {
            defer = function(id) {
              Dispatch.now(ctx(run, id, 1));
            };
            // Browsers with MessageChannel, includes WebWorkers
          } else if (MessageChannel) {
            channel = new MessageChannel();
            port = channel.port2;
            channel.port1.onmessage = listener;
            defer = ctx(port.postMessage, port, 1);
            // Browsers with postMessage, skip WebWorkers
            // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
          } else if (
            global.addEventListener &&
            typeof postMessage == "function" &&
            !global.importScripts
          ) {
            defer = function(id) {
              global.postMessage(id + "", "*");
            };
            global.addEventListener("message", listener, false);
            // IE8-
          } else if (ONREADYSTATECHANGE in cel("script")) {
            defer = function(id) {
              html.appendChild(cel("script"))[ONREADYSTATECHANGE] = function() {
                html.removeChild(this);
                run.call(id);
              };
            };
            // Rest old browsers
          } else {
            defer = function(id) {
              setTimeout(ctx(run, id, 1), 0);
            };
          }
        }
        module.exports = {
          set: setTask,
          clear: clearTask
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(
          /*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js"
        );
        var max = Math.max;
        var min = Math.min;
        module.exports = function(index, length) {
          index = toInteger(index);
          return index < 0 ? max(index + length, 0) : min(index, length);
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_to-integer.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // 7.1.4 ToInteger
        var ceil = Math.ceil;
        var floor = Math.floor;
        module.exports = function(it) {
          return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it);
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_to-iobject.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // to indexed object, toObject with fallback for non-array-like ES3 strings
        var IObject = __webpack_require__(
          /*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js"
        );
        var defined = __webpack_require__(
          /*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js"
        );
        module.exports = function(it) {
          return IObject(defined(it));
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_to-length.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 7.1.15 ToLength
        var toInteger = __webpack_require__(
          /*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js"
        );
        var min = Math.min;
        module.exports = function(it) {
          return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_to-object.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 7.1.13 ToObject(argument)
        var defined = __webpack_require__(
          /*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js"
        );
        module.exports = function(it) {
          return Object(defined(it));
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_to-primitive.js":
      /*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 7.1.1 ToPrimitive(input [, PreferredType])
        var isObject = __webpack_require__(
          /*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js"
        );
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module.exports = function(it, S) {
          if (!isObject(it)) return it;
          var fn, val;
          if (
            S &&
            typeof (fn = it.toString) == "function" &&
            !isObject((val = fn.call(it)))
          )
            return val;
          if (
            typeof (fn = it.valueOf) == "function" &&
            !isObject((val = fn.call(it)))
          )
            return val;
          if (
            !S &&
            typeof (fn = it.toString) == "function" &&
            !isObject((val = fn.call(it)))
          )
            return val;
          throw TypeError("Can't convert object to primitive value");
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_uid.js":
      /*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        var id = 0;
        var px = Math.random();
        module.exports = function(key) {
          return "Symbol(".concat(
            key === undefined ? "" : key,
            ")_",
            (++id + px).toString(36)
          );
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_user-agent.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_user-agent.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js"
        );
        var navigator = global.navigator;

        module.exports = (navigator && navigator.userAgent) || "";

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_validate-collection.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js"
        );
        module.exports = function(it, TYPE) {
          if (!isObject(it) || it._t !== TYPE)
            throw TypeError("Incompatible receiver, " + TYPE + " required!");
          return it;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_wks.js":
      /*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var store = __webpack_require__(
          /*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js"
        )("wks");
        var uid = __webpack_require__(
          /*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js"
        );
        var Symbol = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js"
        ).Symbol;
        var USE_SYMBOL = typeof Symbol == "function";

        var $exports = (module.exports = function(name) {
          return (
            store[name] ||
            (store[name] =
              (USE_SYMBOL && Symbol[name]) ||
              (USE_SYMBOL ? Symbol : uid)("Symbol." + name))
          );
        });

        $exports.store = store;

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
      /*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var classof = __webpack_require__(
          /*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js"
        );
        var ITERATOR = __webpack_require__(
          /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js"
        )("iterator");
        var Iterators = __webpack_require__(
          /*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js"
        );
        module.exports = __webpack_require__(
          /*! ./_core */ "./node_modules/core-js/library/modules/_core.js"
        ).getIteratorMethod = function(it) {
          if (it != undefined)
            return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js"
        );

        $export($export.S, "Array", {
          isArray: __webpack_require__(
            /*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js"
          )
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var addToUnscopables = __webpack_require__(
          /*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js"
        );
        var step = __webpack_require__(
          /*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js"
        );
        var Iterators = __webpack_require__(
          /*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js"
        );
        var toIObject = __webpack_require__(
          /*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js"
        );

        // 22.1.3.4 Array.prototype.entries()
        // 22.1.3.13 Array.prototype.keys()
        // 22.1.3.29 Array.prototype.values()
        // 22.1.3.30 Array.prototype[@@iterator]()
        module.exports = __webpack_require__(
          /*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js"
        )(
          Array,
          "Array",
          function(iterated, kind) {
            this._t = toIObject(iterated); // target
            this._i = 0; // next index
            this._k = kind; // kind
            // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
          },
          function() {
            var O = this._t;
            var kind = this._k;
            var index = this._i++;
            if (!O || index >= O.length) {
              this._t = undefined;
              return step(1);
            }
            if (kind == "keys") return step(0, index);
            if (kind == "values") return step(0, O[index]);
            return step(0, [index, O[index]]);
          },
          "values"
        );

        // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
        Iterators.Arguments = Iterators.Array;

        addToUnscopables("keys");
        addToUnscopables("values");
        addToUnscopables("entries");

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.map.js":
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.map.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var strong = __webpack_require__(
          /*! ./_collection-strong */ "./node_modules/core-js/library/modules/_collection-strong.js"
        );
        var validate = __webpack_require__(
          /*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js"
        );
        var MAP = "Map";

        // 23.1 Map Objects
        module.exports = __webpack_require__(
          /*! ./_collection */ "./node_modules/core-js/library/modules/_collection.js"
        )(
          MAP,
          function(get) {
            return function Map() {
              return get(this, arguments.length > 0 ? arguments[0] : undefined);
            };
          },
          {
            // 23.1.3.6 Map.prototype.get(key)
            get: function get(key) {
              var entry = strong.getEntry(validate(this, MAP), key);
              return entry && entry.v;
            },
            // 23.1.3.9 Map.prototype.set(key, value)
            set: function set(key, value) {
              return strong.def(
                validate(this, MAP),
                key === 0 ? 0 : key,
                value
              );
            }
          },
          strong,
          true
        );

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.object.create.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js"
        );
        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        $export($export.S, "Object", {
          create: __webpack_require__(
            /*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js"
          )
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.object.freeze.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.freeze.js ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.5 Object.freeze(O)
        var isObject = __webpack_require__(
          /*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js"
        );
        var meta = __webpack_require__(
          /*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js"
        ).onFreeze;

        __webpack_require__(
          /*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js"
        )("freeze", function($freeze) {
          return function freeze(it) {
            return $freeze && isObject(it) ? $freeze(meta(it)) : it;
          };
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-names.js":
      /*!***********************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-own-property-names.js ***!
  \***********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.7 Object.getOwnPropertyNames(O)
        __webpack_require__(
          /*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js"
        )("getOwnPropertyNames", function() {
          return __webpack_require__(
            /*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js"
          ).f;
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
      /*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.9 Object.getPrototypeOf(O)
        var toObject = __webpack_require__(
          /*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js"
        );
        var $getPrototypeOf = __webpack_require__(
          /*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js"
        );

        __webpack_require__(
          /*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js"
        )("getPrototypeOf", function() {
          return function getPrototypeOf(it) {
            return $getPrototypeOf(toObject(it));
          };
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.14 Object.keys(O)
        var toObject = __webpack_require__(
          /*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js"
        );
        var $keys = __webpack_require__(
          /*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js"
        );

        __webpack_require__(
          /*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js"
        )("keys", function() {
          return function keys(it) {
            return $keys(toObject(it));
          };
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
      /*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.3.19 Object.setPrototypeOf(O, proto)
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js"
        );
        $export($export.S, "Object", {
          setPrototypeOf: __webpack_require__(
            /*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js"
          ).set
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.parse-float.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.parse-float.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js"
        );
        var $parseFloat = __webpack_require__(
          /*! ./_parse-float */ "./node_modules/core-js/library/modules/_parse-float.js"
        );
        // 18.2.4 parseFloat(string)
        $export($export.G + $export.F * (parseFloat != $parseFloat), {
          parseFloat: $parseFloat
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.parse-int.js":
      /*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.parse-int.js ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js"
        );
        var $parseInt = __webpack_require__(
          /*! ./_parse-int */ "./node_modules/core-js/library/modules/_parse-int.js"
        );
        // 18.2.5 parseInt(string, radix)
        $export($export.G + $export.F * (parseInt != $parseInt), {
          parseInt: $parseInt
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.promise.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var LIBRARY = __webpack_require__(
          /*! ./_library */ "./node_modules/core-js/library/modules/_library.js"
        );
        var global = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js"
        );
        var ctx = __webpack_require__(
          /*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js"
        );
        var classof = __webpack_require__(
          /*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js"
        );
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js"
        );
        var isObject = __webpack_require__(
          /*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js"
        );
        var aFunction = __webpack_require__(
          /*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js"
        );
        var anInstance = __webpack_require__(
          /*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js"
        );
        var forOf = __webpack_require__(
          /*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js"
        );
        var speciesConstructor = __webpack_require__(
          /*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js"
        );
        var task = __webpack_require__(
          /*! ./_task */ "./node_modules/core-js/library/modules/_task.js"
        ).set;
        var microtask = __webpack_require__(
          /*! ./_microtask */ "./node_modules/core-js/library/modules/_microtask.js"
        )();
        var newPromiseCapabilityModule = __webpack_require__(
          /*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js"
        );
        var perform = __webpack_require__(
          /*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js"
        );
        var userAgent = __webpack_require__(
          /*! ./_user-agent */ "./node_modules/core-js/library/modules/_user-agent.js"
        );
        var promiseResolve = __webpack_require__(
          /*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js"
        );
        var PROMISE = "Promise";
        var TypeError = global.TypeError;
        var process = global.process;
        var versions = process && process.versions;
        var v8 = (versions && versions.v8) || "";
        var $Promise = global[PROMISE];
        var isNode = classof(process) == "process";
        var empty = function() {
          /* empty */
        };
        var Internal,
          newGenericPromiseCapability,
          OwnPromiseCapability,
          Wrapper;
        var newPromiseCapability = (newGenericPromiseCapability =
          newPromiseCapabilityModule.f);

        var USE_NATIVE = !!(function() {
          try {
            // correct subclassing with @@species support
            var promise = $Promise.resolve(1);
            var FakePromise = ((promise.constructor = {})[
              __webpack_require__(
                /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js"
              )("species")
            ] = function(exec) {
              exec(empty, empty);
            });
            // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
            return (
              (isNode || typeof PromiseRejectionEvent == "function") &&
              promise.then(empty) instanceof FakePromise &&
              // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
              // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
              // we can't detect it synchronously, so just check versions
              v8.indexOf("6.6") !== 0 &&
              userAgent.indexOf("Chrome/66") === -1
            );
          } catch (e) {
            /* empty */
          }
        })();

        // helpers
        var isThenable = function(it) {
          var then;
          return isObject(it) && typeof (then = it.then) == "function"
            ? then
            : false;
        };
        var notify = function(promise, isReject) {
          if (promise._n) return;
          promise._n = true;
          var chain = promise._c;
          microtask(function() {
            var value = promise._v;
            var ok = promise._s == 1;
            var i = 0;
            var run = function(reaction) {
              var handler = ok ? reaction.ok : reaction.fail;
              var resolve = reaction.resolve;
              var reject = reaction.reject;
              var domain = reaction.domain;
              var result, then, exited;
              try {
                if (handler) {
                  if (!ok) {
                    if (promise._h == 2) onHandleUnhandled(promise);
                    promise._h = 1;
                  }
                  if (handler === true) result = value;
                  else {
                    if (domain) domain.enter();
                    result = handler(value); // may throw
                    if (domain) {
                      domain.exit();
                      exited = true;
                    }
                  }
                  if (result === reaction.promise) {
                    reject(TypeError("Promise-chain cycle"));
                  } else if ((then = isThenable(result))) {
                    then.call(result, resolve, reject);
                  } else resolve(result);
                } else reject(value);
              } catch (e) {
                if (domain && !exited) domain.exit();
                reject(e);
              }
            };
            while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
            promise._c = [];
            promise._n = false;
            if (isReject && !promise._h) onUnhandled(promise);
          });
        };
        var onUnhandled = function(promise) {
          task.call(global, function() {
            var value = promise._v;
            var unhandled = isUnhandled(promise);
            var result, handler, console;
            if (unhandled) {
              result = perform(function() {
                if (isNode) {
                  process.emit("unhandledRejection", value, promise);
                } else if ((handler = global.onunhandledrejection)) {
                  handler({ promise: promise, reason: value });
                } else if ((console = global.console) && console.error) {
                  console.error("Unhandled promise rejection", value);
                }
              });
              // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
              promise._h = isNode || isUnhandled(promise) ? 2 : 1;
            }
            promise._a = undefined;
            if (unhandled && result.e) throw result.v;
          });
        };
        var isUnhandled = function(promise) {
          return promise._h !== 1 && (promise._a || promise._c).length === 0;
        };
        var onHandleUnhandled = function(promise) {
          task.call(global, function() {
            var handler;
            if (isNode) {
              process.emit("rejectionHandled", promise);
            } else if ((handler = global.onrejectionhandled)) {
              handler({ promise: promise, reason: promise._v });
            }
          });
        };
        var $reject = function(value) {
          var promise = this;
          if (promise._d) return;
          promise._d = true;
          promise = promise._w || promise; // unwrap
          promise._v = value;
          promise._s = 2;
          if (!promise._a) promise._a = promise._c.slice();
          notify(promise, true);
        };
        var $resolve = function(value) {
          var promise = this;
          var then;
          if (promise._d) return;
          promise._d = true;
          promise = promise._w || promise; // unwrap
          try {
            if (promise === value)
              throw TypeError("Promise can't be resolved itself");
            if ((then = isThenable(value))) {
              microtask(function() {
                var wrapper = { _w: promise, _d: false }; // wrap
                try {
                  then.call(
                    value,
                    ctx($resolve, wrapper, 1),
                    ctx($reject, wrapper, 1)
                  );
                } catch (e) {
                  $reject.call(wrapper, e);
                }
              });
            } else {
              promise._v = value;
              promise._s = 1;
              notify(promise, false);
            }
          } catch (e) {
            $reject.call({ _w: promise, _d: false }, e); // wrap
          }
        };

        // constructor polyfill
        if (!USE_NATIVE) {
          // 25.4.3.1 Promise(executor)
          $Promise = function Promise(executor) {
            anInstance(this, $Promise, PROMISE, "_h");
            aFunction(executor);
            Internal.call(this);
            try {
              executor(ctx($resolve, this, 1), ctx($reject, this, 1));
            } catch (err) {
              $reject.call(this, err);
            }
          };
          // eslint-disable-next-line no-unused-vars
          Internal = function Promise(executor) {
            this._c = []; // <- awaiting reactions
            this._a = undefined; // <- checked in isUnhandled reactions
            this._s = 0; // <- state
            this._d = false; // <- done
            this._v = undefined; // <- value
            this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
            this._n = false; // <- notify
          };
          Internal.prototype = __webpack_require__(
            /*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js"
          )($Promise.prototype, {
            // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
            then: function then(onFulfilled, onRejected) {
              var reaction = newPromiseCapability(
                speciesConstructor(this, $Promise)
              );
              reaction.ok =
                typeof onFulfilled == "function" ? onFulfilled : true;
              reaction.fail = typeof onRejected == "function" && onRejected;
              reaction.domain = isNode ? process.domain : undefined;
              this._c.push(reaction);
              if (this._a) this._a.push(reaction);
              if (this._s) notify(this, false);
              return reaction.promise;
            },
            // 25.4.5.1 Promise.prototype.catch(onRejected)
            catch: function(onRejected) {
              return this.then(undefined, onRejected);
            }
          });
          OwnPromiseCapability = function() {
            var promise = new Internal();
            this.promise = promise;
            this.resolve = ctx($resolve, promise, 1);
            this.reject = ctx($reject, promise, 1);
          };
          newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
            return C === $Promise || C === Wrapper
              ? new OwnPromiseCapability(C)
              : newGenericPromiseCapability(C);
          };
        }

        $export($export.G + $export.W + $export.F * !USE_NATIVE, {
          Promise: $Promise
        });
        __webpack_require__(
          /*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js"
        )($Promise, PROMISE);
        __webpack_require__(
          /*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js"
        )(PROMISE);
        Wrapper = __webpack_require__(
          /*! ./_core */ "./node_modules/core-js/library/modules/_core.js"
        )[PROMISE];

        // statics
        $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
          // 25.4.4.5 Promise.reject(r)
          reject: function reject(r) {
            var capability = newPromiseCapability(this);
            var $$reject = capability.reject;
            $$reject(r);
            return capability.promise;
          }
        });
        $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
          // 25.4.4.6 Promise.resolve(x)
          resolve: function resolve(x) {
            return promiseResolve(
              LIBRARY && this === Wrapper ? $Promise : this,
              x
            );
          }
        });
        $export(
          $export.S +
            $export.F *
              !(
                USE_NATIVE &&
                __webpack_require__(
                  /*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js"
                )(function(iter) {
                  $Promise.all(iter)["catch"](empty);
                })
              ),
          PROMISE,
          {
            // 25.4.4.1 Promise.all(iterable)
            all: function all(iterable) {
              var C = this;
              var capability = newPromiseCapability(C);
              var resolve = capability.resolve;
              var reject = capability.reject;
              var result = perform(function() {
                var values = [];
                var index = 0;
                var remaining = 1;
                forOf(iterable, false, function(promise) {
                  var $index = index++;
                  var alreadyCalled = false;
                  values.push(undefined);
                  remaining++;
                  C.resolve(promise).then(function(value) {
                    if (alreadyCalled) return;
                    alreadyCalled = true;
                    values[$index] = value;
                    --remaining || resolve(values);
                  }, reject);
                });
                --remaining || resolve(values);
              });
              if (result.e) reject(result.v);
              return capability.promise;
            },
            // 25.4.4.4 Promise.race(iterable)
            race: function race(iterable) {
              var C = this;
              var capability = newPromiseCapability(C);
              var reject = capability.reject;
              var result = perform(function() {
                forOf(iterable, false, function(promise) {
                  C.resolve(promise).then(capability.resolve, reject);
                });
              });
              if (result.e) reject(result.v);
              return capability.promise;
            }
          }
        );

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.set.js":
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.set.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var strong = __webpack_require__(
          /*! ./_collection-strong */ "./node_modules/core-js/library/modules/_collection-strong.js"
        );
        var validate = __webpack_require__(
          /*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js"
        );
        var SET = "Set";

        // 23.2 Set Objects
        module.exports = __webpack_require__(
          /*! ./_collection */ "./node_modules/core-js/library/modules/_collection.js"
        )(
          SET,
          function(get) {
            return function Set() {
              return get(this, arguments.length > 0 ? arguments[0] : undefined);
            };
          },
          {
            // 23.2.3.1 Set.prototype.add(value)
            add: function add(value) {
              return strong.def(
                validate(this, SET),
                (value = value === 0 ? 0 : value),
                value
              );
            }
          },
          strong
        );

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var $at = __webpack_require__(
          /*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js"
        )(true);

        // 21.1.3.27 String.prototype[@@iterator]()
        __webpack_require__(
          /*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js"
        )(
          String,
          "String",
          function(iterated) {
            this._t = String(iterated); // target
            this._i = 0; // next index
            // 21.1.5.2.1 %StringIteratorPrototype%.next()
          },
          function() {
            var O = this._t;
            var index = this._i;
            var point;
            if (index >= O.length) return { value: undefined, done: true };
            point = $at(O, index);
            this._i += point.length;
            return { value: point, done: false };
          }
        );

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es7.map.from.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.from.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
        __webpack_require__(
          /*! ./_set-collection-from */ "./node_modules/core-js/library/modules/_set-collection-from.js"
        )("Map");

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es7.map.of.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.of.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
        __webpack_require__(
          /*! ./_set-collection-of */ "./node_modules/core-js/library/modules/_set-collection-of.js"
        )("Map");

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.to-json.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // https://github.com/DavidBruant/Map-Set.prototype.toJSON
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js"
        );

        $export($export.P + $export.R, "Map", {
          toJSON: __webpack_require__(
            /*! ./_collection-to-json */ "./node_modules/core-js/library/modules/_collection-to-json.js"
          )("Map")
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";
        // https://github.com/tc39/proposal-promise-finally

        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js"
        );
        var core = __webpack_require__(
          /*! ./_core */ "./node_modules/core-js/library/modules/_core.js"
        );
        var global = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js"
        );
        var speciesConstructor = __webpack_require__(
          /*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js"
        );
        var promiseResolve = __webpack_require__(
          /*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js"
        );

        $export($export.P + $export.R, "Promise", {
          finally: function(onFinally) {
            var C = speciesConstructor(this, core.Promise || global.Promise);
            var isFunction = typeof onFinally == "function";
            return this.then(
              isFunction
                ? function(x) {
                    return promiseResolve(C, onFinally()).then(function() {
                      return x;
                    });
                  }
                : onFinally,
              isFunction
                ? function(e) {
                    return promiseResolve(C, onFinally()).then(function() {
                      throw e;
                    });
                  }
                : onFinally
            );
          }
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        // https://github.com/tc39/proposal-promise-try
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js"
        );
        var newPromiseCapability = __webpack_require__(
          /*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js"
        );
        var perform = __webpack_require__(
          /*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js"
        );

        $export($export.S, "Promise", {
          try: function(callbackfn) {
            var promiseCapability = newPromiseCapability.f(this);
            var result = perform(callbackfn);
            (result.e ? promiseCapability.reject : promiseCapability.resolve)(
              result.v
            );
            return promiseCapability.promise;
          }
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es7.set.from.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.from.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
        __webpack_require__(
          /*! ./_set-collection-from */ "./node_modules/core-js/library/modules/_set-collection-from.js"
        )("Set");

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es7.set.of.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.of.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
        __webpack_require__(
          /*! ./_set-collection-of */ "./node_modules/core-js/library/modules/_set-collection-of.js"
        )("Set");

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es7.set.to-json.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.to-json.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // https://github.com/DavidBruant/Map-Set.prototype.toJSON
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js"
        );

        $export($export.P + $export.R, "Set", {
          toJSON: __webpack_require__(
            /*! ./_collection-to-json */ "./node_modules/core-js/library/modules/_collection-to-json.js"
          )("Set")
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
      /*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js"
        );
        var global = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js"
        );
        var hide = __webpack_require__(
          /*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js"
        );
        var Iterators = __webpack_require__(
          /*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js"
        );
        var TO_STRING_TAG = __webpack_require__(
          /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js"
        )("toStringTag");

        var DOMIterables = (
          "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList," +
          "DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement," +
          "MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList," +
          "SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList," +
          "TextTrackList,TouchList"
        ).split(",");

        for (var i = 0; i < DOMIterables.length; i++) {
          var NAME = DOMIterables[i];
          var Collection = global[NAME];
          var proto = Collection && Collection.prototype;
          if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
          Iterators[NAME] = Iterators.Array;
        }

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/web.immediate.js":
      /*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.immediate.js ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js"
        );
        var $task = __webpack_require__(
          /*! ./_task */ "./node_modules/core-js/library/modules/_task.js"
        );
        $export($export.G + $export.B, {
          setImmediate: $task.set,
          clearImmediate: $task.clear
        });

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/base/common/arrays.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/arrays.js ***!
  \*****************************************************************/
      /*! exports provided: tail, tail2, equals, binarySearch, findFirstInSorted, mergeSort, groupBy, coalesce, isFalsyOrEmpty, isNonEmptyArray, distinct, distinctES6, firstIndex, first, flatten, range, arrayInsert, pushToStart, pushToEnd, asArray */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "tail",
          function() {
            return tail;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "tail2",
          function() {
            return tail2;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "equals",
          function() {
            return equals;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "binarySearch",
          function() {
            return binarySearch;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "findFirstInSorted",
          function() {
            return findFirstInSorted;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "mergeSort",
          function() {
            return mergeSort;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "groupBy",
          function() {
            return groupBy;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "coalesce",
          function() {
            return coalesce;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isFalsyOrEmpty",
          function() {
            return isFalsyOrEmpty;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isNonEmptyArray",
          function() {
            return isNonEmptyArray;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "distinct",
          function() {
            return distinct;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "distinctES6",
          function() {
            return distinctES6;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "firstIndex",
          function() {
            return firstIndex;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "first",
          function() {
            return first;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "flatten",
          function() {
            return flatten;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "range",
          function() {
            return range;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "arrayInsert",
          function() {
            return arrayInsert;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "pushToStart",
          function() {
            return pushToStart;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "pushToEnd",
          function() {
            return pushToEnd;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "asArray",
          function() {
            return asArray;
          }
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__
        );

        /**
         * Returns the last element of an array.
         * @param array The array.
         * @param n Which element from the end (default is zero).
         */
        function tail(array, n) {
          if (n === void 0) {
            n = 0;
          }

          return array[array.length - (1 + n)];
        }
        function tail2(arr) {
          if (arr.length === 0) {
            throw new Error("Invalid tail call");
          }

          return [arr.slice(0, arr.length - 1), arr[arr.length - 1]];
        }
        function equals(one, other, itemEquals) {
          if (itemEquals === void 0) {
            itemEquals = function itemEquals(a, b) {
              return a === b;
            };
          }

          if (one === other) {
            return true;
          }

          if (!one || !other) {
            return false;
          }

          if (one.length !== other.length) {
            return false;
          }

          for (var i = 0, len = one.length; i < len; i++) {
            if (!itemEquals(one[i], other[i])) {
              return false;
            }
          }

          return true;
        }
        function binarySearch(array, key, comparator) {
          var low = 0,
            high = array.length - 1;

          while (low <= high) {
            var mid = ((low + high) / 2) | 0;
            var comp = comparator(array[mid], key);

            if (comp < 0) {
              low = mid + 1;
            } else if (comp > 0) {
              high = mid - 1;
            } else {
              return mid;
            }
          }

          return -(low + 1);
        }
        /**
         * Takes a sorted array and a function p. The array is sorted in such a way that all elements where p(x) is false
         * are located before all elements where p(x) is true.
         * @returns the least x for which p(x) is true or array.length if no element fullfills the given function.
         */

        function findFirstInSorted(array, p) {
          var low = 0,
            high = array.length;

          if (high === 0) {
            return 0; // no children
          }

          while (low < high) {
            var mid = Math.floor((low + high) / 2);

            if (p(array[mid])) {
              high = mid;
            } else {
              low = mid + 1;
            }
          }

          return low;
        }
        /**
         * Like `Array#sort` but always stable. Usually runs a little slower `than Array#sort`
         * so only use this when actually needing stable sort.
         */

        function mergeSort(data, compare) {
          _sort(data, compare, 0, data.length - 1, []);

          return data;
        }

        function _merge(a, compare, lo, mid, hi, aux) {
          var leftIdx = lo,
            rightIdx = mid + 1;

          for (var i = lo; i <= hi; i++) {
            aux[i] = a[i];
          }

          for (var i = lo; i <= hi; i++) {
            if (leftIdx > mid) {
              // left side consumed
              a[i] = aux[rightIdx++];
            } else if (rightIdx > hi) {
              // right side consumed
              a[i] = aux[leftIdx++];
            } else if (compare(aux[rightIdx], aux[leftIdx]) < 0) {
              // right element is less -> comes first
              a[i] = aux[rightIdx++];
            } else {
              // left element comes first (less or equal)
              a[i] = aux[leftIdx++];
            }
          }
        }

        function _sort(a, compare, lo, hi, aux) {
          if (hi <= lo) {
            return;
          }

          var mid = (lo + (hi - lo) / 2) | 0;

          _sort(a, compare, lo, mid, aux);

          _sort(a, compare, mid + 1, hi, aux);

          if (compare(a[mid], a[mid + 1]) <= 0) {
            // left and right are sorted and if the last-left element is less
            // or equals than the first-right element there is nothing else
            // to do
            return;
          }

          _merge(a, compare, lo, mid, hi, aux);
        }

        function groupBy(data, compare) {
          var result = [];
          var currentGroup = undefined;

          for (
            var _i = 0, _a = mergeSort(data.slice(0), compare);
            _i < _a.length;
            _i++
          ) {
            var element = _a[_i];

            if (!currentGroup || compare(currentGroup[0], element) !== 0) {
              currentGroup = [element];
              result.push(currentGroup);
            } else {
              currentGroup.push(element);
            }
          }

          return result;
        }
        /**
         * @returns a new array with all falsy values removed. The original array IS NOT modified.
         */

        function coalesce(array) {
          if (!array) {
            return array;
          }

          return array.filter(function(e) {
            return !!e;
          });
        }
        /**
         * @returns false if the provided object is an array and not empty.
         */

        function isFalsyOrEmpty(obj) {
          return (
            !_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(
              obj
            ) || obj.length === 0
          );
        }
        /**
         * @returns True if the provided object is an array and has at least one element.
         */

        function isNonEmptyArray(obj) {
          return (
            _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(
              obj
            ) && obj.length > 0
          );
        }
        /**
         * Removes duplicates from the given array. The optional keyFn allows to specify
         * how elements are checked for equalness by returning a unique string for each.
         */

        function distinct(array, keyFn) {
          if (!keyFn) {
            return array.filter(function(element, position) {
              return array.indexOf(element) === position;
            });
          }

          var seen = _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1___default()(
            null
          );

          return array.filter(function(elem) {
            var key = keyFn(elem);

            if (seen[key]) {
              return false;
            }

            seen[key] = true;
            return true;
          });
        }
        function distinctES6(array) {
          var seen = new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default.a();
          return array.filter(function(element) {
            if (seen.has(element)) {
              return false;
            }

            seen.add(element);
            return true;
          });
        }
        function firstIndex(array, fn) {
          for (var i = 0; i < array.length; i++) {
            var element = array[i];

            if (fn(element)) {
              return i;
            }
          }

          return -1;
        }
        function first(array, fn, notFoundValue) {
          if (notFoundValue === void 0) {
            notFoundValue = undefined;
          }

          var index = firstIndex(array, fn);
          return index < 0 ? notFoundValue : array[index];
        }
        function flatten(arr) {
          var _a;

          return (_a = []).concat.apply(_a, arr);
        }
        function range(arg, to) {
          var from = typeof to === "number" ? arg : 0;

          if (typeof to === "number") {
            from = arg;
          } else {
            from = 0;
            to = arg;
          }

          var result = [];

          if (from <= to) {
            for (var i = from; i < to; i++) {
              result.push(i);
            }
          } else {
            for (var i = from; i > to; i--) {
              result.push(i);
            }
          }

          return result;
        }
        /**
         * Insert `insertArr` inside `target` at `insertIndex`.
         * Please don't touch unless you understand https://jsperf.com/inserting-an-array-within-an-array
         */

        function arrayInsert(target, insertIndex, insertArr) {
          var before = target.slice(0, insertIndex);
          var after = target.slice(insertIndex);
          return before.concat(insertArr, after);
        }
        /**
         * Pushes an element to the start of the array, if found.
         */

        function pushToStart(arr, value) {
          var index = arr.indexOf(value);

          if (index > -1) {
            arr.splice(index, 1);
            arr.unshift(value);
          }
        }
        /**
         * Pushes an element to the end of the array, if found.
         */

        function pushToEnd(arr, value) {
          var index = arr.indexOf(value);

          if (index > -1) {
            arr.splice(index, 1);
            arr.push(value);
          }
        }
        function asArray(x) {
          return _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(
            x
          )
            ? x
            : [x];
        }

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/base/common/cancellation.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/cancellation.js ***!
  \***********************************************************************/
      /*! exports provided: CancellationToken, CancellationTokenSource */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CancellationToken",
          function() {
            return CancellationToken;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CancellationTokenSource",
          function() {
            return CancellationTokenSource;
          }
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./event.js */ "./node_modules/monaco-editor/esm/vs/base/common/event.js"
        );

        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/

        var shortcutEvent = _babel_runtime_corejs2_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_0___default()(
          function(callback, context) {
            var handle = setTimeout(callback.bind(context), 0);
            return {
              dispose: function dispose() {
                clearTimeout(handle);
              }
            };
          }
        );

        var CancellationToken;

        (function(CancellationToken) {
          function isCancellationToken(thing) {
            if (
              thing === CancellationToken.None ||
              thing === CancellationToken.Cancelled
            ) {
              return true;
            }

            if (thing instanceof MutableToken) {
              return true;
            }

            if (!thing || typeof thing !== "object") {
              return false;
            }

            return (
              typeof thing.isCancellationRequested === "boolean" &&
              typeof thing.onCancellationRequested === "function"
            );
          }

          CancellationToken.isCancellationToken = isCancellationToken;
          CancellationToken.None = _babel_runtime_corejs2_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_0___default()(
            {
              isCancellationRequested: false,
              onCancellationRequested:
                _event_js__WEBPACK_IMPORTED_MODULE_1__["Event"].None
            }
          );
          CancellationToken.Cancelled = _babel_runtime_corejs2_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_0___default()(
            {
              isCancellationRequested: true,
              onCancellationRequested: shortcutEvent
            }
          );
        })(CancellationToken || (CancellationToken = {}));

        var MutableToken =
          /** @class */
          (function() {
            function MutableToken() {
              this._isCancelled = false;
              this._emitter = null;
            }

            MutableToken.prototype.cancel = function() {
              if (!this._isCancelled) {
                this._isCancelled = true;

                if (this._emitter) {
                  this._emitter.fire(undefined);

                  this.dispose();
                }
              }
            };

            Object.defineProperty(
              MutableToken.prototype,
              "isCancellationRequested",
              {
                get: function get() {
                  return this._isCancelled;
                },
                enumerable: true,
                configurable: true
              }
            );
            Object.defineProperty(
              MutableToken.prototype,
              "onCancellationRequested",
              {
                get: function get() {
                  if (this._isCancelled) {
                    return shortcutEvent;
                  }

                  if (!this._emitter) {
                    this._emitter = new _event_js__WEBPACK_IMPORTED_MODULE_1__[
                      "Emitter"
                    ]();
                  }

                  return this._emitter.event;
                },
                enumerable: true,
                configurable: true
              }
            );

            MutableToken.prototype.dispose = function() {
              if (this._emitter) {
                this._emitter.dispose();

                this._emitter = null;
              }
            };

            return MutableToken;
          })();

        var CancellationTokenSource =
          /** @class */
          (function() {
            function CancellationTokenSource(parent) {
              this._token = undefined;
              this._parentListener = undefined;
              this._parentListener =
                parent && parent.onCancellationRequested(this.cancel, this);
            }

            Object.defineProperty(CancellationTokenSource.prototype, "token", {
              get: function get() {
                if (!this._token) {
                  // be lazy and create the token only when
                  // actually needed
                  this._token = new MutableToken();
                }

                return this._token;
              },
              enumerable: true,
              configurable: true
            });

            CancellationTokenSource.prototype.cancel = function() {
              if (!this._token) {
                // save an object by returning the default
                // cancelled token when cancellation happens
                // before someone asks for the token
                this._token = CancellationToken.Cancelled;
              } else if (this._token instanceof MutableToken) {
                // actually cancel
                this._token.cancel();
              }
            };

            CancellationTokenSource.prototype.dispose = function() {
              if (this._parentListener) {
                this._parentListener.dispose();
              }

              if (!this._token) {
                // ensure to initialize with an empty token if we had none
                this._token = CancellationToken.None;
              } else if (this._token instanceof MutableToken) {
                // actually dispose
                this._token.dispose();
              }
            };

            return CancellationTokenSource;
          })();

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/base/common/diff/diff.js":
      /*!********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/diff/diff.js ***!
  \********************************************************************/
      /*! exports provided: stringDiff, Debug, MyArray, LcsDiff */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "stringDiff",
          function() {
            return stringDiff;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Debug",
          function() {
            return Debug;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "MyArray",
          function() {
            return MyArray;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "LcsDiff",
          function() {
            return LcsDiff;
          }
        );
        /* harmony import */ var _diffChange_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./diffChange.js */ "./node_modules/monaco-editor/esm/vs/base/common/diff/diffChange.js"
        );
        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/

        function createStringSequence(a) {
          return {
            getLength: function getLength() {
              return a.length;
            },
            getElementAtIndex: function getElementAtIndex(pos) {
              return a.charCodeAt(pos);
            }
          };
        }

        function stringDiff(original, modified, pretty) {
          return new LcsDiff(
            createStringSequence(original),
            createStringSequence(modified)
          ).ComputeDiff(pretty);
        } //
        // The code below has been ported from a C# implementation in VS
        //

        var Debug =
          /** @class */
          (function() {
            function Debug() {}

            Debug.Assert = function(condition, message) {
              if (!condition) {
                throw new Error(message);
              }
            };

            return Debug;
          })();

        var MyArray =
          /** @class */
          (function() {
            function MyArray() {}
            /**
             * Copies a range of elements from an Array starting at the specified source index and pastes
             * them to another Array starting at the specified destination index. The length and the indexes
             * are specified as 64-bit integers.
             * sourceArray:
             *		The Array that contains the data to copy.
             * sourceIndex:
             *		A 64-bit integer that represents the index in the sourceArray at which copying begins.
             * destinationArray:
             *		The Array that receives the data.
             * destinationIndex:
             *		A 64-bit integer that represents the index in the destinationArray at which storing begins.
             * length:
             *		A 64-bit integer that represents the number of elements to copy.
             */

            MyArray.Copy = function(
              sourceArray,
              sourceIndex,
              destinationArray,
              destinationIndex,
              length
            ) {
              for (var i = 0; i < length; i++) {
                destinationArray[destinationIndex + i] =
                  sourceArray[sourceIndex + i];
              }
            };

            return MyArray;
          })();

        //*****************************************************************************
        // LcsDiff.cs
        //
        // An implementation of the difference algorithm described in
        // "An O(ND) Difference Algorithm and its variations" by Eugene W. Myers
        //
        // Copyright (C) 2008 Microsoft Corporation @minifier_do_not_preserve
        //*****************************************************************************
        // Our total memory usage for storing history is (worst-case):
        // 2 * [(MaxDifferencesHistory + 1) * (MaxDifferencesHistory + 1) - 1] * sizeof(int)
        // 2 * [1448*1448 - 1] * 4 = 16773624 = 16MB

        var MaxDifferencesHistory = 1447; //let MaxDifferencesHistory = 100;

        /**
         * A utility class which helps to create the set of DiffChanges from
         * a difference operation. This class accepts original DiffElements and
         * modified DiffElements that are involved in a particular change. The
         * MarktNextChange() method can be called to mark the separation between
         * distinct changes. At the end, the Changes property can be called to retrieve
         * the constructed changes.
         */

        var DiffChangeHelper =
          /** @class */
          (function() {
            /**
             * Constructs a new DiffChangeHelper for the given DiffSequences.
             */
            function DiffChangeHelper() {
              this.m_changes = [];
              this.m_originalStart = Number.MAX_VALUE;
              this.m_modifiedStart = Number.MAX_VALUE;
              this.m_originalCount = 0;
              this.m_modifiedCount = 0;
            }
            /**
             * Marks the beginning of the next change in the set of differences.
             */

            DiffChangeHelper.prototype.MarkNextChange = function() {
              // Only add to the list if there is something to add
              if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
                // Add the new change to our list
                this.m_changes.push(
                  new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](
                    this.m_originalStart,
                    this.m_originalCount,
                    this.m_modifiedStart,
                    this.m_modifiedCount
                  )
                );
              } // Reset for the next change

              this.m_originalCount = 0;
              this.m_modifiedCount = 0;
              this.m_originalStart = Number.MAX_VALUE;
              this.m_modifiedStart = Number.MAX_VALUE;
            };
            /**
             * Adds the original element at the given position to the elements
             * affected by the current change. The modified index gives context
             * to the change position with respect to the original sequence.
             * @param originalIndex The index of the original element to add.
             * @param modifiedIndex The index of the modified element that provides corresponding position in the modified sequence.
             */

            DiffChangeHelper.prototype.AddOriginalElement = function(
              originalIndex,
              modifiedIndex
            ) {
              // The 'true' start index is the smallest of the ones we've seen
              this.m_originalStart = Math.min(
                this.m_originalStart,
                originalIndex
              );
              this.m_modifiedStart = Math.min(
                this.m_modifiedStart,
                modifiedIndex
              );
              this.m_originalCount++;
            };
            /**
             * Adds the modified element at the given position to the elements
             * affected by the current change. The original index gives context
             * to the change position with respect to the modified sequence.
             * @param originalIndex The index of the original element that provides corresponding position in the original sequence.
             * @param modifiedIndex The index of the modified element to add.
             */

            DiffChangeHelper.prototype.AddModifiedElement = function(
              originalIndex,
              modifiedIndex
            ) {
              // The 'true' start index is the smallest of the ones we've seen
              this.m_originalStart = Math.min(
                this.m_originalStart,
                originalIndex
              );
              this.m_modifiedStart = Math.min(
                this.m_modifiedStart,
                modifiedIndex
              );
              this.m_modifiedCount++;
            };
            /**
             * Retrieves all of the changes marked by the class.
             */

            DiffChangeHelper.prototype.getChanges = function() {
              if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
                // Finish up on whatever is left
                this.MarkNextChange();
              }

              return this.m_changes;
            };
            /**
             * Retrieves all of the changes marked by the class in the reverse order
             */

            DiffChangeHelper.prototype.getReverseChanges = function() {
              if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
                // Finish up on whatever is left
                this.MarkNextChange();
              }

              this.m_changes.reverse();
              return this.m_changes;
            };

            return DiffChangeHelper;
          })();
        /**
         * An implementation of the difference algorithm described in
         * "An O(ND) Difference Algorithm and its variations" by Eugene W. Myers
         */

        var LcsDiff =
          /** @class */
          (function() {
            /**
             * Constructs the DiffFinder
             */
            function LcsDiff(
              originalSequence,
              newSequence,
              continueProcessingPredicate
            ) {
              if (continueProcessingPredicate === void 0) {
                continueProcessingPredicate = null;
              }

              this.OriginalSequence = originalSequence;
              this.ModifiedSequence = newSequence;
              this.ContinueProcessingPredicate = continueProcessingPredicate;
              this.m_forwardHistory = [];
              this.m_reverseHistory = [];
            }

            LcsDiff.prototype.ElementsAreEqual = function(
              originalIndex,
              newIndex
            ) {
              return (
                this.OriginalSequence.getElementAtIndex(originalIndex) ===
                this.ModifiedSequence.getElementAtIndex(newIndex)
              );
            };

            LcsDiff.prototype.OriginalElementsAreEqual = function(
              index1,
              index2
            ) {
              return (
                this.OriginalSequence.getElementAtIndex(index1) ===
                this.OriginalSequence.getElementAtIndex(index2)
              );
            };

            LcsDiff.prototype.ModifiedElementsAreEqual = function(
              index1,
              index2
            ) {
              return (
                this.ModifiedSequence.getElementAtIndex(index1) ===
                this.ModifiedSequence.getElementAtIndex(index2)
              );
            };

            LcsDiff.prototype.ComputeDiff = function(pretty) {
              return this._ComputeDiff(
                0,
                this.OriginalSequence.getLength() - 1,
                0,
                this.ModifiedSequence.getLength() - 1,
                pretty
              );
            };
            /**
             * Computes the differences between the original and modified input
             * sequences on the bounded range.
             * @returns An array of the differences between the two input sequences.
             */

            LcsDiff.prototype._ComputeDiff = function(
              originalStart,
              originalEnd,
              modifiedStart,
              modifiedEnd,
              pretty
            ) {
              var quitEarlyArr = [false];
              var changes = this.ComputeDiffRecursive(
                originalStart,
                originalEnd,
                modifiedStart,
                modifiedEnd,
                quitEarlyArr
              );

              if (pretty) {
                // We have to clean up the computed diff to be more intuitive
                // but it turns out this cannot be done correctly until the entire set
                // of diffs have been computed
                return this.PrettifyChanges(changes);
              }

              return changes;
            };
            /**
             * Private helper method which computes the differences on the bounded range
             * recursively.
             * @returns An array of the differences between the two input sequences.
             */

            LcsDiff.prototype.ComputeDiffRecursive = function(
              originalStart,
              originalEnd,
              modifiedStart,
              modifiedEnd,
              quitEarlyArr
            ) {
              quitEarlyArr[0] = false; // Find the start of the differences

              while (
                originalStart <= originalEnd &&
                modifiedStart <= modifiedEnd &&
                this.ElementsAreEqual(originalStart, modifiedStart)
              ) {
                originalStart++;
                modifiedStart++;
              } // Find the end of the differences

              while (
                originalEnd >= originalStart &&
                modifiedEnd >= modifiedStart &&
                this.ElementsAreEqual(originalEnd, modifiedEnd)
              ) {
                originalEnd--;
                modifiedEnd--;
              } // In the special case where we either have all insertions or all deletions or the sequences are identical

              if (originalStart > originalEnd || modifiedStart > modifiedEnd) {
                var changes = void 0;

                if (modifiedStart <= modifiedEnd) {
                  Debug.Assert(
                    originalStart === originalEnd + 1,
                    "originalStart should only be one more than originalEnd"
                  ); // All insertions

                  changes = [
                    new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__[
                      "DiffChange"
                    ](
                      originalStart,
                      0,
                      modifiedStart,
                      modifiedEnd - modifiedStart + 1
                    )
                  ];
                } else if (originalStart <= originalEnd) {
                  Debug.Assert(
                    modifiedStart === modifiedEnd + 1,
                    "modifiedStart should only be one more than modifiedEnd"
                  ); // All deletions

                  changes = [
                    new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__[
                      "DiffChange"
                    ](
                      originalStart,
                      originalEnd - originalStart + 1,
                      modifiedStart,
                      0
                    )
                  ];
                } else {
                  Debug.Assert(
                    originalStart === originalEnd + 1,
                    "originalStart should only be one more than originalEnd"
                  );
                  Debug.Assert(
                    modifiedStart === modifiedEnd + 1,
                    "modifiedStart should only be one more than modifiedEnd"
                  ); // Identical sequences - No differences

                  changes = [];
                }

                return changes;
              } // This problem can be solved using the Divide-And-Conquer technique.

              var midOriginalArr = [0],
                midModifiedArr = [0];
              var result = this.ComputeRecursionPoint(
                originalStart,
                originalEnd,
                modifiedStart,
                modifiedEnd,
                midOriginalArr,
                midModifiedArr,
                quitEarlyArr
              );
              var midOriginal = midOriginalArr[0];
              var midModified = midModifiedArr[0];

              if (result !== null) {
                // Result is not-null when there was enough memory to compute the changes while
                // searching for the recursion point
                return result;
              } else if (!quitEarlyArr[0]) {
                // We can break the problem down recursively by finding the changes in the
                // First Half:   (originalStart, modifiedStart) to (midOriginal, midModified)
                // Second Half:  (midOriginal + 1, minModified + 1) to (originalEnd, modifiedEnd)
                // NOTE: ComputeDiff() is inclusive, therefore the second range starts on the next point
                var leftChanges = this.ComputeDiffRecursive(
                  originalStart,
                  midOriginal,
                  modifiedStart,
                  midModified,
                  quitEarlyArr
                );
                var rightChanges = [];

                if (!quitEarlyArr[0]) {
                  rightChanges = this.ComputeDiffRecursive(
                    midOriginal + 1,
                    originalEnd,
                    midModified + 1,
                    modifiedEnd,
                    quitEarlyArr
                  );
                } else {
                  // We did't have time to finish the first half, so we don't have time to compute this half.
                  // Consider the entire rest of the sequence different.
                  rightChanges = [
                    new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__[
                      "DiffChange"
                    ](
                      midOriginal + 1,
                      originalEnd - (midOriginal + 1) + 1,
                      midModified + 1,
                      modifiedEnd - (midModified + 1) + 1
                    )
                  ];
                }

                return this.ConcatenateChanges(leftChanges, rightChanges);
              } // If we hit here, we quit early, and so can't return anything meaningful

              return [
                new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](
                  originalStart,
                  originalEnd - originalStart + 1,
                  modifiedStart,
                  modifiedEnd - modifiedStart + 1
                )
              ];
            };

            LcsDiff.prototype.WALKTRACE = function(
              diagonalForwardBase,
              diagonalForwardStart,
              diagonalForwardEnd,
              diagonalForwardOffset,
              diagonalReverseBase,
              diagonalReverseStart,
              diagonalReverseEnd,
              diagonalReverseOffset,
              forwardPoints,
              reversePoints,
              originalIndex,
              originalEnd,
              midOriginalArr,
              modifiedIndex,
              modifiedEnd,
              midModifiedArr,
              deltaIsEven,
              quitEarlyArr
            ) {
              var forwardChanges = null,
                reverseChanges = null; // First, walk backward through the forward diagonals history

              var changeHelper = new DiffChangeHelper();
              var diagonalMin = diagonalForwardStart;
              var diagonalMax = diagonalForwardEnd;
              var diagonalRelative =
                midOriginalArr[0] - midModifiedArr[0] - diagonalForwardOffset;
              var lastOriginalIndex = Number.MIN_VALUE;
              var historyIndex = this.m_forwardHistory.length - 1;
              var diagonal;

              do {
                // Get the diagonal index from the relative diagonal number
                diagonal = diagonalRelative + diagonalForwardBase; // Figure out where we came from

                if (
                  diagonal === diagonalMin ||
                  (diagonal < diagonalMax &&
                    forwardPoints[diagonal - 1] < forwardPoints[diagonal + 1])
                ) {
                  // Vertical line (the element is an insert)
                  originalIndex = forwardPoints[diagonal + 1];
                  modifiedIndex =
                    originalIndex - diagonalRelative - diagonalForwardOffset;

                  if (originalIndex < lastOriginalIndex) {
                    changeHelper.MarkNextChange();
                  }

                  lastOriginalIndex = originalIndex;
                  changeHelper.AddModifiedElement(
                    originalIndex + 1,
                    modifiedIndex
                  );
                  diagonalRelative = diagonal + 1 - diagonalForwardBase; //Setup for the next iteration
                } else {
                  // Horizontal line (the element is a deletion)
                  originalIndex = forwardPoints[diagonal - 1] + 1;
                  modifiedIndex =
                    originalIndex - diagonalRelative - diagonalForwardOffset;

                  if (originalIndex < lastOriginalIndex) {
                    changeHelper.MarkNextChange();
                  }

                  lastOriginalIndex = originalIndex - 1;
                  changeHelper.AddOriginalElement(
                    originalIndex,
                    modifiedIndex + 1
                  );
                  diagonalRelative = diagonal - 1 - diagonalForwardBase; //Setup for the next iteration
                }

                if (historyIndex >= 0) {
                  forwardPoints = this.m_forwardHistory[historyIndex];
                  diagonalForwardBase = forwardPoints[0]; //We stored this in the first spot

                  diagonalMin = 1;
                  diagonalMax = forwardPoints.length - 1;
                }
              } while (--historyIndex >= -1); // Ironically, we get the forward changes as the reverse of the
              // order we added them since we technically added them backwards

              forwardChanges = changeHelper.getReverseChanges();

              if (quitEarlyArr[0]) {
                // TODO: Calculate a partial from the reverse diagonals.
                //       For now, just assume everything after the midOriginal/midModified point is a diff
                var originalStartPoint = midOriginalArr[0] + 1;
                var modifiedStartPoint = midModifiedArr[0] + 1;

                if (forwardChanges !== null && forwardChanges.length > 0) {
                  var lastForwardChange =
                    forwardChanges[forwardChanges.length - 1];
                  originalStartPoint = Math.max(
                    originalStartPoint,
                    lastForwardChange.getOriginalEnd()
                  );
                  modifiedStartPoint = Math.max(
                    modifiedStartPoint,
                    lastForwardChange.getModifiedEnd()
                  );
                }

                reverseChanges = [
                  new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](
                    originalStartPoint,
                    originalEnd - originalStartPoint + 1,
                    modifiedStartPoint,
                    modifiedEnd - modifiedStartPoint + 1
                  )
                ];
              } else {
                // Now walk backward through the reverse diagonals history
                changeHelper = new DiffChangeHelper();
                diagonalMin = diagonalReverseStart;
                diagonalMax = diagonalReverseEnd;
                diagonalRelative =
                  midOriginalArr[0] - midModifiedArr[0] - diagonalReverseOffset;
                lastOriginalIndex = Number.MAX_VALUE;
                historyIndex = deltaIsEven
                  ? this.m_reverseHistory.length - 1
                  : this.m_reverseHistory.length - 2;

                do {
                  // Get the diagonal index from the relative diagonal number
                  diagonal = diagonalRelative + diagonalReverseBase; // Figure out where we came from

                  if (
                    diagonal === diagonalMin ||
                    (diagonal < diagonalMax &&
                      reversePoints[diagonal - 1] >=
                        reversePoints[diagonal + 1])
                  ) {
                    // Horizontal line (the element is a deletion))
                    originalIndex = reversePoints[diagonal + 1] - 1;
                    modifiedIndex =
                      originalIndex - diagonalRelative - diagonalReverseOffset;

                    if (originalIndex > lastOriginalIndex) {
                      changeHelper.MarkNextChange();
                    }

                    lastOriginalIndex = originalIndex + 1;
                    changeHelper.AddOriginalElement(
                      originalIndex + 1,
                      modifiedIndex + 1
                    );
                    diagonalRelative = diagonal + 1 - diagonalReverseBase; //Setup for the next iteration
                  } else {
                    // Vertical line (the element is an insertion)
                    originalIndex = reversePoints[diagonal - 1];
                    modifiedIndex =
                      originalIndex - diagonalRelative - diagonalReverseOffset;

                    if (originalIndex > lastOriginalIndex) {
                      changeHelper.MarkNextChange();
                    }

                    lastOriginalIndex = originalIndex;
                    changeHelper.AddModifiedElement(
                      originalIndex + 1,
                      modifiedIndex + 1
                    );
                    diagonalRelative = diagonal - 1 - diagonalReverseBase; //Setup for the next iteration
                  }

                  if (historyIndex >= 0) {
                    reversePoints = this.m_reverseHistory[historyIndex];
                    diagonalReverseBase = reversePoints[0]; //We stored this in the first spot

                    diagonalMin = 1;
                    diagonalMax = reversePoints.length - 1;
                  }
                } while (--historyIndex >= -1); // There are cases where the reverse history will find diffs that
                // are correct, but not intuitive, so we need shift them.

                reverseChanges = changeHelper.getChanges();
              }

              return this.ConcatenateChanges(forwardChanges, reverseChanges);
            };
            /**
             * Given the range to compute the diff on, this method finds the point:
             * (midOriginal, midModified)
             * that exists in the middle of the LCS of the two sequences and
             * is the point at which the LCS problem may be broken down recursively.
             * This method will try to keep the LCS trace in memory. If the LCS recursion
             * point is calculated and the full trace is available in memory, then this method
             * will return the change list.
             * @param originalStart The start bound of the original sequence range
             * @param originalEnd The end bound of the original sequence range
             * @param modifiedStart The start bound of the modified sequence range
             * @param modifiedEnd The end bound of the modified sequence range
             * @param midOriginal The middle point of the original sequence range
             * @param midModified The middle point of the modified sequence range
             * @returns The diff changes, if available, otherwise null
             */

            LcsDiff.prototype.ComputeRecursionPoint = function(
              originalStart,
              originalEnd,
              modifiedStart,
              modifiedEnd,
              midOriginalArr,
              midModifiedArr,
              quitEarlyArr
            ) {
              var originalIndex = 0,
                modifiedIndex = 0;
              var diagonalForwardStart = 0,
                diagonalForwardEnd = 0;
              var diagonalReverseStart = 0,
                diagonalReverseEnd = 0;
              var numDifferences; // To traverse the edit graph and produce the proper LCS, our actual
              // start position is just outside the given boundary

              originalStart--;
              modifiedStart--; // We set these up to make the compiler happy, but they will
              // be replaced before we return with the actual recursion point

              midOriginalArr[0] = 0;
              midModifiedArr[0] = 0; // Clear out the history

              this.m_forwardHistory = [];
              this.m_reverseHistory = []; // Each cell in the two arrays corresponds to a diagonal in the edit graph.
              // The integer value in the cell represents the originalIndex of the furthest
              // reaching point found so far that ends in that diagonal.
              // The modifiedIndex can be computed mathematically from the originalIndex and the diagonal number.

              var maxDifferences =
                originalEnd - originalStart + (modifiedEnd - modifiedStart);
              var numDiagonals = maxDifferences + 1;
              var forwardPoints = new Array(numDiagonals);
              var reversePoints = new Array(numDiagonals); // diagonalForwardBase: Index into forwardPoints of the diagonal which passes through (originalStart, modifiedStart)
              // diagonalReverseBase: Index into reversePoints of the diagonal which passes through (originalEnd, modifiedEnd)

              var diagonalForwardBase = modifiedEnd - modifiedStart;
              var diagonalReverseBase = originalEnd - originalStart; // diagonalForwardOffset: Geometric offset which allows modifiedIndex to be computed from originalIndex and the
              //    diagonal number (relative to diagonalForwardBase)
              // diagonalReverseOffset: Geometric offset which allows modifiedIndex to be computed from originalIndex and the
              //    diagonal number (relative to diagonalReverseBase)

              var diagonalForwardOffset = originalStart - modifiedStart;
              var diagonalReverseOffset = originalEnd - modifiedEnd; // delta: The difference between the end diagonal and the start diagonal. This is used to relate diagonal numbers
              //   relative to the start diagonal with diagonal numbers relative to the end diagonal.
              // The Even/Oddn-ness of this delta is important for determining when we should check for overlap

              var delta = diagonalReverseBase - diagonalForwardBase;
              var deltaIsEven = delta % 2 === 0; // Here we set up the start and end points as the furthest points found so far
              // in both the forward and reverse directions, respectively

              forwardPoints[diagonalForwardBase] = originalStart;
              reversePoints[diagonalReverseBase] = originalEnd; // Remember if we quit early, and thus need to do a best-effort result instead of a real result.

              quitEarlyArr[0] = false; // A couple of points:
              // --With this method, we iterate on the number of differences between the two sequences.
              //   The more differences there actually are, the longer this will take.
              // --Also, as the number of differences increases, we have to search on diagonals further
              //   away from the reference diagonal (which is diagonalForwardBase for forward, diagonalReverseBase for reverse).
              // --We extend on even diagonals (relative to the reference diagonal) only when numDifferences
              //   is even and odd diagonals only when numDifferences is odd.

              var diagonal, tempOriginalIndex;

              for (
                numDifferences = 1;
                numDifferences <= maxDifferences / 2 + 1;
                numDifferences++
              ) {
                var furthestOriginalIndex = 0;
                var furthestModifiedIndex = 0; // Run the algorithm in the forward direction

                diagonalForwardStart = this.ClipDiagonalBound(
                  diagonalForwardBase - numDifferences,
                  numDifferences,
                  diagonalForwardBase,
                  numDiagonals
                );
                diagonalForwardEnd = this.ClipDiagonalBound(
                  diagonalForwardBase + numDifferences,
                  numDifferences,
                  diagonalForwardBase,
                  numDiagonals
                );

                for (
                  diagonal = diagonalForwardStart;
                  diagonal <= diagonalForwardEnd;
                  diagonal += 2
                ) {
                  // STEP 1: We extend the furthest reaching point in the present diagonal
                  // by looking at the diagonals above and below and picking the one whose point
                  // is further away from the start point (originalStart, modifiedStart)
                  if (
                    diagonal === diagonalForwardStart ||
                    (diagonal < diagonalForwardEnd &&
                      forwardPoints[diagonal - 1] < forwardPoints[diagonal + 1])
                  ) {
                    originalIndex = forwardPoints[diagonal + 1];
                  } else {
                    originalIndex = forwardPoints[diagonal - 1] + 1;
                  }

                  modifiedIndex =
                    originalIndex -
                    (diagonal - diagonalForwardBase) -
                    diagonalForwardOffset; // Save the current originalIndex so we can test for false overlap in step 3

                  tempOriginalIndex = originalIndex; // STEP 2: We can continue to extend the furthest reaching point in the present diagonal
                  // so long as the elements are equal.

                  while (
                    originalIndex < originalEnd &&
                    modifiedIndex < modifiedEnd &&
                    this.ElementsAreEqual(originalIndex + 1, modifiedIndex + 1)
                  ) {
                    originalIndex++;
                    modifiedIndex++;
                  }

                  forwardPoints[diagonal] = originalIndex;

                  if (
                    originalIndex + modifiedIndex >
                    furthestOriginalIndex + furthestModifiedIndex
                  ) {
                    furthestOriginalIndex = originalIndex;
                    furthestModifiedIndex = modifiedIndex;
                  } // STEP 3: If delta is odd (overlap first happens on forward when delta is odd)
                  // and diagonal is in the range of reverse diagonals computed for numDifferences-1
                  // (the previous iteration; we haven't computed reverse diagonals for numDifferences yet)
                  // then check for overlap.

                  if (
                    !deltaIsEven &&
                    Math.abs(diagonal - diagonalReverseBase) <=
                      numDifferences - 1
                  ) {
                    if (originalIndex >= reversePoints[diagonal]) {
                      midOriginalArr[0] = originalIndex;
                      midModifiedArr[0] = modifiedIndex;

                      if (
                        tempOriginalIndex <= reversePoints[diagonal] &&
                        MaxDifferencesHistory > 0 &&
                        numDifferences <= MaxDifferencesHistory + 1
                      ) {
                        // BINGO! We overlapped, and we have the full trace in memory!
                        return this.WALKTRACE(
                          diagonalForwardBase,
                          diagonalForwardStart,
                          diagonalForwardEnd,
                          diagonalForwardOffset,
                          diagonalReverseBase,
                          diagonalReverseStart,
                          diagonalReverseEnd,
                          diagonalReverseOffset,
                          forwardPoints,
                          reversePoints,
                          originalIndex,
                          originalEnd,
                          midOriginalArr,
                          modifiedIndex,
                          modifiedEnd,
                          midModifiedArr,
                          deltaIsEven,
                          quitEarlyArr
                        );
                      } else {
                        // Either false overlap, or we didn't have enough memory for the full trace
                        // Just return the recursion point
                        return null;
                      }
                    }
                  }
                } // Check to see if we should be quitting early, before moving on to the next iteration.

                var matchLengthOfLongest =
                  (furthestOriginalIndex -
                    originalStart +
                    (furthestModifiedIndex - modifiedStart) -
                    numDifferences) /
                  2;

                if (
                  this.ContinueProcessingPredicate !== null &&
                  !this.ContinueProcessingPredicate(
                    furthestOriginalIndex,
                    this.OriginalSequence,
                    matchLengthOfLongest
                  )
                ) {
                  // We can't finish, so skip ahead to generating a result from what we have.
                  quitEarlyArr[0] = true; // Use the furthest distance we got in the forward direction.

                  midOriginalArr[0] = furthestOriginalIndex;
                  midModifiedArr[0] = furthestModifiedIndex;

                  if (
                    matchLengthOfLongest > 0 &&
                    MaxDifferencesHistory > 0 &&
                    numDifferences <= MaxDifferencesHistory + 1
                  ) {
                    // Enough of the history is in memory to walk it backwards
                    return this.WALKTRACE(
                      diagonalForwardBase,
                      diagonalForwardStart,
                      diagonalForwardEnd,
                      diagonalForwardOffset,
                      diagonalReverseBase,
                      diagonalReverseStart,
                      diagonalReverseEnd,
                      diagonalReverseOffset,
                      forwardPoints,
                      reversePoints,
                      originalIndex,
                      originalEnd,
                      midOriginalArr,
                      modifiedIndex,
                      modifiedEnd,
                      midModifiedArr,
                      deltaIsEven,
                      quitEarlyArr
                    );
                  } else {
                    // We didn't actually remember enough of the history.
                    //Since we are quiting the diff early, we need to shift back the originalStart and modified start
                    //back into the boundary limits since we decremented their value above beyond the boundary limit.
                    originalStart++;
                    modifiedStart++;
                    return [
                      new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__[
                        "DiffChange"
                      ](
                        originalStart,
                        originalEnd - originalStart + 1,
                        modifiedStart,
                        modifiedEnd - modifiedStart + 1
                      )
                    ];
                  }
                } // Run the algorithm in the reverse direction

                diagonalReverseStart = this.ClipDiagonalBound(
                  diagonalReverseBase - numDifferences,
                  numDifferences,
                  diagonalReverseBase,
                  numDiagonals
                );
                diagonalReverseEnd = this.ClipDiagonalBound(
                  diagonalReverseBase + numDifferences,
                  numDifferences,
                  diagonalReverseBase,
                  numDiagonals
                );

                for (
                  diagonal = diagonalReverseStart;
                  diagonal <= diagonalReverseEnd;
                  diagonal += 2
                ) {
                  // STEP 1: We extend the furthest reaching point in the present diagonal
                  // by looking at the diagonals above and below and picking the one whose point
                  // is further away from the start point (originalEnd, modifiedEnd)
                  if (
                    diagonal === diagonalReverseStart ||
                    (diagonal < diagonalReverseEnd &&
                      reversePoints[diagonal - 1] >=
                        reversePoints[diagonal + 1])
                  ) {
                    originalIndex = reversePoints[diagonal + 1] - 1;
                  } else {
                    originalIndex = reversePoints[diagonal - 1];
                  }

                  modifiedIndex =
                    originalIndex -
                    (diagonal - diagonalReverseBase) -
                    diagonalReverseOffset; // Save the current originalIndex so we can test for false overlap

                  tempOriginalIndex = originalIndex; // STEP 2: We can continue to extend the furthest reaching point in the present diagonal
                  // as long as the elements are equal.

                  while (
                    originalIndex > originalStart &&
                    modifiedIndex > modifiedStart &&
                    this.ElementsAreEqual(originalIndex, modifiedIndex)
                  ) {
                    originalIndex--;
                    modifiedIndex--;
                  }

                  reversePoints[diagonal] = originalIndex; // STEP 4: If delta is even (overlap first happens on reverse when delta is even)
                  // and diagonal is in the range of forward diagonals computed for numDifferences
                  // then check for overlap.

                  if (
                    deltaIsEven &&
                    Math.abs(diagonal - diagonalForwardBase) <= numDifferences
                  ) {
                    if (originalIndex <= forwardPoints[diagonal]) {
                      midOriginalArr[0] = originalIndex;
                      midModifiedArr[0] = modifiedIndex;

                      if (
                        tempOriginalIndex >= forwardPoints[diagonal] &&
                        MaxDifferencesHistory > 0 &&
                        numDifferences <= MaxDifferencesHistory + 1
                      ) {
                        // BINGO! We overlapped, and we have the full trace in memory!
                        return this.WALKTRACE(
                          diagonalForwardBase,
                          diagonalForwardStart,
                          diagonalForwardEnd,
                          diagonalForwardOffset,
                          diagonalReverseBase,
                          diagonalReverseStart,
                          diagonalReverseEnd,
                          diagonalReverseOffset,
                          forwardPoints,
                          reversePoints,
                          originalIndex,
                          originalEnd,
                          midOriginalArr,
                          modifiedIndex,
                          modifiedEnd,
                          midModifiedArr,
                          deltaIsEven,
                          quitEarlyArr
                        );
                      } else {
                        // Either false overlap, or we didn't have enough memory for the full trace
                        // Just return the recursion point
                        return null;
                      }
                    }
                  }
                } // Save current vectors to history before the next iteration

                if (numDifferences <= MaxDifferencesHistory) {
                  // We are allocating space for one extra int, which we fill with
                  // the index of the diagonal base index
                  var temp = new Array(
                    diagonalForwardEnd - diagonalForwardStart + 2
                  );
                  temp[0] = diagonalForwardBase - diagonalForwardStart + 1;
                  MyArray.Copy(
                    forwardPoints,
                    diagonalForwardStart,
                    temp,
                    1,
                    diagonalForwardEnd - diagonalForwardStart + 1
                  );
                  this.m_forwardHistory.push(temp);
                  temp = new Array(
                    diagonalReverseEnd - diagonalReverseStart + 2
                  );
                  temp[0] = diagonalReverseBase - diagonalReverseStart + 1;
                  MyArray.Copy(
                    reversePoints,
                    diagonalReverseStart,
                    temp,
                    1,
                    diagonalReverseEnd - diagonalReverseStart + 1
                  );
                  this.m_reverseHistory.push(temp);
                }
              } // If we got here, then we have the full trace in history. We just have to convert it to a change list
              // NOTE: This part is a bit messy

              return this.WALKTRACE(
                diagonalForwardBase,
                diagonalForwardStart,
                diagonalForwardEnd,
                diagonalForwardOffset,
                diagonalReverseBase,
                diagonalReverseStart,
                diagonalReverseEnd,
                diagonalReverseOffset,
                forwardPoints,
                reversePoints,
                originalIndex,
                originalEnd,
                midOriginalArr,
                modifiedIndex,
                modifiedEnd,
                midModifiedArr,
                deltaIsEven,
                quitEarlyArr
              );
            };
            /**
             * Shifts the given changes to provide a more intuitive diff.
             * While the first element in a diff matches the first element after the diff,
             * we shift the diff down.
             *
             * @param changes The list of changes to shift
             * @returns The shifted changes
             */

            LcsDiff.prototype.PrettifyChanges = function(changes) {
              // Shift all the changes down first
              for (var i = 0; i < changes.length; i++) {
                var change = changes[i];
                var originalStop =
                  i < changes.length - 1
                    ? changes[i + 1].originalStart
                    : this.OriginalSequence.getLength();
                var modifiedStop =
                  i < changes.length - 1
                    ? changes[i + 1].modifiedStart
                    : this.ModifiedSequence.getLength();
                var checkOriginal = change.originalLength > 0;
                var checkModified = change.modifiedLength > 0;

                while (
                  change.originalStart + change.originalLength < originalStop &&
                  change.modifiedStart + change.modifiedLength < modifiedStop &&
                  (!checkOriginal ||
                    this.OriginalElementsAreEqual(
                      change.originalStart,
                      change.originalStart + change.originalLength
                    )) &&
                  (!checkModified ||
                    this.ModifiedElementsAreEqual(
                      change.modifiedStart,
                      change.modifiedStart + change.modifiedLength
                    ))
                ) {
                  change.originalStart++;
                  change.modifiedStart++;
                }

                var mergedChangeArr = [null];

                if (
                  i < changes.length - 1 &&
                  this.ChangesOverlap(
                    changes[i],
                    changes[i + 1],
                    mergedChangeArr
                  )
                ) {
                  changes[i] = mergedChangeArr[0];
                  changes.splice(i + 1, 1);
                  i--;
                  continue;
                }
              } // Shift changes back up until we hit empty or whitespace-only lines

              for (var i = changes.length - 1; i >= 0; i--) {
                var change = changes[i];
                var originalStop = 0;
                var modifiedStop = 0;

                if (i > 0) {
                  var prevChange = changes[i - 1];

                  if (prevChange.originalLength > 0) {
                    originalStop =
                      prevChange.originalStart + prevChange.originalLength;
                  }

                  if (prevChange.modifiedLength > 0) {
                    modifiedStop =
                      prevChange.modifiedStart + prevChange.modifiedLength;
                  }
                }

                var checkOriginal = change.originalLength > 0;
                var checkModified = change.modifiedLength > 0;
                var bestDelta = 0;

                var bestScore = this._boundaryScore(
                  change.originalStart,
                  change.originalLength,
                  change.modifiedStart,
                  change.modifiedLength
                );

                for (var delta = 1; ; delta++) {
                  var originalStart = change.originalStart - delta;
                  var modifiedStart = change.modifiedStart - delta;

                  if (
                    originalStart < originalStop ||
                    modifiedStart < modifiedStop
                  ) {
                    break;
                  }

                  if (
                    checkOriginal &&
                    !this.OriginalElementsAreEqual(
                      originalStart,
                      originalStart + change.originalLength
                    )
                  ) {
                    break;
                  }

                  if (
                    checkModified &&
                    !this.ModifiedElementsAreEqual(
                      modifiedStart,
                      modifiedStart + change.modifiedLength
                    )
                  ) {
                    break;
                  }

                  var score = this._boundaryScore(
                    originalStart,
                    change.originalLength,
                    modifiedStart,
                    change.modifiedLength
                  );

                  if (score > bestScore) {
                    bestScore = score;
                    bestDelta = delta;
                  }
                }

                change.originalStart -= bestDelta;
                change.modifiedStart -= bestDelta;
              }

              return changes;
            };

            LcsDiff.prototype._OriginalIsBoundary = function(index) {
              if (
                index <= 0 ||
                index >= this.OriginalSequence.getLength() - 1
              ) {
                return true;
              }

              var element = this.OriginalSequence.getElementAtIndex(index);
              return typeof element === "string" && /^\s*$/.test(element);
            };

            LcsDiff.prototype._OriginalRegionIsBoundary = function(
              originalStart,
              originalLength
            ) {
              if (
                this._OriginalIsBoundary(originalStart) ||
                this._OriginalIsBoundary(originalStart - 1)
              ) {
                return true;
              }

              if (originalLength > 0) {
                var originalEnd = originalStart + originalLength;

                if (
                  this._OriginalIsBoundary(originalEnd - 1) ||
                  this._OriginalIsBoundary(originalEnd)
                ) {
                  return true;
                }
              }

              return false;
            };

            LcsDiff.prototype._ModifiedIsBoundary = function(index) {
              if (
                index <= 0 ||
                index >= this.ModifiedSequence.getLength() - 1
              ) {
                return true;
              }

              var element = this.ModifiedSequence.getElementAtIndex(index);
              return typeof element === "string" && /^\s*$/.test(element);
            };

            LcsDiff.prototype._ModifiedRegionIsBoundary = function(
              modifiedStart,
              modifiedLength
            ) {
              if (
                this._ModifiedIsBoundary(modifiedStart) ||
                this._ModifiedIsBoundary(modifiedStart - 1)
              ) {
                return true;
              }

              if (modifiedLength > 0) {
                var modifiedEnd = modifiedStart + modifiedLength;

                if (
                  this._ModifiedIsBoundary(modifiedEnd - 1) ||
                  this._ModifiedIsBoundary(modifiedEnd)
                ) {
                  return true;
                }
              }

              return false;
            };

            LcsDiff.prototype._boundaryScore = function(
              originalStart,
              originalLength,
              modifiedStart,
              modifiedLength
            ) {
              var originalScore = this._OriginalRegionIsBoundary(
                originalStart,
                originalLength
              )
                ? 1
                : 0;
              var modifiedScore = this._ModifiedRegionIsBoundary(
                modifiedStart,
                modifiedLength
              )
                ? 1
                : 0;
              return originalScore + modifiedScore;
            };
            /**
             * Concatenates the two input DiffChange lists and returns the resulting
             * list.
             * @param The left changes
             * @param The right changes
             * @returns The concatenated list
             */

            LcsDiff.prototype.ConcatenateChanges = function(left, right) {
              var mergedChangeArr = [];

              if (left.length === 0 || right.length === 0) {
                return right.length > 0 ? right : left;
              } else if (
                this.ChangesOverlap(
                  left[left.length - 1],
                  right[0],
                  mergedChangeArr
                )
              ) {
                // Since we break the problem down recursively, it is possible that we
                // might recurse in the middle of a change thereby splitting it into
                // two changes. Here in the combining stage, we detect and fuse those
                // changes back together
                var result = new Array(left.length + right.length - 1);
                MyArray.Copy(left, 0, result, 0, left.length - 1);
                result[left.length - 1] = mergedChangeArr[0];
                MyArray.Copy(right, 1, result, left.length, right.length - 1);
                return result;
              } else {
                var result = new Array(left.length + right.length);
                MyArray.Copy(left, 0, result, 0, left.length);
                MyArray.Copy(right, 0, result, left.length, right.length);
                return result;
              }
            };
            /**
             * Returns true if the two changes overlap and can be merged into a single
             * change
             * @param left The left change
             * @param right The right change
             * @param mergedChange The merged change if the two overlap, null otherwise
             * @returns True if the two changes overlap
             */

            LcsDiff.prototype.ChangesOverlap = function(
              left,
              right,
              mergedChangeArr
            ) {
              Debug.Assert(
                left.originalStart <= right.originalStart,
                "Left change is not less than or equal to right change"
              );
              Debug.Assert(
                left.modifiedStart <= right.modifiedStart,
                "Left change is not less than or equal to right change"
              );

              if (
                left.originalStart + left.originalLength >=
                  right.originalStart ||
                left.modifiedStart + left.modifiedLength >= right.modifiedStart
              ) {
                var originalStart = left.originalStart;
                var originalLength = left.originalLength;
                var modifiedStart = left.modifiedStart;
                var modifiedLength = left.modifiedLength;

                if (
                  left.originalStart + left.originalLength >=
                  right.originalStart
                ) {
                  originalLength =
                    right.originalStart +
                    right.originalLength -
                    left.originalStart;
                }

                if (
                  left.modifiedStart + left.modifiedLength >=
                  right.modifiedStart
                ) {
                  modifiedLength =
                    right.modifiedStart +
                    right.modifiedLength -
                    left.modifiedStart;
                }

                mergedChangeArr[0] = new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__[
                  "DiffChange"
                ](originalStart, originalLength, modifiedStart, modifiedLength);
                return true;
              } else {
                mergedChangeArr[0] = null;
                return false;
              }
            };
            /**
             * Helper method used to clip a diagonal index to the range of valid
             * diagonals. This also decides whether or not the diagonal index,
             * if it exceeds the boundary, should be clipped to the boundary or clipped
             * one inside the boundary depending on the Even/Odd status of the boundary
             * and numDifferences.
             * @param diagonal The index of the diagonal to clip.
             * @param numDifferences The current number of differences being iterated upon.
             * @param diagonalBaseIndex The base reference diagonal.
             * @param numDiagonals The total number of diagonals.
             * @returns The clipped diagonal index.
             */

            LcsDiff.prototype.ClipDiagonalBound = function(
              diagonal,
              numDifferences,
              diagonalBaseIndex,
              numDiagonals
            ) {
              if (diagonal >= 0 && diagonal < numDiagonals) {
                // Nothing to clip, its in range
                return diagonal;
              } // diagonalsBelow: The number of diagonals below the reference diagonal
              // diagonalsAbove: The number of diagonals above the reference diagonal

              var diagonalsBelow = diagonalBaseIndex;
              var diagonalsAbove = numDiagonals - diagonalBaseIndex - 1;
              var diffEven = numDifferences % 2 === 0;

              if (diagonal < 0) {
                var lowerBoundEven = diagonalsBelow % 2 === 0;
                return diffEven === lowerBoundEven ? 0 : 1;
              } else {
                var upperBoundEven = diagonalsAbove % 2 === 0;
                return diffEven === upperBoundEven
                  ? numDiagonals - 1
                  : numDiagonals - 2;
              }
            };

            return LcsDiff;
          })();

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/base/common/diff/diffChange.js":
      /*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/diff/diffChange.js ***!
  \**************************************************************************/
      /*! exports provided: DiffChange */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "DiffChange",
          function() {
            return DiffChange;
          }
        );
        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/

        /**
         * Represents information about a specific difference between two sequences.
         */
        var DiffChange =
          /** @class */
          (function() {
            /**
             * Constructs a new DiffChange with the given sequence information
             * and content.
             */
            function DiffChange(
              originalStart,
              originalLength,
              modifiedStart,
              modifiedLength
            ) {
              //Debug.Assert(originalLength > 0 || modifiedLength > 0, "originalLength and modifiedLength cannot both be <= 0");
              this.originalStart = originalStart;
              this.originalLength = originalLength;
              this.modifiedStart = modifiedStart;
              this.modifiedLength = modifiedLength;
            }
            /**
             * The end point (exclusive) of the change in the original sequence.
             */

            DiffChange.prototype.getOriginalEnd = function() {
              return this.originalStart + this.originalLength;
            };
            /**
             * The end point (exclusive) of the change in the modified sequence.
             */

            DiffChange.prototype.getModifiedEnd = function() {
              return this.modifiedStart + this.modifiedLength;
            };

            return DiffChange;
          })();

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/base/common/errors.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/errors.js ***!
  \*****************************************************************/
      /*! exports provided: ErrorHandler, errorHandler, onUnexpectedError, onUnexpectedExternalError, transformErrorForSerialization, isPromiseCanceledError, canceled, illegalArgument, illegalState */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ErrorHandler",
          function() {
            return ErrorHandler;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "errorHandler",
          function() {
            return errorHandler;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "onUnexpectedError",
          function() {
            return onUnexpectedError;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "onUnexpectedExternalError",
          function() {
            return onUnexpectedExternalError;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "transformErrorForSerialization",
          function() {
            return transformErrorForSerialization;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isPromiseCanceledError",
          function() {
            return isPromiseCanceledError;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "canceled",
          function() {
            return canceled;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "illegalArgument",
          function() {
            return illegalArgument;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "illegalState",
          function() {
            return illegalState;
          }
        );
        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/
        // Avoid circular dependency on EventEmitter by implementing a subset of the interface.
        var ErrorHandler =
          /** @class */
          (function() {
            function ErrorHandler() {
              this.listeners = [];

              this.unexpectedErrorHandler = function(e) {
                setTimeout(function() {
                  if (e.stack) {
                    throw new Error(e.message + "\n\n" + e.stack);
                  }

                  throw e;
                }, 0);
              };
            }

            ErrorHandler.prototype.emit = function(e) {
              this.listeners.forEach(function(listener) {
                listener(e);
              });
            };

            ErrorHandler.prototype.onUnexpectedError = function(e) {
              this.unexpectedErrorHandler(e);
              this.emit(e);
            }; // For external errors, we don't want the listeners to be called

            ErrorHandler.prototype.onUnexpectedExternalError = function(e) {
              this.unexpectedErrorHandler(e);
            };

            return ErrorHandler;
          })();

        var errorHandler = new ErrorHandler();
        function onUnexpectedError(e) {
          // ignore errors from cancelled promises
          if (!isPromiseCanceledError(e)) {
            errorHandler.onUnexpectedError(e);
          }

          return undefined;
        }
        function onUnexpectedExternalError(e) {
          // ignore errors from cancelled promises
          if (!isPromiseCanceledError(e)) {
            errorHandler.onUnexpectedExternalError(e);
          }

          return undefined;
        }
        function transformErrorForSerialization(error) {
          if (error instanceof Error) {
            var name_1 = error.name,
              message = error.message;
            var stack = error.stacktrace || error.stack;
            return {
              $isError: true,
              name: name_1,
              message: message,
              stack: stack
            };
          } // return as is

          return error;
        }
        var canceledName = "Canceled";
        /**
         * Checks if the given error is a promise in canceled state
         */

        function isPromiseCanceledError(error) {
          return (
            error instanceof Error &&
            error.name === canceledName &&
            error.message === canceledName
          );
        }
        /**
         * Returns an error that signals cancellation.
         */

        function canceled() {
          var error = new Error(canceledName);
          error.name = error.message;
          return error;
        }
        function illegalArgument(name) {
          if (name) {
            return new Error("Illegal argument: " + name);
          } else {
            return new Error("Illegal argument");
          }
        }
        function illegalState(name) {
          if (name) {
            return new Error("Illegal state: " + name);
          } else {
            return new Error("Illegal state");
          }
        }

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/base/common/event.js":
      /*!****************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/event.js ***!
  \****************************************************************/
      /*! exports provided: Event, Emitter, PauseableEmitter, EventMultiplexer, EventBufferer, Relay */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Event",
          function() {
            return Event;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Emitter",
          function() {
            return Emitter;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PauseableEmitter",
          function() {
            return PauseableEmitter;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "EventMultiplexer",
          function() {
            return EventMultiplexer;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "EventBufferer",
          function() {
            return EventBufferer;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Relay",
          function() {
            return Relay;
          }
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./errors.js */ "./node_modules/monaco-editor/esm/vs/base/common/errors.js"
        );
        /* harmony import */ var _functional_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./functional.js */ "./node_modules/monaco-editor/esm/vs/base/common/functional.js"
        );
        /* harmony import */ var _lifecycle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./lifecycle.js */ "./node_modules/monaco-editor/esm/vs/base/common/lifecycle.js"
        );
        /* harmony import */ var _linkedList_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./linkedList.js */ "./node_modules/monaco-editor/esm/vs/base/common/linkedList.js"
        );

        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/
        var __extends =
          (undefined && undefined.__extends) ||
          (function() {
            var _extendStatics = function extendStatics(d, b) {
              _extendStatics =
                _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4___default.a ||
                ({
                  __proto__: []
                } instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                  }
                };

              return _extendStatics(d, b);
            };

            return function(d, b) {
              _extendStatics(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype =
                b === null
                  ? _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_3___default()(
                      b
                    )
                  : ((__.prototype = b.prototype), new __());
            };
          })();

        var Event;

        (function(Event) {
          var _disposable = {
            dispose: function dispose() {}
          };

          Event.None = function() {
            return _disposable;
          };
          /**
           * Given an event, returns another event which only fires once.
           */

          function once(event) {
            return function(listener, thisArgs, disposables) {
              if (thisArgs === void 0) {
                thisArgs = null;
              } // we need this, in case the event fires during the listener call

              var didFire = false;
              var result;
              result = event(
                function(e) {
                  if (didFire) {
                    return;
                  } else if (result) {
                    result.dispose();
                  } else {
                    didFire = true;
                  }

                  return listener.call(thisArgs, e);
                },
                null,
                disposables
              );

              if (didFire) {
                result.dispose();
              }

              return result;
            };
          }

          Event.once = once;
          /**
           * Given an event and a `map` function, returns another event which maps each element
           * throught the mapping function.
           */

          function map(event, map) {
            return snapshot(function(listener, thisArgs, disposables) {
              if (thisArgs === void 0) {
                thisArgs = null;
              }

              return event(
                function(i) {
                  return listener.call(thisArgs, map(i));
                },
                null,
                disposables
              );
            });
          }

          Event.map = map;
          /**
           * Given an event and an `each` function, returns another identical event and calls
           * the `each` function per each element.
           */

          function forEach(event, each) {
            return snapshot(function(listener, thisArgs, disposables) {
              if (thisArgs === void 0) {
                thisArgs = null;
              }

              return event(
                function(i) {
                  each(i);
                  listener.call(thisArgs, i);
                },
                null,
                disposables
              );
            });
          }

          Event.forEach = forEach;

          function filter(event, filter) {
            return snapshot(function(listener, thisArgs, disposables) {
              if (thisArgs === void 0) {
                thisArgs = null;
              }

              return event(
                function(e) {
                  return filter(e) && listener.call(thisArgs, e);
                },
                null,
                disposables
              );
            });
          }

          Event.filter = filter;
          /**
           * Given an event, returns the same event but typed as `Event<void>`.
           */

          function signal(event) {
            return event;
          }

          Event.signal = signal;
          /**
           * Given a collection of events, returns a single event which emits
           * whenever any of the provided events emit.
           */

          function any() {
            var events = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              events[_i] = arguments[_i];
            }

            return function(listener, thisArgs, disposables) {
              if (thisArgs === void 0) {
                thisArgs = null;
              }

              return Object(
                _lifecycle_js__WEBPACK_IMPORTED_MODULE_7__["combinedDisposable"]
              )(
                events.map(function(event) {
                  return event(
                    function(e) {
                      return listener.call(thisArgs, e);
                    },
                    null,
                    disposables
                  );
                })
              );
            };
          }

          Event.any = any;
          /**
           * Given an event and a `merge` function, returns another event which maps each element
           * and the cummulative result throught the `merge` function. Similar to `map`, but with memory.
           */

          function reduce(event, merge, initial) {
            var output = initial;
            return map(event, function(e) {
              output = merge(output, e);
              return output;
            });
          }

          Event.reduce = reduce;
          /**
           * Given a chain of event processing functions (filter, map, etc), each
           * function will be invoked per event & per listener. Snapshotting an event
           * chain allows each function to be invoked just once per event.
           */

          function snapshot(event) {
            var listener;
            var emitter = new Emitter({
              onFirstListenerAdd: function onFirstListenerAdd() {
                listener = event(emitter.fire, emitter);
              },
              onLastListenerRemove: function onLastListenerRemove() {
                listener.dispose();
              }
            });
            return emitter.event;
          }

          Event.snapshot = snapshot;

          function debounce(
            event,
            merge,
            delay,
            leading,
            leakWarningThreshold
          ) {
            if (delay === void 0) {
              delay = 100;
            }

            if (leading === void 0) {
              leading = false;
            }

            var subscription;
            var output = undefined;
            var handle = undefined;
            var numDebouncedCalls = 0;
            var emitter = new Emitter({
              leakWarningThreshold: leakWarningThreshold,
              onFirstListenerAdd: function onFirstListenerAdd() {
                subscription = event(function(cur) {
                  numDebouncedCalls++;
                  output = merge(output, cur);

                  if (leading && !handle) {
                    emitter.fire(output);
                  }

                  clearTimeout(handle);
                  handle = setTimeout(function() {
                    var _output = output;
                    output = undefined;
                    handle = undefined;

                    if (!leading || numDebouncedCalls > 1) {
                      emitter.fire(_output);
                    }

                    numDebouncedCalls = 0;
                  }, delay);
                });
              },
              onLastListenerRemove: function onLastListenerRemove() {
                subscription.dispose();
              }
            });
            return emitter.event;
          }

          Event.debounce = debounce;
          /**
           * Given an event, it returns another event which fires only once and as soon as
           * the input event emits. The event data is the number of millis it took for the
           * event to fire.
           */

          function stopwatch(event) {
            var start = new Date().getTime();
            return map(once(event), function(_) {
              return new Date().getTime() - start;
            });
          }

          Event.stopwatch = stopwatch;
          /**
           * Given an event, it returns another event which fires only when the event
           * element changes.
           */

          function latch(event) {
            var firstCall = true;
            var cache;
            return filter(event, function(value) {
              var shouldEmit = firstCall || value !== cache;
              firstCall = false;
              cache = value;
              return shouldEmit;
            });
          }

          Event.latch = latch;
          /**
           * Buffers the provided event until a first listener comes
           * along, at which point fire all the events at once and
           * pipe the event from then on.
           *
           * ```typescript
           * const emitter = new Emitter<number>();
           * const event = emitter.event;
           * const bufferedEvent = buffer(event);
           *
           * emitter.fire(1);
           * emitter.fire(2);
           * emitter.fire(3);
           * // nothing...
           *
           * const listener = bufferedEvent(num => console.log(num));
           * // 1, 2, 3
           *
           * emitter.fire(4);
           * // 4
           * ```
           */

          function buffer(event, nextTick, _buffer) {
            if (nextTick === void 0) {
              nextTick = false;
            }

            if (_buffer === void 0) {
              _buffer = [];
            }

            var buffer = _buffer.slice();

            var listener = event(function(e) {
              if (buffer) {
                buffer.push(e);
              } else {
                emitter.fire(e);
              }
            });

            var flush = function flush() {
              if (buffer) {
                buffer.forEach(function(e) {
                  return emitter.fire(e);
                });
              }

              buffer = null;
            };

            var emitter = new Emitter({
              onFirstListenerAdd: function onFirstListenerAdd() {
                if (!listener) {
                  listener = event(function(e) {
                    return emitter.fire(e);
                  });
                }
              },
              onFirstListenerDidAdd: function onFirstListenerDidAdd() {
                if (buffer) {
                  if (nextTick) {
                    setTimeout(flush);
                  } else {
                    flush();
                  }
                }
              },
              onLastListenerRemove: function onLastListenerRemove() {
                if (listener) {
                  listener.dispose();
                }

                listener = null;
              }
            });
            return emitter.event;
          }

          Event.buffer = buffer;

          var ChainableEvent =
            /** @class */
            (function() {
              function ChainableEvent(event) {
                this.event = event;
              }

              ChainableEvent.prototype.map = function(fn) {
                return new ChainableEvent(map(this.event, fn));
              };

              ChainableEvent.prototype.forEach = function(fn) {
                return new ChainableEvent(forEach(this.event, fn));
              };

              ChainableEvent.prototype.filter = function(fn) {
                return new ChainableEvent(filter(this.event, fn));
              };

              ChainableEvent.prototype.reduce = function(merge, initial) {
                return new ChainableEvent(reduce(this.event, merge, initial));
              };

              ChainableEvent.prototype.latch = function() {
                return new ChainableEvent(latch(this.event));
              };

              ChainableEvent.prototype.on = function(
                listener,
                thisArgs,
                disposables
              ) {
                return this.event(listener, thisArgs, disposables);
              };

              ChainableEvent.prototype.once = function(
                listener,
                thisArgs,
                disposables
              ) {
                return once(this.event)(listener, thisArgs, disposables);
              };

              return ChainableEvent;
            })();

          function chain(event) {
            return new ChainableEvent(event);
          }

          Event.chain = chain;

          function fromNodeEventEmitter(emitter, eventName, map) {
            if (map === void 0) {
              map = function map(id) {
                return id;
              };
            }

            var fn = function fn() {
              var args = [];

              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }

              return result.fire(map.apply(void 0, args));
            };

            var onFirstListenerAdd = function onFirstListenerAdd() {
              return emitter.on(eventName, fn);
            };

            var onLastListenerRemove = function onLastListenerRemove() {
              return emitter.removeListener(eventName, fn);
            };

            var result = new Emitter({
              onFirstListenerAdd: onFirstListenerAdd,
              onLastListenerRemove: onLastListenerRemove
            });
            return result.event;
          }

          Event.fromNodeEventEmitter = fromNodeEventEmitter;

          function fromPromise(promise) {
            var emitter = new Emitter();
            var shouldEmit = false;
            promise
              .then(undefined, function() {
                return null;
              })
              .then(function() {
                if (!shouldEmit) {
                  setTimeout(function() {
                    return emitter.fire(undefined);
                  }, 0);
                } else {
                  emitter.fire(undefined);
                }
              });
            shouldEmit = true;
            return emitter.event;
          }

          Event.fromPromise = fromPromise;

          function toPromise(event) {
            return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(
              function(c) {
                return once(event)(c);
              }
            );
          }

          Event.toPromise = toPromise;
        })(Event || (Event = {}));

        var _globalLeakWarningThreshold = -1;

        var LeakageMonitor =
          /** @class */
          (function() {
            function LeakageMonitor(customThreshold, name) {
              if (name === void 0) {
                name = Math.random()
                  .toString(18)
                  .slice(2, 5);
              }

              this.customThreshold = customThreshold;
              this.name = name;
              this._warnCountdown = 0;
            }

            LeakageMonitor.prototype.dispose = function() {
              if (this._stacks) {
                this._stacks.clear();
              }
            };

            LeakageMonitor.prototype.check = function(listenerCount) {
              var _this = this;

              var threshold = _globalLeakWarningThreshold;

              if (typeof this.customThreshold === "number") {
                threshold = this.customThreshold;
              }

              if (threshold <= 0 || listenerCount < threshold) {
                return undefined;
              }

              if (!this._stacks) {
                this._stacks = new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default.a();
              }

              var stack = new Error().stack
                .split("\n")
                .slice(3)
                .join("\n");
              var count = this._stacks.get(stack) || 0;

              this._stacks.set(stack, count + 1);

              this._warnCountdown -= 1;

              if (this._warnCountdown <= 0) {
                // only warn on first exceed and then every time the limit
                // is exceeded by 50% again
                this._warnCountdown = threshold * 0.5; // find most frequent listener and print warning

                var topStack_1;
                var topCount_1 = 0;

                this._stacks.forEach(function(count, stack) {
                  if (!topStack_1 || topCount_1 < count) {
                    topStack_1 = stack;
                    topCount_1 = count;
                  }
                });

                console.warn(
                  "[" +
                    this.name +
                    "] potential listener LEAK detected, having " +
                    listenerCount +
                    " listeners already. MOST frequent listener (" +
                    topCount_1 +
                    "):"
                );
                console.warn(topStack_1);
              }

              return function() {
                var count = _this._stacks.get(stack) || 0;

                _this._stacks.set(stack, count - 1);
              };
            };

            return LeakageMonitor;
          })();
        /**
 * The Emitter can be used to expose an Event to the public
 * to fire it from the insides.
 * Sample:
    class Document {

        private _onDidChange = new Emitter<(value:string)=>any>();

        public onDidChange = this._onDidChange.event;

        // getter-style
        // get onDidChange(): Event<(value:string)=>any> {
        // 	return this._onDidChange.event;
        // }

        private _doIt() {
            //...
            this._onDidChange.fire(value);
        }
    }
 */

        var Emitter =
          /** @class */
          (function() {
            function Emitter(options) {
              this._disposed = false;
              this._options = options;
              this._leakageMon =
                _globalLeakWarningThreshold > 0
                  ? new LeakageMonitor(
                      this._options && this._options.leakWarningThreshold
                    )
                  : undefined;
            }

            Object.defineProperty(Emitter.prototype, "event", {
              /**
               * For the public to allow to subscribe
               * to events from this Emitter
               */
              get: function get() {
                var _this = this;

                if (!this._event) {
                  this._event = function(listener, thisArgs, disposables) {
                    if (!_this._listeners) {
                      _this._listeners = new _linkedList_js__WEBPACK_IMPORTED_MODULE_8__[
                        "LinkedList"
                      ]();
                    }

                    var firstListener = _this._listeners.isEmpty();

                    if (
                      firstListener &&
                      _this._options &&
                      _this._options.onFirstListenerAdd
                    ) {
                      _this._options.onFirstListenerAdd(_this);
                    }

                    var remove = _this._listeners.push(
                      !thisArgs ? listener : [listener, thisArgs]
                    );

                    if (
                      firstListener &&
                      _this._options &&
                      _this._options.onFirstListenerDidAdd
                    ) {
                      _this._options.onFirstListenerDidAdd(_this);
                    }

                    if (_this._options && _this._options.onListenerDidAdd) {
                      _this._options.onListenerDidAdd(
                        _this,
                        listener,
                        thisArgs
                      );
                    } // check and record this emitter for potential leakage

                    var removeMonitor;

                    if (_this._leakageMon) {
                      removeMonitor = _this._leakageMon.check(
                        _this._listeners.size
                      );
                    }

                    var result;
                    result = {
                      dispose: function dispose() {
                        if (removeMonitor) {
                          removeMonitor();
                        }

                        result.dispose = Emitter._noop;

                        if (!_this._disposed) {
                          remove();

                          if (
                            _this._options &&
                            _this._options.onLastListenerRemove
                          ) {
                            var hasListeners =
                              _this._listeners && !_this._listeners.isEmpty();

                            if (!hasListeners) {
                              _this._options.onLastListenerRemove(_this);
                            }
                          }
                        }
                      }
                    };

                    if (
                      _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(
                        disposables
                      )
                    ) {
                      disposables.push(result);
                    }

                    return result;
                  };
                }

                return this._event;
              },
              enumerable: true,
              configurable: true
            });
            /**
             * To be kept private to fire an event to
             * subscribers
             */

            Emitter.prototype.fire = function(event) {
              if (this._listeners) {
                // put all [listener,event]-pairs into delivery queue
                // then emit all event. an inner/nested event might be
                // the driver of this
                if (!this._deliveryQueue) {
                  this._deliveryQueue = new _linkedList_js__WEBPACK_IMPORTED_MODULE_8__[
                    "LinkedList"
                  ]();
                }

                for (
                  var iter = this._listeners.iterator(), e = iter.next();
                  !e.done;
                  e = iter.next()
                ) {
                  this._deliveryQueue.push([e.value, event]);
                }

                while (this._deliveryQueue.size > 0) {
                  var _a = this._deliveryQueue.shift(),
                    listener = _a[0],
                    event_1 = _a[1];

                  try {
                    if (typeof listener === "function") {
                      listener.call(undefined, event_1);
                    } else {
                      listener[0].call(listener[1], event_1);
                    }
                  } catch (e) {
                    Object(
                      _errors_js__WEBPACK_IMPORTED_MODULE_5__[
                        "onUnexpectedError"
                      ]
                    )(e);
                  }
                }
              }
            };

            Emitter.prototype.dispose = function() {
              if (this._listeners) {
                this._listeners.clear();
              }

              if (this._deliveryQueue) {
                this._deliveryQueue.clear();
              }

              if (this._leakageMon) {
                this._leakageMon.dispose();
              }

              this._disposed = true;
            };

            Emitter._noop = function() {};

            return Emitter;
          })();

        var PauseableEmitter =
          /** @class */
          (function(_super) {
            __extends(PauseableEmitter, _super);

            function PauseableEmitter(options) {
              var _this = _super.call(this, options) || this;

              _this._isPaused = 0;
              _this._eventQueue = new _linkedList_js__WEBPACK_IMPORTED_MODULE_8__[
                "LinkedList"
              ]();
              _this._mergeFn = options && options.merge;
              return _this;
            }

            PauseableEmitter.prototype.pause = function() {
              this._isPaused++;
            };

            PauseableEmitter.prototype.resume = function() {
              if (this._isPaused !== 0 && --this._isPaused === 0) {
                if (this._mergeFn) {
                  // use the merge function to create a single composite
                  // event. make a copy in case firing pauses this emitter
                  var events = this._eventQueue.toArray();

                  this._eventQueue.clear();

                  _super.prototype.fire.call(this, this._mergeFn(events));
                } else {
                  // no merging, fire each event individually and test
                  // that this emitter isn't paused halfway through
                  while (!this._isPaused && this._eventQueue.size !== 0) {
                    _super.prototype.fire.call(this, this._eventQueue.shift());
                  }
                }
              }
            };

            PauseableEmitter.prototype.fire = function(event) {
              if (this._listeners) {
                if (this._isPaused !== 0) {
                  this._eventQueue.push(event);
                } else {
                  _super.prototype.fire.call(this, event);
                }
              }
            };

            return PauseableEmitter;
          })(Emitter);

        var EventMultiplexer =
          /** @class */
          (function() {
            function EventMultiplexer() {
              var _this = this;

              this.hasListeners = false;
              this.events = [];
              this.emitter = new Emitter({
                onFirstListenerAdd: function onFirstListenerAdd() {
                  return _this.onFirstListenerAdd();
                },
                onLastListenerRemove: function onLastListenerRemove() {
                  return _this.onLastListenerRemove();
                }
              });
            }

            Object.defineProperty(EventMultiplexer.prototype, "event", {
              get: function get() {
                return this.emitter.event;
              },
              enumerable: true,
              configurable: true
            });

            EventMultiplexer.prototype.add = function(event) {
              var _this = this;

              var e = {
                event: event,
                listener: null
              };
              this.events.push(e);

              if (this.hasListeners) {
                this.hook(e);
              }

              var dispose = function dispose() {
                if (_this.hasListeners) {
                  _this.unhook(e);
                }

                var idx = _this.events.indexOf(e);

                _this.events.splice(idx, 1);
              };

              return Object(
                _lifecycle_js__WEBPACK_IMPORTED_MODULE_7__["toDisposable"]
              )(
                Object(_functional_js__WEBPACK_IMPORTED_MODULE_6__["once"])(
                  dispose
                )
              );
            };

            EventMultiplexer.prototype.onFirstListenerAdd = function() {
              var _this = this;

              this.hasListeners = true;
              this.events.forEach(function(e) {
                return _this.hook(e);
              });
            };

            EventMultiplexer.prototype.onLastListenerRemove = function() {
              var _this = this;

              this.hasListeners = false;
              this.events.forEach(function(e) {
                return _this.unhook(e);
              });
            };

            EventMultiplexer.prototype.hook = function(e) {
              var _this = this;

              e.listener = e.event(function(r) {
                return _this.emitter.fire(r);
              });
            };

            EventMultiplexer.prototype.unhook = function(e) {
              if (e.listener) {
                e.listener.dispose();
              }

              e.listener = null;
            };

            EventMultiplexer.prototype.dispose = function() {
              this.emitter.dispose();
            };

            return EventMultiplexer;
          })();

        /**
         * The EventBufferer is useful in situations in which you want
         * to delay firing your events during some code.
         * You can wrap that code and be sure that the event will not
         * be fired during that wrap.
         *
         * ```
         * const emitter: Emitter;
         * const delayer = new EventDelayer();
         * const delayedEvent = delayer.wrapEvent(emitter.event);
         *
         * delayedEvent(console.log);
         *
         * delayer.bufferEvents(() => {
         *   emitter.fire(); // event will not be fired yet
         * });
         *
         * // event will only be fired at this point
         * ```
         */

        var EventBufferer =
          /** @class */
          (function() {
            function EventBufferer() {
              this.buffers = [];
            }

            EventBufferer.prototype.wrapEvent = function(event) {
              var _this = this;

              return function(listener, thisArgs, disposables) {
                return event(
                  function(i) {
                    var buffer = _this.buffers[_this.buffers.length - 1];

                    if (buffer) {
                      buffer.push(function() {
                        return listener.call(thisArgs, i);
                      });
                    } else {
                      listener.call(thisArgs, i);
                    }
                  },
                  undefined,
                  disposables
                );
              };
            };

            EventBufferer.prototype.bufferEvents = function(fn) {
              var buffer = [];
              this.buffers.push(buffer);
              var r = fn();
              this.buffers.pop();
              buffer.forEach(function(flush) {
                return flush();
              });
              return r;
            };

            return EventBufferer;
          })();

        /**
         * A Relay is an event forwarder which functions as a replugabble event pipe.
         * Once created, you can connect an input event to it and it will simply forward
         * events from that input event through its own `event` property. The `input`
         * can be changed at any point in time.
         */

        var Relay =
          /** @class */
          (function() {
            function Relay() {
              var _this = this;

              this.listening = false;
              this.inputEvent = Event.None;
              this.inputEventListener =
                _lifecycle_js__WEBPACK_IMPORTED_MODULE_7__["Disposable"].None;
              this.emitter = new Emitter({
                onFirstListenerDidAdd: function onFirstListenerDidAdd() {
                  _this.listening = true;
                  _this.inputEventListener = _this.inputEvent(
                    _this.emitter.fire,
                    _this.emitter
                  );
                },
                onLastListenerRemove: function onLastListenerRemove() {
                  _this.listening = false;

                  _this.inputEventListener.dispose();
                }
              });
              this.event = this.emitter.event;
            }

            Object.defineProperty(Relay.prototype, "input", {
              set: function set(event) {
                this.inputEvent = event;

                if (this.listening) {
                  this.inputEventListener.dispose();
                  this.inputEventListener = event(
                    this.emitter.fire,
                    this.emitter
                  );
                }
              },
              enumerable: true,
              configurable: true
            });

            Relay.prototype.dispose = function() {
              this.inputEventListener.dispose();
              this.emitter.dispose();
            };

            return Relay;
          })();

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/base/common/functional.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/functional.js ***!
  \*********************************************************************/
      /*! exports provided: once */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "once",
          function() {
            return once;
          }
        );
        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/
        function once(fn) {
          var _this = this;

          var didCall = false;
          var result;
          return function() {
            if (didCall) {
              return result;
            }

            didCall = true;
            result = fn.apply(_this, arguments);
            return result;
          };
        }

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/base/common/iterator.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/iterator.js ***!
  \*******************************************************************/
      /*! exports provided: FIN, Iterator, getSequenceIterator, ArrayIterator, ArrayNavigator, MappedIterator */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FIN",
          function() {
            return FIN;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Iterator",
          function() {
            return Iterator;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getSequenceIterator",
          function() {
            return getSequenceIterator;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ArrayIterator",
          function() {
            return ArrayIterator;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ArrayNavigator",
          function() {
            return ArrayNavigator;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "MappedIterator",
          function() {
            return MappedIterator;
          }
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__
        );

        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/
        var __extends =
          (undefined && undefined.__extends) ||
          (function() {
            var _extendStatics = function extendStatics(d, b) {
              _extendStatics =
                _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default.a ||
                ({
                  __proto__: []
                } instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                  }
                };

              return _extendStatics(d, b);
            };

            return function(d, b) {
              _extendStatics(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype =
                b === null
                  ? _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1___default()(
                      b
                    )
                  : ((__.prototype = b.prototype), new __());
            };
          })();

        var FIN = {
          done: true,
          value: undefined
        };
        var Iterator;

        (function(Iterator) {
          var _empty = {
            next: function next() {
              return FIN;
            }
          };

          function empty() {
            return _empty;
          }

          Iterator.empty = empty;

          function fromArray(array, index, length) {
            if (index === void 0) {
              index = 0;
            }

            if (length === void 0) {
              length = array.length;
            }

            return {
              next: function next() {
                if (index >= length) {
                  return FIN;
                }

                return {
                  done: false,
                  value: array[index++]
                };
              }
            };
          }

          Iterator.fromArray = fromArray;

          function from(elements) {
            if (!elements) {
              return Iterator.empty();
            } else if (
              _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(
                elements
              )
            ) {
              return Iterator.fromArray(elements);
            } else {
              return elements;
            }
          }

          Iterator.from = from;

          function map(iterator, fn) {
            return {
              next: function next() {
                var element = iterator.next();

                if (element.done) {
                  return FIN;
                } else {
                  return {
                    done: false,
                    value: fn(element.value)
                  };
                }
              }
            };
          }

          Iterator.map = map;

          function filter(iterator, fn) {
            return {
              next: function next() {
                while (true) {
                  var element = iterator.next();

                  if (element.done) {
                    return FIN;
                  }

                  if (fn(element.value)) {
                    return {
                      done: false,
                      value: element.value
                    };
                  }
                }
              }
            };
          }

          Iterator.filter = filter;

          function forEach(iterator, fn) {
            for (
              var next = iterator.next();
              !next.done;
              next = iterator.next()
            ) {
              fn(next.value);
            }
          }

          Iterator.forEach = forEach;

          function collect(iterator) {
            var result = [];
            forEach(iterator, function(value) {
              return result.push(value);
            });
            return result;
          }

          Iterator.collect = collect;
        })(Iterator || (Iterator = {}));

        function getSequenceIterator(arg) {
          if (
            _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(
              arg
            )
          ) {
            return Iterator.fromArray(arg);
          } else {
            return arg;
          }
        }

        var ArrayIterator =
          /** @class */
          (function() {
            function ArrayIterator(items, start, end, index) {
              if (start === void 0) {
                start = 0;
              }

              if (end === void 0) {
                end = items.length;
              }

              if (index === void 0) {
                index = start - 1;
              }

              this.items = items;
              this.start = start;
              this.end = end;
              this.index = index;
            }

            ArrayIterator.prototype.next = function() {
              this.index = Math.min(this.index + 1, this.end);
              return this.current();
            };

            ArrayIterator.prototype.current = function() {
              if (this.index === this.start - 1 || this.index === this.end) {
                return null;
              }

              return this.items[this.index];
            };

            return ArrayIterator;
          })();

        var ArrayNavigator =
          /** @class */
          (function(_super) {
            __extends(ArrayNavigator, _super);

            function ArrayNavigator(items, start, end, index) {
              if (start === void 0) {
                start = 0;
              }

              if (end === void 0) {
                end = items.length;
              }

              if (index === void 0) {
                index = start - 1;
              }

              return _super.call(this, items, start, end, index) || this;
            }

            ArrayNavigator.prototype.current = function() {
              return _super.prototype.current.call(this);
            };

            ArrayNavigator.prototype.previous = function() {
              this.index = Math.max(this.index - 1, this.start - 1);
              return this.current();
            };

            ArrayNavigator.prototype.first = function() {
              this.index = this.start;
              return this.current();
            };

            ArrayNavigator.prototype.last = function() {
              this.index = this.end - 1;
              return this.current();
            };

            ArrayNavigator.prototype.parent = function() {
              return null;
            };

            return ArrayNavigator;
          })(ArrayIterator);

        var MappedIterator =
          /** @class */
          (function() {
            function MappedIterator(iterator, fn) {
              this.iterator = iterator;
              this.fn = fn; // noop
            }

            MappedIterator.prototype.next = function() {
              return this.fn(this.iterator.next());
            };

            return MappedIterator;
          })();

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/base/common/keyCodes.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/keyCodes.js ***!
  \*******************************************************************/
      /*! exports provided: KeyCodeUtils, KeyChord, createKeybinding, createSimpleKeybinding, SimpleKeybinding, ChordKeybinding, ResolvedKeybindingPart, ResolvedKeybinding */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "KeyCodeUtils",
          function() {
            return KeyCodeUtils;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "KeyChord",
          function() {
            return KeyChord;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "createKeybinding",
          function() {
            return createKeybinding;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "createSimpleKeybinding",
          function() {
            return createSimpleKeybinding;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SimpleKeybinding",
          function() {
            return SimpleKeybinding;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ChordKeybinding",
          function() {
            return ChordKeybinding;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ResolvedKeybindingPart",
          function() {
            return ResolvedKeybindingPart;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ResolvedKeybinding",
          function() {
            return ResolvedKeybinding;
          }
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./errors.js */ "./node_modules/monaco-editor/esm/vs/base/common/errors.js"
        );

        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/

        var KeyCodeStrMap =
          /** @class */
          (function() {
            function KeyCodeStrMap() {
              this._keyCodeToStr = [];
              this._strToKeyCode = _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(
                null
              );
            }

            KeyCodeStrMap.prototype.define = function(keyCode, str) {
              this._keyCodeToStr[keyCode] = str;
              this._strToKeyCode[str.toLowerCase()] = keyCode;
            };

            KeyCodeStrMap.prototype.keyCodeToStr = function(keyCode) {
              return this._keyCodeToStr[keyCode];
            };

            KeyCodeStrMap.prototype.strToKeyCode = function(str) {
              return (
                this._strToKeyCode[str.toLowerCase()] || 0
                /* Unknown */
              );
            };

            return KeyCodeStrMap;
          })();

        var uiMap = new KeyCodeStrMap();
        var userSettingsUSMap = new KeyCodeStrMap();
        var userSettingsGeneralMap = new KeyCodeStrMap();

        (function() {
          function define(
            keyCode,
            uiLabel,
            usUserSettingsLabel,
            generalUserSettingsLabel
          ) {
            if (usUserSettingsLabel === void 0) {
              usUserSettingsLabel = uiLabel;
            }

            if (generalUserSettingsLabel === void 0) {
              generalUserSettingsLabel = usUserSettingsLabel;
            }

            uiMap.define(keyCode, uiLabel);
            userSettingsUSMap.define(keyCode, usUserSettingsLabel);
            userSettingsGeneralMap.define(keyCode, generalUserSettingsLabel);
          }

          define(0, /* Unknown */
          "unknown");
          define(1, /* Backspace */
          "Backspace");
          define(2, /* Tab */
          "Tab");
          define(3, /* Enter */
          "Enter");
          define(4, /* Shift */
          "Shift");
          define(5, /* Ctrl */
          "Ctrl");
          define(6, /* Alt */
          "Alt");
          define(7, /* PauseBreak */
          "PauseBreak");
          define(8, /* CapsLock */
          "CapsLock");
          define(9, /* Escape */
          "Escape");
          define(10, /* Space */
          "Space");
          define(11, /* PageUp */
          "PageUp");
          define(12, /* PageDown */
          "PageDown");
          define(13, /* End */
          "End");
          define(14, /* Home */
          "Home");
          define(15, /* LeftArrow */
          "LeftArrow", "Left");
          define(16, /* UpArrow */
          "UpArrow", "Up");
          define(17, /* RightArrow */
          "RightArrow", "Right");
          define(18, /* DownArrow */
          "DownArrow", "Down");
          define(19, /* Insert */
          "Insert");
          define(20, /* Delete */
          "Delete");
          define(21, /* KEY_0 */
          "0");
          define(22, /* KEY_1 */
          "1");
          define(23, /* KEY_2 */
          "2");
          define(24, /* KEY_3 */
          "3");
          define(25, /* KEY_4 */
          "4");
          define(26, /* KEY_5 */
          "5");
          define(27, /* KEY_6 */
          "6");
          define(28, /* KEY_7 */
          "7");
          define(29, /* KEY_8 */
          "8");
          define(30, /* KEY_9 */
          "9");
          define(31, /* KEY_A */
          "A");
          define(32, /* KEY_B */
          "B");
          define(33, /* KEY_C */
          "C");
          define(34, /* KEY_D */
          "D");
          define(35, /* KEY_E */
          "E");
          define(36, /* KEY_F */
          "F");
          define(37, /* KEY_G */
          "G");
          define(38, /* KEY_H */
          "H");
          define(39, /* KEY_I */
          "I");
          define(40, /* KEY_J */
          "J");
          define(41, /* KEY_K */
          "K");
          define(42, /* KEY_L */
          "L");
          define(43, /* KEY_M */
          "M");
          define(44, /* KEY_N */
          "N");
          define(45, /* KEY_O */
          "O");
          define(46, /* KEY_P */
          "P");
          define(47, /* KEY_Q */
          "Q");
          define(48, /* KEY_R */
          "R");
          define(49, /* KEY_S */
          "S");
          define(50, /* KEY_T */
          "T");
          define(51, /* KEY_U */
          "U");
          define(52, /* KEY_V */
          "V");
          define(53, /* KEY_W */
          "W");
          define(54, /* KEY_X */
          "X");
          define(55, /* KEY_Y */
          "Y");
          define(56, /* KEY_Z */
          "Z");
          define(57, /* Meta */
          "Meta");
          define(58, /* ContextMenu */
          "ContextMenu");
          define(59, /* F1 */
          "F1");
          define(60, /* F2 */
          "F2");
          define(61, /* F3 */
          "F3");
          define(62, /* F4 */
          "F4");
          define(63, /* F5 */
          "F5");
          define(64, /* F6 */
          "F6");
          define(65, /* F7 */
          "F7");
          define(66, /* F8 */
          "F8");
          define(67, /* F9 */
          "F9");
          define(68, /* F10 */
          "F10");
          define(69, /* F11 */
          "F11");
          define(70, /* F12 */
          "F12");
          define(71, /* F13 */
          "F13");
          define(72, /* F14 */
          "F14");
          define(73, /* F15 */
          "F15");
          define(74, /* F16 */
          "F16");
          define(75, /* F17 */
          "F17");
          define(76, /* F18 */
          "F18");
          define(77, /* F19 */
          "F19");
          define(78, /* NumLock */
          "NumLock");
          define(79, /* ScrollLock */
          "ScrollLock");
          define(80, /* US_SEMICOLON */
          ";", ";", "OEM_1");
          define(81, /* US_EQUAL */
          "=", "=", "OEM_PLUS");
          define(82, /* US_COMMA */
          ",", ",", "OEM_COMMA");
          define(83, /* US_MINUS */
          "-", "-", "OEM_MINUS");
          define(84, /* US_DOT */
          ".", ".", "OEM_PERIOD");
          define(85, /* US_SLASH */
          "/", "/", "OEM_2");
          define(86, /* US_BACKTICK */
          "`", "`", "OEM_3");
          define(110, /* ABNT_C1 */
          "ABNT_C1");
          define(111, /* ABNT_C2 */
          "ABNT_C2");
          define(87, /* US_OPEN_SQUARE_BRACKET */
          "[", "[", "OEM_4");
          define(88, /* US_BACKSLASH */
          "\\", "\\", "OEM_5");
          define(89, /* US_CLOSE_SQUARE_BRACKET */
          "]", "]", "OEM_6");
          define(90, /* US_QUOTE */
          "'", "'", "OEM_7");
          define(91, /* OEM_8 */
          "OEM_8");
          define(92, /* OEM_102 */
          "OEM_102");
          define(93, /* NUMPAD_0 */
          "NumPad0");
          define(94, /* NUMPAD_1 */
          "NumPad1");
          define(95, /* NUMPAD_2 */
          "NumPad2");
          define(96, /* NUMPAD_3 */
          "NumPad3");
          define(97, /* NUMPAD_4 */
          "NumPad4");
          define(98, /* NUMPAD_5 */
          "NumPad5");
          define(99, /* NUMPAD_6 */
          "NumPad6");
          define(100, /* NUMPAD_7 */
          "NumPad7");
          define(101, /* NUMPAD_8 */
          "NumPad8");
          define(102, /* NUMPAD_9 */
          "NumPad9");
          define(103, /* NUMPAD_MULTIPLY */
          "NumPad_Multiply");
          define(104, /* NUMPAD_ADD */
          "NumPad_Add");
          define(105, /* NUMPAD_SEPARATOR */
          "NumPad_Separator");
          define(106, /* NUMPAD_SUBTRACT */
          "NumPad_Subtract");
          define(107, /* NUMPAD_DECIMAL */
          "NumPad_Decimal");
          define(108, /* NUMPAD_DIVIDE */
          "NumPad_Divide");
        })();

        var KeyCodeUtils;

        (function(KeyCodeUtils) {
          function toString(keyCode) {
            return uiMap.keyCodeToStr(keyCode);
          }

          KeyCodeUtils.toString = toString;

          function fromString(key) {
            return uiMap.strToKeyCode(key);
          }

          KeyCodeUtils.fromString = fromString;

          function toUserSettingsUS(keyCode) {
            return userSettingsUSMap.keyCodeToStr(keyCode);
          }

          KeyCodeUtils.toUserSettingsUS = toUserSettingsUS;

          function toUserSettingsGeneral(keyCode) {
            return userSettingsGeneralMap.keyCodeToStr(keyCode);
          }

          KeyCodeUtils.toUserSettingsGeneral = toUserSettingsGeneral;

          function fromUserSettings(key) {
            return (
              userSettingsUSMap.strToKeyCode(key) ||
              userSettingsGeneralMap.strToKeyCode(key)
            );
          }

          KeyCodeUtils.fromUserSettings = fromUserSettings;
        })(KeyCodeUtils || (KeyCodeUtils = {}));

        function KeyChord(firstPart, secondPart) {
          var chordPart = ((secondPart & 0x0000ffff) << 16) >>> 0;
          return (firstPart | chordPart) >>> 0;
        }
        function createKeybinding(keybinding, OS) {
          if (keybinding === 0) {
            return null;
          }

          var firstPart = (keybinding & 0x0000ffff) >>> 0;
          var chordPart = (keybinding & 0xffff0000) >>> 16;

          if (chordPart !== 0) {
            return new ChordKeybinding([
              createSimpleKeybinding(firstPart, OS),
              createSimpleKeybinding(chordPart, OS)
            ]);
          }

          return new ChordKeybinding([createSimpleKeybinding(firstPart, OS)]);
        }
        function createSimpleKeybinding(keybinding, OS) {
          var ctrlCmd =
            keybinding & 2048
              ? /* CtrlCmd */
                true
              : false;
          var winCtrl =
            keybinding & 256
              ? /* WinCtrl */
                true
              : false;
          var ctrlKey =
            OS === 2
              ? /* Macintosh */
                winCtrl
              : ctrlCmd;
          var shiftKey =
            keybinding & 1024
              ? /* Shift */
                true
              : false;
          var altKey =
            keybinding & 512
              ? /* Alt */
                true
              : false;
          var metaKey =
            OS === 2
              ? /* Macintosh */
                ctrlCmd
              : winCtrl;
          var keyCode = keybinding & 255;
          /* KeyCode */
          return new SimpleKeybinding(
            ctrlKey,
            shiftKey,
            altKey,
            metaKey,
            keyCode
          );
        }

        var SimpleKeybinding =
          /** @class */
          (function() {
            function SimpleKeybinding(
              ctrlKey,
              shiftKey,
              altKey,
              metaKey,
              keyCode
            ) {
              this.ctrlKey = ctrlKey;
              this.shiftKey = shiftKey;
              this.altKey = altKey;
              this.metaKey = metaKey;
              this.keyCode = keyCode;
            }

            SimpleKeybinding.prototype.equals = function(other) {
              return (
                this.ctrlKey === other.ctrlKey &&
                this.shiftKey === other.shiftKey &&
                this.altKey === other.altKey &&
                this.metaKey === other.metaKey &&
                this.keyCode === other.keyCode
              );
            };

            SimpleKeybinding.prototype.isModifierKey = function() {
              return (
                this.keyCode === 0 ||
                /* Unknown */
                this.keyCode === 5 ||
                /* Ctrl */
                this.keyCode === 57 ||
                /* Meta */
                this.keyCode === 6 ||
                /* Alt */
                this.keyCode === 4
                /* Shift */
              );
            };

            SimpleKeybinding.prototype.toChord = function() {
              return new ChordKeybinding([this]);
            };
            /**
             * Does this keybinding refer to the key code of a modifier and it also has the modifier flag?
             */

            SimpleKeybinding.prototype.isDuplicateModifierCase = function() {
              return (
                (this.ctrlKey && this.keyCode === 5) ||
                /* Ctrl */
                (this.shiftKey && this.keyCode === 4) ||
                /* Shift */
                (this.altKey && this.keyCode === 6) ||
                /* Alt */
                (this.metaKey && this.keyCode === 57)
                /* Meta */
              );
            };

            return SimpleKeybinding;
          })();

        var ChordKeybinding =
          /** @class */
          (function() {
            function ChordKeybinding(parts) {
              if (parts.length === 0) {
                throw Object(
                  _errors_js__WEBPACK_IMPORTED_MODULE_1__["illegalArgument"]
                )("parts");
              }

              this.parts = parts;
            }

            ChordKeybinding.prototype.equals = function(other) {
              if (other === null) {
                return false;
              }

              if (this.parts.length !== other.parts.length) {
                return false;
              }

              for (var i = 0; i < this.parts.length; i++) {
                if (!this.parts[i].equals(other.parts[i])) {
                  return false;
                }
              }

              return true;
            };

            return ChordKeybinding;
          })();

        var ResolvedKeybindingPart =
          /** @class */
          (function() {
            function ResolvedKeybindingPart(
              ctrlKey,
              shiftKey,
              altKey,
              metaKey,
              kbLabel,
              kbAriaLabel
            ) {
              this.ctrlKey = ctrlKey;
              this.shiftKey = shiftKey;
              this.altKey = altKey;
              this.metaKey = metaKey;
              this.keyLabel = kbLabel;
              this.keyAriaLabel = kbAriaLabel;
            }

            return ResolvedKeybindingPart;
          })();

        /**
         * A resolved keybinding. Can be a simple keybinding or a chord keybinding.
         */

        var ResolvedKeybinding =
          /** @class */
          (function() {
            function ResolvedKeybinding() {}

            return ResolvedKeybinding;
          })();

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/base/common/lifecycle.js":
      /*!********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/lifecycle.js ***!
  \********************************************************************/
      /*! exports provided: isDisposable, dispose, combinedDisposable, toDisposable, Disposable, ImmortalReference */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isDisposable",
          function() {
            return isDisposable;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "dispose",
          function() {
            return _dispose;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "combinedDisposable",
          function() {
            return combinedDisposable;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "toDisposable",
          function() {
            return toDisposable;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Disposable",
          function() {
            return Disposable;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ImmortalReference",
          function() {
            return ImmortalReference;
          }
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__
        );

        function isDisposable(thing) {
          return (
            typeof thing.dispose === "function" && thing.dispose.length === 0
          );
        }

        function _dispose(first) {
          var rest = [];

          for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
          }

          if (
            _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(
              first
            )
          ) {
            first.forEach(function(d) {
              return d && d.dispose();
            });
            return [];
          } else if (rest.length === 0) {
            if (first) {
              first.dispose();
              return first;
            }

            return undefined;
          } else {
            _dispose(first);

            _dispose(rest);

            return [];
          }
        }

        function combinedDisposable(disposables) {
          return {
            dispose: function dispose() {
              return _dispose(disposables);
            }
          };
        }
        function toDisposable(fn) {
          return {
            dispose: function dispose() {
              fn();
            }
          };
        }

        var Disposable =
          /** @class */
          (function() {
            function Disposable() {
              this._toDispose = [];
              this._lifecycle_disposable_isDisposed = false;
            }

            Disposable.prototype.dispose = function() {
              this._lifecycle_disposable_isDisposed = true;
              this._toDispose = _dispose(this._toDispose);
            };

            Disposable.prototype._register = function(t) {
              if (this._lifecycle_disposable_isDisposed) {
                console.warn(
                  "Registering disposable on object that has already been disposed."
                );
                t.dispose();
              } else {
                this._toDispose.push(t);
              }

              return t;
            };

            Disposable.None = _babel_runtime_corejs2_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_0___default()(
              {
                dispose: function dispose() {}
              }
            );
            return Disposable;
          })();

        var ImmortalReference =
          /** @class */
          (function() {
            function ImmortalReference(object) {
              this.object = object;
            }

            ImmortalReference.prototype.dispose = function() {};

            return ImmortalReference;
          })();

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/base/common/linkedList.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/linkedList.js ***!
  \*********************************************************************/
      /*! exports provided: LinkedList */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "LinkedList",
          function() {
            return LinkedList;
          }
        );
        /* harmony import */ var _iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./iterator.js */ "./node_modules/monaco-editor/esm/vs/base/common/iterator.js"
        );
        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/

        var Node =
          /** @class */
          (function() {
            function Node(element) {
              this.element = element;
              this.next = Node.Undefined;
              this.prev = Node.Undefined;
            }

            Node.Undefined = new Node(undefined);
            return Node;
          })();

        var LinkedList =
          /** @class */
          (function() {
            function LinkedList() {
              this._first = Node.Undefined;
              this._last = Node.Undefined;
              this._size = 0;
            }

            Object.defineProperty(LinkedList.prototype, "size", {
              get: function get() {
                return this._size;
              },
              enumerable: true,
              configurable: true
            });

            LinkedList.prototype.isEmpty = function() {
              return this._first === Node.Undefined;
            };

            LinkedList.prototype.clear = function() {
              this._first = Node.Undefined;
              this._last = Node.Undefined;
              this._size = 0;
            };

            LinkedList.prototype.unshift = function(element) {
              return this._insert(element, false);
            };

            LinkedList.prototype.push = function(element) {
              return this._insert(element, true);
            };

            LinkedList.prototype._insert = function(element, atTheEnd) {
              var _this = this;

              var newNode = new Node(element);

              if (this._first === Node.Undefined) {
                this._first = newNode;
                this._last = newNode;
              } else if (atTheEnd) {
                // push
                var oldLast = this._last;
                this._last = newNode;
                newNode.prev = oldLast;
                oldLast.next = newNode;
              } else {
                // unshift
                var oldFirst = this._first;
                this._first = newNode;
                newNode.next = oldFirst;
                oldFirst.prev = newNode;
              }

              this._size += 1;
              var didRemove = false;
              return function() {
                if (!didRemove) {
                  didRemove = true;

                  _this._remove(newNode);
                }
              };
            };

            LinkedList.prototype.shift = function() {
              if (this._first === Node.Undefined) {
                return undefined;
              } else {
                var res = this._first.element;

                this._remove(this._first);

                return res;
              }
            };

            LinkedList.prototype._remove = function(node) {
              if (
                node.prev !== Node.Undefined &&
                node.next !== Node.Undefined
              ) {
                // middle
                var anchor = node.prev;
                anchor.next = node.next;
                node.next.prev = anchor;
              } else if (
                node.prev === Node.Undefined &&
                node.next === Node.Undefined
              ) {
                // only node
                this._first = Node.Undefined;
                this._last = Node.Undefined;
              } else if (node.next === Node.Undefined) {
                // last
                this._last = this._last.prev;
                this._last.next = Node.Undefined;
              } else if (node.prev === Node.Undefined) {
                // first
                this._first = this._first.next;
                this._first.prev = Node.Undefined;
              } // done

              this._size -= 1;
            };

            LinkedList.prototype.iterator = function() {
              var element;
              var node = this._first;
              return {
                next: function next() {
                  if (node === Node.Undefined) {
                    return _iterator_js__WEBPACK_IMPORTED_MODULE_0__["FIN"];
                  }

                  if (!element) {
                    element = {
                      done: false,
                      value: node.element
                    };
                  } else {
                    element.value = node.element;
                  }

                  node = node.next;
                  return element;
                }
              };
            };

            LinkedList.prototype.toArray = function() {
              var result = [];

              for (
                var node = this._first;
                node !== Node.Undefined;
                node = node.next
              ) {
                result.push(node.element);
              }

              return result;
            };

            return LinkedList;
          })();

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/base/common/platform.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/platform.js ***!
  \*******************************************************************/
      /*! exports provided: isWindows, isMacintosh, isLinux, isNative, isWeb, globals, setImmediate, OS */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isWindows",
          function() {
            return isWindows;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isMacintosh",
          function() {
            return isMacintosh;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isLinux",
          function() {
            return isLinux;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isNative",
          function() {
            return isNative;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isWeb",
          function() {
            return isWeb;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "globals",
          function() {
            return globals;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "setImmediate",
          function() {
            return setImmediate;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "OS",
          function() {
            return OS;
          }
        );
        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/
        var LANGUAGE_DEFAULT = "en";
        var _isWindows = false;
        var _isMacintosh = false;
        var _isLinux = false;
        var _isNative = false;
        var _isWeb = false;
        var _locale = undefined;
        var _language = LANGUAGE_DEFAULT;
        var _translationsConfigFile = undefined;
        var isElectronRenderer =
          typeof process !== "undefined" &&
          typeof process.versions !== "undefined" &&
          typeof process.versions.electron !== "undefined" &&
          process.type === "renderer"; // OS detection

        if (typeof navigator === "object" && !isElectronRenderer) {
          var userAgent = navigator.userAgent;
          _isWindows = userAgent.indexOf("Windows") >= 0;
          _isMacintosh = userAgent.indexOf("Macintosh") >= 0;
          _isLinux = userAgent.indexOf("Linux") >= 0;
          _isWeb = true;
          _locale = navigator.language;
          _language = _locale;
        } else if (typeof process === "object") {
          _isWindows = process.platform === "win32";
          _isMacintosh = process.platform === "darwin";
          _isLinux = process.platform === "linux";
          _locale = LANGUAGE_DEFAULT;
          _language = LANGUAGE_DEFAULT;
          var rawNlsConfig = process.env["VSCODE_NLS_CONFIG"];

          if (rawNlsConfig) {
            try {
              var nlsConfig = JSON.parse(rawNlsConfig);
              var resolved = nlsConfig.availableLanguages["*"];
              _locale = nlsConfig.locale; // VSCode's default language is 'en'

              _language = resolved ? resolved : LANGUAGE_DEFAULT;
              _translationsConfigFile = nlsConfig._translationsConfigFile;
            } catch (e) {}
          }

          _isNative = true;
        }

        var _platform = 0;
        /* Web */
        if (_isNative) {
          if (_isMacintosh) {
            _platform = 1;
            /* Mac */
          } else if (_isWindows) {
            _platform = 3;
            /* Windows */
          } else if (_isLinux) {
            _platform = 2;
            /* Linux */
          }
        }

        var isWindows = _isWindows;
        var isMacintosh = _isMacintosh;
        var isLinux = _isLinux;
        var isNative = _isNative;
        var isWeb = _isWeb;

        var _globals =
          typeof self === "object"
            ? self
            : typeof global === "object"
            ? global
            : {};

        var globals = _globals;
        var _setImmediate = null;
        function setImmediate(callback) {
          if (_setImmediate === null) {
            if (globals.setImmediate) {
              _setImmediate = globals.setImmediate.bind(globals);
            } else if (
              typeof process !== "undefined" &&
              typeof process.nextTick === "function"
            ) {
              _setImmediate = process.nextTick.bind(process);
            } else {
              _setImmediate = globals.setTimeout.bind(globals);
            }
          }

          return _setImmediate(callback);
        }
        var OS = _isMacintosh
          ? 2
          : /* Macintosh */
          _isWindows
          ? 1
          : /* Windows */
            3;
        /* Linux */

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/base/common/strings.js":
      /*!******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/strings.js ***!
  \******************************************************************/
      /*! exports provided: empty, isFalsyOrWhitespace, pad, format, escape, escapeRegExpCharacters, trim, ltrim, rtrim, convertSimple2RegExpPattern, startsWith, endsWith, createRegExp, regExpLeadsToEndlessLoop, regExpFlags, firstNonWhitespaceIndex, getLeadingWhitespace, lastNonWhitespaceIndex, compare, isLowerAsciiLetter, isUpperAsciiLetter, equalsIgnoreCase, startsWithIgnoreCase, commonPrefixLength, commonSuffixLength, isHighSurrogate, isLowSurrogate, containsRTL, containsEmoji, isBasicASCII, containsFullWidthCharacter, isFullWidthCharacter, UTF8_BOM_CHARACTER, startsWithUTF8BOM, safeBtoa, repeat */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "empty",
          function() {
            return empty;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isFalsyOrWhitespace",
          function() {
            return isFalsyOrWhitespace;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "pad",
          function() {
            return pad;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "format",
          function() {
            return format;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "escape",
          function() {
            return escape;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "escapeRegExpCharacters",
          function() {
            return escapeRegExpCharacters;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "trim",
          function() {
            return trim;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ltrim",
          function() {
            return ltrim;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "rtrim",
          function() {
            return rtrim;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "convertSimple2RegExpPattern",
          function() {
            return convertSimple2RegExpPattern;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "startsWith",
          function() {
            return startsWith;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "endsWith",
          function() {
            return endsWith;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "createRegExp",
          function() {
            return createRegExp;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "regExpLeadsToEndlessLoop",
          function() {
            return regExpLeadsToEndlessLoop;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "regExpFlags",
          function() {
            return regExpFlags;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "firstNonWhitespaceIndex",
          function() {
            return firstNonWhitespaceIndex;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getLeadingWhitespace",
          function() {
            return getLeadingWhitespace;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "lastNonWhitespaceIndex",
          function() {
            return lastNonWhitespaceIndex;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "compare",
          function() {
            return compare;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isLowerAsciiLetter",
          function() {
            return isLowerAsciiLetter;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isUpperAsciiLetter",
          function() {
            return isUpperAsciiLetter;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "equalsIgnoreCase",
          function() {
            return equalsIgnoreCase;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "startsWithIgnoreCase",
          function() {
            return startsWithIgnoreCase;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "commonPrefixLength",
          function() {
            return commonPrefixLength;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "commonSuffixLength",
          function() {
            return commonSuffixLength;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isHighSurrogate",
          function() {
            return isHighSurrogate;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isLowSurrogate",
          function() {
            return isLowSurrogate;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "containsRTL",
          function() {
            return containsRTL;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "containsEmoji",
          function() {
            return containsEmoji;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isBasicASCII",
          function() {
            return isBasicASCII;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "containsFullWidthCharacter",
          function() {
            return containsFullWidthCharacter;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isFullWidthCharacter",
          function() {
            return isFullWidthCharacter;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "UTF8_BOM_CHARACTER",
          function() {
            return UTF8_BOM_CHARACTER;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "startsWithUTF8BOM",
          function() {
            return startsWithUTF8BOM;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "safeBtoa",
          function() {
            return safeBtoa;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "repeat",
          function() {
            return repeat;
          }
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__
        );

        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/

        /**
         * The empty string.
         */
        var empty = "";
        function isFalsyOrWhitespace(str) {
          if (!str || typeof str !== "string") {
            return true;
          }

          return str.trim().length === 0;
        }
        /**
         * @returns the provided number with the given number of preceding zeros.
         */

        function pad(n, l, char) {
          if (char === void 0) {
            char = "0";
          }

          var str = "" + n;
          var r = [str];

          for (var i = str.length; i < l; i++) {
            r.push(char);
          }

          return r.reverse().join("");
        }
        var _formatRegexp = /{(\d+)}/g;
        /**
         * Helper to produce a string with a variable number of arguments. Insert variable segments
         * into the string using the {n} notation where N is the index of the argument following the string.
         * @param value string to which formatting is applied
         * @param args replacements for {n}-entries
         */

        function format(value) {
          var args = [];

          for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
          }

          if (args.length === 0) {
            return value;
          }

          return value.replace(_formatRegexp, function(match, group) {
            var idx = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(
              group,
              10
            );

            return isNaN(idx) || idx < 0 || idx >= args.length
              ? match
              : args[idx];
          });
        }
        /**
         * Converts HTML characters inside the string to use entities instead. Makes the string safe from
         * being used e.g. in HTMLElement.innerHTML.
         */

        function escape(html) {
          return html.replace(/[<>&]/g, function(match) {
            switch (match) {
              case "<":
                return "&lt;";

              case ">":
                return "&gt;";

              case "&":
                return "&amp;";

              default:
                return match;
            }
          });
        }
        /**
         * Escapes regular expression characters in a given string
         */

        function escapeRegExpCharacters(value) {
          return value.replace(/[\-\\\{\}\*\+\?\|\^\$\.\[\]\(\)\#]/g, "\\$&");
        }
        /**
         * Removes all occurrences of needle from the beginning and end of haystack.
         * @param haystack string to trim
         * @param needle the thing to trim (default is a blank)
         */

        function trim(haystack, needle) {
          if (needle === void 0) {
            needle = " ";
          }

          var trimmed = ltrim(haystack, needle);
          return rtrim(trimmed, needle);
        }
        /**
         * Removes all occurrences of needle from the beginning of haystack.
         * @param haystack string to trim
         * @param needle the thing to trim
         */

        function ltrim(haystack, needle) {
          if (!haystack || !needle) {
            return haystack;
          }

          var needleLen = needle.length;

          if (needleLen === 0 || haystack.length === 0) {
            return haystack;
          }

          var offset = 0;

          while (haystack.indexOf(needle, offset) === offset) {
            offset = offset + needleLen;
          }

          return haystack.substring(offset);
        }
        /**
         * Removes all occurrences of needle from the end of haystack.
         * @param haystack string to trim
         * @param needle the thing to trim
         */

        function rtrim(haystack, needle) {
          if (!haystack || !needle) {
            return haystack;
          }

          var needleLen = needle.length,
            haystackLen = haystack.length;

          if (needleLen === 0 || haystackLen === 0) {
            return haystack;
          }

          var offset = haystackLen,
            idx = -1;

          while (true) {
            idx = haystack.lastIndexOf(needle, offset - 1);

            if (idx === -1 || idx + needleLen !== offset) {
              break;
            }

            if (idx === 0) {
              return "";
            }

            offset = idx;
          }

          return haystack.substring(0, offset);
        }
        function convertSimple2RegExpPattern(pattern) {
          return pattern
            .replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&")
            .replace(/[\*]/g, ".*");
        }
        /**
         * Determines if haystack starts with needle.
         */

        function startsWith(haystack, needle) {
          if (haystack.length < needle.length) {
            return false;
          }

          if (haystack === needle) {
            return true;
          }

          for (var i = 0; i < needle.length; i++) {
            if (haystack[i] !== needle[i]) {
              return false;
            }
          }

          return true;
        }
        /**
         * Determines if haystack ends with needle.
         */

        function endsWith(haystack, needle) {
          var diff = haystack.length - needle.length;

          if (diff > 0) {
            return haystack.indexOf(needle, diff) === diff;
          } else if (diff === 0) {
            return haystack === needle;
          } else {
            return false;
          }
        }
        function createRegExp(searchString, isRegex, options) {
          if (options === void 0) {
            options = {};
          }

          if (!searchString) {
            throw new Error("Cannot create regex from empty string");
          }

          if (!isRegex) {
            searchString = escapeRegExpCharacters(searchString);
          }

          if (options.wholeWord) {
            if (!/\B/.test(searchString.charAt(0))) {
              searchString = "\\b" + searchString;
            }

            if (!/\B/.test(searchString.charAt(searchString.length - 1))) {
              searchString = searchString + "\\b";
            }
          }

          var modifiers = "";

          if (options.global) {
            modifiers += "g";
          }

          if (!options.matchCase) {
            modifiers += "i";
          }

          if (options.multiline) {
            modifiers += "m";
          }

          if (options.unicode) {
            modifiers += "u";
          }

          return new RegExp(searchString, modifiers);
        }
        function regExpLeadsToEndlessLoop(regexp) {
          // Exit early if it's one of these special cases which are meant to match
          // against an empty string
          if (
            regexp.source === "^" ||
            regexp.source === "^$" ||
            regexp.source === "$" ||
            regexp.source === "^\\s*$"
          ) {
            return false;
          } // We check against an empty string. If the regular expression doesn't advance
          // (e.g. ends in an endless loop) it will match an empty string.

          var match = regexp.exec("");
          return !!(match && regexp.lastIndex === 0);
        }
        function regExpFlags(regexp) {
          return (
            (regexp.global ? "g" : "") +
            (regexp.ignoreCase ? "i" : "") +
            (regexp.multiline ? "m" : "") +
            (regexp.unicode ? "u" : "")
          );
        }
        /**
         * Returns first index of the string that is not whitespace.
         * If string is empty or contains only whitespaces, returns -1
         */

        function firstNonWhitespaceIndex(str) {
          for (var i = 0, len = str.length; i < len; i++) {
            var chCode = str.charCodeAt(i);

            if (
              chCode !== 32 &&
              /* Space */
              chCode !== 9
              /* Tab */
            ) {
              return i;
            }
          }

          return -1;
        }
        /**
         * Returns the leading whitespace of the string.
         * If the string contains only whitespaces, returns entire string
         */

        function getLeadingWhitespace(str, start, end) {
          if (start === void 0) {
            start = 0;
          }

          if (end === void 0) {
            end = str.length;
          }

          for (var i = start; i < end; i++) {
            var chCode = str.charCodeAt(i);

            if (
              chCode !== 32 &&
              /* Space */
              chCode !== 9
              /* Tab */
            ) {
              return str.substring(start, i);
            }
          }

          return str.substring(start, end);
        }
        /**
         * Returns last index of the string that is not whitespace.
         * If string is empty or contains only whitespaces, returns -1
         */

        function lastNonWhitespaceIndex(str, startIndex) {
          if (startIndex === void 0) {
            startIndex = str.length - 1;
          }

          for (var i = startIndex; i >= 0; i--) {
            var chCode = str.charCodeAt(i);

            if (
              chCode !== 32 &&
              /* Space */
              chCode !== 9
              /* Tab */
            ) {
              return i;
            }
          }

          return -1;
        }
        function compare(a, b) {
          if (a < b) {
            return -1;
          } else if (a > b) {
            return 1;
          } else {
            return 0;
          }
        }
        function isLowerAsciiLetter(code) {
          return (
            code >= 97 &&
            /* a */
            code <= 122
            /* z */
          );
        }
        function isUpperAsciiLetter(code) {
          return (
            code >= 65 &&
            /* A */
            code <= 90
            /* Z */
          );
        }

        function isAsciiLetter(code) {
          return isLowerAsciiLetter(code) || isUpperAsciiLetter(code);
        }

        function equalsIgnoreCase(a, b) {
          var len1 = a ? a.length : 0;
          var len2 = b ? b.length : 0;

          if (len1 !== len2) {
            return false;
          }

          return doEqualsIgnoreCase(a, b);
        }

        function doEqualsIgnoreCase(a, b, stopAt) {
          if (stopAt === void 0) {
            stopAt = a.length;
          }

          if (typeof a !== "string" || typeof b !== "string") {
            return false;
          }

          for (var i = 0; i < stopAt; i++) {
            var codeA = a.charCodeAt(i);
            var codeB = b.charCodeAt(i);

            if (codeA === codeB) {
              continue;
            } // a-z A-Z

            if (isAsciiLetter(codeA) && isAsciiLetter(codeB)) {
              var diff = Math.abs(codeA - codeB);

              if (diff !== 0 && diff !== 32) {
                return false;
              }
            } // Any other charcode
            else {
              if (
                String.fromCharCode(codeA).toLowerCase() !==
                String.fromCharCode(codeB).toLowerCase()
              ) {
                return false;
              }
            }
          }

          return true;
        }

        function startsWithIgnoreCase(str, candidate) {
          var candidateLength = candidate.length;

          if (candidate.length > str.length) {
            return false;
          }

          return doEqualsIgnoreCase(str, candidate, candidateLength);
        }
        /**
         * @returns the length of the common prefix of the two strings.
         */

        function commonPrefixLength(a, b) {
          var i,
            len = Math.min(a.length, b.length);

          for (i = 0; i < len; i++) {
            if (a.charCodeAt(i) !== b.charCodeAt(i)) {
              return i;
            }
          }

          return len;
        }
        /**
         * @returns the length of the common suffix of the two strings.
         */

        function commonSuffixLength(a, b) {
          var i,
            len = Math.min(a.length, b.length);
          var aLastIndex = a.length - 1;
          var bLastIndex = b.length - 1;

          for (i = 0; i < len; i++) {
            if (a.charCodeAt(aLastIndex - i) !== b.charCodeAt(bLastIndex - i)) {
              return i;
            }
          }

          return len;
        } // --- unicode
        // http://en.wikipedia.org/wiki/Surrogate_pair
        // Returns the code point starting at a specified index in a string
        // Code points U+0000 to U+D7FF and U+E000 to U+FFFF are represented on a single character
        // Code points U+10000 to U+10FFFF are represented on two consecutive characters
        //export function getUnicodePoint(str:string, index:number, len:number):number {
        //	const chrCode = str.charCodeAt(index);
        //	if (0xD800 <= chrCode && chrCode <= 0xDBFF && index + 1 < len) {
        //		const nextChrCode = str.charCodeAt(index + 1);
        //		if (0xDC00 <= nextChrCode && nextChrCode <= 0xDFFF) {
        //			return (chrCode - 0xD800) << 10 + (nextChrCode - 0xDC00) + 0x10000;
        //		}
        //	}
        //	return chrCode;
        //}

        function isHighSurrogate(charCode) {
          return 0xd800 <= charCode && charCode <= 0xdbff;
        }
        function isLowSurrogate(charCode) {
          return 0xdc00 <= charCode && charCode <= 0xdfff;
        }
        /**
         * Generated using https://github.com/alexandrudima/unicode-utils/blob/master/generate-rtl-test.js
         */

        var CONTAINS_RTL = /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u08BD\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE33\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDCFF]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD50-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
        /**
         * Returns true if `str` contains any Unicode character that is classified as "R" or "AL".
         */

        function containsRTL(str) {
          return CONTAINS_RTL.test(str);
        }
        /**
         * Generated using https://github.com/alexandrudima/unicode-utils/blob/master/generate-emoji-test.js
         */

        var CONTAINS_EMOJI = /(?:[\u231A\u231B\u23F0\u23F3\u2600-\u27BF\u2B50\u2B55]|\uD83C[\uDDE6-\uDDFF\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEF8]|\uD83E[\uDD00-\uDDE6])/;
        function containsEmoji(str) {
          return CONTAINS_EMOJI.test(str);
        }
        var IS_BASIC_ASCII = /^[\t\n\r\x20-\x7E]*$/;
        /**
         * Returns true if `str` contains only basic ASCII characters in the range 32 - 126 (including 32 and 126) or \n, \r, \t
         */

        function isBasicASCII(str) {
          return IS_BASIC_ASCII.test(str);
        }
        function containsFullWidthCharacter(str) {
          for (var i = 0, len = str.length; i < len; i++) {
            if (isFullWidthCharacter(str.charCodeAt(i))) {
              return true;
            }
          }

          return false;
        }
        function isFullWidthCharacter(charCode) {
          // Do a cheap trick to better support wrapping of wide characters, treat them as 2 columns
          // http://jrgraphix.net/research/unicode_blocks.php
          //          2E80 — 2EFF   CJK Radicals Supplement
          //          2F00 — 2FDF   Kangxi Radicals
          //          2FF0 — 2FFF   Ideographic Description Characters
          //          3000 — 303F   CJK Symbols and Punctuation
          //          3040 — 309F   Hiragana
          //          30A0 — 30FF   Katakana
          //          3100 — 312F   Bopomofo
          //          3130 — 318F   Hangul Compatibility Jamo
          //          3190 — 319F   Kanbun
          //          31A0 — 31BF   Bopomofo Extended
          //          31F0 — 31FF   Katakana Phonetic Extensions
          //          3200 — 32FF   Enclosed CJK Letters and Months
          //          3300 — 33FF   CJK Compatibility
          //          3400 — 4DBF   CJK Unified Ideographs Extension A
          //          4DC0 — 4DFF   Yijing Hexagram Symbols
          //          4E00 — 9FFF   CJK Unified Ideographs
          //          A000 — A48F   Yi Syllables
          //          A490 — A4CF   Yi Radicals
          //          AC00 — D7AF   Hangul Syllables
          // [IGNORE] D800 — DB7F   High Surrogates
          // [IGNORE] DB80 — DBFF   High Private Use Surrogates
          // [IGNORE] DC00 — DFFF   Low Surrogates
          // [IGNORE] E000 — F8FF   Private Use Area
          //          F900 — FAFF   CJK Compatibility Ideographs
          // [IGNORE] FB00 — FB4F   Alphabetic Presentation Forms
          // [IGNORE] FB50 — FDFF   Arabic Presentation Forms-A
          // [IGNORE] FE00 — FE0F   Variation Selectors
          // [IGNORE] FE20 — FE2F   Combining Half Marks
          // [IGNORE] FE30 — FE4F   CJK Compatibility Forms
          // [IGNORE] FE50 — FE6F   Small Form Variants
          // [IGNORE] FE70 — FEFF   Arabic Presentation Forms-B
          //          FF00 — FFEF   Halfwidth and Fullwidth Forms
          //               [https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms]
          //               of which FF01 - FF5E fullwidth ASCII of 21 to 7E
          // [IGNORE]    and FF65 - FFDC halfwidth of Katakana and Hangul
          // [IGNORE] FFF0 — FFFF   Specials
          charCode = +charCode; // @perf

          return (
            (charCode >= 0x2e80 && charCode <= 0xd7af) ||
            (charCode >= 0xf900 && charCode <= 0xfaff) ||
            (charCode >= 0xff01 && charCode <= 0xff5e)
          );
        } // -- UTF-8 BOM

        var UTF8_BOM_CHARACTER = String.fromCharCode(
          65279
          /* UTF8_BOM */
        );
        function startsWithUTF8BOM(str) {
          return !!(str && str.length > 0 && str.charCodeAt(0) === 65279);
          /* UTF8_BOM */
        }
        function safeBtoa(str) {
          return btoa(encodeURIComponent(str)); // we use encodeURIComponent because btoa fails for non Latin 1 values
        }
        function repeat(s, count) {
          var result = "";

          for (var i = 0; i < count; i++) {
            result += s;
          }

          return result;
        }

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/base/common/types.js":
      /*!****************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/types.js ***!
  \****************************************************************/
      /*! exports provided: isArray, isString, isObject, isNumber, isBoolean, isUndefined, isUndefinedOrNull, isEmptyObject, isFunction, validateConstraints, validateConstraint, getAllPropertyNames, withNullAsUndefined, withUndefinedAsNull */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isArray",
          function() {
            return isArray;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isString",
          function() {
            return isString;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isObject",
          function() {
            return isObject;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isNumber",
          function() {
            return isNumber;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isBoolean",
          function() {
            return isBoolean;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isUndefined",
          function() {
            return isUndefined;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isUndefinedOrNull",
          function() {
            return isUndefinedOrNull;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isEmptyObject",
          function() {
            return isEmptyObject;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isFunction",
          function() {
            return isFunction;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "validateConstraints",
          function() {
            return validateConstraints;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "validateConstraint",
          function() {
            return validateConstraint;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getAllPropertyNames",
          function() {
            return getAllPropertyNames;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "withNullAsUndefined",
          function() {
            return withNullAsUndefined;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "withUndefinedAsNull",
          function() {
            return withUndefinedAsNull;
          }
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/object/get-own-property-names */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-names.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__
        );

        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/
        var _typeof = {
          number: "number",
          string: "string",
          undefined: "undefined",
          object: "object",
          function: "function"
        };
        /**
         * @returns whether the provided parameter is a JavaScript Array or not.
         */

        function isArray(array) {
          if (
            _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default.a
          ) {
            return _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(
              array
            );
          }

          if (
            array &&
            typeof array.length === _typeof.number &&
            array.constructor === Array
          ) {
            return true;
          }

          return false;
        }
        /**
         * @returns whether the provided parameter is a JavaScript String or not.
         */

        function isString(str) {
          if (typeof str === _typeof.string || str instanceof String) {
            return true;
          }

          return false;
        }
        /**
         *
         * @returns whether the provided parameter is of type `object` but **not**
         *	`null`, an `array`, a `regexp`, nor a `date`.
         */

        function isObject(obj) {
          // The method can't do a type cast since there are type (like strings) which
          // are subclasses of any put not positvely matched by the function. Hence type
          // narrowing results in wrong results.
          return (
            typeof obj === _typeof.object &&
            obj !== null &&
            !_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(
              obj
            ) &&
            !(obj instanceof RegExp) &&
            !(obj instanceof Date)
          );
        }
        /**
         * In **contrast** to just checking `typeof` this will return `false` for `NaN`.
         * @returns whether the provided parameter is a JavaScript Number or not.
         */

        function isNumber(obj) {
          if (
            (typeof obj === _typeof.number || obj instanceof Number) &&
            !isNaN(obj)
          ) {
            return true;
          }

          return false;
        }
        /**
         * @returns whether the provided parameter is a JavaScript Boolean or not.
         */

        function isBoolean(obj) {
          return obj === true || obj === false;
        }
        /**
         * @returns whether the provided parameter is undefined.
         */

        function isUndefined(obj) {
          return typeof obj === _typeof.undefined;
        }
        /**
         * @returns whether the provided parameter is undefined or null.
         */

        function isUndefinedOrNull(obj) {
          return isUndefined(obj) || obj === null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        /**
         * @returns whether the provided parameter is an empty JavaScript Object or not.
         */

        function isEmptyObject(obj) {
          if (!isObject(obj)) {
            return false;
          }

          for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) {
              return false;
            }
          }

          return true;
        }
        /**
         * @returns whether the provided parameter is a JavaScript Function or not.
         */

        function isFunction(obj) {
          return typeof obj === _typeof.function;
        }
        function validateConstraints(args, constraints) {
          var len = Math.min(args.length, constraints.length);

          for (var i = 0; i < len; i++) {
            validateConstraint(args[i], constraints[i]);
          }
        }
        function validateConstraint(arg, constraint) {
          if (isString(constraint)) {
            if (typeof arg !== constraint) {
              throw new Error(
                "argument does not match constraint: typeof " + constraint
              );
            }
          } else if (isFunction(constraint)) {
            try {
              if (arg instanceof constraint) {
                return;
              }
            } catch (_a) {
              // ignore
            }

            if (!isUndefinedOrNull(arg) && arg.constructor === constraint) {
              return;
            }

            if (
              constraint.length === 1 &&
              constraint.call(undefined, arg) === true
            ) {
              return;
            }

            throw new Error(
              "argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true"
            );
          }
        }
        function getAllPropertyNames(obj) {
          var res = [];

          var proto = _babel_runtime_corejs2_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(
            obj
          );

          while (Object.prototype !== proto) {
            res = res.concat(
              _babel_runtime_corejs2_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_0___default()(
                proto
              )
            );
            proto = _babel_runtime_corejs2_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(
              proto
            );
          }

          return res;
        }
        /**
         * Converts null to undefined, passes all other values through.
         */

        function withNullAsUndefined(x) {
          return x === null ? undefined : x;
        }
        /**
         * Converts undefined to null, passes all other values through.
         */

        function withUndefinedAsNull(x) {
          return typeof x === "undefined" ? null : x;
        }

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/base/common/uri.js":
      /*!**************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/uri.js ***!
  \**************************************************************/
      /*! exports provided: URI */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "URI",
          function() {
            return URI;
          }
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./platform.js */ "./node_modules/monaco-editor/esm/vs/base/common/platform.js"
        );

        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/
        var __extends =
          (undefined && undefined.__extends) ||
          (function() {
            var _extendStatics = function extendStatics(d, b) {
              _extendStatics =
                _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ||
                ({
                  __proto__: []
                } instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                  }
                };

              return _extendStatics(d, b);
            };

            return function(d, b) {
              _extendStatics(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype =
                b === null
                  ? _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(
                      b
                    )
                  : ((__.prototype = b.prototype), new __());
            };
          })();

        var _a;

        var _schemePattern = /^\w[\w\d+.-]*$/;
        var _singleSlashStart = /^\//;
        var _doubleSlashStart = /^\/\//;
        var _throwOnMissingSchema = true;

        function _validateUri(ret, _strict) {
          // scheme, must be set
          if (!ret.scheme) {
            if (_strict || _throwOnMissingSchema) {
              throw new Error(
                '[UriError]: Scheme is missing: {scheme: "", authority: "' +
                  ret.authority +
                  '", path: "' +
                  ret.path +
                  '", query: "' +
                  ret.query +
                  '", fragment: "' +
                  ret.fragment +
                  '"}'
              );
            } else {
              console.warn(
                '[UriError]: Scheme is missing: {scheme: "", authority: "' +
                  ret.authority +
                  '", path: "' +
                  ret.path +
                  '", query: "' +
                  ret.query +
                  '", fragment: "' +
                  ret.fragment +
                  '"}'
              );
            }
          } // scheme, https://tools.ietf.org/html/rfc3986#section-3.1
          // ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )

          if (ret.scheme && !_schemePattern.test(ret.scheme)) {
            throw new Error("[UriError]: Scheme contains illegal characters.");
          } // path, http://tools.ietf.org/html/rfc3986#section-3.3
          // If a URI contains an authority component, then the path component
          // must either be empty or begin with a slash ("/") character.  If a URI
          // does not contain an authority component, then the path cannot begin
          // with two slash characters ("//").

          if (ret.path) {
            if (ret.authority) {
              if (!_singleSlashStart.test(ret.path)) {
                throw new Error(
                  '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
                );
              }
            } else {
              if (_doubleSlashStart.test(ret.path)) {
                throw new Error(
                  '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
                );
              }
            }
          }
        } // for a while we allowed uris *without* schemes and this is the migration
        // for them, e.g. an uri without scheme and without strict-mode warns and falls
        // back to the file-scheme. that should cause the least carnage and still be a
        // clear warning

        function _schemeFix(scheme, _strict) {
          if (_strict || _throwOnMissingSchema) {
            return scheme || _empty;
          }

          if (!scheme) {
            console.trace("BAD uri lacks scheme, falling back to file-scheme.");
            scheme = "file";
          }

          return scheme;
        } // implements a bit of https://tools.ietf.org/html/rfc3986#section-5

        function _referenceResolution(scheme, path) {
          // the slash-character is our 'default base' as we don't
          // support constructing URIs relative to other URIs. This
          // also means that we alter and potentially break paths.
          // see https://tools.ietf.org/html/rfc3986#section-5.1.4
          switch (scheme) {
            case "https":
            case "http":
            case "file":
              if (!path) {
                path = _slash;
              } else if (path[0] !== _slash) {
                path = _slash + path;
              }

              break;
          }

          return path;
        }

        var _empty = "";
        var _slash = "/";
        var _regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
        /**
         * Uniform Resource Identifier (URI) http://tools.ietf.org/html/rfc3986.
         * This class is a simple parser which creates the basic component parts
         * (http://tools.ietf.org/html/rfc3986#section-3) with minimal validation
         * and encoding.
         *
         *       foo://example.com:8042/over/there?name=ferret#nose
         *       \_/   \______________/\_________/ \_________/ \__/
         *        |           |            |            |        |
         *     scheme     authority       path        query   fragment
         *        |   _____________________|__
         *       / \ /                        \
         *       urn:example:animal:ferret:nose
         */

        var URI =
          /** @class */
          (function() {
            /**
             * @internal
             */
            function URI(
              schemeOrData,
              authority,
              path,
              query,
              fragment,
              _strict
            ) {
              if (_strict === void 0) {
                _strict = false;
              }

              if (typeof schemeOrData === "object") {
                this.scheme = schemeOrData.scheme || _empty;
                this.authority = schemeOrData.authority || _empty;
                this.path = schemeOrData.path || _empty;
                this.query = schemeOrData.query || _empty;
                this.fragment = schemeOrData.fragment || _empty; // no validation because it's this URI
                // that creates uri components.
                // _validateUri(this);
              } else {
                this.scheme = _schemeFix(schemeOrData, _strict);
                this.authority = authority || _empty;
                this.path = _referenceResolution(this.scheme, path || _empty);
                this.query = query || _empty;
                this.fragment = fragment || _empty;

                _validateUri(this, _strict);
              }
            }

            URI.isUri = function(thing) {
              if (thing instanceof URI) {
                return true;
              }

              if (!thing) {
                return false;
              }

              return (
                typeof thing.authority === "string" &&
                typeof thing.fragment === "string" &&
                typeof thing.path === "string" &&
                typeof thing.query === "string" &&
                typeof thing.scheme === "string" &&
                typeof thing.fsPath === "function" &&
                typeof thing.with === "function" &&
                typeof thing.toString === "function"
              );
            };

            Object.defineProperty(URI.prototype, "fsPath", {
              // ---- filesystem path -----------------------

              /**
     * Returns a string representing the corresponding file system path of this URI.
     * Will handle UNC paths, normalizes windows drive letters to lower-case, and uses the
     * platform specific path separator.
     *
     * * Will *not* validate the path for invalid characters and semantics.
     * * Will *not* look at the scheme of this URI.
     * * The result shall *not* be used for display purposes but for accessing a file on disk.
     *
     *
     * The *difference* to `URI#path` is the use of the platform specific separator and the handling
     * of UNC paths. See the below sample of a file-uri with an authority (UNC path).
     *
     * ```ts
        const u = URI.parse('file://server/c$/folder/file.txt')
        u.authority === 'server'
        u.path === '/shares/c$/file.txt'
        u.fsPath === '\\server\c$\folder\file.txt'
    ```
     *
     * Using `URI#path` to read a file (using fs-apis) would not be enough because parts of the path,
     * namely the server name, would be missing. Therefore `URI#fsPath` exists - it's sugar to ease working
     * with URIs that represent files on disk (`file` scheme).
     */
              get: function get() {
                // if (this.scheme !== 'file') {
                // 	console.warn(`[UriError] calling fsPath with scheme ${this.scheme}`);
                // }
                return _makeFsPath(this);
              },
              enumerable: true,
              configurable: true
            }); // ---- modify to new -------------------------

            URI.prototype.with = function(change) {
              if (!change) {
                return this;
              }

              var scheme = change.scheme,
                authority = change.authority,
                path = change.path,
                query = change.query,
                fragment = change.fragment;

              if (scheme === undefined) {
                scheme = this.scheme;
              } else if (scheme === null) {
                scheme = _empty;
              }

              if (authority === undefined) {
                authority = this.authority;
              } else if (authority === null) {
                authority = _empty;
              }

              if (path === undefined) {
                path = this.path;
              } else if (path === null) {
                path = _empty;
              }

              if (query === undefined) {
                query = this.query;
              } else if (query === null) {
                query = _empty;
              }

              if (fragment === undefined) {
                fragment = this.fragment;
              } else if (fragment === null) {
                fragment = _empty;
              }

              if (
                scheme === this.scheme &&
                authority === this.authority &&
                path === this.path &&
                query === this.query &&
                fragment === this.fragment
              ) {
                return this;
              }

              return new _URI(scheme, authority, path, query, fragment);
            }; // ---- parse & validate ------------------------

            /**
             * Creates a new URI from a string, e.g. `http://www.msft.com/some/path`,
             * `file:///usr/home`, or `scheme:with/path`.
             *
             * @param value A string which represents an URI (see `URI#toString`).
             */

            URI.parse = function(value, _strict) {
              if (_strict === void 0) {
                _strict = false;
              }

              var match = _regexp.exec(value);

              if (!match) {
                return new _URI(_empty, _empty, _empty, _empty, _empty);
              }

              return new _URI(
                match[2] || _empty,
                decodeURIComponent(match[4] || _empty),
                decodeURIComponent(match[5] || _empty),
                decodeURIComponent(match[7] || _empty),
                decodeURIComponent(match[9] || _empty),
                _strict
              );
            };
            /**
   * Creates a new URI from a file system path, e.g. `c:\my\files`,
   * `/usr/home`, or `\\server\share\some\path`.
   *
   * The *difference* between `URI#parse` and `URI#file` is that the latter treats the argument
   * as path, not as stringified-uri. E.g. `URI.file(path)` is **not the same as**
   * `URI.parse('file://' + path)` because the path might contain characters that are
   * interpreted (# and ?). See the following sample:
   * ```ts
  const good = URI.file('/coding/c#/project1');
  good.scheme === 'file';
  good.path === '/coding/c#/project1';
  good.fragment === '';
  const bad = URI.parse('file://' + '/coding/c#/project1');
  bad.scheme === 'file';
  bad.path === '/coding/c'; // path is now broken
  bad.fragment === '/project1';
  ```
   *
   * @param path A file system path (see `URI#fsPath`)
   */

            URI.file = function(path) {
              var authority = _empty; // normalize to fwd-slashes on windows,
              // on other systems bwd-slashes are valid
              // filename character, eg /f\oo/ba\r.txt

              if (_platform_js__WEBPACK_IMPORTED_MODULE_2__["isWindows"]) {
                path = path.replace(/\\/g, _slash);
              } // check for authority as used in UNC shares
              // or use the path as given

              if (path[0] === _slash && path[1] === _slash) {
                var idx = path.indexOf(_slash, 2);

                if (idx === -1) {
                  authority = path.substring(2);
                  path = _slash;
                } else {
                  authority = path.substring(2, idx);
                  path = path.substring(idx) || _slash;
                }
              }

              return new _URI("file", authority, path, _empty, _empty);
            };

            URI.from = function(components) {
              return new _URI(
                components.scheme,
                components.authority,
                components.path,
                components.query,
                components.fragment
              );
            }; // ---- printing/externalize ---------------------------

            /**
             * Creates a string representation for this URI. It's guaranteed that calling
             * `URI.parse` with the result of this function creates an URI which is equal
             * to this URI.
             *
             * * The result shall *not* be used for display purposes but for externalization or transport.
             * * The result will be encoded using the percentage encoding and encoding happens mostly
             * ignore the scheme-specific encoding rules.
             *
             * @param skipEncoding Do not encode the result, default is `false`
             */

            URI.prototype.toString = function(skipEncoding) {
              if (skipEncoding === void 0) {
                skipEncoding = false;
              }

              return _asFormatted(this, skipEncoding);
            };

            URI.prototype.toJSON = function() {
              return this;
            };

            URI.revive = function(data) {
              if (!data) {
                return data;
              } else if (data instanceof URI) {
                return data;
              } else {
                var result = new _URI(data);
                result._fsPath = data.fsPath;
                result._formatted = data.external;
                return result;
              }
            };

            return URI;
          })();

        // tslint:disable-next-line:class-name

        var _URI =
          /** @class */
          (function(_super) {
            __extends(_URI, _super);

            function _URI() {
              var _this =
                (_super !== null && _super.apply(this, arguments)) || this;

              _this._formatted = null;
              _this._fsPath = null;
              return _this;
            }

            Object.defineProperty(_URI.prototype, "fsPath", {
              get: function get() {
                if (!this._fsPath) {
                  this._fsPath = _makeFsPath(this);
                }

                return this._fsPath;
              },
              enumerable: true,
              configurable: true
            });

            _URI.prototype.toString = function(skipEncoding) {
              if (skipEncoding === void 0) {
                skipEncoding = false;
              }

              if (!skipEncoding) {
                if (!this._formatted) {
                  this._formatted = _asFormatted(this, false);
                }

                return this._formatted;
              } else {
                // we don't cache that
                return _asFormatted(this, true);
              }
            };

            _URI.prototype.toJSON = function() {
              var res = {
                $mid: 1
              }; // cached state

              if (this._fsPath) {
                res.fsPath = this._fsPath;
              }

              if (this._formatted) {
                res.external = this._formatted;
              } // uri components

              if (this.path) {
                res.path = this.path;
              }

              if (this.scheme) {
                res.scheme = this.scheme;
              }

              if (this.authority) {
                res.authority = this.authority;
              }

              if (this.query) {
                res.query = this.query;
              }

              if (this.fragment) {
                res.fragment = this.fragment;
              }

              return res;
            };

            return _URI;
          })(URI); // reserved characters: https://tools.ietf.org/html/rfc3986#section-2.2

        var encodeTable =
          ((_a = {}),
          (_a[58] = "%3A"),
          /* Colon */
          (_a[47] = "%2F"),
          /* Slash */
          (_a[63] = "%3F"),
          /* QuestionMark */
          (_a[35] = "%23"),
          /* Hash */
          (_a[91] = "%5B"),
          /* OpenSquareBracket */
          (_a[93] = "%5D"),
          /* CloseSquareBracket */
          (_a[64] = "%40"),
          /* AtSign */
          (_a[33] = "%21"),
          /* ExclamationMark */
          (_a[36] = "%24"),
          /* DollarSign */
          (_a[38] = "%26"),
          /* Ampersand */
          (_a[39] = "%27"),
          /* SingleQuote */
          (_a[40] = "%28"),
          /* OpenParen */
          (_a[41] = "%29"),
          /* CloseParen */
          (_a[42] = "%2A"),
          /* Asterisk */
          (_a[43] = "%2B"),
          /* Plus */
          (_a[44] = "%2C"),
          /* Comma */
          (_a[59] = "%3B"),
          /* Semicolon */
          (_a[61] = "%3D"),
          /* Equals */
          (_a[32] = "%20"),
          /* Space */
          _a);

        function encodeURIComponentFast(uriComponent, allowSlash) {
          var res = undefined;
          var nativeEncodePos = -1;

          for (var pos = 0; pos < uriComponent.length; pos++) {
            var code = uriComponent.charCodeAt(pos); // unreserved characters: https://tools.ietf.org/html/rfc3986#section-2.3

            if (
              (code >= 97 &&
                /* a */
                code <= 122) ||
              /* z */
              (code >= 65 &&
                /* A */
                code <= 90) ||
              /* Z */
              (code >= 48 &&
                /* Digit0 */
                code <= 57) ||
              /* Digit9 */
              code === 45 ||
              /* Dash */
              code === 46 ||
              /* Period */
              code === 95 ||
              /* Underline */
              code === 126 ||
              /* Tilde */
              (allowSlash && code === 47)
              /* Slash */
            ) {
              // check if we are delaying native encode
              if (nativeEncodePos !== -1) {
                res += encodeURIComponent(
                  uriComponent.substring(nativeEncodePos, pos)
                );
                nativeEncodePos = -1;
              } // check if we write into a new string (by default we try to return the param)

              if (res !== undefined) {
                res += uriComponent.charAt(pos);
              }
            } else {
              // encoding needed, we need to allocate a new string
              if (res === undefined) {
                res = uriComponent.substr(0, pos);
              } // check with default table first

              var escaped = encodeTable[code];

              if (escaped !== undefined) {
                // check if we are delaying native encode
                if (nativeEncodePos !== -1) {
                  res += encodeURIComponent(
                    uriComponent.substring(nativeEncodePos, pos)
                  );
                  nativeEncodePos = -1;
                } // append escaped variant to result

                res += escaped;
              } else if (nativeEncodePos === -1) {
                // use native encode only when needed
                nativeEncodePos = pos;
              }
            }
          }

          if (nativeEncodePos !== -1) {
            res += encodeURIComponent(uriComponent.substring(nativeEncodePos));
          }

          return res !== undefined ? res : uriComponent;
        }

        function encodeURIComponentMinimal(path) {
          var res = undefined;

          for (var pos = 0; pos < path.length; pos++) {
            var code = path.charCodeAt(pos);

            if (
              code === 35 ||
              /* Hash */
              code === 63
              /* QuestionMark */
            ) {
              if (res === undefined) {
                res = path.substr(0, pos);
              }

              res += encodeTable[code];
            } else {
              if (res !== undefined) {
                res += path[pos];
              }
            }
          }

          return res !== undefined ? res : path;
        }
        /**
         * Compute `fsPath` for the given uri
         */

        function _makeFsPath(uri) {
          var value;

          if (uri.authority && uri.path.length > 1 && uri.scheme === "file") {
            // unc path: file://shares/c$/far/boo
            value = "//" + uri.authority + uri.path;
          } else if (
            uri.path.charCodeAt(0) === 47 &&
            /* Slash */
            ((uri.path.charCodeAt(1) >= 65 &&
              /* A */
              uri.path.charCodeAt(1) <= 90) ||
              /* Z */
              (uri.path.charCodeAt(1) >= 97 &&
                /* a */
                uri.path.charCodeAt(1) <= 122)) &&
            /* z */
            uri.path.charCodeAt(2) === 58
            /* Colon */
          ) {
            // windows drive letter: file:///c:/far/boo
            value = uri.path[1].toLowerCase() + uri.path.substr(2);
          } else {
            // other path
            value = uri.path;
          }

          if (_platform_js__WEBPACK_IMPORTED_MODULE_2__["isWindows"]) {
            value = value.replace(/\//g, "\\");
          }

          return value;
        }
        /**
         * Create the external version of a uri
         */

        function _asFormatted(uri, skipEncoding) {
          var encoder = !skipEncoding
            ? encodeURIComponentFast
            : encodeURIComponentMinimal;
          var res = "";
          var scheme = uri.scheme,
            authority = uri.authority,
            path = uri.path,
            query = uri.query,
            fragment = uri.fragment;

          if (scheme) {
            res += scheme;
            res += ":";
          }

          if (authority || scheme === "file") {
            res += _slash;
            res += _slash;
          }

          if (authority) {
            var idx = authority.indexOf("@");

            if (idx !== -1) {
              // <user>@<auth>
              var userinfo = authority.substr(0, idx);
              authority = authority.substr(idx + 1);
              idx = userinfo.indexOf(":");

              if (idx === -1) {
                res += encoder(userinfo, false);
              } else {
                // <user>:<pass>@<auth>
                res += encoder(userinfo.substr(0, idx), false);
                res += ":";
                res += encoder(userinfo.substr(idx + 1), false);
              }

              res += "@";
            }

            authority = authority.toLowerCase();
            idx = authority.indexOf(":");

            if (idx === -1) {
              res += encoder(authority, false);
            } else {
              // <auth>:<port>
              res += encoder(authority.substr(0, idx), false);
              res += authority.substr(idx);
            }
          }

          if (path) {
            // lower-case windows drive letters in /C:/fff or C:/fff
            if (
              path.length >= 3 &&
              path.charCodeAt(0) === 47 &&
              /* Slash */
              path.charCodeAt(2) === 58
              /* Colon */
            ) {
              var code = path.charCodeAt(1);

              if (
                code >= 65 &&
                /* A */
                code <= 90
                /* Z */
              ) {
                path =
                  "/" + String.fromCharCode(code + 32) + ":" + path.substr(3); // "/c:".length === 3
              }
            } else if (
              path.length >= 2 &&
              path.charCodeAt(1) === 58
              /* Colon */
            ) {
              var code = path.charCodeAt(0);

              if (
                code >= 65 &&
                /* A */
                code <= 90
                /* Z */
              ) {
                path = String.fromCharCode(code + 32) + ":" + path.substr(2); // "/c:".length === 3
              }
            } // encode the rest of the path

            res += encoder(path, true);
          }

          if (query) {
            res += "?";
            res += encoder(query, false);
          }

          if (fragment) {
            res += "#";
            res += !skipEncoding
              ? encodeURIComponentFast(fragment, false)
              : fragment;
          }

          return res;
        }

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker.js":
      /*!******************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker.js ***!
  \******************************************************************************/
      /*! exports provided: logOnceWebWorkerWarning, SimpleWorkerClient, SimpleWorkerServer, create */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "logOnceWebWorkerWarning",
          function() {
            return logOnceWebWorkerWarning;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SimpleWorkerClient",
          function() {
            return SimpleWorkerClient;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SimpleWorkerServer",
          function() {
            return SimpleWorkerServer;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "create",
          function() {
            return create;
          }
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../errors.js */ "./node_modules/monaco-editor/esm/vs/base/common/errors.js"
        );
        /* harmony import */ var _lifecycle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../lifecycle.js */ "./node_modules/monaco-editor/esm/vs/base/common/lifecycle.js"
        );
        /* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../platform.js */ "./node_modules/monaco-editor/esm/vs/base/common/platform.js"
        );
        /* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../types.js */ "./node_modules/monaco-editor/esm/vs/base/common/types.js"
        );

        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/
        var __extends =
          (undefined && undefined.__extends) ||
          (function() {
            var _extendStatics = function extendStatics(d, b) {
              _extendStatics =
                _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3___default.a ||
                ({
                  __proto__: []
                } instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                  }
                };

              return _extendStatics(d, b);
            };

            return function(d, b) {
              _extendStatics(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype =
                b === null
                  ? _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_2___default()(
                      b
                    )
                  : ((__.prototype = b.prototype), new __());
            };
          })();

        var INITIALIZE = "$initialize";
        var webWorkerWarningLogged = false;
        function logOnceWebWorkerWarning(err) {
          if (!_platform_js__WEBPACK_IMPORTED_MODULE_6__["isWeb"]) {
            // running tests
            return;
          }

          if (!webWorkerWarningLogged) {
            webWorkerWarningLogged = true;
            console.warn(
              "Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/Microsoft/monaco-editor#faq"
            );
          }

          console.warn(err.message);
        }

        var SimpleWorkerProtocol =
          /** @class */
          (function() {
            function SimpleWorkerProtocol(handler) {
              this._workerId = -1;
              this._handler = handler;
              this._lastSentReq = 0;
              this._pendingReplies = _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_2___default()(
                null
              );
            }

            SimpleWorkerProtocol.prototype.setWorkerId = function(workerId) {
              this._workerId = workerId;
            };

            SimpleWorkerProtocol.prototype.sendMessage = function(
              method,
              args
            ) {
              var _this = this;

              var req = String(++this._lastSentReq);
              return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(
                function(resolve, reject) {
                  _this._pendingReplies[req] = {
                    resolve: resolve,
                    reject: reject
                  };

                  _this._send({
                    vsWorker: _this._workerId,
                    req: req,
                    method: method,
                    args: args
                  });
                }
              );
            };

            SimpleWorkerProtocol.prototype.handleMessage = function(
              serializedMessage
            ) {
              var message;

              try {
                message = JSON.parse(serializedMessage);
              } catch (e) {
                // nothing
                return;
              }

              if (!message || !message.vsWorker) {
                return;
              }

              if (
                this._workerId !== -1 &&
                message.vsWorker !== this._workerId
              ) {
                return;
              }

              this._handleMessage(message);
            };

            SimpleWorkerProtocol.prototype._handleMessage = function(msg) {
              var _this = this;

              if (msg.seq) {
                var replyMessage = msg;

                if (!this._pendingReplies[replyMessage.seq]) {
                  console.warn("Got reply to unknown seq");
                  return;
                }

                var reply = this._pendingReplies[replyMessage.seq];
                delete this._pendingReplies[replyMessage.seq];

                if (replyMessage.err) {
                  var err = replyMessage.err;

                  if (replyMessage.err.$isError) {
                    err = new Error();
                    err.name = replyMessage.err.name;
                    err.message = replyMessage.err.message;
                    err.stack = replyMessage.err.stack;
                  }

                  reply.reject(err);
                  return;
                }

                reply.resolve(replyMessage.res);
                return;
              }

              var requestMessage = msg;
              var req = requestMessage.req;

              var result = this._handler.handleMessage(
                requestMessage.method,
                requestMessage.args
              );

              result.then(
                function(r) {
                  _this._send({
                    vsWorker: _this._workerId,
                    seq: req,
                    res: r,
                    err: undefined
                  });
                },
                function(e) {
                  if (e.detail instanceof Error) {
                    // Loading errors have a detail property that points to the actual error
                    e.detail = Object(
                      _errors_js__WEBPACK_IMPORTED_MODULE_4__[
                        "transformErrorForSerialization"
                      ]
                    )(e.detail);
                  }

                  _this._send({
                    vsWorker: _this._workerId,
                    seq: req,
                    res: undefined,
                    err: Object(
                      _errors_js__WEBPACK_IMPORTED_MODULE_4__[
                        "transformErrorForSerialization"
                      ]
                    )(e)
                  });
                }
              );
            };

            SimpleWorkerProtocol.prototype._send = function(msg) {
              var strMsg = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(
                msg
              ); // console.log('SENDING: ' + strMsg);

              this._handler.sendMessage(strMsg);
            };

            return SimpleWorkerProtocol;
          })();
        /**
         * Main thread side
         */

        var SimpleWorkerClient =
          /** @class */
          (function(_super) {
            __extends(SimpleWorkerClient, _super);

            function SimpleWorkerClient(workerFactory, moduleId) {
              var _this = _super.call(this) || this;

              var lazyProxyReject = null;
              _this._worker = _this._register(
                workerFactory.create(
                  "vs/base/common/worker/simpleWorker",
                  function(msg) {
                    _this._protocol.handleMessage(msg);
                  },
                  function(err) {
                    // in Firefox, web workers fail lazily :(
                    // we will reject the proxy
                    if (lazyProxyReject) {
                      lazyProxyReject(err);
                    }
                  }
                )
              );
              _this._protocol = new SimpleWorkerProtocol({
                sendMessage: function sendMessage(msg) {
                  _this._worker.postMessage(msg);
                },
                handleMessage: function handleMessage(method, args) {
                  // Intentionally not supporting worker -> main requests
                  return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(
                    null
                  );
                }
              });

              _this._protocol.setWorkerId(_this._worker.getId()); // Gather loader configuration

              var loaderConfiguration = null;

              if (
                typeof self.require !== "undefined" &&
                typeof self.require.getConfig === "function"
              ) {
                // Get the configuration from the Monaco AMD Loader
                loaderConfiguration = self.require.getConfig();
              } else if (typeof self.requirejs !== "undefined") {
                // Get the configuration from requirejs
                loaderConfiguration = self.requirejs.s.contexts._.config;
              } // Send initialize message

              _this._onModuleLoaded = _this._protocol.sendMessage(INITIALIZE, [
                _this._worker.getId(),
                moduleId,
                loaderConfiguration
              ]);
              _this._lazyProxy = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(
                function(resolve, reject) {
                  lazyProxyReject = reject;

                  _this._onModuleLoaded.then(
                    function(availableMethods) {
                      var proxy = {};

                      for (
                        var _i = 0, availableMethods_1 = availableMethods;
                        _i < availableMethods_1.length;
                        _i++
                      ) {
                        var methodName = availableMethods_1[_i];
                        proxy[methodName] = createProxyMethod(
                          methodName,
                          proxyMethodRequest
                        );
                      }

                      resolve(proxy);
                    },
                    function(e) {
                      reject(e);

                      _this._onError("Worker failed to load " + moduleId, e);
                    }
                  );
                }
              ); // Create proxy to loaded code

              var proxyMethodRequest = function proxyMethodRequest(
                method,
                args
              ) {
                return _this._request(method, args);
              };

              var createProxyMethod = function createProxyMethod(
                method,
                proxyMethodRequest
              ) {
                return function() {
                  var args = Array.prototype.slice.call(arguments, 0);
                  return proxyMethodRequest(method, args);
                };
              };

              return _this;
            }

            SimpleWorkerClient.prototype.getProxyObject = function() {
              return this._lazyProxy;
            };

            SimpleWorkerClient.prototype._request = function(method, args) {
              var _this = this;

              return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(
                function(resolve, reject) {
                  _this._onModuleLoaded.then(function() {
                    _this._protocol
                      .sendMessage(method, args)
                      .then(resolve, reject);
                  }, reject);
                }
              );
            };

            SimpleWorkerClient.prototype._onError = function(message, error) {
              console.error(message);
              console.info(error);
            };

            return SimpleWorkerClient;
          })(_lifecycle_js__WEBPACK_IMPORTED_MODULE_5__["Disposable"]);

        /**
         * Worker side
         */

        var SimpleWorkerServer =
          /** @class */
          (function() {
            function SimpleWorkerServer(postSerializedMessage, requestHandler) {
              var _this = this;

              this._requestHandler = requestHandler;
              this._protocol = new SimpleWorkerProtocol({
                sendMessage: function sendMessage(msg) {
                  postSerializedMessage(msg);
                },
                handleMessage: function handleMessage(method, args) {
                  return _this._handleMessage(method, args);
                }
              });
            }

            SimpleWorkerServer.prototype.onmessage = function(msg) {
              this._protocol.handleMessage(msg);
            };

            SimpleWorkerServer.prototype._handleMessage = function(
              method,
              args
            ) {
              if (method === INITIALIZE) {
                return this.initialize(args[0], args[1], args[2]);
              }

              if (
                !this._requestHandler ||
                typeof this._requestHandler[method] !== "function"
              ) {
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.reject(
                  new Error("Missing requestHandler or method: " + method)
                );
              }

              try {
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(
                  this._requestHandler[method].apply(this._requestHandler, args)
                );
              } catch (e) {
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.reject(
                  e
                );
              }
            };

            SimpleWorkerServer.prototype.initialize = function(
              workerId,
              moduleId,
              loaderConfig
            ) {
              var _this = this;

              this._protocol.setWorkerId(workerId);

              if (this._requestHandler) {
                // static request handler
                var methods = [];

                for (
                  var _i = 0,
                    _a = Object(
                      _types_js__WEBPACK_IMPORTED_MODULE_7__[
                        "getAllPropertyNames"
                      ]
                    )(this._requestHandler);
                  _i < _a.length;
                  _i++
                ) {
                  var prop = _a[_i];

                  if (typeof this._requestHandler[prop] === "function") {
                    methods.push(prop);
                  }
                }

                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(
                  methods
                );
              }

              if (loaderConfig) {
                // Remove 'baseUrl', handling it is beyond scope for now
                if (typeof loaderConfig.baseUrl !== "undefined") {
                  delete loaderConfig["baseUrl"];
                }

                if (typeof loaderConfig.paths !== "undefined") {
                  if (typeof loaderConfig.paths.vs !== "undefined") {
                    delete loaderConfig.paths["vs"];
                  }
                } // Since this is in a web worker, enable catching errors

                loaderConfig.catchError = true;

                self.require.config(loaderConfig);
              }

              return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(
                function(resolve, reject) {
                  // Use the global require to be sure to get the global config
                  self.require(
                    [moduleId],
                    function() {
                      var result = [];

                      for (var _i = 0; _i < arguments.length; _i++) {
                        result[_i] = arguments[_i];
                      }

                      var handlerModule = result[0];
                      _this._requestHandler = handlerModule.create();

                      if (!_this._requestHandler) {
                        reject(new Error("No RequestHandler!"));
                        return;
                      }

                      var methods = [];

                      for (
                        var _a = 0,
                          _b = Object(
                            _types_js__WEBPACK_IMPORTED_MODULE_7__[
                              "getAllPropertyNames"
                            ]
                          )(_this._requestHandler);
                        _a < _b.length;
                        _a++
                      ) {
                        var prop = _b[_a];

                        if (typeof _this._requestHandler[prop] === "function") {
                          methods.push(prop);
                        }
                      }

                      resolve(methods);
                    },
                    reject
                  );
                }
              );
            };

            return SimpleWorkerServer;
          })();

        /**
         * Called on the worker side
         */

        function create(postMessage) {
          return new SimpleWorkerServer(postMessage, null);
        }

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier.js":
      /*!*************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier.js ***!
  \*************************************************************************************/
      /*! exports provided: CharacterClassifier, CharacterSet */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CharacterClassifier",
          function() {
            return CharacterClassifier;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CharacterSet",
          function() {
            return CharacterSet;
          }
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _uint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./uint.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/uint.js"
        );

        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/

        /**
         * A fast character classifier that uses a compact array for ASCII values.
         */

        var CharacterClassifier =
          /** @class */
          (function() {
            function CharacterClassifier(_defaultValue) {
              var defaultValue = Object(
                _uint_js__WEBPACK_IMPORTED_MODULE_1__["toUint8"]
              )(_defaultValue);
              this._defaultValue = defaultValue;
              this._asciiMap = CharacterClassifier._createAsciiMap(
                defaultValue
              );
              this._map = new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default.a();
            }

            CharacterClassifier._createAsciiMap = function(defaultValue) {
              var asciiMap = new Uint8Array(256);

              for (var i = 0; i < 256; i++) {
                asciiMap[i] = defaultValue;
              }

              return asciiMap;
            };

            CharacterClassifier.prototype.set = function(charCode, _value) {
              var value = Object(
                _uint_js__WEBPACK_IMPORTED_MODULE_1__["toUint8"]
              )(_value);

              if (charCode >= 0 && charCode < 256) {
                this._asciiMap[charCode] = value;
              } else {
                this._map.set(charCode, value);
              }
            };

            CharacterClassifier.prototype.get = function(charCode) {
              if (charCode >= 0 && charCode < 256) {
                return this._asciiMap[charCode];
              } else {
                return this._map.get(charCode) || this._defaultValue;
              }
            };

            return CharacterClassifier;
          })();

        var CharacterSet =
          /** @class */
          (function() {
            function CharacterSet() {
              this._actual = new CharacterClassifier(
                0
                /* False */
              );
            }

            CharacterSet.prototype.add = function(charCode) {
              this._actual.set(
                charCode,
                1
                /* True */
              );
            };

            CharacterSet.prototype.has = function(charCode) {
              return (
                this._actual.get(charCode) === 1
                /* True */
              );
            };

            return CharacterSet;
          })();

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js":
      /*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/position.js ***!
  \**************************************************************************/
      /*! exports provided: Position */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Position",
          function() {
            return Position;
          }
        );
        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/

        /**
         * A position in the editor.
         */
        var Position =
          /** @class */
          (function() {
            function Position(lineNumber, column) {
              this.lineNumber = lineNumber;
              this.column = column;
            }
            /**
             * Create a new postion from this position.
             *
             * @param newLineNumber new line number
             * @param newColumn new column
             */

            Position.prototype.with = function(newLineNumber, newColumn) {
              if (newLineNumber === void 0) {
                newLineNumber = this.lineNumber;
              }

              if (newColumn === void 0) {
                newColumn = this.column;
              }

              if (
                newLineNumber === this.lineNumber &&
                newColumn === this.column
              ) {
                return this;
              } else {
                return new Position(newLineNumber, newColumn);
              }
            };
            /**
             * Derive a new position from this position.
             *
             * @param deltaLineNumber line number delta
             * @param deltaColumn column delta
             */

            Position.prototype.delta = function(deltaLineNumber, deltaColumn) {
              if (deltaLineNumber === void 0) {
                deltaLineNumber = 0;
              }

              if (deltaColumn === void 0) {
                deltaColumn = 0;
              }

              return this.with(
                this.lineNumber + deltaLineNumber,
                this.column + deltaColumn
              );
            };
            /**
             * Test if this position equals other position
             */

            Position.prototype.equals = function(other) {
              return Position.equals(this, other);
            };
            /**
             * Test if position `a` equals position `b`
             */

            Position.equals = function(a, b) {
              if (!a && !b) {
                return true;
              }

              return (
                !!a &&
                !!b &&
                a.lineNumber === b.lineNumber &&
                a.column === b.column
              );
            };
            /**
             * Test if this position is before other position.
             * If the two positions are equal, the result will be false.
             */

            Position.prototype.isBefore = function(other) {
              return Position.isBefore(this, other);
            };
            /**
             * Test if position `a` is before position `b`.
             * If the two positions are equal, the result will be false.
             */

            Position.isBefore = function(a, b) {
              if (a.lineNumber < b.lineNumber) {
                return true;
              }

              if (b.lineNumber < a.lineNumber) {
                return false;
              }

              return a.column < b.column;
            };
            /**
             * Test if this position is before other position.
             * If the two positions are equal, the result will be true.
             */

            Position.prototype.isBeforeOrEqual = function(other) {
              return Position.isBeforeOrEqual(this, other);
            };
            /**
             * Test if position `a` is before position `b`.
             * If the two positions are equal, the result will be true.
             */

            Position.isBeforeOrEqual = function(a, b) {
              if (a.lineNumber < b.lineNumber) {
                return true;
              }

              if (b.lineNumber < a.lineNumber) {
                return false;
              }

              return a.column <= b.column;
            };
            /**
             * A function that compares positions, useful for sorting
             */

            Position.compare = function(a, b) {
              var aLineNumber = a.lineNumber | 0;
              var bLineNumber = b.lineNumber | 0;

              if (aLineNumber === bLineNumber) {
                var aColumn = a.column | 0;
                var bColumn = b.column | 0;
                return aColumn - bColumn;
              }

              return aLineNumber - bLineNumber;
            };
            /**
             * Clone this position.
             */

            Position.prototype.clone = function() {
              return new Position(this.lineNumber, this.column);
            };
            /**
             * Convert to a human-readable representation.
             */

            Position.prototype.toString = function() {
              return "(" + this.lineNumber + "," + this.column + ")";
            }; // ---

            /**
             * Create a `Position` from an `IPosition`.
             */

            Position.lift = function(pos) {
              return new Position(pos.lineNumber, pos.column);
            };
            /**
             * Test if `obj` is an `IPosition`.
             */

            Position.isIPosition = function(obj) {
              return (
                obj &&
                typeof obj.lineNumber === "number" &&
                typeof obj.column === "number"
              );
            };

            return Position;
          })();

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/range.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/range.js ***!
  \***********************************************************************/
      /*! exports provided: Range */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Range",
          function() {
            return Range;
          }
        );
        /* harmony import */ var _position_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./position.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js"
        );
        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/

        /**
         * A range in the editor. (startLineNumber,startColumn) is <= (endLineNumber,endColumn)
         */

        var Range =
          /** @class */
          (function() {
            function Range(
              startLineNumber,
              startColumn,
              endLineNumber,
              endColumn
            ) {
              if (
                startLineNumber > endLineNumber ||
                (startLineNumber === endLineNumber && startColumn > endColumn)
              ) {
                this.startLineNumber = endLineNumber;
                this.startColumn = endColumn;
                this.endLineNumber = startLineNumber;
                this.endColumn = startColumn;
              } else {
                this.startLineNumber = startLineNumber;
                this.startColumn = startColumn;
                this.endLineNumber = endLineNumber;
                this.endColumn = endColumn;
              }
            }
            /**
             * Test if this range is empty.
             */

            Range.prototype.isEmpty = function() {
              return Range.isEmpty(this);
            };
            /**
             * Test if `range` is empty.
             */

            Range.isEmpty = function(range) {
              return (
                range.startLineNumber === range.endLineNumber &&
                range.startColumn === range.endColumn
              );
            };
            /**
             * Test if position is in this range. If the position is at the edges, will return true.
             */

            Range.prototype.containsPosition = function(position) {
              return Range.containsPosition(this, position);
            };
            /**
             * Test if `position` is in `range`. If the position is at the edges, will return true.
             */

            Range.containsPosition = function(range, position) {
              if (
                position.lineNumber < range.startLineNumber ||
                position.lineNumber > range.endLineNumber
              ) {
                return false;
              }

              if (
                position.lineNumber === range.startLineNumber &&
                position.column < range.startColumn
              ) {
                return false;
              }

              if (
                position.lineNumber === range.endLineNumber &&
                position.column > range.endColumn
              ) {
                return false;
              }

              return true;
            };
            /**
             * Test if range is in this range. If the range is equal to this range, will return true.
             */

            Range.prototype.containsRange = function(range) {
              return Range.containsRange(this, range);
            };
            /**
             * Test if `otherRange` is in `range`. If the ranges are equal, will return true.
             */

            Range.containsRange = function(range, otherRange) {
              if (
                otherRange.startLineNumber < range.startLineNumber ||
                otherRange.endLineNumber < range.startLineNumber
              ) {
                return false;
              }

              if (
                otherRange.startLineNumber > range.endLineNumber ||
                otherRange.endLineNumber > range.endLineNumber
              ) {
                return false;
              }

              if (
                otherRange.startLineNumber === range.startLineNumber &&
                otherRange.startColumn < range.startColumn
              ) {
                return false;
              }

              if (
                otherRange.endLineNumber === range.endLineNumber &&
                otherRange.endColumn > range.endColumn
              ) {
                return false;
              }

              return true;
            };
            /**
             * A reunion of the two ranges.
             * The smallest position will be used as the start point, and the largest one as the end point.
             */

            Range.prototype.plusRange = function(range) {
              return Range.plusRange(this, range);
            };
            /**
             * A reunion of the two ranges.
             * The smallest position will be used as the start point, and the largest one as the end point.
             */

            Range.plusRange = function(a, b) {
              var startLineNumber;
              var startColumn;
              var endLineNumber;
              var endColumn;

              if (b.startLineNumber < a.startLineNumber) {
                startLineNumber = b.startLineNumber;
                startColumn = b.startColumn;
              } else if (b.startLineNumber === a.startLineNumber) {
                startLineNumber = b.startLineNumber;
                startColumn = Math.min(b.startColumn, a.startColumn);
              } else {
                startLineNumber = a.startLineNumber;
                startColumn = a.startColumn;
              }

              if (b.endLineNumber > a.endLineNumber) {
                endLineNumber = b.endLineNumber;
                endColumn = b.endColumn;
              } else if (b.endLineNumber === a.endLineNumber) {
                endLineNumber = b.endLineNumber;
                endColumn = Math.max(b.endColumn, a.endColumn);
              } else {
                endLineNumber = a.endLineNumber;
                endColumn = a.endColumn;
              }

              return new Range(
                startLineNumber,
                startColumn,
                endLineNumber,
                endColumn
              );
            };
            /**
             * A intersection of the two ranges.
             */

            Range.prototype.intersectRanges = function(range) {
              return Range.intersectRanges(this, range);
            };
            /**
             * A intersection of the two ranges.
             */

            Range.intersectRanges = function(a, b) {
              var resultStartLineNumber = a.startLineNumber;
              var resultStartColumn = a.startColumn;
              var resultEndLineNumber = a.endLineNumber;
              var resultEndColumn = a.endColumn;
              var otherStartLineNumber = b.startLineNumber;
              var otherStartColumn = b.startColumn;
              var otherEndLineNumber = b.endLineNumber;
              var otherEndColumn = b.endColumn;

              if (resultStartLineNumber < otherStartLineNumber) {
                resultStartLineNumber = otherStartLineNumber;
                resultStartColumn = otherStartColumn;
              } else if (resultStartLineNumber === otherStartLineNumber) {
                resultStartColumn = Math.max(
                  resultStartColumn,
                  otherStartColumn
                );
              }

              if (resultEndLineNumber > otherEndLineNumber) {
                resultEndLineNumber = otherEndLineNumber;
                resultEndColumn = otherEndColumn;
              } else if (resultEndLineNumber === otherEndLineNumber) {
                resultEndColumn = Math.min(resultEndColumn, otherEndColumn);
              } // Check if selection is now empty

              if (resultStartLineNumber > resultEndLineNumber) {
                return null;
              }

              if (
                resultStartLineNumber === resultEndLineNumber &&
                resultStartColumn > resultEndColumn
              ) {
                return null;
              }

              return new Range(
                resultStartLineNumber,
                resultStartColumn,
                resultEndLineNumber,
                resultEndColumn
              );
            };
            /**
             * Test if this range equals other.
             */

            Range.prototype.equalsRange = function(other) {
              return Range.equalsRange(this, other);
            };
            /**
             * Test if range `a` equals `b`.
             */

            Range.equalsRange = function(a, b) {
              return (
                !!a &&
                !!b &&
                a.startLineNumber === b.startLineNumber &&
                a.startColumn === b.startColumn &&
                a.endLineNumber === b.endLineNumber &&
                a.endColumn === b.endColumn
              );
            };
            /**
             * Return the end position (which will be after or equal to the start position)
             */

            Range.prototype.getEndPosition = function() {
              return new _position_js__WEBPACK_IMPORTED_MODULE_0__["Position"](
                this.endLineNumber,
                this.endColumn
              );
            };
            /**
             * Return the start position (which will be before or equal to the end position)
             */

            Range.prototype.getStartPosition = function() {
              return new _position_js__WEBPACK_IMPORTED_MODULE_0__["Position"](
                this.startLineNumber,
                this.startColumn
              );
            };
            /**
             * Transform to a user presentable string representation.
             */

            Range.prototype.toString = function() {
              return (
                "[" +
                this.startLineNumber +
                "," +
                this.startColumn +
                " -> " +
                this.endLineNumber +
                "," +
                this.endColumn +
                "]"
              );
            };
            /**
             * Create a new range using this range's start position, and using endLineNumber and endColumn as the end position.
             */

            Range.prototype.setEndPosition = function(
              endLineNumber,
              endColumn
            ) {
              return new Range(
                this.startLineNumber,
                this.startColumn,
                endLineNumber,
                endColumn
              );
            };
            /**
             * Create a new range using this range's end position, and using startLineNumber and startColumn as the start position.
             */

            Range.prototype.setStartPosition = function(
              startLineNumber,
              startColumn
            ) {
              return new Range(
                startLineNumber,
                startColumn,
                this.endLineNumber,
                this.endColumn
              );
            };
            /**
             * Create a new empty range using this range's start position.
             */

            Range.prototype.collapseToStart = function() {
              return Range.collapseToStart(this);
            };
            /**
             * Create a new empty range using this range's start position.
             */

            Range.collapseToStart = function(range) {
              return new Range(
                range.startLineNumber,
                range.startColumn,
                range.startLineNumber,
                range.startColumn
              );
            }; // ---

            Range.fromPositions = function(start, end) {
              if (end === void 0) {
                end = start;
              }

              return new Range(
                start.lineNumber,
                start.column,
                end.lineNumber,
                end.column
              );
            };

            Range.lift = function(range) {
              if (!range) {
                return null;
              }

              return new Range(
                range.startLineNumber,
                range.startColumn,
                range.endLineNumber,
                range.endColumn
              );
            };
            /**
             * Test if `obj` is an `IRange`.
             */

            Range.isIRange = function(obj) {
              return (
                obj &&
                typeof obj.startLineNumber === "number" &&
                typeof obj.startColumn === "number" &&
                typeof obj.endLineNumber === "number" &&
                typeof obj.endColumn === "number"
              );
            };
            /**
             * Test if the two ranges are touching in any way.
             */

            Range.areIntersectingOrTouching = function(a, b) {
              // Check if `a` is before `b`
              if (
                a.endLineNumber < b.startLineNumber ||
                (a.endLineNumber === b.startLineNumber &&
                  a.endColumn < b.startColumn)
              ) {
                return false;
              } // Check if `b` is before `a`

              if (
                b.endLineNumber < a.startLineNumber ||
                (b.endLineNumber === a.startLineNumber &&
                  b.endColumn < a.startColumn)
              ) {
                return false;
              } // These ranges must intersect

              return true;
            };
            /**
             * Test if the two ranges are intersecting. If the ranges are touching it returns true.
             */

            Range.areIntersecting = function(a, b) {
              // Check if `a` is before `b`
              if (
                a.endLineNumber < b.startLineNumber ||
                (a.endLineNumber === b.startLineNumber &&
                  a.endColumn <= b.startColumn)
              ) {
                return false;
              } // Check if `b` is before `a`

              if (
                b.endLineNumber < a.startLineNumber ||
                (b.endLineNumber === a.startLineNumber &&
                  b.endColumn <= a.startColumn)
              ) {
                return false;
              } // These ranges must intersect

              return true;
            };
            /**
             * A function that compares ranges, useful for sorting ranges
             * It will first compare ranges on the startPosition and then on the endPosition
             */

            Range.compareRangesUsingStarts = function(a, b) {
              if (a && b) {
                var aStartLineNumber = a.startLineNumber | 0;
                var bStartLineNumber = b.startLineNumber | 0;

                if (aStartLineNumber === bStartLineNumber) {
                  var aStartColumn = a.startColumn | 0;
                  var bStartColumn = b.startColumn | 0;

                  if (aStartColumn === bStartColumn) {
                    var aEndLineNumber = a.endLineNumber | 0;
                    var bEndLineNumber = b.endLineNumber | 0;

                    if (aEndLineNumber === bEndLineNumber) {
                      var aEndColumn = a.endColumn | 0;
                      var bEndColumn = b.endColumn | 0;
                      return aEndColumn - bEndColumn;
                    }

                    return aEndLineNumber - bEndLineNumber;
                  }

                  return aStartColumn - bStartColumn;
                }

                return aStartLineNumber - bStartLineNumber;
              }

              var aExists = a ? 1 : 0;
              var bExists = b ? 1 : 0;
              return aExists - bExists;
            };
            /**
             * A function that compares ranges, useful for sorting ranges
             * It will first compare ranges on the endPosition and then on the startPosition
             */

            Range.compareRangesUsingEnds = function(a, b) {
              if (a.endLineNumber === b.endLineNumber) {
                if (a.endColumn === b.endColumn) {
                  if (a.startLineNumber === b.startLineNumber) {
                    return a.startColumn - b.startColumn;
                  }

                  return a.startLineNumber - b.startLineNumber;
                }

                return a.endColumn - b.endColumn;
              }

              return a.endLineNumber - b.endLineNumber;
            };
            /**
             * Test if the range spans multiple lines.
             */

            Range.spansMultipleLines = function(range) {
              return range.endLineNumber > range.startLineNumber;
            };

            return Range;
          })();

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/selection.js":
      /*!***************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/selection.js ***!
  \***************************************************************************/
      /*! exports provided: Selection */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Selection",
          function() {
            return Selection;
          }
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _position_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./position.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js"
        );
        /* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./range.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/range.js"
        );

        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/
        var __extends =
          (undefined && undefined.__extends) ||
          (function() {
            var _extendStatics = function extendStatics(d, b) {
              _extendStatics =
                _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ||
                ({
                  __proto__: []
                } instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                  }
                };

              return _extendStatics(d, b);
            };

            return function(d, b) {
              _extendStatics(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype =
                b === null
                  ? _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(
                      b
                    )
                  : ((__.prototype = b.prototype), new __());
            };
          })();

        /**
         * A selection in the editor.
         * The selection is a range that has an orientation.
         */

        var Selection =
          /** @class */
          (function(_super) {
            __extends(Selection, _super);

            function Selection(
              selectionStartLineNumber,
              selectionStartColumn,
              positionLineNumber,
              positionColumn
            ) {
              var _this =
                _super.call(
                  this,
                  selectionStartLineNumber,
                  selectionStartColumn,
                  positionLineNumber,
                  positionColumn
                ) || this;

              _this.selectionStartLineNumber = selectionStartLineNumber;
              _this.selectionStartColumn = selectionStartColumn;
              _this.positionLineNumber = positionLineNumber;
              _this.positionColumn = positionColumn;
              return _this;
            }
            /**
             * Clone this selection.
             */

            Selection.prototype.clone = function() {
              return new Selection(
                this.selectionStartLineNumber,
                this.selectionStartColumn,
                this.positionLineNumber,
                this.positionColumn
              );
            };
            /**
             * Transform to a human-readable representation.
             */

            Selection.prototype.toString = function() {
              return (
                "[" +
                this.selectionStartLineNumber +
                "," +
                this.selectionStartColumn +
                " -> " +
                this.positionLineNumber +
                "," +
                this.positionColumn +
                "]"
              );
            };
            /**
             * Test if equals other selection.
             */

            Selection.prototype.equalsSelection = function(other) {
              return Selection.selectionsEqual(this, other);
            };
            /**
             * Test if the two selections are equal.
             */

            Selection.selectionsEqual = function(a, b) {
              return (
                a.selectionStartLineNumber === b.selectionStartLineNumber &&
                a.selectionStartColumn === b.selectionStartColumn &&
                a.positionLineNumber === b.positionLineNumber &&
                a.positionColumn === b.positionColumn
              );
            };
            /**
             * Get directions (LTR or RTL).
             */

            Selection.prototype.getDirection = function() {
              if (
                this.selectionStartLineNumber === this.startLineNumber &&
                this.selectionStartColumn === this.startColumn
              ) {
                return 0;
                /* LTR */
              }

              return 1;
              /* RTL */
            };
            /**
             * Create a new selection with a different `positionLineNumber` and `positionColumn`.
             */

            Selection.prototype.setEndPosition = function(
              endLineNumber,
              endColumn
            ) {
              if (
                this.getDirection() === 0
                /* LTR */
              ) {
                return new Selection(
                  this.startLineNumber,
                  this.startColumn,
                  endLineNumber,
                  endColumn
                );
              }

              return new Selection(
                endLineNumber,
                endColumn,
                this.startLineNumber,
                this.startColumn
              );
            };
            /**
             * Get the position at `positionLineNumber` and `positionColumn`.
             */

            Selection.prototype.getPosition = function() {
              return new _position_js__WEBPACK_IMPORTED_MODULE_2__["Position"](
                this.positionLineNumber,
                this.positionColumn
              );
            };
            /**
             * Create a new selection with a different `selectionStartLineNumber` and `selectionStartColumn`.
             */

            Selection.prototype.setStartPosition = function(
              startLineNumber,
              startColumn
            ) {
              if (
                this.getDirection() === 0
                /* LTR */
              ) {
                return new Selection(
                  startLineNumber,
                  startColumn,
                  this.endLineNumber,
                  this.endColumn
                );
              }

              return new Selection(
                this.endLineNumber,
                this.endColumn,
                startLineNumber,
                startColumn
              );
            }; // ----

            /**
             * Create a `Selection` from one or two positions
             */

            Selection.fromPositions = function(start, end) {
              if (end === void 0) {
                end = start;
              }

              return new Selection(
                start.lineNumber,
                start.column,
                end.lineNumber,
                end.column
              );
            };
            /**
             * Create a `Selection` from an `ISelection`.
             */

            Selection.liftSelection = function(sel) {
              return new Selection(
                sel.selectionStartLineNumber,
                sel.selectionStartColumn,
                sel.positionLineNumber,
                sel.positionColumn
              );
            };
            /**
             * `a` equals `b`.
             */

            Selection.selectionsArrEqual = function(a, b) {
              if ((a && !b) || (!a && b)) {
                return false;
              }

              if (!a && !b) {
                return true;
              }

              if (a.length !== b.length) {
                return false;
              }

              for (var i = 0, len = a.length; i < len; i++) {
                if (!this.selectionsEqual(a[i], b[i])) {
                  return false;
                }
              }

              return true;
            };
            /**
             * Test if `obj` is an `ISelection`.
             */

            Selection.isISelection = function(obj) {
              return (
                obj &&
                typeof obj.selectionStartLineNumber === "number" &&
                typeof obj.selectionStartColumn === "number" &&
                typeof obj.positionLineNumber === "number" &&
                typeof obj.positionColumn === "number"
              );
            };
            /**
             * Create with a direction.
             */

            Selection.createWithDirection = function(
              startLineNumber,
              startColumn,
              endLineNumber,
              endColumn,
              direction
            ) {
              if (
                direction === 0
                /* LTR */
              ) {
                return new Selection(
                  startLineNumber,
                  startColumn,
                  endLineNumber,
                  endColumn
                );
              }

              return new Selection(
                endLineNumber,
                endColumn,
                startLineNumber,
                startColumn
              );
            };

            return Selection;
          })(_range_js__WEBPACK_IMPORTED_MODULE_3__["Range"]);

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/token.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/token.js ***!
  \***********************************************************************/
      /*! exports provided: Token, TokenizationResult, TokenizationResult2 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Token",
          function() {
            return Token;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "TokenizationResult",
          function() {
            return TokenizationResult;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "TokenizationResult2",
          function() {
            return TokenizationResult2;
          }
        );
        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/
        var Token =
          /** @class */
          (function() {
            function Token(offset, type, language) {
              this.offset = offset | 0; // @perf

              this.type = type;
              this.language = language;
            }

            Token.prototype.toString = function() {
              return "(" + this.offset + ", " + this.type + ")";
            };

            return Token;
          })();

        var TokenizationResult =
          /** @class */
          (function() {
            function TokenizationResult(tokens, endState) {
              this.tokens = tokens;
              this.endState = endState;
            }

            return TokenizationResult;
          })();

        var TokenizationResult2 =
          /** @class */
          (function() {
            function TokenizationResult2(tokens, endState) {
              this.tokens = tokens;
              this.endState = endState;
            }

            return TokenizationResult2;
          })();

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/uint.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/uint.js ***!
  \**********************************************************************/
      /*! exports provided: Uint8Matrix, toUint8, toUint32, toUint32Array */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Uint8Matrix",
          function() {
            return Uint8Matrix;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "toUint8",
          function() {
            return toUint8;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "toUint32",
          function() {
            return toUint32;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "toUint32Array",
          function() {
            return toUint32Array;
          }
        );
        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/
        var Uint8Matrix =
          /** @class */
          (function() {
            function Uint8Matrix(rows, cols, defaultValue) {
              var data = new Uint8Array(rows * cols);

              for (var i = 0, len = rows * cols; i < len; i++) {
                data[i] = defaultValue;
              }

              this._data = data;
              this.rows = rows;
              this.cols = cols;
            }

            Uint8Matrix.prototype.get = function(row, col) {
              return this._data[row * this.cols + col];
            };

            Uint8Matrix.prototype.set = function(row, col, value) {
              this._data[row * this.cols + col] = value;
            };

            return Uint8Matrix;
          })();

        function toUint8(v) {
          if (v < 0) {
            return 0;
          }

          if (
            v > 255
            /* MAX_UINT_8 */
          ) {
            return 255;
            /* MAX_UINT_8 */
          }

          return v | 0;
        }
        function toUint32(v) {
          if (v < 0) {
            return 0;
          }

          if (
            v > 4294967295
            /* MAX_UINT_32 */
          ) {
            return 4294967295;
            /* MAX_UINT_32 */
          }

          return v | 0;
        }
        function toUint32Array(arr) {
          var len = arr.length;
          var r = new Uint32Array(len);

          for (var i = 0; i < len; i++) {
            r[i] = toUint32(arr[i]);
          }

          return r;
        }

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/editor/common/diff/diffComputer.js":
      /*!******************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/diff/diffComputer.js ***!
  \******************************************************************************/
      /*! exports provided: DiffComputer */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "DiffComputer",
          function() {
            return DiffComputer;
          }
        );
        /* harmony import */ var _base_common_diff_diff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../base/common/diff/diff.js */ "./node_modules/monaco-editor/esm/vs/base/common/diff/diff.js"
        );
        /* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../base/common/strings.js */ "./node_modules/monaco-editor/esm/vs/base/common/strings.js"
        );
        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/

        var MAXIMUM_RUN_TIME = 5000; // 5 seconds

        var MINIMUM_MATCHING_CHARACTER_LENGTH = 3;

        function computeDiff(
          originalSequence,
          modifiedSequence,
          continueProcessingPredicate,
          pretty
        ) {
          var diffAlgo = new _base_common_diff_diff_js__WEBPACK_IMPORTED_MODULE_0__[
            "LcsDiff"
          ](originalSequence, modifiedSequence, continueProcessingPredicate);
          return diffAlgo.ComputeDiff(pretty);
        }

        var LineMarkerSequence =
          /** @class */
          (function() {
            function LineMarkerSequence(lines) {
              var startColumns = [];
              var endColumns = [];

              for (var i = 0, length_1 = lines.length; i < length_1; i++) {
                startColumns[i] = LineMarkerSequence._getFirstNonBlankColumn(
                  lines[i],
                  1
                );
                endColumns[i] = LineMarkerSequence._getLastNonBlankColumn(
                  lines[i],
                  1
                );
              }

              this._lines = lines;
              this._startColumns = startColumns;
              this._endColumns = endColumns;
            }

            LineMarkerSequence.prototype.getLength = function() {
              return this._lines.length;
            };

            LineMarkerSequence.prototype.getElementAtIndex = function(i) {
              return this._lines[i].substring(
                this._startColumns[i] - 1,
                this._endColumns[i] - 1
              );
            };

            LineMarkerSequence.prototype.getStartLineNumber = function(i) {
              return i + 1;
            };

            LineMarkerSequence.prototype.getEndLineNumber = function(i) {
              return i + 1;
            };

            LineMarkerSequence._getFirstNonBlankColumn = function(
              txt,
              defaultValue
            ) {
              var r = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__[
                "firstNonWhitespaceIndex"
              ](txt);

              if (r === -1) {
                return defaultValue;
              }

              return r + 1;
            };

            LineMarkerSequence._getLastNonBlankColumn = function(
              txt,
              defaultValue
            ) {
              var r = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__[
                "lastNonWhitespaceIndex"
              ](txt);

              if (r === -1) {
                return defaultValue;
              }

              return r + 2;
            };

            LineMarkerSequence.prototype.getCharSequence = function(
              shouldIgnoreTrimWhitespace,
              startIndex,
              endIndex
            ) {
              var charCodes = [];
              var lineNumbers = [];
              var columns = [];
              var len = 0;

              for (var index = startIndex; index <= endIndex; index++) {
                var lineContent = this._lines[index];
                var startColumn = shouldIgnoreTrimWhitespace
                  ? this._startColumns[index]
                  : 1;
                var endColumn = shouldIgnoreTrimWhitespace
                  ? this._endColumns[index]
                  : lineContent.length + 1;

                for (var col = startColumn; col < endColumn; col++) {
                  charCodes[len] = lineContent.charCodeAt(col - 1);
                  lineNumbers[len] = index + 1;
                  columns[len] = col;
                  len++;
                }
              }

              return new CharSequence(charCodes, lineNumbers, columns);
            };

            return LineMarkerSequence;
          })();

        var CharSequence =
          /** @class */
          (function() {
            function CharSequence(charCodes, lineNumbers, columns) {
              this._charCodes = charCodes;
              this._lineNumbers = lineNumbers;
              this._columns = columns;
            }

            CharSequence.prototype.getLength = function() {
              return this._charCodes.length;
            };

            CharSequence.prototype.getElementAtIndex = function(i) {
              return this._charCodes[i];
            };

            CharSequence.prototype.getStartLineNumber = function(i) {
              return this._lineNumbers[i];
            };

            CharSequence.prototype.getStartColumn = function(i) {
              return this._columns[i];
            };

            CharSequence.prototype.getEndLineNumber = function(i) {
              return this._lineNumbers[i];
            };

            CharSequence.prototype.getEndColumn = function(i) {
              return this._columns[i] + 1;
            };

            return CharSequence;
          })();

        var CharChange =
          /** @class */
          (function() {
            function CharChange(
              originalStartLineNumber,
              originalStartColumn,
              originalEndLineNumber,
              originalEndColumn,
              modifiedStartLineNumber,
              modifiedStartColumn,
              modifiedEndLineNumber,
              modifiedEndColumn
            ) {
              this.originalStartLineNumber = originalStartLineNumber;
              this.originalStartColumn = originalStartColumn;
              this.originalEndLineNumber = originalEndLineNumber;
              this.originalEndColumn = originalEndColumn;
              this.modifiedStartLineNumber = modifiedStartLineNumber;
              this.modifiedStartColumn = modifiedStartColumn;
              this.modifiedEndLineNumber = modifiedEndLineNumber;
              this.modifiedEndColumn = modifiedEndColumn;
            }

            CharChange.createFromDiffChange = function(
              diffChange,
              originalCharSequence,
              modifiedCharSequence
            ) {
              var originalStartLineNumber;
              var originalStartColumn;
              var originalEndLineNumber;
              var originalEndColumn;
              var modifiedStartLineNumber;
              var modifiedStartColumn;
              var modifiedEndLineNumber;
              var modifiedEndColumn;

              if (diffChange.originalLength === 0) {
                originalStartLineNumber = 0;
                originalStartColumn = 0;
                originalEndLineNumber = 0;
                originalEndColumn = 0;
              } else {
                originalStartLineNumber = originalCharSequence.getStartLineNumber(
                  diffChange.originalStart
                );
                originalStartColumn = originalCharSequence.getStartColumn(
                  diffChange.originalStart
                );
                originalEndLineNumber = originalCharSequence.getEndLineNumber(
                  diffChange.originalStart + diffChange.originalLength - 1
                );
                originalEndColumn = originalCharSequence.getEndColumn(
                  diffChange.originalStart + diffChange.originalLength - 1
                );
              }

              if (diffChange.modifiedLength === 0) {
                modifiedStartLineNumber = 0;
                modifiedStartColumn = 0;
                modifiedEndLineNumber = 0;
                modifiedEndColumn = 0;
              } else {
                modifiedStartLineNumber = modifiedCharSequence.getStartLineNumber(
                  diffChange.modifiedStart
                );
                modifiedStartColumn = modifiedCharSequence.getStartColumn(
                  diffChange.modifiedStart
                );
                modifiedEndLineNumber = modifiedCharSequence.getEndLineNumber(
                  diffChange.modifiedStart + diffChange.modifiedLength - 1
                );
                modifiedEndColumn = modifiedCharSequence.getEndColumn(
                  diffChange.modifiedStart + diffChange.modifiedLength - 1
                );
              }

              return new CharChange(
                originalStartLineNumber,
                originalStartColumn,
                originalEndLineNumber,
                originalEndColumn,
                modifiedStartLineNumber,
                modifiedStartColumn,
                modifiedEndLineNumber,
                modifiedEndColumn
              );
            };

            return CharChange;
          })();

        function postProcessCharChanges(rawChanges) {
          if (rawChanges.length <= 1) {
            return rawChanges;
          }

          var result = [rawChanges[0]];
          var prevChange = result[0];

          for (var i = 1, len = rawChanges.length; i < len; i++) {
            var currChange = rawChanges[i];
            var originalMatchingLength =
              currChange.originalStart -
              (prevChange.originalStart + prevChange.originalLength);
            var modifiedMatchingLength =
              currChange.modifiedStart -
              (prevChange.modifiedStart + prevChange.modifiedLength); // Both of the above should be equal, but the continueProcessingPredicate may prevent this from being true

            var matchingLength = Math.min(
              originalMatchingLength,
              modifiedMatchingLength
            );

            if (matchingLength < MINIMUM_MATCHING_CHARACTER_LENGTH) {
              // Merge the current change into the previous one
              prevChange.originalLength =
                currChange.originalStart +
                currChange.originalLength -
                prevChange.originalStart;
              prevChange.modifiedLength =
                currChange.modifiedStart +
                currChange.modifiedLength -
                prevChange.modifiedStart;
            } else {
              // Add the current change
              result.push(currChange);
              prevChange = currChange;
            }
          }

          return result;
        }

        var LineChange =
          /** @class */
          (function() {
            function LineChange(
              originalStartLineNumber,
              originalEndLineNumber,
              modifiedStartLineNumber,
              modifiedEndLineNumber,
              charChanges
            ) {
              this.originalStartLineNumber = originalStartLineNumber;
              this.originalEndLineNumber = originalEndLineNumber;
              this.modifiedStartLineNumber = modifiedStartLineNumber;
              this.modifiedEndLineNumber = modifiedEndLineNumber;
              this.charChanges = charChanges;
            }

            LineChange.createFromDiffResult = function(
              shouldIgnoreTrimWhitespace,
              diffChange,
              originalLineSequence,
              modifiedLineSequence,
              continueProcessingPredicate,
              shouldComputeCharChanges,
              shouldPostProcessCharChanges
            ) {
              var originalStartLineNumber;
              var originalEndLineNumber;
              var modifiedStartLineNumber;
              var modifiedEndLineNumber;
              var charChanges = undefined;

              if (diffChange.originalLength === 0) {
                originalStartLineNumber =
                  originalLineSequence.getStartLineNumber(
                    diffChange.originalStart
                  ) - 1;
                originalEndLineNumber = 0;
              } else {
                originalStartLineNumber = originalLineSequence.getStartLineNumber(
                  diffChange.originalStart
                );
                originalEndLineNumber = originalLineSequence.getEndLineNumber(
                  diffChange.originalStart + diffChange.originalLength - 1
                );
              }

              if (diffChange.modifiedLength === 0) {
                modifiedStartLineNumber =
                  modifiedLineSequence.getStartLineNumber(
                    diffChange.modifiedStart
                  ) - 1;
                modifiedEndLineNumber = 0;
              } else {
                modifiedStartLineNumber = modifiedLineSequence.getStartLineNumber(
                  diffChange.modifiedStart
                );
                modifiedEndLineNumber = modifiedLineSequence.getEndLineNumber(
                  diffChange.modifiedStart + diffChange.modifiedLength - 1
                );
              }

              if (
                shouldComputeCharChanges &&
                diffChange.originalLength !== 0 &&
                diffChange.modifiedLength !== 0 &&
                continueProcessingPredicate()
              ) {
                var originalCharSequence = originalLineSequence.getCharSequence(
                  shouldIgnoreTrimWhitespace,
                  diffChange.originalStart,
                  diffChange.originalStart + diffChange.originalLength - 1
                );
                var modifiedCharSequence = modifiedLineSequence.getCharSequence(
                  shouldIgnoreTrimWhitespace,
                  diffChange.modifiedStart,
                  diffChange.modifiedStart + diffChange.modifiedLength - 1
                );
                var rawChanges = computeDiff(
                  originalCharSequence,
                  modifiedCharSequence,
                  continueProcessingPredicate,
                  true
                );

                if (shouldPostProcessCharChanges) {
                  rawChanges = postProcessCharChanges(rawChanges);
                }

                charChanges = [];

                for (
                  var i = 0, length_2 = rawChanges.length;
                  i < length_2;
                  i++
                ) {
                  charChanges.push(
                    CharChange.createFromDiffChange(
                      rawChanges[i],
                      originalCharSequence,
                      modifiedCharSequence
                    )
                  );
                }
              }

              return new LineChange(
                originalStartLineNumber,
                originalEndLineNumber,
                modifiedStartLineNumber,
                modifiedEndLineNumber,
                charChanges
              );
            };

            return LineChange;
          })();

        var DiffComputer =
          /** @class */
          (function() {
            function DiffComputer(originalLines, modifiedLines, opts) {
              this.shouldComputeCharChanges = opts.shouldComputeCharChanges;
              this.shouldPostProcessCharChanges =
                opts.shouldPostProcessCharChanges;
              this.shouldIgnoreTrimWhitespace = opts.shouldIgnoreTrimWhitespace;
              this.shouldMakePrettyDiff = opts.shouldMakePrettyDiff;
              this.maximumRunTimeMs = MAXIMUM_RUN_TIME;
              this.originalLines = originalLines;
              this.modifiedLines = modifiedLines;
              this.original = new LineMarkerSequence(originalLines);
              this.modified = new LineMarkerSequence(modifiedLines);
            }

            DiffComputer.prototype.computeDiff = function() {
              if (
                this.original.getLength() === 1 &&
                this.original.getElementAtIndex(0).length === 0
              ) {
                // empty original => fast path
                return [
                  {
                    originalStartLineNumber: 1,
                    originalEndLineNumber: 1,
                    modifiedStartLineNumber: 1,
                    modifiedEndLineNumber: this.modified.getLength(),
                    charChanges: [
                      {
                        modifiedEndColumn: 0,
                        modifiedEndLineNumber: 0,
                        modifiedStartColumn: 0,
                        modifiedStartLineNumber: 0,
                        originalEndColumn: 0,
                        originalEndLineNumber: 0,
                        originalStartColumn: 0,
                        originalStartLineNumber: 0
                      }
                    ]
                  }
                ];
              }

              if (
                this.modified.getLength() === 1 &&
                this.modified.getElementAtIndex(0).length === 0
              ) {
                // empty modified => fast path
                return [
                  {
                    originalStartLineNumber: 1,
                    originalEndLineNumber: this.original.getLength(),
                    modifiedStartLineNumber: 1,
                    modifiedEndLineNumber: 1,
                    charChanges: [
                      {
                        modifiedEndColumn: 0,
                        modifiedEndLineNumber: 0,
                        modifiedStartColumn: 0,
                        modifiedStartLineNumber: 0,
                        originalEndColumn: 0,
                        originalEndLineNumber: 0,
                        originalStartColumn: 0,
                        originalStartLineNumber: 0
                      }
                    ]
                  }
                ];
              }

              this.computationStartTime = new Date().getTime();
              var rawChanges = computeDiff(
                this.original,
                this.modified,
                this._continueProcessingPredicate.bind(this),
                this.shouldMakePrettyDiff
              ); // The diff is always computed with ignoring trim whitespace
              // This ensures we get the prettiest diff

              if (this.shouldIgnoreTrimWhitespace) {
                var lineChanges = [];

                for (
                  var i = 0, length_3 = rawChanges.length;
                  i < length_3;
                  i++
                ) {
                  lineChanges.push(
                    LineChange.createFromDiffResult(
                      this.shouldIgnoreTrimWhitespace,
                      rawChanges[i],
                      this.original,
                      this.modified,
                      this._continueProcessingPredicate.bind(this),
                      this.shouldComputeCharChanges,
                      this.shouldPostProcessCharChanges
                    )
                  );
                }

                return lineChanges;
              } // Need to post-process and introduce changes where the trim whitespace is different
              // Note that we are looping starting at -1 to also cover the lines before the first change

              var result = [];
              var originalLineIndex = 0;
              var modifiedLineIndex = 0;

              for (
                var i = -1,
                  /* !!!! */
                  len = rawChanges.length;
                i < len;
                i++
              ) {
                var nextChange = i + 1 < len ? rawChanges[i + 1] : null;
                var originalStop = nextChange
                  ? nextChange.originalStart
                  : this.originalLines.length;
                var modifiedStop = nextChange
                  ? nextChange.modifiedStart
                  : this.modifiedLines.length;

                while (
                  originalLineIndex < originalStop &&
                  modifiedLineIndex < modifiedStop
                ) {
                  var originalLine = this.originalLines[originalLineIndex];
                  var modifiedLine = this.modifiedLines[modifiedLineIndex];

                  if (originalLine !== modifiedLine) {
                    // These lines differ only in trim whitespace
                    // Check the leading whitespace
                    {
                      var originalStartColumn = LineMarkerSequence._getFirstNonBlankColumn(
                        originalLine,
                        1
                      );

                      var modifiedStartColumn = LineMarkerSequence._getFirstNonBlankColumn(
                        modifiedLine,
                        1
                      );

                      while (
                        originalStartColumn > 1 &&
                        modifiedStartColumn > 1
                      ) {
                        var originalChar = originalLine.charCodeAt(
                          originalStartColumn - 2
                        );
                        var modifiedChar = modifiedLine.charCodeAt(
                          modifiedStartColumn - 2
                        );

                        if (originalChar !== modifiedChar) {
                          break;
                        }

                        originalStartColumn--;
                        modifiedStartColumn--;
                      }

                      if (originalStartColumn > 1 || modifiedStartColumn > 1) {
                        this._pushTrimWhitespaceCharChange(
                          result,
                          originalLineIndex + 1,
                          1,
                          originalStartColumn,
                          modifiedLineIndex + 1,
                          1,
                          modifiedStartColumn
                        );
                      }
                    } // Check the trailing whitespace

                    {
                      var originalEndColumn = LineMarkerSequence._getLastNonBlankColumn(
                        originalLine,
                        1
                      );

                      var modifiedEndColumn = LineMarkerSequence._getLastNonBlankColumn(
                        modifiedLine,
                        1
                      );

                      var originalMaxColumn = originalLine.length + 1;
                      var modifiedMaxColumn = modifiedLine.length + 1;

                      while (
                        originalEndColumn < originalMaxColumn &&
                        modifiedEndColumn < modifiedMaxColumn
                      ) {
                        var originalChar = originalLine.charCodeAt(
                          originalEndColumn - 1
                        );
                        var modifiedChar = originalLine.charCodeAt(
                          modifiedEndColumn - 1
                        );

                        if (originalChar !== modifiedChar) {
                          break;
                        }

                        originalEndColumn++;
                        modifiedEndColumn++;
                      }

                      if (
                        originalEndColumn < originalMaxColumn ||
                        modifiedEndColumn < modifiedMaxColumn
                      ) {
                        this._pushTrimWhitespaceCharChange(
                          result,
                          originalLineIndex + 1,
                          originalEndColumn,
                          originalMaxColumn,
                          modifiedLineIndex + 1,
                          modifiedEndColumn,
                          modifiedMaxColumn
                        );
                      }
                    }
                  }

                  originalLineIndex++;
                  modifiedLineIndex++;
                }

                if (nextChange) {
                  // Emit the actual change
                  result.push(
                    LineChange.createFromDiffResult(
                      this.shouldIgnoreTrimWhitespace,
                      nextChange,
                      this.original,
                      this.modified,
                      this._continueProcessingPredicate.bind(this),
                      this.shouldComputeCharChanges,
                      this.shouldPostProcessCharChanges
                    )
                  );
                  originalLineIndex += nextChange.originalLength;
                  modifiedLineIndex += nextChange.modifiedLength;
                }
              }

              return result;
            };

            DiffComputer.prototype._pushTrimWhitespaceCharChange = function(
              result,
              originalLineNumber,
              originalStartColumn,
              originalEndColumn,
              modifiedLineNumber,
              modifiedStartColumn,
              modifiedEndColumn
            ) {
              if (
                this._mergeTrimWhitespaceCharChange(
                  result,
                  originalLineNumber,
                  originalStartColumn,
                  originalEndColumn,
                  modifiedLineNumber,
                  modifiedStartColumn,
                  modifiedEndColumn
                )
              ) {
                // Merged into previous
                return;
              }

              var charChanges = undefined;

              if (this.shouldComputeCharChanges) {
                charChanges = [
                  new CharChange(
                    originalLineNumber,
                    originalStartColumn,
                    originalLineNumber,
                    originalEndColumn,
                    modifiedLineNumber,
                    modifiedStartColumn,
                    modifiedLineNumber,
                    modifiedEndColumn
                  )
                ];
              }

              result.push(
                new LineChange(
                  originalLineNumber,
                  originalLineNumber,
                  modifiedLineNumber,
                  modifiedLineNumber,
                  charChanges
                )
              );
            };

            DiffComputer.prototype._mergeTrimWhitespaceCharChange = function(
              result,
              originalLineNumber,
              originalStartColumn,
              originalEndColumn,
              modifiedLineNumber,
              modifiedStartColumn,
              modifiedEndColumn
            ) {
              var len = result.length;

              if (len === 0) {
                return false;
              }

              var prevChange = result[len - 1];

              if (
                prevChange.originalEndLineNumber === 0 ||
                prevChange.modifiedEndLineNumber === 0
              ) {
                // Don't merge with inserts/deletes
                return false;
              }

              if (
                prevChange.originalEndLineNumber + 1 === originalLineNumber &&
                prevChange.modifiedEndLineNumber + 1 === modifiedLineNumber
              ) {
                prevChange.originalEndLineNumber = originalLineNumber;
                prevChange.modifiedEndLineNumber = modifiedLineNumber;

                if (this.shouldComputeCharChanges) {
                  prevChange.charChanges.push(
                    new CharChange(
                      originalLineNumber,
                      originalStartColumn,
                      originalLineNumber,
                      originalEndColumn,
                      modifiedLineNumber,
                      modifiedStartColumn,
                      modifiedLineNumber,
                      modifiedEndColumn
                    )
                  );
                }

                return true;
              }

              return false;
            };

            DiffComputer.prototype._continueProcessingPredicate = function() {
              if (this.maximumRunTimeMs === 0) {
                return true;
              }

              var now = new Date().getTime();
              return now - this.computationStartTime < this.maximumRunTimeMs;
            };

            return DiffComputer;
          })();

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/editor/common/model/mirrorTextModel.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/model/mirrorTextModel.js ***!
  \**********************************************************************************/
      /*! exports provided: MirrorTextModel */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "MirrorTextModel",
          function() {
            return MirrorTextModel;
          }
        );
        /* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../core/position.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js"
        );
        /* harmony import */ var _viewModel_prefixSumComputer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../viewModel/prefixSumComputer.js */ "./node_modules/monaco-editor/esm/vs/editor/common/viewModel/prefixSumComputer.js"
        );
        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/

        var MirrorTextModel =
          /** @class */
          (function() {
            function MirrorTextModel(uri, lines, eol, versionId) {
              this._uri = uri;
              this._lines = lines;
              this._eol = eol;
              this._versionId = versionId;
              this._lineStarts = null;
            }

            MirrorTextModel.prototype.dispose = function() {
              this._lines.length = 0;
            };

            MirrorTextModel.prototype.getText = function() {
              return this._lines.join(this._eol);
            };

            MirrorTextModel.prototype.onEvents = function(e) {
              if (e.eol && e.eol !== this._eol) {
                this._eol = e.eol;
                this._lineStarts = null;
              } // Update my lines

              var changes = e.changes;

              for (
                var _i = 0, changes_1 = changes;
                _i < changes_1.length;
                _i++
              ) {
                var change = changes_1[_i];

                this._acceptDeleteRange(change.range);

                this._acceptInsertText(
                  new _core_position_js__WEBPACK_IMPORTED_MODULE_0__[
                    "Position"
                  ](change.range.startLineNumber, change.range.startColumn),
                  change.text
                );
              }

              this._versionId = e.versionId;
            };

            MirrorTextModel.prototype._ensureLineStarts = function() {
              if (!this._lineStarts) {
                var eolLength = this._eol.length;
                var linesLength = this._lines.length;
                var lineStartValues = new Uint32Array(linesLength);

                for (var i = 0; i < linesLength; i++) {
                  lineStartValues[i] = this._lines[i].length + eolLength;
                }

                this._lineStarts = new _viewModel_prefixSumComputer_js__WEBPACK_IMPORTED_MODULE_1__[
                  "PrefixSumComputer"
                ](lineStartValues);
              }
            };
            /**
             * All changes to a line's text go through this method
             */

            MirrorTextModel.prototype._setLineText = function(
              lineIndex,
              newValue
            ) {
              this._lines[lineIndex] = newValue;

              if (this._lineStarts) {
                // update prefix sum
                this._lineStarts.changeValue(
                  lineIndex,
                  this._lines[lineIndex].length + this._eol.length
                );
              }
            };

            MirrorTextModel.prototype._acceptDeleteRange = function(range) {
              if (range.startLineNumber === range.endLineNumber) {
                if (range.startColumn === range.endColumn) {
                  // Nothing to delete
                  return;
                } // Delete text on the affected line

                this._setLineText(
                  range.startLineNumber - 1,
                  this._lines[range.startLineNumber - 1].substring(
                    0,
                    range.startColumn - 1
                  ) +
                    this._lines[range.startLineNumber - 1].substring(
                      range.endColumn - 1
                    )
                );

                return;
              } // Take remaining text on last line and append it to remaining text on first line

              this._setLineText(
                range.startLineNumber - 1,
                this._lines[range.startLineNumber - 1].substring(
                  0,
                  range.startColumn - 1
                ) +
                  this._lines[range.endLineNumber - 1].substring(
                    range.endColumn - 1
                  )
              ); // Delete middle lines

              this._lines.splice(
                range.startLineNumber,
                range.endLineNumber - range.startLineNumber
              );

              if (this._lineStarts) {
                // update prefix sum
                this._lineStarts.removeValues(
                  range.startLineNumber,
                  range.endLineNumber - range.startLineNumber
                );
              }
            };

            MirrorTextModel.prototype._acceptInsertText = function(
              position,
              insertText
            ) {
              if (insertText.length === 0) {
                // Nothing to insert
                return;
              }

              var insertLines = insertText.split(/\r\n|\r|\n/);

              if (insertLines.length === 1) {
                // Inserting text on one line
                this._setLineText(
                  position.lineNumber - 1,
                  this._lines[position.lineNumber - 1].substring(
                    0,
                    position.column - 1
                  ) +
                    insertLines[0] +
                    this._lines[position.lineNumber - 1].substring(
                      position.column - 1
                    )
                );

                return;
              } // Append overflowing text from first line to the end of text to insert

              insertLines[insertLines.length - 1] += this._lines[
                position.lineNumber - 1
              ].substring(position.column - 1); // Delete overflowing text from first line and insert text on first line

              this._setLineText(
                position.lineNumber - 1,
                this._lines[position.lineNumber - 1].substring(
                  0,
                  position.column - 1
                ) + insertLines[0]
              ); // Insert new lines & store lengths

              var newLengths = new Uint32Array(insertLines.length - 1);

              for (var i = 1; i < insertLines.length; i++) {
                this._lines.splice(
                  position.lineNumber + i - 1,
                  0,
                  insertLines[i]
                );

                newLengths[i - 1] = insertLines[i].length + this._eol.length;
              }

              if (this._lineStarts) {
                // update prefix sum
                this._lineStarts.insertValues(position.lineNumber, newLengths);
              }
            };

            return MirrorTextModel;
          })();

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/editor/common/model/wordHelper.js":
      /*!*****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/model/wordHelper.js ***!
  \*****************************************************************************/
      /*! exports provided: USUAL_WORD_SEPARATORS, DEFAULT_WORD_REGEXP, ensureValidWordDefinition, getWordAtText */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "USUAL_WORD_SEPARATORS",
          function() {
            return USUAL_WORD_SEPARATORS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "DEFAULT_WORD_REGEXP",
          function() {
            return DEFAULT_WORD_REGEXP;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ensureValidWordDefinition",
          function() {
            return ensureValidWordDefinition;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getWordAtText",
          function() {
            return getWordAtText;
          }
        );
        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/
        var USUAL_WORD_SEPARATORS = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
        /**
         * Create a word definition regular expression based on default word separators.
         * Optionally provide allowed separators that should be included in words.
         *
         * The default would look like this:
         * /(-?\d*\.\d\w*)|([^\`\~\!\@\#\$\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g
         */

        function createWordRegExp(allowInWords) {
          if (allowInWords === void 0) {
            allowInWords = "";
          }

          var source = "(-?\\d*\\.\\d\\w*)|([^";

          for (
            var _i = 0, USUAL_WORD_SEPARATORS_1 = USUAL_WORD_SEPARATORS;
            _i < USUAL_WORD_SEPARATORS_1.length;
            _i++
          ) {
            var sep = USUAL_WORD_SEPARATORS_1[_i];

            if (allowInWords.indexOf(sep) >= 0) {
              continue;
            }

            source += "\\" + sep;
          }

          source += "\\s]+)";
          return new RegExp(source, "g");
        } // catches numbers (including floating numbers) in the first group, and alphanum in the second

        var DEFAULT_WORD_REGEXP = createWordRegExp();
        function ensureValidWordDefinition(wordDefinition) {
          var result = DEFAULT_WORD_REGEXP;

          if (wordDefinition && wordDefinition instanceof RegExp) {
            if (!wordDefinition.global) {
              var flags = "g";

              if (wordDefinition.ignoreCase) {
                flags += "i";
              }

              if (wordDefinition.multiline) {
                flags += "m";
              }

              if (wordDefinition.unicode) {
                flags += "u";
              }

              result = new RegExp(wordDefinition.source, flags);
            } else {
              result = wordDefinition;
            }
          }

          result.lastIndex = 0;
          return result;
        }

        function getWordAtPosFast(column, wordDefinition, text, textOffset) {
          // find whitespace enclosed text around column and match from there
          var pos = column - 1 - textOffset;
          var start = text.lastIndexOf(" ", pos - 1) + 1;
          wordDefinition.lastIndex = start;
          var match;

          while ((match = wordDefinition.exec(text))) {
            var matchIndex = match.index || 0;

            if (matchIndex <= pos && wordDefinition.lastIndex >= pos) {
              return {
                word: match[0],
                startColumn: textOffset + 1 + matchIndex,
                endColumn: textOffset + 1 + wordDefinition.lastIndex
              };
            }
          }

          return null;
        }

        function getWordAtPosSlow(column, wordDefinition, text, textOffset) {
          // matches all words starting at the beginning
          // of the input until it finds a match that encloses
          // the desired column. slow but correct
          var pos = column - 1 - textOffset;
          wordDefinition.lastIndex = 0;
          var match;

          while ((match = wordDefinition.exec(text))) {
            var matchIndex = match.index || 0;

            if (matchIndex > pos) {
              // |nW -> matched only after the pos
              return null;
            } else if (wordDefinition.lastIndex >= pos) {
              // W|W -> match encloses pos
              return {
                word: match[0],
                startColumn: textOffset + 1 + matchIndex,
                endColumn: textOffset + 1 + wordDefinition.lastIndex
              };
            }
          }

          return null;
        }

        function getWordAtText(column, wordDefinition, text, textOffset) {
          // if `words` can contain whitespace character we have to use the slow variant
          // otherwise we use the fast variant of finding a word
          wordDefinition.lastIndex = 0;
          var match = wordDefinition.exec(text);

          if (!match) {
            return null;
          } // todo@joh the `match` could already be the (first) word

          var ret =
            match[0].indexOf(" ") >= 0 // did match a word which contains a space character -> use slow word find
              ? getWordAtPosSlow(column, wordDefinition, text, textOffset) // sane word definition -> use fast word find
              : getWordAtPosFast(column, wordDefinition, text, textOffset); // both (getWordAtPosFast and getWordAtPosSlow) leave the wordDefinition-RegExp
          // in an undefined state and to not confuse other users of the wordDefinition
          // we reset the lastIndex

          wordDefinition.lastIndex = 0;
          return ret;
        }

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/editor/common/modes/linkComputer.js":
      /*!*******************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/modes/linkComputer.js ***!
  \*******************************************************************************/
      /*! exports provided: StateMachine, LinkComputer, computeLinks */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "StateMachine",
          function() {
            return StateMachine;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "LinkComputer",
          function() {
            return LinkComputer;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "computeLinks",
          function() {
            return computeLinks;
          }
        );
        /* harmony import */ var _core_characterClassifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../core/characterClassifier.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier.js"
        );
        /* harmony import */ var _core_uint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../core/uint.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/uint.js"
        );
        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/

        var StateMachine =
          /** @class */
          (function() {
            function StateMachine(edges) {
              var maxCharCode = 0;
              var maxState = 0;
              /* Invalid */
              for (var i = 0, len = edges.length; i < len; i++) {
                var _a = edges[i],
                  from = _a[0],
                  chCode = _a[1],
                  to = _a[2];

                if (chCode > maxCharCode) {
                  maxCharCode = chCode;
                }

                if (from > maxState) {
                  maxState = from;
                }

                if (to > maxState) {
                  maxState = to;
                }
              }

              maxCharCode++;
              maxState++;
              var states = new _core_uint_js__WEBPACK_IMPORTED_MODULE_1__[
                "Uint8Matrix"
              ](
                maxState,
                maxCharCode,
                0
                /* Invalid */
              );

              for (var i = 0, len = edges.length; i < len; i++) {
                var _b = edges[i],
                  from = _b[0],
                  chCode = _b[1],
                  to = _b[2];
                states.set(from, chCode, to);
              }

              this._states = states;
              this._maxCharCode = maxCharCode;
            }

            StateMachine.prototype.nextState = function(currentState, chCode) {
              if (chCode < 0 || chCode >= this._maxCharCode) {
                return 0;
                /* Invalid */
              }

              return this._states.get(currentState, chCode);
            };

            return StateMachine;
          })();

        // State machine for http:// or https:// or file://

        var _stateMachine = null;

        function getStateMachine() {
          if (_stateMachine === null) {
            _stateMachine = new StateMachine([
              [
                1,
                /* Start */
                104,
                /* h */
                2
                /* H */
              ],
              [
                1,
                /* Start */
                72,
                /* H */
                2
                /* H */
              ],
              [
                1,
                /* Start */
                102,
                /* f */
                6
                /* F */
              ],
              [
                1,
                /* Start */
                70,
                /* F */
                6
                /* F */
              ],
              [
                2,
                /* H */
                116,
                /* t */
                3
                /* HT */
              ],
              [
                2,
                /* H */
                84,
                /* T */
                3
                /* HT */
              ],
              [
                3,
                /* HT */
                116,
                /* t */
                4
                /* HTT */
              ],
              [
                3,
                /* HT */
                84,
                /* T */
                4
                /* HTT */
              ],
              [
                4,
                /* HTT */
                112,
                /* p */
                5
                /* HTTP */
              ],
              [
                4,
                /* HTT */
                80,
                /* P */
                5
                /* HTTP */
              ],
              [
                5,
                /* HTTP */
                115,
                /* s */
                9
                /* BeforeColon */
              ],
              [
                5,
                /* HTTP */
                83,
                /* S */
                9
                /* BeforeColon */
              ],
              [
                5,
                /* HTTP */
                58,
                /* Colon */
                10
                /* AfterColon */
              ],
              [
                6,
                /* F */
                105,
                /* i */
                7
                /* FI */
              ],
              [
                6,
                /* F */
                73,
                /* I */
                7
                /* FI */
              ],
              [
                7,
                /* FI */
                108,
                /* l */
                8
                /* FIL */
              ],
              [
                7,
                /* FI */
                76,
                /* L */
                8
                /* FIL */
              ],
              [
                8,
                /* FIL */
                101,
                /* e */
                9
                /* BeforeColon */
              ],
              [
                8,
                /* FIL */
                69,
                /* E */
                9
                /* BeforeColon */
              ],
              [
                9,
                /* BeforeColon */
                58,
                /* Colon */
                10
                /* AfterColon */
              ],
              [
                10,
                /* AfterColon */
                47,
                /* Slash */
                11
                /* AlmostThere */
              ],
              [
                11,
                /* AlmostThere */
                47,
                /* Slash */
                12
                /* End */
              ]
            ]);
          }

          return _stateMachine;
        }

        var _classifier = null;

        function getClassifier() {
          if (_classifier === null) {
            _classifier = new _core_characterClassifier_js__WEBPACK_IMPORTED_MODULE_0__[
              "CharacterClassifier"
            ](
              0
              /* None */
            );
            var FORCE_TERMINATION_CHARACTERS =
              " \t<>'\"、。｡､，．：；？！＠＃＄％＆＊‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…";

            for (var i = 0; i < FORCE_TERMINATION_CHARACTERS.length; i++) {
              _classifier.set(
                FORCE_TERMINATION_CHARACTERS.charCodeAt(i),
                1
                /* ForceTermination */
              );
            }

            var CANNOT_END_WITH_CHARACTERS = ".,;";

            for (var i = 0; i < CANNOT_END_WITH_CHARACTERS.length; i++) {
              _classifier.set(
                CANNOT_END_WITH_CHARACTERS.charCodeAt(i),
                2
                /* CannotEndIn */
              );
            }
          }

          return _classifier;
        }

        var LinkComputer =
          /** @class */
          (function() {
            function LinkComputer() {}

            LinkComputer._createLink = function(
              classifier,
              line,
              lineNumber,
              linkBeginIndex,
              linkEndIndex
            ) {
              // Do not allow to end link in certain characters...
              var lastIncludedCharIndex = linkEndIndex - 1;

              do {
                var chCode = line.charCodeAt(lastIncludedCharIndex);
                var chClass = classifier.get(chCode);

                if (
                  chClass !== 2
                  /* CannotEndIn */
                ) {
                  break;
                }

                lastIncludedCharIndex--;
              } while (lastIncludedCharIndex > linkBeginIndex); // Handle links enclosed in parens, square brackets and curlys.

              if (linkBeginIndex > 0) {
                var charCodeBeforeLink = line.charCodeAt(linkBeginIndex - 1);
                var lastCharCodeInLink = line.charCodeAt(lastIncludedCharIndex);

                if (
                  (charCodeBeforeLink === 40 &&
                    /* OpenParen */
                    lastCharCodeInLink === 41) ||
                  /* CloseParen */
                  (charCodeBeforeLink === 91 &&
                    /* OpenSquareBracket */
                    lastCharCodeInLink === 93) ||
                  /* CloseSquareBracket */
                  (charCodeBeforeLink === 123 &&
                    /* OpenCurlyBrace */
                    lastCharCodeInLink === 125)
                  /* CloseCurlyBrace */
                ) {
                  // Do not end in ) if ( is before the link start
                  // Do not end in ] if [ is before the link start
                  // Do not end in } if { is before the link start
                  lastIncludedCharIndex--;
                }
              }

              return {
                range: {
                  startLineNumber: lineNumber,
                  startColumn: linkBeginIndex + 1,
                  endLineNumber: lineNumber,
                  endColumn: lastIncludedCharIndex + 2
                },
                url: line.substring(linkBeginIndex, lastIncludedCharIndex + 1)
              };
            };

            LinkComputer.computeLinks = function(model, stateMachine) {
              if (stateMachine === void 0) {
                stateMachine = getStateMachine();
              }

              var classifier = getClassifier();
              var result = [];

              for (
                var i = 1, lineCount = model.getLineCount();
                i <= lineCount;
                i++
              ) {
                var line = model.getLineContent(i);
                var len = line.length;
                var j = 0;
                var linkBeginIndex = 0;
                var linkBeginChCode = 0;
                var state = 1;
                /* Start */
                var hasOpenParens = false;
                var hasOpenSquareBracket = false;
                var hasOpenCurlyBracket = false;

                while (j < len) {
                  var resetStateMachine = false;
                  var chCode = line.charCodeAt(j);

                  if (
                    state === 13
                    /* Accept */
                  ) {
                    var chClass = void 0;

                    switch (chCode) {
                      case 40:
                        /* OpenParen */
                        hasOpenParens = true;
                        chClass = 0;
                        /* None */
                        break;

                      case 41:
                        /* CloseParen */
                        chClass = hasOpenParens
                          ? 0
                          : /* None */
                            1;
                        /* ForceTermination */
                        break;

                      case 91:
                        /* OpenSquareBracket */
                        hasOpenSquareBracket = true;
                        chClass = 0;
                        /* None */
                        break;

                      case 93:
                        /* CloseSquareBracket */
                        chClass = hasOpenSquareBracket
                          ? 0
                          : /* None */
                            1;
                        /* ForceTermination */
                        break;

                      case 123:
                        /* OpenCurlyBrace */
                        hasOpenCurlyBracket = true;
                        chClass = 0;
                        /* None */
                        break;

                      case 125:
                        /* CloseCurlyBrace */
                        chClass = hasOpenCurlyBracket
                          ? 0
                          : /* None */
                            1;
                        /* ForceTermination */
                        break;

                      /* The following three rules make it that ' or " or ` are allowed inside links if the link began with a different one */

                      case 39:
                        /* SingleQuote */
                        chClass =
                          linkBeginChCode === 34 ||
                          /* DoubleQuote */
                          linkBeginChCode === 96
                            ? /* BackTick */
                              0
                            : /* None */
                              1;
                        /* ForceTermination */
                        break;

                      case 34:
                        /* DoubleQuote */
                        chClass =
                          linkBeginChCode === 39 ||
                          /* SingleQuote */
                          linkBeginChCode === 96
                            ? /* BackTick */
                              0
                            : /* None */
                              1;
                        /* ForceTermination */
                        break;

                      case 96:
                        /* BackTick */
                        chClass =
                          linkBeginChCode === 39 ||
                          /* SingleQuote */
                          linkBeginChCode === 34
                            ? /* DoubleQuote */
                              0
                            : /* None */
                              1;
                        /* ForceTermination */
                        break;

                      default:
                        chClass = classifier.get(chCode);
                    } // Check if character terminates link

                    if (
                      chClass === 1
                      /* ForceTermination */
                    ) {
                      result.push(
                        LinkComputer._createLink(
                          classifier,
                          line,
                          i,
                          linkBeginIndex,
                          j
                        )
                      );
                      resetStateMachine = true;
                    }
                  } else if (
                    state === 12
                    /* End */
                  ) {
                    var chClass = void 0;

                    if (
                      chCode === 91
                      /* OpenSquareBracket */
                    ) {
                      // Allow for the authority part to contain ipv6 addresses which contain [ and ]
                      hasOpenSquareBracket = true;
                      chClass = 0;
                      /* None */
                    } else {
                      chClass = classifier.get(chCode);
                    } // Check if character terminates link

                    if (
                      chClass === 1
                      /* ForceTermination */
                    ) {
                      resetStateMachine = true;
                    } else {
                      state = 13;
                      /* Accept */
                    }
                  } else {
                    state = stateMachine.nextState(state, chCode);

                    if (
                      state === 0
                      /* Invalid */
                    ) {
                      resetStateMachine = true;
                    }
                  }

                  if (resetStateMachine) {
                    state = 1;
                    /* Start */
                    hasOpenParens = false;
                    hasOpenSquareBracket = false;
                    hasOpenCurlyBracket = false; // Record where the link started

                    linkBeginIndex = j + 1;
                    linkBeginChCode = chCode;
                  }

                  j++;
                }

                if (
                  state === 13
                  /* Accept */
                ) {
                  result.push(
                    LinkComputer._createLink(
                      classifier,
                      line,
                      i,
                      linkBeginIndex,
                      len
                    )
                  );
                }
              }

              return result;
            };

            return LinkComputer;
          })();

        /**
         * Returns an array of all links contains in the provided
         * document. *Note* that this operation is computational
         * expensive and should not run in the UI thread.
         */

        function computeLinks(model) {
          if (
            !model ||
            typeof model.getLineCount !== "function" ||
            typeof model.getLineContent !== "function"
          ) {
            // Unknown caller!
            return [];
          }

          return LinkComputer.computeLinks(model);
        }

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/editor/common/modes/supports/inplaceReplaceSupport.js":
      /*!*************************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/modes/supports/inplaceReplaceSupport.js ***!
  \*************************************************************************************************/
      /*! exports provided: BasicInplaceReplace */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "BasicInplaceReplace",
          function() {
            return BasicInplaceReplace;
          }
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__
        );

        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/
        var BasicInplaceReplace =
          /** @class */
          (function() {
            function BasicInplaceReplace() {
              this._defaultValueSet = [
                ["true", "false"],
                ["True", "False"],
                [
                  "Private",
                  "Public",
                  "Friend",
                  "ReadOnly",
                  "Partial",
                  "Protected",
                  "WriteOnly"
                ],
                ["public", "protected", "private"]
              ];
            }

            BasicInplaceReplace.prototype.navigateValueSet = function(
              range1,
              text1,
              range2,
              text2,
              up
            ) {
              if (range1 && text1) {
                var result = this.doNavigateValueSet(text1, up);

                if (result) {
                  return {
                    range: range1,
                    value: result
                  };
                }
              }

              if (range2 && text2) {
                var result = this.doNavigateValueSet(text2, up);

                if (result) {
                  return {
                    range: range2,
                    value: result
                  };
                }
              }

              return null;
            };

            BasicInplaceReplace.prototype.doNavigateValueSet = function(
              text,
              up
            ) {
              var numberResult = this.numberReplace(text, up);

              if (numberResult !== null) {
                return numberResult;
              }

              return this.textReplace(text, up);
            };

            BasicInplaceReplace.prototype.numberReplace = function(value, up) {
              var precision = Math.pow(
                10,
                value.length - (value.lastIndexOf(".") + 1)
              );
              var n1 = Number(value);

              var n2 = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(
                value
              );

              if (!isNaN(n1) && !isNaN(n2) && n1 === n2) {
                if (n1 === 0 && !up) {
                  return null; // don't do negative
                  //			} else if(n1 === 9 && up) {
                  //				return null; // don't insert 10 into a number
                } else {
                  n1 = Math.floor(n1 * precision);
                  n1 += up ? precision : -precision;
                  return String(n1 / precision);
                }
              }

              return null;
            };

            BasicInplaceReplace.prototype.textReplace = function(value, up) {
              return this.valueSetsReplace(this._defaultValueSet, value, up);
            };

            BasicInplaceReplace.prototype.valueSetsReplace = function(
              valueSets,
              value,
              up
            ) {
              var result = null;

              for (
                var i = 0, len = valueSets.length;
                result === null && i < len;
                i++
              ) {
                result = this.valueSetReplace(valueSets[i], value, up);
              }

              return result;
            };

            BasicInplaceReplace.prototype.valueSetReplace = function(
              valueSet,
              value,
              up
            ) {
              var idx = valueSet.indexOf(value);

              if (idx >= 0) {
                idx += up ? +1 : -1;

                if (idx < 0) {
                  idx = valueSet.length - 1;
                } else {
                  idx %= valueSet.length;
                }

                return valueSet[idx];
              }

              return null;
            };

            BasicInplaceReplace.INSTANCE = new BasicInplaceReplace();
            return BasicInplaceReplace;
          })();

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js":
      /*!****************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js ***!
  \****************************************************************************************/
      /*! exports provided: BaseEditorSimpleWorker, EditorSimpleWorkerImpl, create */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "BaseEditorSimpleWorker",
          function() {
            return BaseEditorSimpleWorker;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "EditorSimpleWorkerImpl",
          function() {
            return EditorSimpleWorkerImpl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "create",
          function() {
            return create;
          }
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../base/common/arrays.js */ "./node_modules/monaco-editor/esm/vs/base/common/arrays.js"
        );
        /* harmony import */ var _base_common_diff_diff_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../base/common/diff/diff.js */ "./node_modules/monaco-editor/esm/vs/base/common/diff/diff.js"
        );
        /* harmony import */ var _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../base/common/iterator.js */ "./node_modules/monaco-editor/esm/vs/base/common/iterator.js"
        );
        /* harmony import */ var _base_common_platform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../base/common/platform.js */ "./node_modules/monaco-editor/esm/vs/base/common/platform.js"
        );
        /* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../base/common/uri.js */ "./node_modules/monaco-editor/esm/vs/base/common/uri.js"
        );
        /* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../core/position.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js"
        );
        /* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../core/range.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/range.js"
        );
        /* harmony import */ var _diff_diffComputer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../diff/diffComputer.js */ "./node_modules/monaco-editor/esm/vs/editor/common/diff/diffComputer.js"
        );
        /* harmony import */ var _model_mirrorTextModel_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../model/mirrorTextModel.js */ "./node_modules/monaco-editor/esm/vs/editor/common/model/mirrorTextModel.js"
        );
        /* harmony import */ var _model_wordHelper_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../model/wordHelper.js */ "./node_modules/monaco-editor/esm/vs/editor/common/model/wordHelper.js"
        );
        /* harmony import */ var _modes_linkComputer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../modes/linkComputer.js */ "./node_modules/monaco-editor/esm/vs/editor/common/modes/linkComputer.js"
        );
        /* harmony import */ var _modes_supports_inplaceReplaceSupport_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../modes/supports/inplaceReplaceSupport.js */ "./node_modules/monaco-editor/esm/vs/editor/common/modes/supports/inplaceReplaceSupport.js"
        );
        /* harmony import */ var _standalone_standaloneBase_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../standalone/standaloneBase.js */ "./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneBase.js"
        );
        /* harmony import */ var _base_common_types_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../base/common/types.js */ "./node_modules/monaco-editor/esm/vs/base/common/types.js"
        );

        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/
        var __extends =
          (undefined && undefined.__extends) ||
          (function() {
            var _extendStatics = function extendStatics(d, b) {
              _extendStatics =
                _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3___default.a ||
                ({
                  __proto__: []
                } instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                  }
                };

              return _extendStatics(d, b);
            };

            return function(d, b) {
              _extendStatics(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype =
                b === null
                  ? _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_2___default()(
                      b
                    )
                  : ((__.prototype = b.prototype), new __());
            };
          })();

        /**
         * @internal
         */

        var MirrorModel =
          /** @class */
          (function(_super) {
            __extends(MirrorModel, _super);

            function MirrorModel() {
              return (_super !== null && _super.apply(this, arguments)) || this;
            }

            Object.defineProperty(MirrorModel.prototype, "uri", {
              get: function get() {
                return this._uri;
              },
              enumerable: true,
              configurable: true
            });
            Object.defineProperty(MirrorModel.prototype, "version", {
              get: function get() {
                return this._versionId;
              },
              enumerable: true,
              configurable: true
            });
            Object.defineProperty(MirrorModel.prototype, "eol", {
              get: function get() {
                return this._eol;
              },
              enumerable: true,
              configurable: true
            });

            MirrorModel.prototype.getValue = function() {
              return this.getText();
            };

            MirrorModel.prototype.getLinesContent = function() {
              return this._lines.slice(0);
            };

            MirrorModel.prototype.getLineCount = function() {
              return this._lines.length;
            };

            MirrorModel.prototype.getLineContent = function(lineNumber) {
              return this._lines[lineNumber - 1];
            };

            MirrorModel.prototype.getWordAtPosition = function(
              position,
              wordDefinition
            ) {
              var wordAtText = Object(
                _model_wordHelper_js__WEBPACK_IMPORTED_MODULE_13__[
                  "getWordAtText"
                ]
              )(
                position.column,
                Object(
                  _model_wordHelper_js__WEBPACK_IMPORTED_MODULE_13__[
                    "ensureValidWordDefinition"
                  ]
                )(wordDefinition),
                this._lines[position.lineNumber - 1],
                0
              );

              if (wordAtText) {
                return new _core_range_js__WEBPACK_IMPORTED_MODULE_10__[
                  "Range"
                ](
                  position.lineNumber,
                  wordAtText.startColumn,
                  position.lineNumber,
                  wordAtText.endColumn
                );
              }

              return null;
            };

            MirrorModel.prototype.getWordUntilPosition = function(
              position,
              wordDefinition
            ) {
              var wordAtPosition = this.getWordAtPosition(
                position,
                wordDefinition
              );

              if (!wordAtPosition) {
                return {
                  word: "",
                  startColumn: position.column,
                  endColumn: position.column
                };
              }

              return {
                word: this._lines[position.lineNumber - 1].substring(
                  wordAtPosition.startColumn - 1,
                  position.column - 1
                ),
                startColumn: wordAtPosition.startColumn,
                endColumn: position.column
              };
            };

            MirrorModel.prototype.createWordIterator = function(
              wordDefinition
            ) {
              var _this = this;

              var obj;
              var lineNumber = 0;
              var lineText;
              var wordRangesIdx = 0;
              var wordRanges = [];

              var next = function next() {
                if (wordRangesIdx < wordRanges.length) {
                  var value = lineText.substring(
                    wordRanges[wordRangesIdx].start,
                    wordRanges[wordRangesIdx].end
                  );
                  wordRangesIdx += 1;

                  if (!obj) {
                    obj = {
                      done: false,
                      value: value
                    };
                  } else {
                    obj.value = value;
                  }

                  return obj;
                } else if (lineNumber >= _this._lines.length) {
                  return _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_6__[
                    "FIN"
                  ];
                } else {
                  lineText = _this._lines[lineNumber];
                  wordRanges = _this._wordenize(lineText, wordDefinition);
                  wordRangesIdx = 0;
                  lineNumber += 1;
                  return next();
                }
              };

              return {
                next: next
              };
            };

            MirrorModel.prototype.getLineWords = function(
              lineNumber,
              wordDefinition
            ) {
              var content = this._lines[lineNumber - 1];

              var ranges = this._wordenize(content, wordDefinition);

              var words = [];

              for (var _i = 0, ranges_1 = ranges; _i < ranges_1.length; _i++) {
                var range = ranges_1[_i];
                words.push({
                  word: content.substring(range.start, range.end),
                  startColumn: range.start + 1,
                  endColumn: range.end + 1
                });
              }

              return words;
            };

            MirrorModel.prototype._wordenize = function(
              content,
              wordDefinition
            ) {
              var result = [];
              var match;
              wordDefinition.lastIndex = 0; // reset lastIndex just to be sure

              while ((match = wordDefinition.exec(content))) {
                if (match[0].length === 0) {
                  // it did match the empty string
                  break;
                }

                result.push({
                  start: match.index,
                  end: match.index + match[0].length
                });
              }

              return result;
            };

            MirrorModel.prototype.getValueInRange = function(range) {
              range = this._validateRange(range);

              if (range.startLineNumber === range.endLineNumber) {
                return this._lines[range.startLineNumber - 1].substring(
                  range.startColumn - 1,
                  range.endColumn - 1
                );
              }

              var lineEnding = this._eol;
              var startLineIndex = range.startLineNumber - 1;
              var endLineIndex = range.endLineNumber - 1;
              var resultLines = [];
              resultLines.push(
                this._lines[startLineIndex].substring(range.startColumn - 1)
              );

              for (var i = startLineIndex + 1; i < endLineIndex; i++) {
                resultLines.push(this._lines[i]);
              }

              resultLines.push(
                this._lines[endLineIndex].substring(0, range.endColumn - 1)
              );
              return resultLines.join(lineEnding);
            };

            MirrorModel.prototype.offsetAt = function(position) {
              position = this._validatePosition(position);

              this._ensureLineStarts();

              return (
                this._lineStarts.getAccumulatedValue(position.lineNumber - 2) +
                (position.column - 1)
              );
            };

            MirrorModel.prototype.positionAt = function(offset) {
              offset = Math.floor(offset);
              offset = Math.max(0, offset);

              this._ensureLineStarts();

              var out = this._lineStarts.getIndexOf(offset);

              var lineLength = this._lines[out.index].length; // Ensure we return a valid position

              return {
                lineNumber: 1 + out.index,
                column: 1 + Math.min(out.remainder, lineLength)
              };
            };

            MirrorModel.prototype._validateRange = function(range) {
              var start = this._validatePosition({
                lineNumber: range.startLineNumber,
                column: range.startColumn
              });

              var end = this._validatePosition({
                lineNumber: range.endLineNumber,
                column: range.endColumn
              });

              if (
                start.lineNumber !== range.startLineNumber ||
                start.column !== range.startColumn ||
                end.lineNumber !== range.endLineNumber ||
                end.column !== range.endColumn
              ) {
                return {
                  startLineNumber: start.lineNumber,
                  startColumn: start.column,
                  endLineNumber: end.lineNumber,
                  endColumn: end.column
                };
              }

              return range;
            };

            MirrorModel.prototype._validatePosition = function(position) {
              if (
                !_core_position_js__WEBPACK_IMPORTED_MODULE_9__[
                  "Position"
                ].isIPosition(position)
              ) {
                throw new Error("bad position");
              }

              var lineNumber = position.lineNumber,
                column = position.column;
              var hasChanged = false;

              if (lineNumber < 1) {
                lineNumber = 1;
                column = 1;
                hasChanged = true;
              } else if (lineNumber > this._lines.length) {
                lineNumber = this._lines.length;
                column = this._lines[lineNumber - 1].length + 1;
                hasChanged = true;
              } else {
                var maxCharacter = this._lines[lineNumber - 1].length + 1;

                if (column < 1) {
                  column = 1;
                  hasChanged = true;
                } else if (column > maxCharacter) {
                  column = maxCharacter;
                  hasChanged = true;
                }
              }

              if (!hasChanged) {
                return position;
              } else {
                return {
                  lineNumber: lineNumber,
                  column: column
                };
              }
            };

            return MirrorModel;
          })(
            _model_mirrorTextModel_js__WEBPACK_IMPORTED_MODULE_12__[
              "MirrorTextModel"
            ]
          );
        /**
         * @internal
         */

        var BaseEditorSimpleWorker =
          /** @class */
          (function() {
            function BaseEditorSimpleWorker(foreignModuleFactory) {
              this._foreignModuleFactory = foreignModuleFactory;
              this._foreignModule = null;
            } // ---- BEGIN diff --------------------------------------------------------------------------

            BaseEditorSimpleWorker.prototype.computeDiff = function(
              originalUrl,
              modifiedUrl,
              ignoreTrimWhitespace
            ) {
              var original = this._getModel(originalUrl);

              var modified = this._getModel(modifiedUrl);

              if (!original || !modified) {
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(
                  null
                );
              }

              var originalLines = original.getLinesContent();
              var modifiedLines = modified.getLinesContent();
              var diffComputer = new _diff_diffComputer_js__WEBPACK_IMPORTED_MODULE_11__[
                "DiffComputer"
              ](originalLines, modifiedLines, {
                shouldComputeCharChanges: true,
                shouldPostProcessCharChanges: true,
                shouldIgnoreTrimWhitespace: ignoreTrimWhitespace,
                shouldMakePrettyDiff: true
              });
              var changes = diffComputer.computeDiff();
              var identical =
                changes.length > 0
                  ? false
                  : this._modelsAreIdentical(original, modified);
              return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(
                {
                  identical: identical,
                  changes: changes
                }
              );
            };

            BaseEditorSimpleWorker.prototype._modelsAreIdentical = function(
              original,
              modified
            ) {
              var originalLineCount = original.getLineCount();
              var modifiedLineCount = modified.getLineCount();

              if (originalLineCount !== modifiedLineCount) {
                return false;
              }

              for (var line = 1; line <= originalLineCount; line++) {
                var originalLine = original.getLineContent(line);
                var modifiedLine = modified.getLineContent(line);

                if (originalLine !== modifiedLine) {
                  return false;
                }
              }

              return true;
            };

            BaseEditorSimpleWorker.prototype.computeMoreMinimalEdits = function(
              modelUrl,
              edits
            ) {
              var model = this._getModel(modelUrl);

              if (!model) {
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(
                  edits
                );
              }

              var result = [];
              var lastEol = undefined;
              edits = Object(
                _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_4__["mergeSort"]
              )(edits, function(a, b) {
                if (a.range && b.range) {
                  return _core_range_js__WEBPACK_IMPORTED_MODULE_10__[
                    "Range"
                  ].compareRangesUsingStarts(a.range, b.range);
                } // eol only changes should go to the end

                var aRng = a.range ? 0 : 1;
                var bRng = b.range ? 0 : 1;
                return aRng - bRng;
              });

              for (var _i = 0, edits_1 = edits; _i < edits_1.length; _i++) {
                var _a = edits_1[_i],
                  range = _a.range,
                  text = _a.text,
                  eol = _a.eol;

                if (typeof eol === "number") {
                  lastEol = eol;
                }

                if (
                  _core_range_js__WEBPACK_IMPORTED_MODULE_10__["Range"].isEmpty(
                    range
                  ) &&
                  !text
                ) {
                  // empty change
                  continue;
                }

                var original = model.getValueInRange(range);
                text = text.replace(/\r\n|\n|\r/g, model.eol);

                if (original === text) {
                  // noop
                  continue;
                } // make sure diff won't take too long

                if (
                  Math.max(text.length, original.length) >
                  BaseEditorSimpleWorker._diffLimit
                ) {
                  result.push({
                    range: range,
                    text: text
                  });
                  continue;
                } // compute diff between original and edit.text

                var changes = Object(
                  _base_common_diff_diff_js__WEBPACK_IMPORTED_MODULE_5__[
                    "stringDiff"
                  ]
                )(original, text, false);
                var editOffset = model.offsetAt(
                  _core_range_js__WEBPACK_IMPORTED_MODULE_10__["Range"]
                    .lift(range)
                    .getStartPosition()
                );

                for (
                  var _b = 0, changes_1 = changes;
                  _b < changes_1.length;
                  _b++
                ) {
                  var change = changes_1[_b];
                  var start = model.positionAt(
                    editOffset + change.originalStart
                  );
                  var end = model.positionAt(
                    editOffset + change.originalStart + change.originalLength
                  );
                  var newEdit = {
                    text: text.substr(
                      change.modifiedStart,
                      change.modifiedLength
                    ),
                    range: {
                      startLineNumber: start.lineNumber,
                      startColumn: start.column,
                      endLineNumber: end.lineNumber,
                      endColumn: end.column
                    }
                  };

                  if (model.getValueInRange(newEdit.range) !== newEdit.text) {
                    result.push(newEdit);
                  }
                }
              }

              if (typeof lastEol === "number") {
                result.push({
                  eol: lastEol,
                  text: "",
                  range: {
                    startLineNumber: 0,
                    startColumn: 0,
                    endLineNumber: 0,
                    endColumn: 0
                  }
                });
              }

              return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(
                result
              );
            }; // ---- END minimal edits ---------------------------------------------------------------

            BaseEditorSimpleWorker.prototype.computeLinks = function(modelUrl) {
              var model = this._getModel(modelUrl);

              if (!model) {
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(
                  null
                );
              }

              return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(
                Object(
                  _modes_linkComputer_js__WEBPACK_IMPORTED_MODULE_14__[
                    "computeLinks"
                  ]
                )(model)
              );
            };

            BaseEditorSimpleWorker.prototype.textualSuggest = function(
              modelUrl,
              position,
              wordDef,
              wordDefFlags
            ) {
              var model = this._getModel(modelUrl);

              if (!model) {
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(
                  null
                );
              }

              var seen = _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_2___default()(
                null
              );

              var suggestions = [];
              var wordDefRegExp = new RegExp(wordDef, wordDefFlags);
              var wordUntil = model.getWordUntilPosition(
                position,
                wordDefRegExp
              );
              var wordAt = model.getWordAtPosition(position, wordDefRegExp);

              if (wordAt) {
                seen[model.getValueInRange(wordAt)] = true;
              }

              for (
                var iter = model.createWordIterator(wordDefRegExp),
                  e = iter.next();
                !e.done &&
                suggestions.length <= BaseEditorSimpleWorker._suggestionsLimit;
                e = iter.next()
              ) {
                var word = e.value;

                if (seen[word]) {
                  continue;
                }

                seen[word] = true;

                if (!isNaN(Number(word))) {
                  continue;
                }

                suggestions.push({
                  kind: 18,
                  /* Text */
                  label: word,
                  insertText: word,
                  range: {
                    startLineNumber: position.lineNumber,
                    startColumn: wordUntil.startColumn,
                    endLineNumber: position.lineNumber,
                    endColumn: wordUntil.endColumn
                  }
                });
              }

              return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(
                {
                  suggestions: suggestions
                }
              );
            }; // ---- END suggest --------------------------------------------------------------------------
            //#region -- word ranges --

            BaseEditorSimpleWorker.prototype.computeWordRanges = function(
              modelUrl,
              range,
              wordDef,
              wordDefFlags
            ) {
              var model = this._getModel(modelUrl);

              if (!model) {
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(
                  _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_2___default()(
                    null
                  )
                );
              }

              var wordDefRegExp = new RegExp(wordDef, wordDefFlags);

              var result = _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_2___default()(
                null
              );

              for (
                var line = range.startLineNumber;
                line < range.endLineNumber;
                line++
              ) {
                var words = model.getLineWords(line, wordDefRegExp);

                for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
                  var word = words_1[_i];

                  if (!isNaN(Number(word.word))) {
                    continue;
                  }

                  var array = result[word.word];

                  if (!array) {
                    array = [];
                    result[word.word] = array;
                  }

                  array.push({
                    startLineNumber: line,
                    startColumn: word.startColumn,
                    endLineNumber: line,
                    endColumn: word.endColumn
                  });
                }
              }

              return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(
                result
              );
            }; //#endregion

            BaseEditorSimpleWorker.prototype.navigateValueSet = function(
              modelUrl,
              range,
              up,
              wordDef,
              wordDefFlags
            ) {
              var model = this._getModel(modelUrl);

              if (!model) {
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(
                  null
                );
              }

              var wordDefRegExp = new RegExp(wordDef, wordDefFlags);

              if (range.startColumn === range.endColumn) {
                range = {
                  startLineNumber: range.startLineNumber,
                  startColumn: range.startColumn,
                  endLineNumber: range.endLineNumber,
                  endColumn: range.endColumn + 1
                };
              }

              var selectionText = model.getValueInRange(range);
              var wordRange = model.getWordAtPosition(
                {
                  lineNumber: range.startLineNumber,
                  column: range.startColumn
                },
                wordDefRegExp
              );

              if (!wordRange) {
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(
                  null
                );
              }

              var word = model.getValueInRange(wordRange);
              var result = _modes_supports_inplaceReplaceSupport_js__WEBPACK_IMPORTED_MODULE_15__[
                "BasicInplaceReplace"
              ].INSTANCE.navigateValueSet(
                range,
                selectionText,
                wordRange,
                word,
                up
              );
              return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(
                result
              );
            }; // ---- BEGIN foreign module support --------------------------------------------------------------------------

            BaseEditorSimpleWorker.prototype.loadForeignModule = function(
              moduleId,
              createData
            ) {
              var _this = this;

              var ctx = {
                getMirrorModels: function getMirrorModels() {
                  return _this._getModels();
                }
              };

              if (this._foreignModuleFactory) {
                this._foreignModule = this._foreignModuleFactory(
                  ctx,
                  createData
                ); // static foreing module

                var methods = [];

                for (
                  var _i = 0,
                    _a = Object(
                      _base_common_types_js__WEBPACK_IMPORTED_MODULE_17__[
                        "getAllPropertyNames"
                      ]
                    )(this._foreignModule);
                  _i < _a.length;
                  _i++
                ) {
                  var prop = _a[_i];

                  if (typeof this._foreignModule[prop] === "function") {
                    methods.push(prop);
                  }
                }

                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(
                  methods
                );
              } // ESM-comment-begin
              // 		return new Promise<any>((resolve, reject) => {
              // 			require([moduleId], (foreignModule: { create: IForeignModuleFactory }) => {
              // 				this._foreignModule = foreignModule.create(ctx, createData);
              //
              // 				let methods: string[] = [];
              // 				for (const prop of getAllPropertyNames(this._foreignModule)) {
              // 					if (typeof this._foreignModule[prop] === 'function') {
              // 						methods.push(prop);
              // 					}
              // 				}
              //
              // 				resolve(methods);
              //
              // 			}, reject);
              // 		});
              // ESM-comment-end
              // ESM-uncomment-begin

              return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.reject(
                new Error("Unexpected usage")
              ); // ESM-uncomment-end
            }; // foreign method request

            BaseEditorSimpleWorker.prototype.fmr = function(method, args) {
              if (
                !this._foreignModule ||
                typeof this._foreignModule[method] !== "function"
              ) {
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.reject(
                  new Error("Missing requestHandler or method: " + method)
                );
              }

              try {
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(
                  this._foreignModule[method].apply(this._foreignModule, args)
                );
              } catch (e) {
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.reject(
                  e
                );
              }
            }; // ---- END diff --------------------------------------------------------------------------
            // ---- BEGIN minimal edits ---------------------------------------------------------------

            BaseEditorSimpleWorker._diffLimit = 100000; // ---- BEGIN suggest --------------------------------------------------------------------------

            BaseEditorSimpleWorker._suggestionsLimit = 10000;
            return BaseEditorSimpleWorker;
          })();

        /**
         * @internal
         */

        var EditorSimpleWorkerImpl =
          /** @class */
          (function(_super) {
            __extends(EditorSimpleWorkerImpl, _super);

            function EditorSimpleWorkerImpl(foreignModuleFactory) {
              var _this = _super.call(this, foreignModuleFactory) || this;

              _this._models = _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_2___default()(
                null
              );
              return _this;
            }

            EditorSimpleWorkerImpl.prototype.dispose = function() {
              this._models = _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_2___default()(
                null
              );
            };

            EditorSimpleWorkerImpl.prototype._getModel = function(uri) {
              return this._models[uri];
            };

            EditorSimpleWorkerImpl.prototype._getModels = function() {
              var _this = this;

              var all = [];

              _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(
                this._models
              ).forEach(function(key) {
                return all.push(_this._models[key]);
              });

              return all;
            };

            EditorSimpleWorkerImpl.prototype.acceptNewModel = function(data) {
              this._models[data.url] = new MirrorModel(
                _base_common_uri_js__WEBPACK_IMPORTED_MODULE_8__["URI"].parse(
                  data.url
                ),
                data.lines,
                data.EOL,
                data.versionId
              );
            };

            EditorSimpleWorkerImpl.prototype.acceptModelChanged = function(
              strURL,
              e
            ) {
              if (!this._models[strURL]) {
                return;
              }

              var model = this._models[strURL];
              model.onEvents(e);
            };

            EditorSimpleWorkerImpl.prototype.acceptRemovedModel = function(
              strURL
            ) {
              if (!this._models[strURL]) {
                return;
              }

              delete this._models[strURL];
            };

            return EditorSimpleWorkerImpl;
          })(BaseEditorSimpleWorker);

        /**
         * Called on the worker side
         * @internal
         */

        function create() {
          return new EditorSimpleWorkerImpl(null);
        }

        if (typeof importScripts === "function") {
          // Running in a web worker
          _base_common_platform_js__WEBPACK_IMPORTED_MODULE_7__[
            "globals"
          ].monaco = Object(
            _standalone_standaloneBase_js__WEBPACK_IMPORTED_MODULE_16__[
              "createMonacoBaseAPI"
            ]
          )();
        }

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/editor/common/standalone/promise-polyfill/polyfill.js":
      /*!*************************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/standalone/promise-polyfill/polyfill.js ***!
  \*************************************************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_core_js_set_immediate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/set-immediate */ "./node_modules/@babel/runtime-corejs2/core-js/set-immediate.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_set_immediate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_set_immediate__WEBPACK_IMPORTED_MODULE_0__
        );

        /*!
Copyright (c) 2014 Taylor Hakes
Copyright (c) 2014 Forbes Lindesay
 */
        (function(global, factory) {
          typeof exports === "object" && typeof module !== "undefined"
            ? factory()
            : typeof define === "function" &&
              __webpack_require__(
                /*! !webpack amd options */ "./node_modules/next/node_modules/webpack/buildin/amd-options.js"
              )
            ? define(factory)
            : factory();
        })(undefined, function() {
          "use strict";
          /**
           * @this {Promise}
           */

          function finallyConstructor(callback) {
            var constructor = this.constructor;
            return this.then(
              function(value) {
                return constructor.resolve(callback()).then(function() {
                  return value;
                });
              },
              function(reason) {
                return constructor.resolve(callback()).then(function() {
                  return constructor.reject(reason);
                });
              }
            );
          } // Store setTimeout reference so promise-polyfill will be unaffected by
          // other code modifying setTimeout (like sinon.useFakeTimers())

          var setTimeoutFunc = setTimeout;

          function noop() {} // Polyfill for Function.prototype.bind

          function bind(fn, thisArg) {
            return function() {
              fn.apply(thisArg, arguments);
            };
          }
          /**
           * @constructor
           * @param {Function} fn
           */

          function Promise(fn) {
            if (!(this instanceof Promise))
              throw new TypeError("Promises must be constructed via new");
            if (typeof fn !== "function") throw new TypeError("not a function");
            /** @type {!number} */

            this._state = 0;
            /** @type {!boolean} */

            this._handled = false;
            /** @type {Promise|undefined} */

            this._value = undefined;
            /** @type {!Array<!Function>} */

            this._deferreds = [];
            doResolve(fn, this);
          }

          function handle(self, deferred) {
            while (self._state === 3) {
              self = self._value;
            }

            if (self._state === 0) {
              self._deferreds.push(deferred);

              return;
            }

            self._handled = true;

            Promise._immediateFn(function() {
              var cb =
                self._state === 1 ? deferred.onFulfilled : deferred.onRejected;

              if (cb === null) {
                (self._state === 1 ? resolve : reject)(
                  deferred.promise,
                  self._value
                );
                return;
              }

              var ret;

              try {
                ret = cb(self._value);
              } catch (e) {
                reject(deferred.promise, e);
                return;
              }

              resolve(deferred.promise, ret);
            });
          }

          function resolve(self, newValue) {
            try {
              // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
              if (newValue === self)
                throw new TypeError(
                  "A promise cannot be resolved with itself."
                );

              if (
                newValue &&
                (typeof newValue === "object" || typeof newValue === "function")
              ) {
                var then = newValue.then;

                if (newValue instanceof Promise) {
                  self._state = 3;
                  self._value = newValue;
                  finale(self);
                  return;
                } else if (typeof then === "function") {
                  doResolve(bind(then, newValue), self);
                  return;
                }
              }

              self._state = 1;
              self._value = newValue;
              finale(self);
            } catch (e) {
              reject(self, e);
            }
          }

          function reject(self, newValue) {
            self._state = 2;
            self._value = newValue;
            finale(self);
          }

          function finale(self) {
            if (self._state === 2 && self._deferreds.length === 0) {
              Promise._immediateFn(function() {
                if (!self._handled) {
                  Promise._unhandledRejectionFn(self._value);
                }
              });
            }

            for (var i = 0, len = self._deferreds.length; i < len; i++) {
              handle(self, self._deferreds[i]);
            }

            self._deferreds = null;
          }
          /**
           * @constructor
           */

          function Handler(onFulfilled, onRejected, promise) {
            this.onFulfilled =
              typeof onFulfilled === "function" ? onFulfilled : null;
            this.onRejected =
              typeof onRejected === "function" ? onRejected : null;
            this.promise = promise;
          }
          /**
           * Take a potentially misbehaving resolver function and make sure
           * onFulfilled and onRejected are only called once.
           *
           * Makes no guarantees about asynchrony.
           */

          function doResolve(fn, self) {
            var done = false;

            try {
              fn(
                function(value) {
                  if (done) return;
                  done = true;
                  resolve(self, value);
                },
                function(reason) {
                  if (done) return;
                  done = true;
                  reject(self, reason);
                }
              );
            } catch (ex) {
              if (done) return;
              done = true;
              reject(self, ex);
            }
          }

          Promise.prototype["catch"] = function(onRejected) {
            return this.then(null, onRejected);
          };

          Promise.prototype.then = function(onFulfilled, onRejected) {
            // @ts-ignore
            var prom = new this.constructor(noop);
            handle(this, new Handler(onFulfilled, onRejected, prom));
            return prom;
          };

          Promise.prototype["finally"] = finallyConstructor;

          Promise.all = function(arr) {
            return new Promise(function(resolve, reject) {
              if (!arr || typeof arr.length === "undefined")
                throw new TypeError("Promise.all accepts an array");
              var args = Array.prototype.slice.call(arr);
              if (args.length === 0) return resolve([]);
              var remaining = args.length;

              function res(i, val) {
                try {
                  if (
                    val &&
                    (typeof val === "object" || typeof val === "function")
                  ) {
                    var then = val.then;

                    if (typeof then === "function") {
                      then.call(
                        val,
                        function(val) {
                          res(i, val);
                        },
                        reject
                      );
                      return;
                    }
                  }

                  args[i] = val;

                  if (--remaining === 0) {
                    resolve(args);
                  }
                } catch (ex) {
                  reject(ex);
                }
              }

              for (var i = 0; i < args.length; i++) {
                res(i, args[i]);
              }
            });
          };

          Promise.resolve = function(value) {
            if (
              value &&
              typeof value === "object" &&
              value.constructor === Promise
            ) {
              return value;
            }

            return new Promise(function(resolve) {
              resolve(value);
            });
          };

          Promise.reject = function(value) {
            return new Promise(function(resolve, reject) {
              reject(value);
            });
          };

          Promise.race = function(values) {
            return new Promise(function(resolve, reject) {
              for (var i = 0, len = values.length; i < len; i++) {
                values[i].then(resolve, reject);
              }
            });
          }; // Use polyfill for setImmediate for performance gains

          Promise._immediateFn =
            (typeof _babel_runtime_corejs2_core_js_set_immediate__WEBPACK_IMPORTED_MODULE_0___default.a ===
              "function" &&
              function(fn) {
                _babel_runtime_corejs2_core_js_set_immediate__WEBPACK_IMPORTED_MODULE_0___default()(
                  fn
                );
              }) ||
            function(fn) {
              setTimeoutFunc(fn, 0);
            };

          Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
            if (typeof console !== "undefined" && console) {
              console.warn("Possible Unhandled Promise Rejection:", err); // eslint-disable-line no-console
            }
          };
          /** @suppress {undefinedVars} */

          var globalNS = (function() {
            // the only reliable means to get the global object is
            // `Function('return this')()`
            // However, this causes CSP violations in Chrome apps.
            if (typeof self !== "undefined") {
              return self;
            }

            if (typeof window !== "undefined") {
              return window;
            }

            if (typeof global !== "undefined") {
              return global;
            }

            throw new Error("unable to locate global object");
          })();

          if (!("Promise" in globalNS)) {
            globalNS["Promise"] = Promise;
          } else if (!globalNS.Promise.prototype["finally"]) {
            globalNS.Promise.prototype["finally"] = finallyConstructor;
          }
        });

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneBase.js":
      /*!**************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneBase.js ***!
  \**************************************************************************************/
      /*! exports provided: KeyMod, createMonacoBaseAPI */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "KeyMod",
          function() {
            return KeyMod;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "createMonacoBaseAPI",
          function() {
            return createMonacoBaseAPI;
          }
        );
        /* harmony import */ var _promise_polyfill_polyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./promise-polyfill/polyfill.js */ "./node_modules/monaco-editor/esm/vs/editor/common/standalone/promise-polyfill/polyfill.js"
        );
        /* harmony import */ var _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../base/common/cancellation.js */ "./node_modules/monaco-editor/esm/vs/base/common/cancellation.js"
        );
        /* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../base/common/event.js */ "./node_modules/monaco-editor/esm/vs/base/common/event.js"
        );
        /* harmony import */ var _base_common_keyCodes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../base/common/keyCodes.js */ "./node_modules/monaco-editor/esm/vs/base/common/keyCodes.js"
        );
        /* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../base/common/uri.js */ "./node_modules/monaco-editor/esm/vs/base/common/uri.js"
        );
        /* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../core/position.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js"
        );
        /* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../core/range.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/range.js"
        );
        /* harmony import */ var _core_selection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../core/selection.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/selection.js"
        );
        /* harmony import */ var _core_token_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../core/token.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/token.js"
        );
        /* harmony import */ var _standaloneEnums_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./standaloneEnums.js */ "./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneEnums.js"
        );
        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/

        var KeyMod =
          /** @class */
          (function() {
            function KeyMod() {}

            KeyMod.chord = function(firstPart, secondPart) {
              return Object(
                _base_common_keyCodes_js__WEBPACK_IMPORTED_MODULE_3__[
                  "KeyChord"
                ]
              )(firstPart, secondPart);
            };

            KeyMod.CtrlCmd = 2048;
            /* CtrlCmd */
            KeyMod.Shift = 1024;
            /* Shift */
            KeyMod.Alt = 512;
            /* Alt */
            KeyMod.WinCtrl = 256;
            /* WinCtrl */
            return KeyMod;
          })();

        function createMonacoBaseAPI() {
          return {
            editor: undefined,
            languages: undefined,
            CancellationTokenSource:
              _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__[
                "CancellationTokenSource"
              ],
            Emitter:
              _base_common_event_js__WEBPACK_IMPORTED_MODULE_2__["Emitter"],
            KeyCode:
              _standaloneEnums_js__WEBPACK_IMPORTED_MODULE_9__["KeyCode"],
            KeyMod: KeyMod,
            Position:
              _core_position_js__WEBPACK_IMPORTED_MODULE_5__["Position"],
            Range: _core_range_js__WEBPACK_IMPORTED_MODULE_6__["Range"],
            Selection:
              _core_selection_js__WEBPACK_IMPORTED_MODULE_7__["Selection"],
            SelectionDirection:
              _standaloneEnums_js__WEBPACK_IMPORTED_MODULE_9__[
                "SelectionDirection"
              ],
            MarkerSeverity:
              _standaloneEnums_js__WEBPACK_IMPORTED_MODULE_9__[
                "MarkerSeverity"
              ],
            MarkerTag:
              _standaloneEnums_js__WEBPACK_IMPORTED_MODULE_9__["MarkerTag"],
            Uri: _base_common_uri_js__WEBPACK_IMPORTED_MODULE_4__["URI"],
            Token: _core_token_js__WEBPACK_IMPORTED_MODULE_8__["Token"]
          };
        }

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneEnums.js":
      /*!***************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneEnums.js ***!
  \***************************************************************************************/
      /*! exports provided: MarkerTag, MarkerSeverity, KeyCode, SelectionDirection, ScrollbarVisibility, OverviewRulerLane, EndOfLinePreference, DefaultEndOfLine, EndOfLineSequence, TrackedRangeStickiness, ScrollType, CursorChangeReason, RenderMinimap, WrappingIndent, TextEditorCursorBlinkingStyle, TextEditorCursorStyle, RenderLineNumbersType, ContentWidgetPositionPreference, OverlayWidgetPositionPreference, MouseTargetType, IndentAction, CompletionItemKind, CompletionItemInsertTextRule, CompletionTriggerKind, SignatureHelpTriggerKind, DocumentHighlightKind, SymbolKind */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "MarkerTag",
          function() {
            return MarkerTag;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "MarkerSeverity",
          function() {
            return MarkerSeverity;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "KeyCode",
          function() {
            return KeyCode;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SelectionDirection",
          function() {
            return SelectionDirection;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ScrollbarVisibility",
          function() {
            return ScrollbarVisibility;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "OverviewRulerLane",
          function() {
            return OverviewRulerLane;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "EndOfLinePreference",
          function() {
            return EndOfLinePreference;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "DefaultEndOfLine",
          function() {
            return DefaultEndOfLine;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "EndOfLineSequence",
          function() {
            return EndOfLineSequence;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "TrackedRangeStickiness",
          function() {
            return TrackedRangeStickiness;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ScrollType",
          function() {
            return ScrollType;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CursorChangeReason",
          function() {
            return CursorChangeReason;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "RenderMinimap",
          function() {
            return RenderMinimap;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "WrappingIndent",
          function() {
            return WrappingIndent;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "TextEditorCursorBlinkingStyle",
          function() {
            return TextEditorCursorBlinkingStyle;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "TextEditorCursorStyle",
          function() {
            return TextEditorCursorStyle;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "RenderLineNumbersType",
          function() {
            return RenderLineNumbersType;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ContentWidgetPositionPreference",
          function() {
            return ContentWidgetPositionPreference;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "OverlayWidgetPositionPreference",
          function() {
            return OverlayWidgetPositionPreference;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "MouseTargetType",
          function() {
            return MouseTargetType;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "IndentAction",
          function() {
            return IndentAction;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CompletionItemKind",
          function() {
            return CompletionItemKind;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CompletionItemInsertTextRule",
          function() {
            return CompletionItemInsertTextRule;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CompletionTriggerKind",
          function() {
            return CompletionTriggerKind;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SignatureHelpTriggerKind",
          function() {
            return SignatureHelpTriggerKind;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "DocumentHighlightKind",
          function() {
            return DocumentHighlightKind;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SymbolKind",
          function() {
            return SymbolKind;
          }
        );
        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/
        // THIS IS A GENERATED FILE. DO NOT EDIT DIRECTLY.
        var MarkerTag;

        (function(MarkerTag) {
          MarkerTag[(MarkerTag["Unnecessary"] = 1)] = "Unnecessary";
        })(MarkerTag || (MarkerTag = {}));

        var MarkerSeverity;

        (function(MarkerSeverity) {
          MarkerSeverity[(MarkerSeverity["Hint"] = 1)] = "Hint";
          MarkerSeverity[(MarkerSeverity["Info"] = 2)] = "Info";
          MarkerSeverity[(MarkerSeverity["Warning"] = 4)] = "Warning";
          MarkerSeverity[(MarkerSeverity["Error"] = 8)] = "Error";
        })(MarkerSeverity || (MarkerSeverity = {}));
        /**
         * Virtual Key Codes, the value does not hold any inherent meaning.
         * Inspired somewhat from https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731(v=vs.85).aspx
         * But these are "more general", as they should work across browsers & OS`s.
         */

        var KeyCode;

        (function(KeyCode) {
          /**
           * Placed first to cover the 0 value of the enum.
           */
          KeyCode[(KeyCode["Unknown"] = 0)] = "Unknown";
          KeyCode[(KeyCode["Backspace"] = 1)] = "Backspace";
          KeyCode[(KeyCode["Tab"] = 2)] = "Tab";
          KeyCode[(KeyCode["Enter"] = 3)] = "Enter";
          KeyCode[(KeyCode["Shift"] = 4)] = "Shift";
          KeyCode[(KeyCode["Ctrl"] = 5)] = "Ctrl";
          KeyCode[(KeyCode["Alt"] = 6)] = "Alt";
          KeyCode[(KeyCode["PauseBreak"] = 7)] = "PauseBreak";
          KeyCode[(KeyCode["CapsLock"] = 8)] = "CapsLock";
          KeyCode[(KeyCode["Escape"] = 9)] = "Escape";
          KeyCode[(KeyCode["Space"] = 10)] = "Space";
          KeyCode[(KeyCode["PageUp"] = 11)] = "PageUp";
          KeyCode[(KeyCode["PageDown"] = 12)] = "PageDown";
          KeyCode[(KeyCode["End"] = 13)] = "End";
          KeyCode[(KeyCode["Home"] = 14)] = "Home";
          KeyCode[(KeyCode["LeftArrow"] = 15)] = "LeftArrow";
          KeyCode[(KeyCode["UpArrow"] = 16)] = "UpArrow";
          KeyCode[(KeyCode["RightArrow"] = 17)] = "RightArrow";
          KeyCode[(KeyCode["DownArrow"] = 18)] = "DownArrow";
          KeyCode[(KeyCode["Insert"] = 19)] = "Insert";
          KeyCode[(KeyCode["Delete"] = 20)] = "Delete";
          KeyCode[(KeyCode["KEY_0"] = 21)] = "KEY_0";
          KeyCode[(KeyCode["KEY_1"] = 22)] = "KEY_1";
          KeyCode[(KeyCode["KEY_2"] = 23)] = "KEY_2";
          KeyCode[(KeyCode["KEY_3"] = 24)] = "KEY_3";
          KeyCode[(KeyCode["KEY_4"] = 25)] = "KEY_4";
          KeyCode[(KeyCode["KEY_5"] = 26)] = "KEY_5";
          KeyCode[(KeyCode["KEY_6"] = 27)] = "KEY_6";
          KeyCode[(KeyCode["KEY_7"] = 28)] = "KEY_7";
          KeyCode[(KeyCode["KEY_8"] = 29)] = "KEY_8";
          KeyCode[(KeyCode["KEY_9"] = 30)] = "KEY_9";
          KeyCode[(KeyCode["KEY_A"] = 31)] = "KEY_A";
          KeyCode[(KeyCode["KEY_B"] = 32)] = "KEY_B";
          KeyCode[(KeyCode["KEY_C"] = 33)] = "KEY_C";
          KeyCode[(KeyCode["KEY_D"] = 34)] = "KEY_D";
          KeyCode[(KeyCode["KEY_E"] = 35)] = "KEY_E";
          KeyCode[(KeyCode["KEY_F"] = 36)] = "KEY_F";
          KeyCode[(KeyCode["KEY_G"] = 37)] = "KEY_G";
          KeyCode[(KeyCode["KEY_H"] = 38)] = "KEY_H";
          KeyCode[(KeyCode["KEY_I"] = 39)] = "KEY_I";
          KeyCode[(KeyCode["KEY_J"] = 40)] = "KEY_J";
          KeyCode[(KeyCode["KEY_K"] = 41)] = "KEY_K";
          KeyCode[(KeyCode["KEY_L"] = 42)] = "KEY_L";
          KeyCode[(KeyCode["KEY_M"] = 43)] = "KEY_M";
          KeyCode[(KeyCode["KEY_N"] = 44)] = "KEY_N";
          KeyCode[(KeyCode["KEY_O"] = 45)] = "KEY_O";
          KeyCode[(KeyCode["KEY_P"] = 46)] = "KEY_P";
          KeyCode[(KeyCode["KEY_Q"] = 47)] = "KEY_Q";
          KeyCode[(KeyCode["KEY_R"] = 48)] = "KEY_R";
          KeyCode[(KeyCode["KEY_S"] = 49)] = "KEY_S";
          KeyCode[(KeyCode["KEY_T"] = 50)] = "KEY_T";
          KeyCode[(KeyCode["KEY_U"] = 51)] = "KEY_U";
          KeyCode[(KeyCode["KEY_V"] = 52)] = "KEY_V";
          KeyCode[(KeyCode["KEY_W"] = 53)] = "KEY_W";
          KeyCode[(KeyCode["KEY_X"] = 54)] = "KEY_X";
          KeyCode[(KeyCode["KEY_Y"] = 55)] = "KEY_Y";
          KeyCode[(KeyCode["KEY_Z"] = 56)] = "KEY_Z";
          KeyCode[(KeyCode["Meta"] = 57)] = "Meta";
          KeyCode[(KeyCode["ContextMenu"] = 58)] = "ContextMenu";
          KeyCode[(KeyCode["F1"] = 59)] = "F1";
          KeyCode[(KeyCode["F2"] = 60)] = "F2";
          KeyCode[(KeyCode["F3"] = 61)] = "F3";
          KeyCode[(KeyCode["F4"] = 62)] = "F4";
          KeyCode[(KeyCode["F5"] = 63)] = "F5";
          KeyCode[(KeyCode["F6"] = 64)] = "F6";
          KeyCode[(KeyCode["F7"] = 65)] = "F7";
          KeyCode[(KeyCode["F8"] = 66)] = "F8";
          KeyCode[(KeyCode["F9"] = 67)] = "F9";
          KeyCode[(KeyCode["F10"] = 68)] = "F10";
          KeyCode[(KeyCode["F11"] = 69)] = "F11";
          KeyCode[(KeyCode["F12"] = 70)] = "F12";
          KeyCode[(KeyCode["F13"] = 71)] = "F13";
          KeyCode[(KeyCode["F14"] = 72)] = "F14";
          KeyCode[(KeyCode["F15"] = 73)] = "F15";
          KeyCode[(KeyCode["F16"] = 74)] = "F16";
          KeyCode[(KeyCode["F17"] = 75)] = "F17";
          KeyCode[(KeyCode["F18"] = 76)] = "F18";
          KeyCode[(KeyCode["F19"] = 77)] = "F19";
          KeyCode[(KeyCode["NumLock"] = 78)] = "NumLock";
          KeyCode[(KeyCode["ScrollLock"] = 79)] = "ScrollLock";
          /**
           * Used for miscellaneous characters; it can vary by keyboard.
           * For the US standard keyboard, the ';:' key
           */

          KeyCode[(KeyCode["US_SEMICOLON"] = 80)] = "US_SEMICOLON";
          /**
           * For any country/region, the '+' key
           * For the US standard keyboard, the '=+' key
           */

          KeyCode[(KeyCode["US_EQUAL"] = 81)] = "US_EQUAL";
          /**
           * For any country/region, the ',' key
           * For the US standard keyboard, the ',<' key
           */

          KeyCode[(KeyCode["US_COMMA"] = 82)] = "US_COMMA";
          /**
           * For any country/region, the '-' key
           * For the US standard keyboard, the '-_' key
           */

          KeyCode[(KeyCode["US_MINUS"] = 83)] = "US_MINUS";
          /**
           * For any country/region, the '.' key
           * For the US standard keyboard, the '.>' key
           */

          KeyCode[(KeyCode["US_DOT"] = 84)] = "US_DOT";
          /**
           * Used for miscellaneous characters; it can vary by keyboard.
           * For the US standard keyboard, the '/?' key
           */

          KeyCode[(KeyCode["US_SLASH"] = 85)] = "US_SLASH";
          /**
           * Used for miscellaneous characters; it can vary by keyboard.
           * For the US standard keyboard, the '`~' key
           */

          KeyCode[(KeyCode["US_BACKTICK"] = 86)] = "US_BACKTICK";
          /**
           * Used for miscellaneous characters; it can vary by keyboard.
           * For the US standard keyboard, the '[{' key
           */

          KeyCode[(KeyCode["US_OPEN_SQUARE_BRACKET"] = 87)] =
            "US_OPEN_SQUARE_BRACKET";
          /**
           * Used for miscellaneous characters; it can vary by keyboard.
           * For the US standard keyboard, the '\|' key
           */

          KeyCode[(KeyCode["US_BACKSLASH"] = 88)] = "US_BACKSLASH";
          /**
           * Used for miscellaneous characters; it can vary by keyboard.
           * For the US standard keyboard, the ']}' key
           */

          KeyCode[(KeyCode["US_CLOSE_SQUARE_BRACKET"] = 89)] =
            "US_CLOSE_SQUARE_BRACKET";
          /**
           * Used for miscellaneous characters; it can vary by keyboard.
           * For the US standard keyboard, the ''"' key
           */

          KeyCode[(KeyCode["US_QUOTE"] = 90)] = "US_QUOTE";
          /**
           * Used for miscellaneous characters; it can vary by keyboard.
           */

          KeyCode[(KeyCode["OEM_8"] = 91)] = "OEM_8";
          /**
           * Either the angle bracket key or the backslash key on the RT 102-key keyboard.
           */

          KeyCode[(KeyCode["OEM_102"] = 92)] = "OEM_102";
          KeyCode[(KeyCode["NUMPAD_0"] = 93)] = "NUMPAD_0";
          KeyCode[(KeyCode["NUMPAD_1"] = 94)] = "NUMPAD_1";
          KeyCode[(KeyCode["NUMPAD_2"] = 95)] = "NUMPAD_2";
          KeyCode[(KeyCode["NUMPAD_3"] = 96)] = "NUMPAD_3";
          KeyCode[(KeyCode["NUMPAD_4"] = 97)] = "NUMPAD_4";
          KeyCode[(KeyCode["NUMPAD_5"] = 98)] = "NUMPAD_5";
          KeyCode[(KeyCode["NUMPAD_6"] = 99)] = "NUMPAD_6";
          KeyCode[(KeyCode["NUMPAD_7"] = 100)] = "NUMPAD_7";
          KeyCode[(KeyCode["NUMPAD_8"] = 101)] = "NUMPAD_8";
          KeyCode[(KeyCode["NUMPAD_9"] = 102)] = "NUMPAD_9";
          KeyCode[(KeyCode["NUMPAD_MULTIPLY"] = 103)] = "NUMPAD_MULTIPLY";
          KeyCode[(KeyCode["NUMPAD_ADD"] = 104)] = "NUMPAD_ADD";
          KeyCode[(KeyCode["NUMPAD_SEPARATOR"] = 105)] = "NUMPAD_SEPARATOR";
          KeyCode[(KeyCode["NUMPAD_SUBTRACT"] = 106)] = "NUMPAD_SUBTRACT";
          KeyCode[(KeyCode["NUMPAD_DECIMAL"] = 107)] = "NUMPAD_DECIMAL";
          KeyCode[(KeyCode["NUMPAD_DIVIDE"] = 108)] = "NUMPAD_DIVIDE";
          /**
           * Cover all key codes when IME is processing input.
           */

          KeyCode[(KeyCode["KEY_IN_COMPOSITION"] = 109)] = "KEY_IN_COMPOSITION";
          KeyCode[(KeyCode["ABNT_C1"] = 110)] = "ABNT_C1";
          KeyCode[(KeyCode["ABNT_C2"] = 111)] = "ABNT_C2";
          /**
           * Placed last to cover the length of the enum.
           * Please do not depend on this value!
           */

          KeyCode[(KeyCode["MAX_VALUE"] = 112)] = "MAX_VALUE";
        })(KeyCode || (KeyCode = {}));
        /**
         * The direction of a selection.
         */

        var SelectionDirection;

        (function(SelectionDirection) {
          /**
           * The selection starts above where it ends.
           */
          SelectionDirection[(SelectionDirection["LTR"] = 0)] = "LTR";
          /**
           * The selection starts below where it ends.
           */

          SelectionDirection[(SelectionDirection["RTL"] = 1)] = "RTL";
        })(SelectionDirection || (SelectionDirection = {}));

        var ScrollbarVisibility;

        (function(ScrollbarVisibility) {
          ScrollbarVisibility[(ScrollbarVisibility["Auto"] = 1)] = "Auto";
          ScrollbarVisibility[(ScrollbarVisibility["Hidden"] = 2)] = "Hidden";
          ScrollbarVisibility[(ScrollbarVisibility["Visible"] = 3)] = "Visible";
        })(ScrollbarVisibility || (ScrollbarVisibility = {}));
        /**
         * Vertical Lane in the overview ruler of the editor.
         */

        var OverviewRulerLane;

        (function(OverviewRulerLane) {
          OverviewRulerLane[(OverviewRulerLane["Left"] = 1)] = "Left";
          OverviewRulerLane[(OverviewRulerLane["Center"] = 2)] = "Center";
          OverviewRulerLane[(OverviewRulerLane["Right"] = 4)] = "Right";
          OverviewRulerLane[(OverviewRulerLane["Full"] = 7)] = "Full";
        })(OverviewRulerLane || (OverviewRulerLane = {}));
        /**
         * End of line character preference.
         */

        var EndOfLinePreference;

        (function(EndOfLinePreference) {
          /**
           * Use the end of line character identified in the text buffer.
           */
          EndOfLinePreference[(EndOfLinePreference["TextDefined"] = 0)] =
            "TextDefined";
          /**
           * Use line feed (\n) as the end of line character.
           */

          EndOfLinePreference[(EndOfLinePreference["LF"] = 1)] = "LF";
          /**
           * Use carriage return and line feed (\r\n) as the end of line character.
           */

          EndOfLinePreference[(EndOfLinePreference["CRLF"] = 2)] = "CRLF";
        })(EndOfLinePreference || (EndOfLinePreference = {}));
        /**
         * The default end of line to use when instantiating models.
         */

        var DefaultEndOfLine;

        (function(DefaultEndOfLine) {
          /**
           * Use line feed (\n) as the end of line character.
           */
          DefaultEndOfLine[(DefaultEndOfLine["LF"] = 1)] = "LF";
          /**
           * Use carriage return and line feed (\r\n) as the end of line character.
           */

          DefaultEndOfLine[(DefaultEndOfLine["CRLF"] = 2)] = "CRLF";
        })(DefaultEndOfLine || (DefaultEndOfLine = {}));
        /**
         * End of line character preference.
         */

        var EndOfLineSequence;

        (function(EndOfLineSequence) {
          /**
           * Use line feed (\n) as the end of line character.
           */
          EndOfLineSequence[(EndOfLineSequence["LF"] = 0)] = "LF";
          /**
           * Use carriage return and line feed (\r\n) as the end of line character.
           */

          EndOfLineSequence[(EndOfLineSequence["CRLF"] = 1)] = "CRLF";
        })(EndOfLineSequence || (EndOfLineSequence = {}));
        /**
         * Describes the behavior of decorations when typing/editing near their edges.
         * Note: Please do not edit the values, as they very carefully match `DecorationRangeBehavior`
         */

        var TrackedRangeStickiness;

        (function(TrackedRangeStickiness) {
          TrackedRangeStickiness[
            (TrackedRangeStickiness["AlwaysGrowsWhenTypingAtEdges"] = 0)
          ] = "AlwaysGrowsWhenTypingAtEdges";
          TrackedRangeStickiness[
            (TrackedRangeStickiness["NeverGrowsWhenTypingAtEdges"] = 1)
          ] = "NeverGrowsWhenTypingAtEdges";
          TrackedRangeStickiness[
            (TrackedRangeStickiness["GrowsOnlyWhenTypingBefore"] = 2)
          ] = "GrowsOnlyWhenTypingBefore";
          TrackedRangeStickiness[
            (TrackedRangeStickiness["GrowsOnlyWhenTypingAfter"] = 3)
          ] = "GrowsOnlyWhenTypingAfter";
        })(TrackedRangeStickiness || (TrackedRangeStickiness = {}));

        var ScrollType;

        (function(ScrollType) {
          ScrollType[(ScrollType["Smooth"] = 0)] = "Smooth";
          ScrollType[(ScrollType["Immediate"] = 1)] = "Immediate";
        })(ScrollType || (ScrollType = {}));
        /**
         * Describes the reason the cursor has changed its position.
         */

        var CursorChangeReason;

        (function(CursorChangeReason) {
          /**
           * Unknown or not set.
           */
          CursorChangeReason[(CursorChangeReason["NotSet"] = 0)] = "NotSet";
          /**
           * A `model.setValue()` was called.
           */

          CursorChangeReason[(CursorChangeReason["ContentFlush"] = 1)] =
            "ContentFlush";
          /**
           * The `model` has been changed outside of this cursor and the cursor recovers its position from associated markers.
           */

          CursorChangeReason[(CursorChangeReason["RecoverFromMarkers"] = 2)] =
            "RecoverFromMarkers";
          /**
           * There was an explicit user gesture.
           */

          CursorChangeReason[(CursorChangeReason["Explicit"] = 3)] = "Explicit";
          /**
           * There was a Paste.
           */

          CursorChangeReason[(CursorChangeReason["Paste"] = 4)] = "Paste";
          /**
           * There was an Undo.
           */

          CursorChangeReason[(CursorChangeReason["Undo"] = 5)] = "Undo";
          /**
           * There was a Redo.
           */

          CursorChangeReason[(CursorChangeReason["Redo"] = 6)] = "Redo";
        })(CursorChangeReason || (CursorChangeReason = {}));

        var RenderMinimap;

        (function(RenderMinimap) {
          RenderMinimap[(RenderMinimap["None"] = 0)] = "None";
          RenderMinimap[(RenderMinimap["Small"] = 1)] = "Small";
          RenderMinimap[(RenderMinimap["Large"] = 2)] = "Large";
          RenderMinimap[(RenderMinimap["SmallBlocks"] = 3)] = "SmallBlocks";
          RenderMinimap[(RenderMinimap["LargeBlocks"] = 4)] = "LargeBlocks";
        })(RenderMinimap || (RenderMinimap = {}));
        /**
         * Describes how to indent wrapped lines.
         */

        var WrappingIndent;

        (function(WrappingIndent) {
          /**
           * No indentation => wrapped lines begin at column 1.
           */
          WrappingIndent[(WrappingIndent["None"] = 0)] = "None";
          /**
           * Same => wrapped lines get the same indentation as the parent.
           */

          WrappingIndent[(WrappingIndent["Same"] = 1)] = "Same";
          /**
           * Indent => wrapped lines get +1 indentation toward the parent.
           */

          WrappingIndent[(WrappingIndent["Indent"] = 2)] = "Indent";
          /**
           * DeepIndent => wrapped lines get +2 indentation toward the parent.
           */

          WrappingIndent[(WrappingIndent["DeepIndent"] = 3)] = "DeepIndent";
        })(WrappingIndent || (WrappingIndent = {}));
        /**
         * The kind of animation in which the editor's cursor should be rendered.
         */

        var TextEditorCursorBlinkingStyle;

        (function(TextEditorCursorBlinkingStyle) {
          /**
           * Hidden
           */
          TextEditorCursorBlinkingStyle[
            (TextEditorCursorBlinkingStyle["Hidden"] = 0)
          ] = "Hidden";
          /**
           * Blinking
           */

          TextEditorCursorBlinkingStyle[
            (TextEditorCursorBlinkingStyle["Blink"] = 1)
          ] = "Blink";
          /**
           * Blinking with smooth fading
           */

          TextEditorCursorBlinkingStyle[
            (TextEditorCursorBlinkingStyle["Smooth"] = 2)
          ] = "Smooth";
          /**
           * Blinking with prolonged filled state and smooth fading
           */

          TextEditorCursorBlinkingStyle[
            (TextEditorCursorBlinkingStyle["Phase"] = 3)
          ] = "Phase";
          /**
           * Expand collapse animation on the y axis
           */

          TextEditorCursorBlinkingStyle[
            (TextEditorCursorBlinkingStyle["Expand"] = 4)
          ] = "Expand";
          /**
           * No-Blinking
           */

          TextEditorCursorBlinkingStyle[
            (TextEditorCursorBlinkingStyle["Solid"] = 5)
          ] = "Solid";
        })(
          TextEditorCursorBlinkingStyle || (TextEditorCursorBlinkingStyle = {})
        );
        /**
         * The style in which the editor's cursor should be rendered.
         */

        var TextEditorCursorStyle;

        (function(TextEditorCursorStyle) {
          /**
           * As a vertical line (sitting between two characters).
           */
          TextEditorCursorStyle[(TextEditorCursorStyle["Line"] = 1)] = "Line";
          /**
           * As a block (sitting on top of a character).
           */

          TextEditorCursorStyle[(TextEditorCursorStyle["Block"] = 2)] = "Block";
          /**
           * As a horizontal line (sitting under a character).
           */

          TextEditorCursorStyle[(TextEditorCursorStyle["Underline"] = 3)] =
            "Underline";
          /**
           * As a thin vertical line (sitting between two characters).
           */

          TextEditorCursorStyle[(TextEditorCursorStyle["LineThin"] = 4)] =
            "LineThin";
          /**
           * As an outlined block (sitting on top of a character).
           */

          TextEditorCursorStyle[(TextEditorCursorStyle["BlockOutline"] = 5)] =
            "BlockOutline";
          /**
           * As a thin horizontal line (sitting under a character).
           */

          TextEditorCursorStyle[(TextEditorCursorStyle["UnderlineThin"] = 6)] =
            "UnderlineThin";
        })(TextEditorCursorStyle || (TextEditorCursorStyle = {}));

        var RenderLineNumbersType;

        (function(RenderLineNumbersType) {
          RenderLineNumbersType[(RenderLineNumbersType["Off"] = 0)] = "Off";
          RenderLineNumbersType[(RenderLineNumbersType["On"] = 1)] = "On";
          RenderLineNumbersType[(RenderLineNumbersType["Relative"] = 2)] =
            "Relative";
          RenderLineNumbersType[(RenderLineNumbersType["Interval"] = 3)] =
            "Interval";
          RenderLineNumbersType[(RenderLineNumbersType["Custom"] = 4)] =
            "Custom";
        })(RenderLineNumbersType || (RenderLineNumbersType = {}));
        /**
         * A positioning preference for rendering content widgets.
         */

        var ContentWidgetPositionPreference;

        (function(ContentWidgetPositionPreference) {
          /**
           * Place the content widget exactly at a position
           */
          ContentWidgetPositionPreference[
            (ContentWidgetPositionPreference["EXACT"] = 0)
          ] = "EXACT";
          /**
           * Place the content widget above a position
           */

          ContentWidgetPositionPreference[
            (ContentWidgetPositionPreference["ABOVE"] = 1)
          ] = "ABOVE";
          /**
           * Place the content widget below a position
           */

          ContentWidgetPositionPreference[
            (ContentWidgetPositionPreference["BELOW"] = 2)
          ] = "BELOW";
        })(
          ContentWidgetPositionPreference ||
            (ContentWidgetPositionPreference = {})
        );
        /**
         * A positioning preference for rendering overlay widgets.
         */

        var OverlayWidgetPositionPreference;

        (function(OverlayWidgetPositionPreference) {
          /**
           * Position the overlay widget in the top right corner
           */
          OverlayWidgetPositionPreference[
            (OverlayWidgetPositionPreference["TOP_RIGHT_CORNER"] = 0)
          ] = "TOP_RIGHT_CORNER";
          /**
           * Position the overlay widget in the bottom right corner
           */

          OverlayWidgetPositionPreference[
            (OverlayWidgetPositionPreference["BOTTOM_RIGHT_CORNER"] = 1)
          ] = "BOTTOM_RIGHT_CORNER";
          /**
           * Position the overlay widget in the top center
           */

          OverlayWidgetPositionPreference[
            (OverlayWidgetPositionPreference["TOP_CENTER"] = 2)
          ] = "TOP_CENTER";
        })(
          OverlayWidgetPositionPreference ||
            (OverlayWidgetPositionPreference = {})
        );
        /**
         * Type of hit element with the mouse in the editor.
         */

        var MouseTargetType;

        (function(MouseTargetType) {
          /**
           * Mouse is on top of an unknown element.
           */
          MouseTargetType[(MouseTargetType["UNKNOWN"] = 0)] = "UNKNOWN";
          /**
           * Mouse is on top of the textarea used for input.
           */

          MouseTargetType[(MouseTargetType["TEXTAREA"] = 1)] = "TEXTAREA";
          /**
           * Mouse is on top of the glyph margin
           */

          MouseTargetType[(MouseTargetType["GUTTER_GLYPH_MARGIN"] = 2)] =
            "GUTTER_GLYPH_MARGIN";
          /**
           * Mouse is on top of the line numbers
           */

          MouseTargetType[(MouseTargetType["GUTTER_LINE_NUMBERS"] = 3)] =
            "GUTTER_LINE_NUMBERS";
          /**
           * Mouse is on top of the line decorations
           */

          MouseTargetType[(MouseTargetType["GUTTER_LINE_DECORATIONS"] = 4)] =
            "GUTTER_LINE_DECORATIONS";
          /**
           * Mouse is on top of the whitespace left in the gutter by a view zone.
           */

          MouseTargetType[(MouseTargetType["GUTTER_VIEW_ZONE"] = 5)] =
            "GUTTER_VIEW_ZONE";
          /**
           * Mouse is on top of text in the content.
           */

          MouseTargetType[(MouseTargetType["CONTENT_TEXT"] = 6)] =
            "CONTENT_TEXT";
          /**
           * Mouse is on top of empty space in the content (e.g. after line text or below last line)
           */

          MouseTargetType[(MouseTargetType["CONTENT_EMPTY"] = 7)] =
            "CONTENT_EMPTY";
          /**
           * Mouse is on top of a view zone in the content.
           */

          MouseTargetType[(MouseTargetType["CONTENT_VIEW_ZONE"] = 8)] =
            "CONTENT_VIEW_ZONE";
          /**
           * Mouse is on top of a content widget.
           */

          MouseTargetType[(MouseTargetType["CONTENT_WIDGET"] = 9)] =
            "CONTENT_WIDGET";
          /**
           * Mouse is on top of the decorations overview ruler.
           */

          MouseTargetType[(MouseTargetType["OVERVIEW_RULER"] = 10)] =
            "OVERVIEW_RULER";
          /**
           * Mouse is on top of a scrollbar.
           */

          MouseTargetType[(MouseTargetType["SCROLLBAR"] = 11)] = "SCROLLBAR";
          /**
           * Mouse is on top of an overlay widget.
           */

          MouseTargetType[(MouseTargetType["OVERLAY_WIDGET"] = 12)] =
            "OVERLAY_WIDGET";
          /**
           * Mouse is outside of the editor.
           */

          MouseTargetType[(MouseTargetType["OUTSIDE_EDITOR"] = 13)] =
            "OUTSIDE_EDITOR";
        })(MouseTargetType || (MouseTargetType = {}));
        /**
         * Describes what to do with the indentation when pressing Enter.
         */

        var IndentAction;

        (function(IndentAction) {
          /**
           * Insert new line and copy the previous line's indentation.
           */
          IndentAction[(IndentAction["None"] = 0)] = "None";
          /**
           * Insert new line and indent once (relative to the previous line's indentation).
           */

          IndentAction[(IndentAction["Indent"] = 1)] = "Indent";
          /**
           * Insert two new lines:
           *  - the first one indented which will hold the cursor
           *  - the second one at the same indentation level
           */

          IndentAction[(IndentAction["IndentOutdent"] = 2)] = "IndentOutdent";
          /**
           * Insert new line and outdent once (relative to the previous line's indentation).
           */

          IndentAction[(IndentAction["Outdent"] = 3)] = "Outdent";
        })(IndentAction || (IndentAction = {}));

        var CompletionItemKind;

        (function(CompletionItemKind) {
          CompletionItemKind[(CompletionItemKind["Method"] = 0)] = "Method";
          CompletionItemKind[(CompletionItemKind["Function"] = 1)] = "Function";
          CompletionItemKind[(CompletionItemKind["Constructor"] = 2)] =
            "Constructor";
          CompletionItemKind[(CompletionItemKind["Field"] = 3)] = "Field";
          CompletionItemKind[(CompletionItemKind["Variable"] = 4)] = "Variable";
          CompletionItemKind[(CompletionItemKind["Class"] = 5)] = "Class";
          CompletionItemKind[(CompletionItemKind["Struct"] = 6)] = "Struct";
          CompletionItemKind[(CompletionItemKind["Interface"] = 7)] =
            "Interface";
          CompletionItemKind[(CompletionItemKind["Module"] = 8)] = "Module";
          CompletionItemKind[(CompletionItemKind["Property"] = 9)] = "Property";
          CompletionItemKind[(CompletionItemKind["Event"] = 10)] = "Event";
          CompletionItemKind[(CompletionItemKind["Operator"] = 11)] =
            "Operator";
          CompletionItemKind[(CompletionItemKind["Unit"] = 12)] = "Unit";
          CompletionItemKind[(CompletionItemKind["Value"] = 13)] = "Value";
          CompletionItemKind[(CompletionItemKind["Constant"] = 14)] =
            "Constant";
          CompletionItemKind[(CompletionItemKind["Enum"] = 15)] = "Enum";
          CompletionItemKind[(CompletionItemKind["EnumMember"] = 16)] =
            "EnumMember";
          CompletionItemKind[(CompletionItemKind["Keyword"] = 17)] = "Keyword";
          CompletionItemKind[(CompletionItemKind["Text"] = 18)] = "Text";
          CompletionItemKind[(CompletionItemKind["Color"] = 19)] = "Color";
          CompletionItemKind[(CompletionItemKind["File"] = 20)] = "File";
          CompletionItemKind[(CompletionItemKind["Reference"] = 21)] =
            "Reference";
          CompletionItemKind[(CompletionItemKind["Customcolor"] = 22)] =
            "Customcolor";
          CompletionItemKind[(CompletionItemKind["Folder"] = 23)] = "Folder";
          CompletionItemKind[(CompletionItemKind["TypeParameter"] = 24)] =
            "TypeParameter";
          CompletionItemKind[(CompletionItemKind["Snippet"] = 25)] = "Snippet";
        })(CompletionItemKind || (CompletionItemKind = {}));

        var CompletionItemInsertTextRule;

        (function(CompletionItemInsertTextRule) {
          /**
           * Adjust whitespace/indentation of multiline insert texts to
           * match the current line indentation.
           */
          CompletionItemInsertTextRule[
            (CompletionItemInsertTextRule["KeepWhitespace"] = 1)
          ] = "KeepWhitespace";
          /**
           * `insertText` is a snippet.
           */

          CompletionItemInsertTextRule[
            (CompletionItemInsertTextRule["InsertAsSnippet"] = 4)
          ] = "InsertAsSnippet";
        })(CompletionItemInsertTextRule || (CompletionItemInsertTextRule = {}));
        /**
         * How a suggest provider was triggered.
         */

        var CompletionTriggerKind;

        (function(CompletionTriggerKind) {
          CompletionTriggerKind[(CompletionTriggerKind["Invoke"] = 0)] =
            "Invoke";
          CompletionTriggerKind[
            (CompletionTriggerKind["TriggerCharacter"] = 1)
          ] = "TriggerCharacter";
          CompletionTriggerKind[
            (CompletionTriggerKind["TriggerForIncompleteCompletions"] = 2)
          ] = "TriggerForIncompleteCompletions";
        })(CompletionTriggerKind || (CompletionTriggerKind = {}));

        var SignatureHelpTriggerKind;

        (function(SignatureHelpTriggerKind) {
          SignatureHelpTriggerKind[(SignatureHelpTriggerKind["Invoke"] = 1)] =
            "Invoke";
          SignatureHelpTriggerKind[
            (SignatureHelpTriggerKind["TriggerCharacter"] = 2)
          ] = "TriggerCharacter";
          SignatureHelpTriggerKind[
            (SignatureHelpTriggerKind["ContentChange"] = 3)
          ] = "ContentChange";
        })(SignatureHelpTriggerKind || (SignatureHelpTriggerKind = {}));
        /**
         * A document highlight kind.
         */

        var DocumentHighlightKind;

        (function(DocumentHighlightKind) {
          /**
           * A textual occurrence.
           */
          DocumentHighlightKind[(DocumentHighlightKind["Text"] = 0)] = "Text";
          /**
           * Read-access of a symbol, like reading a variable.
           */

          DocumentHighlightKind[(DocumentHighlightKind["Read"] = 1)] = "Read";
          /**
           * Write-access of a symbol, like writing to a variable.
           */

          DocumentHighlightKind[(DocumentHighlightKind["Write"] = 2)] = "Write";
        })(DocumentHighlightKind || (DocumentHighlightKind = {}));
        /**
         * A symbol kind.
         */

        var SymbolKind;

        (function(SymbolKind) {
          SymbolKind[(SymbolKind["File"] = 0)] = "File";
          SymbolKind[(SymbolKind["Module"] = 1)] = "Module";
          SymbolKind[(SymbolKind["Namespace"] = 2)] = "Namespace";
          SymbolKind[(SymbolKind["Package"] = 3)] = "Package";
          SymbolKind[(SymbolKind["Class"] = 4)] = "Class";
          SymbolKind[(SymbolKind["Method"] = 5)] = "Method";
          SymbolKind[(SymbolKind["Property"] = 6)] = "Property";
          SymbolKind[(SymbolKind["Field"] = 7)] = "Field";
          SymbolKind[(SymbolKind["Constructor"] = 8)] = "Constructor";
          SymbolKind[(SymbolKind["Enum"] = 9)] = "Enum";
          SymbolKind[(SymbolKind["Interface"] = 10)] = "Interface";
          SymbolKind[(SymbolKind["Function"] = 11)] = "Function";
          SymbolKind[(SymbolKind["Variable"] = 12)] = "Variable";
          SymbolKind[(SymbolKind["Constant"] = 13)] = "Constant";
          SymbolKind[(SymbolKind["String"] = 14)] = "String";
          SymbolKind[(SymbolKind["Number"] = 15)] = "Number";
          SymbolKind[(SymbolKind["Boolean"] = 16)] = "Boolean";
          SymbolKind[(SymbolKind["Array"] = 17)] = "Array";
          SymbolKind[(SymbolKind["Object"] = 18)] = "Object";
          SymbolKind[(SymbolKind["Key"] = 19)] = "Key";
          SymbolKind[(SymbolKind["Null"] = 20)] = "Null";
          SymbolKind[(SymbolKind["EnumMember"] = 21)] = "EnumMember";
          SymbolKind[(SymbolKind["Struct"] = 22)] = "Struct";
          SymbolKind[(SymbolKind["Event"] = 23)] = "Event";
          SymbolKind[(SymbolKind["Operator"] = 24)] = "Operator";
          SymbolKind[(SymbolKind["TypeParameter"] = 25)] = "TypeParameter";
        })(SymbolKind || (SymbolKind = {}));

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/editor/common/viewModel/prefixSumComputer.js":
      /*!****************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/viewModel/prefixSumComputer.js ***!
  \****************************************************************************************/
      /*! exports provided: PrefixSumIndexOfResult, PrefixSumComputer, PrefixSumComputerWithCache */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PrefixSumIndexOfResult",
          function() {
            return PrefixSumIndexOfResult;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PrefixSumComputer",
          function() {
            return PrefixSumComputer;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PrefixSumComputerWithCache",
          function() {
            return PrefixSumComputerWithCache;
          }
        );
        /* harmony import */ var _core_uint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../core/uint.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/uint.js"
        );
        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/

        var PrefixSumIndexOfResult =
          /** @class */
          (function() {
            function PrefixSumIndexOfResult(index, remainder) {
              this.index = index;
              this.remainder = remainder;
            }

            return PrefixSumIndexOfResult;
          })();

        var PrefixSumComputer =
          /** @class */
          (function() {
            function PrefixSumComputer(values) {
              this.values = values;
              this.prefixSum = new Uint32Array(values.length);
              this.prefixSumValidIndex = new Int32Array(1);
              this.prefixSumValidIndex[0] = -1;
            }

            PrefixSumComputer.prototype.getCount = function() {
              return this.values.length;
            };

            PrefixSumComputer.prototype.insertValues = function(
              insertIndex,
              insertValues
            ) {
              insertIndex = Object(
                _core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"]
              )(insertIndex);
              var oldValues = this.values;
              var oldPrefixSum = this.prefixSum;
              var insertValuesLen = insertValues.length;

              if (insertValuesLen === 0) {
                return false;
              }

              this.values = new Uint32Array(oldValues.length + insertValuesLen);
              this.values.set(oldValues.subarray(0, insertIndex), 0);
              this.values.set(
                oldValues.subarray(insertIndex),
                insertIndex + insertValuesLen
              );
              this.values.set(insertValues, insertIndex);

              if (insertIndex - 1 < this.prefixSumValidIndex[0]) {
                this.prefixSumValidIndex[0] = insertIndex - 1;
              }

              this.prefixSum = new Uint32Array(this.values.length);

              if (this.prefixSumValidIndex[0] >= 0) {
                this.prefixSum.set(
                  oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1)
                );
              }

              return true;
            };

            PrefixSumComputer.prototype.changeValue = function(index, value) {
              index = Object(
                _core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"]
              )(index);
              value = Object(
                _core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"]
              )(value);

              if (this.values[index] === value) {
                return false;
              }

              this.values[index] = value;

              if (index - 1 < this.prefixSumValidIndex[0]) {
                this.prefixSumValidIndex[0] = index - 1;
              }

              return true;
            };

            PrefixSumComputer.prototype.removeValues = function(
              startIndex,
              cnt
            ) {
              startIndex = Object(
                _core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"]
              )(startIndex);
              cnt = Object(
                _core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"]
              )(cnt);
              var oldValues = this.values;
              var oldPrefixSum = this.prefixSum;

              if (startIndex >= oldValues.length) {
                return false;
              }

              var maxCnt = oldValues.length - startIndex;

              if (cnt >= maxCnt) {
                cnt = maxCnt;
              }

              if (cnt === 0) {
                return false;
              }

              this.values = new Uint32Array(oldValues.length - cnt);
              this.values.set(oldValues.subarray(0, startIndex), 0);
              this.values.set(oldValues.subarray(startIndex + cnt), startIndex);
              this.prefixSum = new Uint32Array(this.values.length);

              if (startIndex - 1 < this.prefixSumValidIndex[0]) {
                this.prefixSumValidIndex[0] = startIndex - 1;
              }

              if (this.prefixSumValidIndex[0] >= 0) {
                this.prefixSum.set(
                  oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1)
                );
              }

              return true;
            };

            PrefixSumComputer.prototype.getTotalValue = function() {
              if (this.values.length === 0) {
                return 0;
              }

              return this._getAccumulatedValue(this.values.length - 1);
            };

            PrefixSumComputer.prototype.getAccumulatedValue = function(index) {
              if (index < 0) {
                return 0;
              }

              index = Object(
                _core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"]
              )(index);
              return this._getAccumulatedValue(index);
            };

            PrefixSumComputer.prototype._getAccumulatedValue = function(index) {
              if (index <= this.prefixSumValidIndex[0]) {
                return this.prefixSum[index];
              }

              var startIndex = this.prefixSumValidIndex[0] + 1;

              if (startIndex === 0) {
                this.prefixSum[0] = this.values[0];
                startIndex++;
              }

              if (index >= this.values.length) {
                index = this.values.length - 1;
              }

              for (var i = startIndex; i <= index; i++) {
                this.prefixSum[i] = this.prefixSum[i - 1] + this.values[i];
              }

              this.prefixSumValidIndex[0] = Math.max(
                this.prefixSumValidIndex[0],
                index
              );
              return this.prefixSum[index];
            };

            PrefixSumComputer.prototype.getIndexOf = function(
              accumulatedValue
            ) {
              accumulatedValue = Math.floor(accumulatedValue); //@perf
              // Compute all sums (to get a fully valid prefixSum)

              this.getTotalValue();
              var low = 0;
              var high = this.values.length - 1;
              var mid = 0;
              var midStop = 0;
              var midStart = 0;

              while (low <= high) {
                mid = (low + (high - low) / 2) | 0;
                midStop = this.prefixSum[mid];
                midStart = midStop - this.values[mid];

                if (accumulatedValue < midStart) {
                  high = mid - 1;
                } else if (accumulatedValue >= midStop) {
                  low = mid + 1;
                } else {
                  break;
                }
              }

              return new PrefixSumIndexOfResult(
                mid,
                accumulatedValue - midStart
              );
            };

            return PrefixSumComputer;
          })();

        var PrefixSumComputerWithCache =
          /** @class */
          (function() {
            function PrefixSumComputerWithCache(values) {
              this._cacheAccumulatedValueStart = 0;
              this._cache = null;
              this._actual = new PrefixSumComputer(values);

              this._bustCache();
            }

            PrefixSumComputerWithCache.prototype._bustCache = function() {
              this._cacheAccumulatedValueStart = 0;
              this._cache = null;
            };

            PrefixSumComputerWithCache.prototype.insertValues = function(
              insertIndex,
              insertValues
            ) {
              if (this._actual.insertValues(insertIndex, insertValues)) {
                this._bustCache();
              }
            };

            PrefixSumComputerWithCache.prototype.changeValue = function(
              index,
              value
            ) {
              if (this._actual.changeValue(index, value)) {
                this._bustCache();
              }
            };

            PrefixSumComputerWithCache.prototype.removeValues = function(
              startIndex,
              cnt
            ) {
              if (this._actual.removeValues(startIndex, cnt)) {
                this._bustCache();
              }
            };

            PrefixSumComputerWithCache.prototype.getTotalValue = function() {
              return this._actual.getTotalValue();
            };

            PrefixSumComputerWithCache.prototype.getAccumulatedValue = function(
              index
            ) {
              return this._actual.getAccumulatedValue(index);
            };

            PrefixSumComputerWithCache.prototype.getIndexOf = function(
              accumulatedValue
            ) {
              accumulatedValue = Math.floor(accumulatedValue); //@perf

              if (this._cache !== null) {
                var cacheIndex =
                  accumulatedValue - this._cacheAccumulatedValueStart;

                if (cacheIndex >= 0 && cacheIndex < this._cache.length) {
                  // Cache hit!
                  return this._cache[cacheIndex];
                }
              } // Cache miss!

              return this._actual.getIndexOf(accumulatedValue);
            };
            /**
             * Gives a hint that a lot of requests are about to come in for these accumulated values.
             */

            PrefixSumComputerWithCache.prototype.warmUpCache = function(
              accumulatedValueStart,
              accumulatedValueEnd
            ) {
              var newCache = [];

              for (
                var accumulatedValue = accumulatedValueStart;
                accumulatedValue <= accumulatedValueEnd;
                accumulatedValue++
              ) {
                newCache[
                  accumulatedValue - accumulatedValueStart
                ] = this.getIndexOf(accumulatedValue);
              }

              this._cache = newCache;
              this._cacheAccumulatedValueStart = accumulatedValueStart;
            };

            return PrefixSumComputerWithCache;
          })();

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/editor/editor.worker.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/editor.worker.js ***!
  \*******************************************************************/
      /*! exports provided: initialize */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "initialize",
          function() {
            return initialize;
          }
        );
        /* harmony import */ var _base_common_worker_simpleWorker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../base/common/worker/simpleWorker.js */ "./node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker.js"
        );
        /* harmony import */ var _common_services_editorSimpleWorker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./common/services/editorSimpleWorker.js */ "./node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js"
        );
        /*---------------------------------------------------------------------------------------------
         *  Copyright (c) Microsoft Corporation. All rights reserved.
         *  Licensed under the MIT License. See License.txt in the project root for license information.
         *--------------------------------------------------------------------------------------------*/

        var initialized = false;
        function initialize(foreignModule) {
          if (initialized) {
            return;
          }

          initialized = true;
          var editorWorker = new _common_services_editorSimpleWorker_js__WEBPACK_IMPORTED_MODULE_1__[
            "EditorSimpleWorkerImpl"
          ](foreignModule);
          var simpleWorker = new _base_common_worker_simpleWorker_js__WEBPACK_IMPORTED_MODULE_0__[
            "SimpleWorkerServer"
          ](function(msg) {
            self.postMessage(msg);
          }, editorWorker);

          self.onmessage = function(e) {
            simpleWorker.onmessage(e.data);
          };
        }

        self.onmessage = function(e) {
          // Ignore first message in this case and initialize if not yet initialized
          if (!initialized) {
            initialize(null);
          }
        };

        /***/
      },

    /***/ "./node_modules/next/node_modules/webpack/buildin/amd-options.js":
      /*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        /* WEBPACK VAR INJECTION */ (function(__webpack_amd_options__) {
          /* globals __webpack_amd_options__ */
          module.exports = __webpack_amd_options__;

          /* WEBPACK VAR INJECTION */
        }.call(this, {}));

        /***/
      }

    /******/
  }
);
//# sourceMappingURL=editor.worker.js.map
