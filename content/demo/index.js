/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/array/is-array */ "../node_modules/core-js-pure/stable/array/is-array.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/concat */ "../node_modules/core-js-pure/stable/instance/concat.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/every.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/instance/every.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/every */ "../node_modules/core-js-pure/stable/instance/every.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/filter */ "../node_modules/core-js-pure/stable/instance/filter.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/flat-map.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/instance/flat-map.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/flat-map */ "../node_modules/core-js-pure/stable/instance/flat-map.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/for-each */ "../node_modules/core-js-pure/stable/instance/for-each.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/index-of */ "../node_modules/core-js-pure/stable/instance/index-of.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/map */ "../node_modules/core-js-pure/stable/instance/map.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/slice */ "../node_modules/core-js-pure/stable/instance/slice.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/some.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/instance/some.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/some */ "../node_modules/core-js-pure/stable/instance/some.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/sort */ "../node_modules/core-js-pure/stable/instance/sort.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/json/stringify */ "../node_modules/core-js-pure/stable/json/stringify.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/object/keys */ "../node_modules/core-js-pure/stable/object/keys.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/promise.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/promise.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/promise */ "../node_modules/core-js-pure/stable/promise/index.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/symbol/async-iterator.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/symbol/async-iterator.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/symbol/async-iterator */ "../node_modules/core-js-pure/stable/symbol/async-iterator.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/url.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/url.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/url */ "../node_modules/core-js-pure/stable/url/index.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/array/from.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/array/from.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/array/from */ "../node_modules/core-js-pure/features/array/from.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/array/is-array.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/array/is-array.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/array/is-array */ "../node_modules/core-js-pure/features/array/is-array.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/get-iterator-method */ "../node_modules/core-js-pure/features/get-iterator-method.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/get-iterator.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/get-iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/get-iterator */ "../node_modules/core-js-pure/features/get-iterator.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/is-iterable.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/is-iterable.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/is-iterable */ "../node_modules/core-js-pure/features/is-iterable.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/promise.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/promise.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/promise */ "../node_modules/core-js-pure/features/promise/index.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/symbol.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/symbol.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/symbol */ "../node_modules/core-js-pure/features/symbol/index.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/symbol/async-iterator.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/symbol/async-iterator.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/symbol/async-iterator */ "../node_modules/core-js-pure/features/symbol/async-iterator.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/symbol/iterator */ "../node_modules/core-js-pure/features/symbol/iterator.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/AsyncGenerator.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/AsyncGenerator.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AsyncGenerator; });
/* harmony import */ var _core_js_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/async-iterator */ "../node_modules/@babel/runtime-corejs3/core-js/symbol/async-iterator.js");
/* harmony import */ var _core_js_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "../node_modules/@babel/runtime-corejs3/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/promise */ "../node_modules/@babel/runtime-corejs3/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AwaitValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AwaitValue */ "../node_modules/@babel/runtime-corejs3/helpers/esm/AwaitValue.js");




function AsyncGenerator(gen) {
  var front, back;

  function send(key, arg) {
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
      var request = {
        key: key,
        arg: arg,
        resolve: resolve,
        reject: reject,
        next: null
      };

      if (back) {
        back = back.next = request;
      } else {
        front = back = request;
        resume(key, arg);
      }
    });
  }

  function resume(key, arg) {
    try {
      var result = gen[key](arg);
      var value = result.value;
      var wrappedAwait = value instanceof _AwaitValue__WEBPACK_IMPORTED_MODULE_3__["default"];

      _core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) {
        if (wrappedAwait) {
          resume(key === "return" ? "return" : "next", arg);
          return;
        }

        settle(result.done ? "return" : "normal", arg);
      }, function (err) {
        resume("throw", err);
      });
    } catch (err) {
      settle("throw", err);
    }
  }

  function settle(type, value) {
    switch (type) {
      case "return":
        front.resolve({
          value: value,
          done: true
        });
        break;

      case "throw":
        front.reject(value);
        break;

      default:
        front.resolve({
          value: value,
          done: false
        });
        break;
    }

    front = front.next;

    if (front) {
      resume(front.key, front.arg);
    } else {
      back = null;
    }
  }

  this._invoke = send;

  if (typeof gen["return"] !== "function") {
    this["return"] = undefined;
  }
}

if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _core_js_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) {
  AsyncGenerator.prototype[_core_js_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default.a] = function () {
    return this;
  };
}

AsyncGenerator.prototype.next = function (arg) {
  return this._invoke("next", arg);
};

AsyncGenerator.prototype["throw"] = function (arg) {
  return this._invoke("throw", arg);
};

AsyncGenerator.prototype["return"] = function (arg) {
  return this._invoke("return", arg);
};

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/AwaitValue.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/AwaitValue.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AwaitValue; });
function _AwaitValue(value) {
  this.wrapped = value;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/arrayWithHoles.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/arrayWithHoles.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "../node_modules/@babel/runtime-corejs3/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/arrayWithoutHoles.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/arrayWithoutHoles.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "../node_modules/@babel/runtime-corejs3/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/asyncGeneratorDelegate.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/asyncGeneratorDelegate.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncGeneratorDelegate; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "../node_modules/@babel/runtime-corejs3/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/promise */ "../node_modules/@babel/runtime-corejs3/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);



function _asyncGeneratorDelegate(inner, awaitWrap) {
  var iter = {},
      waiting = false;

  function pump(key, value) {
    waiting = true;
    value = new _core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve) {
      resolve(inner[key](value));
    });
    return {
      done: false,
      value: awaitWrap(value)
    };
  }

  ;

  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) {
    iter[_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a] = function () {
      return this;
    };
  }

  iter.next = function (value) {
    if (waiting) {
      waiting = false;
      return value;
    }

    return pump("next", value);
  };

  if (typeof inner["throw"] === "function") {
    iter["throw"] = function (value) {
      if (waiting) {
        waiting = false;
        throw value;
      }

      return pump("throw", value);
    };
  }

  if (typeof inner["return"] === "function") {
    iter["return"] = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }

      return pump("return", value);
    };
  }

  return iter;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/asyncIterator.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/asyncIterator.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncIterator; });
/* harmony import */ var _core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator-method */ "../node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js");
/* harmony import */ var _core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/symbol/async-iterator */ "../node_modules/@babel/runtime-corejs3/core-js/symbol/async-iterator.js");
/* harmony import */ var _core_js_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core-js/symbol */ "../node_modules/@babel/runtime-corejs3/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_3__);




function _asyncIterator(iterable) {
  var method;

  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_3___default.a !== "undefined") {
    if (_core_js_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2___default.a) {
      method = iterable[_core_js_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2___default.a];
      if (method != null) return method.call(iterable);
    }

    if (_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_1___default.a) {
      method = _core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_0___default()(iterable);
      if (method != null) return method.call(iterable);
    }
  }

  throw new TypeError("Object is not async iterable");
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "../node_modules/@babel/runtime-corejs3/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _awaitAsyncGenerator; });
/* harmony import */ var _AwaitValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AwaitValue */ "../node_modules/@babel/runtime-corejs3/helpers/esm/AwaitValue.js");

function _awaitAsyncGenerator(value) {
  return new _AwaitValue__WEBPACK_IMPORTED_MODULE_0__["default"](value);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/iterableToArray.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/iterableToArray.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "../node_modules/@babel/runtime-corejs3/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "../node_modules/@babel/runtime-corejs3/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/iterableToArrayLimit.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/iterableToArrayLimit.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "../node_modules/@babel/runtime-corejs3/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "../node_modules/@babel/runtime-corejs3/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArrayLimit(arr, i) {
  if (!(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(arr)) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/nonIterableRest.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/nonIterableRest.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/nonIterableSpread.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/nonIterableSpread.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "../node_modules/@babel/runtime-corejs3/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "../node_modules/@babel/runtime-corejs3/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "../node_modules/@babel/runtime-corejs3/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/toConsumableArray.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/toConsumableArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "../node_modules/@babel/runtime-corejs3/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "../node_modules/@babel/runtime-corejs3/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "../node_modules/@babel/runtime-corejs3/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/typeof.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/typeof.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "../node_modules/@babel/runtime-corejs3/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _wrapAsyncGenerator; });
/* harmony import */ var _AsyncGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncGenerator */ "../node_modules/@babel/runtime-corejs3/helpers/esm/AsyncGenerator.js");

function _wrapAsyncGenerator(fn) {
  return function () {
    return new _AsyncGenerator__WEBPACK_IMPORTED_MODULE_0__["default"](fn.apply(this, arguments));
  };
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/regenerator/index.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/regenerator/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "../node_modules/ancestors/index.js":
/*!******************************************!*\
  !*** ../node_modules/ancestors/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = parents

function parents(node, filter) {
  var out = []

  filter = filter || noop

  do {
    out.push(node)
    node = node.parentNode
  } while(node && node.tagName && filter(node))

  return out.slice(1)
}

function noop(n) {
  return true
}


/***/ }),

/***/ "../node_modules/cartesian/index.js":
/*!******************************************!*\
  !*** ../node_modules/cartesian/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(/*! xtend/immutable */ "../node_modules/xtend/immutable.js");

// Public API
module.exports = cartesian;

/**
 * Creates cartesian product of the provided properties
 *
 * @param   {object|array} list - list of (array) properties or array of arrays
 * @returns {array} all the combinations of the properties
 */
function cartesian(list)
{
  var last, init, keys, product = [];

  if (Array.isArray(list))
  {
    init = [];
    last = list.length - 1;
  }
  else if (typeof list == 'object' && list !== null)
  {
    init = {};
    keys = Object.keys(list);
    last = keys.length - 1;
  }
  else
  {
    throw new TypeError('Expecting an Array or an Object, but `' + (list === null ? 'null' : typeof list) + '` provided.');
  }

  function add(row, i)
  {
    var j, k, r;

    k = keys ? keys[i] : i;

    // either array or not, not expecting objects here
    Array.isArray(list[k]) || (typeof list[k] == 'undefined' ? list[k] = [] : list[k] = [list[k]]);

    for (j=0; j < list[k].length; j++)
    {
      r = clone(row);
      store(r, list[k][j], k);

      if (i >= last)
      {
        product.push(r);
      }
      else
      {
        add(r, i + 1);
      }
    }
  }

  add(init, 0);

  return product;
}

/**
 * Clones (shallow copy) provided object or array
 *
 * @param   {object|array} obj - object or array to clone
 * @returns {object|array} - shallow copy of the provided object or array
 */
function clone(obj)
{
  return Array.isArray(obj) ? [].concat(obj) : extend(obj);
}

/**
 * Stores provided element in the provided object or array
 *
 * @param   {object|array} obj - object or array to add to
 * @param   {mixed} elem - element to add
 * @param   {string|number} key - object's property key to add to
 * @returns {void}
 */
function store(obj, elem, key)
{
  Array.isArray(obj) ? obj.push(elem) : (obj[key] = elem);
}


/***/ }),

/***/ "../node_modules/core-js-pure/es/array/from.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/from.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.string.iterator */ "../node_modules/core-js-pure/modules/es.string.iterator.js");
__webpack_require__(/*! ../../modules/es.array.from */ "../node_modules/core-js-pure/modules/es.array.from.js");
var path = __webpack_require__(/*! ../../internals/path */ "../node_modules/core-js-pure/internals/path.js");

module.exports = path.Array.from;


/***/ }),

/***/ "../node_modules/core-js-pure/es/array/is-array.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/is-array.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.array.is-array */ "../node_modules/core-js-pure/modules/es.array.is-array.js");
var path = __webpack_require__(/*! ../../internals/path */ "../node_modules/core-js-pure/internals/path.js");

module.exports = path.Array.isArray;


/***/ }),

/***/ "../node_modules/core-js-pure/es/array/virtual/concat.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/concat.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.concat */ "../node_modules/core-js-pure/modules/es.array.concat.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "../node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('Array').concat;


/***/ }),

/***/ "../node_modules/core-js-pure/es/array/virtual/every.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/every.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.every */ "../node_modules/core-js-pure/modules/es.array.every.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "../node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('Array').every;


/***/ }),

/***/ "../node_modules/core-js-pure/es/array/virtual/filter.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/filter.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.filter */ "../node_modules/core-js-pure/modules/es.array.filter.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "../node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('Array').filter;


/***/ }),

/***/ "../node_modules/core-js-pure/es/array/virtual/flat-map.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/flat-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.flat-map */ "../node_modules/core-js-pure/modules/es.array.flat-map.js");
__webpack_require__(/*! ../../../modules/es.array.unscopables.flat-map */ "../node_modules/core-js-pure/modules/es.array.unscopables.flat-map.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "../node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('Array').flatMap;


/***/ }),

/***/ "../node_modules/core-js-pure/es/array/virtual/for-each.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/for-each.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.for-each */ "../node_modules/core-js-pure/modules/es.array.for-each.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "../node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('Array').forEach;


/***/ }),

/***/ "../node_modules/core-js-pure/es/array/virtual/index-of.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.index-of */ "../node_modules/core-js-pure/modules/es.array.index-of.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "../node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('Array').indexOf;


/***/ }),

/***/ "../node_modules/core-js-pure/es/array/virtual/map.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.map */ "../node_modules/core-js-pure/modules/es.array.map.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "../node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('Array').map;


/***/ }),

/***/ "../node_modules/core-js-pure/es/array/virtual/slice.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/slice.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.slice */ "../node_modules/core-js-pure/modules/es.array.slice.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "../node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('Array').slice;


/***/ }),

/***/ "../node_modules/core-js-pure/es/array/virtual/some.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/some.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.some */ "../node_modules/core-js-pure/modules/es.array.some.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "../node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('Array').some;


/***/ }),

/***/ "../node_modules/core-js-pure/es/array/virtual/sort.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/sort.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.sort */ "../node_modules/core-js-pure/modules/es.array.sort.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "../node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('Array').sort;


/***/ }),

/***/ "../node_modules/core-js-pure/es/instance/concat.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/concat.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var concat = __webpack_require__(/*! ../array/virtual/concat */ "../node_modules/core-js-pure/es/array/virtual/concat.js");

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.concat;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.concat) ? concat : own;
};


/***/ }),

/***/ "../node_modules/core-js-pure/es/instance/every.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/every.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var every = __webpack_require__(/*! ../array/virtual/every */ "../node_modules/core-js-pure/es/array/virtual/every.js");

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.every;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.every) ? every : own;
};


/***/ }),

/***/ "../node_modules/core-js-pure/es/instance/filter.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/filter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var filter = __webpack_require__(/*! ../array/virtual/filter */ "../node_modules/core-js-pure/es/array/virtual/filter.js");

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.filter;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.filter) ? filter : own;
};


/***/ }),

/***/ "../node_modules/core-js-pure/es/instance/flat-map.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/flat-map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var flatMap = __webpack_require__(/*! ../array/virtual/flat-map */ "../node_modules/core-js-pure/es/array/virtual/flat-map.js");

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.flatMap;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.flatMap) ? flatMap : own;
};


/***/ }),

/***/ "../node_modules/core-js-pure/es/instance/index-of.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/index-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var indexOf = __webpack_require__(/*! ../array/virtual/index-of */ "../node_modules/core-js-pure/es/array/virtual/index-of.js");

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.indexOf;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.indexOf) ? indexOf : own;
};


/***/ }),

/***/ "../node_modules/core-js-pure/es/instance/map.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/map.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = __webpack_require__(/*! ../array/virtual/map */ "../node_modules/core-js-pure/es/array/virtual/map.js");

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.map;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.map) ? map : own;
};


/***/ }),

/***/ "../node_modules/core-js-pure/es/instance/slice.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/slice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var slice = __webpack_require__(/*! ../array/virtual/slice */ "../node_modules/core-js-pure/es/array/virtual/slice.js");

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.slice;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.slice) ? slice : own;
};


/***/ }),

/***/ "../node_modules/core-js-pure/es/instance/some.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/some.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var some = __webpack_require__(/*! ../array/virtual/some */ "../node_modules/core-js-pure/es/array/virtual/some.js");

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.some;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.some) ? some : own;
};


/***/ }),

/***/ "../node_modules/core-js-pure/es/instance/sort.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/sort.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var sort = __webpack_require__(/*! ../array/virtual/sort */ "../node_modules/core-js-pure/es/array/virtual/sort.js");

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.sort;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.sort) ? sort : own;
};


/***/ }),

/***/ "../node_modules/core-js-pure/es/json/stringify.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/es/json/stringify.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../internals/path */ "../node_modules/core-js-pure/internals/path.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });

module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "../node_modules/core-js-pure/es/object/keys.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js-pure/es/object/keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.keys */ "../node_modules/core-js-pure/modules/es.object.keys.js");
var path = __webpack_require__(/*! ../../internals/path */ "../node_modules/core-js-pure/internals/path.js");

module.exports = path.Object.keys;


/***/ }),

/***/ "../node_modules/core-js-pure/es/promise/index.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/es/promise/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.to-string */ "../node_modules/core-js-pure/modules/es.object.to-string.js");
__webpack_require__(/*! ../../modules/es.string.iterator */ "../node_modules/core-js-pure/modules/es.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ "../node_modules/core-js-pure/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! ../../modules/es.promise */ "../node_modules/core-js-pure/modules/es.promise.js");
__webpack_require__(/*! ../../modules/es.promise.all-settled */ "../node_modules/core-js-pure/modules/es.promise.all-settled.js");
__webpack_require__(/*! ../../modules/es.promise.finally */ "../node_modules/core-js-pure/modules/es.promise.finally.js");
var path = __webpack_require__(/*! ../../internals/path */ "../node_modules/core-js-pure/internals/path.js");

module.exports = path.Promise;


/***/ }),

/***/ "../node_modules/core-js-pure/es/symbol/async-iterator.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/es/symbol/async-iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.symbol.async-iterator */ "../node_modules/core-js-pure/modules/es.symbol.async-iterator.js");
var WrappedWellKnownSymbolModule = __webpack_require__(/*! ../../internals/wrapped-well-known-symbol */ "../node_modules/core-js-pure/internals/wrapped-well-known-symbol.js");

module.exports = WrappedWellKnownSymbolModule.f('asyncIterator');


/***/ }),

/***/ "../node_modules/core-js-pure/es/symbol/index.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js-pure/es/symbol/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.array.concat */ "../node_modules/core-js-pure/modules/es.array.concat.js");
__webpack_require__(/*! ../../modules/es.object.to-string */ "../node_modules/core-js-pure/modules/es.object.to-string.js");
__webpack_require__(/*! ../../modules/es.symbol */ "../node_modules/core-js-pure/modules/es.symbol.js");
__webpack_require__(/*! ../../modules/es.symbol.async-iterator */ "../node_modules/core-js-pure/modules/es.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es.symbol.description */ "../node_modules/core-js-pure/modules/es.symbol.description.js");
__webpack_require__(/*! ../../modules/es.symbol.has-instance */ "../node_modules/core-js-pure/modules/es.symbol.has-instance.js");
__webpack_require__(/*! ../../modules/es.symbol.is-concat-spreadable */ "../node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js");
__webpack_require__(/*! ../../modules/es.symbol.iterator */ "../node_modules/core-js-pure/modules/es.symbol.iterator.js");
__webpack_require__(/*! ../../modules/es.symbol.match */ "../node_modules/core-js-pure/modules/es.symbol.match.js");
__webpack_require__(/*! ../../modules/es.symbol.match-all */ "../node_modules/core-js-pure/modules/es.symbol.match-all.js");
__webpack_require__(/*! ../../modules/es.symbol.replace */ "../node_modules/core-js-pure/modules/es.symbol.replace.js");
__webpack_require__(/*! ../../modules/es.symbol.search */ "../node_modules/core-js-pure/modules/es.symbol.search.js");
__webpack_require__(/*! ../../modules/es.symbol.species */ "../node_modules/core-js-pure/modules/es.symbol.species.js");
__webpack_require__(/*! ../../modules/es.symbol.split */ "../node_modules/core-js-pure/modules/es.symbol.split.js");
__webpack_require__(/*! ../../modules/es.symbol.to-primitive */ "../node_modules/core-js-pure/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! ../../modules/es.symbol.to-string-tag */ "../node_modules/core-js-pure/modules/es.symbol.to-string-tag.js");
__webpack_require__(/*! ../../modules/es.symbol.unscopables */ "../node_modules/core-js-pure/modules/es.symbol.unscopables.js");
__webpack_require__(/*! ../../modules/es.math.to-string-tag */ "../node_modules/core-js-pure/modules/es.math.to-string-tag.js");
__webpack_require__(/*! ../../modules/es.json.to-string-tag */ "../node_modules/core-js-pure/modules/es.json.to-string-tag.js");
var path = __webpack_require__(/*! ../../internals/path */ "../node_modules/core-js-pure/internals/path.js");

module.exports = path.Symbol;


/***/ }),

/***/ "../node_modules/core-js-pure/es/symbol/iterator.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/es/symbol/iterator.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.symbol.iterator */ "../node_modules/core-js-pure/modules/es.symbol.iterator.js");
__webpack_require__(/*! ../../modules/es.string.iterator */ "../node_modules/core-js-pure/modules/es.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ "../node_modules/core-js-pure/modules/web.dom-collections.iterator.js");
var WrappedWellKnownSymbolModule = __webpack_require__(/*! ../../internals/wrapped-well-known-symbol */ "../node_modules/core-js-pure/internals/wrapped-well-known-symbol.js");

module.exports = WrappedWellKnownSymbolModule.f('iterator');


/***/ }),

/***/ "../node_modules/core-js-pure/features/array/from.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/features/array/from.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/array/from */ "../node_modules/core-js-pure/es/array/from.js");


/***/ }),

/***/ "../node_modules/core-js-pure/features/array/is-array.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/features/array/is-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/array/is-array */ "../node_modules/core-js-pure/es/array/is-array.js");


/***/ }),

/***/ "../node_modules/core-js-pure/features/get-iterator-method.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js-pure/features/get-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom-collections.iterator */ "../node_modules/core-js-pure/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! ../modules/es.string.iterator */ "../node_modules/core-js-pure/modules/es.string.iterator.js");

module.exports = __webpack_require__(/*! ../internals/get-iterator-method */ "../node_modules/core-js-pure/internals/get-iterator-method.js");


/***/ }),

/***/ "../node_modules/core-js-pure/features/get-iterator.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/features/get-iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom-collections.iterator */ "../node_modules/core-js-pure/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! ../modules/es.string.iterator */ "../node_modules/core-js-pure/modules/es.string.iterator.js");

module.exports = __webpack_require__(/*! ../internals/get-iterator */ "../node_modules/core-js-pure/internals/get-iterator.js");


/***/ }),

/***/ "../node_modules/core-js-pure/features/is-iterable.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/features/is-iterable.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom-collections.iterator */ "../node_modules/core-js-pure/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! ../modules/es.string.iterator */ "../node_modules/core-js-pure/modules/es.string.iterator.js");

module.exports = __webpack_require__(/*! ../internals/is-iterable */ "../node_modules/core-js-pure/internals/is-iterable.js");


/***/ }),

/***/ "../node_modules/core-js-pure/features/promise/index.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/features/promise/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/promise */ "../node_modules/core-js-pure/es/promise/index.js");

__webpack_require__(/*! ../../modules/esnext.aggregate-error */ "../node_modules/core-js-pure/modules/esnext.aggregate-error.js");
// TODO: Remove from `core-js@4`
__webpack_require__(/*! ../../modules/esnext.promise.all-settled */ "../node_modules/core-js-pure/modules/esnext.promise.all-settled.js");
__webpack_require__(/*! ../../modules/esnext.promise.try */ "../node_modules/core-js-pure/modules/esnext.promise.try.js");
__webpack_require__(/*! ../../modules/esnext.promise.any */ "../node_modules/core-js-pure/modules/esnext.promise.any.js");


/***/ }),

/***/ "../node_modules/core-js-pure/features/symbol/async-iterator.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js-pure/features/symbol/async-iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/symbol/async-iterator */ "../node_modules/core-js-pure/es/symbol/async-iterator.js");


/***/ }),

/***/ "../node_modules/core-js-pure/features/symbol/index.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/features/symbol/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/symbol */ "../node_modules/core-js-pure/es/symbol/index.js");

__webpack_require__(/*! ../../modules/esnext.symbol.async-dispose */ "../node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js");
__webpack_require__(/*! ../../modules/esnext.symbol.dispose */ "../node_modules/core-js-pure/modules/esnext.symbol.dispose.js");
__webpack_require__(/*! ../../modules/esnext.symbol.observable */ "../node_modules/core-js-pure/modules/esnext.symbol.observable.js");
__webpack_require__(/*! ../../modules/esnext.symbol.pattern-match */ "../node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js");
__webpack_require__(/*! ../../modules/esnext.symbol.replace-all */ "../node_modules/core-js-pure/modules/esnext.symbol.replace-all.js");


/***/ }),

/***/ "../node_modules/core-js-pure/features/symbol/iterator.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/features/symbol/iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/symbol/iterator */ "../node_modules/core-js-pure/es/symbol/iterator.js");


/***/ }),

/***/ "../node_modules/core-js-pure/internals/a-function.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/a-function.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/a-possible-prototype.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/a-possible-prototype.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js-pure/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/add-to-unscopables.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/add-to-unscopables.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "../node_modules/core-js-pure/internals/an-instance.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/an-instance.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/an-object.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/an-object.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js-pure/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/array-for-each.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/array-for-each.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "../node_modules/core-js-pure/internals/array-iteration.js").forEach;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "../node_modules/core-js-pure/internals/sloppy-array-method.js");

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "../node_modules/core-js-pure/internals/array-from.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/array-from.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/bind-context */ "../node_modules/core-js-pure/internals/bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js-pure/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "../node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "../node_modules/core-js-pure/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js-pure/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "../node_modules/core-js-pure/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "../node_modules/core-js-pure/internals/get-iterator-method.js");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var index = 0;
  var iteratorMethod = getIteratorMethod(O);
  var length, result, step, iterator, next;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      createProperty(result, index, mapping
        ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
        : step.value
      );
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/array-includes.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/array-includes.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js-pure/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js-pure/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../node_modules/core-js-pure/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/array-iteration.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/array-iteration.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/bind-context */ "../node_modules/core-js-pure/internals/bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../node_modules/core-js-pure/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js-pure/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js-pure/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "../node_modules/core-js-pure/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/array-method-has-species-support.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/array-method-has-species-support.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js-pure/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js-pure/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ "../node_modules/core-js-pure/internals/v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/array-species-create.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/array-species-create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js-pure/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "../node_modules/core-js-pure/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js-pure/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/bind-context.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/bind-context.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "../node_modules/core-js-pure/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js-pure/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/check-correctness-of-iteration.js":
/*!********************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/check-correctness-of-iteration.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js-pure/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/classof-raw.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/classof-raw.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/classof.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/classof.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js-pure/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js-pure/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/correct-prototype-getter.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/correct-prototype-getter.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js-pure/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "../node_modules/core-js-pure/internals/create-iterator-constructor.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/create-iterator-constructor.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "../node_modules/core-js-pure/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "../node_modules/core-js-pure/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js-pure/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../node_modules/core-js-pure/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/core-js-pure/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/create-non-enumerable-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/create-non-enumerable-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js-pure/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js-pure/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js-pure/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/create-property-descriptor.js":
/*!****************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/create-property-descriptor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/create-property.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/create-property.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../node_modules/core-js-pure/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js-pure/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js-pure/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/define-iterator.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/define-iterator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "../node_modules/core-js-pure/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../node_modules/core-js-pure/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../node_modules/core-js-pure/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../node_modules/core-js-pure/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js-pure/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js-pure/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js-pure/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/core-js-pure/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "../node_modules/core-js-pure/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/define-well-known-symbol.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/define-well-known-symbol.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "../node_modules/core-js-pure/internals/path.js");
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js-pure/internals/has.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/wrapped-well-known-symbol */ "../node_modules/core-js-pure/internals/wrapped-well-known-symbol.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js-pure/internals/object-define-property.js").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/descriptors.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/descriptors.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js-pure/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../node_modules/core-js-pure/internals/document-create-element.js":
/*!*************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/document-create-element.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js-pure/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js-pure/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/dom-iterables.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/dom-iterables.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/entry-virtual.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/entry-virtual.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "../node_modules/core-js-pure/internals/path.js");

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/enum-bug-keys.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/enum-bug-keys.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "../node_modules/core-js-pure/internals/export.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/export.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js-pure/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js").f;
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../node_modules/core-js-pure/internals/is-forced.js");
var path = __webpack_require__(/*! ../internals/path */ "../node_modules/core-js-pure/internals/path.js");
var bind = __webpack_require__(/*! ../internals/bind-context */ "../node_modules/core-js-pure/internals/bind-context.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js-pure/internals/has.js");

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return NativeConstructor.apply(this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/fails.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js-pure/internals/fails.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/flatten-into-array.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/flatten-into-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__(/*! ../internals/is-array */ "../node_modules/core-js-pure/internals/is-array.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js-pure/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/bind-context */ "../node_modules/core-js-pure/internals/bind-context.js");

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
  var element;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ "../node_modules/core-js-pure/internals/function-to-string.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/function-to-string.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "../node_modules/core-js-pure/internals/shared.js");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "../node_modules/core-js-pure/internals/get-built-in.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/get-built-in.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "../node_modules/core-js-pure/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js-pure/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/get-iterator-method.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/get-iterator-method.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "../node_modules/core-js-pure/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/core-js-pure/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js-pure/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/get-iterator.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/get-iterator.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js-pure/internals/an-object.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "../node_modules/core-js-pure/internals/get-iterator-method.js");

module.exports = function (it) {
  var iteratorMethod = getIteratorMethod(it);
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  } return anObject(iteratorMethod.call(it));
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/global.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/global.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/core-js-pure/internals/has.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js-pure/internals/has.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/hidden-keys.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/hidden-keys.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/host-report-errors.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/host-report-errors.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js-pure/internals/global.js");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/html.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js-pure/internals/html.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js-pure/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "../node_modules/core-js-pure/internals/ie8-dom-define.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/ie8-dom-define.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js-pure/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js-pure/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../node_modules/core-js-pure/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "../node_modules/core-js-pure/internals/indexed-object.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/indexed-object.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js-pure/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js-pure/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "../node_modules/core-js-pure/internals/internal-state.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/internal-state.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "../node_modules/core-js-pure/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js-pure/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js-pure/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js-pure/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../node_modules/core-js-pure/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js-pure/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/is-array-iterator-method.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/is-array-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js-pure/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/core-js-pure/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/is-array.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/is-array.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js-pure/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/is-forced.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/is-forced.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js-pure/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "../node_modules/core-js-pure/internals/is-iterable.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/is-iterable.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "../node_modules/core-js-pure/internals/classof.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js-pure/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/core-js-pure/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/is-object.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/is-object.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/is-pure.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/is-pure.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "../node_modules/core-js-pure/internals/iterate.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/iterate.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js-pure/internals/an-object.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "../node_modules/core-js-pure/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js-pure/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/bind-context */ "../node_modules/core-js-pure/internals/bind-context.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "../node_modules/core-js-pure/internals/get-iterator-method.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "../node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/iterators-core.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/iterators-core.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../node_modules/core-js-pure/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js-pure/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js-pure/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js-pure/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/iterators.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/iterators.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/microtask.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/microtask.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js-pure/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js").f;
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js-pure/internals/classof-raw.js");
var macrotask = __webpack_require__(/*! ../internals/task */ "../node_modules/core-js-pure/internals/task.js").set;
var userAgent = __webpack_require__(/*! ../internals/user-agent */ "../node_modules/core-js-pure/internals/user-agent.js");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !/(iphone|ipod|ipad).*applewebkit/i.test(userAgent)) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/native-promise-constructor.js":
/*!****************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/native-promise-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js-pure/internals/global.js");

module.exports = global.Promise;


/***/ }),

/***/ "../node_modules/core-js-pure/internals/native-symbol.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/native-symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js-pure/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "../node_modules/core-js-pure/internals/native-url.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/native-url.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js-pure/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js-pure/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js-pure/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = !fails(function () {
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return (IS_PURE && !url.toJSON)
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
});


/***/ }),

/***/ "../node_modules/core-js-pure/internals/native-weak-map.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/native-weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js-pure/internals/global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "../node_modules/core-js-pure/internals/function-to-string.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "../node_modules/core-js-pure/internals/new-promise-capability.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/new-promise-capability.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "../node_modules/core-js-pure/internals/a-function.js");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-assign.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-assign.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js-pure/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js-pure/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../node_modules/core-js-pure/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../node_modules/core-js-pure/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../node_modules/core-js-pure/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js-pure/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../node_modules/core-js-pure/internals/indexed-object.js");

var nativeAssign = Object.assign;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !nativeAssign || fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-create.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js-pure/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "../node_modules/core-js-pure/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../node_modules/core-js-pure/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js-pure/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "../node_modules/core-js-pure/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "../node_modules/core-js-pure/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../node_modules/core-js-pure/internals/shared-key.js");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-define-properties.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-define-properties.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js-pure/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js-pure/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js-pure/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../node_modules/core-js-pure/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-define-property.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-define-property.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js-pure/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../node_modules/core-js-pure/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js-pure/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../node_modules/core-js-pure/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js":
/*!************************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js-pure/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../node_modules/core-js-pure/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js-pure/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js-pure/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../node_modules/core-js-pure/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js-pure/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../node_modules/core-js-pure/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-get-own-property-names-external.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-get-own-property-names-external.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js-pure/internals/to-indexed-object.js");
var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../node_modules/core-js-pure/internals/object-get-own-property-names.js").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-get-own-property-names.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-get-own-property-names.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../node_modules/core-js-pure/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../node_modules/core-js-pure/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-get-own-property-symbols.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-get-own-property-symbols.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-get-prototype-of.js":
/*!*************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-get-prototype-of.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js-pure/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js-pure/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../node_modules/core-js-pure/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "../node_modules/core-js-pure/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-keys-internal.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-keys-internal.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js-pure/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js-pure/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "../node_modules/core-js-pure/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js-pure/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-keys.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-keys.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../node_modules/core-js-pure/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../node_modules/core-js-pure/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-property-is-enumerable.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-property-is-enumerable.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-set-prototype-of.js":
/*!*************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-set-prototype-of.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js-pure/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "../node_modules/core-js-pure/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-to-string.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-to-string.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(/*! ../internals/classof */ "../node_modules/core-js-pure/internals/classof.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js-pure/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = String(test) !== '[object z]' ? function toString() {
  return '[object ' + classof(this) + ']';
} : test.toString;


/***/ }),

/***/ "../node_modules/core-js-pure/internals/path.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js-pure/internals/path.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/perform.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/perform.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/promise-resolve.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/promise-resolve.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js-pure/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js-pure/internals/is-object.js");
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ "../node_modules/core-js-pure/internals/new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/punycode-to-ascii.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/punycode-to-ascii.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = string.charCodeAt(counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = string.charCodeAt(counter++);
      if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  for (; delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor(delta / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
// eslint-disable-next-line  max-statements
var encode = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      output.push(stringFromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    output.push(delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      throw RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw RangeError(OVERFLOW_ERROR);
      }
      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        for (var k = base; /* no condition */; k += base) {
          var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor(qMinusT / baseMinusT);
        }

        output.push(stringFromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }

    ++delta;
    ++n;
  }
  return output.join('');
};

module.exports = function (input) {
  var encoded = [];
  var labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);
  }
  return encoded.join('.');
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/redefine-all.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/redefine-all.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js-pure/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key]) target[key] = src[key];
    else redefine(target, key, src[key], options);
  } return target;
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/redefine.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/redefine.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js-pure/internals/create-non-enumerable-property.js");

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/require-object-coercible.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/require-object-coercible.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/set-global.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/set-global.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js-pure/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js-pure/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/set-species.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/set-species.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js-pure/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js-pure/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js-pure/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js-pure/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/set-to-string-tag.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/set-to-string-tag.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js-pure/internals/object-define-property.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js-pure/internals/has.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "../node_modules/core-js-pure/internals/object-to-string.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js-pure/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var METHOD_REQUIRED = toString !== ({}).toString;

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!has(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && METHOD_REQUIRED) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/shared-key.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/shared-key.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "../node_modules/core-js-pure/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../node_modules/core-js-pure/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/shared-store.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/shared-store.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js-pure/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../node_modules/core-js-pure/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "../node_modules/core-js-pure/internals/shared.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/shared.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js-pure/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/core-js-pure/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.3.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../node_modules/core-js-pure/internals/sloppy-array-method.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/sloppy-array-method.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js-pure/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/species-constructor.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/species-constructor.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js-pure/internals/an-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "../node_modules/core-js-pure/internals/a-function.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js-pure/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/string-multibyte.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/string-multibyte.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../node_modules/core-js-pure/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js-pure/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/task.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js-pure/internals/task.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js-pure/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js-pure/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js-pure/internals/classof-raw.js");
var bind = __webpack_require__(/*! ../internals/bind-context */ "../node_modules/core-js-pure/internals/bind-context.js");
var html = __webpack_require__(/*! ../internals/html */ "../node_modules/core-js-pure/internals/html.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../node_modules/core-js-pure/internals/document-create-element.js");
var userAgent = __webpack_require__(/*! ../internals/user-agent */ "../node_modules/core-js-pure/internals/user-agent.js");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !/(iphone|ipod|ipad).*applewebkit/i.test(userAgent)) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/to-absolute-index.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/to-absolute-index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../node_modules/core-js-pure/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/to-indexed-object.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/to-indexed-object.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../node_modules/core-js-pure/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js-pure/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/to-integer.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/to-integer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/to-length.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/to-length.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../node_modules/core-js-pure/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/to-object.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/to-object.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js-pure/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/to-primitive.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/to-primitive.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js-pure/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/uid.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js-pure/internals/uid.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/user-agent.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/user-agent.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js-pure/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "../node_modules/core-js-pure/internals/v8-version.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/v8-version.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js-pure/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/user-agent */ "../node_modules/core-js-pure/internals/user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Chrome\/(\d+)/);
  if (match) version = match[1];
}

module.exports = version && +version;


/***/ }),

/***/ "../node_modules/core-js-pure/internals/well-known-symbol.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/well-known-symbol.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js-pure/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "../node_modules/core-js-pure/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../node_modules/core-js-pure/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../node_modules/core-js-pure/internals/native-symbol.js");

var Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),

/***/ "../node_modules/core-js-pure/internals/wrapped-well-known-symbol.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/wrapped-well-known-symbol.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js-pure/internals/well-known-symbol.js");


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.concat.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.concat.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js-pure/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "../node_modules/core-js-pure/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js-pure/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js-pure/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js-pure/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "../node_modules/core-js-pure/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "../node_modules/core-js-pure/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../node_modules/core-js-pure/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js-pure/internals/well-known-symbol.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

var IS_CONCAT_SPREADABLE_SUPPORT = !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.every.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.every.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var $every = __webpack_require__(/*! ../internals/array-iteration */ "../node_modules/core-js-pure/internals/array-iteration.js").every;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "../node_modules/core-js-pure/internals/sloppy-array-method.js");

// `Array.prototype.every` method
// https://tc39.github.io/ecma262/#sec-array.prototype.every
$({ target: 'Array', proto: true, forced: sloppyArrayMethod('every') }, {
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.filter.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.filter.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "../node_modules/core-js-pure/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../node_modules/core-js-pure/internals/array-method-has-species-support.js");

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('filter') }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.flat-map.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.flat-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var flattenIntoArray = __webpack_require__(/*! ../internals/flatten-into-array */ "../node_modules/core-js-pure/internals/flatten-into-array.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js-pure/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js-pure/internals/to-length.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "../node_modules/core-js-pure/internals/a-function.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "../node_modules/core-js-pure/internals/array-species-create.js");

// `Array.prototype.flatMap` method
// https://github.com/tc39/proposal-flatMap
$({ target: 'Array', proto: true }, {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A;
    aFunction(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.for-each.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.for-each.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "../node_modules/core-js-pure/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.from.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.from.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "../node_modules/core-js-pure/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "../node_modules/core-js-pure/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.index-of.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "../node_modules/core-js-pure/internals/array-includes.js").indexOf;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "../node_modules/core-js-pure/internals/sloppy-array-method.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var SLOPPY_METHOD = sloppyArrayMethod('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || SLOPPY_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.is-array.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.is-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "../node_modules/core-js-pure/internals/is-array.js");

// `Array.isArray` method
// https://tc39.github.io/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.iterator.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.iterator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js-pure/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../node_modules/core-js-pure/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/core-js-pure/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js-pure/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../node_modules/core-js-pure/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.map.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "../node_modules/core-js-pure/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../node_modules/core-js-pure/internals/array-method-has-species-support.js");

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('map') }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.slice.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.slice.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js-pure/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "../node_modules/core-js-pure/internals/is-array.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../node_modules/core-js-pure/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js-pure/internals/to-length.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js-pure/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "../node_modules/core-js-pure/internals/create-property.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../node_modules/core-js-pure/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js-pure/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('slice') }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.some.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.some.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var $some = __webpack_require__(/*! ../internals/array-iteration */ "../node_modules/core-js-pure/internals/array-iteration.js").some;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "../node_modules/core-js-pure/internals/sloppy-array-method.js");

// `Array.prototype.some` method
// https://tc39.github.io/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: sloppyArrayMethod('some') }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.sort.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.sort.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "../node_modules/core-js-pure/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js-pure/internals/to-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js-pure/internals/fails.js");
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "../node_modules/core-js-pure/internals/sloppy-array-method.js");

var nativeSort = [].sort;
var test = [1, 2, 3];

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var SLOPPY_METHOD = sloppyArrayMethod('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || SLOPPY_METHOD;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.unscopables.flat-map.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.unscopables.flat-map.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../node_modules/core-js-pure/internals/add-to-unscopables.js");

addToUnscopables('flatMap');


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.json.to-string-tag.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.json.to-string-tag.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js-pure/internals/global.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../node_modules/core-js-pure/internals/set-to-string-tag.js");

// JSON[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.math.to-string-tag.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.math.to-string-tag.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../node_modules/core-js-pure/internals/set-to-string-tag.js");

// Math[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-math-@@tostringtag
setToStringTag(Math, 'Math', true);


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.object.keys.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.object.keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js-pure/internals/to-object.js");
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ "../node_modules/core-js-pure/internals/object-keys.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js-pure/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.object.to-string.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.object.to-string.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.promise.all-settled.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.promise.all-settled.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "../node_modules/core-js-pure/internals/a-function.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "../node_modules/core-js-pure/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "../node_modules/core-js-pure/internals/perform.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "../node_modules/core-js-pure/internals/iterate.js");

// `Promise.allSettled` method
// https://github.com/tc39/proposal-promise-allSettled
$({ target: 'Promise', stat: true }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (e) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: e };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.promise.finally.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.promise.finally.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js-pure/internals/is-pure.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "../node_modules/core-js-pure/internals/native-promise-constructor.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js-pure/internals/get-built-in.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "../node_modules/core-js-pure/internals/species-constructor.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "../node_modules/core-js-pure/internals/promise-resolve.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js-pure/internals/redefine.js");

// `Promise.prototype.finally` method
// https://tc39.github.io/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = typeof onFinally == 'function';
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// patch native Promise.prototype for native async functions
if (!IS_PURE && typeof NativePromise == 'function' && !NativePromise.prototype['finally']) {
  redefine(NativePromise.prototype, 'finally', getBuiltIn('Promise').prototype['finally']);
}


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.promise.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.promise.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js-pure/internals/is-pure.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js-pure/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js-pure/internals/get-built-in.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "../node_modules/core-js-pure/internals/native-promise-constructor.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js-pure/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "../node_modules/core-js-pure/internals/redefine-all.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../node_modules/core-js-pure/internals/set-to-string-tag.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "../node_modules/core-js-pure/internals/set-species.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js-pure/internals/is-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "../node_modules/core-js-pure/internals/a-function.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "../node_modules/core-js-pure/internals/an-instance.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js-pure/internals/classof-raw.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "../node_modules/core-js-pure/internals/iterate.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "../node_modules/core-js-pure/internals/check-correctness-of-iteration.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "../node_modules/core-js-pure/internals/species-constructor.js");
var task = __webpack_require__(/*! ../internals/task */ "../node_modules/core-js-pure/internals/task.js").set;
var microtask = __webpack_require__(/*! ../internals/microtask */ "../node_modules/core-js-pure/internals/microtask.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "../node_modules/core-js-pure/internals/promise-resolve.js");
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ "../node_modules/core-js-pure/internals/host-report-errors.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "../node_modules/core-js-pure/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "../node_modules/core-js-pure/internals/perform.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js-pure/internals/internal-state.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../node_modules/core-js-pure/internals/is-forced.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js-pure/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ "../node_modules/core-js-pure/internals/v8-version.js");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  // correct subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var empty = function () { /* empty */ };
  var FakePromise = (promise.constructor = {})[SPECIES] = function (exec) {
    exec(empty, empty);
  };
  // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !((IS_NODE || typeof PromiseRejectionEvent == 'function')
    && (!IS_PURE || promise['finally'])
    && promise.then(empty) instanceof FakePromise
    // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // we can't detect it synchronously, so just check versions
    && V8_VERSION !== 66);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.string.iterator.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.string.iterator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "../node_modules/core-js-pure/internals/string-multibyte.js").charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js-pure/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../node_modules/core-js-pure/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.async-iterator.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.async-iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "../node_modules/core-js-pure/internals/define-well-known-symbol.js");

// `Symbol.asyncIterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.description.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.description.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.has-instance.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.has-instance.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "../node_modules/core-js-pure/internals/define-well-known-symbol.js");

// `Symbol.hasInstance` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol('hasInstance');


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js":
/*!******************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "../node_modules/core-js-pure/internals/define-well-known-symbol.js");

// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol('isConcatSpreadable');


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.iterator.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.iterator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "../node_modules/core-js-pure/internals/define-well-known-symbol.js");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js-pure/internals/global.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js-pure/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js-pure/internals/descriptors.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../node_modules/core-js-pure/internals/native-symbol.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js-pure/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js-pure/internals/has.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "../node_modules/core-js-pure/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js-pure/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js-pure/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js-pure/internals/to-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js-pure/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../node_modules/core-js-pure/internals/to-primitive.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js-pure/internals/create-property-descriptor.js");
var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ "../node_modules/core-js-pure/internals/object-create.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../node_modules/core-js-pure/internals/object-keys.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../node_modules/core-js-pure/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "../node_modules/core-js-pure/internals/object-get-own-property-names-external.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../node_modules/core-js-pure/internals/object-get-own-property-symbols.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js-pure/internals/object-define-property.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../node_modules/core-js-pure/internals/object-property-is-enumerable.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js-pure/internals/redefine.js");
var shared = __webpack_require__(/*! ../internals/shared */ "../node_modules/core-js-pure/internals/shared.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../node_modules/core-js-pure/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js-pure/internals/hidden-keys.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../node_modules/core-js-pure/internals/uid.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js-pure/internals/well-known-symbol.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/wrapped-well-known-symbol */ "../node_modules/core-js-pure/internals/wrapped-well-known-symbol.js");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "../node_modules/core-js-pure/internals/define-well-known-symbol.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../node_modules/core-js-pure/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js-pure/internals/internal-state.js");
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "../node_modules/core-js-pure/internals/array-iteration.js").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var JSON = global.JSON;
var nativeJSONStringify = JSON && JSON.stringify;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = NATIVE_SYMBOL && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
JSON && $({ target: 'JSON', stat: true, forced: !NATIVE_SYMBOL || fails(function () {
  var symbol = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  return nativeJSONStringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || nativeJSONStringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || nativeJSONStringify(Object(symbol)) != '{}';
}) }, {
  stringify: function stringify(it) {
    var args = [it];
    var index = 1;
    var replacer, $replacer;
    while (arguments.length > index) args.push(arguments[index++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return nativeJSONStringify.apply(JSON, args);
  }
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.match-all.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.match-all.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "../node_modules/core-js-pure/internals/define-well-known-symbol.js");

// `Symbol.matchAll` well-known symbol
defineWellKnownSymbol('matchAll');


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.match.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.match.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "../node_modules/core-js-pure/internals/define-well-known-symbol.js");

// `Symbol.match` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.match
defineWellKnownSymbol('match');


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.replace.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.replace.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "../node_modules/core-js-pure/internals/define-well-known-symbol.js");

// `Symbol.replace` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.replace
defineWellKnownSymbol('replace');


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.search.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.search.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "../node_modules/core-js-pure/internals/define-well-known-symbol.js");

// `Symbol.search` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.search
defineWellKnownSymbol('search');


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.species.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.species.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "../node_modules/core-js-pure/internals/define-well-known-symbol.js");

// `Symbol.species` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.species
defineWellKnownSymbol('species');


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.split.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.split.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "../node_modules/core-js-pure/internals/define-well-known-symbol.js");

// `Symbol.split` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.split
defineWellKnownSymbol('split');


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.to-primitive.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.to-primitive.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "../node_modules/core-js-pure/internals/define-well-known-symbol.js");

// `Symbol.toPrimitive` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.to-string-tag.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.to-string-tag.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "../node_modules/core-js-pure/internals/define-well-known-symbol.js");

// `Symbol.toStringTag` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.unscopables.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "../node_modules/core-js-pure/internals/define-well-known-symbol.js");

// `Symbol.unscopables` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol('unscopables');


/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.aggregate-error.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.aggregate-error.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js-pure/internals/descriptors.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../node_modules/core-js-pure/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../node_modules/core-js-pure/internals/object-set-prototype-of.js");
var create = __webpack_require__(/*! ../internals/object-create */ "../node_modules/core-js-pure/internals/object-create.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js-pure/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js-pure/internals/create-property-descriptor.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "../node_modules/core-js-pure/internals/iterate.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js-pure/internals/an-object.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js-pure/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var getInternalAggregateErrorState = InternalStateModule.getterFor('AggregateError');

var $AggregateError = function AggregateError(errors, message) {
  var that = this;
  if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message);
  if (setPrototypeOf) {
    that = setPrototypeOf(new Error(message), getPrototypeOf(that));
  }
  var errorsArray = [];
  iterate(errors, errorsArray.push, errorsArray);
  if (DESCRIPTORS) setInternalState(that, { errors: errorsArray, type: 'AggregateError' });
  else that.errors = errorsArray;
  if (message !== undefined) createNonEnumerableProperty(that, 'message', String(message));
  return that;
};

$AggregateError.prototype = create(Error.prototype, {
  constructor: createPropertyDescriptor(5, $AggregateError),
  message: createPropertyDescriptor(5, ''),
  name: createPropertyDescriptor(5, 'AggregateError'),
  toString: createPropertyDescriptor(5, function toString() {
    var name = anObject(this).name;
    name = name === undefined ? 'AggregateError' : String(name);
    var message = this.message;
    message = message === undefined ? '' : String(message);
    return name + ': ' + message;
  })
});

if (DESCRIPTORS) defineProperty.f($AggregateError.prototype, 'errors', {
  get: function () {
    return getInternalAggregateErrorState(this).errors;
  },
  configurable: true
});

$({ global: true }, {
  AggregateError: $AggregateError
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.promise.all-settled.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.promise.all-settled.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__(/*! ./es.promise.all-settled.js */ "../node_modules/core-js-pure/modules/es.promise.all-settled.js");


/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.promise.any.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.promise.any.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "../node_modules/core-js-pure/internals/a-function.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js-pure/internals/get-built-in.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "../node_modules/core-js-pure/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "../node_modules/core-js-pure/internals/perform.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "../node_modules/core-js-pure/internals/iterate.js");

var PROMISE_ANY_ERROR = 'No one promise resolved';

// `Promise.any` method
// https://github.com/tc39/proposal-promise-any
$({ target: 'Promise', stat: true }, {
  any: function any(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aFunction(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        errors.push(undefined);
        remaining++;
        promiseResolve.call(C, promise).then(function (value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve(value);
        }, function (e) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = e;
          --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.promise.try.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.promise.try.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "../node_modules/core-js-pure/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "../node_modules/core-js-pure/internals/perform.js");

// `Promise.try` method
// https://github.com/tc39/proposal-promise-try
$({ target: 'Promise', stat: true }, {
  'try': function (callbackfn) {
    var promiseCapability = newPromiseCapabilityModule.f(this);
    var result = perform(callbackfn);
    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
    return promiseCapability.promise;
  }
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "../node_modules/core-js-pure/internals/define-well-known-symbol.js");

// `Symbol.asyncDispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('asyncDispose');


/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.symbol.dispose.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.symbol.dispose.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "../node_modules/core-js-pure/internals/define-well-known-symbol.js");

// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('dispose');


/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.symbol.observable.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.symbol.observable.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "../node_modules/core-js-pure/internals/define-well-known-symbol.js");

// `Symbol.observable` well-known symbol
// https://github.com/tc39/proposal-observable
defineWellKnownSymbol('observable');


/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "../node_modules/core-js-pure/internals/define-well-known-symbol.js");

// `Symbol.patternMatch` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('patternMatch');


/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.symbol.replace-all.js":
/*!*************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.symbol.replace-all.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO: remove from `core-js@4`
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "../node_modules/core-js-pure/internals/define-well-known-symbol.js");

defineWellKnownSymbol('replaceAll');


/***/ }),

/***/ "../node_modules/core-js-pure/modules/web.dom-collections.iterator.js":
/*!****************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/web.dom-collections.iterator.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es.array.iterator */ "../node_modules/core-js-pure/modules/es.array.iterator.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "../node_modules/core-js-pure/internals/dom-iterables.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js-pure/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/core-js-pure/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js-pure/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && !CollectionPrototype[TO_STRING_TAG]) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}


/***/ }),

/***/ "../node_modules/core-js-pure/modules/web.url-search-params.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/web.url-search-params.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(/*! ../modules/es.array.iterator */ "../node_modules/core-js-pure/modules/es.array.iterator.js");
var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js-pure/internals/get-built-in.js");
var USE_NATIVE_URL = __webpack_require__(/*! ../internals/native-url */ "../node_modules/core-js-pure/internals/native-url.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js-pure/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "../node_modules/core-js-pure/internals/redefine-all.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../node_modules/core-js-pure/internals/set-to-string-tag.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "../node_modules/core-js-pure/internals/create-iterator-constructor.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js-pure/internals/internal-state.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "../node_modules/core-js-pure/internals/an-instance.js");
var hasOwn = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js-pure/internals/has.js");
var bind = __webpack_require__(/*! ../internals/bind-context */ "../node_modules/core-js-pure/internals/bind-context.js");
var classof = __webpack_require__(/*! ../internals/classof */ "../node_modules/core-js-pure/internals/classof.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js-pure/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js-pure/internals/is-object.js");
var create = __webpack_require__(/*! ../internals/object-create */ "../node_modules/core-js-pure/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js-pure/internals/create-property-descriptor.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "../node_modules/core-js-pure/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "../node_modules/core-js-pure/internals/get-iterator-method.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js-pure/internals/well-known-symbol.js");

var $fetch = getBuiltIn('fetch');
var Headers = getBuiltIn('Headers');
var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);

var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = it.replace(plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = result.replace(percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};

var find = /[!'()~]|%20/g;

var replace = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replace[match];
};

var serialize = function (it) {
  return encodeURIComponent(it).replace(find, replacer);
};

var parseSearchParams = function (result, query) {
  if (query) {
    var attributes = query.split('&');
    var index = 0;
    var attribute, entry;
    while (index < attributes.length) {
      attribute = attributes[index++];
      if (attribute.length) {
        entry = attribute.split('=');
        result.push({
          key: deserialize(entry.shift()),
          value: deserialize(entry.join('='))
        });
      }
    }
  }
};

var updateSearchParams = function (query) {
  this.entries.length = 0;
  parseSearchParams(this.entries, query);
};

var validateArgumentsLength = function (passed, required) {
  if (passed < required) throw TypeError('Not enough arguments');
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;
  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  } return step;
});

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  var that = this;
  var entries = [];
  var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;

  setInternalState(that, {
    type: URL_SEARCH_PARAMS,
    entries: entries,
    updateURL: function () { /* empty */ },
    updateSearchParams: updateSearchParams
  });

  if (init !== undefined) {
    if (isObject(init)) {
      iteratorMethod = getIteratorMethod(init);
      if (typeof iteratorMethod === 'function') {
        iterator = iteratorMethod.call(init);
        next = iterator.next;
        while (!(step = next.call(iterator)).done) {
          entryIterator = getIterator(anObject(step.value));
          entryNext = entryIterator.next;
          if (
            (first = entryNext.call(entryIterator)).done ||
            (second = entryNext.call(entryIterator)).done ||
            !entryNext.call(entryIterator).done
          ) throw TypeError('Expected sequence with length 2');
          entries.push({ key: first.value + '', value: second.value + '' });
        }
      } else for (key in init) if (hasOwn(init, key)) entries.push({ key: key, value: init[key] + '' });
    } else {
      parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
    }
  }
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

redefineAll(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.appent` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    state.entries.push({ key: name + '', value: value + '' });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) entries.splice(index, 1);
      else index++;
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) result.push(entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = name + '';
    var val = value + '';
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) entries.splice(index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) entries.push({ key: key, value: val });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    var entries = state.entries;
    // Array#sort is not stable in some engines
    var slice = entries.slice();
    var entry, entriesIndex, sliceIndex;
    entries.length = 0;
    for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
      entry = slice[sliceIndex];
      for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
        if (entries[entriesIndex].key > entry.key) {
          entries.splice(entriesIndex, 0, entry);
          break;
        }
      }
      if (entriesIndex === sliceIndex) entries.push(entry);
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
redefine(URLSearchParamsPrototype, 'toString', function toString() {
  var entries = getInternalParamsState(this).entries;
  var result = [];
  var index = 0;
  var entry;
  while (index < entries.length) {
    entry = entries[index++];
    result.push(serialize(entry.key) + '=' + serialize(entry.value));
  } return result.join('&');
}, { enumerable: true });

setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$({ global: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` for correct work with polyfilled `URLSearchParams`
// https://github.com/zloirock/core-js/issues/674
if (!USE_NATIVE_URL && typeof $fetch == 'function' && typeof Headers == 'function') {
  $({ global: true, enumerable: true, forced: true }, {
    fetch: function fetch(input /* , init */) {
      var args = [input];
      var init, body, headers;
      if (arguments.length > 1) {
        init = arguments[1];
        if (isObject(init)) {
          body = init.body;
          if (classof(body) === URL_SEARCH_PARAMS) {
            headers = new Headers(init.headers);
            if (!headers.has('content-type')) {
              headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
            }
            init = create(init, {
              body: createPropertyDescriptor(0, String(body)),
              headers: createPropertyDescriptor(0, headers)
            });
          }
        }
        args.push(init);
      } return $fetch.apply(this, args);
    }
  });
}

module.exports = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};


/***/ }),

/***/ "../node_modules/core-js-pure/modules/web.url.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js-pure/modules/web.url.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(/*! ../modules/es.string.iterator */ "../node_modules/core-js-pure/modules/es.string.iterator.js");
var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js-pure/internals/descriptors.js");
var USE_NATIVE_URL = __webpack_require__(/*! ../internals/native-url */ "../node_modules/core-js-pure/internals/native-url.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js-pure/internals/global.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "../node_modules/core-js-pure/internals/object-define-properties.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js-pure/internals/redefine.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "../node_modules/core-js-pure/internals/an-instance.js");
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js-pure/internals/has.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "../node_modules/core-js-pure/internals/object-assign.js");
var arrayFrom = __webpack_require__(/*! ../internals/array-from */ "../node_modules/core-js-pure/internals/array-from.js");
var codeAt = __webpack_require__(/*! ../internals/string-multibyte */ "../node_modules/core-js-pure/internals/string-multibyte.js").codeAt;
var toASCII = __webpack_require__(/*! ../internals/punycode-to-ascii */ "../node_modules/core-js-pure/internals/punycode-to-ascii.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../node_modules/core-js-pure/internals/set-to-string-tag.js");
var URLSearchParamsModule = __webpack_require__(/*! ../modules/web.url-search-params */ "../node_modules/core-js-pure/modules/web.url-search-params.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js-pure/internals/internal-state.js");

var NativeURL = global.URL;
var URLSearchParams = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;
var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var floor = Math.floor;
var pow = Math.pow;

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[A-Za-z]/;
var ALPHANUMERIC = /[\d+\-.A-Za-z]/;
var DIGIT = /\d/;
var HEX_START = /^(0x|0X)/;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\dA-Fa-f]+$/;
// eslint-disable-next-line no-control-regex
var FORBIDDEN_HOST_CODE_POINT = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/;
// eslint-disable-next-line no-control-regex
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/;
// eslint-disable-next-line no-control-regex
var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
// eslint-disable-next-line no-control-regex
var TAB_AND_NEW_LINE = /[\u0009\u000A\u000D]/g;
var EOF;

var parseHost = function (url, input) {
  var result, codePoints, index;
  if (input.charAt(0) == '[') {
    if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
    result = parseIPv6(input.slice(1, -1));
    if (!result) return INVALID_HOST;
    url.host = result;
  // opaque host
  } else if (!isSpecial(url)) {
    if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
    result = '';
    codePoints = arrayFrom(input);
    for (index = 0; index < codePoints.length; index++) {
      result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
    }
    url.host = result;
  } else {
    input = toASCII(input);
    if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
    result = parseIPv4(input);
    if (result === null) return INVALID_HOST;
    url.host = result;
  }
};

var parseIPv4 = function (input) {
  var parts = input.split('.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] == '') {
    parts.pop();
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part == '') return input;
    radix = 10;
    if (part.length > 1 && part.charAt(0) == '0') {
      radix = HEX_START.test(part) ? 16 : 8;
      part = part.slice(radix == 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;
      number = parseInt(part, radix);
    }
    numbers.push(number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index == partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = numbers.pop();
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }
  return ipv4;
};

// eslint-disable-next-line max-statements
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var char = function () {
    return input.charAt(pointer);
  };

  if (char() == ':') {
    if (input.charAt(1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (char()) {
    if (pieceIndex == 8) return;
    if (char() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && HEX.test(char())) {
      value = value * 16 + parseInt(char(), 16);
      pointer++;
      length++;
    }
    if (char() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (char()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (char() == '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!DIGIT.test(char())) return;
        while (DIGIT.test(char())) {
          number = parseInt(char(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece == 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }
      if (numbersSeen != 4) return;
      break;
    } else if (char() == ':') {
      pointer++;
      if (!char()) return;
    } else if (char()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }
  return maxIndex;
};

var serializeHost = function (host) {
  var result, index, compress, ignore0;
  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      result.unshift(host % 256);
      host = floor(host / 256);
    } return result.join('.');
  // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += host[index].toString(16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  } return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

var percentEncode = function (char, set) {
  var code = codeAt(char, 0);
  return code > 0x20 && code < 0x7F && !has(set, char) ? char : encodeURIComponent(char);
};

var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

var isSpecial = function (url) {
  return has(specialSchemes, url.scheme);
};

var includesCredentials = function (url) {
  return url.username != '' || url.password != '';
};

var cannotHaveUsernamePasswordPort = function (url) {
  return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
};

var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length == 2 && ALPHA.test(string.charAt(0))
    && ((second = string.charAt(1)) == ':' || (!normalized && second == '|'));
};

var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (
    string.length == 2 ||
    ((third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

var shortenURLsPath = function (url) {
  var path = url.path;
  var pathSize = path.length;
  if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
    path.pop();
  }
};

var isSingleDot = function (segment) {
  return segment === '.' || segment.toLowerCase() === '%2e';
};

var isDoubleDot = function (segment) {
  segment = segment.toLowerCase();
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

// eslint-disable-next-line max-statements
var parseURL = function (url, input, stateOverride, base) {
  var state = stateOverride || SCHEME_START;
  var pointer = 0;
  var buffer = '';
  var seenAt = false;
  var seenBracket = false;
  var seenPasswordToken = false;
  var codePoints, char, bufferCodePoints, failure;

  if (!stateOverride) {
    url.scheme = '';
    url.username = '';
    url.password = '';
    url.host = null;
    url.port = null;
    url.path = [];
    url.query = null;
    url.fragment = null;
    url.cannotBeABaseURL = false;
    input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
  }

  input = input.replace(TAB_AND_NEW_LINE, '');

  codePoints = arrayFrom(input);

  while (pointer <= codePoints.length) {
    char = codePoints[pointer];
    switch (state) {
      case SCHEME_START:
        if (char && ALPHA.test(char)) {
          buffer += char.toLowerCase();
          state = SCHEME;
        } else if (!stateOverride) {
          state = NO_SCHEME;
          continue;
        } else return INVALID_SCHEME;
        break;

      case SCHEME:
        if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {
          buffer += char.toLowerCase();
        } else if (char == ':') {
          if (stateOverride && (
            (isSpecial(url) != has(specialSchemes, buffer)) ||
            (buffer == 'file' && (includesCredentials(url) || url.port !== null)) ||
            (url.scheme == 'file' && !url.host)
          )) return;
          url.scheme = buffer;
          if (stateOverride) {
            if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
            return;
          }
          buffer = '';
          if (url.scheme == 'file') {
            state = FILE;
          } else if (isSpecial(url) && base && base.scheme == url.scheme) {
            state = SPECIAL_RELATIVE_OR_AUTHORITY;
          } else if (isSpecial(url)) {
            state = SPECIAL_AUTHORITY_SLASHES;
          } else if (codePoints[pointer + 1] == '/') {
            state = PATH_OR_AUTHORITY;
            pointer++;
          } else {
            url.cannotBeABaseURL = true;
            url.path.push('');
            state = CANNOT_BE_A_BASE_URL_PATH;
          }
        } else if (!stateOverride) {
          buffer = '';
          state = NO_SCHEME;
          pointer = 0;
          continue;
        } else return INVALID_SCHEME;
        break;

      case NO_SCHEME:
        if (!base || (base.cannotBeABaseURL && char != '#')) return INVALID_SCHEME;
        if (base.cannotBeABaseURL && char == '#') {
          url.scheme = base.scheme;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          url.cannotBeABaseURL = true;
          state = FRAGMENT;
          break;
        }
        state = base.scheme == 'file' ? FILE : RELATIVE;
        continue;

      case SPECIAL_RELATIVE_OR_AUTHORITY:
        if (char == '/' && codePoints[pointer + 1] == '/') {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          pointer++;
        } else {
          state = RELATIVE;
          continue;
        } break;

      case PATH_OR_AUTHORITY:
        if (char == '/') {
          state = AUTHORITY;
          break;
        } else {
          state = PATH;
          continue;
        }

      case RELATIVE:
        url.scheme = base.scheme;
        if (char == EOF) {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
        } else if (char == '/' || (char == '\\' && isSpecial(url))) {
          state = RELATIVE_SLASH;
        } else if (char == '?') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          state = FRAGMENT;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.path.pop();
          state = PATH;
          continue;
        } break;

      case RELATIVE_SLASH:
        if (isSpecial(url) && (char == '/' || char == '\\')) {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        } else if (char == '/') {
          state = AUTHORITY;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          state = PATH;
          continue;
        } break;

      case SPECIAL_AUTHORITY_SLASHES:
        state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;
        pointer++;
        break;

      case SPECIAL_AUTHORITY_IGNORE_SLASHES:
        if (char != '/' && char != '\\') {
          state = AUTHORITY;
          continue;
        } break;

      case AUTHORITY:
        if (char == '@') {
          if (seenAt) buffer = '%40' + buffer;
          seenAt = true;
          bufferCodePoints = arrayFrom(buffer);
          for (var i = 0; i < bufferCodePoints.length; i++) {
            var codePoint = bufferCodePoints[i];
            if (codePoint == ':' && !seenPasswordToken) {
              seenPasswordToken = true;
              continue;
            }
            var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
            if (seenPasswordToken) url.password += encodedCodePoints;
            else url.username += encodedCodePoints;
          }
          buffer = '';
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (seenAt && buffer == '') return INVALID_AUTHORITY;
          pointer -= arrayFrom(buffer).length + 1;
          buffer = '';
          state = HOST;
        } else buffer += char;
        break;

      case HOST:
      case HOSTNAME:
        if (stateOverride && url.scheme == 'file') {
          state = FILE_HOST;
          continue;
        } else if (char == ':' && !seenBracket) {
          if (buffer == '') return INVALID_HOST;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PORT;
          if (stateOverride == HOSTNAME) return;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (isSpecial(url) && buffer == '') return INVALID_HOST;
          if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PATH_START;
          if (stateOverride) return;
          continue;
        } else {
          if (char == '[') seenBracket = true;
          else if (char == ']') seenBracket = false;
          buffer += char;
        } break;

      case PORT:
        if (DIGIT.test(char)) {
          buffer += char;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url)) ||
          stateOverride
        ) {
          if (buffer != '') {
            var port = parseInt(buffer, 10);
            if (port > 0xFFFF) return INVALID_PORT;
            url.port = (isSpecial(url) && port === specialSchemes[url.scheme]) ? null : port;
            buffer = '';
          }
          if (stateOverride) return;
          state = PATH_START;
          continue;
        } else return INVALID_PORT;
        break;

      case FILE:
        url.scheme = 'file';
        if (char == '/' || char == '\\') state = FILE_SLASH;
        else if (base && base.scheme == 'file') {
          if (char == EOF) {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
          } else if (char == '?') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
              url.host = base.host;
              url.path = base.path.slice();
              shortenURLsPath(url);
            }
            state = PATH;
            continue;
          }
        } else {
          state = PATH;
          continue;
        } break;

      case FILE_SLASH:
        if (char == '/' || char == '\\') {
          state = FILE_HOST;
          break;
        }
        if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
          if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);
          else url.host = base.host;
        }
        state = PATH;
        continue;

      case FILE_HOST:
        if (char == EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
          if (!stateOverride && isWindowsDriveLetter(buffer)) {
            state = PATH;
          } else if (buffer == '') {
            url.host = '';
            if (stateOverride) return;
            state = PATH_START;
          } else {
            failure = parseHost(url, buffer);
            if (failure) return failure;
            if (url.host == 'localhost') url.host = '';
            if (stateOverride) return;
            buffer = '';
            state = PATH_START;
          } continue;
        } else buffer += char;
        break;

      case PATH_START:
        if (isSpecial(url)) {
          state = PATH;
          if (char != '/' && char != '\\') continue;
        } else if (!stateOverride && char == '?') {
          url.query = '';
          state = QUERY;
        } else if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          state = PATH;
          if (char != '/') continue;
        } break;

      case PATH:
        if (
          char == EOF || char == '/' ||
          (char == '\\' && isSpecial(url)) ||
          (!stateOverride && (char == '?' || char == '#'))
        ) {
          if (isDoubleDot(buffer)) {
            shortenURLsPath(url);
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else if (isSingleDot(buffer)) {
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else {
            if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
              if (url.host) url.host = '';
              buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
            }
            url.path.push(buffer);
          }
          buffer = '';
          if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) {
            while (url.path.length > 1 && url.path[0] === '') {
              url.path.shift();
            }
          }
          if (char == '?') {
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.fragment = '';
            state = FRAGMENT;
          }
        } else {
          buffer += percentEncode(char, pathPercentEncodeSet);
        } break;

      case CANNOT_BE_A_BASE_URL_PATH:
        if (char == '?') {
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case QUERY:
        if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          if (char == "'" && isSpecial(url)) url.query += '%27';
          else if (char == '#') url.query += '%23';
          else url.query += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case FRAGMENT:
        if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);
        break;
    }

    pointer++;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance(this, URLConstructor, 'URL');
  var base = arguments.length > 1 ? arguments[1] : undefined;
  var urlString = String(url);
  var state = setInternalState(that, { type: 'URL' });
  var baseState, failure;
  if (base !== undefined) {
    if (base instanceof URLConstructor) baseState = getInternalURLState(base);
    else {
      failure = parseURL(baseState = {}, String(base));
      if (failure) throw TypeError(failure);
    }
  }
  failure = parseURL(state, urlString, null, baseState);
  if (failure) throw TypeError(failure);
  var searchParams = state.searchParams = new URLSearchParams();
  var searchParamsState = getInternalSearchParamsState(searchParams);
  searchParamsState.updateSearchParams(state.query);
  searchParamsState.updateURL = function () {
    state.query = String(searchParams) || null;
  };
  if (!DESCRIPTORS) {
    that.href = serializeURL.call(that);
    that.origin = getOrigin.call(that);
    that.protocol = getProtocol.call(that);
    that.username = getUsername.call(that);
    that.password = getPassword.call(that);
    that.host = getHost.call(that);
    that.hostname = getHostname.call(that);
    that.port = getPort.call(that);
    that.pathname = getPathname.call(that);
    that.search = getSearch.call(that);
    that.searchParams = getSearchParams.call(that);
    that.hash = getHash.call(that);
  }
};

var URLPrototype = URLConstructor.prototype;

var serializeURL = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var username = url.username;
  var password = url.password;
  var host = url.host;
  var port = url.port;
  var path = url.path;
  var query = url.query;
  var fragment = url.fragment;
  var output = scheme + ':';
  if (host !== null) {
    output += '//';
    if (includesCredentials(url)) {
      output += username + (password ? ':' + password : '') + '@';
    }
    output += serializeHost(host);
    if (port !== null) output += ':' + port;
  } else if (scheme == 'file') output += '//';
  output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
  if (query !== null) output += '?' + query;
  if (fragment !== null) output += '#' + fragment;
  return output;
};

var getOrigin = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var port = url.port;
  if (scheme == 'blob') try {
    return new URL(scheme.path[0]).origin;
  } catch (error) {
    return 'null';
  }
  if (scheme == 'file' || !isSpecial(url)) return 'null';
  return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
};

var getProtocol = function () {
  return getInternalURLState(this).scheme + ':';
};

var getUsername = function () {
  return getInternalURLState(this).username;
};

var getPassword = function () {
  return getInternalURLState(this).password;
};

var getHost = function () {
  var url = getInternalURLState(this);
  var host = url.host;
  var port = url.port;
  return host === null ? ''
    : port === null ? serializeHost(host)
    : serializeHost(host) + ':' + port;
};

var getHostname = function () {
  var host = getInternalURLState(this).host;
  return host === null ? '' : serializeHost(host);
};

var getPort = function () {
  var port = getInternalURLState(this).port;
  return port === null ? '' : String(port);
};

var getPathname = function () {
  var url = getInternalURLState(this);
  var path = url.path;
  return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
};

var getSearch = function () {
  var query = getInternalURLState(this).query;
  return query ? '?' + query : '';
};

var getSearchParams = function () {
  return getInternalURLState(this).searchParams;
};

var getHash = function () {
  var fragment = getInternalURLState(this).fragment;
  return fragment ? '#' + fragment : '';
};

var accessorDescriptor = function (getter, setter) {
  return { get: getter, set: setter, configurable: true, enumerable: true };
};

if (DESCRIPTORS) {
  defineProperties(URLPrototype, {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    href: accessorDescriptor(serializeURL, function (href) {
      var url = getInternalURLState(this);
      var urlString = String(href);
      var failure = parseURL(url, urlString);
      if (failure) throw TypeError(failure);
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    origin: accessorDescriptor(getOrigin),
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    protocol: accessorDescriptor(getProtocol, function (protocol) {
      var url = getInternalURLState(this);
      parseURL(url, String(protocol) + ':', SCHEME_START);
    }),
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    username: accessorDescriptor(getUsername, function (username) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(username));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.username = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    password: accessorDescriptor(getPassword, function (password) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(password));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.password = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    host: accessorDescriptor(getHost, function (host) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(host), HOST);
    }),
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    hostname: accessorDescriptor(getHostname, function (hostname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(hostname), HOSTNAME);
    }),
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    port: accessorDescriptor(getPort, function (port) {
      var url = getInternalURLState(this);
      if (cannotHaveUsernamePasswordPort(url)) return;
      port = String(port);
      if (port == '') url.port = null;
      else parseURL(url, port, PORT);
    }),
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    pathname: accessorDescriptor(getPathname, function (pathname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      url.path = [];
      parseURL(url, pathname + '', PATH_START);
    }),
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    search: accessorDescriptor(getSearch, function (search) {
      var url = getInternalURLState(this);
      search = String(search);
      if (search == '') {
        url.query = null;
      } else {
        if ('?' == search.charAt(0)) search = search.slice(1);
        url.query = '';
        parseURL(url, search, QUERY);
      }
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    searchParams: accessorDescriptor(getSearchParams),
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    hash: accessorDescriptor(getHash, function (hash) {
      var url = getInternalURLState(this);
      hash = String(hash);
      if (hash == '') {
        url.fragment = null;
        return;
      }
      if ('#' == hash.charAt(0)) hash = hash.slice(1);
      url.fragment = '';
      parseURL(url, hash, FRAGMENT);
    })
  });
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
redefine(URLPrototype, 'toJSON', function toJSON() {
  return serializeURL.call(this);
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
redefine(URLPrototype, 'toString', function toString() {
  return serializeURL.call(this);
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  // eslint-disable-next-line no-unused-vars
  if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
    return nativeCreateObjectURL.apply(NativeURL, arguments);
  });
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  // eslint-disable-next-line no-unused-vars
  if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
    return nativeRevokeObjectURL.apply(NativeURL, arguments);
  });
}

setToStringTag(URLConstructor, 'URL');

$({ global: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
  URL: URLConstructor
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/web.url.to-json.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/web.url.to-json.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty


/***/ }),

/***/ "../node_modules/core-js-pure/stable/array/is-array.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/array/is-array.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/array/is-array */ "../node_modules/core-js-pure/es/array/is-array.js");


/***/ }),

/***/ "../node_modules/core-js-pure/stable/array/virtual/for-each.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/array/virtual/for-each.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../../es/array/virtual/for-each */ "../node_modules/core-js-pure/es/array/virtual/for-each.js");


/***/ }),

/***/ "../node_modules/core-js-pure/stable/instance/concat.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/instance/concat.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/instance/concat */ "../node_modules/core-js-pure/es/instance/concat.js");


/***/ }),

/***/ "../node_modules/core-js-pure/stable/instance/every.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/instance/every.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/instance/every */ "../node_modules/core-js-pure/es/instance/every.js");


/***/ }),

/***/ "../node_modules/core-js-pure/stable/instance/filter.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/instance/filter.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/instance/filter */ "../node_modules/core-js-pure/es/instance/filter.js");


/***/ }),

/***/ "../node_modules/core-js-pure/stable/instance/flat-map.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/instance/flat-map.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/instance/flat-map */ "../node_modules/core-js-pure/es/instance/flat-map.js");


/***/ }),

/***/ "../node_modules/core-js-pure/stable/instance/for-each.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/instance/for-each.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ "../node_modules/core-js-pure/modules/web.dom-collections.iterator.js");
var forEach = __webpack_require__(/*! ../array/virtual/for-each */ "../node_modules/core-js-pure/stable/array/virtual/for-each.js");
var classof = __webpack_require__(/*! ../../internals/classof */ "../node_modules/core-js-pure/internals/classof.js");
var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.forEach;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.forEach)
    // eslint-disable-next-line no-prototype-builtins
    || DOMIterables.hasOwnProperty(classof(it)) ? forEach : own;
};


/***/ }),

/***/ "../node_modules/core-js-pure/stable/instance/index-of.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/instance/index-of.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/instance/index-of */ "../node_modules/core-js-pure/es/instance/index-of.js");


/***/ }),

/***/ "../node_modules/core-js-pure/stable/instance/map.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/stable/instance/map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/instance/map */ "../node_modules/core-js-pure/es/instance/map.js");


/***/ }),

/***/ "../node_modules/core-js-pure/stable/instance/slice.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/instance/slice.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/instance/slice */ "../node_modules/core-js-pure/es/instance/slice.js");


/***/ }),

/***/ "../node_modules/core-js-pure/stable/instance/some.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/instance/some.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/instance/some */ "../node_modules/core-js-pure/es/instance/some.js");


/***/ }),

/***/ "../node_modules/core-js-pure/stable/instance/sort.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/instance/sort.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/instance/sort */ "../node_modules/core-js-pure/es/instance/sort.js");


/***/ }),

/***/ "../node_modules/core-js-pure/stable/json/stringify.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/json/stringify.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/json/stringify */ "../node_modules/core-js-pure/es/json/stringify.js");


/***/ }),

/***/ "../node_modules/core-js-pure/stable/object/keys.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/stable/object/keys.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/object/keys */ "../node_modules/core-js-pure/es/object/keys.js");


/***/ }),

/***/ "../node_modules/core-js-pure/stable/promise/index.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/promise/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/promise */ "../node_modules/core-js-pure/es/promise/index.js");


/***/ }),

/***/ "../node_modules/core-js-pure/stable/symbol/async-iterator.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/symbol/async-iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/symbol/async-iterator */ "../node_modules/core-js-pure/es/symbol/async-iterator.js");


/***/ }),

/***/ "../node_modules/core-js-pure/stable/url/index.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/stable/url/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../web/url */ "../node_modules/core-js-pure/web/url.js");


/***/ }),

/***/ "../node_modules/core-js-pure/web/url.js":
/*!***********************************************!*\
  !*** ../node_modules/core-js-pure/web/url.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.url */ "../node_modules/core-js-pure/modules/web.url.js");
__webpack_require__(/*! ../modules/web.url.to-json */ "../node_modules/core-js-pure/modules/web.url.to-json.js");
__webpack_require__(/*! ../modules/web.url-search-params */ "../node_modules/core-js-pure/modules/web.url-search-params.js");
var path = __webpack_require__(/*! ../internals/path */ "../node_modules/core-js-pure/internals/path.js");

module.exports = path.URL;


/***/ }),

/***/ "../node_modules/dom-node-iterator/implementation.js":
/*!***********************************************************!*\
  !*** ../node_modules/dom-node-iterator/implementation.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/implementation */ "../node_modules/dom-node-iterator/lib/implementation.js")['default'];


/***/ }),

/***/ "../node_modules/dom-node-iterator/index.js":
/*!**************************************************!*\
  !*** ../node_modules/dom-node-iterator/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib */ "../node_modules/dom-node-iterator/lib/index.js")['default'];
module.exports.getPolyfill = __webpack_require__(/*! ./polyfill */ "../node_modules/dom-node-iterator/polyfill.js");
module.exports.implementation = __webpack_require__(/*! ./implementation */ "../node_modules/dom-node-iterator/implementation.js");
module.exports.shim = __webpack_require__(/*! ./shim */ "../node_modules/dom-node-iterator/shim.js");


/***/ }),

/***/ "../node_modules/dom-node-iterator/lib/adapter.js":
/*!********************************************************!*\
  !*** ../node_modules/dom-node-iterator/lib/adapter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports['default'] = createNodeIterator;


function createNodeIterator(root) {
  var whatToShow = arguments.length <= 1 || arguments[1] === undefined ? 0xFFFFFFFF : arguments[1];
  var filter = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var doc = root.nodeType == 9 || root.ownerDocument;
  var iter = doc.createNodeIterator(root, whatToShow, filter, false);
  return new NodeIterator(iter, root, whatToShow, filter);
}

var NodeIterator = function () {
  function NodeIterator(iter, root, whatToShow, filter) {
    _classCallCheck(this, NodeIterator);

    this.root = root;
    this.whatToShow = whatToShow;
    this.filter = filter;
    this.referenceNode = root;
    this.pointerBeforeReferenceNode = true;
    this._iter = iter;
  }

  NodeIterator.prototype.nextNode = function nextNode() {
    var result = this._iter.nextNode();
    this.pointerBeforeReferenceNode = false;
    if (result === null) return null;
    this.referenceNode = result;
    return this.referenceNode;
  };

  NodeIterator.prototype.previousNode = function previousNode() {
    var result = this._iter.previousNode();
    this.pointerBeforeReferenceNode = true;
    if (result === null) return null;
    this.referenceNode = result;
    return this.referenceNode;
  };

  NodeIterator.prototype.toString = function toString() {
    return '[object NodeIterator]';
  };

  return NodeIterator;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hZGFwdGVyLmpzIl0sIm5hbWVzIjpbImNyZWF0ZU5vZGVJdGVyYXRvciIsInJvb3QiLCJ3aGF0VG9TaG93IiwiZmlsdGVyIiwiZG9jIiwibm9kZVR5cGUiLCJvd25lckRvY3VtZW50IiwiaXRlciIsIk5vZGVJdGVyYXRvciIsInJlZmVyZW5jZU5vZGUiLCJwb2ludGVyQmVmb3JlUmVmZXJlbmNlTm9kZSIsIl9pdGVyIiwibmV4dE5vZGUiLCJyZXN1bHQiLCJwcmV2aW91c05vZGUiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O3FCQUFlQSxrQjs7O0FBR2YsU0FBU0Esa0JBQVQsQ0FBNEJDLElBQTVCLEVBQTBFO0FBQUEsTUFBeENDLFVBQXdDLHlEQUEzQixVQUEyQjtBQUFBLE1BQWZDLE1BQWUseURBQU4sSUFBTTs7QUFDeEUsTUFBTUMsTUFBT0gsS0FBS0ksUUFBTCxJQUFpQixDQUFsQixJQUF3QkosS0FBS0ssYUFBekM7QUFDQSxNQUFNQyxPQUFPSCxJQUFJSixrQkFBSixDQUF1QkMsSUFBdkIsRUFBNkJDLFVBQTdCLEVBQXlDQyxNQUF6QyxFQUFpRCxLQUFqRCxDQUFiO0FBQ0EsU0FBTyxJQUFJSyxZQUFKLENBQWlCRCxJQUFqQixFQUF1Qk4sSUFBdkIsRUFBNkJDLFVBQTdCLEVBQXlDQyxNQUF6QyxDQUFQO0FBQ0Q7O0lBR0tLLFk7QUFDSix3QkFBWUQsSUFBWixFQUFrQk4sSUFBbEIsRUFBd0JDLFVBQXhCLEVBQW9DQyxNQUFwQyxFQUE0QztBQUFBOztBQUMxQyxTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtNLGFBQUwsR0FBcUJSLElBQXJCO0FBQ0EsU0FBS1MsMEJBQUwsR0FBa0MsSUFBbEM7QUFDQSxTQUFLQyxLQUFMLEdBQWFKLElBQWI7QUFDRDs7eUJBRURLLFEsdUJBQVc7QUFDVCxRQUFNQyxTQUFTLEtBQUtGLEtBQUwsQ0FBV0MsUUFBWCxFQUFmO0FBQ0EsU0FBS0YsMEJBQUwsR0FBa0MsS0FBbEM7QUFDQSxRQUFJRyxXQUFXLElBQWYsRUFBcUIsT0FBTyxJQUFQO0FBQ3JCLFNBQUtKLGFBQUwsR0FBcUJJLE1BQXJCO0FBQ0EsV0FBTyxLQUFLSixhQUFaO0FBQ0QsRzs7eUJBRURLLFksMkJBQWU7QUFDYixRQUFNRCxTQUFTLEtBQUtGLEtBQUwsQ0FBV0csWUFBWCxFQUFmO0FBQ0EsU0FBS0osMEJBQUwsR0FBa0MsSUFBbEM7QUFDQSxRQUFJRyxXQUFXLElBQWYsRUFBcUIsT0FBTyxJQUFQO0FBQ3JCLFNBQUtKLGFBQUwsR0FBcUJJLE1BQXJCO0FBQ0EsV0FBTyxLQUFLSixhQUFaO0FBQ0QsRzs7eUJBRURNLFEsdUJBQVc7QUFDVCxXQUFPLHVCQUFQO0FBQ0QsRyIsImZpbGUiOiJhZGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY3JlYXRlTm9kZUl0ZXJhdG9yXG5cblxuZnVuY3Rpb24gY3JlYXRlTm9kZUl0ZXJhdG9yKHJvb3QsIHdoYXRUb1Nob3cgPSAweEZGRkZGRkZGLCBmaWx0ZXIgPSBudWxsKSB7XG4gIGNvbnN0IGRvYyA9IChyb290Lm5vZGVUeXBlID09IDkpIHx8IHJvb3Qub3duZXJEb2N1bWVudFxuICBjb25zdCBpdGVyID0gZG9jLmNyZWF0ZU5vZGVJdGVyYXRvcihyb290LCB3aGF0VG9TaG93LCBmaWx0ZXIsIGZhbHNlKVxuICByZXR1cm4gbmV3IE5vZGVJdGVyYXRvcihpdGVyLCByb290LCB3aGF0VG9TaG93LCBmaWx0ZXIpXG59XG5cblxuY2xhc3MgTm9kZUl0ZXJhdG9yIHtcbiAgY29uc3RydWN0b3IoaXRlciwgcm9vdCwgd2hhdFRvU2hvdywgZmlsdGVyKSB7XG4gICAgdGhpcy5yb290ID0gcm9vdFxuICAgIHRoaXMud2hhdFRvU2hvdyA9IHdoYXRUb1Nob3dcbiAgICB0aGlzLmZpbHRlciA9IGZpbHRlclxuICAgIHRoaXMucmVmZXJlbmNlTm9kZSA9IHJvb3RcbiAgICB0aGlzLnBvaW50ZXJCZWZvcmVSZWZlcmVuY2VOb2RlID0gdHJ1ZVxuICAgIHRoaXMuX2l0ZXIgPSBpdGVyXG4gIH1cblxuICBuZXh0Tm9kZSgpIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9pdGVyLm5leHROb2RlKClcbiAgICB0aGlzLnBvaW50ZXJCZWZvcmVSZWZlcmVuY2VOb2RlID0gZmFsc2VcbiAgICBpZiAocmVzdWx0ID09PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIHRoaXMucmVmZXJlbmNlTm9kZSA9IHJlc3VsdFxuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZU5vZGVcbiAgfVxuXG4gIHByZXZpb3VzTm9kZSgpIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9pdGVyLnByZXZpb3VzTm9kZSgpXG4gICAgdGhpcy5wb2ludGVyQmVmb3JlUmVmZXJlbmNlTm9kZSA9IHRydWVcbiAgICBpZiAocmVzdWx0ID09PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIHRoaXMucmVmZXJlbmNlTm9kZSA9IHJlc3VsdFxuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZU5vZGVcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnW29iamVjdCBOb2RlSXRlcmF0b3JdJ1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "../node_modules/dom-node-iterator/lib/builtin.js":
/*!********************************************************!*\
  !*** ../node_modules/dom-node-iterator/lib/builtin.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = createNodeIterator;


function createNodeIterator(root) {
  var whatToShow = arguments.length <= 1 || arguments[1] === undefined ? 0xFFFFFFFF : arguments[1];
  var filter = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var doc = root.ownerDocument;
  return doc.createNodeIterator.call(doc, root, whatToShow, filter);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9idWlsdGluLmpzIl0sIm5hbWVzIjpbImNyZWF0ZU5vZGVJdGVyYXRvciIsInJvb3QiLCJ3aGF0VG9TaG93IiwiZmlsdGVyIiwiZG9jIiwib3duZXJEb2N1bWVudCIsImNhbGwiXSwibWFwcGluZ3MiOiI7OztxQkFBZUEsa0I7OztBQUdmLFNBQVNBLGtCQUFULENBQTRCQyxJQUE1QixFQUEwRTtBQUFBLE1BQXhDQyxVQUF3Qyx5REFBM0IsVUFBMkI7QUFBQSxNQUFmQyxNQUFlLHlEQUFOLElBQU07O0FBQ3hFLE1BQU1DLE1BQU1ILEtBQUtJLGFBQWpCO0FBQ0EsU0FBT0QsSUFBSUosa0JBQUosQ0FBdUJNLElBQXZCLENBQTRCRixHQUE1QixFQUFpQ0gsSUFBakMsRUFBdUNDLFVBQXZDLEVBQW1EQyxNQUFuRCxDQUFQO0FBQ0QiLCJmaWxlIjoiYnVpbHRpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5vZGVJdGVyYXRvclxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU5vZGVJdGVyYXRvcihyb290LCB3aGF0VG9TaG93ID0gMHhGRkZGRkZGRiwgZmlsdGVyID0gbnVsbCkge1xuICBjb25zdCBkb2MgPSByb290Lm93bmVyRG9jdW1lbnRcbiAgcmV0dXJuIGRvYy5jcmVhdGVOb2RlSXRlcmF0b3IuY2FsbChkb2MsIHJvb3QsIHdoYXRUb1Nob3csIGZpbHRlcilcbn1cbiJdfQ==

/***/ }),

/***/ "../node_modules/dom-node-iterator/lib/implementation.js":
/*!***************************************************************!*\
  !*** ../node_modules/dom-node-iterator/lib/implementation.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports['default'] = createNodeIterator;


function createNodeIterator(root) {
  var whatToShow = arguments.length <= 1 || arguments[1] === undefined ? 0xFFFFFFFF : arguments[1];
  var filter = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  return new NodeIterator(root, whatToShow, filter);
}

var NodeIterator = function () {
  function NodeIterator(root, whatToShow, filter) {
    _classCallCheck(this, NodeIterator);

    this.root = root;
    this.whatToShow = whatToShow;
    this.filter = filter;
    this.referenceNode = root;
    this.pointerBeforeReferenceNode = true;
    this._filter = function (node) {
      return filter ? filter(node) === 1 : true;
    };
    this._show = function (node) {
      return whatToShow >> node.nodeType - 1 & 1 === 1;
    };
  }

  NodeIterator.prototype.nextNode = function nextNode() {
    var before = this.pointerBeforeReferenceNode;
    this.pointerBeforeReferenceNode = false;

    var node = this.referenceNode;
    if (before && this._show(node) && this._filter(node)) return node;

    do {
      if (node.firstChild) {
        node = node.firstChild;
        continue;
      }

      do {
        if (node === this.root) return null;
        if (node.nextSibling) break;
        node = node.parentNode;
      } while (node);

      node = node.nextSibling;
    } while (!this._show(node) || !this._filter(node));

    this.referenceNode = node;
    this.pointerBeforeReferenceNode = false;
    return node;
  };

  NodeIterator.prototype.previousNode = function previousNode() {
    var before = this.pointerBeforeReferenceNode;
    this.pointerBeforeReferenceNode = true;

    var node = this.referenceNode;
    if (!before && this._show(node) && this._filter(node)) return node;

    do {
      if (node === this.root) return null;

      if (node.previousSibling) {
        node = node.previousSibling;
        while (node.lastChild) {
          node = node.lastChild;
        }continue;
      }

      node = node.parentNode;
    } while (!this._show(node) || !this._filter(node));

    this.referenceNode = node;
    this.pointerBeforeReferenceNode = true;
    return node;
  };

  NodeIterator.prototype.toString = function toString() {
    return '[object NodeIterator]';
  };

  return NodeIterator;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbXBsZW1lbnRhdGlvbi5qcyJdLCJuYW1lcyI6WyJjcmVhdGVOb2RlSXRlcmF0b3IiLCJyb290Iiwid2hhdFRvU2hvdyIsImZpbHRlciIsIk5vZGVJdGVyYXRvciIsInJlZmVyZW5jZU5vZGUiLCJwb2ludGVyQmVmb3JlUmVmZXJlbmNlTm9kZSIsIl9maWx0ZXIiLCJub2RlIiwiX3Nob3ciLCJub2RlVHlwZSIsIm5leHROb2RlIiwiYmVmb3JlIiwiZmlyc3RDaGlsZCIsIm5leHRTaWJsaW5nIiwicGFyZW50Tm9kZSIsInByZXZpb3VzTm9kZSIsInByZXZpb3VzU2libGluZyIsImxhc3RDaGlsZCIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7cUJBQWVBLGtCOzs7QUFHZixTQUFTQSxrQkFBVCxDQUE0QkMsSUFBNUIsRUFBMEU7QUFBQSxNQUF4Q0MsVUFBd0MseURBQTNCLFVBQTJCO0FBQUEsTUFBZkMsTUFBZSx5REFBTixJQUFNOztBQUN4RSxTQUFPLElBQUlDLFlBQUosQ0FBaUJILElBQWpCLEVBQXVCQyxVQUF2QixFQUFtQ0MsTUFBbkMsQ0FBUDtBQUNEOztJQUdLQyxZO0FBQ0osd0JBQVlILElBQVosRUFBa0JDLFVBQWxCLEVBQThCQyxNQUE5QixFQUFzQztBQUFBOztBQUNwQyxTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtFLGFBQUwsR0FBcUJKLElBQXJCO0FBQ0EsU0FBS0ssMEJBQUwsR0FBa0MsSUFBbEM7QUFDQSxTQUFLQyxPQUFMLEdBQWUsVUFBQ0MsSUFBRDtBQUFBLGFBQVVMLFNBQVNBLE9BQU9LLElBQVAsTUFBaUIsQ0FBMUIsR0FBOEIsSUFBeEM7QUFBQSxLQUFmO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLFVBQUNELElBQUQ7QUFBQSxhQUFVTixjQUFjTSxLQUFLRSxRQUFMLEdBQWdCLENBQTlCLEdBQWtDLE1BQU0sQ0FBbEQ7QUFBQSxLQUFiO0FBQ0Q7O3lCQUVEQyxRLHVCQUFXO0FBQ1QsUUFBTUMsU0FBUyxLQUFLTiwwQkFBcEI7QUFDQSxTQUFLQSwwQkFBTCxHQUFrQyxLQUFsQzs7QUFFQSxRQUFJRSxPQUFPLEtBQUtILGFBQWhCO0FBQ0EsUUFBSU8sVUFBVSxLQUFLSCxLQUFMLENBQVdELElBQVgsQ0FBVixJQUE4QixLQUFLRCxPQUFMLENBQWFDLElBQWIsQ0FBbEMsRUFBc0QsT0FBT0EsSUFBUDs7QUFFdEQsT0FBRztBQUNELFVBQUlBLEtBQUtLLFVBQVQsRUFBcUI7QUFDbkJMLGVBQU9BLEtBQUtLLFVBQVo7QUFDQTtBQUNEOztBQUVELFNBQUc7QUFDRCxZQUFJTCxTQUFTLEtBQUtQLElBQWxCLEVBQXdCLE9BQU8sSUFBUDtBQUN4QixZQUFJTyxLQUFLTSxXQUFULEVBQXNCO0FBQ3RCTixlQUFPQSxLQUFLTyxVQUFaO0FBQ0QsT0FKRCxRQUlTUCxJQUpUOztBQU1BQSxhQUFPQSxLQUFLTSxXQUFaO0FBQ0QsS0FiRCxRQWFRLENBQUMsS0FBS0wsS0FBTCxDQUFXRCxJQUFYLENBQUQsSUFBcUIsQ0FBQyxLQUFLRCxPQUFMLENBQWFDLElBQWIsQ0FiOUI7O0FBZUEsU0FBS0gsYUFBTCxHQUFxQkcsSUFBckI7QUFDQSxTQUFLRiwwQkFBTCxHQUFrQyxLQUFsQztBQUNBLFdBQU9FLElBQVA7QUFDRCxHOzt5QkFFRFEsWSwyQkFBZTtBQUNiLFFBQU1KLFNBQVMsS0FBS04sMEJBQXBCO0FBQ0EsU0FBS0EsMEJBQUwsR0FBa0MsSUFBbEM7O0FBRUEsUUFBSUUsT0FBTyxLQUFLSCxhQUFoQjtBQUNBLFFBQUksQ0FBQ08sTUFBRCxJQUFXLEtBQUtILEtBQUwsQ0FBV0QsSUFBWCxDQUFYLElBQStCLEtBQUtELE9BQUwsQ0FBYUMsSUFBYixDQUFuQyxFQUF1RCxPQUFPQSxJQUFQOztBQUV2RCxPQUFHO0FBQ0QsVUFBSUEsU0FBUyxLQUFLUCxJQUFsQixFQUF3QixPQUFPLElBQVA7O0FBRXhCLFVBQUlPLEtBQUtTLGVBQVQsRUFBMEI7QUFDeEJULGVBQU9BLEtBQUtTLGVBQVo7QUFDQSxlQUFPVCxLQUFLVSxTQUFaO0FBQXVCVixpQkFBT0EsS0FBS1UsU0FBWjtBQUF2QixTQUNBO0FBQ0Q7O0FBRURWLGFBQU9BLEtBQUtPLFVBQVo7QUFDRCxLQVZELFFBVVEsQ0FBQyxLQUFLTixLQUFMLENBQVdELElBQVgsQ0FBRCxJQUFxQixDQUFDLEtBQUtELE9BQUwsQ0FBYUMsSUFBYixDQVY5Qjs7QUFZQSxTQUFLSCxhQUFMLEdBQXFCRyxJQUFyQjtBQUNBLFNBQUtGLDBCQUFMLEdBQWtDLElBQWxDO0FBQ0EsV0FBT0UsSUFBUDtBQUNELEc7O3lCQUVEVyxRLHVCQUFXO0FBQ1QsV0FBTyx1QkFBUDtBQUNELEciLCJmaWxlIjoiaW1wbGVtZW50YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjcmVhdGVOb2RlSXRlcmF0b3JcblxuXG5mdW5jdGlvbiBjcmVhdGVOb2RlSXRlcmF0b3Iocm9vdCwgd2hhdFRvU2hvdyA9IDB4RkZGRkZGRkYsIGZpbHRlciA9IG51bGwpIHtcbiAgcmV0dXJuIG5ldyBOb2RlSXRlcmF0b3Iocm9vdCwgd2hhdFRvU2hvdywgZmlsdGVyKVxufVxuXG5cbmNsYXNzIE5vZGVJdGVyYXRvciB7XG4gIGNvbnN0cnVjdG9yKHJvb3QsIHdoYXRUb1Nob3csIGZpbHRlcikge1xuICAgIHRoaXMucm9vdCA9IHJvb3RcbiAgICB0aGlzLndoYXRUb1Nob3cgPSB3aGF0VG9TaG93XG4gICAgdGhpcy5maWx0ZXIgPSBmaWx0ZXJcbiAgICB0aGlzLnJlZmVyZW5jZU5vZGUgPSByb290XG4gICAgdGhpcy5wb2ludGVyQmVmb3JlUmVmZXJlbmNlTm9kZSA9IHRydWVcbiAgICB0aGlzLl9maWx0ZXIgPSAobm9kZSkgPT4gZmlsdGVyID8gZmlsdGVyKG5vZGUpID09PSAxIDogdHJ1ZVxuICAgIHRoaXMuX3Nob3cgPSAobm9kZSkgPT4gd2hhdFRvU2hvdyA+PiBub2RlLm5vZGVUeXBlIC0gMSAmIDEgPT09IDFcbiAgfVxuXG4gIG5leHROb2RlKCkge1xuICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMucG9pbnRlckJlZm9yZVJlZmVyZW5jZU5vZGVcbiAgICB0aGlzLnBvaW50ZXJCZWZvcmVSZWZlcmVuY2VOb2RlID0gZmFsc2VcblxuICAgIGxldCBub2RlID0gdGhpcy5yZWZlcmVuY2VOb2RlXG4gICAgaWYgKGJlZm9yZSAmJiB0aGlzLl9zaG93KG5vZGUpICYmIHRoaXMuX2ZpbHRlcihub2RlKSkgcmV0dXJuIG5vZGVcblxuICAgIGRvIHtcbiAgICAgIGlmIChub2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbm9kZSA9IG5vZGUuZmlyc3RDaGlsZFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBkbyB7XG4gICAgICAgIGlmIChub2RlID09PSB0aGlzLnJvb3QpIHJldHVybiBudWxsXG4gICAgICAgIGlmIChub2RlLm5leHRTaWJsaW5nKSBicmVha1xuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlXG4gICAgICB9IHdoaWxlIChub2RlKVxuXG4gICAgICBub2RlID0gbm9kZS5uZXh0U2libGluZ1xuICAgIH0gd2hpbGUoIXRoaXMuX3Nob3cobm9kZSkgfHwgIXRoaXMuX2ZpbHRlcihub2RlKSlcblxuICAgIHRoaXMucmVmZXJlbmNlTm9kZSA9IG5vZGVcbiAgICB0aGlzLnBvaW50ZXJCZWZvcmVSZWZlcmVuY2VOb2RlID0gZmFsc2VcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgcHJldmlvdXNOb2RlKCkge1xuICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMucG9pbnRlckJlZm9yZVJlZmVyZW5jZU5vZGVcbiAgICB0aGlzLnBvaW50ZXJCZWZvcmVSZWZlcmVuY2VOb2RlID0gdHJ1ZVxuXG4gICAgbGV0IG5vZGUgPSB0aGlzLnJlZmVyZW5jZU5vZGVcbiAgICBpZiAoIWJlZm9yZSAmJiB0aGlzLl9zaG93KG5vZGUpICYmIHRoaXMuX2ZpbHRlcihub2RlKSkgcmV0dXJuIG5vZGVcblxuICAgIGRvIHtcbiAgICAgIGlmIChub2RlID09PSB0aGlzLnJvb3QpIHJldHVybiBudWxsXG5cbiAgICAgIGlmIChub2RlLnByZXZpb3VzU2libGluZykge1xuICAgICAgICBub2RlID0gbm9kZS5wcmV2aW91c1NpYmxpbmdcbiAgICAgICAgd2hpbGUgKG5vZGUubGFzdENoaWxkKSBub2RlID0gbm9kZS5sYXN0Q2hpbGRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgIH0gd2hpbGUoIXRoaXMuX3Nob3cobm9kZSkgfHwgIXRoaXMuX2ZpbHRlcihub2RlKSlcblxuICAgIHRoaXMucmVmZXJlbmNlTm9kZSA9IG5vZGVcbiAgICB0aGlzLnBvaW50ZXJCZWZvcmVSZWZlcmVuY2VOb2RlID0gdHJ1ZVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgTm9kZUl0ZXJhdG9yXSdcbiAgfVxufVxuIl19

/***/ }),

/***/ "../node_modules/dom-node-iterator/lib/index.js":
/*!******************************************************!*\
  !*** ../node_modules/dom-node-iterator/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _polyfill = __webpack_require__(/*! ./polyfill */ "../node_modules/dom-node-iterator/lib/polyfill.js");

var _polyfill2 = _interopRequireDefault(_polyfill);

var _implementation = __webpack_require__(/*! ./implementation */ "../node_modules/dom-node-iterator/lib/implementation.js");

var _implementation2 = _interopRequireDefault(_implementation);

var _shim = __webpack_require__(/*! ./shim */ "../node_modules/dom-node-iterator/lib/shim.js");

var _shim2 = _interopRequireDefault(_shim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var polyfill = (0, _polyfill2['default'])();
polyfill.implementation = _implementation2['default'];
polyfill.shim = _shim2['default'];

exports['default'] = polyfill;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwb2x5ZmlsbCIsImltcGxlbWVudGF0aW9uIiwic2hpbSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVyw0QkFBakI7QUFDQUEsU0FBU0MsY0FBVDtBQUNBRCxTQUFTRSxJQUFUOztxQkFFZUYsUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmF1bHQgYXMgZ2V0UG9seWZpbGwgfSBmcm9tICcuL3BvbHlmaWxsJ1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBpbXBsZW1lbnRhdGlvbiB9IGZyb20gJy4vaW1wbGVtZW50YXRpb24nXG5pbXBvcnQgeyBkZWZhdWx0IGFzIHNoaW0gfSBmcm9tICcuL3NoaW0nXG5cbmNvbnN0IHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKVxucG9seWZpbGwuaW1wbGVtZW50YXRpb24gPSBpbXBsZW1lbnRhdGlvblxucG9seWZpbGwuc2hpbSA9IHNoaW1cblxuZXhwb3J0IGRlZmF1bHQgcG9seWZpbGxcbiJdfQ==

/***/ }),

/***/ "../node_modules/dom-node-iterator/lib/polyfill.js":
/*!*********************************************************!*\
  !*** ../node_modules/dom-node-iterator/lib/polyfill.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = getPolyfill;

var _adapter = __webpack_require__(/*! ./adapter */ "../node_modules/dom-node-iterator/lib/adapter.js");

var _adapter2 = _interopRequireDefault(_adapter);

var _builtin = __webpack_require__(/*! ./builtin */ "../node_modules/dom-node-iterator/lib/builtin.js");

var _builtin2 = _interopRequireDefault(_builtin);

var _implementation = __webpack_require__(/*! ./implementation */ "../node_modules/dom-node-iterator/lib/implementation.js");

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getPolyfill() {
  try {
    var doc = typeof document === 'undefined' ? {} : document;
    var iter = (0, _builtin2['default'])(doc, 0xFFFFFFFF, null, false);
    if (iter.referenceNode === doc) return _builtin2['default'];
    return _adapter2['default'];
  } catch (_) {
    return _implementation2['default'];
  }
} /*global document*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wb2x5ZmlsbC5qcyJdLCJuYW1lcyI6WyJnZXRQb2x5ZmlsbCIsImRvYyIsImRvY3VtZW50IiwiaXRlciIsInJlZmVyZW5jZU5vZGUiLCJfIl0sIm1hcHBpbmdzIjoiOzs7cUJBTXdCQSxXOztBQUx4Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdlLFNBQVNBLFdBQVQsR0FBdUI7QUFDcEMsTUFBSTtBQUNGLFFBQU1DLE1BQU0sT0FBT0MsUUFBUCxLQUFxQixXQUFyQixHQUFtQyxFQUFuQyxHQUF3Q0EsUUFBcEQ7QUFDQSxRQUFNQyxPQUFPLDBCQUFRRixHQUFSLEVBQWEsVUFBYixFQUF5QixJQUF6QixFQUErQixLQUEvQixDQUFiO0FBQ0EsUUFBSUUsS0FBS0MsYUFBTCxLQUF1QkgsR0FBM0IsRUFBZ0M7QUFDaEM7QUFDRCxHQUxELENBS0UsT0FBT0ksQ0FBUCxFQUFVO0FBQ1Y7QUFDRDtBQUNGLEMsQ0FmRCIsImZpbGUiOiJwb2x5ZmlsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qZ2xvYmFsIGRvY3VtZW50Ki9cbmltcG9ydCBhZGFwdGVyIGZyb20gJy4vYWRhcHRlcidcbmltcG9ydCBidWlsdGluIGZyb20gJy4vYnVpbHRpbidcbmltcG9ydCBpbXBsZW1lbnRhdGlvbiBmcm9tICcuL2ltcGxlbWVudGF0aW9uJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBvbHlmaWxsKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGRvYyA9IHR5cGVvZihkb2N1bWVudCkgPT09ICd1bmRlZmluZWQnID8ge30gOiBkb2N1bWVudFxuICAgIGNvbnN0IGl0ZXIgPSBidWlsdGluKGRvYywgMHhGRkZGRkZGRiwgbnVsbCwgZmFsc2UpXG4gICAgaWYgKGl0ZXIucmVmZXJlbmNlTm9kZSA9PT0gZG9jKSByZXR1cm4gYnVpbHRpblxuICAgIHJldHVybiBhZGFwdGVyXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gaW1wbGVtZW50YXRpb25cbiAgfVxufVxuIl19

/***/ }),

/***/ "../node_modules/dom-node-iterator/lib/shim.js":
/*!*****************************************************!*\
  !*** ../node_modules/dom-node-iterator/lib/shim.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = shim;

var _builtin = __webpack_require__(/*! ./builtin */ "../node_modules/dom-node-iterator/lib/builtin.js");

var _builtin2 = _interopRequireDefault(_builtin);

var _polyfill = __webpack_require__(/*! ./polyfill */ "../node_modules/dom-node-iterator/lib/polyfill.js");

var _polyfill2 = _interopRequireDefault(_polyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/*global document*/
function shim() {
  var doc = typeof document === 'undefined' ? {} : document;
  var polyfill = (0, _polyfill2['default'])();
  if (polyfill !== _builtin2['default']) doc.createNodeIterator = polyfill;
  return polyfill;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaGltLmpzIl0sIm5hbWVzIjpbInNoaW0iLCJkb2MiLCJkb2N1bWVudCIsInBvbHlmaWxsIiwiY3JlYXRlTm9kZUl0ZXJhdG9yIl0sIm1hcHBpbmdzIjoiOzs7cUJBS3dCQSxJOztBQUp4Qjs7OztBQUNBOzs7Ozs7QUFGQTtBQUtlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0IsTUFBTUMsTUFBTSxPQUFPQyxRQUFQLEtBQXFCLFdBQXJCLEdBQW1DLEVBQW5DLEdBQXdDQSxRQUFwRDtBQUNBLE1BQU1DLFdBQVcsNEJBQWpCO0FBQ0EsTUFBSUEsaUNBQUosRUFBMEJGLElBQUlHLGtCQUFKLEdBQXlCRCxRQUF6QjtBQUMxQixTQUFPQSxRQUFQO0FBQ0QiLCJmaWxlIjoic2hpbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qZ2xvYmFsIGRvY3VtZW50Ki9cbmltcG9ydCBidWlsdGluIGZyb20gJy4vYnVpbHRpbidcbmltcG9ydCBnZXRQb2x5ZmlsbCBmcm9tICcuL3BvbHlmaWxsJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoaW0oKSB7XG4gIGNvbnN0IGRvYyA9IHR5cGVvZihkb2N1bWVudCkgPT09ICd1bmRlZmluZWQnID8ge30gOiBkb2N1bWVudFxuICBjb25zdCBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKClcbiAgaWYgKHBvbHlmaWxsICE9PSBidWlsdGluKSBkb2MuY3JlYXRlTm9kZUl0ZXJhdG9yID0gcG9seWZpbGxcbiAgcmV0dXJuIHBvbHlmaWxsXG59XG4iXX0=

/***/ }),

/***/ "../node_modules/dom-node-iterator/polyfill.js":
/*!*****************************************************!*\
  !*** ../node_modules/dom-node-iterator/polyfill.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/polyfill */ "../node_modules/dom-node-iterator/lib/polyfill.js")['default'];


/***/ }),

/***/ "../node_modules/dom-node-iterator/shim.js":
/*!*************************************************!*\
  !*** ../node_modules/dom-node-iterator/shim.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/shim */ "../node_modules/dom-node-iterator/lib/shim.js")['default'];


/***/ }),

/***/ "../node_modules/dom-seek/index.js":
/*!*****************************************!*\
  !*** ../node_modules/dom-seek/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib */ "../node_modules/dom-seek/lib/index.js")['default'];


/***/ }),

/***/ "../node_modules/dom-seek/lib/index.js":
/*!*********************************************!*\
  !*** ../node_modules/dom-seek/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = seek;

var _ancestors = __webpack_require__(/*! ancestors */ "../node_modules/ancestors/index.js");

var _ancestors2 = _interopRequireDefault(_ancestors);

var _indexOf = __webpack_require__(/*! index-of */ "../node_modules/index-of/index.js");

var _indexOf2 = _interopRequireDefault(_indexOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var E_SHOW = 'Argument 1 of seek must use filter NodeFilter.SHOW_TEXT.';
var E_WHERE = 'Argument 2 of seek must be a number or a Text Node.';

var SHOW_TEXT = 4;
var TEXT_NODE = 3;

function seek(iter, where) {
  if (iter.whatToShow !== SHOW_TEXT) {
    throw new Error(E_SHOW);
  }

  var count = 0;
  var node = iter.referenceNode;
  var predicates = null;

  if (isNumber(where)) {
    predicates = {
      forward: function forward() {
        return count < where;
      },
      backward: function backward() {
        return count > where;
      }
    };
  } else if (isText(where)) {
    var forward = before(node, where) ? function () {
      return false;
    } : function () {
      return node !== where;
    };
    var backward = function backward() {
      return node != where || !iter.pointerBeforeReferenceNode;
    };
    predicates = { forward: forward, backward: backward };
  } else {
    throw new Error(E_WHERE);
  }

  while (predicates.forward() && (node = iter.nextNode()) !== null) {
    count += node.nodeValue.length;
  }

  while (predicates.backward() && (node = iter.previousNode()) !== null) {
    count -= node.nodeValue.length;
  }

  return count;
}

function isNumber(n) {
  return !isNaN(parseInt(n)) && isFinite(n);
}

function isText(node) {
  return node.nodeType === TEXT_NODE;
}

function before(ref, node) {
  if (ref === node) return false;

  var common = null;
  var left = [ref].concat((0, _ancestors2['default'])(ref)).reverse();
  var right = [node].concat((0, _ancestors2['default'])(node)).reverse();

  while (left[0] === right[0]) {
    common = left.shift();
    right.shift();
  }

  left = left[0];
  right = right[0];

  var l = (0, _indexOf2['default'])(common.childNodes, left);
  var r = (0, _indexOf2['default'])(common.childNodes, right);

  return l > r;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzZWVrIiwiRV9TSE9XIiwiRV9XSEVSRSIsIlNIT1dfVEVYVCIsIlRFWFRfTk9ERSIsIml0ZXIiLCJ3aGVyZSIsIndoYXRUb1Nob3ciLCJFcnJvciIsImNvdW50Iiwibm9kZSIsInJlZmVyZW5jZU5vZGUiLCJwcmVkaWNhdGVzIiwiaXNOdW1iZXIiLCJmb3J3YXJkIiwiYmFja3dhcmQiLCJpc1RleHQiLCJiZWZvcmUiLCJwb2ludGVyQmVmb3JlUmVmZXJlbmNlTm9kZSIsIm5leHROb2RlIiwibm9kZVZhbHVlIiwibGVuZ3RoIiwicHJldmlvdXNOb2RlIiwibiIsImlzTmFOIiwicGFyc2VJbnQiLCJpc0Zpbml0ZSIsIm5vZGVUeXBlIiwicmVmIiwiY29tbW9uIiwibGVmdCIsImNvbmNhdCIsInJldmVyc2UiLCJyaWdodCIsInNoaWZ0IiwibCIsImNoaWxkTm9kZXMiLCJyIl0sIm1hcHBpbmdzIjoiOzs7cUJBVXdCQSxJOztBQVZ4Qjs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQyxTQUFTLDBEQUFmO0FBQ0EsSUFBTUMsVUFBVSxxREFBaEI7O0FBRUEsSUFBTUMsWUFBWSxDQUFsQjtBQUNBLElBQU1DLFlBQVksQ0FBbEI7O0FBR2UsU0FBU0osSUFBVCxDQUFjSyxJQUFkLEVBQW9CQyxLQUFwQixFQUEyQjtBQUN4QyxNQUFJRCxLQUFLRSxVQUFMLEtBQW9CSixTQUF4QixFQUFtQztBQUNqQyxVQUFNLElBQUlLLEtBQUosQ0FBVVAsTUFBVixDQUFOO0FBQ0Q7O0FBRUQsTUFBSVEsUUFBUSxDQUFaO0FBQ0EsTUFBSUMsT0FBT0wsS0FBS00sYUFBaEI7QUFDQSxNQUFJQyxhQUFhLElBQWpCOztBQUVBLE1BQUlDLFNBQVNQLEtBQVQsQ0FBSixFQUFxQjtBQUNuQk0saUJBQWE7QUFDWEUsZUFBUztBQUFBLGVBQU1MLFFBQVFILEtBQWQ7QUFBQSxPQURFO0FBRVhTLGdCQUFVO0FBQUEsZUFBTU4sUUFBUUgsS0FBZDtBQUFBO0FBRkMsS0FBYjtBQUlELEdBTEQsTUFLTyxJQUFJVSxPQUFPVixLQUFQLENBQUosRUFBbUI7QUFDeEIsUUFBSVEsVUFBVUcsT0FBT1AsSUFBUCxFQUFhSixLQUFiLElBQXNCO0FBQUEsYUFBTSxLQUFOO0FBQUEsS0FBdEIsR0FBb0M7QUFBQSxhQUFNSSxTQUFTSixLQUFmO0FBQUEsS0FBbEQ7QUFDQSxRQUFJUyxXQUFXLFNBQVhBLFFBQVc7QUFBQSxhQUFNTCxRQUFRSixLQUFSLElBQWlCLENBQUNELEtBQUthLDBCQUE3QjtBQUFBLEtBQWY7QUFDQU4saUJBQWEsRUFBQ0UsZ0JBQUQsRUFBVUMsa0JBQVYsRUFBYjtBQUNELEdBSk0sTUFJQTtBQUNMLFVBQU0sSUFBSVAsS0FBSixDQUFVTixPQUFWLENBQU47QUFDRDs7QUFFRCxTQUFPVSxXQUFXRSxPQUFYLE1BQXdCLENBQUNKLE9BQU9MLEtBQUtjLFFBQUwsRUFBUixNQUE2QixJQUE1RCxFQUFrRTtBQUNoRVYsYUFBU0MsS0FBS1UsU0FBTCxDQUFlQyxNQUF4QjtBQUNEOztBQUVELFNBQU9ULFdBQVdHLFFBQVgsTUFBeUIsQ0FBQ0wsT0FBT0wsS0FBS2lCLFlBQUwsRUFBUixNQUFpQyxJQUFqRSxFQUF1RTtBQUNyRWIsYUFBU0MsS0FBS1UsU0FBTCxDQUFlQyxNQUF4QjtBQUNEOztBQUVELFNBQU9aLEtBQVA7QUFDRDs7QUFHRCxTQUFTSSxRQUFULENBQWtCVSxDQUFsQixFQUFxQjtBQUNuQixTQUFPLENBQUNDLE1BQU1DLFNBQVNGLENBQVQsQ0FBTixDQUFELElBQXVCRyxTQUFTSCxDQUFULENBQTlCO0FBQ0Q7O0FBR0QsU0FBU1AsTUFBVCxDQUFnQk4sSUFBaEIsRUFBc0I7QUFDcEIsU0FBT0EsS0FBS2lCLFFBQUwsS0FBa0J2QixTQUF6QjtBQUNEOztBQUdELFNBQVNhLE1BQVQsQ0FBZ0JXLEdBQWhCLEVBQXFCbEIsSUFBckIsRUFBMkI7QUFDekIsTUFBSWtCLFFBQVFsQixJQUFaLEVBQWtCLE9BQU8sS0FBUDs7QUFFbEIsTUFBSW1CLFNBQVMsSUFBYjtBQUNBLE1BQUlDLE9BQU8sQ0FBQ0YsR0FBRCxFQUFNRyxNQUFOLENBQWEsNEJBQVVILEdBQVYsQ0FBYixFQUE2QkksT0FBN0IsRUFBWDtBQUNBLE1BQUlDLFFBQVEsQ0FBQ3ZCLElBQUQsRUFBT3FCLE1BQVAsQ0FBYyw0QkFBVXJCLElBQVYsQ0FBZCxFQUErQnNCLE9BQS9CLEVBQVo7O0FBRUEsU0FBT0YsS0FBSyxDQUFMLE1BQVlHLE1BQU0sQ0FBTixDQUFuQixFQUE2QjtBQUMzQkosYUFBU0MsS0FBS0ksS0FBTCxFQUFUO0FBQ0FELFVBQU1DLEtBQU47QUFDRDs7QUFFREosU0FBT0EsS0FBSyxDQUFMLENBQVA7QUFDQUcsVUFBUUEsTUFBTSxDQUFOLENBQVI7O0FBRUEsTUFBSUUsSUFBSSwwQkFBUU4sT0FBT08sVUFBZixFQUEyQk4sSUFBM0IsQ0FBUjtBQUNBLE1BQUlPLElBQUksMEJBQVFSLE9BQU9PLFVBQWYsRUFBMkJILEtBQTNCLENBQVI7O0FBRUEsU0FBT0UsSUFBSUUsQ0FBWDtBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuY2VzdG9ycyBmcm9tICdhbmNlc3RvcnMnXG5pbXBvcnQgaW5kZXhPZiBmcm9tICdpbmRleC1vZidcblxuY29uc3QgRV9TSE9XID0gJ0FyZ3VtZW50IDEgb2Ygc2VlayBtdXN0IHVzZSBmaWx0ZXIgTm9kZUZpbHRlci5TSE9XX1RFWFQuJ1xuY29uc3QgRV9XSEVSRSA9ICdBcmd1bWVudCAyIG9mIHNlZWsgbXVzdCBiZSBhIG51bWJlciBvciBhIFRleHQgTm9kZS4nXG5cbmNvbnN0IFNIT1dfVEVYVCA9IDRcbmNvbnN0IFRFWFRfTk9ERSA9IDNcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWVrKGl0ZXIsIHdoZXJlKSB7XG4gIGlmIChpdGVyLndoYXRUb1Nob3cgIT09IFNIT1dfVEVYVCkge1xuICAgIHRocm93IG5ldyBFcnJvcihFX1NIT1cpXG4gIH1cblxuICBsZXQgY291bnQgPSAwXG4gIGxldCBub2RlID0gaXRlci5yZWZlcmVuY2VOb2RlXG4gIGxldCBwcmVkaWNhdGVzID0gbnVsbFxuXG4gIGlmIChpc051bWJlcih3aGVyZSkpIHtcbiAgICBwcmVkaWNhdGVzID0ge1xuICAgICAgZm9yd2FyZDogKCkgPT4gY291bnQgPCB3aGVyZSxcbiAgICAgIGJhY2t3YXJkOiAoKSA9PiBjb3VudCA+IHdoZXJlLFxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1RleHQod2hlcmUpKSB7XG4gICAgbGV0IGZvcndhcmQgPSBiZWZvcmUobm9kZSwgd2hlcmUpID8gKCkgPT4gZmFsc2UgOiAoKSA9PiBub2RlICE9PSB3aGVyZVxuICAgIGxldCBiYWNrd2FyZCA9ICgpID0+IG5vZGUgIT0gd2hlcmUgfHwgIWl0ZXIucG9pbnRlckJlZm9yZVJlZmVyZW5jZU5vZGVcbiAgICBwcmVkaWNhdGVzID0ge2ZvcndhcmQsIGJhY2t3YXJkfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihFX1dIRVJFKVxuICB9XG5cbiAgd2hpbGUgKHByZWRpY2F0ZXMuZm9yd2FyZCgpICYmIChub2RlID0gaXRlci5uZXh0Tm9kZSgpKSAhPT0gbnVsbCkge1xuICAgIGNvdW50ICs9IG5vZGUubm9kZVZhbHVlLmxlbmd0aFxuICB9XG5cbiAgd2hpbGUgKHByZWRpY2F0ZXMuYmFja3dhcmQoKSAmJiAobm9kZSA9IGl0ZXIucHJldmlvdXNOb2RlKCkpICE9PSBudWxsKSB7XG4gICAgY291bnQgLT0gbm9kZS5ub2RlVmFsdWUubGVuZ3RoXG4gIH1cblxuICByZXR1cm4gY291bnRcbn1cblxuXG5mdW5jdGlvbiBpc051bWJlcihuKSB7XG4gIHJldHVybiAhaXNOYU4ocGFyc2VJbnQobikpICYmIGlzRmluaXRlKG4pXG59XG5cblxuZnVuY3Rpb24gaXNUZXh0KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IFRFWFRfTk9ERVxufVxuXG5cbmZ1bmN0aW9uIGJlZm9yZShyZWYsIG5vZGUpIHtcbiAgaWYgKHJlZiA9PT0gbm9kZSkgcmV0dXJuIGZhbHNlXG5cbiAgbGV0IGNvbW1vbiA9IG51bGxcbiAgbGV0IGxlZnQgPSBbcmVmXS5jb25jYXQoYW5jZXN0b3JzKHJlZikpLnJldmVyc2UoKVxuICBsZXQgcmlnaHQgPSBbbm9kZV0uY29uY2F0KGFuY2VzdG9ycyhub2RlKSkucmV2ZXJzZSgpXG5cbiAgd2hpbGUgKGxlZnRbMF0gPT09IHJpZ2h0WzBdKSB7XG4gICAgY29tbW9uID0gbGVmdC5zaGlmdCgpXG4gICAgcmlnaHQuc2hpZnQoKVxuICB9XG5cbiAgbGVmdCA9IGxlZnRbMF1cbiAgcmlnaHQgPSByaWdodFswXVxuXG4gIGxldCBsID0gaW5kZXhPZihjb21tb24uY2hpbGROb2RlcywgbGVmdClcbiAgbGV0IHIgPSBpbmRleE9mKGNvbW1vbi5jaGlsZE5vZGVzLCByaWdodClcblxuICByZXR1cm4gbCA+IHJcbn1cbiJdfQ==

/***/ }),

/***/ "../node_modules/index-of/index.js":
/*!*****************************************!*\
  !*** ../node_modules/index-of/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * index-of <https://github.com/jonschlinkert/index-of>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */



module.exports = function indexOf(arr, ele, start) {
  start = start || 0;
  var idx = -1;

  if (arr == null) return idx;
  var len = arr.length;
  var i = start < 0
    ? (len + start)
    : start;

  if (i >= arr.length) {
    return -1;
  }

  while (i < len) {
    if (arr[i] === ele) {
      return i;
    }
    i++;
  }

  return -1;
};


/***/ }),

/***/ "../node_modules/regenerator-runtime/runtime.js":
/*!******************************************************!*\
  !*** ../node_modules/regenerator-runtime/runtime.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../node_modules/xtend/immutable.js":
/*!******************************************!*\
  !*** ../node_modules/xtend/immutable.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "../packages/dom/src/cartesian.js":
/*!****************************************!*\
  !*** ../packages/dom/src/cartesian.js ***!
  \****************************************/
/*! exports provided: product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "product", function() { return product; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime-corejs3/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ "../node_modules/@babel/runtime-corejs3/core-js-stable/promise.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_some__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/some */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/some.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_some__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_some__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "../node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/symbol/async-iterator */ "../node_modules/@babel/runtime-corejs3/core-js-stable/symbol/async-iterator.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator */ "../node_modules/@babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator */ "../node_modules/@babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncIterator */ "../node_modules/@babel/runtime-corejs3/helpers/esm/asyncIterator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncGeneratorDelegate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncGeneratorDelegate */ "../node_modules/@babel/runtime-corejs3/helpers/esm/asyncGeneratorDelegate.js");
/* harmony import */ var cartesian__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! cartesian */ "../node_modules/cartesian/index.js");
/* harmony import */ var cartesian__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(cartesian__WEBPACK_IMPORTED_MODULE_13__);
/**
 * @license
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */














function product() {
  return _product.apply(this, arguments);
}

function _product() {
  _product = Object(_babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee3() {
    var _len,
        iterables,
        _key,
        iterators,
        logs,
        nextValuePromises,
        _loop,
        _ret,
        _args4 = arguments;

    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee3$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            for (_len = _args4.length, iterables = new Array(_len), _key = 0; _key < _len; _key++) {
              iterables[_key] = _args4[_key];
            }

            // We listen to all iterators in parallel, while logging all the values they
            // produce. Whenever an iterator produces a value, we produce and yield all
            // combinations of that value with the logged values from other iterators.
            // Every combination is thus made exactly once, and as soon as it is known.
            iterators = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_8___default()(iterables).call(iterables, function (iterable) {
              return iterable[_babel_runtime_corejs3_core_js_stable_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_7___default.a]();
            }); // Initialise an empty log for each iterable.

            logs = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_8___default()(iterables).call(iterables, function () {
              return [];
            });
            nextValuePromises = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_8___default()(iterators).call(iterators, function (iterator, iterableNr) {
              return iterator.next().then( /*#__PURE__*/function () {
                var _ref = Object(_babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee(_ref2) {
                  var value, done;
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          value = _ref2.value, done = _ref2.done;
                          _context.next = 3;
                          return value;

                        case 3:
                          _context.t0 = _context.sent;
                          _context.t1 = done;
                          return _context.abrupt("return", {
                            value: _context.t0,
                            done: _context.t1
                          });

                        case 6:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }()).then( // Label the result with iterableNr, to know which iterable produced
              // this value after Promise.race below.
              function (_ref3) {
                var value = _ref3.value,
                    done = _ref3.done;
                return {
                  value: value,
                  done: done,
                  iterableNr: iterableNr
                };
              });
            }); // Keep listening as long as any of the iterables is not yet exhausted.

            _loop = /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _loop() {
              var _context2;

              var _ref4, value, done, iterableNr, arrays, combinations;

              return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _loop$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_10__["default"])(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_3___default.a.race(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(nextValuePromises).call(nextValuePromises, function (p) {
                        return p !== null;
                      })));

                    case 2:
                      _ref4 = _context4.sent;
                      value = _ref4.value;
                      done = _ref4.done;
                      iterableNr = _ref4.iterableNr;

                      if (!done) {
                        _context4.next = 9;
                        break;
                      }

                      nextValuePromises[iterableNr] = null;
                      return _context4.abrupt("return", "continue");

                    case 9:
                      // Produce all combinations of the received value with the logged values
                      // from the other iterables.
                      arrays = Object(_babel_runtime_corejs3_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(logs);
                      arrays[iterableNr] = [value];
                      combinations = cartesian__WEBPACK_IMPORTED_MODULE_13___default()(arrays); // Append the received value to the right log.

                      logs[iterableNr] = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = []).call(_context2, Object(_babel_runtime_corejs3_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(logs[iterableNr]), [value]); // Start listening for the next value of this iterable.

                      nextValuePromises[iterableNr] = iterators[iterableNr].next().then( /*#__PURE__*/function () {
                        var _ref5 = Object(_babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2(_ref6) {
                          var value, done;
                          return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  value = _ref6.value, done = _ref6.done;
                                  _context3.next = 3;
                                  return value;

                                case 3:
                                  _context3.t0 = _context3.sent;
                                  _context3.t1 = done;
                                  return _context3.abrupt("return", {
                                    value: _context3.t0,
                                    done: _context3.t1
                                  });

                                case 6:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee2);
                        }));

                        return function (_x2) {
                          return _ref5.apply(this, arguments);
                        };
                      }()).then(function (_ref7) {
                        var value = _ref7.value,
                            done = _ref7.done;
                        return {
                          value: value,
                          done: done,
                          iterableNr: iterableNr
                        };
                      }); // Yield each of the produced combinations separately.

                      return _context4.delegateYield(Object(_babel_runtime_corejs3_helpers_esm_asyncGeneratorDelegate__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_11__["default"])(combinations), _babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_10__["default"]), "t0", 15);

                    case 15:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _loop);
            });

          case 5:
            if (!_babel_runtime_corejs3_core_js_stable_instance_some__WEBPACK_IMPORTED_MODULE_4___default()(nextValuePromises).call(nextValuePromises, function (p) {
              return p !== null;
            })) {
              _context5.next = 12;
              break;
            }

            return _context5.delegateYield(_loop(), "t0", 7);

          case 7:
            _ret = _context5.t0;

            if (!(_ret === "continue")) {
              _context5.next = 10;
              break;
            }

            return _context5.abrupt("continue", 5);

          case 10:
            _context5.next = 5;
            break;

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee3);
  }));
  return _product.apply(this, arguments);
}

/***/ }),

/***/ "../packages/dom/src/css.js":
/*!**********************************!*\
  !*** ../packages/dom/src/css.js ***!
  \**********************************/
/*! exports provided: createCssSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCssSelector", function() { return createCssSelector; });
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "../node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator */ "../node_modules/@babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator */ "../node_modules/@babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncIterator */ "../node_modules/@babel/runtime-corejs3/helpers/esm/asyncIterator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncGeneratorDelegate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncGeneratorDelegate */ "../node_modules/@babel/runtime-corejs3/helpers/esm/asyncGeneratorDelegate.js");
/**
 * @license
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */





function createCssSelector(selector) {
  return (/*#__PURE__*/function () {
      var _matchAll = Object(_babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(scope) {
        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.delegateYield(Object(_babel_runtime_corejs3_helpers_esm_asyncGeneratorDelegate__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_3__["default"])(scope.querySelectorAll(selector.value)), _babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_2__["default"]), "t0", 1);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function matchAll(_x) {
        return _matchAll.apply(this, arguments);
      }

      return matchAll;
    }()
  );
}

/***/ }),

/***/ "../packages/dom/src/highlight-range.js":
/*!**********************************************!*\
  !*** ../packages/dom/src/highlight-range.js ***!
  \**********************************************/
/*! exports provided: highlightRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightRange", function() { return highlightRange; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator */ "../node_modules/@babel/runtime-corejs3/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @license
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



// Wrap each text node in a given DOM Range with a <mark> or other element.
// Breaks start and/or end node if needed.
// Returns a function that cleans up the created highlight (not a perfect undo: split text nodes are
// not merged again).
//
// Parameters:
// - range: a DOM Range object. Note that as highlighting modifies the DOM, the range may be
//   unusable afterwards
// - tagName: the element used to wrap text nodes. Defaults to 'mark'.
// - attributes: an Object defining any attributes to be set on the wrapper elements.
function highlightRange(range) {
  var tagName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'mark';
  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (range.collapsed) return; // First put all nodes in an array (splits start and end nodes if needed)

  var nodes = textNodesInRange(range); // Highlight each node

  var highlightElements = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(nodes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var node = _step.value;
      var highlightElement = wrapNodeInHighlight(node, tagName, attributes);
      highlightElements.push(highlightElement);
    } // Return a function that cleans up the highlightElements.

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  function removeHighlights() {
    // Remove each of the created highlightElements.
    for (var highlightIdx in highlightElements) {
      removeHighlight(highlightElements[highlightIdx]);
    }
  }

  return removeHighlights;
} // Return an array of the text nodes in the range. Split the start and end nodes if required.

function textNodesInRange(range) {
  // If the start or end node is a text node and only partly in the range, split it.
  if (range.startContainer.nodeType === Node.TEXT_NODE && range.startOffset > 0) {
    var endOffset = range.endOffset; // (this may get lost when the splitting the node)

    var createdNode = range.startContainer.splitText(range.startOffset);

    if (range.endContainer === range.startContainer) {
      // If the end was in the same container, it will now be in the newly created node.
      range.setEnd(createdNode, endOffset - range.startOffset);
    }

    range.setStart(createdNode, 0);
  }

  if (range.endContainer.nodeType === Node.TEXT_NODE && range.endOffset < range.endContainer.length) {
    range.endContainer.splitText(range.endOffset);
  } // Collect the text nodes.


  var walker = range.startContainer.ownerDocument.createTreeWalker(range.commonAncestorContainer, NodeFilter.SHOW_TEXT, function (node) {
    return range.intersectsNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
  });
  walker.currentNode = range.startContainer; // // Optimise by skipping nodes that are explicitly outside the range.
  // const NodeTypesWithCharacterOffset = [
  //  Node.TEXT_NODE,
  //  Node.PROCESSING_INSTRUCTION_NODE,
  //  Node.COMMENT_NODE,
  // ];
  // if (!NodeTypesWithCharacterOffset.includes(range.startContainer.nodeType)) {
  //   if (range.startOffset < range.startContainer.childNodes.length) {
  //     walker.currentNode = range.startContainer.childNodes[range.startOffset];
  //   } else {
  //     walker.nextSibling(); // TODO verify this is correct.
  //   }
  // }

  var nodes = [];
  if (walker.currentNode.nodeType === Node.TEXT_NODE) nodes.push(walker.currentNode);

  while (walker.nextNode() && range.comparePoint(walker.currentNode, 0) !== 1) {
    nodes.push(walker.currentNode);
  }

  return nodes;
} // Replace [node] with <tagName ...attributes>[node]</tagName>


function wrapNodeInHighlight(node, tagName, attributes) {
  var _context;

  var highlightElement = node.ownerDocument.createElement(tagName);

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(_context = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(attributes)).call(_context, function (key) {
    highlightElement.setAttribute(key, attributes[key]);
  });

  var tempRange = node.ownerDocument.createRange();
  tempRange.selectNode(node);
  tempRange.surroundContents(highlightElement);
  return highlightElement;
} // Remove a highlight element created with wrapNodeInHighlight.


function removeHighlight(highlightElement) {
  if (highlightElement.childNodes.length === 1) {
    highlightElement.parentNode.replaceChild(highlightElement.firstChild, highlightElement);
  } else {
    // If the highlight somehow contains multiple nodes now, move them all.
    while (highlightElement.firstChild) {
      highlightElement.parentNode.insertBefore(highlightElement.firstChild, highlightElement);
    }

    highlightElement.remove();
  }
}

/***/ }),

/***/ "../packages/dom/src/index.js":
/*!************************************!*\
  !*** ../packages/dom/src/index.js ***!
  \************************************/
/*! exports provided: createCssSelector, createRangeSelectorCreator, createTextQuoteSelector, describeTextQuote, highlightRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css */ "../packages/dom/src/css.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCssSelector", function() { return _css__WEBPACK_IMPORTED_MODULE_0__["createCssSelector"]; });

/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./range */ "../packages/dom/src/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRangeSelectorCreator", function() { return _range__WEBPACK_IMPORTED_MODULE_1__["createRangeSelectorCreator"]; });

/* harmony import */ var _text_quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-quote */ "../packages/dom/src/text-quote.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTextQuoteSelector", function() { return _text_quote__WEBPACK_IMPORTED_MODULE_2__["createTextQuoteSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "describeTextQuote", function() { return _text_quote__WEBPACK_IMPORTED_MODULE_2__["describeTextQuote"]; });

/* harmony import */ var _highlight_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highlight-range */ "../packages/dom/src/highlight-range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "highlightRange", function() { return _highlight_range__WEBPACK_IMPORTED_MODULE_3__["highlightRange"]; });

/**
 * @license
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */





/***/ }),

/***/ "../packages/dom/src/range.js":
/*!************************************!*\
  !*** ../packages/dom/src/range.js ***!
  \************************************/
/*! exports provided: createRangeSelectorCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRangeSelectorCreator", function() { return createRangeSelectorCreator; });
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "../node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator */ "../node_modules/@babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator */ "../node_modules/@babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncIterator */ "../node_modules/@babel/runtime-corejs3/helpers/esm/asyncIterator.js");
/* harmony import */ var _scope_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scope.js */ "../packages/dom/src/scope.js");
/* harmony import */ var _cartesian_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cartesian.js */ "../packages/dom/src/cartesian.js");
/**
 * @license
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */







function createRangeSelectorCreator(createSelector) {
  return function createRangeSelector(selector) {
    var startSelector = createSelector(selector.startSelector);
    var endSelector = createSelector(selector.endSelector);
    return (/*#__PURE__*/function () {
        var _matchAll = Object(_babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(scope) {
          var document, startMatches, endMatches, pairs, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, _value2, _value3, start, end, result;

          return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  document = Object(_scope_js__WEBPACK_IMPORTED_MODULE_5__["ownerDocument"])(scope);
                  startMatches = startSelector(scope);
                  endMatches = endSelector(scope);
                  pairs = Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_6__["product"])(startMatches, endMatches);
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _context.prev = 6;
                  _iterator = Object(_babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_4__["default"])(pairs);

                case 8:
                  _context.next = 10;
                  return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator.next());

                case 10:
                  _step = _context.sent;
                  _iteratorNormalCompletion = _step.done;
                  _context.next = 14;
                  return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(_step.value);

                case 14:
                  _value = _context.sent;

                  if (_iteratorNormalCompletion) {
                    _context.next = 26;
                    break;
                  }

                  _value2 = _value, _value3 = Object(_babel_runtime_corejs3_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_value2, 2), start = _value3[0], end = _value3[1];
                  result = document.createRange();
                  result.setStart(start.endContainer, start.endOffset);
                  result.setEnd(end.startContainer, end.startOffset);

                  if (result.collapsed) {
                    _context.next = 23;
                    break;
                  }

                  _context.next = 23;
                  return result;

                case 23:
                  _iteratorNormalCompletion = true;
                  _context.next = 8;
                  break;

                case 26:
                  _context.next = 32;
                  break;

                case 28:
                  _context.prev = 28;
                  _context.t0 = _context["catch"](6);
                  _didIteratorError = true;
                  _iteratorError = _context.t0;

                case 32:
                  _context.prev = 32;
                  _context.prev = 33;

                  if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
                    _context.next = 37;
                    break;
                  }

                  _context.next = 37;
                  return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator.return());

                case 37:
                  _context.prev = 37;

                  if (!_didIteratorError) {
                    _context.next = 40;
                    break;
                  }

                  throw _iteratorError;

                case 40:
                  return _context.finish(37);

                case 41:
                  return _context.finish(32);

                case 42:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[6, 28, 32, 42], [33,, 37, 41]]);
        }));

        function matchAll(_x) {
          return _matchAll.apply(this, arguments);
        }

        return matchAll;
      }()
    );
  };
}

/***/ }),

/***/ "../packages/dom/src/scope.js":
/*!************************************!*\
  !*** ../packages/dom/src/scope.js ***!
  \************************************/
/*! exports provided: ownerDocument, rangeFromScope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ownerDocument", function() { return ownerDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeFromScope", function() { return rangeFromScope; });
/**
 * @license
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function ownerDocument(scope) {
  if ('commonAncestorContainer' in scope) {
    return scope.commonAncestorContainer.ownerDocument;
  }

  return scope.ownerDocument;
}
function rangeFromScope(scope) {
  if ('commonAncestorContainer' in scope) {
    return scope;
  }

  var document = scope.ownerDocument;
  var range = document.createRange();
  range.selectNodeContents(scope);
  return range;
}

/***/ }),

/***/ "../packages/dom/src/text-quote.js":
/*!*****************************************!*\
  !*** ../packages/dom/src/text-quote.js ***!
  \*****************************************/
/*! exports provided: createTextQuoteSelector, describeTextQuote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextQuoteSelector", function() { return createTextQuoteSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "describeTextQuote", function() { return describeTextQuote; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_every__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/every */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/every.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_every__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_every__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/typeof */ "../node_modules/@babel/runtime-corejs3/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator */ "../node_modules/@babel/runtime-corejs3/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_flat_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/flat-map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/flat-map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_flat_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_flat_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "../node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/index-of */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncIterator */ "../node_modules/@babel/runtime-corejs3/helpers/esm/asyncIterator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator */ "../node_modules/@babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator */ "../node_modules/@babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator.js");
/* harmony import */ var dom_node_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! dom-node-iterator */ "../node_modules/dom-node-iterator/index.js");
/* harmony import */ var dom_node_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(dom_node_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var dom_seek__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dom-seek */ "../node_modules/dom-seek/index.js");
/* harmony import */ var dom_seek__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(dom_seek__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _scope_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./scope.js */ "../packages/dom/src/scope.js");
/**
 * @license
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */















 // Node constants

var TEXT_NODE = 3; // NodeFilter constants

var SHOW_TEXT = 4;

function firstTextNodeInRange(range) {
  var startContainer = range.startContainer;
  if (startContainer.nodeType === TEXT_NODE) return startContainer;
  var root = range.commonAncestorContainer;
  var iter = dom_node_iterator__WEBPACK_IMPORTED_MODULE_13___default()(root, SHOW_TEXT);
  return iter.nextNode();
}

function createTextQuoteSelector(selector) {
  return (/*#__PURE__*/function () {
      var _matchAll = Object(_babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_12__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee(scope) {
        var document, range, root, text, exact, prefix, suffix, pattern, iter, fromIndex, referenceNodeIndex, patternStartIndex, match, matchStartIndex, matchEndIndex;
        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                document = Object(_scope_js__WEBPACK_IMPORTED_MODULE_15__["ownerDocument"])(scope);
                range = Object(_scope_js__WEBPACK_IMPORTED_MODULE_15__["rangeFromScope"])(scope);
                root = range.commonAncestorContainer;
                text = range.toString();
                exact = selector.exact;
                prefix = selector.prefix || '';
                suffix = selector.suffix || '';
                pattern = prefix + exact + suffix;
                iter = dom_node_iterator__WEBPACK_IMPORTED_MODULE_13___default()(root, SHOW_TEXT);
                fromIndex = 0;
                referenceNodeIndex = 0;

                if (range.startContainer.nodeType === TEXT_NODE) {
                  referenceNodeIndex -= range.startOffset;
                }

              case 12:
                if (!(fromIndex < text.length)) {
                  _context.next = 31;
                  break;
                }

                patternStartIndex = _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_9___default()(text).call(text, pattern, fromIndex);

                if (!(patternStartIndex === -1)) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt("return");

              case 16:
                match = document.createRange();
                matchStartIndex = patternStartIndex + prefix.length;
                matchEndIndex = matchStartIndex + exact.length; // Seek to the start of the match.

                referenceNodeIndex += dom_seek__WEBPACK_IMPORTED_MODULE_14___default()(iter, matchStartIndex - referenceNodeIndex); // Normalize the reference to the start of the match.

                if (!iter.pointerBeforeReferenceNode) {
                  // Peek forward and skip over any empty nodes.
                  if (iter.nextNode()) {
                    while (iter.referenceNode.nodeValue.length === 0) {
                      iter.nextNode();
                    } // The iterator now points to the end of the reference node.
                    // Move the iterator back to the start of the reference node.


                    iter.previousNode();
                  }
                } // Record the start container and offset.


                match.setStart(iter.referenceNode, matchStartIndex - referenceNodeIndex); // Seek to the end of the match.

                referenceNodeIndex += dom_seek__WEBPACK_IMPORTED_MODULE_14___default()(iter, matchEndIndex - referenceNodeIndex); // Normalize the reference to the end of the match.

                if (!iter.pointerBeforeReferenceNode) {
                  // Peek forward and skip over any empty nodes.
                  if (iter.nextNode()) {
                    while (iter.referenceNode.nodeValue.length === 0) {
                      iter.nextNode();
                    } // The iterator now points to the end of the reference node.
                    // Move the iterator back to the start of the reference node.


                    iter.previousNode();
                  } // Maybe seek backwards to the start of the node.


                  referenceNodeIndex += dom_seek__WEBPACK_IMPORTED_MODULE_14___default()(iter, iter.referenceNode);
                } // Record the end container and offset.


                match.setEnd(iter.referenceNode, matchEndIndex - referenceNodeIndex); // Yield the match.

                _context.next = 27;
                return match;

              case 27:
                // Advance the search forward.
                fromIndex = matchStartIndex + 1;
                referenceNodeIndex += dom_seek__WEBPACK_IMPORTED_MODULE_14___default()(iter, fromIndex - referenceNodeIndex);
                _context.next = 12;
                break;

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function matchAll(_x) {
        return _matchAll.apply(this, arguments);
      }

      return matchAll;
    }()
  );
}
function describeTextQuote(_x2) {
  return _describeTextQuote.apply(this, arguments);
}

function _describeTextQuote() {
  _describeTextQuote = Object(_babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee2(range) {
    var scope,
        root,
        text,
        exact,
        selector,
        iter,
        startNode,
        startIndex,
        endIndex,
        affixLengthPairs,
        _iteratorNormalCompletion,
        _didIteratorError,
        _iteratorError,
        _iterator,
        _step,
        _value,
        match,
        matchIter,
        matchStartNode,
        matchStartIndex,
        matchEndIndex,
        prefixLength,
        suffixLength,
        result,
        _minimalSolution,
        _minimalSolution2,
        _prefixLength,
        _suffixLength,
        _args2 = arguments;

    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            scope = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : null;
            scope = Object(_scope_js__WEBPACK_IMPORTED_MODULE_15__["rangeFromScope"])(scope || Object(_scope_js__WEBPACK_IMPORTED_MODULE_15__["ownerDocument"])(range).documentElement);
            root = scope.commonAncestorContainer;
            text = scope.toString();
            exact = range.toString();
            selector = createTextQuoteSelector({
              exact: exact
            });
            iter = dom_node_iterator__WEBPACK_IMPORTED_MODULE_13___default()(root, SHOW_TEXT);
            startNode = firstTextNodeInRange(range);
            startIndex = range.startContainer.nodeType === TEXT_NODE ? dom_seek__WEBPACK_IMPORTED_MODULE_14___default()(iter, startNode) + range.startOffset : dom_seek__WEBPACK_IMPORTED_MODULE_14___default()(iter, startNode);
            endIndex = startIndex + exact.length;
            affixLengthPairs = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context2.prev = 13;
            _iterator = Object(_babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_10__["default"])(selector(scope));

          case 15:
            _context2.next = 17;
            return _iterator.next();

          case 17:
            _step = _context2.sent;
            _iteratorNormalCompletion = _step.done;
            _context2.next = 21;
            return _step.value;

          case 21:
            _value = _context2.sent;

            if (_iteratorNormalCompletion) {
              _context2.next = 36;
              break;
            }

            match = _value;
            matchIter = dom_node_iterator__WEBPACK_IMPORTED_MODULE_13___default()(root, SHOW_TEXT);
            matchStartNode = firstTextNodeInRange(match);
            matchStartIndex = match.startContainer.nodeType === TEXT_NODE ? dom_seek__WEBPACK_IMPORTED_MODULE_14___default()(matchIter, matchStartNode) + match.startOffset : dom_seek__WEBPACK_IMPORTED_MODULE_14___default()(matchIter, matchStartNode);
            matchEndIndex = matchStartIndex + match.toString().length; // If the match is the same as the input range, continue.

            if (!(matchStartIndex === startIndex || matchEndIndex === endIndex)) {
              _context2.next = 30;
              break;
            }

            return _context2.abrupt("continue", 33);

          case 30:
            // Determine how many prefix characters are shared.
            prefixLength = overlapRight(text.substring(0, matchStartIndex), text.substring(0, startIndex)); // Determine how many suffix characters are shared.

            suffixLength = overlap(text.substring(matchEndIndex), text.substring(endIndex)); // Record the affix lengths that would have precluded this match.

            affixLengthPairs.push([prefixLength + 1, suffixLength + 1]);

          case 33:
            _iteratorNormalCompletion = true;
            _context2.next = 15;
            break;

          case 36:
            _context2.next = 42;
            break;

          case 38:
            _context2.prev = 38;
            _context2.t0 = _context2["catch"](13);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 42:
            _context2.prev = 42;
            _context2.prev = 43;

            if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
              _context2.next = 47;
              break;
            }

            _context2.next = 47;
            return _iterator.return();

          case 47:
            _context2.prev = 47;

            if (!_didIteratorError) {
              _context2.next = 50;
              break;
            }

            throw _iteratorError;

          case 50:
            return _context2.finish(47);

          case 51:
            return _context2.finish(42);

          case 52:
            // Construct and return an unambiguous selector.
            result = {
              type: 'TextQuoteSelector',
              exact: exact
            };

            if (affixLengthPairs.length) {
              _minimalSolution = minimalSolution(affixLengthPairs), _minimalSolution2 = Object(_babel_runtime_corejs3_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_minimalSolution, 2), _prefixLength = _minimalSolution2[0], _suffixLength = _minimalSolution2[1];

              if (_prefixLength > 0 && startIndex > 0) {
                result.prefix = text.substring(startIndex - _prefixLength, startIndex);
              }

              if (_suffixLength > 0 && endIndex < text.length) {
                result.suffix = text.substring(endIndex, endIndex + _suffixLength);
              }
            }

            return _context2.abrupt("return", result);

          case 55:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[13, 38, 42, 52], [43,, 47, 51]]);
  }));
  return _describeTextQuote.apply(this, arguments);
}

function overlap(text1, text2) {
  var count = 0;

  while (count < text1.length && count < text2.length) {
    var c1 = text1[count];
    var c2 = text2[count];
    if (c1 !== c2) break;
    count++;
  }

  return count;
}

function overlapRight(text1, text2) {
  var count = 0;

  while (count < text1.length && count < text2.length) {
    var c1 = text1[text1.length - 1 - count];
    var c2 = text2[text2.length - 1 - count];
    if (c1 !== c2) break;
    count++;
  }

  return count;
}

function minimalSolution(requirements) {
  // Build all the pairs and order them by their sums.
  var pairs = _babel_runtime_corejs3_core_js_stable_instance_flat_map__WEBPACK_IMPORTED_MODULE_6___default()(requirements).call(requirements, function (l) {
    return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_5___default()(requirements).call(requirements, function (r) {
      return [l[0], r[1]];
    });
  });

  _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_4___default()(pairs).call(pairs, function (a, b) {
    return a[0] + a[1] - (b[0] + b[1]);
  }); // Find the first pair that satisfies every requirement.


  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    var _loop = function _loop() {
      var pair = _step2.value;

      var _pair = Object(_babel_runtime_corejs3_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(pair, 2),
          p0 = _pair[0],
          p1 = _pair[1];

      if (_babel_runtime_corejs3_core_js_stable_instance_every__WEBPACK_IMPORTED_MODULE_0___default()(requirements).call(requirements, function (_ref) {
        var _ref2 = Object(_babel_runtime_corejs3_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
            r0 = _ref2[0],
            r1 = _ref2[1];

        return r0 <= p0 || r1 <= p1;
      })) {
        return {
          v: pair
        };
      }
    };

    for (var _iterator2 = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default()(pairs), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _ret = _loop();

      if (Object(_babel_runtime_corejs3_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(_ret) === "object") return _ret.v;
    } // Return the largest pairing (unreachable).

  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return pairs[pairs.length - 1];
}

/***/ }),

/***/ "../packages/fragment-identifier/src/fragment.js":
/*!*******************************************************!*\
  !*** ../packages/fragment-identifier/src/fragment.js ***!
  \*******************************************************/
/*! exports provided: SyntaxError, parse, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyntaxError", function() { return peg$SyntaxError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return peg$parse; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/array/is-array */ "../node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);





// Generated by PEG.js v0.11.0-master.f69239d, https://pegjs.org/
function peg$subclass(child, parent) {
  function C() {
    this.constructor = child;
  }

  C.prototype = parent.prototype;
  child.prototype = new C();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = "SyntaxError"; // istanbul ignore next

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function (expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function literal(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },
    class: function _class(expectation) {
      var _context;

      var escapedParts = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(_context = expectation.parts).call(_context, function (part) {
        return _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(part) ? classEscape(part[0]) + "-" + classEscape(part[1]) : classEscape(part);
      });

      return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
    },
    any: function any() {
      return "any character";
    },
    end: function end() {
      return "end of input";
    },
    other: function other(expectation) {
      return expectation.description;
    },
    not: function not(expectation) {
      return "not " + describeExpectation(expectation.expected);
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (ch) {
      return "\\x0" + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return "\\x" + hex(ch);
    });
  }

  function classEscape(s) {
    return s.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (ch) {
      return "\\x0" + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return "\\x" + hex(ch);
    });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(expected).call(expected, describeExpectation);

    var i, j;

    _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1___default()(descriptions).call(descriptions);

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }

      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0___default()(descriptions).call(descriptions, 0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== undefined ? options : {};
  var peg$FAILED = {};
  var peg$startRuleFunctions = {
    start: peg$parsestart
  };
  var peg$startRuleFunction = peg$parsestart;
  var peg$c0 = "state";
  var peg$c1 = "(";
  var peg$c2 = ")";
  var peg$c3 = "selector";
  var peg$c4 = "state=";
  var peg$c5 = "selector=";
  var peg$c6 = ",";
  var peg$c7 = "refinedBy=selector(";
  var peg$c8 = "refinedBy=state(";
  var peg$c9 = "startSelector=selector(";
  var peg$c10 = "endSelector=selector(";
  var peg$c11 = "=";
  var peg$r0 = /^[a-zA-Z0-9<>\/[\]:%+@.\-!$&;*_]/;
  var peg$e0 = peg$literalExpectation("state", false);
  var peg$e1 = peg$literalExpectation("(", false);
  var peg$e2 = peg$literalExpectation(")", false);
  var peg$e3 = peg$literalExpectation("selector", false);
  var peg$e4 = peg$literalExpectation("state=", false);
  var peg$e5 = peg$literalExpectation("selector=", false);
  var peg$e6 = peg$literalExpectation(",", false);
  var peg$e7 = peg$literalExpectation("refinedBy=selector(", false);
  var peg$e8 = peg$literalExpectation("refinedBy=state(", false);
  var peg$e9 = peg$literalExpectation("startSelector=selector(", false);
  var peg$e10 = peg$literalExpectation("endSelector=selector(", false);
  var peg$e11 = peg$literalExpectation("=", false);
  var peg$e12 = peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"], "<", ">", "/", "[", "]", ":", "%", "+", "@", ".", "-", "!", "$", "&", ";", "*", "_"], false, false);

  var peg$f0 = function peg$f0(p) {
    return {
      state: p
    };
  };

  var peg$f1 = function peg$f1(p) {
    return {
      selector: p
    };
  };

  var peg$f2 = function peg$f2(v) {
    return {
      state: v
    };
  };

  var peg$f3 = function peg$f3(v) {
    return {
      selector: v
    };
  };

  var peg$f4 = function peg$f4(k1, k2) {
    var f = k1;

    for (var i = 0; i < k2.length; i++) {
      f = collect(f, k2[i][1]);
    }

    return f;
  };

  var peg$f5 = function peg$f5(p) {
    return {
      refinedBy: p
    };
  };

  var peg$f6 = function peg$f6(p) {
    return {
      startSelector: p
    };
  };

  var peg$f7 = function peg$f7(p) {
    return {
      endSelector: p
    };
  };

  var peg$f8 = function peg$f8(key, value) {
    var f = {};
    var num = Number(value);
    f[key] = isNaN(num) ? decodeURIComponent(value) : num;
    return f;
  };

  var peg$f9 = function peg$f9(chars) {
    return chars.join("");
  };

  var peg$currPos = 0;
  var peg$savedPos = 0;
  var peg$posDetailsCache = [{
    line: 1,
    column: 1
  }];
  var peg$expected = [];
  var peg$silentFails = 0;
  var peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function offset() {
    return peg$savedPos;
  }

  function range() {
    return [peg$savedPos, peg$currPos];
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== undefined ? location : peg$computeLocation(peg$savedPos, peg$currPos);
    throw peg$buildStructuredError([peg$otherExpectation(description)], input.substring(peg$savedPos, peg$currPos), location);
  }

  function error(message, location) {
    location = location !== undefined ? location : peg$computeLocation(peg$savedPos, peg$currPos);
    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return {
      type: "literal",
      text: text,
      ignoreCase: ignoreCase
    };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return {
      type: "class",
      parts: parts,
      inverted: inverted,
      ignoreCase: ignoreCase
    };
  }

  function peg$anyExpectation() {
    return {
      type: "any"
    };
  }

  function peg$endExpectation() {
    return {
      type: "end"
    };
  }

  function peg$otherExpectation(description) {
    return {
      type: "other",
      description: description
    };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos];
    var p;

    if (details) {
      return details;
    } else {
      p = pos - 1;

      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  var peg$VALIDFILENAME = typeof options.filename === "string" && options.filename.length > 0;

  function peg$computeLocation(startPos, endPos) {
    var loc = {};
    if (peg$VALIDFILENAME) loc.filename = options.filename;
    var startPosDetails = peg$computePosDetails(startPos);
    loc.start = {
      offset: startPos,
      line: startPosDetails.line,
      column: startPosDetails.column
    };
    var endPosDetails = peg$computePosDetails(endPos);
    loc.end = {
      offset: endPos,
      line: endPosDetails.line,
      column: endPosDetails.column
    };
    return loc;
  }

  function peg$begin() {
    peg$expected.push({
      pos: peg$currPos,
      variants: []
    });
  }

  function peg$expect(expected) {
    var top = peg$expected[peg$expected.length - 1];

    if (peg$currPos < top.pos) {
      return;
    }

    if (peg$currPos > top.pos) {
      top.pos = peg$currPos;
      top.variants = [];
    }

    top.variants.push(expected);
  }

  function peg$end(invert) {
    var expected = peg$expected.pop();
    var top = peg$expected[peg$expected.length - 1];
    var variants = expected.variants;

    if (top.pos !== expected.pos) {
      return;
    }

    if (invert) {
      variants = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(variants).call(variants, function (e) {
        return e.type === "not" ? e.expected : {
          type: "not",
          expected: e
        };
      });
    }

    Array.prototype.push.apply(top.variants, variants);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
  }

  function peg$buildError() {
    var expected = peg$expected[0];
    var failPos = expected.pos;
    return peg$buildStructuredError(expected.variants, failPos < input.length ? input.charAt(failPos) : null, failPos < input.length ? peg$computeLocation(failPos, failPos + 1) : peg$computeLocation(failPos, failPos));
  }

  function peg$parsestart() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$parsetop();
    return s0;
  }

  function peg$parsetop() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e0);

    if (input.substr(peg$currPos, 5) === peg$c0) {
      s1 = peg$c0;
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      rule$expects(peg$e1);

      if (input.charCodeAt(peg$currPos) === 40) {
        s2 = peg$c1;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parseparams();

        if (s3 !== peg$FAILED) {
          rule$expects(peg$e2);

          if (input.charCodeAt(peg$currPos) === 41) {
            s4 = peg$c2;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
          }

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f0(s3);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      rule$expects(peg$e3);

      if (input.substr(peg$currPos, 8) === peg$c3) {
        s1 = peg$c3;
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
      }

      if (s1 !== peg$FAILED) {
        rule$expects(peg$e1);

        if (input.charCodeAt(peg$currPos) === 40) {
          s2 = peg$c1;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
        }

        if (s2 !== peg$FAILED) {
          s3 = peg$parseparams();

          if (s3 !== peg$FAILED) {
            rule$expects(peg$e2);

            if (input.charCodeAt(peg$currPos) === 41) {
              s4 = peg$c2;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
            }

            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f1(s3);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        rule$expects(peg$e4);

        if (input.substr(peg$currPos, 6) === peg$c4) {
          s1 = peg$c4;
          peg$currPos += 6;
        } else {
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parseatom();

          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f2(s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          rule$expects(peg$e5);

          if (input.substr(peg$currPos, 9) === peg$c5) {
            s1 = peg$c5;
            peg$currPos += 9;
          } else {
            s1 = peg$FAILED;
          }

          if (s1 !== peg$FAILED) {
            s2 = peg$parseatom();

            if (s2 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f3(s2);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
      }
    }

    return s0;
  }

  function peg$parseparams() {
    var s0, s1, s2, s3, s4, s5;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parsekey_value_pair();

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      rule$expects(peg$e6);

      if (input.charCodeAt(peg$currPos) === 44) {
        s4 = peg$c6;
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
      }

      if (s4 !== peg$FAILED) {
        s5 = peg$parsekey_value_pair();

        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        rule$expects(peg$e6);

        if (input.charCodeAt(peg$currPos) === 44) {
          s4 = peg$c6;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
        }

        if (s4 !== peg$FAILED) {
          s5 = peg$parsekey_value_pair();

          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }

      peg$savedPos = s0;
      s0 = peg$f4(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsekey_value_pair() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e7);

    if (input.substr(peg$currPos, 19) === peg$c7) {
      s1 = peg$c7;
      peg$currPos += 19;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parseparams();

      if (s2 !== peg$FAILED) {
        rule$expects(peg$e2);

        if (input.charCodeAt(peg$currPos) === 41) {
          s3 = peg$c2;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f5(s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      rule$expects(peg$e8);

      if (input.substr(peg$currPos, 16) === peg$c8) {
        s1 = peg$c8;
        peg$currPos += 16;
      } else {
        s1 = peg$FAILED;
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$parseparams();

        if (s2 !== peg$FAILED) {
          rule$expects(peg$e2);

          if (input.charCodeAt(peg$currPos) === 41) {
            s3 = peg$c2;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
          }

          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f5(s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        rule$expects(peg$e9);

        if (input.substr(peg$currPos, 23) === peg$c9) {
          s1 = peg$c9;
          peg$currPos += 23;
        } else {
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parseparams();

          if (s2 !== peg$FAILED) {
            rule$expects(peg$e2);

            if (input.charCodeAt(peg$currPos) === 41) {
              s3 = peg$c2;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
            }

            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f6(s2);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          rule$expects(peg$e10);

          if (input.substr(peg$currPos, 21) === peg$c10) {
            s1 = peg$c10;
            peg$currPos += 21;
          } else {
            s1 = peg$FAILED;
          }

          if (s1 !== peg$FAILED) {
            s2 = peg$parseparams();

            if (s2 !== peg$FAILED) {
              rule$expects(peg$e2);

              if (input.charCodeAt(peg$currPos) === 41) {
                s3 = peg$c2;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
              }

              if (s3 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$f7(s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }

          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseatom();

            if (s1 !== peg$FAILED) {
              rule$expects(peg$e11);

              if (input.charCodeAt(peg$currPos) === 61) {
                s2 = peg$c11;
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
              }

              if (s2 !== peg$FAILED) {
                s3 = peg$parseatom();

                if (s3 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f8(s1, s3);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parseatom() {
    var s0, s1, s2;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsevalidchar();

    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsevalidchar();
      }
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f9(s1);
    }

    s0 = s1;
    return s0;
  }

  function peg$parsevalidchar() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    rule$expects(peg$e12);

    if (peg$r0.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function collect() {
    var ret = {};
    var len = arguments.length;

    for (var i = 0; i < len; i++) {
      for (var p in arguments[i]) {
        if (arguments[i].hasOwnProperty(p)) {
          ret[p] = arguments[i][p];
        }
      }
    }

    return ret;
  }

  peg$begin();
  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$expect(peg$endExpectation());
    }

    throw peg$buildError();
  }
}


/* harmony default export */ __webpack_exports__["default"] = ({
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
});

/***/ }),

/***/ "../packages/fragment-identifier/src/index.js":
/*!****************************************************!*\
  !*** ../packages/fragment-identifier/src/index.js ***!
  \****************************************************/
/*! exports provided: SyntaxError, parse, stringify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fragment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fragment.js */ "../packages/fragment-identifier/src/fragment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SyntaxError", function() { return _fragment_js__WEBPACK_IMPORTED_MODULE_3__["SyntaxError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _fragment_js__WEBPACK_IMPORTED_MODULE_3__["parse"]; });

/**
 * @license
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




/**
 * Convert a Selector or State into a fragment identifier string.
 * @param {(Selector|State)} resource
 * @return {string}
 */

function stringify(resource) {
  var _context;

  var data = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(resource)).call(_context, function (key) {
    var _context3;

    var value = resource[key];
    if (value instanceof Object) value = value.valueOf();

    if (value instanceof Object) {
      var _context2;

      value = stringify(value);
      return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = "".concat(encodeURIComponent(key), "=")).call(_context2, value);
    }

    return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = [key, value]).call(_context3, encodeURIComponent).join('=');
  }).join(',');

  if (/Selector$/.test(resource.type)) return "selector(".concat(data, ")");
  if (/State$/.test(resource.type)) return "state(".concat(data, ")");
  throw new TypeError('Resource must be a Selector or State');
}

/***/ }),

/***/ "../packages/selector/src/index.js":
/*!*****************************************!*\
  !*** ../packages/selector/src/index.js ***!
  \*****************************************/
/*! exports provided: makeRefinable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRefinable", function() { return makeRefinable; });
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "../node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator */ "../node_modules/@babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator */ "../node_modules/@babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncGeneratorDelegate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncGeneratorDelegate */ "../node_modules/@babel/runtime-corejs3/helpers/esm/asyncGeneratorDelegate.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncIterator */ "../node_modules/@babel/runtime-corejs3/helpers/esm/asyncIterator.js");
/**
 * @license
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */





function makeRefinable(selectorCreator) {
  return function createSelector(source) {
    var selector = selectorCreator(source);

    if (source.refinedBy) {
      var refiningSelector = createSelector(source.refinedBy);
      return (/*#__PURE__*/function () {
          var _matchAll = Object(_babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(scope) {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, match;

            return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _iteratorNormalCompletion = true;
                    _didIteratorError = false;
                    _context.prev = 2;
                    _iterator = Object(_babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_4__["default"])(selector(scope));

                  case 4:
                    _context.next = 6;
                    return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator.next());

                  case 6:
                    _step = _context.sent;
                    _iteratorNormalCompletion = _step.done;
                    _context.next = 10;
                    return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(_step.value);

                  case 10:
                    _value = _context.sent;

                    if (_iteratorNormalCompletion) {
                      _context.next = 17;
                      break;
                    }

                    match = _value;
                    return _context.delegateYield(Object(_babel_runtime_corejs3_helpers_esm_asyncGeneratorDelegate__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_4__["default"])(refiningSelector(match)), _babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_2__["default"]), "t0", 14);

                  case 14:
                    _iteratorNormalCompletion = true;
                    _context.next = 4;
                    break;

                  case 17:
                    _context.next = 23;
                    break;

                  case 19:
                    _context.prev = 19;
                    _context.t1 = _context["catch"](2);
                    _didIteratorError = true;
                    _iteratorError = _context.t1;

                  case 23:
                    _context.prev = 23;
                    _context.prev = 24;

                    if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
                      _context.next = 28;
                      break;
                    }

                    _context.next = 28;
                    return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator.return());

                  case 28:
                    _context.prev = 28;

                    if (!_didIteratorError) {
                      _context.next = 31;
                      break;
                    }

                    throw _iteratorError;

                  case 31:
                    return _context.finish(28);

                  case 32:
                    return _context.finish(23);

                  case 33:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[2, 19, 23, 33], [24,, 28, 32]]);
          }));

          function matchAll(_x) {
            return _matchAll.apply(this, arguments);
          }

          return matchAll;
        }()
      );
    }

    return selector;
  };
}

/***/ }),

/***/ "./demo/index.html":
/*!*************************!*\
  !*** ./demo/index.html ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "demo/index.html");

/***/ }),

/***/ "./demo/index.js":
/*!***********************!*\
  !*** ./demo/index.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/url */ "../node_modules/@babel/runtime-corejs3/core-js-stable/url.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "../node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "../node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncIterator */ "../node_modules/@babel/runtime-corejs3/helpers/esm/asyncIterator.js");
/* harmony import */ var _annotator_fragment_identifier_src_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @annotator/fragment-identifier/src/index.js */ "../packages/fragment-identifier/src/index.js");
/* harmony import */ var _annotator_dom_src_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @annotator/dom/src/index.js */ "../packages/dom/src/index.js");
/* harmony import */ var _annotator_selector_src_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @annotator/selector/src/index.js */ "../packages/selector/src/index.js");
/**
 * @license
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */







/* global corpus, module, parsed, selectable */



var cleanupFunctions = [];

function cleanup() {
  var removeHighlight;

  while (removeHighlight = cleanupFunctions.shift()) {
    removeHighlight();
  }

  corpus.normalize();
}

var createSelector = Object(_annotator_selector_src_index_js__WEBPACK_IMPORTED_MODULE_8__["makeRefinable"])(function (selector) {
  var selectorCreator = {
    TextQuoteSelector: _annotator_dom_src_index_js__WEBPACK_IMPORTED_MODULE_7__["createTextQuoteSelector"],
    RangeSelector: Object(_annotator_dom_src_index_js__WEBPACK_IMPORTED_MODULE_7__["createRangeSelectorCreator"])(createSelector)
  }[selector.type];

  if (selectorCreator == null) {
    throw new Error("Unsupported selector type: ".concat(selector.type));
  }

  return selectorCreator(selector);
});

var refresh = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var _context;

    var fragment, _parseFragment, selector, matchAll, ranges, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, range, _i, _ranges, _range, removeHighlight;

    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cleanup();
            fragment = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_3___default()(_context = window.location.hash).call(_context, 1);

            if (fragment) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return");

          case 4:
            _parseFragment = Object(_annotator_fragment_identifier_src_index_js__WEBPACK_IMPORTED_MODULE_6__["parse"])(fragment), selector = _parseFragment.selector;
            matchAll = createSelector(selector);
            ranges = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context2.prev = 9;
            _iterator = Object(_babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_5__["default"])(matchAll(corpus));

          case 11:
            _context2.next = 13;
            return _iterator.next();

          case 13:
            _step = _context2.sent;
            _iteratorNormalCompletion = _step.done;
            _context2.next = 17;
            return _step.value;

          case 17:
            _value = _context2.sent;

            if (_iteratorNormalCompletion) {
              _context2.next = 24;
              break;
            }

            range = _value;
            ranges.push(range);

          case 21:
            _iteratorNormalCompletion = true;
            _context2.next = 11;
            break;

          case 24:
            _context2.next = 30;
            break;

          case 26:
            _context2.prev = 26;
            _context2.t0 = _context2["catch"](9);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 30:
            _context2.prev = 30;
            _context2.prev = 31;

            if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
              _context2.next = 35;
              break;
            }

            _context2.next = 35;
            return _iterator.return();

          case 35:
            _context2.prev = 35;

            if (!_didIteratorError) {
              _context2.next = 38;
              break;
            }

            throw _iteratorError;

          case 38:
            return _context2.finish(35);

          case 39:
            return _context2.finish(30);

          case 40:
            for (_i = 0, _ranges = ranges; _i < _ranges.length; _i++) {
              _range = _ranges[_i];
              removeHighlight = Object(_annotator_dom_src_index_js__WEBPACK_IMPORTED_MODULE_7__["highlightRange"])(_range);
              cleanupFunctions.push(removeHighlight);
            }

            parsed.innerText = _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(selector, null, 2);

          case 42:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee, null, [[9, 26, 30, 40], [31,, 35, 39]]);
  }));

  return function refresh() {
    return _ref.apply(this, arguments);
  };
}();

function describeSelection() {
  return _describeSelection.apply(this, arguments);
}

function _describeSelection() {
  _describeSelection = Object(_babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
    var selection, range, scope;
    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            selection = document.getSelection();

            if (!(selection.type !== 'Range')) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return");

          case 3:
            range = selection.getRangeAt(0);

            if (!range.collapsed) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return");

          case 6:
            scope = document.createRange();
            scope.selectNodeContents(selectable);

            if (scope.isPointInRange(range.startContainer, range.startOffset)) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return");

          case 10:
            if (scope.isPointInRange(range.endContainer, range.endOffset)) {
              _context3.next = 12;
              break;
            }

            return _context3.abrupt("return");

          case 12:
            return _context3.abrupt("return", Object(_annotator_dom_src_index_js__WEBPACK_IMPORTED_MODULE_7__["describeTextQuote"])(range, scope));

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2);
  }));
  return _describeSelection.apply(this, arguments);
}

function onSelectionChange() {
  return _onSelectionChange.apply(this, arguments);
}

function _onSelectionChange() {
  _onSelectionChange = Object(_babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
    var selector, fragment, url;
    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return describeSelection();

          case 2:
            selector = _context4.sent;
            fragment = selector ? Object(_annotator_fragment_identifier_src_index_js__WEBPACK_IMPORTED_MODULE_6__["stringify"])(selector) : '';
            url = new _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_0___default.a(window.location.href);
            url.hash = fragment ? "#".concat(fragment) : '';

            if (url.href !== window.location.href) {
              window.history.replaceState(selector, null, url.href);
              refresh();
            }

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee3);
  }));
  return _onSelectionChange.apply(this, arguments);
}

window.addEventListener('popstate', refresh);
document.addEventListener('DOMContentLoaded', refresh);
document.addEventListener('selectionchange', onSelectionChange);

if (false) {}

/***/ }),

/***/ 1:
/*!***********************************************!*\
  !*** multi ./demo/index.html ./demo/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./demo/index.html */"./demo/index.html");
module.exports = __webpack_require__(/*! ./demo/index.js */"./demo/index.js");


/***/ })

/******/ });