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
  // If it has somehow been removed already, there is nothing to be done.
  if (!highlightElement.parentNode) return;

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
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "../node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "../node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncIterator */ "../node_modules/@babel/runtime-corejs3/helpers/esm/asyncIterator.js");
/* harmony import */ var _annotator_dom_src_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @annotator/dom/src/index.js */ "../packages/dom/src/index.js");
/* harmony import */ var _annotator_selector_src_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @annotator/selector/src/index.js */ "../packages/selector/src/index.js");
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





/* global info, module, source, target */


var EXAMPLE_SELECTORS = [{
  type: 'TextQuoteSelector',
  exact: 'not'
}, {
  type: 'RangeSelector',
  startSelector: {
    type: 'TextQuoteSelector',
    exact: 'ann'
  },
  endSelector: {
    type: 'TextQuoteSelector',
    exact: '!'
  }
}, {
  type: 'TextQuoteSelector',
  exact: 'annotated world',
  refinedBy: {
    type: 'TextQuoteSelector',
    exact: 'tat'
  }
}, {
  type: 'TextQuoteSelector',
  exact: 'To annotate, or not to annotate,',
  refinedBy: {
    type: 'RangeSelector',
    startSelector: {
      type: 'TextQuoteSelector',
      exact: 'To annotate',
      refinedBy: {
        type: 'TextQuoteSelector',
        exact: 'annotate'
      }
    },
    endSelector: {
      type: 'TextQuoteSelector',
      exact: 'not to annotate',
      refinedBy: {
        type: 'TextQuoteSelector',
        exact: ' to'
      }
    },
    refinedBy: {
      type: 'TextQuoteSelector',
      exact: 'o'
    }
  }
}];
var cleanupFunctions = [];

function cleanup() {
  var removeHighlight;

  while (removeHighlight = cleanupFunctions.shift()) {
    removeHighlight();
  }

  target.normalize();
}

var createSelector = Object(_annotator_selector_src_index_js__WEBPACK_IMPORTED_MODULE_5__["makeRefinable"])(function (selector) {
  var selectorCreator = {
    TextQuoteSelector: _annotator_dom_src_index_js__WEBPACK_IMPORTED_MODULE_4__["createTextQuoteSelector"],
    RangeSelector: Object(_annotator_dom_src_index_js__WEBPACK_IMPORTED_MODULE_4__["createRangeSelectorCreator"])(createSelector)
  }[selector.type];

  if (selectorCreator == null) {
    throw new Error("Unsupported selector type: ".concat(selector.type));
  }

  return selectorCreator(selector);
});

function anchor(_x) {
  return _anchor.apply(this, arguments);
}

function _anchor() {
  _anchor = Object(_babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(selector) {
    var matchAll, ranges, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, range, _i, _ranges, _range, removeHighlight;

    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            matchAll = createSelector(selector);
            ranges = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 4;
            _iterator = Object(_babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_3__["default"])(matchAll(target));

          case 6:
            _context.next = 8;
            return _iterator.next();

          case 8:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 12;
            return _step.value;

          case 12:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 19;
              break;
            }

            range = _value;
            ranges.push(range);

          case 16:
            _iteratorNormalCompletion = true;
            _context.next = 6;
            break;

          case 19:
            _context.next = 25;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](4);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 25:
            _context.prev = 25;
            _context.prev = 26;

            if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
              _context.next = 30;
              break;
            }

            _context.next = 30;
            return _iterator.return();

          case 30:
            _context.prev = 30;

            if (!_didIteratorError) {
              _context.next = 33;
              break;
            }

            throw _iteratorError;

          case 33:
            return _context.finish(30);

          case 34:
            return _context.finish(25);

          case 35:
            for (_i = 0, _ranges = ranges; _i < _ranges.length; _i++) {
              _range = _ranges[_i];
              removeHighlight = Object(_annotator_dom_src_index_js__WEBPACK_IMPORTED_MODULE_4__["highlightRange"])(_range);
              cleanupFunctions.push(removeHighlight);
            }

            info.innerText = _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(selector, null, 2);

          case 37:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 21, 25, 35], [26,, 30, 34]]);
  }));
  return _anchor.apply(this, arguments);
}

;

function describeSelection() {
  return _describeSelection.apply(this, arguments);
}

function _describeSelection() {
  _describeSelection = Object(_babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var selection, range, scope;
    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            selection = document.getSelection();

            if (!(selection.type !== 'Range')) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return");

          case 3:
            range = selection.getRangeAt(0);

            if (!range.collapsed) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return");

          case 6:
            scope = document.createRange();
            scope.selectNodeContents(source);

            if (scope.isPointInRange(range.startContainer, range.startOffset)) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return");

          case 10:
            if (scope.isPointInRange(range.endContainer, range.endOffset)) {
              _context2.next = 12;
              break;
            }

            return _context2.abrupt("return");

          case 12:
            return _context2.abrupt("return", Object(_annotator_dom_src_index_js__WEBPACK_IMPORTED_MODULE_4__["describeTextQuote"])(range, scope));

          case 13:
          case "end":
            return _context2.stop();
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
  _onSelectionChange = Object(_babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var selector;
    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return describeSelection();

          case 2:
            selector = _context3.sent;

            if (selector) {
              cleanup();
              anchor(selector);
            }

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _onSelectionChange.apply(this, arguments);
}

function onSelectorExampleClick(event) {
  var exampleNumber = event.target.dataset.runExample;
  if (!exampleNumber) return;
  var selector = EXAMPLE_SELECTORS[exampleNumber];
  cleanup();
  anchor(selector);
  event.preventDefault();
}

document.addEventListener('selectionchange', onSelectionChange);
document.addEventListener('click', onSelectorExampleClick);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2luc3RhbmNlL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvaW5zdGFuY2UvZXZlcnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2luc3RhbmNlL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvaW5zdGFuY2UvZmxhdC1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2luc3RhbmNlL2Zvci1lYWNoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9pbnN0YW5jZS9pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvaW5zdGFuY2UvbWFwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9pbnN0YW5jZS9zb21lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9pbnN0YW5jZS9zb3J0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL3N5bWJvbC9hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL2FycmF5L2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL2dldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL2lzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL3N5bWJvbC9hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZXNtL0FzeW5jR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9oZWxwZXJzL2VzbS9Bd2FpdFZhbHVlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZXNtL2FzeW5jR2VuZXJhdG9yRGVsZWdhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZXNtL2FzeW5jSXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZXNtL2F3YWl0QXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZXNtL3dyYXBBc3luY0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbmNlc3RvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jYXJ0ZXNpYW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvYXJyYXkvZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9hcnJheS9pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9hcnJheS92aXJ0dWFsL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9hcnJheS92aXJ0dWFsL2V2ZXJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2FycmF5L3ZpcnR1YWwvZmlsdGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2FycmF5L3ZpcnR1YWwvZmxhdC1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvYXJyYXkvdmlydHVhbC9mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9hcnJheS92aXJ0dWFsL2luZGV4LW9mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2FycmF5L3ZpcnR1YWwvbWFwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2FycmF5L3ZpcnR1YWwvc29tZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9hcnJheS92aXJ0dWFsL3NvcnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvaW5zdGFuY2UvY29uY2F0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2luc3RhbmNlL2V2ZXJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2luc3RhbmNlL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9pbnN0YW5jZS9mbGF0LW1hcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9pbnN0YW5jZS9pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9pbnN0YW5jZS9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvaW5zdGFuY2Uvc29tZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9pbnN0YW5jZS9zb3J0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL3Byb21pc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvc3ltYm9sL2FzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL3N5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZmVhdHVyZXMvYXJyYXkvZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9mZWF0dXJlcy9hcnJheS9pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9mZWF0dXJlcy9nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ZlYXR1cmVzL2dldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9mZWF0dXJlcy9pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9mZWF0dXJlcy9wcm9taXNlL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ZlYXR1cmVzL3N5bWJvbC9hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9mZWF0dXJlcy9zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZmVhdHVyZXMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9hLXBvc3NpYmxlLXByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYXJyYXktZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9iaW5kLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9jbGFzc29mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2NyZWF0ZS1pdGVyYXRvci1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9kZWZpbmUtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9kb20taXRlcmFibGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9lbnRyeS12aXJ0dWFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2ZhaWxzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9mbGF0dGVuLWludG8tYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2Z1bmN0aW9uLXRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaGFzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9oaWRkZW4ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaG9zdC1yZXBvcnQtZXJyb3JzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9odG1sLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pcy1mb3JjZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2lzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2l0ZXJhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvbmF0aXZlLXByb21pc2UtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy1leHRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LXRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvcGVyZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3NldC1nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3Nsb3BweS1hcnJheS1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3N0cmluZy1tdWx0aWJ5dGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy90by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdWlkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy91c2VyLWFnZW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy92OC12ZXJzaW9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvd3JhcHBlZC13ZWxsLWtub3duLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLmFycmF5LmV2ZXJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuYXJyYXkuZmlsdGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuYXJyYXkuZmxhdC1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5hcnJheS5pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLmFycmF5LmlzLWFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5hcnJheS5zb21lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuYXJyYXkuc29ydC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLmFycmF5LnVuc2NvcGFibGVzLmZsYXQtbWFwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuanNvbi50by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMubWF0aC50by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5vYmplY3QudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMucHJvbWlzZS5hbGwtc2V0dGxlZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLnByb21pc2UuZmluYWxseS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5zeW1ib2wuZGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5zeW1ib2wuaGFzLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuc3ltYm9sLmlzLWNvbmNhdC1zcHJlYWRhYmxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuc3ltYm9sLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuc3ltYm9sLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuc3ltYm9sLm1hdGNoLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLnN5bWJvbC5tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLnN5bWJvbC5yZXBsYWNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuc3ltYm9sLnNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLnN5bWJvbC5zcGVjaWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuc3ltYm9sLnNwbGl0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuc3ltYm9sLnRvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLnN5bWJvbC50by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuc3ltYm9sLnVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXNuZXh0LmFnZ3JlZ2F0ZS1lcnJvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzbmV4dC5wcm9taXNlLmFsbC1zZXR0bGVkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXNuZXh0LnByb21pc2UuYW55LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXNuZXh0LnByb21pc2UudHJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXNuZXh0LnN5bWJvbC5hc3luYy1kaXNwb3NlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXNuZXh0LnN5bWJvbC5kaXNwb3NlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXNuZXh0LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXNuZXh0LnN5bWJvbC5wYXR0ZXJuLW1hdGNoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXNuZXh0LnN5bWJvbC5yZXBsYWNlLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL2FycmF5L3ZpcnR1YWwvZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvaW5zdGFuY2UvZXZlcnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvaW5zdGFuY2UvZmxhdC1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL2Zvci1lYWNoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL3N0YWJsZS9pbnN0YW5jZS9pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvaW5zdGFuY2UvbWFwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL3N0YWJsZS9pbnN0YW5jZS9zb21lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL3N0YWJsZS9pbnN0YW5jZS9zb3J0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL3N0YWJsZS9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL3Byb21pc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL3N5bWJvbC9hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1ub2RlLWl0ZXJhdG9yL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZG9tLW5vZGUtaXRlcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9kb20tbm9kZS1pdGVyYXRvci9saWIvYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1ub2RlLWl0ZXJhdG9yL2xpYi9idWlsdGluLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZG9tLW5vZGUtaXRlcmF0b3IvbGliL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZG9tLW5vZGUtaXRlcmF0b3IvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZG9tLW5vZGUtaXRlcmF0b3IvbGliL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZG9tLW5vZGUtaXRlcmF0b3IvbGliL3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9kb20tbm9kZS1pdGVyYXRvci9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1ub2RlLWl0ZXJhdG9yL3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9kb20tc2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1zZWVrL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2luZGV4LW9mL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vcGFja2FnZXMvZG9tL3NyYy9jYXJ0ZXNpYW4uanMiLCJ3ZWJwYWNrOi8vLy4uL3BhY2thZ2VzL2RvbS9zcmMvY3NzLmpzIiwid2VicGFjazovLy8uLi9wYWNrYWdlcy9kb20vc3JjL2hpZ2hsaWdodC1yYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi4vcGFja2FnZXMvZG9tL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vcGFja2FnZXMvZG9tL3NyYy9yYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi4vcGFja2FnZXMvZG9tL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly8vLi4vcGFja2FnZXMvZG9tL3NyYy90ZXh0LXF1b3RlLmpzIiwid2VicGFjazovLy8uLi9wYWNrYWdlcy9zZWxlY3Rvci9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGVtby9pbmRleC5odG1sIiwid2VicGFjazovLy8uL2RlbW8vaW5kZXguanMiXSwibmFtZXMiOlsicHJvZHVjdCIsIml0ZXJhYmxlcyIsIml0ZXJhdG9ycyIsIml0ZXJhYmxlIiwibG9ncyIsIm5leHRWYWx1ZVByb21pc2VzIiwiaXRlcmF0b3IiLCJpdGVyYWJsZU5yIiwibmV4dCIsInRoZW4iLCJ2YWx1ZSIsImRvbmUiLCJyYWNlIiwicCIsImFycmF5cyIsImNvbWJpbmF0aW9ucyIsImNhcnRlc2lhbkFycmF5cyIsImNyZWF0ZUNzc1NlbGVjdG9yIiwic2VsZWN0b3IiLCJzY29wZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYXRjaEFsbCIsImhpZ2hsaWdodFJhbmdlIiwicmFuZ2UiLCJ0YWdOYW1lIiwiYXR0cmlidXRlcyIsImNvbGxhcHNlZCIsIm5vZGVzIiwidGV4dE5vZGVzSW5SYW5nZSIsImhpZ2hsaWdodEVsZW1lbnRzIiwibm9kZSIsImhpZ2hsaWdodEVsZW1lbnQiLCJ3cmFwTm9kZUluSGlnaGxpZ2h0IiwicHVzaCIsInJlbW92ZUhpZ2hsaWdodHMiLCJoaWdobGlnaHRJZHgiLCJyZW1vdmVIaWdobGlnaHQiLCJzdGFydENvbnRhaW5lciIsIm5vZGVUeXBlIiwiTm9kZSIsIlRFWFRfTk9ERSIsInN0YXJ0T2Zmc2V0IiwiZW5kT2Zmc2V0IiwiY3JlYXRlZE5vZGUiLCJzcGxpdFRleHQiLCJlbmRDb250YWluZXIiLCJzZXRFbmQiLCJzZXRTdGFydCIsImxlbmd0aCIsIndhbGtlciIsIm93bmVyRG9jdW1lbnQiLCJjcmVhdGVUcmVlV2Fsa2VyIiwiY29tbW9uQW5jZXN0b3JDb250YWluZXIiLCJOb2RlRmlsdGVyIiwiU0hPV19URVhUIiwiaW50ZXJzZWN0c05vZGUiLCJGSUxURVJfQUNDRVBUIiwiRklMVEVSX1JFSkVDVCIsImN1cnJlbnROb2RlIiwibmV4dE5vZGUiLCJjb21wYXJlUG9pbnQiLCJjcmVhdGVFbGVtZW50Iiwia2V5Iiwic2V0QXR0cmlidXRlIiwidGVtcFJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3ROb2RlIiwic3Vycm91bmRDb250ZW50cyIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwicmVwbGFjZUNoaWxkIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsInJlbW92ZSIsImNyZWF0ZVJhbmdlU2VsZWN0b3JDcmVhdG9yIiwiY3JlYXRlU2VsZWN0b3IiLCJjcmVhdGVSYW5nZVNlbGVjdG9yIiwic3RhcnRTZWxlY3RvciIsImVuZFNlbGVjdG9yIiwiZG9jdW1lbnQiLCJzdGFydE1hdGNoZXMiLCJlbmRNYXRjaGVzIiwicGFpcnMiLCJzdGFydCIsImVuZCIsInJlc3VsdCIsInJhbmdlRnJvbVNjb3BlIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiZmlyc3RUZXh0Tm9kZUluUmFuZ2UiLCJyb290IiwiaXRlciIsImNyZWF0ZU5vZGVJdGVyYXRvciIsImNyZWF0ZVRleHRRdW90ZVNlbGVjdG9yIiwidGV4dCIsInRvU3RyaW5nIiwiZXhhY3QiLCJwcmVmaXgiLCJzdWZmaXgiLCJwYXR0ZXJuIiwiZnJvbUluZGV4IiwicmVmZXJlbmNlTm9kZUluZGV4IiwicGF0dGVyblN0YXJ0SW5kZXgiLCJtYXRjaCIsIm1hdGNoU3RhcnRJbmRleCIsIm1hdGNoRW5kSW5kZXgiLCJzZWVrIiwicG9pbnRlckJlZm9yZVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VOb2RlIiwibm9kZVZhbHVlIiwicHJldmlvdXNOb2RlIiwiZGVzY3JpYmVUZXh0UXVvdGUiLCJkb2N1bWVudEVsZW1lbnQiLCJzdGFydE5vZGUiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJhZmZpeExlbmd0aFBhaXJzIiwibWF0Y2hJdGVyIiwibWF0Y2hTdGFydE5vZGUiLCJwcmVmaXhMZW5ndGgiLCJvdmVybGFwUmlnaHQiLCJzdWJzdHJpbmciLCJzdWZmaXhMZW5ndGgiLCJvdmVybGFwIiwidHlwZSIsIm1pbmltYWxTb2x1dGlvbiIsInRleHQxIiwidGV4dDIiLCJjb3VudCIsImMxIiwiYzIiLCJyZXF1aXJlbWVudHMiLCJsIiwiciIsImEiLCJiIiwicGFpciIsInAwIiwicDEiLCJyMCIsInIxIiwibWFrZVJlZmluYWJsZSIsInNlbGVjdG9yQ3JlYXRvciIsInNvdXJjZSIsInJlZmluZWRCeSIsInJlZmluaW5nU2VsZWN0b3IiLCJFWEFNUExFX1NFTEVDVE9SUyIsImNsZWFudXBGdW5jdGlvbnMiLCJjbGVhbnVwIiwic2hpZnQiLCJ0YXJnZXQiLCJub3JtYWxpemUiLCJUZXh0UXVvdGVTZWxlY3RvciIsIlJhbmdlU2VsZWN0b3IiLCJFcnJvciIsImFuY2hvciIsInJhbmdlcyIsImluZm8iLCJpbm5lclRleHQiLCJkZXNjcmliZVNlbGVjdGlvbiIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsImdldFJhbmdlQXQiLCJpc1BvaW50SW5SYW5nZSIsIm9uU2VsZWN0aW9uQ2hhbmdlIiwib25TZWxlY3RvckV4YW1wbGVDbGljayIsImV2ZW50IiwiZXhhbXBsZU51bWJlciIsImRhdGFzZXQiLCJydW5FeGFtcGxlIiwicHJldmVudERlZmF1bHQiLCJhZGRFdmVudExpc3RlbmVyIiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZUFBZTtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw2QkFBNkIsY0FBYztBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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RixhQUFMLEVBQW9CO0FBQ3BCLE1BQU1wSixRQUFRLEdBQUcrSCxpQkFBaUIsQ0FBQ3FCLGFBQUQsQ0FBbEM7QUFDQW5CLFNBQU87QUFDUE8sUUFBTSxDQUFDeEksUUFBRCxDQUFOO0FBQ0FtSixPQUFLLENBQUNJLGNBQU47QUFDRDs7QUFFRDFGLFFBQVEsQ0FBQzJGLGdCQUFULENBQTBCLGlCQUExQixFQUE2Q1AsaUJBQTdDO0FBQ0FwRixRQUFRLENBQUMyRixnQkFBVCxDQUEwQixPQUExQixFQUFtQ04sc0JBQW5DOztBQUVBLElBQUlPLEtBQUosRUFBZ0IsRSIsImZpbGUiOiJkZW1vL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL3N0YWJsZS9pbnN0YW5jZS9jb25jYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL3N0YWJsZS9pbnN0YW5jZS9ldmVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL2ZpbHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL2ZsYXQtbWFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9zdGFibGUvaW5zdGFuY2UvZm9yLWVhY2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL3N0YWJsZS9pbnN0YW5jZS9pbmRleC1vZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL21hcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL3NvbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL3N0YWJsZS9pbnN0YW5jZS9zb3J0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9zdGFibGUvanNvbi9zdHJpbmdpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL3N0YWJsZS9vYmplY3Qva2V5c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvc3RhYmxlL3Byb21pc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL3N0YWJsZS9zeW1ib2wvYXN5bmMtaXRlcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL2ZlYXR1cmVzL2FycmF5L2Zyb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL2ZlYXR1cmVzL2FycmF5L2lzLWFycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9mZWF0dXJlcy9nZXQtaXRlcmF0b3ItbWV0aG9kXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9mZWF0dXJlcy9nZXQtaXRlcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL2ZlYXR1cmVzL2lzLWl0ZXJhYmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9mZWF0dXJlcy9wcm9taXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9mZWF0dXJlcy9zeW1ib2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL2ZlYXR1cmVzL3N5bWJvbC9hc3luYy1pdGVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvZmVhdHVyZXMvc3ltYm9sL2l0ZXJhdG9yXCIpOyIsImltcG9ydCBfU3ltYm9sJGFzeW5jSXRlcmF0b3IgZnJvbSBcIi4uLy4uL2NvcmUtanMvc3ltYm9sL2FzeW5jLWl0ZXJhdG9yXCI7XG5pbXBvcnQgX1N5bWJvbCBmcm9tIFwiLi4vLi4vY29yZS1qcy9zeW1ib2xcIjtcbmltcG9ydCBfUHJvbWlzZSBmcm9tIFwiLi4vLi4vY29yZS1qcy9wcm9taXNlXCI7XG5pbXBvcnQgQXdhaXRWYWx1ZSBmcm9tIFwiLi9Bd2FpdFZhbHVlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBc3luY0dlbmVyYXRvcihnZW4pIHtcbiAgdmFyIGZyb250LCBiYWNrO1xuXG4gIGZ1bmN0aW9uIHNlbmQoa2V5LCBhcmcpIHtcbiAgICByZXR1cm4gbmV3IF9Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgYXJnOiBhcmcsXG4gICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgICBuZXh0OiBudWxsXG4gICAgICB9O1xuXG4gICAgICBpZiAoYmFjaykge1xuICAgICAgICBiYWNrID0gYmFjay5uZXh0ID0gcmVxdWVzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZyb250ID0gYmFjayA9IHJlcXVlc3Q7XG4gICAgICAgIHJlc3VtZShrZXksIGFyZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXN1bWUoa2V5LCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHJlc3VsdCA9IGdlbltrZXldKGFyZyk7XG4gICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICB2YXIgd3JhcHBlZEF3YWl0ID0gdmFsdWUgaW5zdGFuY2VvZiBBd2FpdFZhbHVlO1xuXG4gICAgICBfUHJvbWlzZS5yZXNvbHZlKHdyYXBwZWRBd2FpdCA/IHZhbHVlLndyYXBwZWQgOiB2YWx1ZSkudGhlbihmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIGlmICh3cmFwcGVkQXdhaXQpIHtcbiAgICAgICAgICByZXN1bWUoa2V5ID09PSBcInJldHVyblwiID8gXCJyZXR1cm5cIiA6IFwibmV4dFwiLCBhcmcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHRsZShyZXN1bHQuZG9uZSA/IFwicmV0dXJuXCIgOiBcIm5vcm1hbFwiLCBhcmcpO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICByZXN1bWUoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXR0bGUoXCJ0aHJvd1wiLCBlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHRsZSh0eXBlLCB2YWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcInJldHVyblwiOlxuICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJ0aHJvd1wiOlxuICAgICAgICBmcm9udC5yZWplY3QodmFsdWUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmcm9udCA9IGZyb250Lm5leHQ7XG5cbiAgICBpZiAoZnJvbnQpIHtcbiAgICAgIHJlc3VtZShmcm9udC5rZXksIGZyb250LmFyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuX2ludm9rZSA9IHNlbmQ7XG5cbiAgaWYgKHR5cGVvZiBnZW5bXCJyZXR1cm5cIl0gIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRoaXNbXCJyZXR1cm5cIl0gPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuaWYgKHR5cGVvZiBfU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX1N5bWJvbCRhc3luY0l0ZXJhdG9yKSB7XG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtfU3ltYm9sJGFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xufVxuXG5Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcIm5leHRcIiwgYXJnKTtcbn07XG5cbkFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtcInRocm93XCJdID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gdGhpcy5faW52b2tlKFwidGhyb3dcIiwgYXJnKTtcbn07XG5cbkFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtcInJldHVyblwiXSA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcInJldHVyblwiLCBhcmcpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfQXdhaXRWYWx1ZSh2YWx1ZSkge1xuICB0aGlzLndyYXBwZWQgPSB2YWx1ZTtcbn0iLCJpbXBvcnQgX0FycmF5JGlzQXJyYXkgZnJvbSBcIi4uLy4uL2NvcmUtanMvYXJyYXkvaXMtYXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKF9BcnJheSRpc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiaW1wb3J0IF9BcnJheSRpc0FycmF5IGZyb20gXCIuLi8uLi9jb3JlLWpzL2FycmF5L2lzLWFycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChfQXJyYXkkaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cbn0iLCJpbXBvcnQgX1N5bWJvbCRpdGVyYXRvciBmcm9tIFwiLi4vLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIjtcbmltcG9ydCBfU3ltYm9sIGZyb20gXCIuLi8uLi9jb3JlLWpzL3N5bWJvbFwiO1xuaW1wb3J0IF9Qcm9taXNlIGZyb20gXCIuLi8uLi9jb3JlLWpzL3Byb21pc2VcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY0dlbmVyYXRvckRlbGVnYXRlKGlubmVyLCBhd2FpdFdyYXApIHtcbiAgdmFyIGl0ZXIgPSB7fSxcbiAgICAgIHdhaXRpbmcgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBwdW1wKGtleSwgdmFsdWUpIHtcbiAgICB3YWl0aW5nID0gdHJ1ZTtcbiAgICB2YWx1ZSA9IG5ldyBfUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgcmVzb2x2ZShpbm5lcltrZXldKHZhbHVlKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgdmFsdWU6IGF3YWl0V3JhcCh2YWx1ZSlcbiAgICB9O1xuICB9XG5cbiAgO1xuXG4gIGlmICh0eXBlb2YgX1N5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF9TeW1ib2wkaXRlcmF0b3IpIHtcbiAgICBpdGVyW19TeW1ib2wkaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgfVxuXG4gIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh3YWl0aW5nKSB7XG4gICAgICB3YWl0aW5nID0gZmFsc2U7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHB1bXAoXCJuZXh0XCIsIHZhbHVlKTtcbiAgfTtcblxuICBpZiAodHlwZW9mIGlubmVyW1widGhyb3dcIl0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGl0ZXJbXCJ0aHJvd1wiXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHdhaXRpbmcpIHtcbiAgICAgICAgd2FpdGluZyA9IGZhbHNlO1xuICAgICAgICB0aHJvdyB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHB1bXAoXCJ0aHJvd1wiLCB2YWx1ZSk7XG4gICAgfTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgaW5uZXJbXCJyZXR1cm5cIl0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGl0ZXJbXCJyZXR1cm5cIl0gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh3YWl0aW5nKSB7XG4gICAgICAgIHdhaXRpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHVtcChcInJldHVyblwiLCB2YWx1ZSk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBpdGVyO1xufSIsImltcG9ydCBfZ2V0SXRlcmF0b3JNZXRob2QgZnJvbSBcIi4uLy4uL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLW1ldGhvZFwiO1xuaW1wb3J0IF9TeW1ib2wkaXRlcmF0b3IgZnJvbSBcIi4uLy4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCI7XG5pbXBvcnQgX1N5bWJvbCRhc3luY0l0ZXJhdG9yIGZyb20gXCIuLi8uLi9jb3JlLWpzL3N5bWJvbC9hc3luYy1pdGVyYXRvclwiO1xuaW1wb3J0IF9TeW1ib2wgZnJvbSBcIi4uLy4uL2NvcmUtanMvc3ltYm9sXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNJdGVyYXRvcihpdGVyYWJsZSkge1xuICB2YXIgbWV0aG9kO1xuXG4gIGlmICh0eXBlb2YgX1N5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGlmIChfU3ltYm9sJGFzeW5jSXRlcmF0b3IpIHtcbiAgICAgIG1ldGhvZCA9IGl0ZXJhYmxlW19TeW1ib2wkYXN5bmNJdGVyYXRvcl07XG4gICAgICBpZiAobWV0aG9kICE9IG51bGwpIHJldHVybiBtZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgfVxuXG4gICAgaWYgKF9TeW1ib2wkaXRlcmF0b3IpIHtcbiAgICAgIG1ldGhvZCA9IF9nZXRJdGVyYXRvck1ldGhvZChpdGVyYWJsZSk7XG4gICAgICBpZiAobWV0aG9kICE9IG51bGwpIHJldHVybiBtZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBpcyBub3QgYXN5bmMgaXRlcmFibGVcIik7XG59IiwiaW1wb3J0IF9Qcm9taXNlIGZyb20gXCIuLi8uLi9jb3JlLWpzL3Byb21pc2VcIjtcblxuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIF9Qcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBfUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJpbXBvcnQgQXdhaXRWYWx1ZSBmcm9tIFwiLi9Bd2FpdFZhbHVlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXdhaXRBc3luY0dlbmVyYXRvcih2YWx1ZSkge1xuICByZXR1cm4gbmV3IEF3YWl0VmFsdWUodmFsdWUpO1xufSIsImltcG9ydCBfQXJyYXkkZnJvbSBmcm9tIFwiLi4vLi4vY29yZS1qcy9hcnJheS9mcm9tXCI7XG5pbXBvcnQgX2lzSXRlcmFibGUgZnJvbSBcIi4uLy4uL2NvcmUtanMvaXMtaXRlcmFibGVcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAoX2lzSXRlcmFibGUoT2JqZWN0KGl0ZXIpKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBfQXJyYXkkZnJvbShpdGVyKTtcbn0iLCJpbXBvcnQgX2dldEl0ZXJhdG9yIGZyb20gXCIuLi8uLi9jb3JlLWpzL2dldC1pdGVyYXRvclwiO1xuaW1wb3J0IF9pc0l0ZXJhYmxlIGZyb20gXCIuLi8uLi9jb3JlLWpzL2lzLWl0ZXJhYmxlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICghKF9pc0l0ZXJhYmxlKE9iamVjdChhcnIpKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBfZ2V0SXRlcmF0b3IoYXJyKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiaW1wb3J0IF9TeW1ib2wkaXRlcmF0b3IgZnJvbSBcIi4uLy4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCI7XG5pbXBvcnQgX1N5bWJvbCBmcm9tIFwiLi4vLi4vY29yZS1qcy9zeW1ib2xcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIF9TeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX1N5bWJvbCRpdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIF9TeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9TeW1ib2wgJiYgb2JqICE9PSBfU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufSIsImltcG9ydCBBc3luY0dlbmVyYXRvciBmcm9tIFwiLi9Bc3luY0dlbmVyYXRvclwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3dyYXBBc3luY0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgQXN5bmNHZW5lcmF0b3IoZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcGFyZW50c1xuXG5mdW5jdGlvbiBwYXJlbnRzKG5vZGUsIGZpbHRlcikge1xuICB2YXIgb3V0ID0gW11cblxuICBmaWx0ZXIgPSBmaWx0ZXIgfHwgbm9vcFxuXG4gIGRvIHtcbiAgICBvdXQucHVzaChub2RlKVxuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcbiAgfSB3aGlsZShub2RlICYmIG5vZGUudGFnTmFtZSAmJiBmaWx0ZXIobm9kZSkpXG5cbiAgcmV0dXJuIG91dC5zbGljZSgxKVxufVxuXG5mdW5jdGlvbiBub29wKG4pIHtcbiAgcmV0dXJuIHRydWVcbn1cbiIsInZhciBleHRlbmQgPSByZXF1aXJlKCd4dGVuZC9pbW11dGFibGUnKTtcblxuLy8gUHVibGljIEFQSVxubW9kdWxlLmV4cG9ydHMgPSBjYXJ0ZXNpYW47XG5cbi8qKlxuICogQ3JlYXRlcyBjYXJ0ZXNpYW4gcHJvZHVjdCBvZiB0aGUgcHJvdmlkZWQgcHJvcGVydGllc1xuICpcbiAqIEBwYXJhbSAgIHtvYmplY3R8YXJyYXl9IGxpc3QgLSBsaXN0IG9mIChhcnJheSkgcHJvcGVydGllcyBvciBhcnJheSBvZiBhcnJheXNcbiAqIEByZXR1cm5zIHthcnJheX0gYWxsIHRoZSBjb21iaW5hdGlvbnMgb2YgdGhlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gY2FydGVzaWFuKGxpc3QpXG57XG4gIHZhciBsYXN0LCBpbml0LCBrZXlzLCBwcm9kdWN0ID0gW107XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobGlzdCkpXG4gIHtcbiAgICBpbml0ID0gW107XG4gICAgbGFzdCA9IGxpc3QubGVuZ3RoIC0gMTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgbGlzdCA9PSAnb2JqZWN0JyAmJiBsaXN0ICE9PSBudWxsKVxuICB7XG4gICAgaW5pdCA9IHt9O1xuICAgIGtleXMgPSBPYmplY3Qua2V5cyhsaXN0KTtcbiAgICBsYXN0ID0ga2V5cy5sZW5ndGggLSAxO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGluZyBhbiBBcnJheSBvciBhbiBPYmplY3QsIGJ1dCBgJyArIChsaXN0ID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGxpc3QpICsgJ2AgcHJvdmlkZWQuJyk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGQocm93LCBpKVxuICB7XG4gICAgdmFyIGosIGssIHI7XG5cbiAgICBrID0ga2V5cyA/IGtleXNbaV0gOiBpO1xuXG4gICAgLy8gZWl0aGVyIGFycmF5IG9yIG5vdCwgbm90IGV4cGVjdGluZyBvYmplY3RzIGhlcmVcbiAgICBBcnJheS5pc0FycmF5KGxpc3Rba10pIHx8ICh0eXBlb2YgbGlzdFtrXSA9PSAndW5kZWZpbmVkJyA/IGxpc3Rba10gPSBbXSA6IGxpc3Rba10gPSBbbGlzdFtrXV0pO1xuXG4gICAgZm9yIChqPTA7IGogPCBsaXN0W2tdLmxlbmd0aDsgaisrKVxuICAgIHtcbiAgICAgIHIgPSBjbG9uZShyb3cpO1xuICAgICAgc3RvcmUociwgbGlzdFtrXVtqXSwgayk7XG5cbiAgICAgIGlmIChpID49IGxhc3QpXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3QucHVzaChyKTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgYWRkKHIsIGkgKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGQoaW5pdCwgMCk7XG5cbiAgcmV0dXJuIHByb2R1Y3Q7XG59XG5cbi8qKlxuICogQ2xvbmVzIChzaGFsbG93IGNvcHkpIHByb3ZpZGVkIG9iamVjdCBvciBhcnJheVxuICpcbiAqIEBwYXJhbSAgIHtvYmplY3R8YXJyYXl9IG9iaiAtIG9iamVjdCBvciBhcnJheSB0byBjbG9uZVxuICogQHJldHVybnMge29iamVjdHxhcnJheX0gLSBzaGFsbG93IGNvcHkgb2YgdGhlIHByb3ZpZGVkIG9iamVjdCBvciBhcnJheVxuICovXG5mdW5jdGlvbiBjbG9uZShvYmopXG57XG4gIHJldHVybiBBcnJheS5pc0FycmF5KG9iaikgPyBbXS5jb25jYXQob2JqKSA6IGV4dGVuZChvYmopO1xufVxuXG4vKipcbiAqIFN0b3JlcyBwcm92aWRlZCBlbGVtZW50IGluIHRoZSBwcm92aWRlZCBvYmplY3Qgb3IgYXJyYXlcbiAqXG4gKiBAcGFyYW0gICB7b2JqZWN0fGFycmF5fSBvYmogLSBvYmplY3Qgb3IgYXJyYXkgdG8gYWRkIHRvXG4gKiBAcGFyYW0gICB7bWl4ZWR9IGVsZW0gLSBlbGVtZW50IHRvIGFkZFxuICogQHBhcmFtICAge3N0cmluZ3xudW1iZXJ9IGtleSAtIG9iamVjdCdzIHByb3BlcnR5IGtleSB0byBhZGQgdG9cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBzdG9yZShvYmosIGVsZW0sIGtleSlcbntcbiAgQXJyYXkuaXNBcnJheShvYmopID8gb2JqLnB1c2goZWxlbSkgOiAob2JqW2tleV0gPSBlbGVtKTtcbn1cbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLmFycmF5LmZyb20nKTtcbnZhciBwYXRoID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWxzL3BhdGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXRoLkFycmF5LmZyb207XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLmFycmF5LmlzLWFycmF5Jyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFscy9wYXRoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0aC5BcnJheS5pc0FycmF5O1xuIiwicmVxdWlyZSgnLi4vLi4vLi4vbW9kdWxlcy9lcy5hcnJheS5jb25jYXQnKTtcbnZhciBlbnRyeVZpcnR1YWwgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbHMvZW50cnktdmlydHVhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVudHJ5VmlydHVhbCgnQXJyYXknKS5jb25jYXQ7XG4iLCJyZXF1aXJlKCcuLi8uLi8uLi9tb2R1bGVzL2VzLmFycmF5LmV2ZXJ5Jyk7XG52YXIgZW50cnlWaXJ0dWFsID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWxzL2VudHJ5LXZpcnR1YWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbnRyeVZpcnR1YWwoJ0FycmF5JykuZXZlcnk7XG4iLCJyZXF1aXJlKCcuLi8uLi8uLi9tb2R1bGVzL2VzLmFycmF5LmZpbHRlcicpO1xudmFyIGVudHJ5VmlydHVhbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFscy9lbnRyeS12aXJ0dWFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZW50cnlWaXJ0dWFsKCdBcnJheScpLmZpbHRlcjtcbiIsInJlcXVpcmUoJy4uLy4uLy4uL21vZHVsZXMvZXMuYXJyYXkuZmxhdC1tYXAnKTtcbnJlcXVpcmUoJy4uLy4uLy4uL21vZHVsZXMvZXMuYXJyYXkudW5zY29wYWJsZXMuZmxhdC1tYXAnKTtcbnZhciBlbnRyeVZpcnR1YWwgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbHMvZW50cnktdmlydHVhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVudHJ5VmlydHVhbCgnQXJyYXknKS5mbGF0TWFwO1xuIiwicmVxdWlyZSgnLi4vLi4vLi4vbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaCcpO1xudmFyIGVudHJ5VmlydHVhbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFscy9lbnRyeS12aXJ0dWFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZW50cnlWaXJ0dWFsKCdBcnJheScpLmZvckVhY2g7XG4iLCJyZXF1aXJlKCcuLi8uLi8uLi9tb2R1bGVzL2VzLmFycmF5LmluZGV4LW9mJyk7XG52YXIgZW50cnlWaXJ0dWFsID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWxzL2VudHJ5LXZpcnR1YWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbnRyeVZpcnR1YWwoJ0FycmF5JykuaW5kZXhPZjtcbiIsInJlcXVpcmUoJy4uLy4uLy4uL21vZHVsZXMvZXMuYXJyYXkubWFwJyk7XG52YXIgZW50cnlWaXJ0dWFsID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWxzL2VudHJ5LXZpcnR1YWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbnRyeVZpcnR1YWwoJ0FycmF5JykubWFwO1xuIiwicmVxdWlyZSgnLi4vLi4vLi4vbW9kdWxlcy9lcy5hcnJheS5zb21lJyk7XG52YXIgZW50cnlWaXJ0dWFsID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWxzL2VudHJ5LXZpcnR1YWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbnRyeVZpcnR1YWwoJ0FycmF5Jykuc29tZTtcbiIsInJlcXVpcmUoJy4uLy4uLy4uL21vZHVsZXMvZXMuYXJyYXkuc29ydCcpO1xudmFyIGVudHJ5VmlydHVhbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFscy9lbnRyeS12aXJ0dWFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZW50cnlWaXJ0dWFsKCdBcnJheScpLnNvcnQ7XG4iLCJ2YXIgY29uY2F0ID0gcmVxdWlyZSgnLi4vYXJyYXkvdmlydHVhbC9jb25jYXQnKTtcblxudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgb3duID0gaXQuY29uY2F0O1xuICByZXR1cm4gaXQgPT09IEFycmF5UHJvdG90eXBlIHx8IChpdCBpbnN0YW5jZW9mIEFycmF5ICYmIG93biA9PT0gQXJyYXlQcm90b3R5cGUuY29uY2F0KSA/IGNvbmNhdCA6IG93bjtcbn07XG4iLCJ2YXIgZXZlcnkgPSByZXF1aXJlKCcuLi9hcnJheS92aXJ0dWFsL2V2ZXJ5Jyk7XG5cbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIG93biA9IGl0LmV2ZXJ5O1xuICByZXR1cm4gaXQgPT09IEFycmF5UHJvdG90eXBlIHx8IChpdCBpbnN0YW5jZW9mIEFycmF5ICYmIG93biA9PT0gQXJyYXlQcm90b3R5cGUuZXZlcnkpID8gZXZlcnkgOiBvd247XG59O1xuIiwidmFyIGZpbHRlciA9IHJlcXVpcmUoJy4uL2FycmF5L3ZpcnR1YWwvZmlsdGVyJyk7XG5cbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIG93biA9IGl0LmZpbHRlcjtcbiAgcmV0dXJuIGl0ID09PSBBcnJheVByb3RvdHlwZSB8fCAoaXQgaW5zdGFuY2VvZiBBcnJheSAmJiBvd24gPT09IEFycmF5UHJvdG90eXBlLmZpbHRlcikgPyBmaWx0ZXIgOiBvd247XG59O1xuIiwidmFyIGZsYXRNYXAgPSByZXF1aXJlKCcuLi9hcnJheS92aXJ0dWFsL2ZsYXQtbWFwJyk7XG5cbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIG93biA9IGl0LmZsYXRNYXA7XG4gIHJldHVybiBpdCA9PT0gQXJyYXlQcm90b3R5cGUgfHwgKGl0IGluc3RhbmNlb2YgQXJyYXkgJiYgb3duID09PSBBcnJheVByb3RvdHlwZS5mbGF0TWFwKSA/IGZsYXRNYXAgOiBvd247XG59O1xuIiwidmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9hcnJheS92aXJ0dWFsL2luZGV4LW9mJyk7XG5cbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIG93biA9IGl0LmluZGV4T2Y7XG4gIHJldHVybiBpdCA9PT0gQXJyYXlQcm90b3R5cGUgfHwgKGl0IGluc3RhbmNlb2YgQXJyYXkgJiYgb3duID09PSBBcnJheVByb3RvdHlwZS5pbmRleE9mKSA/IGluZGV4T2YgOiBvd247XG59O1xuIiwidmFyIG1hcCA9IHJlcXVpcmUoJy4uL2FycmF5L3ZpcnR1YWwvbWFwJyk7XG5cbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIG93biA9IGl0Lm1hcDtcbiAgcmV0dXJuIGl0ID09PSBBcnJheVByb3RvdHlwZSB8fCAoaXQgaW5zdGFuY2VvZiBBcnJheSAmJiBvd24gPT09IEFycmF5UHJvdG90eXBlLm1hcCkgPyBtYXAgOiBvd247XG59O1xuIiwidmFyIHNvbWUgPSByZXF1aXJlKCcuLi9hcnJheS92aXJ0dWFsL3NvbWUnKTtcblxudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgb3duID0gaXQuc29tZTtcbiAgcmV0dXJuIGl0ID09PSBBcnJheVByb3RvdHlwZSB8fCAoaXQgaW5zdGFuY2VvZiBBcnJheSAmJiBvd24gPT09IEFycmF5UHJvdG90eXBlLnNvbWUpID8gc29tZSA6IG93bjtcbn07XG4iLCJ2YXIgc29ydCA9IHJlcXVpcmUoJy4uL2FycmF5L3ZpcnR1YWwvc29ydCcpO1xuXG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBvd24gPSBpdC5zb3J0O1xuICByZXR1cm4gaXQgPT09IEFycmF5UHJvdG90eXBlIHx8IChpdCBpbnN0YW5jZW9mIEFycmF5ICYmIG93biA9PT0gQXJyYXlQcm90b3R5cGUuc29ydCkgPyBzb3J0IDogb3duO1xufTtcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWxzL3BhdGgnKTtcbnZhciAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0geyBzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiAkSlNPTi5zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3VtZW50cyk7XG59O1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5vYmplY3Qua2V5cycpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbHMvcGF0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGguT2JqZWN0LmtleXM7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMucHJvbWlzZScpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5wcm9taXNlLmFsbC1zZXR0bGVkJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnByb21pc2UuZmluYWxseScpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbHMvcGF0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGguUHJvbWlzZTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG52YXIgV3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZSA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFscy93cmFwcGVkLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gV3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZS5mKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3ltYm9sLmRlc2NyaXB0aW9uJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN5bWJvbC5oYXMtaW5zdGFuY2UnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3ltYm9sLmlzLWNvbmNhdC1zcHJlYWRhYmxlJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN5bWJvbC5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5zeW1ib2wubWF0Y2gnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3ltYm9sLm1hdGNoLWFsbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5zeW1ib2wucmVwbGFjZScpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5zeW1ib2wuc2VhcmNoJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN5bWJvbC5zcGVjaWVzJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN5bWJvbC5zcGxpdCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5zeW1ib2wudG8tcHJpbWl0aXZlJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN5bWJvbC50by1zdHJpbmctdGFnJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN5bWJvbC51bnNjb3BhYmxlcycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5tYXRoLnRvLXN0cmluZy10YWcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuanNvbi50by1zdHJpbmctdGFnJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFscy9wYXRoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0aC5TeW1ib2w7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN5bWJvbC5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvcicpO1xudmFyIFdyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbHMvd3JhcHBlZC13ZWxsLWtub3duLXN5bWJvbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUuZignaXRlcmF0b3InKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vZXMvYXJyYXkvZnJvbScpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9lcy9hcnJheS9pcy1hcnJheScpO1xuIiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG4iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMuc3RyaW5nLml0ZXJhdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvcicpO1xuIiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1pdGVyYWJsZScpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9lcy9wcm9taXNlJyk7XG5cbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXNuZXh0LmFnZ3JlZ2F0ZS1lcnJvcicpO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXNuZXh0LnByb21pc2UuYWxsLXNldHRsZWQnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXNuZXh0LnByb21pc2UudHJ5Jyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzbmV4dC5wcm9taXNlLmFueScpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9lcy9zeW1ib2wvYXN5bmMtaXRlcmF0b3InKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vZXMvc3ltYm9sJyk7XG5cbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXNuZXh0LnN5bWJvbC5hc3luYy1kaXNwb3NlJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzbmV4dC5zeW1ib2wuZGlzcG9zZScpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lc25leHQuc3ltYm9sLm9ic2VydmFibGUnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXNuZXh0LnN5bWJvbC5wYXR0ZXJuLW1hdGNoJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzbmV4dC5zeW1ib2wucmVwbGFjZS1hbGwnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vZXMvc3ltYm9sL2l0ZXJhdG9yJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSAmJiBpdCAhPT0gbnVsbCkge1xuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IHNldCBcIiArIFN0cmluZyhpdCkgKyAnIGFzIGEgcHJvdG90eXBlJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvcnJlY3QgJyArIChuYW1lID8gbmFtZSArICcgJyA6ICcnKSArICdpbnZvY2F0aW9uJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBzbG9wcHlBcnJheU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zbG9wcHktYXJyYXktbWV0aG9kJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxubW9kdWxlLmV4cG9ydHMgPSBzbG9wcHlBcnJheU1ldGhvZCgnZm9yRWFjaCcpID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xufSA6IFtdLmZvckVhY2g7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9iaW5kLWNvbnRleHQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nJyk7XG52YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcblxuLy8gYEFycmF5LmZyb21gIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkuZnJvbVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIG1hcGZuID0gYXJndW1lbnRzTGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBnZXRJdGVyYXRvck1ldGhvZChPKTtcbiAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvciwgbmV4dDtcbiAgaWYgKG1hcHBpbmcpIG1hcGZuID0gYmluZChtYXBmbiwgYXJndW1lbnRzTGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gIC8vIGlmIHRoZSB0YXJnZXQgaXMgbm90IGl0ZXJhYmxlIG9yIGl0J3MgYW4gYXJyYXkgd2l0aCB0aGUgZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBhIHNpbXBsZSBjYXNlXG4gIGlmIChpdGVyYXRvck1ldGhvZCAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyYXRvck1ldGhvZCkpKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYXRvck1ldGhvZC5jYWxsKE8pO1xuICAgIG5leHQgPSBpdGVyYXRvci5uZXh0O1xuICAgIHJlc3VsdCA9IG5ldyBDKCk7XG4gICAgZm9yICg7IShzdGVwID0gbmV4dC5jYWxsKGl0ZXJhdG9yKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZ1xuICAgICAgICA/IGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKVxuICAgICAgICA6IHN0ZXAudmFsdWVcbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICByZXN1bHQgPSBuZXcgQyhsZW5ndGgpO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCJ2YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9iaW5kLWNvbnRleHQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5cbnZhciBwdXNoID0gW10ucHVzaDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGZvckVhY2gsIG1hcCwgZmlsdGVyLCBzb21lLCBldmVyeSwgZmluZCwgZmluZEluZGV4IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQsIHNwZWNpZmljQ3JlYXRlKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJbmRleGVkT2JqZWN0KE8pO1xuICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGNyZWF0ZSA9IHNwZWNpZmljQ3JlYXRlIHx8IGFycmF5U3BlY2llc0NyZWF0ZTtcbiAgICB2YXIgdGFyZ2V0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsdWUsIHJlc3VsdDtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbHVlID0gc2VsZltpbmRleF07XG4gICAgICByZXN1bHQgPSBib3VuZEZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSB0YXJnZXRbaW5kZXhdID0gcmVzdWx0OyAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0KSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbHVlOyAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcHVzaC5jYWxsKHRhcmdldCwgdmFsdWUpOyAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmIChJU19FVkVSWSkgcmV0dXJuIGZhbHNlOyAgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHRhcmdldDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuICBmb3JFYWNoOiBjcmVhdGVNZXRob2QoMCksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuICBtYXA6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gIGZpbHRlcjogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLnNvbWVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc29tZVxuICBzb21lOiBjcmVhdGVNZXRob2QoMyksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZXZlcnlgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZXZlcnlcbiAgZXZlcnk6IGNyZWF0ZU1ldGhvZCg0KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiAgZmluZDogY3JlYXRlTWV0aG9kKDUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kSW5kZXhcbiAgZmluZEluZGV4OiBjcmVhdGVNZXRob2QoNilcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXZlcnNpb24nKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzdcbiAgcmV0dXJuIFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBhcnJheS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZm9vOiAxIH07XG4gICAgfTtcbiAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcbiAgfSk7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxuLy8gYEFycmF5U3BlY2llc0NyZWF0ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXksIGxlbmd0aCkge1xuICB2YXIgQztcbiAgaWYgKGlzQXJyYXkob3JpZ2luYWxBcnJheSkpIHtcbiAgICBDID0gb3JpZ2luYWxBcnJheS5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgZWxzZSBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBuZXcgKEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQykobGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aCk7XG59O1xuIiwidmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCk7XG4gICAgfTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIEVOVFJJRVMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gRU5UUklFUyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHZhciByZXR1cm5NZXRob2QgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldHVybk1ldGhvZCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXR1cm5NZXRob2QuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciBjYWxsZWQgPSAwO1xuICB2YXIgaXRlcmF0b3JXaXRoUmV0dXJuID0ge1xuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGRvbmU6ICEhY2FsbGVkKysgfTtcbiAgICB9LFxuICAgICdyZXR1cm4nOiBmdW5jdGlvbiAoKSB7XG4gICAgICBTQUZFX0NMT1NJTkcgPSB0cnVlO1xuICAgIH1cbiAgfTtcbiAgaXRlcmF0b3JXaXRoUmV0dXJuW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShpdGVyYXRvcldpdGhSZXR1cm4sIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIFNLSVBfQ0xPU0lORykge1xuICBpZiAoIVNLSVBfQ0xPU0lORyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBJVEVSQVRJT05fU1VQUE9SVCA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBvYmplY3QgPSB7fTtcbiAgICBvYmplY3RbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB7IGRvbmU6IElURVJBVElPTl9TVVBQT1JUID0gdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG4gICAgZXhlYyhvYmplY3QpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBJVEVSQVRJT05fU1VQUE9SVDtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQ09SUkVDVF9BUkdVTUVOVFMgPSBjbGFzc29mUmF3KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG4vLyBnZXR0aW5nIHRhZyBmcm9tIEVTNisgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRPX1NUUklOR19UQUcpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQ09SUkVDVF9BUkdVTUVOVFMgPyBjbGFzc29mUmF3KE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiByZXN1bHQ7XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRigpIHsgLyogZW1wdHkgKi8gfVxuICBGLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG51bGw7XG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YobmV3IEYoKSkgIT09IEYucHJvdG90eXBlO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEl0ZXJhdG9yQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgdmFyIFRPX1NUUklOR19UQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIEl0ZXJhdG9yQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JDb25zdHJ1Y3RvciwgVE9fU1RSSU5HX1RBRywgZmFsc2UsIHRydWUpO1xuICBJdGVyYXRvcnNbVE9fU1RSSU5HX1RBR10gPSByZXR1cm5UaGlzO1xuICByZXR1cm4gSXRlcmF0b3JDb25zdHJ1Y3Rvcjtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHlLZXkgPSB0b1ByaW1pdGl2ZShrZXkpO1xuICBpZiAocHJvcGVydHlLZXkgaW4gb2JqZWN0KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwgcHJvcGVydHlLZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtwcm9wZXJ0eUtleV0gPSB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1pdGVyYXRvci1jb25zdHJ1Y3RvcicpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciBJdGVyYXRvcnNDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJyk7XG5cbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IEl0ZXJhdG9yc0NvcmUuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IEl0ZXJhdG9yc0NvcmUuQlVHR1lfU0FGQVJJX0lURVJBVE9SUztcbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xudmFyIEVOVFJJRVMgPSAnZW50cmllcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSXRlcmFibGUsIE5BTUUsIEl0ZXJhdG9yQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gIGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IoSXRlcmF0b3JDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG5cbiAgdmFyIGdldEl0ZXJhdGlvbk1ldGhvZCA9IGZ1bmN0aW9uIChLSU5EKSB7XG4gICAgaWYgKEtJTkQgPT09IERFRkFVTFQgJiYgZGVmYXVsdEl0ZXJhdG9yKSByZXR1cm4gZGVmYXVsdEl0ZXJhdG9yO1xuICAgIGlmICghQlVHR1lfU0FGQVJJX0lURVJBVE9SUyAmJiBLSU5EIGluIEl0ZXJhYmxlUHJvdG90eXBlKSByZXR1cm4gSXRlcmFibGVQcm90b3R5cGVbS0lORF07XG4gICAgc3dpdGNoIChLSU5EKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgICAgY2FzZSBFTlRSSUVTOiByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMpOyB9O1xuICB9O1xuXG4gIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gZmFsc2U7XG4gIHZhciBJdGVyYWJsZVByb3RvdHlwZSA9IEl0ZXJhYmxlLnByb3RvdHlwZTtcbiAgdmFyIG5hdGl2ZUl0ZXJhdG9yID0gSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1JdXG4gICAgfHwgSXRlcmFibGVQcm90b3R5cGVbJ0BAaXRlcmF0b3InXVxuICAgIHx8IERFRkFVTFQgJiYgSXRlcmFibGVQcm90b3R5cGVbREVGQVVMVF07XG4gIHZhciBkZWZhdWx0SXRlcmF0b3IgPSAhQlVHR1lfU0FGQVJJX0lURVJBVE9SUyAmJiBuYXRpdmVJdGVyYXRvciB8fCBnZXRJdGVyYXRpb25NZXRob2QoREVGQVVMVCk7XG4gIHZhciBhbnlOYXRpdmVJdGVyYXRvciA9IE5BTUUgPT0gJ0FycmF5JyA/IEl0ZXJhYmxlUHJvdG90eXBlLmVudHJpZXMgfHwgbmF0aXZlSXRlcmF0b3IgOiBuYXRpdmVJdGVyYXRvcjtcbiAgdmFyIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgbWV0aG9kcywgS0VZO1xuXG4gIC8vIGZpeCBuYXRpdmVcbiAgaWYgKGFueU5hdGl2ZUl0ZXJhdG9yKSB7XG4gICAgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoYW55TmF0aXZlSXRlcmF0b3IuY2FsbChuZXcgSXRlcmFibGUoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgaWYgKCFJU19QVVJFICYmIGdldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSkgIT09IEl0ZXJhdG9yUHJvdG90eXBlKSB7XG4gICAgICAgIGlmIChzZXRQcm90b3R5cGVPZikge1xuICAgICAgICAgIHNldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSXRlcmF0b3JQcm90b3R5cGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICBpZiAoSVNfUFVSRSkgSXRlcmF0b3JzW1RPX1NUUklOR19UQUddID0gcmV0dXJuVGhpcztcbiAgICB9XG4gIH1cblxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZBVUxUID09IFZBTFVFUyAmJiBuYXRpdmVJdGVyYXRvciAmJiBuYXRpdmVJdGVyYXRvci5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgPSB0cnVlO1xuICAgIGRlZmF1bHRJdGVyYXRvciA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5hdGl2ZUl0ZXJhdG9yLmNhbGwodGhpcyk7IH07XG4gIH1cblxuICAvLyBkZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghSVNfUFVSRSB8fCBGT1JDRUQpICYmIEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SXSAhPT0gZGVmYXVsdEl0ZXJhdG9yKSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEl0ZXJhYmxlUHJvdG90eXBlLCBJVEVSQVRPUiwgZGVmYXVsdEl0ZXJhdG9yKTtcbiAgfVxuICBJdGVyYXRvcnNbTkFNRV0gPSBkZWZhdWx0SXRlcmF0b3I7XG5cbiAgLy8gZXhwb3J0IGFkZGl0aW9uYWwgbWV0aG9kc1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IGdldEl0ZXJhdGlvbk1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gZGVmYXVsdEl0ZXJhdG9yIDogZ2V0SXRlcmF0aW9uTWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogZ2V0SXRlcmF0aW9uTWV0aG9kKEVOVFJJRVMpXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKEtFWSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoQlVHR1lfU0FGQVJJX0lURVJBVE9SUyB8fCBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgfHwgIShLRVkgaW4gSXRlcmFibGVQcm90b3R5cGUpKSB7XG4gICAgICAgIHJlZGVmaW5lKEl0ZXJhYmxlUHJvdG90eXBlLCBLRVksIG1ldGhvZHNbS0VZXSk7XG4gICAgICB9XG4gICAgfSBlbHNlICQoeyB0YXJnZXQ6IE5BTUUsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIH0sIG1ldGhvZHMpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwidmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dyYXBwZWQtd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTkFNRSkge1xuICB2YXIgU3ltYm9sID0gcGF0aC5TeW1ib2wgfHwgKHBhdGguU3ltYm9sID0ge30pO1xuICBpZiAoIWhhcyhTeW1ib2wsIE5BTUUpKSBkZWZpbmVQcm9wZXJ0eShTeW1ib2wsIE5BTUUsIHtcbiAgICB2YWx1ZTogd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZS5mKE5BTUUpXG4gIH0pO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIGl0ZXJhYmxlIERPTSBjb2xsZWN0aW9uc1xuLy8gZmxhZyAtIGBpdGVyYWJsZWAgaW50ZXJmYWNlIC0gJ2VudHJpZXMnLCAna2V5cycsICd2YWx1ZXMnLCAnZm9yRWFjaCcgbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENTU1J1bGVMaXN0OiAwLFxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiAwLFxuICBDU1NWYWx1ZUxpc3Q6IDAsXG4gIENsaWVudFJlY3RMaXN0OiAwLFxuICBET01SZWN0TGlzdDogMCxcbiAgRE9NU3RyaW5nTGlzdDogMCxcbiAgRE9NVG9rZW5MaXN0OiAxLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogMCxcbiAgRmlsZUxpc3Q6IDAsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiAwLFxuICBIVE1MQ29sbGVjdGlvbjogMCxcbiAgSFRNTEZvcm1FbGVtZW50OiAwLFxuICBIVE1MU2VsZWN0RWxlbWVudDogMCxcbiAgTWVkaWFMaXN0OiAwLFxuICBNaW1lVHlwZUFycmF5OiAwLFxuICBOYW1lZE5vZGVNYXA6IDAsXG4gIE5vZGVMaXN0OiAxLFxuICBQYWludFJlcXVlc3RMaXN0OiAwLFxuICBQbHVnaW46IDAsXG4gIFBsdWdpbkFycmF5OiAwLFxuICBTVkdMZW5ndGhMaXN0OiAwLFxuICBTVkdOdW1iZXJMaXN0OiAwLFxuICBTVkdQYXRoU2VnTGlzdDogMCxcbiAgU1ZHUG9pbnRMaXN0OiAwLFxuICBTVkdTdHJpbmdMaXN0OiAwLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiAwLFxuICBTb3VyY2VCdWZmZXJMaXN0OiAwLFxuICBTdHlsZVNoZWV0TGlzdDogMCxcbiAgVGV4dFRyYWNrQ3VlTGlzdDogMCxcbiAgVGV4dFRyYWNrTGlzdDogMCxcbiAgVG91Y2hMaXN0OiAwXG59O1xuIiwidmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDT05TVFJVQ1RPUikge1xuICByZXR1cm4gcGF0aFtDT05TVFJVQ1RPUiArICdQcm90b3R5cGUnXTtcbn07XG4iLCIvLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYmluZC1jb250ZXh0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcblxudmFyIHdyYXBDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIChOYXRpdmVDb25zdHJ1Y3Rvcikge1xuICB2YXIgV3JhcHBlciA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBOYXRpdmVDb25zdHJ1Y3Rvcikge1xuICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBOYXRpdmVDb25zdHJ1Y3RvcigpO1xuICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgTmF0aXZlQ29uc3RydWN0b3IoYSk7XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBOYXRpdmVDb25zdHJ1Y3RvcihhLCBiKTtcbiAgICAgIH0gcmV0dXJuIG5ldyBOYXRpdmVDb25zdHJ1Y3RvcihhLCBiLCBjKTtcbiAgICB9IHJldHVybiBOYXRpdmVDb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuICBXcmFwcGVyLnByb3RvdHlwZSA9IE5hdGl2ZUNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgcmV0dXJuIFdyYXBwZXI7XG59O1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLm5vVGFyZ2V0R2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIFBST1RPID0gb3B0aW9ucy5wcm90bztcblxuICB2YXIgbmF0aXZlU291cmNlID0gR0xPQkFMID8gZ2xvYmFsIDogU1RBVElDID8gZ2xvYmFsW1RBUkdFVF0gOiAoZ2xvYmFsW1RBUkdFVF0gfHwge30pLnByb3RvdHlwZTtcblxuICB2YXIgdGFyZ2V0ID0gR0xPQkFMID8gcGF0aCA6IHBhdGhbVEFSR0VUXSB8fCAocGF0aFtUQVJHRVRdID0ge30pO1xuICB2YXIgdGFyZ2V0UHJvdG90eXBlID0gdGFyZ2V0LnByb3RvdHlwZTtcblxuICB2YXIgRk9SQ0VELCBVU0VfTkFUSVZFLCBWSVJUVUFMX1BST1RPVFlQRTtcbiAgdmFyIGtleSwgc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5LCBuYXRpdmVQcm9wZXJ0eSwgcmVzdWx0UHJvcGVydHksIGRlc2NyaXB0b3I7XG5cbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBVU0VfTkFUSVZFID0gIUZPUkNFRCAmJiBuYXRpdmVTb3VyY2UgJiYgaGFzKG5hdGl2ZVNvdXJjZSwga2V5KTtcblxuICAgIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG5cbiAgICBpZiAoVVNFX05BVElWRSkgaWYgKG9wdGlvbnMubm9UYXJnZXRHZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobmF0aXZlU291cmNlLCBrZXkpO1xuICAgICAgbmF0aXZlUHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIG5hdGl2ZVByb3BlcnR5ID0gbmF0aXZlU291cmNlW2tleV07XG5cbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIGltcGxlbWVudGF0aW9uXG4gICAgc291cmNlUHJvcGVydHkgPSAoVVNFX05BVElWRSAmJiBuYXRpdmVQcm9wZXJ0eSkgPyBuYXRpdmVQcm9wZXJ0eSA6IHNvdXJjZVtrZXldO1xuXG4gICAgaWYgKFVTRV9OQVRJVkUgJiYgdHlwZW9mIHRhcmdldFByb3BlcnR5ID09PSB0eXBlb2Ygc291cmNlUHJvcGVydHkpIGNvbnRpbnVlO1xuXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBpZiAob3B0aW9ucy5iaW5kICYmIFVTRV9OQVRJVkUpIHJlc3VsdFByb3BlcnR5ID0gYmluZChzb3VyY2VQcm9wZXJ0eSwgZ2xvYmFsKTtcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdzIGluIHRoaXMgdmVyc2lvblxuICAgIGVsc2UgaWYgKG9wdGlvbnMud3JhcCAmJiBVU0VfTkFUSVZFKSByZXN1bHRQcm9wZXJ0eSA9IHdyYXBDb25zdHJ1Y3Rvcihzb3VyY2VQcm9wZXJ0eSk7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgZWxzZSBpZiAoUFJPVE8gJiYgdHlwZW9mIHNvdXJjZVByb3BlcnR5ID09ICdmdW5jdGlvbicpIHJlc3VsdFByb3BlcnR5ID0gYmluZChGdW5jdGlvbi5jYWxsLCBzb3VyY2VQcm9wZXJ0eSk7XG4gICAgLy8gZGVmYXVsdCBjYXNlXG4gICAgZWxzZSByZXN1bHRQcm9wZXJ0eSA9IHNvdXJjZVByb3BlcnR5O1xuXG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHNvdXJjZVByb3BlcnR5ICYmIHNvdXJjZVByb3BlcnR5LnNoYW0pIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHJlc3VsdFByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cblxuICAgIHRhcmdldFtrZXldID0gcmVzdWx0UHJvcGVydHk7XG5cbiAgICBpZiAoUFJPVE8pIHtcbiAgICAgIFZJUlRVQUxfUFJPVE9UWVBFID0gVEFSR0VUICsgJ1Byb3RvdHlwZSc7XG4gICAgICBpZiAoIWhhcyhwYXRoLCBWSVJUVUFMX1BST1RPVFlQRSkpIHtcbiAgICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHBhdGgsIFZJUlRVQUxfUFJPVE9UWVBFLCB7fSk7XG4gICAgICB9XG4gICAgICAvLyBleHBvcnQgdmlydHVhbCBwcm90b3R5cGUgbWV0aG9kc1xuICAgICAgcGF0aFtWSVJUVUFMX1BST1RPVFlQRV1ba2V5XSA9IHNvdXJjZVByb3BlcnR5O1xuICAgICAgLy8gZXhwb3J0IHJlYWwgcHJvdG90eXBlIG1ldGhvZHNcbiAgICAgIGlmIChvcHRpb25zLnJlYWwgJiYgdGFyZ2V0UHJvdG90eXBlICYmICF0YXJnZXRQcm90b3R5cGVba2V5XSkge1xuICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkodGFyZ2V0UHJvdG90eXBlLCBrZXksIHNvdXJjZVByb3BlcnR5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2JpbmQtY29udGV4dCcpO1xuXG4vLyBgRmxhdHRlbkludG9BcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLWZsYXRNYXAvI3NlYy1GbGF0dGVuSW50b0FycmF5XG52YXIgZmxhdHRlbkludG9BcnJheSA9IGZ1bmN0aW9uICh0YXJnZXQsIG9yaWdpbmFsLCBzb3VyY2UsIHNvdXJjZUxlbiwgc3RhcnQsIGRlcHRoLCBtYXBwZXIsIHRoaXNBcmcpIHtcbiAgdmFyIHRhcmdldEluZGV4ID0gc3RhcnQ7XG4gIHZhciBzb3VyY2VJbmRleCA9IDA7XG4gIHZhciBtYXBGbiA9IG1hcHBlciA/IGJpbmQobWFwcGVyLCB0aGlzQXJnLCAzKSA6IGZhbHNlO1xuICB2YXIgZWxlbWVudDtcblxuICB3aGlsZSAoc291cmNlSW5kZXggPCBzb3VyY2VMZW4pIHtcbiAgICBpZiAoc291cmNlSW5kZXggaW4gc291cmNlKSB7XG4gICAgICBlbGVtZW50ID0gbWFwRm4gPyBtYXBGbihzb3VyY2Vbc291cmNlSW5kZXhdLCBzb3VyY2VJbmRleCwgb3JpZ2luYWwpIDogc291cmNlW3NvdXJjZUluZGV4XTtcblxuICAgICAgaWYgKGRlcHRoID4gMCAmJiBpc0FycmF5KGVsZW1lbnQpKSB7XG4gICAgICAgIHRhcmdldEluZGV4ID0gZmxhdHRlbkludG9BcnJheSh0YXJnZXQsIG9yaWdpbmFsLCBlbGVtZW50LCB0b0xlbmd0aChlbGVtZW50Lmxlbmd0aCksIHRhcmdldEluZGV4LCBkZXB0aCAtIDEpIC0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0YXJnZXRJbmRleCA+PSAweDFGRkZGRkZGRkZGRkZGKSB0aHJvdyBUeXBlRXJyb3IoJ0V4Y2VlZCB0aGUgYWNjZXB0YWJsZSBhcnJheSBsZW5ndGgnKTtcbiAgICAgICAgdGFyZ2V0W3RhcmdldEluZGV4XSA9IGVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIHRhcmdldEluZGV4Kys7XG4gICAgfVxuICAgIHNvdXJjZUluZGV4Kys7XG4gIH1cbiAgcmV0dXJuIHRhcmdldEluZGV4O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmbGF0dGVuSW50b0FycmF5O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaGFyZWQoJ25hdGl2ZS1mdW5jdGlvbi10by1zdHJpbmcnLCBGdW5jdGlvbi50b1N0cmluZyk7XG4iLCJ2YXIgcGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXRoJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFyaWFibGUgPT0gJ2Z1bmN0aW9uJyA/IHZhcmlhYmxlIDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKHBhdGhbbmFtZXNwYWNlXSkgfHwgYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKVxuICAgIDogcGF0aFtuYW1lc3BhY2VdICYmIHBhdGhbbmFtZXNwYWNlXVttZXRob2RdIHx8IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gZ2V0SXRlcmF0b3JNZXRob2QoaXQpO1xuICBpZiAodHlwZW9mIGl0ZXJhdG9yTWV0aG9kICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGl0ZXJhYmxlJyk7XG4gIH0gcmV0dXJuIGFuT2JqZWN0KGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXQpKTtcbn07XG4iLCJ2YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgdmFyIGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZTtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikge1xuICAgIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBjb25zb2xlLmVycm9yKGEpIDogY29uc29sZS5lcnJvcihhLCBiKTtcbiAgfVxufTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ2RvY3VtZW50JywgJ2RvY3VtZW50RWxlbWVudCcpO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9IDc7XG59KTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyIHNwbGl0ID0gJycuc3BsaXQ7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIHJldHVybiAhT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT0gJ1N0cmluZycgPyBzcGxpdC5jYWxsKGl0LCAnJykgOiBPYmplY3QoaXQpO1xufSA6IE9iamVjdDtcbiIsInZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBvYmplY3RIYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQKSB7XG4gIHZhciBzdG9yZSA9IG5ldyBXZWFrTWFwKCk7XG4gIHZhciB3bWdldCA9IHN0b3JlLmdldDtcbiAgdmFyIHdtaGFzID0gc3RvcmUuaGFzO1xuICB2YXIgd21zZXQgPSBzdG9yZS5zZXQ7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICB3bXNldC5jYWxsKHN0b3JlLCBpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtZ2V0LmNhbGwoc3RvcmUsIGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtaGFzLmNhbGwoc3RvcmUsIGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIG9iamVjdEhhcyhpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvdHlwZVtJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc2FycmF5XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IHR5cGVvZiBkZXRlY3Rpb24gPT0gJ2Z1bmN0aW9uJyA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTyA9IE9iamVjdChpdCk7XG4gIHJldHVybiBPW0lURVJBVE9SXSAhPT0gdW5kZWZpbmVkXG4gICAgfHwgJ0BAaXRlcmF0b3InIGluIE9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgfHwgSXRlcmF0b3JzLmhhc093blByb3BlcnR5KGNsYXNzb2YoTykpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2JpbmQtY29udGV4dCcpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nJyk7XG5cbnZhciBSZXN1bHQgPSBmdW5jdGlvbiAoc3RvcHBlZCwgcmVzdWx0KSB7XG4gIHRoaXMuc3RvcHBlZCA9IHN0b3BwZWQ7XG4gIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xufTtcblxudmFyIGl0ZXJhdGUgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZm4sIHRoYXQsIEFTX0VOVFJJRVMsIElTX0lURVJBVE9SKSB7XG4gIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChmbiwgdGhhdCwgQVNfRU5UUklFUyA/IDIgOiAxKTtcbiAgdmFyIGl0ZXJhdG9yLCBpdGVyRm4sIGluZGV4LCBsZW5ndGgsIHJlc3VsdCwgbmV4dCwgc3RlcDtcblxuICBpZiAoSVNfSVRFUkFUT1IpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhYmxlO1xuICB9IGVsc2Uge1xuICAgIGl0ZXJGbiA9IGdldEl0ZXJhdG9yTWV0aG9kKGl0ZXJhYmxlKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoJ1RhcmdldCBpcyBub3QgaXRlcmFibGUnKTtcbiAgICAvLyBvcHRpbWlzYXRpb24gZm9yIGFycmF5IGl0ZXJhdG9yc1xuICAgIGlmIChpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlckZuKSkge1xuICAgICAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIHJlc3VsdCA9IEFTX0VOVFJJRVNcbiAgICAgICAgICA/IGJvdW5kRnVuY3Rpb24oYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pXG4gICAgICAgICAgOiBib3VuZEZ1bmN0aW9uKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0IGluc3RhbmNlb2YgUmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG4gICAgfVxuICAgIGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpO1xuICB9XG5cbiAgbmV4dCA9IGl0ZXJhdG9yLm5leHQ7XG4gIHdoaWxlICghKHN0ZXAgPSBuZXh0LmNhbGwoaXRlcmF0b3IpKS5kb25lKSB7XG4gICAgcmVzdWx0ID0gY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyhpdGVyYXRvciwgYm91bmRGdW5jdGlvbiwgc3RlcC52YWx1ZSwgQVNfRU5UUklFUyk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT0gJ29iamVjdCcgJiYgcmVzdWx0ICYmIHJlc3VsdCBpbnN0YW5jZW9mIFJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG59O1xuXG5pdGVyYXRlLnN0b3AgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gIHJldHVybiBuZXcgUmVzdWx0KHRydWUsIHJlc3VsdCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBmYWxzZTtcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJWAgb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLW9iamVjdFxudmFyIEl0ZXJhdG9yUHJvdG90eXBlLCBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUsIGFycmF5SXRlcmF0b3I7XG5cbmlmIChbXS5rZXlzKSB7XG4gIGFycmF5SXRlcmF0b3IgPSBbXS5rZXlzKCk7XG4gIC8vIFNhZmFyaSA4IGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICBpZiAoISgnbmV4dCcgaW4gYXJyYXlJdGVyYXRvcikpIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSB0cnVlO1xuICBlbHNlIHtcbiAgICBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihnZXRQcm90b3R5cGVPZihhcnJheUl0ZXJhdG9yKSk7XG4gICAgaWYgKFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSkgSXRlcmF0b3JQcm90b3R5cGUgPSBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cbn1cblxuaWYgKEl0ZXJhdG9yUHJvdG90eXBlID09IHVuZGVmaW5lZCkgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbmlmICghSVNfUFVSRSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIHtcbiAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBJdGVyYXRvclByb3RvdHlwZTogSXRlcmF0b3JQcm90b3R5cGUsXG4gIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlM6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlNcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90YXNrJykuc2V0O1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2VyLWFnZW50Jyk7XG5cbnZhciBNdXRhdGlvbk9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBJU19OT0RFID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG4vLyBOb2RlLmpzIDExIHNob3dzIEV4cGVyaW1lbnRhbFdhcm5pbmcgb24gZ2V0dGluZyBgcXVldWVNaWNyb3Rhc2tgXG52YXIgcXVldWVNaWNyb3Rhc2tEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGdsb2JhbCwgJ3F1ZXVlTWljcm90YXNrJyk7XG52YXIgcXVldWVNaWNyb3Rhc2sgPSBxdWV1ZU1pY3JvdGFza0Rlc2NyaXB0b3IgJiYgcXVldWVNaWNyb3Rhc2tEZXNjcmlwdG9yLnZhbHVlO1xuXG52YXIgZmx1c2gsIGhlYWQsIGxhc3QsIG5vdGlmeSwgdG9nZ2xlLCBub2RlLCBwcm9taXNlLCB0aGVuO1xuXG4vLyBtb2Rlcm4gZW5naW5lcyBoYXZlIHF1ZXVlTWljcm90YXNrIG1ldGhvZFxuaWYgKCFxdWV1ZU1pY3JvdGFzaykge1xuICBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoSVNfTk9ERSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoSVNfTk9ERSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyAtIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMzlcbiAgfSBlbHNlIGlmIChNdXRhdGlvbk9ic2VydmVyICYmICEvKGlwaG9uZXxpcG9kfGlwYWQpLiphcHBsZXdlYmtpdC9pLnRlc3QodXNlckFnZW50KSkge1xuICAgIHRvZ2dsZSA9IHRydWU7XG4gICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgTXV0YXRpb25PYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgLy8gUHJvbWlzZS5yZXNvbHZlIHdpdGhvdXQgYW4gYXJndW1lbnQgdGhyb3dzIGFuIGVycm9yIGluIExHIFdlYk9TIDJcbiAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgdGhlbiA9IHByb21pc2UudGhlbjtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGVuLmNhbGwocHJvbWlzZSwgZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVldWVNaWNyb3Rhc2sgfHwgZnVuY3Rpb24gKGZuKSB7XG4gIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgaWYgKCFoZWFkKSB7XG4gICAgaGVhZCA9IHRhc2s7XG4gICAgbm90aWZ5KCk7XG4gIH0gbGFzdCA9IHRhc2s7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWwuUHJvbWlzZTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgcmV0dXJuICFTdHJpbmcoU3ltYm9sKCkpO1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIG5hdGl2ZUZ1bmN0aW9uVG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdG8tc3RyaW5nJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KG5hdGl2ZUZ1bmN0aW9uVG9TdHJpbmcuY2FsbChXZWFrTWFwKSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcblxudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG5cbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBzY3JpcHQgPSAnc2NyaXB0JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIganMgPSAnamF2YScgKyBzY3JpcHQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9IFN0cmluZyhqcyk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyBzY3JpcHQgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvJyArIHNjcmlwdCArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChsZW5ndGgtLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkZWZpbmVQcm9wZXJ0aWVzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5oaWRkZW5LZXlzW0lFX1BST1RPXSA9IHRydWU7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsZW5ndGggPiBpbmRleCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXkgPSBrZXlzW2luZGV4KytdLCBQcm9wZXJ0aWVzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xuXG52YXIgbmF0aXZlRGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IG5hdGl2ZURlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIXByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwidmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKS5mO1xuXG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nXG4gICAgPyBnZXRXaW5kb3dOYW1lcyhpdClcbiAgICA6IG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXModG9JbmRleGVkT2JqZWN0KGl0KSk7XG59O1xuIiwidmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXInKTtcblxudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8vIGBPYmplY3QuZ2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldHByb3RvdHlwZW9mXG5tb2R1bGUuZXhwb3J0cyA9IENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90b3R5cGUgOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzKGhpZGRlbktleXMsIGtleSkgJiYgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgYVBvc3NpYmxlUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3Quc2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnNldHByb3RvdHlwZW9mXG4vLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyBmdW5jdGlvbiAoKSB7XG4gIHZhciBDT1JSRUNUX1NFVFRFUiA9IGZhbHNlO1xuICB2YXIgdGVzdCA9IHt9O1xuICB2YXIgc2V0dGVyO1xuICB0cnkge1xuICAgIHNldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldDtcbiAgICBzZXR0ZXIuY2FsbCh0ZXN0LCBbXSk7XG4gICAgQ09SUkVDVF9TRVRURVIgPSB0ZXN0IGluc3RhbmNlb2YgQXJyYXk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgYW5PYmplY3QoTyk7XG4gICAgYVBvc3NpYmxlUHJvdG90eXBlKHByb3RvKTtcbiAgICBpZiAoQ09SUkVDVF9TRVRURVIpIHNldHRlci5jYWxsKE8sIHByb3RvKTtcbiAgICBlbHNlIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgcmV0dXJuIE87XG4gIH07XG59KCkgOiB1bmRlZmluZWQpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpICE9PSAnW29iamVjdCB6XScgPyBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xufSA6IHRlc3QudG9TdHJpbmc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGVycm9yOiBmYWxzZSwgdmFsdWU6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IGVycm9yOiB0cnVlLCB2YWx1ZTogZXJyb3IgfTtcbiAgfVxufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG4iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMudW5zYWZlICYmIHRhcmdldFtrZXldKSB0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBvcHRpb25zKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcbiIsInZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmVudW1lcmFibGUpIHRhcmdldFtrZXldID0gdmFsdWU7XG4gIGVsc2UgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHRhcmdldCwga2V5LCB2YWx1ZSk7XG59O1xuIiwiLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShnbG9iYWwsIGtleSwgdmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDT05TVFJVQ1RPUl9OQU1FKSB7XG4gIHZhciBDb25zdHJ1Y3RvciA9IGdldEJ1aWx0SW4oQ09OU1RSVUNUT1JfTkFNRSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmIENvbnN0cnVjdG9yICYmICFDb25zdHJ1Y3RvcltTUEVDSUVTXSkge1xuICAgIGRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBTUEVDSUVTLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgICB9KTtcbiAgfVxufTtcbiIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC10by1zdHJpbmcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgTUVUSE9EX1JFUVVJUkVEID0gdG9TdHJpbmcgIT09ICh7fSkudG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBUQUcsIFNUQVRJQywgU0VUX01FVEhPRCkge1xuICBpZiAoaXQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gU1RBVElDID8gaXQgOiBpdC5wcm90b3R5cGU7XG4gICAgaWYgKCFoYXModGFyZ2V0LCBUT19TVFJJTkdfVEFHKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBUT19TVFJJTkdfVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IFRBRyB9KTtcbiAgICB9XG4gICAgaWYgKFNFVF9NRVRIT0QgJiYgTUVUSE9EX1JFUVVJUkVEKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkodGFyZ2V0LCAndG9TdHJpbmcnLCB0b1N0cmluZyk7XG4gICAgfVxuICB9XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCBzZXRHbG9iYWwoU0hBUkVELCB7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG4iLCJ2YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiAnMy4zLjQnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTkgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICFtZXRob2QgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsLG5vLXRocm93LWxpdGVyYWxcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHRocm93IDE7IH0sIDEpO1xuICB9KTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxuLy8gYFNwZWNpZXNDb25zdHJ1Y3RvcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zcGVjaWVzY29uc3RydWN0b3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGRlZmF1bHRDb25zdHJ1Y3Rvcikge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBkZWZhdWx0Q29uc3RydWN0b3IgOiBhRnVuY3Rpb24oUyk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyBjb2RlUG9pbnRBdCwgYXQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChDT05WRVJUX1RPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBwb3MpIHtcbiAgICB2YXIgUyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgdmFyIHBvc2l0aW9uID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIHNpemUgPSBTLmxlbmd0aDtcbiAgICB2YXIgZmlyc3QsIHNlY29uZDtcbiAgICBpZiAocG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHNpemUpIHJldHVybiBDT05WRVJUX1RPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGZpcnN0ID0gUy5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgICByZXR1cm4gZmlyc3QgPCAweEQ4MDAgfHwgZmlyc3QgPiAweERCRkYgfHwgcG9zaXRpb24gKyAxID09PSBzaXplXG4gICAgICB8fCAoc2Vjb25kID0gUy5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSkpIDwgMHhEQzAwIHx8IHNlY29uZCA+IDB4REZGRlxuICAgICAgICA/IENPTlZFUlRfVE9fU1RSSU5HID8gUy5jaGFyQXQocG9zaXRpb24pIDogZmlyc3RcbiAgICAgICAgOiBDT05WRVJUX1RPX1NUUklORyA/IFMuc2xpY2UocG9zaXRpb24sIHBvc2l0aW9uICsgMikgOiAoZmlyc3QgLSAweEQ4MDAgPDwgMTApICsgKHNlY29uZCAtIDB4REMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5jb2RlcG9pbnRhdFxuICBjb2RlQXQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLmF0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvU3RyaW5nLnByb3RvdHlwZS5hdFxuICBjaGFyQXQ6IGNyZWF0ZU1ldGhvZCh0cnVlKVxufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9iaW5kLWNvbnRleHQnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZXItYWdlbnQnKTtcblxudmFyIGxvY2F0aW9uID0gZ2xvYmFsLmxvY2F0aW9uO1xudmFyIHNldCA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXIgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGU7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG5cbnZhciBydW4gPSBmdW5jdGlvbiAoaWQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcblxudmFyIHJ1bm5lciA9IGZ1bmN0aW9uIChpZCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJ1bihpZCk7XG4gIH07XG59O1xuXG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuKGV2ZW50LmRhdGEpO1xufTtcblxudmFyIHBvc3QgPSBmdW5jdGlvbiAoaWQpIHtcbiAgLy8gb2xkIGVuZ2luZXMgaGF2ZSBub3QgbG9jYXRpb24ub3JpZ2luXG4gIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0KTtcbn07XG5cbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0IHx8ICFjbGVhcikge1xuICBzZXQgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbikpLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXIgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAoY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhydW5uZXIoaWQpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KHJ1bm5lcihpZCkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgLy8gZXhjZXB0IGlPUyAtIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82MjRcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCAmJiAhLyhpcGhvbmV8aXBvZHxpcGFkKS4qYXBwbGV3ZWJraXQvaS50ZXN0KHVzZXJBZ2VudCkpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGJpbmQocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyAmJiAhZmFpbHMocG9zdCkpIHtcbiAgICBkZWZlciA9IHBvc3Q7XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bihpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQocnVubmVyKGlkKSwgMCk7XG4gICAgfTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGNsZWFyOiBjbGVhclxufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4obGVuZ3RoLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsIi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCJ2YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBUb0ludGVnZXJgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9pbnRlZ2VyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNOYU4oYXJndW1lbnQgPSArYXJndW1lbnQpID8gMCA6IChhcmd1bWVudCA+IDAgPyBmbG9vciA6IGNlaWwpKGFyZ3VtZW50KTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBhcmd1bWVudCA+IDAgPyBtaW4odG9JbnRlZ2VyKGFyZ3VtZW50KSwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIFBSRUZFUlJFRF9TVFJJTkcpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChQUkVGRVJSRURfU1RSSU5HICYmIHR5cGVvZiAoZm4gPSBpbnB1dC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGlucHV0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFQUkVGRVJSRURfU1RSSU5HICYmIHR5cGVvZiAoZm4gPSBpbnB1dC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyBTdHJpbmcoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgKCsraWQgKyBwb3N0Zml4KS50b1N0cmluZygzNik7XG59O1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignbmF2aWdhdG9yJywgJ3VzZXJBZ2VudCcpIHx8ICcnO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIHZlcnNpb24gPSBtYXRjaFswXSArIG1hdGNoWzFdO1xufSBlbHNlIGlmICh1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICBpZiAobWF0Y2gpIHZlcnNpb24gPSBtYXRjaFsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uICYmICt2ZXJzaW9uO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBzdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdXG4gICAgfHwgKE5BVElWRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjtcbnZhciBNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQgPSAnTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJztcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XG59KTtcblxudmFyIFNQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhU1BFQ0lFU19TVVBQT1JUO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuY29uY2F0XG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAaXNDb25jYXRTcHJlYWRhYmxlIGFuZCBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IHRvTGVuZ3RoKEUubGVuZ3RoKTtcbiAgICAgICAgaWYgKG4gKyBsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGxlbjsgaysrLCBuKyspIGlmIChrIGluIEUpIGNyZWF0ZVByb3BlcnR5KEEsIG4sIEVba10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG4gPj0gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZXZlcnkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZXZlcnk7XG52YXIgc2xvcHB5QXJyYXlNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2xvcHB5LWFycmF5LW1ldGhvZCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmV2ZXJ5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5ldmVyeVxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogc2xvcHB5QXJyYXlNZXRob2QoJ2V2ZXJ5JykgfSwge1xuICBldmVyeTogZnVuY3Rpb24gZXZlcnkoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJGV2ZXJ5KHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmlsdGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbHRlcjtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnZmlsdGVyJykgfSwge1xuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkZmlsdGVyKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmbGF0dGVuSW50b0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZsYXR0ZW4taW50by1hcnJheScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmxhdE1hcGAgbWV0aG9kXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1mbGF0TWFwXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSB9LCB7XG4gIGZsYXRNYXA6IGZ1bmN0aW9uIGZsYXRNYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBzb3VyY2VMZW4gPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIEE7XG4gICAgYUZ1bmN0aW9uKGNhbGxiYWNrZm4pO1xuICAgIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgQS5sZW5ndGggPSBmbGF0dGVuSW50b0FycmF5KEEsIE8sIE8sIHNvdXJjZUxlbiwgMCwgMSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBbXS5mb3JFYWNoICE9IGZvckVhY2ggfSwge1xuICBmb3JFYWNoOiBmb3JFYWNoXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZyb20gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZnJvbScpO1xudmFyIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24nKTtcblxudmFyIElOQ09SUkVDVF9JVEVSQVRJT04gPSAhY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuICBBcnJheS5mcm9tKGl0ZXJhYmxlKTtcbn0pO1xuXG4vLyBgQXJyYXkuZnJvbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5mcm9tXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IElOQ09SUkVDVF9JVEVSQVRJT04gfSwge1xuICBmcm9tOiBmcm9tXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBzbG9wcHlBcnJheU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zbG9wcHktYXJyYXktbWV0aG9kJyk7XG5cbnZhciBuYXRpdmVJbmRleE9mID0gW10uaW5kZXhPZjtcblxudmFyIE5FR0FUSVZFX1pFUk8gPSAhIW5hdGl2ZUluZGV4T2YgJiYgMSAvIFsxXS5pbmRleE9mKDEsIC0wKSA8IDA7XG52YXIgU0xPUFBZX01FVEhPRCA9IHNsb3BweUFycmF5TWV0aG9kKCdpbmRleE9mJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogTkVHQVRJVkVfWkVSTyB8fCBTTE9QUFlfTUVUSE9EIH0sIHtcbiAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50IC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiBORUdBVElWRV9aRVJPXG4gICAgICAvLyBjb252ZXJ0IC0wIHRvICswXG4gICAgICA/IG5hdGl2ZUluZGV4T2YuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCAwXG4gICAgICA6ICRpbmRleE9mKHRoaXMsIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG5cbi8vIGBBcnJheS5pc0FycmF5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LmlzYXJyYXlcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHN0YXQ6IHRydWUgfSwge1xuICBpc0FycmF5OiBpc0FycmF5XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgZGVmaW5lSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yJyk7XG5cbnZhciBBUlJBWV9JVEVSQVRPUiA9ICdBcnJheSBJdGVyYXRvcic7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihBUlJBWV9JVEVSQVRPUik7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZW50cmllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZW50cmllc1xuLy8gYEFycmF5LnByb3RvdHlwZS5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5rZXlzXG4vLyBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUudmFsdWVzXG4vLyBgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQGl0ZXJhdG9yXG4vLyBgQ3JlYXRlQXJyYXlJdGVyYXRvcmAgaW50ZXJuYWwgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1jcmVhdGVhcnJheWl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZUl0ZXJhdG9yKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG4gICAgdHlwZTogQVJSQVlfSVRFUkFUT1IsXG4gICAgdGFyZ2V0OiB0b0luZGV4ZWRPYmplY3QoaXRlcmF0ZWQpLCAvLyB0YXJnZXRcbiAgICBpbmRleDogMCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgICBraW5kOiBraW5kICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgfSk7XG4vLyBgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtJWFycmF5aXRlcmF0b3Jwcm90b3R5cGUlLm5leHRcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgdmFyIHRhcmdldCA9IHN0YXRlLnRhcmdldDtcbiAgdmFyIGtpbmQgPSBzdGF0ZS5raW5kO1xuICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleCsrO1xuICBpZiAoIXRhcmdldCB8fCBpbmRleCA+PSB0YXJnZXQubGVuZ3RoKSB7XG4gICAgc3RhdGUudGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiB7IHZhbHVlOiBpbmRleCwgZG9uZTogZmFsc2UgfTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiB7IHZhbHVlOiB0YXJnZXRbaW5kZXhdLCBkb25lOiBmYWxzZSB9O1xuICByZXR1cm4geyB2YWx1ZTogW2luZGV4LCB0YXJnZXRbaW5kZXhdXSwgZG9uZTogZmFsc2UgfTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1jcmVhdGV1bm1hcHBlZGFyZ3VtZW50c29iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtY3JlYXRlbWFwcGVkYXJndW1lbnRzb2JqZWN0XG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJykgfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkc29tZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5zb21lO1xudmFyIHNsb3BweUFycmF5TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Nsb3BweS1hcnJheS1tZXRob2QnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5zb21lYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb21lXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBzbG9wcHlBcnJheU1ldGhvZCgnc29tZScpIH0sIHtcbiAgc29tZTogZnVuY3Rpb24gc29tZShjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkc29tZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHNsb3BweUFycmF5TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Nsb3BweS1hcnJheS1tZXRob2QnKTtcblxudmFyIG5hdGl2ZVNvcnQgPSBbXS5zb3J0O1xudmFyIHRlc3QgPSBbMSwgMiwgM107XG5cbi8vIElFOC1cbnZhciBGQUlMU19PTl9VTkRFRklORUQgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHRlc3Quc29ydCh1bmRlZmluZWQpO1xufSk7XG4vLyBWOCBidWdcbnZhciBGQUlMU19PTl9OVUxMID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB0ZXN0LnNvcnQobnVsbCk7XG59KTtcbi8vIE9sZCBXZWJLaXRcbnZhciBTTE9QUFlfTUVUSE9EID0gc2xvcHB5QXJyYXlNZXRob2QoJ3NvcnQnKTtcblxudmFyIEZPUkNFRCA9IEZBSUxTX09OX1VOREVGSU5FRCB8fCAhRkFJTFNfT05fTlVMTCB8fCBTTE9QUFlfTUVUSE9EO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNvcnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNvcnRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIHNvcnQ6IGZ1bmN0aW9uIHNvcnQoY29tcGFyZWZuKSB7XG4gICAgcmV0dXJuIGNvbXBhcmVmbiA9PT0gdW5kZWZpbmVkXG4gICAgICA/IG5hdGl2ZVNvcnQuY2FsbCh0b09iamVjdCh0aGlzKSlcbiAgICAgIDogbmF0aXZlU29ydC5jYWxsKHRvT2JqZWN0KHRoaXMpLCBhRnVuY3Rpb24oY29tcGFyZWZuKSk7XG4gIH1cbn0pO1xuIiwiLy8gdGhpcyBtZXRob2Qgd2FzIGFkZGVkIHRvIHVuc2NvcGFibGVzIGFmdGVyIGltcGxlbWVudGF0aW9uXG4vLyBpbiBwb3B1bGFyIGVuZ2luZXMsIHNvIGl0J3MgbW92ZWQgdG8gYSBzZXBhcmF0ZSBtb2R1bGVcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdmbGF0TWFwJyk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG5cbi8vIEpTT05bQEB0b1N0cmluZ1RhZ10gcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWpzb24tQEB0b3N0cmluZ3RhZ1xuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG4iLCJ2YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcblxuLy8gTWF0aFtAQHRvU3RyaW5nVGFnXSBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtbWF0aC1AQHRvc3RyaW5ndGFnXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBGQUlMU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBuYXRpdmVLZXlzKDEpOyB9KTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGQUlMU19PTl9QUklNSVRJVkVTIH0sIHtcbiAga2V5czogZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuIiwiLy8gZW1wdHlcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGVyZm9ybScpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xuXG4vLyBgUHJvbWlzZS5hbGxTZXR0bGVkYCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtYWxsU2V0dGxlZFxuJCh7IHRhcmdldDogJ1Byb21pc2UnLCBzdGF0OiB0cnVlIH0sIHtcbiAgYWxsU2V0dGxlZDogZnVuY3Rpb24gYWxsU2V0dGxlZChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwcm9taXNlUmVzb2x2ZSA9IGFGdW5jdGlvbihDLnJlc29sdmUpO1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBpdGVyYXRlKGl0ZXJhYmxlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgaW5kZXggPSBjb3VudGVyKys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBwcm9taXNlUmVzb2x2ZS5jYWxsKEMsIHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0geyBzdGF0dXM6ICdmdWxmaWxsZWQnLCB2YWx1ZTogdmFsdWUgfTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0geyBzdGF0dXM6ICdyZWplY3RlZCcsIHJlYXNvbjogZSB9O1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSByZWplY3QocmVzdWx0LnZhbHVlKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIE5hdGl2ZVByb21pc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXByb21pc2UtY29uc3RydWN0b3InKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcblxuLy8gYFByb21pc2UucHJvdG90eXBlLmZpbmFsbHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUuZmluYWxseVxuJCh7IHRhcmdldDogJ1Byb21pc2UnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSB9LCB7XG4gICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIGdldEJ1aWx0SW4oJ1Byb21pc2UnKSk7XG4gICAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2Ygb25GaW5hbGx5ID09ICdmdW5jdGlvbic7XG4gICAgcmV0dXJuIHRoaXMudGhlbihcbiAgICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4geDsgfSk7XG4gICAgICB9IDogb25GaW5hbGx5LFxuICAgICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IGU7IH0pO1xuICAgICAgfSA6IG9uRmluYWxseVxuICAgICk7XG4gIH1cbn0pO1xuXG4vLyBwYXRjaCBuYXRpdmUgUHJvbWlzZS5wcm90b3R5cGUgZm9yIG5hdGl2ZSBhc3luYyBmdW5jdGlvbnNcbmlmICghSVNfUFVSRSAmJiB0eXBlb2YgTmF0aXZlUHJvbWlzZSA9PSAnZnVuY3Rpb24nICYmICFOYXRpdmVQcm9taXNlLnByb3RvdHlwZVsnZmluYWxseSddKSB7XG4gIHJlZGVmaW5lKE5hdGl2ZVByb21pc2UucHJvdG90eXBlLCAnZmluYWxseScsIGdldEJ1aWx0SW4oJ1Byb21pc2UnKS5wcm90b3R5cGVbJ2ZpbmFsbHknXSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBOYXRpdmVQcm9taXNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1wcm9taXNlLWNvbnN0cnVjdG9yJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZS1hbGwnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXNwZWNpZXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4taW5zdGFuY2UnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9taWNyb3Rhc2snKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wcm9taXNlLXJlc29sdmUnKTtcbnZhciBob3N0UmVwb3J0RXJyb3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hvc3QtcmVwb3J0LWVycm9ycycpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BlcmZvcm0nKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC12ZXJzaW9uJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsUHJvbWlzZVN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoUFJPTUlTRSk7XG52YXIgUHJvbWlzZUNvbnN0cnVjdG9yID0gTmF0aXZlUHJvbWlzZTtcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciAkZmV0Y2ggPSBnZXRCdWlsdEluKCdmZXRjaCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcbnZhciBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eTtcbnZhciBJU19OT0RFID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgRElTUEFUQ0hfRVZFTlQgPSAhIShkb2N1bWVudCAmJiBkb2N1bWVudC5jcmVhdGVFdmVudCAmJiBnbG9iYWwuZGlzcGF0Y2hFdmVudCk7XG52YXIgVU5IQU5ETEVEX1JFSkVDVElPTiA9ICd1bmhhbmRsZWRyZWplY3Rpb24nO1xudmFyIFJFSkVDVElPTl9IQU5ETEVEID0gJ3JlamVjdGlvbmhhbmRsZWQnO1xudmFyIFBFTkRJTkcgPSAwO1xudmFyIEZVTEZJTExFRCA9IDE7XG52YXIgUkVKRUNURUQgPSAyO1xudmFyIEhBTkRMRUQgPSAxO1xudmFyIFVOSEFORExFRCA9IDI7XG52YXIgSW50ZXJuYWwsIE93blByb21pc2VDYXBhYmlsaXR5LCBQcm9taXNlV3JhcHBlciwgbmF0aXZlVGhlbjtcblxudmFyIEZPUkNFRCA9IGlzRm9yY2VkKFBST01JU0UsIGZ1bmN0aW9uICgpIHtcbiAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZUNvbnN0cnVjdG9yLnJlc29sdmUoMSk7XG4gIHZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbiAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbU1BFQ0lFU10gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgfTtcbiAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICByZXR1cm4gISgoSVNfTk9ERSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpXG4gICAgJiYgKCFJU19QVVJFIHx8IHByb21pc2VbJ2ZpbmFsbHknXSlcbiAgICAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2VcbiAgICAvLyB2OCA2LjYgKE5vZGUgMTAgYW5kIENocm9tZSA2NikgaGF2ZSBhIGJ1ZyB3aXRoIHJlc29sdmluZyBjdXN0b20gdGhlbmFibGVzXG4gICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9ODMwNTY1XG4gICAgLy8gd2UgY2FuJ3QgZGV0ZWN0IGl0IHN5bmNocm9ub3VzbHksIHNvIGp1c3QgY2hlY2sgdmVyc2lvbnNcbiAgICAmJiBWOF9WRVJTSU9OICE9PSA2Nik7XG59KTtcblxudmFyIElOQ09SUkVDVF9JVEVSQVRJT04gPSBGT1JDRUQgfHwgIWNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHtcbiAgUHJvbWlzZUNvbnN0cnVjdG9yLmFsbChpdGVyYWJsZSlbJ2NhdGNoJ10oZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KTtcbn0pO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcblxudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBzdGF0ZSwgaXNSZWplY3QpIHtcbiAgaWYgKHN0YXRlLm5vdGlmaWVkKSByZXR1cm47XG4gIHN0YXRlLm5vdGlmaWVkID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gc3RhdGUucmVhY3Rpb25zO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHN0YXRlLnZhbHVlO1xuICAgIHZhciBvayA9IHN0YXRlLnN0YXRlID09IEZVTEZJTExFRDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBjaGFpbltpbmRleCsrXTtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW4sIGV4aXRlZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHN0YXRlLnJlamVjdGlvbiA9PT0gVU5IQU5ETEVEKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlLCBzdGF0ZSk7XG4gICAgICAgICAgICBzdGF0ZS5yZWplY3Rpb24gPSBIQU5ETEVEO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpOyAvLyBjYW4gdGhyb3dcbiAgICAgICAgICAgIGlmIChkb21haW4pIHtcbiAgICAgICAgICAgICAgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICAgICAgZXhpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZG9tYWluICYmICFleGl0ZWQpIGRvbWFpbi5leGl0KCk7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICAgIHN0YXRlLnJlYWN0aW9ucyA9IFtdO1xuICAgIHN0YXRlLm5vdGlmaWVkID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFzdGF0ZS5yZWplY3Rpb24pIG9uVW5oYW5kbGVkKHByb21pc2UsIHN0YXRlKTtcbiAgfSk7XG59O1xuXG52YXIgZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChuYW1lLCBwcm9taXNlLCByZWFzb24pIHtcbiAgdmFyIGV2ZW50LCBoYW5kbGVyO1xuICBpZiAoRElTUEFUQ0hfRVZFTlQpIHtcbiAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgIGV2ZW50LnByb21pc2UgPSBwcm9taXNlO1xuICAgIGV2ZW50LnJlYXNvbiA9IHJlYXNvbjtcbiAgICBldmVudC5pbml0RXZlbnQobmFtZSwgZmFsc2UsIHRydWUpO1xuICAgIGdsb2JhbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfSBlbHNlIGV2ZW50ID0geyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHJlYXNvbiB9O1xuICBpZiAoaGFuZGxlciA9IGdsb2JhbFsnb24nICsgbmFtZV0pIGhhbmRsZXIoZXZlbnQpO1xuICBlbHNlIGlmIChuYW1lID09PSBVTkhBTkRMRURfUkVKRUNUSU9OKSBob3N0UmVwb3J0RXJyb3JzKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCByZWFzb24pO1xufTtcblxudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UsIHN0YXRlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZS52YWx1ZTtcbiAgICB2YXIgSVNfVU5IQU5ETEVEID0gaXNVbmhhbmRsZWQoc3RhdGUpO1xuICAgIHZhciByZXN1bHQ7XG4gICAgaWYgKElTX1VOSEFORExFRCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChJU19OT0RFKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBkaXNwYXRjaEV2ZW50KFVOSEFORExFRF9SRUpFQ1RJT04sIHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHN0YXRlLnJlamVjdGlvbiA9IElTX05PREUgfHwgaXNVbmhhbmRsZWQoc3RhdGUpID8gVU5IQU5ETEVEIDogSEFORExFRDtcbiAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHRocm93IHJlc3VsdC52YWx1ZTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIHJldHVybiBzdGF0ZS5yZWplY3Rpb24gIT09IEhBTkRMRUQgJiYgIXN0YXRlLnBhcmVudDtcbn07XG5cbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlLCBzdGF0ZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKElTX05PREUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBkaXNwYXRjaEV2ZW50KFJFSkVDVElPTl9IQU5ETEVELCBwcm9taXNlLCBzdGF0ZS52YWx1ZSk7XG4gIH0pO1xufTtcblxudmFyIGJpbmQgPSBmdW5jdGlvbiAoZm4sIHByb21pc2UsIHN0YXRlLCB1bndyYXApIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGZuKHByb21pc2UsIHN0YXRlLCB2YWx1ZSwgdW53cmFwKTtcbiAgfTtcbn07XG5cbnZhciBpbnRlcm5hbFJlamVjdCA9IGZ1bmN0aW9uIChwcm9taXNlLCBzdGF0ZSwgdmFsdWUsIHVud3JhcCkge1xuICBpZiAoc3RhdGUuZG9uZSkgcmV0dXJuO1xuICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgaWYgKHVud3JhcCkgc3RhdGUgPSB1bndyYXA7XG4gIHN0YXRlLnZhbHVlID0gdmFsdWU7XG4gIHN0YXRlLnN0YXRlID0gUkVKRUNURUQ7XG4gIG5vdGlmeShwcm9taXNlLCBzdGF0ZSwgdHJ1ZSk7XG59O1xuXG52YXIgaW50ZXJuYWxSZXNvbHZlID0gZnVuY3Rpb24gKHByb21pc2UsIHN0YXRlLCB2YWx1ZSwgdW53cmFwKSB7XG4gIGlmIChzdGF0ZS5kb25lKSByZXR1cm47XG4gIHN0YXRlLmRvbmUgPSB0cnVlO1xuICBpZiAodW53cmFwKSBzdGF0ZSA9IHVud3JhcDtcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIHZhciB0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSk7XG4gICAgaWYgKHRoZW4pIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBkb25lOiBmYWxzZSB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSxcbiAgICAgICAgICAgIGJpbmQoaW50ZXJuYWxSZXNvbHZlLCBwcm9taXNlLCB3cmFwcGVyLCBzdGF0ZSksXG4gICAgICAgICAgICBiaW5kKGludGVybmFsUmVqZWN0LCBwcm9taXNlLCB3cmFwcGVyLCBzdGF0ZSlcbiAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGludGVybmFsUmVqZWN0KHByb21pc2UsIHdyYXBwZXIsIGVycm9yLCBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgc3RhdGUuc3RhdGUgPSBGVUxGSUxMRUQ7XG4gICAgICBub3RpZnkocHJvbWlzZSwgc3RhdGUsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaW50ZXJuYWxSZWplY3QocHJvbWlzZSwgeyBkb25lOiBmYWxzZSB9LCBlcnJvciwgc3RhdGUpO1xuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKEZPUkNFRCkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICBQcm9taXNlQ29uc3RydWN0b3IgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCBQcm9taXNlQ29uc3RydWN0b3IsIFBST01JU0UpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihiaW5kKGludGVybmFsUmVzb2x2ZSwgdGhpcywgc3RhdGUpLCBiaW5kKGludGVybmFsUmVqZWN0LCB0aGlzLCBzdGF0ZSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpbnRlcm5hbFJlamVjdCh0aGlzLCBzdGF0ZSwgZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgICAgdHlwZTogUFJPTUlTRSxcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgbm90aWZpZWQ6IGZhbHNlLFxuICAgICAgcGFyZW50OiBmYWxzZSxcbiAgICAgIHJlYWN0aW9uczogW10sXG4gICAgICByZWplY3Rpb246IGZhbHNlLFxuICAgICAgc3RhdGU6IFBFTkRJTkcsXG4gICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgfSk7XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlZGVmaW5lQWxsKFByb21pc2VDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHtcbiAgICAvLyBgUHJvbWlzZS5wcm90b3R5cGUudGhlbmAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUudGhlblxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsUHJvbWlzZVN0YXRlKHRoaXMpO1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIFByb21pc2VDb25zdHJ1Y3RvcikpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBJU19OT0RFID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICBzdGF0ZS5wYXJlbnQgPSB0cnVlO1xuICAgICAgc3RhdGUucmVhY3Rpb25zLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHN0YXRlLnN0YXRlICE9IFBFTkRJTkcpIG5vdGlmeSh0aGlzLCBzdGF0ZSwgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyBgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UucHJvdG90eXBlLmNhdGNoXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUocHJvbWlzZSk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBiaW5kKGludGVybmFsUmVzb2x2ZSwgcHJvbWlzZSwgc3RhdGUpO1xuICAgIHRoaXMucmVqZWN0ID0gYmluZChpbnRlcm5hbFJlamVjdCwgcHJvbWlzZSwgc3RhdGUpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBDID09PSBQcm9taXNlQ29uc3RydWN0b3IgfHwgQyA9PT0gUHJvbWlzZVdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcblxuICBpZiAoIUlTX1BVUkUgJiYgdHlwZW9mIE5hdGl2ZVByb21pc2UgPT0gJ2Z1bmN0aW9uJykge1xuICAgIG5hdGl2ZVRoZW4gPSBOYXRpdmVQcm9taXNlLnByb3RvdHlwZS50aGVuO1xuXG4gICAgLy8gd3JhcCBuYXRpdmUgUHJvbWlzZSN0aGVuIGZvciBuYXRpdmUgYXN5bmMgZnVuY3Rpb25zXG4gICAgcmVkZWZpbmUoTmF0aXZlUHJvbWlzZS5wcm90b3R5cGUsICd0aGVuJywgZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlQ29uc3RydWN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBuYXRpdmVUaGVuLmNhbGwodGhhdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NDBcbiAgICB9LCB7IHVuc2FmZTogdHJ1ZSB9KTtcblxuICAgIC8vIHdyYXAgZmV0Y2ggcmVzdWx0XG4gICAgaWYgKHR5cGVvZiAkZmV0Y2ggPT0gJ2Z1bmN0aW9uJykgJCh7IGdsb2JhbDogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgZmV0Y2g6IGZ1bmN0aW9uIGZldGNoKGlucHV0IC8qICwgaW5pdCAqLykge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoUHJvbWlzZUNvbnN0cnVjdG9yLCAkZmV0Y2guYXBwbHkoZ2xvYmFsLCBhcmd1bWVudHMpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4kKHsgZ2xvYmFsOiB0cnVlLCB3cmFwOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIFByb21pc2U6IFByb21pc2VDb25zdHJ1Y3RvclxufSk7XG5cbnNldFRvU3RyaW5nVGFnKFByb21pc2VDb25zdHJ1Y3RvciwgUFJPTUlTRSwgZmFsc2UsIHRydWUpO1xuc2V0U3BlY2llcyhQUk9NSVNFKTtcblxuUHJvbWlzZVdyYXBwZXIgPSBnZXRCdWlsdEluKFBST01JU0UpO1xuXG4vLyBzdGF0aWNzXG4kKHsgdGFyZ2V0OiBQUk9NSVNFLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGBQcm9taXNlLnJlamVjdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UucmVqZWN0XG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIGNhcGFiaWxpdHkucmVqZWN0LmNhbGwodW5kZWZpbmVkLCByKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuJCh7IHRhcmdldDogUFJPTUlTRSwgc3RhdDogdHJ1ZSwgZm9yY2VkOiBJU19QVVJFIHx8IEZPUkNFRCB9LCB7XG4gIC8vIGBQcm9taXNlLnJlc29sdmVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wcm9taXNlLnJlc29sdmVcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKElTX1BVUkUgJiYgdGhpcyA9PT0gUHJvbWlzZVdyYXBwZXIgPyBQcm9taXNlQ29uc3RydWN0b3IgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG5cbiQoeyB0YXJnZXQ6IFBST01JU0UsIHN0YXQ6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUX0lURVJBVElPTiB9LCB7XG4gIC8vIGBQcm9taXNlLmFsbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UuYWxsXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkcHJvbWlzZVJlc29sdmUgPSBhRnVuY3Rpb24oQy5yZXNvbHZlKTtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgaXRlcmF0ZShpdGVyYWJsZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gY291bnRlcisrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgJHByb21pc2VSZXNvbHZlLmNhbGwoQywgcHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSByZWplY3QocmVzdWx0LnZhbHVlKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyBgUHJvbWlzZS5yYWNlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcHJvbWlzZS5yYWNlXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRwcm9taXNlUmVzb2x2ZSA9IGFGdW5jdGlvbihDLnJlc29sdmUpO1xuICAgICAgaXRlcmF0ZShpdGVyYWJsZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgJHByb21pc2VSZXNvbHZlLmNhbGwoQywgcHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSByZWplY3QocmVzdWx0LnZhbHVlKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjaGFyQXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLW11bHRpYnl0ZScpLmNoYXJBdDtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgZGVmaW5lSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yJyk7XG5cbnZhciBTVFJJTkdfSVRFUkFUT1IgPSAnU3RyaW5nIEl0ZXJhdG9yJztcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKFNUUklOR19JVEVSQVRPUik7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUtQEBpdGVyYXRvclxuZGVmaW5lSXRlcmF0b3IoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgIHR5cGU6IFNUUklOR19JVEVSQVRPUixcbiAgICBzdHJpbmc6IFN0cmluZyhpdGVyYXRlZCksXG4gICAgaW5kZXg6IDBcbiAgfSk7XG4vLyBgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLSVzdHJpbmdpdGVyYXRvcnByb3RvdHlwZSUubmV4dFxufSwgZnVuY3Rpb24gbmV4dCgpIHtcbiAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgdmFyIHN0cmluZyA9IHN0YXRlLnN0cmluZztcbiAgdmFyIGluZGV4ID0gc3RhdGUuaW5kZXg7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IHN0cmluZy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSBjaGFyQXQoc3RyaW5nLCBpbmRleCk7XG4gIHN0YXRlLmluZGV4ICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG4iLCJ2YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbCcpO1xuXG4vLyBgU3ltYm9sLmFzeW5jSXRlcmF0b3JgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wuYXN5bmNpdGVyYXRvclxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCIvLyBlbXB0eVxuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC5oYXNJbnN0YW5jZWAgd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5oYXNpbnN0YW5jZVxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdoYXNJbnN0YW5jZScpO1xuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGVgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wuaXNjb25jYXRzcHJlYWRhYmxlXG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ2lzQ29uY2F0U3ByZWFkYWJsZScpO1xuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC5pdGVyYXRvcmAgd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5pdGVyYXRvclxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtc3ltYm9sJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIG5hdGl2ZU9iamVjdENyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMtZXh0ZXJuYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dyYXBwZWQtd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcblxudmFyIEhJRERFTiA9IHNoYXJlZEtleSgnaGlkZGVuJyk7XG52YXIgU1lNQk9MID0gJ1N5bWJvbCc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgVE9fUFJJTUlUSVZFID0gd2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoU1lNQk9MKTtcbnZhciBPYmplY3RQcm90b3R5cGUgPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBKU09OID0gZ2xvYmFsLkpTT047XG52YXIgbmF0aXZlSlNPTlN0cmluZ2lmeSA9IEpTT04gJiYgSlNPTi5zdHJpbmdpZnk7XG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG52YXIgbmF0aXZlRGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwuZjtcbnZhciBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmY7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvdHlwZVN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBTdHJpbmdUb1N5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzdHJpbmctdG8tc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgU3ltYm9sVG9TdHJpbmdSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXRvLXN0cmluZy1yZWdpc3RyeScpO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgVVNFX1NFVFRFUiA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RDcmVhdGUobmF0aXZlRGVmaW5lUHJvcGVydHkoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbmF0aXZlRGVmaW5lUHJvcGVydHkodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgdmFyIE9iamVjdFByb3RvdHlwZURlc2NyaXB0b3IgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0UHJvdG90eXBlLCBQKTtcbiAgaWYgKE9iamVjdFByb3RvdHlwZURlc2NyaXB0b3IpIGRlbGV0ZSBPYmplY3RQcm90b3R5cGVbUF07XG4gIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICBpZiAoT2JqZWN0UHJvdG90eXBlRGVzY3JpcHRvciAmJiBPICE9PSBPYmplY3RQcm90b3R5cGUpIHtcbiAgICBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPYmplY3RQcm90b3R5cGUsIFAsIE9iamVjdFByb3RvdHlwZURlc2NyaXB0b3IpO1xuICB9XG59IDogbmF0aXZlRGVmaW5lUHJvcGVydHk7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZywgZGVzY3JpcHRpb24pIHtcbiAgdmFyIHN5bWJvbCA9IEFsbFN5bWJvbHNbdGFnXSA9IG5hdGl2ZU9iamVjdENyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzZXRJbnRlcm5hbFN0YXRlKHN5bWJvbCwge1xuICAgIHR5cGU6IFNZTUJPTCxcbiAgICB0YWc6IHRhZyxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cbiAgfSk7XG4gIGlmICghREVTQ1JJUFRPUlMpIHN5bWJvbC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICByZXR1cm4gc3ltYm9sO1xufTtcblxudmFyIGlzU3ltYm9sID0gTkFUSVZFX1NZTUJPTCAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGl0KSBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBpZiAoTyA9PT0gT2JqZWN0UHJvdG90eXBlKSAkZGVmaW5lUHJvcGVydHkoT2JqZWN0UHJvdG90eXBlU3ltYm9scywgUCwgQXR0cmlidXRlcyk7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUF0dHJpYnV0ZXMuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoTywgSElEREVOKSkgbmF0aXZlRGVmaW5lUHJvcGVydHkoTywgSElEREVOLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwge30pKTtcbiAgICAgIE9bSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhPLCBISURERU4pICYmIE9bSElEREVOXVtrZXldKSBPW0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgQXR0cmlidXRlcyA9IG5hdGl2ZU9iamVjdENyZWF0ZShBdHRyaWJ1dGVzLCB7IGVudW1lcmFibGU6IGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzY3JpcHRvcihPLCBrZXksIEF0dHJpYnV0ZXMpO1xuICB9IHJldHVybiBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBrZXksIEF0dHJpYnV0ZXMpO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIgcHJvcGVydGllcyA9IHRvSW5kZXhlZE9iamVjdChQcm9wZXJ0aWVzKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKHByb3BlcnRpZXMpLmNvbmNhdCgkZ2V0T3duUHJvcGVydHlTeW1ib2xzKHByb3BlcnRpZXMpKTtcbiAgJGZvckVhY2goa2V5cywgZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghREVTQ1JJUFRPUlMgfHwgJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocHJvcGVydGllcywga2V5KSkgJGRlZmluZVByb3BlcnR5KE8sIGtleSwgcHJvcGVydGllc1trZXldKTtcbiAgfSk7XG4gIHJldHVybiBPO1xufTtcblxudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gbmF0aXZlT2JqZWN0Q3JlYXRlKE8pIDogJGRlZmluZVByb3BlcnRpZXMobmF0aXZlT2JqZWN0Q3JlYXRlKE8pLCBQcm9wZXJ0aWVzKTtcbn07XG5cbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBQID0gdG9QcmltaXRpdmUoViwgdHJ1ZSk7XG4gIHZhciBlbnVtZXJhYmxlID0gbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh0aGlzLCBQKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvdHlwZSAmJiBoYXMoQWxsU3ltYm9scywgUCkgJiYgIWhhcyhPYmplY3RQcm90b3R5cGVTeW1ib2xzLCBQKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gZW51bWVyYWJsZSB8fCAhaGFzKHRoaXMsIFApIHx8ICFoYXMoQWxsU3ltYm9scywgUCkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW1BdID8gZW51bWVyYWJsZSA6IHRydWU7XG59O1xuXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIHZhciBpdCA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvdHlwZSAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9iamVjdFByb3RvdHlwZVN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIGRlc2NyaXB0b3IgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG4gIGlmIChkZXNjcmlwdG9yICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIHtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSB0cnVlO1xuICB9XG4gIHJldHVybiBkZXNjcmlwdG9yO1xufTtcblxudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHZhciBuYW1lcyA9IG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXModG9JbmRleGVkT2JqZWN0KE8pKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICAkZm9yRWFjaChuYW1lcywgZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhoaWRkZW5LZXlzLCBrZXkpKSByZXN1bHQucHVzaChrZXkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pIHtcbiAgdmFyIElTX09CSkVDVF9QUk9UT1RZUEUgPSBPID09PSBPYmplY3RQcm90b3R5cGU7XG4gIHZhciBuYW1lcyA9IG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXMoSVNfT0JKRUNUX1BST1RPVFlQRSA/IE9iamVjdFByb3RvdHlwZVN5bWJvbHMgOiB0b0luZGV4ZWRPYmplY3QoTykpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gICRmb3JFYWNoKG5hbWVzLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICghSVNfT0JKRUNUX1BST1RPVFlQRSB8fCBoYXMoT2JqZWN0UHJvdG90eXBlLCBrZXkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gYFN5bWJvbGAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC1jb25zdHJ1Y3RvclxuaWYgKCFOQVRJVkVfU1lNQk9MKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9ICFhcmd1bWVudHMubGVuZ3RoIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogU3RyaW5nKGFyZ3VtZW50c1swXSk7XG4gICAgdmFyIHRhZyA9IHVpZChkZXNjcmlwdGlvbik7XG4gICAgdmFyIHNldHRlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvdHlwZSkgc2V0dGVyLmNhbGwoT2JqZWN0UHJvdG90eXBlU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjcmlwdG9yKHRoaXMsIHRhZywgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgVVNFX1NFVFRFUikgc2V0U3ltYm9sRGVzY3JpcHRvcihPYmplY3RQcm90b3R5cGUsIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogc2V0dGVyIH0pO1xuICAgIHJldHVybiB3cmFwKHRhZywgZGVzY3JpcHRpb24pO1xuICB9O1xuXG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGdldEludGVybmFsU3RhdGUodGhpcykudGFnO1xuICB9KTtcblxuICBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mID0gJGRlZmluZVByb3BlcnR5O1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZiA9IGdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1TeW1ib2wtZGVzY3JpcHRpb25cbiAgICBuYXRpdmVEZWZpbmVQcm9wZXJ0eSgkU3ltYm9sW1BST1RPVFlQRV0sICdkZXNjcmlwdGlvbicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLmRlc2NyaXB0aW9uO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghSVNfUFVSRSkge1xuICAgICAgcmVkZWZpbmUoT2JqZWN0UHJvdG90eXBlLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHsgdW5zYWZlOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHdyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2VsbEtub3duU3ltYm9sKG5hbWUpLCBuYW1lKTtcbiAgfTtcbn1cblxuJCh7IGdsb2JhbDogdHJ1ZSwgd3JhcDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX1NZTUJPTCwgc2hhbTogIU5BVElWRV9TWU1CT0wgfSwge1xuICBTeW1ib2w6ICRTeW1ib2xcbn0pO1xuXG4kZm9yRWFjaChvYmplY3RLZXlzKFdlbGxLbm93blN5bWJvbHNTdG9yZSksIGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlZmluZVdlbGxLbm93blN5bWJvbChuYW1lKTtcbn0pO1xuXG4kKHsgdGFyZ2V0OiBTWU1CT0wsIHN0YXQ6IHRydWUsIGZvcmNlZDogIU5BVElWRV9TWU1CT0wgfSwge1xuICAvLyBgU3ltYm9sLmZvcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5mb3JcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKGtleSk7XG4gICAgaWYgKGhhcyhTdHJpbmdUb1N5bWJvbFJlZ2lzdHJ5LCBzdHJpbmcpKSByZXR1cm4gU3RyaW5nVG9TeW1ib2xSZWdpc3RyeVtzdHJpbmddO1xuICAgIHZhciBzeW1ib2wgPSAkU3ltYm9sKHN0cmluZyk7XG4gICAgU3RyaW5nVG9TeW1ib2xSZWdpc3RyeVtzdHJpbmddID0gc3ltYm9sO1xuICAgIFN5bWJvbFRvU3RyaW5nUmVnaXN0cnlbc3ltYm9sXSA9IHN0cmluZztcbiAgICByZXR1cm4gc3ltYm9sO1xuICB9LFxuICAvLyBgU3ltYm9sLmtleUZvcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5rZXlmb3JcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2wnKTtcbiAgICBpZiAoaGFzKFN5bWJvbFRvU3RyaW5nUmVnaXN0cnksIHN5bSkpIHJldHVybiBTeW1ib2xUb1N0cmluZ1JlZ2lzdHJ5W3N5bV07XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBVU0VfU0VUVEVSID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IFVTRV9TRVRURVIgPSBmYWxzZTsgfVxufSk7XG5cbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFOQVRJVkVfU1lNQk9MLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICAvLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JzXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvclxufSk7XG5cbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFOQVRJVkVfU1lNQk9MIH0sIHtcbiAgLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5c3ltYm9sc1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyBDaHJvbWUgMzggYW5kIDM5IGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCBmYWlscyBvbiBwcmltaXRpdmVzXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zNDQzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBmYWlscyhmdW5jdGlvbiAoKSB7IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mKDEpOyB9KSB9LCB7XG4gIGdldE93blByb3BlcnR5U3ltYm9sczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gICAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuXG4vLyBgSlNPTi5zdHJpbmdpZnlgIG1ldGhvZCBiZWhhdmlvciB3aXRoIHN5bWJvbHNcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWpzb24uc3RyaW5naWZ5XG5KU09OICYmICQoeyB0YXJnZXQ6ICdKU09OJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX1NZTUJPTCB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIHJldHVybiBuYXRpdmVKU09OU3RyaW5naWZ5KFtzeW1ib2xdKSAhPSAnW251bGxdJ1xuICAgIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAgIHx8IG5hdGl2ZUpTT05TdHJpbmdpZnkoeyBhOiBzeW1ib2wgfSkgIT0gJ3t9J1xuICAgIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gICAgfHwgbmF0aXZlSlNPTlN0cmluZ2lmeShPYmplY3Qoc3ltYm9sKSkgIT0gJ3t9Jztcbn0pIH0sIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGluZGV4ID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGluZGV4KSBhcmdzLnB1c2goYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBuYXRpdmVKU09OU3RyaW5naWZ5LmFwcGx5KEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gYFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLnByb3RvdHlwZS1AQHRvcHJpbWl0aXZlXG5pZiAoISRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdKSB7XG4gIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xufVxuLy8gYFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11gIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wucHJvdG90eXBlLUBAdG9zdHJpbmd0YWdcbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsIFNZTUJPTCk7XG5cbmhpZGRlbktleXNbSElEREVOXSA9IHRydWU7XG4iLCJ2YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbCcpO1xuXG4vLyBgU3ltYm9sLm1hdGNoQWxsYCB3ZWxsLWtub3duIHN5bWJvbFxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdtYXRjaEFsbCcpO1xuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC5tYXRjaGAgd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5tYXRjaFxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC5yZXBsYWNlYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLnJlcGxhY2VcbmRlZmluZVdlbGxLbm93blN5bWJvbCgncmVwbGFjZScpO1xuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC5zZWFyY2hgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wuc2VhcmNoXG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ3NlYXJjaCcpO1xuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC5zcGVjaWVzYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLnNwZWNpZXNcbmRlZmluZVdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC5zcGxpdGAgd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5zcGxpdFxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdzcGxpdCcpO1xuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC50b1ByaW1pdGl2ZWAgd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC50b3ByaW1pdGl2ZVxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC50b1N0cmluZ1RhZ2Agd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC50b3N0cmluZ3RhZ1xuZGVmaW5lV2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC51bnNjb3BhYmxlc2Agd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC51bnNjb3BhYmxlc1xuZGVmaW5lV2VsbEtub3duU3ltYm9sKCd1bnNjb3BhYmxlcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbEFnZ3JlZ2F0ZUVycm9yU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcignQWdncmVnYXRlRXJyb3InKTtcblxudmFyICRBZ2dyZWdhdGVFcnJvciA9IGZ1bmN0aW9uIEFnZ3JlZ2F0ZUVycm9yKGVycm9ycywgbWVzc2FnZSkge1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIGlmICghKHRoYXQgaW5zdGFuY2VvZiAkQWdncmVnYXRlRXJyb3IpKSByZXR1cm4gbmV3ICRBZ2dyZWdhdGVFcnJvcihlcnJvcnMsIG1lc3NhZ2UpO1xuICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICB0aGF0ID0gc2V0UHJvdG90eXBlT2YobmV3IEVycm9yKG1lc3NhZ2UpLCBnZXRQcm90b3R5cGVPZih0aGF0KSk7XG4gIH1cbiAgdmFyIGVycm9yc0FycmF5ID0gW107XG4gIGl0ZXJhdGUoZXJyb3JzLCBlcnJvcnNBcnJheS5wdXNoLCBlcnJvcnNBcnJheSk7XG4gIGlmIChERVNDUklQVE9SUykgc2V0SW50ZXJuYWxTdGF0ZSh0aGF0LCB7IGVycm9yczogZXJyb3JzQXJyYXksIHR5cGU6ICdBZ2dyZWdhdGVFcnJvcicgfSk7XG4gIGVsc2UgdGhhdC5lcnJvcnMgPSBlcnJvcnNBcnJheTtcbiAgaWYgKG1lc3NhZ2UgIT09IHVuZGVmaW5lZCkgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHRoYXQsICdtZXNzYWdlJywgU3RyaW5nKG1lc3NhZ2UpKTtcbiAgcmV0dXJuIHRoYXQ7XG59O1xuXG4kQWdncmVnYXRlRXJyb3IucHJvdG90eXBlID0gY3JlYXRlKEVycm9yLnByb3RvdHlwZSwge1xuICBjb25zdHJ1Y3RvcjogY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDUsICRBZ2dyZWdhdGVFcnJvciksXG4gIG1lc3NhZ2U6IGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcig1LCAnJyksXG4gIG5hbWU6IGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcig1LCAnQWdncmVnYXRlRXJyb3InKSxcbiAgdG9TdHJpbmc6IGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcig1LCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgbmFtZSA9IGFuT2JqZWN0KHRoaXMpLm5hbWU7XG4gICAgbmFtZSA9IG5hbWUgPT09IHVuZGVmaW5lZCA/ICdBZ2dyZWdhdGVFcnJvcicgOiBTdHJpbmcobmFtZSk7XG4gICAgdmFyIG1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2U7XG4gICAgbWVzc2FnZSA9IG1lc3NhZ2UgPT09IHVuZGVmaW5lZCA/ICcnIDogU3RyaW5nKG1lc3NhZ2UpO1xuICAgIHJldHVybiBuYW1lICsgJzogJyArIG1lc3NhZ2U7XG4gIH0pXG59KTtcblxuaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eS5mKCRBZ2dyZWdhdGVFcnJvci5wcm90b3R5cGUsICdlcnJvcnMnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnZXRJbnRlcm5hbEFnZ3JlZ2F0ZUVycm9yU3RhdGUodGhpcykuZXJyb3JzO1xuICB9LFxuICBjb25maWd1cmFibGU6IHRydWVcbn0pO1xuXG4kKHsgZ2xvYmFsOiB0cnVlIH0sIHtcbiAgQWdncmVnYXRlRXJyb3I6ICRBZ2dyZWdhdGVFcnJvclxufSk7XG4iLCIvLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi9lcy5wcm9taXNlLmFsbC1zZXR0bGVkLmpzJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGVyZm9ybScpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xuXG52YXIgUFJPTUlTRV9BTllfRVJST1IgPSAnTm8gb25lIHByb21pc2UgcmVzb2x2ZWQnO1xuXG4vLyBgUHJvbWlzZS5hbnlgIG1ldGhvZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS1hbnlcbiQoeyB0YXJnZXQ6ICdQcm9taXNlJywgc3RhdDogdHJ1ZSB9LCB7XG4gIGFueTogZnVuY3Rpb24gYW55KGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZihDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHByb21pc2VSZXNvbHZlID0gYUZ1bmN0aW9uKEMucmVzb2x2ZSk7XG4gICAgICB2YXIgZXJyb3JzID0gW107XG4gICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIHZhciBhbHJlYWR5UmVzb2x2ZWQgPSBmYWxzZTtcbiAgICAgIGl0ZXJhdGUoaXRlcmFibGUsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGNvdW50ZXIrKztcbiAgICAgICAgdmFyIGFscmVhZHlSZWplY3RlZCA9IGZhbHNlO1xuICAgICAgICBlcnJvcnMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgcHJvbWlzZVJlc29sdmUuY2FsbChDLCBwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5UmVqZWN0ZWQgfHwgYWxyZWFkeVJlc29sdmVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeVJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeVJlamVjdGVkIHx8IGFscmVhZHlSZXNvbHZlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlSZWplY3RlZCA9IHRydWU7XG4gICAgICAgICAgZXJyb3JzW2luZGV4XSA9IGU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVqZWN0KG5ldyAoZ2V0QnVpbHRJbignQWdncmVnYXRlRXJyb3InKSkoZXJyb3JzLCBQUk9NSVNFX0FOWV9FUlJPUikpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVqZWN0KG5ldyAoZ2V0QnVpbHRJbignQWdncmVnYXRlRXJyb3InKSkoZXJyb3JzLCBQUk9NSVNFX0FOWV9FUlJPUikpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZXJyb3IpIHJlamVjdChyZXN1bHQudmFsdWUpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGVyZm9ybScpO1xuXG4vLyBgUHJvbWlzZS50cnlgIG1ldGhvZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS10cnlcbiQoeyB0YXJnZXQ6ICdQcm9taXNlJywgc3RhdDogdHJ1ZSB9LCB7XG4gICd0cnknOiBmdW5jdGlvbiAoY2FsbGJhY2tmbikge1xuICAgIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYodGhpcyk7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oY2FsbGJhY2tmbik7XG4gICAgKHJlc3VsdC5lcnJvciA/IHByb21pc2VDYXBhYmlsaXR5LnJlamVjdCA6IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmUpKHJlc3VsdC52YWx1ZSk7XG4gICAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC5hc3luY0Rpc3Bvc2VgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC11c2luZy1zdGF0ZW1lbnRcbmRlZmluZVdlbGxLbm93blN5bWJvbCgnYXN5bmNEaXNwb3NlJyk7XG4iLCJ2YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbCcpO1xuXG4vLyBgU3ltYm9sLmRpc3Bvc2VgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC11c2luZy1zdGF0ZW1lbnRcbmRlZmluZVdlbGxLbm93blN5bWJvbCgnZGlzcG9zZScpO1xuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC5vYnNlcnZhYmxlYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JzZXJ2YWJsZVxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdvYnNlcnZhYmxlJyk7XG4iLCJ2YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbCcpO1xuXG4vLyBgU3ltYm9sLnBhdHRlcm5NYXRjaGAgd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXBhdHRlcm4tbWF0Y2hpbmdcbmRlZmluZVdlbGxLbm93blN5bWJvbCgncGF0dGVybk1hdGNoJyk7XG4iLCIvLyBUT0RPOiByZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxudmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdyZXBsYWNlQWxsJyk7XG4iLCJyZXF1aXJlKCcuL2VzLmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgRE9NSXRlcmFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXTtcbiAgdmFyIENvbGxlY3Rpb25Qcm90b3R5cGUgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSAmJiAhQ29sbGVjdGlvblByb3RvdHlwZVtUT19TVFJJTkdfVEFHXSkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHLCBDT0xMRUNUSU9OX05BTUUpO1xuICB9XG4gIEl0ZXJhdG9yc1tDT0xMRUNUSU9OX05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi8uLi9lcy9hcnJheS92aXJ0dWFsL2Zvci1lYWNoJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL2VzL2luc3RhbmNlL2NvbmNhdCcpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9lcy9pbnN0YW5jZS9ldmVyeScpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9lcy9pbnN0YW5jZS9maWx0ZXInKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vZXMvaW5zdGFuY2UvZmxhdC1tYXAnKTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvcicpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9hcnJheS92aXJ0dWFsL2Zvci1lYWNoJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbnZhciBET01JdGVyYWJsZXMgPSB7XG4gIERPTVRva2VuTGlzdDogdHJ1ZSxcbiAgTm9kZUxpc3Q6IHRydWVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBvd24gPSBpdC5mb3JFYWNoO1xuICByZXR1cm4gaXQgPT09IEFycmF5UHJvdG90eXBlIHx8IChpdCBpbnN0YW5jZW9mIEFycmF5ICYmIG93biA9PT0gQXJyYXlQcm90b3R5cGUuZm9yRWFjaClcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgfHwgRE9NSXRlcmFibGVzLmhhc093blByb3BlcnR5KGNsYXNzb2YoaXQpKSA/IGZvckVhY2ggOiBvd247XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9lcy9pbnN0YW5jZS9pbmRleC1vZicpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9lcy9pbnN0YW5jZS9tYXAnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vZXMvaW5zdGFuY2Uvc29tZScpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9lcy9pbnN0YW5jZS9zb3J0Jyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL2VzL2pzb24vc3RyaW5naWZ5Jyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL2VzL29iamVjdC9rZXlzJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL2VzL3Byb21pc2UnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vZXMvc3ltYm9sL2FzeW5jLWl0ZXJhdG9yJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2ltcGxlbWVudGF0aW9uJylbJ2RlZmF1bHQnXTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWInKVsnZGVmYXVsdCddO1xubW9kdWxlLmV4cG9ydHMuZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG5tb2R1bGUuZXhwb3J0cy5pbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcbm1vZHVsZS5leHBvcnRzLnNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlTm9kZUl0ZXJhdG9yO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZU5vZGVJdGVyYXRvcihyb290KSB7XG4gIHZhciB3aGF0VG9TaG93ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMHhGRkZGRkZGRiA6IGFyZ3VtZW50c1sxXTtcbiAgdmFyIGZpbHRlciA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMl07XG5cbiAgdmFyIGRvYyA9IHJvb3Qubm9kZVR5cGUgPT0gOSB8fCByb290Lm93bmVyRG9jdW1lbnQ7XG4gIHZhciBpdGVyID0gZG9jLmNyZWF0ZU5vZGVJdGVyYXRvcihyb290LCB3aGF0VG9TaG93LCBmaWx0ZXIsIGZhbHNlKTtcbiAgcmV0dXJuIG5ldyBOb2RlSXRlcmF0b3IoaXRlciwgcm9vdCwgd2hhdFRvU2hvdywgZmlsdGVyKTtcbn1cblxudmFyIE5vZGVJdGVyYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTm9kZUl0ZXJhdG9yKGl0ZXIsIHJvb3QsIHdoYXRUb1Nob3csIGZpbHRlcikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlSXRlcmF0b3IpO1xuXG4gICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICB0aGlzLndoYXRUb1Nob3cgPSB3aGF0VG9TaG93O1xuICAgIHRoaXMuZmlsdGVyID0gZmlsdGVyO1xuICAgIHRoaXMucmVmZXJlbmNlTm9kZSA9IHJvb3Q7XG4gICAgdGhpcy5wb2ludGVyQmVmb3JlUmVmZXJlbmNlTm9kZSA9IHRydWU7XG4gICAgdGhpcy5faXRlciA9IGl0ZXI7XG4gIH1cblxuICBOb2RlSXRlcmF0b3IucHJvdG90eXBlLm5leHROb2RlID0gZnVuY3Rpb24gbmV4dE5vZGUoKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2l0ZXIubmV4dE5vZGUoKTtcbiAgICB0aGlzLnBvaW50ZXJCZWZvcmVSZWZlcmVuY2VOb2RlID0gZmFsc2U7XG4gICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgdGhpcy5yZWZlcmVuY2VOb2RlID0gcmVzdWx0O1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZU5vZGU7XG4gIH07XG5cbiAgTm9kZUl0ZXJhdG9yLnByb3RvdHlwZS5wcmV2aW91c05vZGUgPSBmdW5jdGlvbiBwcmV2aW91c05vZGUoKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2l0ZXIucHJldmlvdXNOb2RlKCk7XG4gICAgdGhpcy5wb2ludGVyQmVmb3JlUmVmZXJlbmNlTm9kZSA9IHRydWU7XG4gICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgdGhpcy5yZWZlcmVuY2VOb2RlID0gcmVzdWx0O1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZU5vZGU7XG4gIH07XG5cbiAgTm9kZUl0ZXJhdG9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnW29iamVjdCBOb2RlSXRlcmF0b3JdJztcbiAgfTtcblxuICByZXR1cm4gTm9kZUl0ZXJhdG9yO1xufSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5aFpHRndkR1Z5TG1weklsMHNJbTVoYldWeklqcGJJbU55WldGMFpVNXZaR1ZKZEdWeVlYUnZjaUlzSW5KdmIzUWlMQ0ozYUdGMFZHOVRhRzkzSWl3aVptbHNkR1Z5SWl3aVpHOWpJaXdpYm05a1pWUjVjR1VpTENKdmQyNWxja1J2WTNWdFpXNTBJaXdpYVhSbGNpSXNJazV2WkdWSmRHVnlZWFJ2Y2lJc0luSmxabVZ5Wlc1alpVNXZaR1VpTENKd2IybHVkR1Z5UW1WbWIzSmxVbVZtWlhKbGJtTmxUbTlrWlNJc0lsOXBkR1Z5SWl3aWJtVjRkRTV2WkdVaUxDSnlaWE4xYkhRaUxDSndjbVYyYVc5MWMwNXZaR1VpTENKMGIxTjBjbWx1WnlKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08zRkNRVUZsUVN4clFqczdPMEZCUjJZc1UwRkJVMEVzYTBKQlFWUXNRMEZCTkVKRExFbEJRVFZDTEVWQlFUQkZPMEZCUVVFc1RVRkJlRU5ETEZWQlFYZERMSGxFUVVFelFpeFZRVUV5UWp0QlFVRkJMRTFCUVdaRExFMUJRV1VzZVVSQlFVNHNTVUZCVFRzN1FVRkRlRVVzVFVGQlRVTXNUVUZCVDBnc1MwRkJTMGtzVVVGQlRDeEpRVUZwUWl4RFFVRnNRaXhKUVVGM1Frb3NTMEZCUzBzc1lVRkJla003UVVGRFFTeE5RVUZOUXl4UFFVRlBTQ3hKUVVGSlNpeHJRa0ZCU2l4RFFVRjFRa01zU1VGQmRrSXNSVUZCTmtKRExGVkJRVGRDTEVWQlFYbERReXhOUVVGNlF5eEZRVUZwUkN4TFFVRnFSQ3hEUVVGaU8wRkJRMEVzVTBGQlR5eEpRVUZKU3l4WlFVRktMRU5CUVdsQ1JDeEpRVUZxUWl4RlFVRjFRazRzU1VGQmRrSXNSVUZCTmtKRExGVkJRVGRDTEVWQlFYbERReXhOUVVGNlF5eERRVUZRTzBGQlEwUTdPMGxCUjB0TExGazdRVUZEU2l4M1FrRkJXVVFzU1VGQldpeEZRVUZyUWs0c1NVRkJiRUlzUlVGQmQwSkRMRlZCUVhoQ0xFVkJRVzlEUXl4TlFVRndReXhGUVVFMFF6dEJRVUZCT3p0QlFVTXhReXhUUVVGTFJpeEpRVUZNTEVkQlFWbEJMRWxCUVZvN1FVRkRRU3hUUVVGTFF5eFZRVUZNTEVkQlFXdENRU3hWUVVGc1FqdEJRVU5CTEZOQlFVdERMRTFCUVV3c1IwRkJZMEVzVFVGQlpEdEJRVU5CTEZOQlFVdE5MR0ZCUVV3c1IwRkJjVUpTTEVsQlFYSkNPMEZCUTBFc1UwRkJTMU1zTUVKQlFVd3NSMEZCYTBNc1NVRkJiRU03UVVGRFFTeFRRVUZMUXl4TFFVRk1MRWRCUVdGS0xFbEJRV0k3UVVGRFJEczdlVUpCUlVSTExGRXNkVUpCUVZjN1FVRkRWQ3hSUVVGTlF5eFRRVUZUTEV0QlFVdEdMRXRCUVV3c1EwRkJWME1zVVVGQldDeEZRVUZtTzBGQlEwRXNVMEZCUzBZc01FSkJRVXdzUjBGQmEwTXNTMEZCYkVNN1FVRkRRU3hSUVVGSlJ5eFhRVUZYTEVsQlFXWXNSVUZCY1VJc1QwRkJUeXhKUVVGUU8wRkJRM0pDTEZOQlFVdEtMR0ZCUVV3c1IwRkJjVUpKTEUxQlFYSkNPMEZCUTBFc1YwRkJUeXhMUVVGTFNpeGhRVUZhTzBGQlEwUXNSenM3ZVVKQlJVUkxMRmtzTWtKQlFXVTdRVUZEWWl4UlFVRk5SQ3hUUVVGVExFdEJRVXRHTEV0QlFVd3NRMEZCVjBjc1dVRkJXQ3hGUVVGbU8wRkJRMEVzVTBGQlMwb3NNRUpCUVV3c1IwRkJhME1zU1VGQmJFTTdRVUZEUVN4UlFVRkpSeXhYUVVGWExFbEJRV1lzUlVGQmNVSXNUMEZCVHl4SlFVRlFPMEZCUTNKQ0xGTkJRVXRLTEdGQlFVd3NSMEZCY1VKSkxFMUJRWEpDTzBGQlEwRXNWMEZCVHl4TFFVRkxTaXhoUVVGYU8wRkJRMFFzUnpzN2VVSkJSVVJOTEZFc2RVSkJRVmM3UVVGRFZDeFhRVUZQTEhWQ1FVRlFPMEZCUTBRc1J5SXNJbVpwYkdVaU9pSmhaR0Z3ZEdWeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWlhod2IzSjBJR1JsWm1GMWJIUWdZM0psWVhSbFRtOWtaVWwwWlhKaGRHOXlYRzVjYmx4dVpuVnVZM1JwYjI0Z1kzSmxZWFJsVG05a1pVbDBaWEpoZEc5eUtISnZiM1FzSUhkb1lYUlViMU5vYjNjZ1BTQXdlRVpHUmtaR1JrWkdMQ0JtYVd4MFpYSWdQU0J1ZFd4c0tTQjdYRzRnSUdOdmJuTjBJR1J2WXlBOUlDaHliMjkwTG01dlpHVlVlWEJsSUQwOUlEa3BJSHg4SUhKdmIzUXViM2R1WlhKRWIyTjFiV1Z1ZEZ4dUlDQmpiMjV6ZENCcGRHVnlJRDBnWkc5akxtTnlaV0YwWlU1dlpHVkpkR1Z5WVhSdmNpaHliMjkwTENCM2FHRjBWRzlUYUc5M0xDQm1hV3gwWlhJc0lHWmhiSE5sS1Z4dUlDQnlaWFIxY200Z2JtVjNJRTV2WkdWSmRHVnlZWFJ2Y2locGRHVnlMQ0J5YjI5MExDQjNhR0YwVkc5VGFHOTNMQ0JtYVd4MFpYSXBYRzU5WEc1Y2JseHVZMnhoYzNNZ1RtOWtaVWwwWlhKaGRHOXlJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9hWFJsY2l3Z2NtOXZkQ3dnZDJoaGRGUnZVMmh2ZHl3Z1ptbHNkR1Z5S1NCN1hHNGdJQ0FnZEdocGN5NXliMjkwSUQwZ2NtOXZkRnh1SUNBZ0lIUm9hWE11ZDJoaGRGUnZVMmh2ZHlBOUlIZG9ZWFJVYjFOb2IzZGNiaUFnSUNCMGFHbHpMbVpwYkhSbGNpQTlJR1pwYkhSbGNseHVJQ0FnSUhSb2FYTXVjbVZtWlhKbGJtTmxUbTlrWlNBOUlISnZiM1JjYmlBZ0lDQjBhR2x6TG5CdmFXNTBaWEpDWldadmNtVlNaV1psY21WdVkyVk9iMlJsSUQwZ2RISjFaVnh1SUNBZ0lIUm9hWE11WDJsMFpYSWdQU0JwZEdWeVhHNGdJSDFjYmx4dUlDQnVaWGgwVG05a1pTZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCeVpYTjFiSFFnUFNCMGFHbHpMbDlwZEdWeUxtNWxlSFJPYjJSbEtDbGNiaUFnSUNCMGFHbHpMbkJ2YVc1MFpYSkNaV1p2Y21WU1pXWmxjbVZ1WTJWT2IyUmxJRDBnWm1Gc2MyVmNiaUFnSUNCcFppQW9jbVZ6ZFd4MElEMDlQU0J1ZFd4c0tTQnlaWFIxY200Z2JuVnNiRnh1SUNBZ0lIUm9hWE11Y21WbVpYSmxibU5sVG05a1pTQTlJSEpsYzNWc2RGeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxuSmxabVZ5Wlc1alpVNXZaR1ZjYmlBZ2ZWeHVYRzRnSUhCeVpYWnBiM1Z6VG05a1pTZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCeVpYTjFiSFFnUFNCMGFHbHpMbDlwZEdWeUxuQnlaWFpwYjNWelRtOWtaU2dwWEc0Z0lDQWdkR2hwY3k1d2IybHVkR1Z5UW1WbWIzSmxVbVZtWlhKbGJtTmxUbTlrWlNBOUlIUnlkV1ZjYmlBZ0lDQnBaaUFvY21WemRXeDBJRDA5UFNCdWRXeHNLU0J5WlhSMWNtNGdiblZzYkZ4dUlDQWdJSFJvYVhNdWNtVm1aWEpsYm1ObFRtOWtaU0E5SUhKbGMzVnNkRnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbkpsWm1WeVpXNWpaVTV2WkdWY2JpQWdmVnh1WEc0Z0lIUnZVM1J5YVc1bktDa2dlMXh1SUNBZ0lISmxkSFZ5YmlBblcyOWlhbVZqZENCT2IyUmxTWFJsY21GMGIzSmRKMXh1SUNCOVhHNTlYRzRpWFgwPSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjcmVhdGVOb2RlSXRlcmF0b3I7XG5cblxuZnVuY3Rpb24gY3JlYXRlTm9kZUl0ZXJhdG9yKHJvb3QpIHtcbiAgdmFyIHdoYXRUb1Nob3cgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAweEZGRkZGRkZGIDogYXJndW1lbnRzWzFdO1xuICB2YXIgZmlsdGVyID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1syXTtcblxuICB2YXIgZG9jID0gcm9vdC5vd25lckRvY3VtZW50O1xuICByZXR1cm4gZG9jLmNyZWF0ZU5vZGVJdGVyYXRvci5jYWxsKGRvYywgcm9vdCwgd2hhdFRvU2hvdywgZmlsdGVyKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OWlkV2xzZEdsdUxtcHpJbDBzSW01aGJXVnpJanBiSW1OeVpXRjBaVTV2WkdWSmRHVnlZWFJ2Y2lJc0luSnZiM1FpTENKM2FHRjBWRzlUYUc5M0lpd2labWxzZEdWeUlpd2laRzlqSWl3aWIzZHVaWEpFYjJOMWJXVnVkQ0lzSW1OaGJHd2lYU3dpYldGd2NHbHVaM01pT2lJN096dHhRa0ZCWlVFc2EwSTdPenRCUVVkbUxGTkJRVk5CTEd0Q1FVRlVMRU5CUVRSQ1F5eEpRVUUxUWl4RlFVRXdSVHRCUVVGQkxFMUJRWGhEUXl4VlFVRjNReXg1UkVGQk0wSXNWVUZCTWtJN1FVRkJRU3hOUVVGbVF5eE5RVUZsTEhsRVFVRk9MRWxCUVUwN08wRkJRM2hGTEUxQlFVMURMRTFCUVUxSUxFdEJRVXRKTEdGQlFXcENPMEZCUTBFc1UwRkJUMFFzU1VGQlNVb3NhMEpCUVVvc1EwRkJkVUpOTEVsQlFYWkNMRU5CUVRSQ1JpeEhRVUUxUWl4RlFVRnBRMGdzU1VGQmFrTXNSVUZCZFVORExGVkJRWFpETEVWQlFXMUVReXhOUVVGdVJDeERRVUZRTzBGQlEwUWlMQ0ptYVd4bElqb2lZblZwYkhScGJpNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1WNGNHOXlkQ0JrWldaaGRXeDBJR055WldGMFpVNXZaR1ZKZEdWeVlYUnZjbHh1WEc1Y2JtWjFibU4wYVc5dUlHTnlaV0YwWlU1dlpHVkpkR1Z5WVhSdmNpaHliMjkwTENCM2FHRjBWRzlUYUc5M0lEMGdNSGhHUmtaR1JrWkdSaXdnWm1sc2RHVnlJRDBnYm5Wc2JDa2dlMXh1SUNCamIyNXpkQ0JrYjJNZ1BTQnliMjkwTG05M2JtVnlSRzlqZFcxbGJuUmNiaUFnY21WMGRYSnVJR1J2WXk1amNtVmhkR1ZPYjJSbFNYUmxjbUYwYjNJdVkyRnNiQ2hrYjJNc0lISnZiM1FzSUhkb1lYUlViMU5vYjNjc0lHWnBiSFJsY2lsY2JuMWNiaUpkZlE9PSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlTm9kZUl0ZXJhdG9yO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZU5vZGVJdGVyYXRvcihyb290KSB7XG4gIHZhciB3aGF0VG9TaG93ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMHhGRkZGRkZGRiA6IGFyZ3VtZW50c1sxXTtcbiAgdmFyIGZpbHRlciA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMl07XG5cbiAgcmV0dXJuIG5ldyBOb2RlSXRlcmF0b3Iocm9vdCwgd2hhdFRvU2hvdywgZmlsdGVyKTtcbn1cblxudmFyIE5vZGVJdGVyYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTm9kZUl0ZXJhdG9yKHJvb3QsIHdoYXRUb1Nob3csIGZpbHRlcikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlSXRlcmF0b3IpO1xuXG4gICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICB0aGlzLndoYXRUb1Nob3cgPSB3aGF0VG9TaG93O1xuICAgIHRoaXMuZmlsdGVyID0gZmlsdGVyO1xuICAgIHRoaXMucmVmZXJlbmNlTm9kZSA9IHJvb3Q7XG4gICAgdGhpcy5wb2ludGVyQmVmb3JlUmVmZXJlbmNlTm9kZSA9IHRydWU7XG4gICAgdGhpcy5fZmlsdGVyID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHJldHVybiBmaWx0ZXIgPyBmaWx0ZXIobm9kZSkgPT09IDEgOiB0cnVlO1xuICAgIH07XG4gICAgdGhpcy5fc2hvdyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICByZXR1cm4gd2hhdFRvU2hvdyA+PiBub2RlLm5vZGVUeXBlIC0gMSAmIDEgPT09IDE7XG4gICAgfTtcbiAgfVxuXG4gIE5vZGVJdGVyYXRvci5wcm90b3R5cGUubmV4dE5vZGUgPSBmdW5jdGlvbiBuZXh0Tm9kZSgpIHtcbiAgICB2YXIgYmVmb3JlID0gdGhpcy5wb2ludGVyQmVmb3JlUmVmZXJlbmNlTm9kZTtcbiAgICB0aGlzLnBvaW50ZXJCZWZvcmVSZWZlcmVuY2VOb2RlID0gZmFsc2U7XG5cbiAgICB2YXIgbm9kZSA9IHRoaXMucmVmZXJlbmNlTm9kZTtcbiAgICBpZiAoYmVmb3JlICYmIHRoaXMuX3Nob3cobm9kZSkgJiYgdGhpcy5fZmlsdGVyKG5vZGUpKSByZXR1cm4gbm9kZTtcblxuICAgIGRvIHtcbiAgICAgIGlmIChub2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbm9kZSA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IHRoaXMucm9vdCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmIChub2RlLm5leHRTaWJsaW5nKSBicmVhaztcbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgIH0gd2hpbGUgKG5vZGUpO1xuXG4gICAgICBub2RlID0gbm9kZS5uZXh0U2libGluZztcbiAgICB9IHdoaWxlICghdGhpcy5fc2hvdyhub2RlKSB8fCAhdGhpcy5fZmlsdGVyKG5vZGUpKTtcblxuICAgIHRoaXMucmVmZXJlbmNlTm9kZSA9IG5vZGU7XG4gICAgdGhpcy5wb2ludGVyQmVmb3JlUmVmZXJlbmNlTm9kZSA9IGZhbHNlO1xuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIE5vZGVJdGVyYXRvci5wcm90b3R5cGUucHJldmlvdXNOb2RlID0gZnVuY3Rpb24gcHJldmlvdXNOb2RlKCkge1xuICAgIHZhciBiZWZvcmUgPSB0aGlzLnBvaW50ZXJCZWZvcmVSZWZlcmVuY2VOb2RlO1xuICAgIHRoaXMucG9pbnRlckJlZm9yZVJlZmVyZW5jZU5vZGUgPSB0cnVlO1xuXG4gICAgdmFyIG5vZGUgPSB0aGlzLnJlZmVyZW5jZU5vZGU7XG4gICAgaWYgKCFiZWZvcmUgJiYgdGhpcy5fc2hvdyhub2RlKSAmJiB0aGlzLl9maWx0ZXIobm9kZSkpIHJldHVybiBub2RlO1xuXG4gICAgZG8ge1xuICAgICAgaWYgKG5vZGUgPT09IHRoaXMucm9vdCkgcmV0dXJuIG51bGw7XG5cbiAgICAgIGlmIChub2RlLnByZXZpb3VzU2libGluZykge1xuICAgICAgICBub2RlID0gbm9kZS5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIHdoaWxlIChub2RlLmxhc3RDaGlsZCkge1xuICAgICAgICAgIG5vZGUgPSBub2RlLmxhc3RDaGlsZDtcbiAgICAgICAgfWNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH0gd2hpbGUgKCF0aGlzLl9zaG93KG5vZGUpIHx8ICF0aGlzLl9maWx0ZXIobm9kZSkpO1xuXG4gICAgdGhpcy5yZWZlcmVuY2VOb2RlID0gbm9kZTtcbiAgICB0aGlzLnBvaW50ZXJCZWZvcmVSZWZlcmVuY2VOb2RlID0gdHJ1ZTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICBOb2RlSXRlcmF0b3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IE5vZGVJdGVyYXRvcl0nO1xuICB9O1xuXG4gIHJldHVybiBOb2RlSXRlcmF0b3I7XG59KCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlwYlhCc1pXMWxiblJoZEdsdmJpNXFjeUpkTENKdVlXMWxjeUk2V3lKamNtVmhkR1ZPYjJSbFNYUmxjbUYwYjNJaUxDSnliMjkwSWl3aWQyaGhkRlJ2VTJodmR5SXNJbVpwYkhSbGNpSXNJazV2WkdWSmRHVnlZWFJ2Y2lJc0luSmxabVZ5Wlc1alpVNXZaR1VpTENKd2IybHVkR1Z5UW1WbWIzSmxVbVZtWlhKbGJtTmxUbTlrWlNJc0lsOW1hV3gwWlhJaUxDSnViMlJsSWl3aVgzTm9iM2NpTENKdWIyUmxWSGx3WlNJc0ltNWxlSFJPYjJSbElpd2lZbVZtYjNKbElpd2labWx5YzNSRGFHbHNaQ0lzSW01bGVIUlRhV0pzYVc1bklpd2ljR0Z5Wlc1MFRtOWtaU0lzSW5CeVpYWnBiM1Z6VG05a1pTSXNJbkJ5WlhacGIzVnpVMmxpYkdsdVp5SXNJbXhoYzNSRGFHbHNaQ0lzSW5SdlUzUnlhVzVuSWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN2NVSkJRV1ZCTEd0Q096czdRVUZIWml4VFFVRlRRU3hyUWtGQlZDeERRVUUwUWtNc1NVRkJOVUlzUlVGQk1FVTdRVUZCUVN4TlFVRjRRME1zVlVGQmQwTXNlVVJCUVROQ0xGVkJRVEpDTzBGQlFVRXNUVUZCWmtNc1RVRkJaU3g1UkVGQlRpeEpRVUZOT3p0QlFVTjRSU3hUUVVGUExFbEJRVWxETEZsQlFVb3NRMEZCYVVKSUxFbEJRV3BDTEVWQlFYVkNReXhWUVVGMlFpeEZRVUZ0UTBNc1RVRkJia01zUTBGQlVEdEJRVU5FT3p0SlFVZExReXhaTzBGQlEwb3NkMEpCUVZsSUxFbEJRVm9zUlVGQmEwSkRMRlZCUVd4Q0xFVkJRVGhDUXl4TlFVRTVRaXhGUVVGelF6dEJRVUZCT3p0QlFVTndReXhUUVVGTFJpeEpRVUZNTEVkQlFWbEJMRWxCUVZvN1FVRkRRU3hUUVVGTFF5eFZRVUZNTEVkQlFXdENRU3hWUVVGc1FqdEJRVU5CTEZOQlFVdERMRTFCUVV3c1IwRkJZMEVzVFVGQlpEdEJRVU5CTEZOQlFVdEZMR0ZCUVV3c1IwRkJjVUpLTEVsQlFYSkNPMEZCUTBFc1UwRkJTMHNzTUVKQlFVd3NSMEZCYTBNc1NVRkJiRU03UVVGRFFTeFRRVUZMUXl4UFFVRk1MRWRCUVdVc1ZVRkJRME1zU1VGQlJEdEJRVUZCTEdGQlFWVk1MRk5CUVZOQkxFOUJRVTlMTEVsQlFWQXNUVUZCYVVJc1EwRkJNVUlzUjBGQk9FSXNTVUZCZUVNN1FVRkJRU3hMUVVGbU8wRkJRMEVzVTBGQlMwTXNTMEZCVEN4SFFVRmhMRlZCUVVORUxFbEJRVVE3UVVGQlFTeGhRVUZWVGl4alFVRmpUU3hMUVVGTFJTeFJRVUZNTEVkQlFXZENMRU5CUVRsQ0xFZEJRV3RETEUxQlFVMHNRMEZCYkVRN1FVRkJRU3hMUVVGaU8wRkJRMFE3TzNsQ1FVVkVReXhSTEhWQ1FVRlhPMEZCUTFRc1VVRkJUVU1zVTBGQlV5eExRVUZMVGl3d1FrRkJjRUk3UVVGRFFTeFRRVUZMUVN3d1FrRkJUQ3hIUVVGclF5eExRVUZzUXpzN1FVRkZRU3hSUVVGSlJTeFBRVUZQTEV0QlFVdElMR0ZCUVdoQ08wRkJRMEVzVVVGQlNVOHNWVUZCVlN4TFFVRkxTQ3hMUVVGTUxFTkJRVmRFTEVsQlFWZ3NRMEZCVml4SlFVRTRRaXhMUVVGTFJDeFBRVUZNTEVOQlFXRkRMRWxCUVdJc1EwRkJiRU1zUlVGQmMwUXNUMEZCVDBFc1NVRkJVRHM3UVVGRmRFUXNUMEZCUnp0QlFVTkVMRlZCUVVsQkxFdEJRVXRMTEZWQlFWUXNSVUZCY1VJN1FVRkRia0pNTEdWQlFVOUJMRXRCUVV0TExGVkJRVm83UVVGRFFUdEJRVU5FT3p0QlFVVkVMRk5CUVVjN1FVRkRSQ3haUVVGSlRDeFRRVUZUTEV0QlFVdFFMRWxCUVd4Q0xFVkJRWGRDTEU5QlFVOHNTVUZCVUR0QlFVTjRRaXhaUVVGSlR5eExRVUZMVFN4WFFVRlVMRVZCUVhOQ08wRkJRM1JDVGl4bFFVRlBRU3hMUVVGTFR5eFZRVUZhTzBGQlEwUXNUMEZLUkN4UlFVbFRVQ3hKUVVwVU96dEJRVTFCUVN4aFFVRlBRU3hMUVVGTFRTeFhRVUZhTzBGQlEwUXNTMEZpUkN4UlFXRlJMRU5CUVVNc1MwRkJTMHdzUzBGQlRDeERRVUZYUkN4SlFVRllMRU5CUVVRc1NVRkJjVUlzUTBGQlF5eExRVUZMUkN4UFFVRk1MRU5CUVdGRExFbEJRV0lzUTBGaU9VSTdPMEZCWlVFc1UwRkJTMGdzWVVGQlRDeEhRVUZ4UWtjc1NVRkJja0k3UVVGRFFTeFRRVUZMUml3d1FrRkJUQ3hIUVVGclF5eExRVUZzUXp0QlFVTkJMRmRCUVU5RkxFbEJRVkE3UVVGRFJDeEhPenQ1UWtGRlJGRXNXU3d5UWtGQlpUdEJRVU5pTEZGQlFVMUtMRk5CUVZNc1MwRkJTMDRzTUVKQlFYQkNPMEZCUTBFc1UwRkJTMEVzTUVKQlFVd3NSMEZCYTBNc1NVRkJiRU03TzBGQlJVRXNVVUZCU1VVc1QwRkJUeXhMUVVGTFNDeGhRVUZvUWp0QlFVTkJMRkZCUVVrc1EwRkJRMDhzVFVGQlJDeEpRVUZYTEV0QlFVdElMRXRCUVV3c1EwRkJWMFFzU1VGQldDeERRVUZZTEVsQlFTdENMRXRCUVV0RUxFOUJRVXdzUTBGQllVTXNTVUZCWWl4RFFVRnVReXhGUVVGMVJDeFBRVUZQUVN4SlFVRlFPenRCUVVWMlJDeFBRVUZITzBGQlEwUXNWVUZCU1VFc1UwRkJVeXhMUVVGTFVDeEpRVUZzUWl4RlFVRjNRaXhQUVVGUExFbEJRVkE3TzBGQlJYaENMRlZCUVVsUExFdEJRVXRUTEdWQlFWUXNSVUZCTUVJN1FVRkRlRUpVTEdWQlFVOUJMRXRCUVV0VExHVkJRVm83UVVGRFFTeGxRVUZQVkN4TFFVRkxWU3hUUVVGYU8wRkJRWFZDVml4cFFrRkJUMEVzUzBGQlMxVXNVMEZCV2p0QlFVRjJRaXhUUVVOQk8wRkJRMFE3TzBGQlJVUldMR0ZCUVU5QkxFdEJRVXRQTEZWQlFWbzdRVUZEUkN4TFFWWkVMRkZCVlZFc1EwRkJReXhMUVVGTFRpeExRVUZNTEVOQlFWZEVMRWxCUVZnc1EwRkJSQ3hKUVVGeFFpeERRVUZETEV0QlFVdEVMRTlCUVV3c1EwRkJZVU1zU1VGQllpeERRVlk1UWpzN1FVRlpRU3hUUVVGTFNDeGhRVUZNTEVkQlFYRkNSeXhKUVVGeVFqdEJRVU5CTEZOQlFVdEdMREJDUVVGTUxFZEJRV3RETEVsQlFXeERPMEZCUTBFc1YwRkJUMFVzU1VGQlVEdEJRVU5FTEVjN08zbENRVVZFVnl4UkxIVkNRVUZYTzBGQlExUXNWMEZCVHl4MVFrRkJVRHRCUVVORUxFY2lMQ0ptYVd4bElqb2lhVzF3YkdWdFpXNTBZWFJwYjI0dWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdaR1ZtWVhWc2RDQmpjbVZoZEdWT2IyUmxTWFJsY21GMGIzSmNibHh1WEc1bWRXNWpkR2x2YmlCamNtVmhkR1ZPYjJSbFNYUmxjbUYwYjNJb2NtOXZkQ3dnZDJoaGRGUnZVMmh2ZHlBOUlEQjRSa1pHUmtaR1JrWXNJR1pwYkhSbGNpQTlJRzUxYkd3cElIdGNiaUFnY21WMGRYSnVJRzVsZHlCT2IyUmxTWFJsY21GMGIzSW9jbTl2ZEN3Z2QyaGhkRlJ2VTJodmR5d2dabWxzZEdWeUtWeHVmVnh1WEc1Y2JtTnNZWE56SUU1dlpHVkpkR1Z5WVhSdmNpQjdYRzRnSUdOdmJuTjBjblZqZEc5eUtISnZiM1FzSUhkb1lYUlViMU5vYjNjc0lHWnBiSFJsY2lrZ2UxeHVJQ0FnSUhSb2FYTXVjbTl2ZENBOUlISnZiM1JjYmlBZ0lDQjBhR2x6TG5kb1lYUlViMU5vYjNjZ1BTQjNhR0YwVkc5VGFHOTNYRzRnSUNBZ2RHaHBjeTVtYVd4MFpYSWdQU0JtYVd4MFpYSmNiaUFnSUNCMGFHbHpMbkpsWm1WeVpXNWpaVTV2WkdVZ1BTQnliMjkwWEc0Z0lDQWdkR2hwY3k1d2IybHVkR1Z5UW1WbWIzSmxVbVZtWlhKbGJtTmxUbTlrWlNBOUlIUnlkV1ZjYmlBZ0lDQjBhR2x6TGw5bWFXeDBaWElnUFNBb2JtOWtaU2tnUFQ0Z1ptbHNkR1Z5SUQ4Z1ptbHNkR1Z5S0c1dlpHVXBJRDA5UFNBeElEb2dkSEoxWlZ4dUlDQWdJSFJvYVhNdVgzTm9iM2NnUFNBb2JtOWtaU2tnUFQ0Z2QyaGhkRlJ2VTJodmR5QStQaUJ1YjJSbExtNXZaR1ZVZVhCbElDMGdNU0FtSURFZ1BUMDlJREZjYmlBZ2ZWeHVYRzRnSUc1bGVIUk9iMlJsS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJR0psWm05eVpTQTlJSFJvYVhNdWNHOXBiblJsY2tKbFptOXlaVkpsWm1WeVpXNWpaVTV2WkdWY2JpQWdJQ0IwYUdsekxuQnZhVzUwWlhKQ1pXWnZjbVZTWldabGNtVnVZMlZPYjJSbElEMGdabUZzYzJWY2JseHVJQ0FnSUd4bGRDQnViMlJsSUQwZ2RHaHBjeTV5WldabGNtVnVZMlZPYjJSbFhHNGdJQ0FnYVdZZ0tHSmxabTl5WlNBbUppQjBhR2x6TGw5emFHOTNLRzV2WkdVcElDWW1JSFJvYVhNdVgyWnBiSFJsY2lodWIyUmxLU2tnY21WMGRYSnVJRzV2WkdWY2JseHVJQ0FnSUdSdklIdGNiaUFnSUNBZ0lHbG1JQ2h1YjJSbExtWnBjbk4wUTJocGJHUXBJSHRjYmlBZ0lDQWdJQ0FnYm05a1pTQTlJRzV2WkdVdVptbHljM1JEYUdsc1pGeHVJQ0FnSUNBZ0lDQmpiMjUwYVc1MVpWeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQmtieUI3WEc0Z0lDQWdJQ0FnSUdsbUlDaHViMlJsSUQwOVBTQjBhR2x6TG5KdmIzUXBJSEpsZEhWeWJpQnVkV3hzWEc0Z0lDQWdJQ0FnSUdsbUlDaHViMlJsTG01bGVIUlRhV0pzYVc1bktTQmljbVZoYTF4dUlDQWdJQ0FnSUNCdWIyUmxJRDBnYm05a1pTNXdZWEpsYm5ST2IyUmxYRzRnSUNBZ0lDQjlJSGRvYVd4bElDaHViMlJsS1Z4dVhHNGdJQ0FnSUNCdWIyUmxJRDBnYm05a1pTNXVaWGgwVTJsaWJHbHVaMXh1SUNBZ0lIMGdkMmhwYkdVb0lYUm9hWE11WDNOb2IzY29ibTlrWlNrZ2ZId2dJWFJvYVhNdVgyWnBiSFJsY2lodWIyUmxLU2xjYmx4dUlDQWdJSFJvYVhNdWNtVm1aWEpsYm1ObFRtOWtaU0E5SUc1dlpHVmNiaUFnSUNCMGFHbHpMbkJ2YVc1MFpYSkNaV1p2Y21WU1pXWmxjbVZ1WTJWT2IyUmxJRDBnWm1Gc2MyVmNiaUFnSUNCeVpYUjFjbTRnYm05a1pWeHVJQ0I5WEc1Y2JpQWdjSEpsZG1sdmRYTk9iMlJsS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJR0psWm05eVpTQTlJSFJvYVhNdWNHOXBiblJsY2tKbFptOXlaVkpsWm1WeVpXNWpaVTV2WkdWY2JpQWdJQ0IwYUdsekxuQnZhVzUwWlhKQ1pXWnZjbVZTWldabGNtVnVZMlZPYjJSbElEMGdkSEoxWlZ4dVhHNGdJQ0FnYkdWMElHNXZaR1VnUFNCMGFHbHpMbkpsWm1WeVpXNWpaVTV2WkdWY2JpQWdJQ0JwWmlBb0lXSmxabTl5WlNBbUppQjBhR2x6TGw5emFHOTNLRzV2WkdVcElDWW1JSFJvYVhNdVgyWnBiSFJsY2lodWIyUmxLU2tnY21WMGRYSnVJRzV2WkdWY2JseHVJQ0FnSUdSdklIdGNiaUFnSUNBZ0lHbG1JQ2h1YjJSbElEMDlQU0IwYUdsekxuSnZiM1FwSUhKbGRIVnliaUJ1ZFd4c1hHNWNiaUFnSUNBZ0lHbG1JQ2h1YjJSbExuQnlaWFpwYjNWelUybGliR2x1WnlrZ2UxeHVJQ0FnSUNBZ0lDQnViMlJsSUQwZ2JtOWtaUzV3Y21WMmFXOTFjMU5wWW14cGJtZGNiaUFnSUNBZ0lDQWdkMmhwYkdVZ0tHNXZaR1V1YkdGemRFTm9hV3hrS1NCdWIyUmxJRDBnYm05a1pTNXNZWE4wUTJocGJHUmNiaUFnSUNBZ0lDQWdZMjl1ZEdsdWRXVmNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdibTlrWlNBOUlHNXZaR1V1Y0dGeVpXNTBUbTlrWlZ4dUlDQWdJSDBnZDJocGJHVW9JWFJvYVhNdVgzTm9iM2NvYm05a1pTa2dmSHdnSVhSb2FYTXVYMlpwYkhSbGNpaHViMlJsS1NsY2JseHVJQ0FnSUhSb2FYTXVjbVZtWlhKbGJtTmxUbTlrWlNBOUlHNXZaR1ZjYmlBZ0lDQjBhR2x6TG5CdmFXNTBaWEpDWldadmNtVlNaV1psY21WdVkyVk9iMlJsSUQwZ2RISjFaVnh1SUNBZ0lISmxkSFZ5YmlCdWIyUmxYRzRnSUgxY2JseHVJQ0IwYjFOMGNtbHVaeWdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdKMXR2WW1wbFkzUWdUbTlrWlVsMFpYSmhkRzl5WFNkY2JpQWdmVnh1ZlZ4dUlsMTkiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG5cbnZhciBfcG9seWZpbGwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9seWZpbGwpO1xuXG52YXIgX2ltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG52YXIgX2ltcGxlbWVudGF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ltcGxlbWVudGF0aW9uKTtcblxudmFyIF9zaGltID0gcmVxdWlyZSgnLi9zaGltJyk7XG5cbnZhciBfc2hpbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGltKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgcG9seWZpbGwgPSAoMCwgX3BvbHlmaWxsMlsnZGVmYXVsdCddKSgpO1xucG9seWZpbGwuaW1wbGVtZW50YXRpb24gPSBfaW1wbGVtZW50YXRpb24yWydkZWZhdWx0J107XG5wb2x5ZmlsbC5zaGltID0gX3NoaW0yWydkZWZhdWx0J107XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHBvbHlmaWxsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5cGJtUmxlQzVxY3lKZExDSnVZVzFsY3lJNld5SndiMng1Wm1sc2JDSXNJbWx0Y0d4bGJXVnVkR0YwYVc5dUlpd2ljMmhwYlNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenM3TzBGQlJVRXNTVUZCVFVFc1YwRkJWeXcwUWtGQmFrSTdRVUZEUVVFc1UwRkJVME1zWTBGQlZEdEJRVU5CUkN4VFFVRlRSU3hKUVVGVU96dHhRa0ZGWlVZc1VTSXNJbVpwYkdVaU9pSnBibVJsZUM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR1JsWm1GMWJIUWdZWE1nWjJWMFVHOXNlV1pwYkd3Z2ZTQm1jbTl0SUNjdUwzQnZiSGxtYVd4c0oxeHVhVzF3YjNKMElIc2daR1ZtWVhWc2RDQmhjeUJwYlhCc1pXMWxiblJoZEdsdmJpQjlJR1p5YjIwZ0p5NHZhVzF3YkdWdFpXNTBZWFJwYjI0blhHNXBiWEJ2Y25RZ2V5QmtaV1poZFd4MElHRnpJSE5vYVcwZ2ZTQm1jbTl0SUNjdUwzTm9hVzBuWEc1Y2JtTnZibk4wSUhCdmJIbG1hV3hzSUQwZ1oyVjBVRzlzZVdacGJHd29LVnh1Y0c5c2VXWnBiR3d1YVcxd2JHVnRaVzUwWVhScGIyNGdQU0JwYlhCc1pXMWxiblJoZEdsdmJseHVjRzlzZVdacGJHd3VjMmhwYlNBOUlITm9hVzFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnY0c5c2VXWnBiR3hjYmlKZGZRPT0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBnZXRQb2x5ZmlsbDtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxudmFyIF9idWlsdGluID0gcmVxdWlyZSgnLi9idWlsdGluJyk7XG5cbnZhciBfYnVpbHRpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsdGluKTtcblxudmFyIF9pbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxudmFyIF9pbXBsZW1lbnRhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbXBsZW1lbnRhdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0UG9seWZpbGwoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGRvYyA9IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgPyB7fSA6IGRvY3VtZW50O1xuICAgIHZhciBpdGVyID0gKDAsIF9idWlsdGluMlsnZGVmYXVsdCddKShkb2MsIDB4RkZGRkZGRkYsIG51bGwsIGZhbHNlKTtcbiAgICBpZiAoaXRlci5yZWZlcmVuY2VOb2RlID09PSBkb2MpIHJldHVybiBfYnVpbHRpbjJbJ2RlZmF1bHQnXTtcbiAgICByZXR1cm4gX2FkYXB0ZXIyWydkZWZhdWx0J107XG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gX2ltcGxlbWVudGF0aW9uMlsnZGVmYXVsdCddO1xuICB9XG59IC8qZ2xvYmFsIGRvY3VtZW50Ki9cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OXdiMng1Wm1sc2JDNXFjeUpkTENKdVlXMWxjeUk2V3lKblpYUlFiMng1Wm1sc2JDSXNJbVJ2WXlJc0ltUnZZM1Z0Wlc1MElpd2lhWFJsY2lJc0luSmxabVZ5Wlc1alpVNXZaR1VpTENKZklsMHNJbTFoY0hCcGJtZHpJam9pT3pzN2NVSkJUWGRDUVN4WE96dEJRVXg0UWpzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096dEJRVWRsTEZOQlFWTkJMRmRCUVZRc1IwRkJkVUk3UVVGRGNFTXNUVUZCU1R0QlFVTkdMRkZCUVUxRExFMUJRVTBzVDBGQlQwTXNVVUZCVUN4TFFVRnhRaXhYUVVGeVFpeEhRVUZ0UXl4RlFVRnVReXhIUVVGM1EwRXNVVUZCY0VRN1FVRkRRU3hSUVVGTlF5eFBRVUZQTERCQ1FVRlJSaXhIUVVGU0xFVkJRV0VzVlVGQllpeEZRVUY1UWl4SlFVRjZRaXhGUVVFclFpeExRVUV2UWl4RFFVRmlPMEZCUTBFc1VVRkJTVVVzUzBGQlMwTXNZVUZCVEN4TFFVRjFRa2dzUjBGQk0wSXNSVUZCWjBNN1FVRkRhRU03UVVGRFJDeEhRVXhFTEVOQlMwVXNUMEZCVDBrc1EwRkJVQ3hGUVVGVk8wRkJRMVk3UVVGRFJEdEJRVU5HTEVNc1EwRm1SQ0lzSW1acGJHVWlPaUp3YjJ4NVptbHNiQzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFaMnh2WW1Gc0lHUnZZM1Z0Wlc1MEtpOWNibWx0Y0c5eWRDQmhaR0Z3ZEdWeUlHWnliMjBnSnk0dllXUmhjSFJsY2lkY2JtbHRjRzl5ZENCaWRXbHNkR2x1SUdaeWIyMGdKeTR2WW5WcGJIUnBiaWRjYm1sdGNHOXlkQ0JwYlhCc1pXMWxiblJoZEdsdmJpQm1jbTl0SUNjdUwybHRjR3hsYldWdWRHRjBhVzl1SjF4dVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlHZGxkRkJ2YkhsbWFXeHNLQ2tnZTF4dUlDQjBjbmtnZTF4dUlDQWdJR052Ym5OMElHUnZZeUE5SUhSNWNHVnZaaWhrYjJOMWJXVnVkQ2tnUFQwOUlDZDFibVJsWm1sdVpXUW5JRDhnZTMwZ09pQmtiMk4xYldWdWRGeHVJQ0FnSUdOdmJuTjBJR2wwWlhJZ1BTQmlkV2xzZEdsdUtHUnZZeXdnTUhoR1JrWkdSa1pHUml3Z2JuVnNiQ3dnWm1Gc2MyVXBYRzRnSUNBZ2FXWWdLR2wwWlhJdWNtVm1aWEpsYm1ObFRtOWtaU0E5UFQwZ1pHOWpLU0J5WlhSMWNtNGdZblZwYkhScGJseHVJQ0FnSUhKbGRIVnliaUJoWkdGd2RHVnlYRzRnSUgwZ1kyRjBZMmdnS0Y4cElIdGNiaUFnSUNCeVpYUjFjbTRnYVcxd2JHVnRaVzUwWVhScGIyNWNiaUFnZlZ4dWZWeHVJbDE5IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gc2hpbTtcblxudmFyIF9idWlsdGluID0gcmVxdWlyZSgnLi9idWlsdGluJyk7XG5cbnZhciBfYnVpbHRpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsdGluKTtcblxudmFyIF9wb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcblxudmFyIF9wb2x5ZmlsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb2x5ZmlsbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuLypnbG9iYWwgZG9jdW1lbnQqL1xuZnVuY3Rpb24gc2hpbSgpIHtcbiAgdmFyIGRvYyA9IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgPyB7fSA6IGRvY3VtZW50O1xuICB2YXIgcG9seWZpbGwgPSAoMCwgX3BvbHlmaWxsMlsnZGVmYXVsdCddKSgpO1xuICBpZiAocG9seWZpbGwgIT09IF9idWlsdGluMlsnZGVmYXVsdCddKSBkb2MuY3JlYXRlTm9kZUl0ZXJhdG9yID0gcG9seWZpbGw7XG4gIHJldHVybiBwb2x5ZmlsbDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OXphR2x0TG1weklsMHNJbTVoYldWeklqcGJJbk5vYVcwaUxDSmtiMk1pTENKa2IyTjFiV1Z1ZENJc0luQnZiSGxtYVd4c0lpd2lZM0psWVhSbFRtOWtaVWwwWlhKaGRHOXlJbDBzSW0xaGNIQnBibWR6SWpvaU96czdjVUpCUzNkQ1FTeEpPenRCUVVwNFFqczdPenRCUVVOQk96czdPenM3UVVGR1FUdEJRVXRsTEZOQlFWTkJMRWxCUVZRc1IwRkJaMEk3UVVGRE4wSXNUVUZCVFVNc1RVRkJUU3hQUVVGUFF5eFJRVUZRTEV0QlFYRkNMRmRCUVhKQ0xFZEJRVzFETEVWQlFXNURMRWRCUVhkRFFTeFJRVUZ3UkR0QlFVTkJMRTFCUVUxRExGZEJRVmNzTkVKQlFXcENPMEZCUTBFc1RVRkJTVUVzYVVOQlFVb3NSVUZCTUVKR0xFbEJRVWxITEd0Q1FVRktMRWRCUVhsQ1JDeFJRVUY2UWp0QlFVTXhRaXhUUVVGUFFTeFJRVUZRTzBGQlEwUWlMQ0ptYVd4bElqb2ljMmhwYlM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWjJ4dlltRnNJR1J2WTNWdFpXNTBLaTljYm1sdGNHOXlkQ0JpZFdsc2RHbHVJR1p5YjIwZ0p5NHZZblZwYkhScGJpZGNibWx0Y0c5eWRDQm5aWFJRYjJ4NVptbHNiQ0JtY205dElDY3VMM0J2YkhsbWFXeHNKMXh1WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUhOb2FXMG9LU0I3WEc0Z0lHTnZibk4wSUdSdll5QTlJSFI1Y0dWdlppaGtiMk4xYldWdWRDa2dQVDA5SUNkMWJtUmxabWx1WldRbklEOGdlMzBnT2lCa2IyTjFiV1Z1ZEZ4dUlDQmpiMjV6ZENCd2IyeDVabWxzYkNBOUlHZGxkRkJ2YkhsbWFXeHNLQ2xjYmlBZ2FXWWdLSEJ2YkhsbWFXeHNJQ0U5UFNCaWRXbHNkR2x1S1NCa2IyTXVZM0psWVhSbFRtOWtaVWwwWlhKaGRHOXlJRDBnY0c5c2VXWnBiR3hjYmlBZ2NtVjBkWEp1SUhCdmJIbG1hV3hzWEc1OVhHNGlYWDA9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9wb2x5ZmlsbCcpWydkZWZhdWx0J107XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL3NoaW0nKVsnZGVmYXVsdCddO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYicpWydkZWZhdWx0J107XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBzZWVrO1xuXG52YXIgX2FuY2VzdG9ycyA9IHJlcXVpcmUoJ2FuY2VzdG9ycycpO1xuXG52YXIgX2FuY2VzdG9yczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbmNlc3RvcnMpO1xuXG52YXIgX2luZGV4T2YgPSByZXF1aXJlKCdpbmRleC1vZicpO1xuXG52YXIgX2luZGV4T2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5kZXhPZik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIEVfU0hPVyA9ICdBcmd1bWVudCAxIG9mIHNlZWsgbXVzdCB1c2UgZmlsdGVyIE5vZGVGaWx0ZXIuU0hPV19URVhULic7XG52YXIgRV9XSEVSRSA9ICdBcmd1bWVudCAyIG9mIHNlZWsgbXVzdCBiZSBhIG51bWJlciBvciBhIFRleHQgTm9kZS4nO1xuXG52YXIgU0hPV19URVhUID0gNDtcbnZhciBURVhUX05PREUgPSAzO1xuXG5mdW5jdGlvbiBzZWVrKGl0ZXIsIHdoZXJlKSB7XG4gIGlmIChpdGVyLndoYXRUb1Nob3cgIT09IFNIT1dfVEVYVCkge1xuICAgIHRocm93IG5ldyBFcnJvcihFX1NIT1cpO1xuICB9XG5cbiAgdmFyIGNvdW50ID0gMDtcbiAgdmFyIG5vZGUgPSBpdGVyLnJlZmVyZW5jZU5vZGU7XG4gIHZhciBwcmVkaWNhdGVzID0gbnVsbDtcblxuICBpZiAoaXNOdW1iZXIod2hlcmUpKSB7XG4gICAgcHJlZGljYXRlcyA9IHtcbiAgICAgIGZvcndhcmQ6IGZ1bmN0aW9uIGZvcndhcmQoKSB7XG4gICAgICAgIHJldHVybiBjb3VudCA8IHdoZXJlO1xuICAgICAgfSxcbiAgICAgIGJhY2t3YXJkOiBmdW5jdGlvbiBiYWNrd2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIGNvdW50ID4gd2hlcmU7XG4gICAgICB9XG4gICAgfTtcbiAgfSBlbHNlIGlmIChpc1RleHQod2hlcmUpKSB7XG4gICAgdmFyIGZvcndhcmQgPSBiZWZvcmUobm9kZSwgd2hlcmUpID8gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbm9kZSAhPT0gd2hlcmU7XG4gICAgfTtcbiAgICB2YXIgYmFja3dhcmQgPSBmdW5jdGlvbiBiYWNrd2FyZCgpIHtcbiAgICAgIHJldHVybiBub2RlICE9IHdoZXJlIHx8ICFpdGVyLnBvaW50ZXJCZWZvcmVSZWZlcmVuY2VOb2RlO1xuICAgIH07XG4gICAgcHJlZGljYXRlcyA9IHsgZm9yd2FyZDogZm9yd2FyZCwgYmFja3dhcmQ6IGJhY2t3YXJkIH07XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKEVfV0hFUkUpO1xuICB9XG5cbiAgd2hpbGUgKHByZWRpY2F0ZXMuZm9yd2FyZCgpICYmIChub2RlID0gaXRlci5uZXh0Tm9kZSgpKSAhPT0gbnVsbCkge1xuICAgIGNvdW50ICs9IG5vZGUubm9kZVZhbHVlLmxlbmd0aDtcbiAgfVxuXG4gIHdoaWxlIChwcmVkaWNhdGVzLmJhY2t3YXJkKCkgJiYgKG5vZGUgPSBpdGVyLnByZXZpb3VzTm9kZSgpKSAhPT0gbnVsbCkge1xuICAgIGNvdW50IC09IG5vZGUubm9kZVZhbHVlLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiBjb3VudDtcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIobikge1xuICByZXR1cm4gIWlzTmFOKHBhcnNlSW50KG4pKSAmJiBpc0Zpbml0ZShuKTtcbn1cblxuZnVuY3Rpb24gaXNUZXh0KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IFRFWFRfTk9ERTtcbn1cblxuZnVuY3Rpb24gYmVmb3JlKHJlZiwgbm9kZSkge1xuICBpZiAocmVmID09PSBub2RlKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIGNvbW1vbiA9IG51bGw7XG4gIHZhciBsZWZ0ID0gW3JlZl0uY29uY2F0KCgwLCBfYW5jZXN0b3JzMlsnZGVmYXVsdCddKShyZWYpKS5yZXZlcnNlKCk7XG4gIHZhciByaWdodCA9IFtub2RlXS5jb25jYXQoKDAsIF9hbmNlc3RvcnMyWydkZWZhdWx0J10pKG5vZGUpKS5yZXZlcnNlKCk7XG5cbiAgd2hpbGUgKGxlZnRbMF0gPT09IHJpZ2h0WzBdKSB7XG4gICAgY29tbW9uID0gbGVmdC5zaGlmdCgpO1xuICAgIHJpZ2h0LnNoaWZ0KCk7XG4gIH1cblxuICBsZWZ0ID0gbGVmdFswXTtcbiAgcmlnaHQgPSByaWdodFswXTtcblxuICB2YXIgbCA9ICgwLCBfaW5kZXhPZjJbJ2RlZmF1bHQnXSkoY29tbW9uLmNoaWxkTm9kZXMsIGxlZnQpO1xuICB2YXIgciA9ICgwLCBfaW5kZXhPZjJbJ2RlZmF1bHQnXSkoY29tbW9uLmNoaWxkTm9kZXMsIHJpZ2h0KTtcblxuICByZXR1cm4gbCA+IHI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlwYm1SbGVDNXFjeUpkTENKdVlXMWxjeUk2V3lKelpXVnJJaXdpUlY5VFNFOVhJaXdpUlY5WFNFVlNSU0lzSWxOSVQxZGZWRVZZVkNJc0lsUkZXRlJmVGs5RVJTSXNJbWwwWlhJaUxDSjNhR1Z5WlNJc0luZG9ZWFJVYjFOb2IzY2lMQ0pGY25KdmNpSXNJbU52ZFc1MElpd2libTlrWlNJc0luSmxabVZ5Wlc1alpVNXZaR1VpTENKd2NtVmthV05oZEdWeklpd2lhWE5PZFcxaVpYSWlMQ0ptYjNKM1lYSmtJaXdpWW1GamEzZGhjbVFpTENKcGMxUmxlSFFpTENKaVpXWnZjbVVpTENKd2IybHVkR1Z5UW1WbWIzSmxVbVZtWlhKbGJtTmxUbTlrWlNJc0ltNWxlSFJPYjJSbElpd2libTlrWlZaaGJIVmxJaXdpYkdWdVozUm9JaXdpY0hKbGRtbHZkWE5PYjJSbElpd2liaUlzSW1selRtRk9JaXdpY0dGeWMyVkpiblFpTENKcGMwWnBibWwwWlNJc0ltNXZaR1ZVZVhCbElpd2ljbVZtSWl3aVkyOXRiVzl1SWl3aWJHVm1kQ0lzSW1OdmJtTmhkQ0lzSW5KbGRtVnljMlVpTENKeWFXZG9kQ0lzSW5Ob2FXWjBJaXdpYkNJc0ltTm9hV3hrVG05a1pYTWlMQ0p5SWwwc0ltMWhjSEJwYm1keklqb2lPenM3Y1VKQlZYZENRU3hKT3p0QlFWWjRRanM3T3p0QlFVTkJPenM3T3pzN1FVRkZRU3hKUVVGTlF5eFRRVUZUTERCRVFVRm1PMEZCUTBFc1NVRkJUVU1zVlVGQlZTeHhSRUZCYUVJN08wRkJSVUVzU1VGQlRVTXNXVUZCV1N4RFFVRnNRanRCUVVOQkxFbEJRVTFETEZsQlFWa3NRMEZCYkVJN08wRkJSMlVzVTBGQlUwb3NTVUZCVkN4RFFVRmpTeXhKUVVGa0xFVkJRVzlDUXl4TFFVRndRaXhGUVVFeVFqdEJRVU40UXl4TlFVRkpSQ3hMUVVGTFJTeFZRVUZNTEV0QlFXOUNTaXhUUVVGNFFpeEZRVUZ0UXp0QlFVTnFReXhWUVVGTkxFbEJRVWxMTEV0QlFVb3NRMEZCVlZBc1RVRkJWaXhEUVVGT08wRkJRMFE3TzBGQlJVUXNUVUZCU1ZFc1VVRkJVU3hEUVVGYU8wRkJRMEVzVFVGQlNVTXNUMEZCVDB3c1MwRkJTMDBzWVVGQmFFSTdRVUZEUVN4TlFVRkpReXhoUVVGaExFbEJRV3BDT3p0QlFVVkJMRTFCUVVsRExGTkJRVk5RTEV0QlFWUXNRMEZCU2l4RlFVRnhRanRCUVVOdVFrMHNhVUpCUVdFN1FVRkRXRVVzWlVGQlV6dEJRVUZCTEdWQlFVMU1MRkZCUVZGSUxFdEJRV1E3UVVGQlFTeFBRVVJGTzBGQlJWaFRMR2RDUVVGVk8wRkJRVUVzWlVGQlRVNHNVVUZCVVVnc1MwRkJaRHRCUVVGQk8wRkJSa01zUzBGQllqdEJRVWxFTEVkQlRFUXNUVUZMVHl4SlFVRkpWU3hQUVVGUFZpeExRVUZRTEVOQlFVb3NSVUZCYlVJN1FVRkRlRUlzVVVGQlNWRXNWVUZCVlVjc1QwRkJUMUFzU1VGQlVDeEZRVUZoU2l4TFFVRmlMRWxCUVhOQ08wRkJRVUVzWVVGQlRTeExRVUZPTzBGQlFVRXNTMEZCZEVJc1IwRkJiME03UVVGQlFTeGhRVUZOU1N4VFFVRlRTaXhMUVVGbU8wRkJRVUVzUzBGQmJFUTdRVUZEUVN4UlFVRkpVeXhYUVVGWExGTkJRVmhCTEZGQlFWYzdRVUZCUVN4aFFVRk5UQ3hSUVVGUlNpeExRVUZTTEVsQlFXbENMRU5CUVVORUxFdEJRVXRoTERCQ1FVRTNRanRCUVVGQkxFdEJRV1k3UVVGRFFVNHNhVUpCUVdFc1JVRkJRMFVzWjBKQlFVUXNSVUZCVlVNc2EwSkJRVllzUlVGQllqdEJRVU5FTEVkQlNrMHNUVUZKUVR0QlFVTk1MRlZCUVUwc1NVRkJTVkFzUzBGQlNpeERRVUZWVGl4UFFVRldMRU5CUVU0N1FVRkRSRHM3UVVGRlJDeFRRVUZQVlN4WFFVRlhSU3hQUVVGWUxFMUJRWGRDTEVOQlFVTktMRTlCUVU5TUxFdEJRVXRqTEZGQlFVd3NSVUZCVWl4TlFVRTJRaXhKUVVFMVJDeEZRVUZyUlR0QlFVTm9SVllzWVVGQlUwTXNTMEZCUzFVc1UwRkJUQ3hEUVVGbFF5eE5RVUY0UWp0QlFVTkVPenRCUVVWRUxGTkJRVTlVTEZkQlFWZEhMRkZCUVZnc1RVRkJlVUlzUTBGQlEwd3NUMEZCVDB3c1MwRkJTMmxDTEZsQlFVd3NSVUZCVWl4TlFVRnBReXhKUVVGcVJTeEZRVUYxUlR0QlFVTnlSV0lzWVVGQlUwTXNTMEZCUzFVc1UwRkJUQ3hEUVVGbFF5eE5RVUY0UWp0QlFVTkVPenRCUVVWRUxGTkJRVTlhTEV0QlFWQTdRVUZEUkRzN1FVRkhSQ3hUUVVGVFNTeFJRVUZVTEVOQlFXdENWU3hEUVVGc1FpeEZRVUZ4UWp0QlFVTnVRaXhUUVVGUExFTkJRVU5ETEUxQlFVMURMRk5CUVZOR0xFTkJRVlFzUTBGQlRpeERRVUZFTEVsQlFYVkNSeXhUUVVGVFNDeERRVUZVTEVOQlFUbENPMEZCUTBRN08wRkJSMFFzVTBGQlUxQXNUVUZCVkN4RFFVRm5RazRzU1VGQmFFSXNSVUZCYzBJN1FVRkRjRUlzVTBGQlQwRXNTMEZCUzJsQ0xGRkJRVXdzUzBGQmEwSjJRaXhUUVVGNlFqdEJRVU5FT3p0QlFVZEVMRk5CUVZOaExFMUJRVlFzUTBGQlowSlhMRWRCUVdoQ0xFVkJRWEZDYkVJc1NVRkJja0lzUlVGQk1rSTdRVUZEZWtJc1RVRkJTV3RDTEZGQlFWRnNRaXhKUVVGYUxFVkJRV3RDTEU5QlFVOHNTMEZCVURzN1FVRkZiRUlzVFVGQlNXMUNMRk5CUVZNc1NVRkJZanRCUVVOQkxFMUJRVWxETEU5QlFVOHNRMEZCUTBZc1IwRkJSQ3hGUVVGTlJ5eE5RVUZPTEVOQlFXRXNORUpCUVZWSUxFZEJRVllzUTBGQllpeEZRVUUyUWtrc1QwRkJOMElzUlVGQldEdEJRVU5CTEUxQlFVbERMRkZCUVZFc1EwRkJRM1pDTEVsQlFVUXNSVUZCVDNGQ0xFMUJRVkFzUTBGQll5dzBRa0ZCVlhKQ0xFbEJRVllzUTBGQlpDeEZRVUVyUW5OQ0xFOUJRUzlDTEVWQlFWbzdPMEZCUlVFc1UwRkJUMFlzUzBGQlN5eERRVUZNTEUxQlFWbEhMRTFCUVUwc1EwRkJUaXhEUVVGdVFpeEZRVUUyUWp0QlFVTXpRa29zWVVGQlUwTXNTMEZCUzBrc1MwRkJUQ3hGUVVGVU8wRkJRMEZFTEZWQlFVMURMRXRCUVU0N1FVRkRSRHM3UVVGRlJFb3NVMEZCVDBFc1MwRkJTeXhEUVVGTUxFTkJRVkE3UVVGRFFVY3NWVUZCVVVFc1RVRkJUU3hEUVVGT0xFTkJRVkk3TzBGQlJVRXNUVUZCU1VVc1NVRkJTU3d3UWtGQlVVNHNUMEZCVDA4c1ZVRkJaaXhGUVVFeVFrNHNTVUZCTTBJc1EwRkJVanRCUVVOQkxFMUJRVWxQTEVsQlFVa3NNRUpCUVZGU0xFOUJRVTlQTEZWQlFXWXNSVUZCTWtKSUxFdEJRVE5DTEVOQlFWSTdPMEZCUlVFc1UwRkJUMFVzU1VGQlNVVXNRMEZCV0R0QlFVTkVJaXdpWm1sc1pTSTZJbWx1WkdWNExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJR0Z1WTJWemRHOXljeUJtY205dElDZGhibU5sYzNSdmNuTW5YRzVwYlhCdmNuUWdhVzVrWlhoUFppQm1jbTl0SUNkcGJtUmxlQzF2WmlkY2JseHVZMjl1YzNRZ1JWOVRTRTlYSUQwZ0owRnlaM1Z0Wlc1MElERWdiMllnYzJWbGF5QnRkWE4wSUhWelpTQm1hV3gwWlhJZ1RtOWtaVVpwYkhSbGNpNVRTRTlYWDFSRldGUXVKMXh1WTI5dWMzUWdSVjlYU0VWU1JTQTlJQ2RCY21kMWJXVnVkQ0F5SUc5bUlITmxaV3NnYlhWemRDQmlaU0JoSUc1MWJXSmxjaUJ2Y2lCaElGUmxlSFFnVG05a1pTNG5YRzVjYm1OdmJuTjBJRk5JVDFkZlZFVllWQ0E5SURSY2JtTnZibk4wSUZSRldGUmZUazlFUlNBOUlETmNibHh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJ6WldWcktHbDBaWElzSUhkb1pYSmxLU0I3WEc0Z0lHbG1JQ2hwZEdWeUxuZG9ZWFJVYjFOb2IzY2dJVDA5SUZOSVQxZGZWRVZZVkNrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhGWDFOSVQxY3BYRzRnSUgxY2JseHVJQ0JzWlhRZ1kyOTFiblFnUFNBd1hHNGdJR3hsZENCdWIyUmxJRDBnYVhSbGNpNXlaV1psY21WdVkyVk9iMlJsWEc0Z0lHeGxkQ0J3Y21Wa2FXTmhkR1Z6SUQwZ2JuVnNiRnh1WEc0Z0lHbG1JQ2hwYzA1MWJXSmxjaWgzYUdWeVpTa3BJSHRjYmlBZ0lDQndjbVZrYVdOaGRHVnpJRDBnZTF4dUlDQWdJQ0FnWm05eWQyRnlaRG9nS0NrZ1BUNGdZMjkxYm5RZ1BDQjNhR1Z5WlN4Y2JpQWdJQ0FnSUdKaFkydDNZWEprT2lBb0tTQTlQaUJqYjNWdWRDQStJSGRvWlhKbExGeHVJQ0FnSUgxY2JpQWdmU0JsYkhObElHbG1JQ2hwYzFSbGVIUW9kMmhsY21VcEtTQjdYRzRnSUNBZ2JHVjBJR1p2Y25kaGNtUWdQU0JpWldadmNtVW9ibTlrWlN3Z2QyaGxjbVVwSUQ4Z0tDa2dQVDRnWm1Gc2MyVWdPaUFvS1NBOVBpQnViMlJsSUNFOVBTQjNhR1Z5WlZ4dUlDQWdJR3hsZENCaVlXTnJkMkZ5WkNBOUlDZ3BJRDArSUc1dlpHVWdJVDBnZDJobGNtVWdmSHdnSVdsMFpYSXVjRzlwYm5SbGNrSmxabTl5WlZKbFptVnlaVzVqWlU1dlpHVmNiaUFnSUNCd2NtVmthV05oZEdWeklEMGdlMlp2Y25kaGNtUXNJR0poWTJ0M1lYSmtmVnh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpaEZYMWRJUlZKRktWeHVJQ0I5WEc1Y2JpQWdkMmhwYkdVZ0tIQnlaV1JwWTJGMFpYTXVabTl5ZDJGeVpDZ3BJQ1ltSUNodWIyUmxJRDBnYVhSbGNpNXVaWGgwVG05a1pTZ3BLU0FoUFQwZ2JuVnNiQ2tnZTF4dUlDQWdJR052ZFc1MElDczlJRzV2WkdVdWJtOWtaVlpoYkhWbExteGxibWQwYUZ4dUlDQjlYRzVjYmlBZ2QyaHBiR1VnS0hCeVpXUnBZMkYwWlhNdVltRmphM2RoY21Rb0tTQW1KaUFvYm05a1pTQTlJR2wwWlhJdWNISmxkbWx2ZFhOT2IyUmxLQ2twSUNFOVBTQnVkV3hzS1NCN1hHNGdJQ0FnWTI5MWJuUWdMVDBnYm05a1pTNXViMlJsVm1Gc2RXVXViR1Z1WjNSb1hHNGdJSDFjYmx4dUlDQnlaWFIxY200Z1kyOTFiblJjYm4xY2JseHVYRzVtZFc1amRHbHZiaUJwYzA1MWJXSmxjaWh1S1NCN1hHNGdJSEpsZEhWeWJpQWhhWE5PWVU0b2NHRnljMlZKYm5Rb2Jpa3BJQ1ltSUdselJtbHVhWFJsS0c0cFhHNTlYRzVjYmx4dVpuVnVZM1JwYjI0Z2FYTlVaWGgwS0c1dlpHVXBJSHRjYmlBZ2NtVjBkWEp1SUc1dlpHVXVibTlrWlZSNWNHVWdQVDA5SUZSRldGUmZUazlFUlZ4dWZWeHVYRzVjYm1aMWJtTjBhVzl1SUdKbFptOXlaU2h5WldZc0lHNXZaR1VwSUh0Y2JpQWdhV1lnS0hKbFppQTlQVDBnYm05a1pTa2djbVYwZFhKdUlHWmhiSE5sWEc1Y2JpQWdiR1YwSUdOdmJXMXZiaUE5SUc1MWJHeGNiaUFnYkdWMElHeGxablFnUFNCYmNtVm1YUzVqYjI1allYUW9ZVzVqWlhOMGIzSnpLSEpsWmlrcExuSmxkbVZ5YzJVb0tWeHVJQ0JzWlhRZ2NtbG5hSFFnUFNCYmJtOWtaVjB1WTI5dVkyRjBLR0Z1WTJWemRHOXljeWh1YjJSbEtTa3VjbVYyWlhKelpTZ3BYRzVjYmlBZ2QyaHBiR1VnS0d4bFpuUmJNRjBnUFQwOUlISnBaMmgwV3pCZEtTQjdYRzRnSUNBZ1kyOXRiVzl1SUQwZ2JHVm1kQzV6YUdsbWRDZ3BYRzRnSUNBZ2NtbG5hSFF1YzJocFpuUW9LVnh1SUNCOVhHNWNiaUFnYkdWbWRDQTlJR3hsWm5SYk1GMWNiaUFnY21sbmFIUWdQU0J5YVdkb2RGc3dYVnh1WEc0Z0lHeGxkQ0JzSUQwZ2FXNWtaWGhQWmloamIyMXRiMjR1WTJocGJHUk9iMlJsY3l3Z2JHVm1kQ2xjYmlBZ2JHVjBJSElnUFNCcGJtUmxlRTltS0dOdmJXMXZiaTVqYUdsc1pFNXZaR1Z6TENCeWFXZG9kQ2xjYmx4dUlDQnlaWFIxY200Z2JDQStJSEpjYm4xY2JpSmRmUT09IiwiLyohXG4gKiBpbmRleC1vZiA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaW5kZXgtb2Y+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluZGV4T2YoYXJyLCBlbGUsIHN0YXJ0KSB7XG4gIHN0YXJ0ID0gc3RhcnQgfHwgMDtcbiAgdmFyIGlkeCA9IC0xO1xuXG4gIGlmIChhcnIgPT0gbnVsbCkgcmV0dXJuIGlkeDtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gIHZhciBpID0gc3RhcnQgPCAwXG4gICAgPyAobGVuICsgc3RhcnQpXG4gICAgOiBzdGFydDtcblxuICBpZiAoaSA+PSBhcnIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICBpZiAoYXJyW2ldID09PSBlbGUpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgICBpKys7XG4gIH1cblxuICByZXR1cm4gLTE7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgY2FydGVzaWFuQXJyYXlzIGZyb20gJ2NhcnRlc2lhbic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiogcHJvZHVjdCguLi5pdGVyYWJsZXMpIHtcbiAgLy8gV2UgbGlzdGVuIHRvIGFsbCBpdGVyYXRvcnMgaW4gcGFyYWxsZWwsIHdoaWxlIGxvZ2dpbmcgYWxsIHRoZSB2YWx1ZXMgdGhleVxuICAvLyBwcm9kdWNlLiBXaGVuZXZlciBhbiBpdGVyYXRvciBwcm9kdWNlcyBhIHZhbHVlLCB3ZSBwcm9kdWNlIGFuZCB5aWVsZCBhbGxcbiAgLy8gY29tYmluYXRpb25zIG9mIHRoYXQgdmFsdWUgd2l0aCB0aGUgbG9nZ2VkIHZhbHVlcyBmcm9tIG90aGVyIGl0ZXJhdG9ycy5cbiAgLy8gRXZlcnkgY29tYmluYXRpb24gaXMgdGh1cyBtYWRlIGV4YWN0bHkgb25jZSwgYW5kIGFzIHNvb24gYXMgaXQgaXMga25vd24uXG5cbiAgY29uc3QgaXRlcmF0b3JzID0gaXRlcmFibGVzLm1hcChpdGVyYWJsZSA9PiBpdGVyYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSk7XG4gIC8vIEluaXRpYWxpc2UgYW4gZW1wdHkgbG9nIGZvciBlYWNoIGl0ZXJhYmxlLlxuICBjb25zdCBsb2dzID0gaXRlcmFibGVzLm1hcCgoKSA9PiBbXSk7XG5cbiAgY29uc3QgbmV4dFZhbHVlUHJvbWlzZXMgPSBpdGVyYXRvcnMubWFwKChpdGVyYXRvciwgaXRlcmFibGVOcikgPT5cbiAgICBpdGVyYXRvclxuICAgICAgLm5leHQoKVxuICAgICAgLnRoZW4oYXN5bmMgKHsgdmFsdWUsIGRvbmUgfSkgPT4gKHsgdmFsdWU6IGF3YWl0IHZhbHVlLCBkb25lIH0pKVxuICAgICAgLnRoZW4oXG4gICAgICAgIC8vIExhYmVsIHRoZSByZXN1bHQgd2l0aCBpdGVyYWJsZU5yLCB0byBrbm93IHdoaWNoIGl0ZXJhYmxlIHByb2R1Y2VkXG4gICAgICAgIC8vIHRoaXMgdmFsdWUgYWZ0ZXIgUHJvbWlzZS5yYWNlIGJlbG93LlxuICAgICAgICAoeyB2YWx1ZSwgZG9uZSB9KSA9PiAoeyB2YWx1ZSwgZG9uZSwgaXRlcmFibGVOciB9KSxcbiAgICAgICksXG4gICk7XG5cbiAgLy8gS2VlcCBsaXN0ZW5pbmcgYXMgbG9uZyBhcyBhbnkgb2YgdGhlIGl0ZXJhYmxlcyBpcyBub3QgeWV0IGV4aGF1c3RlZC5cbiAgd2hpbGUgKG5leHRWYWx1ZVByb21pc2VzLnNvbWUocCA9PiBwICE9PSBudWxsKSkge1xuICAgIC8vIFdhaXQgdW50aWwgYW55IG9mIHRoZSBhY3RpdmUgaXRlcmF0b3JzIGhhcyBwcm9kdWNlZCBhIG5ldyB2YWx1ZS5cbiAgICBjb25zdCB7IHZhbHVlLCBkb25lLCBpdGVyYWJsZU5yIH0gPSBhd2FpdCBQcm9taXNlLnJhY2UoXG4gICAgICBuZXh0VmFsdWVQcm9taXNlcy5maWx0ZXIocCA9PiBwICE9PSBudWxsKSxcbiAgICApO1xuXG4gICAgLy8gSWYgdGhpcyBpdGVyYWJsZSB3YXMgZXhoYXVzdGVkLCBzdG9wIGxpc3RlbmluZyB0byBpdCBhbmQgbW92ZSBvbi5cbiAgICBpZiAoZG9uZSkge1xuICAgICAgbmV4dFZhbHVlUHJvbWlzZXNbaXRlcmFibGVOcl0gPSBudWxsO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gUHJvZHVjZSBhbGwgY29tYmluYXRpb25zIG9mIHRoZSByZWNlaXZlZCB2YWx1ZSB3aXRoIHRoZSBsb2dnZWQgdmFsdWVzXG4gICAgLy8gZnJvbSB0aGUgb3RoZXIgaXRlcmFibGVzLlxuICAgIGNvbnN0IGFycmF5cyA9IFsuLi5sb2dzXTtcbiAgICBhcnJheXNbaXRlcmFibGVOcl0gPSBbdmFsdWVdO1xuICAgIGNvbnN0IGNvbWJpbmF0aW9ucyA9IGNhcnRlc2lhbkFycmF5cyhhcnJheXMpO1xuXG4gICAgLy8gQXBwZW5kIHRoZSByZWNlaXZlZCB2YWx1ZSB0byB0aGUgcmlnaHQgbG9nLlxuICAgIGxvZ3NbaXRlcmFibGVOcl0gPSBbLi4ubG9nc1tpdGVyYWJsZU5yXSwgdmFsdWVdO1xuXG4gICAgLy8gU3RhcnQgbGlzdGVuaW5nIGZvciB0aGUgbmV4dCB2YWx1ZSBvZiB0aGlzIGl0ZXJhYmxlLlxuICAgIG5leHRWYWx1ZVByb21pc2VzW2l0ZXJhYmxlTnJdID0gaXRlcmF0b3JzW2l0ZXJhYmxlTnJdXG4gICAgICAubmV4dCgpXG4gICAgICAudGhlbihhc3luYyAoeyB2YWx1ZSwgZG9uZSB9KSA9PiAoeyB2YWx1ZTogYXdhaXQgdmFsdWUsIGRvbmUgfSkpXG4gICAgICAudGhlbigoeyB2YWx1ZSwgZG9uZSB9KSA9PiAoeyB2YWx1ZSwgZG9uZSwgaXRlcmFibGVOciB9KSk7XG5cbiAgICAvLyBZaWVsZCBlYWNoIG9mIHRoZSBwcm9kdWNlZCBjb21iaW5hdGlvbnMgc2VwYXJhdGVseS5cbiAgICB5aWVsZCogY29tYmluYXRpb25zO1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ3NzU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uKiBtYXRjaEFsbChzY29wZSkge1xuICAgIHlpZWxkKiBzY29wZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yLnZhbHVlKTtcbiAgfTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIFdyYXAgZWFjaCB0ZXh0IG5vZGUgaW4gYSBnaXZlbiBET00gUmFuZ2Ugd2l0aCBhIDxtYXJrPiBvciBvdGhlciBlbGVtZW50LlxuLy8gQnJlYWtzIHN0YXJ0IGFuZC9vciBlbmQgbm9kZSBpZiBuZWVkZWQuXG4vLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjbGVhbnMgdXAgdGhlIGNyZWF0ZWQgaGlnaGxpZ2h0IChub3QgYSBwZXJmZWN0IHVuZG86IHNwbGl0IHRleHQgbm9kZXMgYXJlXG4vLyBub3QgbWVyZ2VkIGFnYWluKS5cbi8vXG4vLyBQYXJhbWV0ZXJzOlxuLy8gLSByYW5nZTogYSBET00gUmFuZ2Ugb2JqZWN0LiBOb3RlIHRoYXQgYXMgaGlnaGxpZ2h0aW5nIG1vZGlmaWVzIHRoZSBET00sIHRoZSByYW5nZSBtYXkgYmVcbi8vICAgdW51c2FibGUgYWZ0ZXJ3YXJkc1xuLy8gLSB0YWdOYW1lOiB0aGUgZWxlbWVudCB1c2VkIHRvIHdyYXAgdGV4dCBub2Rlcy4gRGVmYXVsdHMgdG8gJ21hcmsnLlxuLy8gLSBhdHRyaWJ1dGVzOiBhbiBPYmplY3QgZGVmaW5pbmcgYW55IGF0dHJpYnV0ZXMgdG8gYmUgc2V0IG9uIHRoZSB3cmFwcGVyIGVsZW1lbnRzLlxuZXhwb3J0IGZ1bmN0aW9uIGhpZ2hsaWdodFJhbmdlKHJhbmdlLCB0YWdOYW1lID0gJ21hcmsnLCBhdHRyaWJ1dGVzID0ge30pIHtcbiAgaWYgKHJhbmdlLmNvbGxhcHNlZCkgcmV0dXJuO1xuXG4gIC8vIEZpcnN0IHB1dCBhbGwgbm9kZXMgaW4gYW4gYXJyYXkgKHNwbGl0cyBzdGFydCBhbmQgZW5kIG5vZGVzIGlmIG5lZWRlZClcbiAgY29uc3Qgbm9kZXMgPSB0ZXh0Tm9kZXNJblJhbmdlKHJhbmdlKTtcblxuICAvLyBIaWdobGlnaHQgZWFjaCBub2RlXG4gIGNvbnN0IGhpZ2hsaWdodEVsZW1lbnRzID0gW107XG4gIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgIGNvbnN0IGhpZ2hsaWdodEVsZW1lbnQgPSB3cmFwTm9kZUluSGlnaGxpZ2h0KG5vZGUsIHRhZ05hbWUsIGF0dHJpYnV0ZXMpO1xuICAgIGhpZ2hsaWdodEVsZW1lbnRzLnB1c2goaGlnaGxpZ2h0RWxlbWVudCk7XG4gIH1cblxuICAvLyBSZXR1cm4gYSBmdW5jdGlvbiB0aGF0IGNsZWFucyB1cCB0aGUgaGlnaGxpZ2h0RWxlbWVudHMuXG4gIGZ1bmN0aW9uIHJlbW92ZUhpZ2hsaWdodHMoKSB7XG4gICAgLy8gUmVtb3ZlIGVhY2ggb2YgdGhlIGNyZWF0ZWQgaGlnaGxpZ2h0RWxlbWVudHMuXG4gICAgZm9yIChjb25zdCBoaWdobGlnaHRJZHggaW4gaGlnaGxpZ2h0RWxlbWVudHMpIHtcbiAgICAgIHJlbW92ZUhpZ2hsaWdodChoaWdobGlnaHRFbGVtZW50c1toaWdobGlnaHRJZHhdKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlbW92ZUhpZ2hsaWdodHM7XG59XG5cbi8vIFJldHVybiBhbiBhcnJheSBvZiB0aGUgdGV4dCBub2RlcyBpbiB0aGUgcmFuZ2UuIFNwbGl0IHRoZSBzdGFydCBhbmQgZW5kIG5vZGVzIGlmIHJlcXVpcmVkLlxuZnVuY3Rpb24gdGV4dE5vZGVzSW5SYW5nZShyYW5nZSkge1xuICAvLyBJZiB0aGUgc3RhcnQgb3IgZW5kIG5vZGUgaXMgYSB0ZXh0IG5vZGUgYW5kIG9ubHkgcGFydGx5IGluIHRoZSByYW5nZSwgc3BsaXQgaXQuXG4gIGlmIChcbiAgICByYW5nZS5zdGFydENvbnRhaW5lci5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgJiZcbiAgICByYW5nZS5zdGFydE9mZnNldCA+IDBcbiAgKSB7XG4gICAgY29uc3QgZW5kT2Zmc2V0ID0gcmFuZ2UuZW5kT2Zmc2V0OyAvLyAodGhpcyBtYXkgZ2V0IGxvc3Qgd2hlbiB0aGUgc3BsaXR0aW5nIHRoZSBub2RlKVxuICAgIGNvbnN0IGNyZWF0ZWROb2RlID0gcmFuZ2Uuc3RhcnRDb250YWluZXIuc3BsaXRUZXh0KHJhbmdlLnN0YXJ0T2Zmc2V0KTtcbiAgICBpZiAocmFuZ2UuZW5kQ29udGFpbmVyID09PSByYW5nZS5zdGFydENvbnRhaW5lcikge1xuICAgICAgLy8gSWYgdGhlIGVuZCB3YXMgaW4gdGhlIHNhbWUgY29udGFpbmVyLCBpdCB3aWxsIG5vdyBiZSBpbiB0aGUgbmV3bHkgY3JlYXRlZCBub2RlLlxuICAgICAgcmFuZ2Uuc2V0RW5kKGNyZWF0ZWROb2RlLCBlbmRPZmZzZXQgLSByYW5nZS5zdGFydE9mZnNldCk7XG4gICAgfVxuICAgIHJhbmdlLnNldFN0YXJ0KGNyZWF0ZWROb2RlLCAwKTtcbiAgfVxuICBpZiAoXG4gICAgcmFuZ2UuZW5kQ29udGFpbmVyLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSAmJlxuICAgIHJhbmdlLmVuZE9mZnNldCA8IHJhbmdlLmVuZENvbnRhaW5lci5sZW5ndGhcbiAgKSB7XG4gICAgcmFuZ2UuZW5kQ29udGFpbmVyLnNwbGl0VGV4dChyYW5nZS5lbmRPZmZzZXQpO1xuICB9XG5cbiAgLy8gQ29sbGVjdCB0aGUgdGV4dCBub2Rlcy5cbiAgY29uc3Qgd2Fsa2VyID0gcmFuZ2Uuc3RhcnRDb250YWluZXIub3duZXJEb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgIHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyLFxuICAgIE5vZGVGaWx0ZXIuU0hPV19URVhULFxuICAgIG5vZGUgPT5cbiAgICAgIHJhbmdlLmludGVyc2VjdHNOb2RlKG5vZGUpXG4gICAgICAgID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUXG4gICAgICAgIDogTm9kZUZpbHRlci5GSUxURVJfUkVKRUNULFxuICApO1xuICB3YWxrZXIuY3VycmVudE5vZGUgPSByYW5nZS5zdGFydENvbnRhaW5lcjtcblxuICAvLyAvLyBPcHRpbWlzZSBieSBza2lwcGluZyBub2RlcyB0aGF0IGFyZSBleHBsaWNpdGx5IG91dHNpZGUgdGhlIHJhbmdlLlxuICAvLyBjb25zdCBOb2RlVHlwZXNXaXRoQ2hhcmFjdGVyT2Zmc2V0ID0gW1xuICAvLyAgTm9kZS5URVhUX05PREUsXG4gIC8vICBOb2RlLlBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERSxcbiAgLy8gIE5vZGUuQ09NTUVOVF9OT0RFLFxuICAvLyBdO1xuICAvLyBpZiAoIU5vZGVUeXBlc1dpdGhDaGFyYWN0ZXJPZmZzZXQuaW5jbHVkZXMocmFuZ2Uuc3RhcnRDb250YWluZXIubm9kZVR5cGUpKSB7XG4gIC8vICAgaWYgKHJhbmdlLnN0YXJ0T2Zmc2V0IDwgcmFuZ2Uuc3RhcnRDb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgLy8gICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyLmNoaWxkTm9kZXNbcmFuZ2Uuc3RhcnRPZmZzZXRdO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICB3YWxrZXIubmV4dFNpYmxpbmcoKTsgLy8gVE9ETyB2ZXJpZnkgdGhpcyBpcyBjb3JyZWN0LlxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGNvbnN0IG5vZGVzID0gW107XG4gIGlmICh3YWxrZXIuY3VycmVudE5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKVxuICAgIG5vZGVzLnB1c2god2Fsa2VyLmN1cnJlbnROb2RlKTtcbiAgd2hpbGUgKHdhbGtlci5uZXh0Tm9kZSgpICYmIHJhbmdlLmNvbXBhcmVQb2ludCh3YWxrZXIuY3VycmVudE5vZGUsIDApICE9PSAxKVxuICAgIG5vZGVzLnB1c2god2Fsa2VyLmN1cnJlbnROb2RlKTtcbiAgcmV0dXJuIG5vZGVzO1xufVxuXG4vLyBSZXBsYWNlIFtub2RlXSB3aXRoIDx0YWdOYW1lIC4uLmF0dHJpYnV0ZXM+W25vZGVdPC90YWdOYW1lPlxuZnVuY3Rpb24gd3JhcE5vZGVJbkhpZ2hsaWdodChub2RlLCB0YWdOYW1lLCBhdHRyaWJ1dGVzKSB7XG4gIGNvbnN0IGhpZ2hsaWdodEVsZW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgIGhpZ2hsaWdodEVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG4gIGNvbnN0IHRlbXBSYW5nZSA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICB0ZW1wUmFuZ2Uuc2VsZWN0Tm9kZShub2RlKTtcbiAgdGVtcFJhbmdlLnN1cnJvdW5kQ29udGVudHMoaGlnaGxpZ2h0RWxlbWVudCk7XG4gIHJldHVybiBoaWdobGlnaHRFbGVtZW50O1xufVxuXG4vLyBSZW1vdmUgYSBoaWdobGlnaHQgZWxlbWVudCBjcmVhdGVkIHdpdGggd3JhcE5vZGVJbkhpZ2hsaWdodC5cbmZ1bmN0aW9uIHJlbW92ZUhpZ2hsaWdodChoaWdobGlnaHRFbGVtZW50KSB7XG4gIC8vIElmIGl0IGhhcyBzb21laG93IGJlZW4gcmVtb3ZlZCBhbHJlYWR5LCB0aGVyZSBpcyBub3RoaW5nIHRvIGJlIGRvbmUuXG4gIGlmICghaGlnaGxpZ2h0RWxlbWVudC5wYXJlbnROb2RlKSByZXR1cm47XG4gIGlmIChoaWdobGlnaHRFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAxKSB7XG4gICAgaGlnaGxpZ2h0RWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChcbiAgICAgIGhpZ2hsaWdodEVsZW1lbnQuZmlyc3RDaGlsZCxcbiAgICAgIGhpZ2hsaWdodEVsZW1lbnQsXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiB0aGUgaGlnaGxpZ2h0IHNvbWVob3cgY29udGFpbnMgbXVsdGlwbGUgbm9kZXMgbm93LCBtb3ZlIHRoZW0gYWxsLlxuICAgIHdoaWxlIChoaWdobGlnaHRFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGhpZ2hsaWdodEVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgIGhpZ2hsaWdodEVsZW1lbnQuZmlyc3RDaGlsZCxcbiAgICAgICAgaGlnaGxpZ2h0RWxlbWVudCxcbiAgICAgICk7XG4gICAgfVxuICAgIGhpZ2hsaWdodEVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vY3NzJztcbmV4cG9ydCAqIGZyb20gJy4vcmFuZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi90ZXh0LXF1b3RlJztcbmV4cG9ydCAqIGZyb20gJy4vaGlnaGxpZ2h0LXJhbmdlJztcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IG93bmVyRG9jdW1lbnQgfSBmcm9tICcuL3Njb3BlLmpzJztcbmltcG9ydCB7IHByb2R1Y3QgfSBmcm9tICcuL2NhcnRlc2lhbi5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSYW5nZVNlbGVjdG9yQ3JlYXRvcihjcmVhdGVTZWxlY3Rvcikge1xuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlUmFuZ2VTZWxlY3RvcihzZWxlY3Rvcikge1xuICAgIGNvbnN0IHN0YXJ0U2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3Rvci5zdGFydFNlbGVjdG9yKTtcbiAgICBjb25zdCBlbmRTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdG9yLmVuZFNlbGVjdG9yKTtcblxuICAgIHJldHVybiBhc3luYyBmdW5jdGlvbiogbWF0Y2hBbGwoc2NvcGUpIHtcbiAgICAgIGNvbnN0IGRvY3VtZW50ID0gb3duZXJEb2N1bWVudChzY29wZSk7XG5cbiAgICAgIGNvbnN0IHN0YXJ0TWF0Y2hlcyA9IHN0YXJ0U2VsZWN0b3Ioc2NvcGUpO1xuICAgICAgY29uc3QgZW5kTWF0Y2hlcyA9IGVuZFNlbGVjdG9yKHNjb3BlKTtcblxuICAgICAgY29uc3QgcGFpcnMgPSBwcm9kdWN0KHN0YXJ0TWF0Y2hlcywgZW5kTWF0Y2hlcyk7XG5cbiAgICAgIGZvciBhd2FpdCAobGV0IFtzdGFydCwgZW5kXSBvZiBwYWlycykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuXG4gICAgICAgIHJlc3VsdC5zZXRTdGFydChzdGFydC5lbmRDb250YWluZXIsIHN0YXJ0LmVuZE9mZnNldCk7XG4gICAgICAgIHJlc3VsdC5zZXRFbmQoZW5kLnN0YXJ0Q29udGFpbmVyLCBlbmQuc3RhcnRPZmZzZXQpO1xuXG4gICAgICAgIGlmICghcmVzdWx0LmNvbGxhcHNlZCkgeWllbGQgcmVzdWx0O1xuICAgICAgfVxuICAgIH07XG4gIH07XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gb3duZXJEb2N1bWVudChzY29wZSkge1xuICBpZiAoJ2NvbW1vbkFuY2VzdG9yQ29udGFpbmVyJyBpbiBzY29wZSkge1xuICAgIHJldHVybiBzY29wZS5jb21tb25BbmNlc3RvckNvbnRhaW5lci5vd25lckRvY3VtZW50O1xuICB9XG5cbiAgcmV0dXJuIHNjb3BlLm93bmVyRG9jdW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5nZUZyb21TY29wZShzY29wZSkge1xuICBpZiAoJ2NvbW1vbkFuY2VzdG9yQ29udGFpbmVyJyBpbiBzY29wZSkge1xuICAgIHJldHVybiBzY29wZTtcbiAgfVxuXG4gIGNvbnN0IGRvY3VtZW50ID0gc2NvcGUub3duZXJEb2N1bWVudDtcbiAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuXG4gIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhzY29wZSk7XG5cbiAgcmV0dXJuIHJhbmdlO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IGNyZWF0ZU5vZGVJdGVyYXRvciBmcm9tICdkb20tbm9kZS1pdGVyYXRvcic7XG5pbXBvcnQgc2VlayBmcm9tICdkb20tc2Vlayc7XG5cbmltcG9ydCB7IG93bmVyRG9jdW1lbnQsIHJhbmdlRnJvbVNjb3BlIH0gZnJvbSAnLi9zY29wZS5qcyc7XG5cbi8vIE5vZGUgY29uc3RhbnRzXG5jb25zdCBURVhUX05PREUgPSAzO1xuXG4vLyBOb2RlRmlsdGVyIGNvbnN0YW50c1xuY29uc3QgU0hPV19URVhUID0gNDtcblxuZnVuY3Rpb24gZmlyc3RUZXh0Tm9kZUluUmFuZ2UocmFuZ2UpIHtcbiAgY29uc3QgeyBzdGFydENvbnRhaW5lciB9ID0gcmFuZ2U7XG5cbiAgaWYgKHN0YXJ0Q29udGFpbmVyLm5vZGVUeXBlID09PSBURVhUX05PREUpIHJldHVybiBzdGFydENvbnRhaW5lcjtcblxuICBjb25zdCByb290ID0gcmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG4gIGNvbnN0IGl0ZXIgPSBjcmVhdGVOb2RlSXRlcmF0b3Iocm9vdCwgU0hPV19URVhUKTtcbiAgcmV0dXJuIGl0ZXIubmV4dE5vZGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRleHRRdW90ZVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiogbWF0Y2hBbGwoc2NvcGUpIHtcbiAgICBjb25zdCBkb2N1bWVudCA9IG93bmVyRG9jdW1lbnQoc2NvcGUpO1xuICAgIGNvbnN0IHJhbmdlID0gcmFuZ2VGcm9tU2NvcGUoc2NvcGUpO1xuICAgIGNvbnN0IHJvb3QgPSByYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcjtcbiAgICBjb25zdCB0ZXh0ID0gcmFuZ2UudG9TdHJpbmcoKTtcblxuICAgIGNvbnN0IGV4YWN0ID0gc2VsZWN0b3IuZXhhY3Q7XG4gICAgY29uc3QgcHJlZml4ID0gc2VsZWN0b3IucHJlZml4IHx8ICcnO1xuICAgIGNvbnN0IHN1ZmZpeCA9IHNlbGVjdG9yLnN1ZmZpeCB8fCAnJztcbiAgICBjb25zdCBwYXR0ZXJuID0gcHJlZml4ICsgZXhhY3QgKyBzdWZmaXg7XG5cbiAgICBjb25zdCBpdGVyID0gY3JlYXRlTm9kZUl0ZXJhdG9yKHJvb3QsIFNIT1dfVEVYVCk7XG5cbiAgICBsZXQgZnJvbUluZGV4ID0gMDtcbiAgICBsZXQgcmVmZXJlbmNlTm9kZUluZGV4ID0gMDtcblxuICAgIGlmIChyYW5nZS5zdGFydENvbnRhaW5lci5ub2RlVHlwZSA9PT0gVEVYVF9OT0RFKSB7XG4gICAgICByZWZlcmVuY2VOb2RlSW5kZXggLT0gcmFuZ2Uuc3RhcnRPZmZzZXQ7XG4gICAgfVxuXG4gICAgd2hpbGUgKGZyb21JbmRleCA8IHRleHQubGVuZ3RoKSB7XG4gICAgICBjb25zdCBwYXR0ZXJuU3RhcnRJbmRleCA9IHRleHQuaW5kZXhPZihwYXR0ZXJuLCBmcm9tSW5kZXgpO1xuICAgICAgaWYgKHBhdHRlcm5TdGFydEluZGV4ID09PSAtMSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBtYXRjaCA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG5cbiAgICAgIGNvbnN0IG1hdGNoU3RhcnRJbmRleCA9IHBhdHRlcm5TdGFydEluZGV4ICsgcHJlZml4Lmxlbmd0aDtcbiAgICAgIGNvbnN0IG1hdGNoRW5kSW5kZXggPSBtYXRjaFN0YXJ0SW5kZXggKyBleGFjdC5sZW5ndGg7XG5cbiAgICAgIC8vIFNlZWsgdG8gdGhlIHN0YXJ0IG9mIHRoZSBtYXRjaC5cbiAgICAgIHJlZmVyZW5jZU5vZGVJbmRleCArPSBzZWVrKGl0ZXIsIG1hdGNoU3RhcnRJbmRleCAtIHJlZmVyZW5jZU5vZGVJbmRleCk7XG5cbiAgICAgIC8vIE5vcm1hbGl6ZSB0aGUgcmVmZXJlbmNlIHRvIHRoZSBzdGFydCBvZiB0aGUgbWF0Y2guXG4gICAgICBpZiAoIWl0ZXIucG9pbnRlckJlZm9yZVJlZmVyZW5jZU5vZGUpIHtcbiAgICAgICAgLy8gUGVlayBmb3J3YXJkIGFuZCBza2lwIG92ZXIgYW55IGVtcHR5IG5vZGVzLlxuICAgICAgICBpZiAoaXRlci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgICAgd2hpbGUgKGl0ZXIucmVmZXJlbmNlTm9kZS5ub2RlVmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBpdGVyLm5leHROb2RlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gVGhlIGl0ZXJhdG9yIG5vdyBwb2ludHMgdG8gdGhlIGVuZCBvZiB0aGUgcmVmZXJlbmNlIG5vZGUuXG4gICAgICAgICAgLy8gTW92ZSB0aGUgaXRlcmF0b3IgYmFjayB0byB0aGUgc3RhcnQgb2YgdGhlIHJlZmVyZW5jZSBub2RlLlxuICAgICAgICAgIGl0ZXIucHJldmlvdXNOb2RlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVjb3JkIHRoZSBzdGFydCBjb250YWluZXIgYW5kIG9mZnNldC5cbiAgICAgIG1hdGNoLnNldFN0YXJ0KGl0ZXIucmVmZXJlbmNlTm9kZSwgbWF0Y2hTdGFydEluZGV4IC0gcmVmZXJlbmNlTm9kZUluZGV4KTtcblxuICAgICAgLy8gU2VlayB0byB0aGUgZW5kIG9mIHRoZSBtYXRjaC5cbiAgICAgIHJlZmVyZW5jZU5vZGVJbmRleCArPSBzZWVrKGl0ZXIsIG1hdGNoRW5kSW5kZXggLSByZWZlcmVuY2VOb2RlSW5kZXgpO1xuXG4gICAgICAvLyBOb3JtYWxpemUgdGhlIHJlZmVyZW5jZSB0byB0aGUgZW5kIG9mIHRoZSBtYXRjaC5cbiAgICAgIGlmICghaXRlci5wb2ludGVyQmVmb3JlUmVmZXJlbmNlTm9kZSkge1xuICAgICAgICAvLyBQZWVrIGZvcndhcmQgYW5kIHNraXAgb3ZlciBhbnkgZW1wdHkgbm9kZXMuXG4gICAgICAgIGlmIChpdGVyLm5leHROb2RlKCkpIHtcbiAgICAgICAgICB3aGlsZSAoaXRlci5yZWZlcmVuY2VOb2RlLm5vZGVWYWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGl0ZXIubmV4dE5vZGUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBUaGUgaXRlcmF0b3Igbm93IHBvaW50cyB0byB0aGUgZW5kIG9mIHRoZSByZWZlcmVuY2Ugbm9kZS5cbiAgICAgICAgICAvLyBNb3ZlIHRoZSBpdGVyYXRvciBiYWNrIHRvIHRoZSBzdGFydCBvZiB0aGUgcmVmZXJlbmNlIG5vZGUuXG4gICAgICAgICAgaXRlci5wcmV2aW91c05vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1heWJlIHNlZWsgYmFja3dhcmRzIHRvIHRoZSBzdGFydCBvZiB0aGUgbm9kZS5cbiAgICAgICAgcmVmZXJlbmNlTm9kZUluZGV4ICs9IHNlZWsoaXRlciwgaXRlci5yZWZlcmVuY2VOb2RlKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVjb3JkIHRoZSBlbmQgY29udGFpbmVyIGFuZCBvZmZzZXQuXG4gICAgICBtYXRjaC5zZXRFbmQoaXRlci5yZWZlcmVuY2VOb2RlLCBtYXRjaEVuZEluZGV4IC0gcmVmZXJlbmNlTm9kZUluZGV4KTtcblxuICAgICAgLy8gWWllbGQgdGhlIG1hdGNoLlxuICAgICAgeWllbGQgbWF0Y2g7XG5cbiAgICAgIC8vIEFkdmFuY2UgdGhlIHNlYXJjaCBmb3J3YXJkLlxuICAgICAgZnJvbUluZGV4ID0gbWF0Y2hTdGFydEluZGV4ICsgMTtcbiAgICAgIHJlZmVyZW5jZU5vZGVJbmRleCArPSBzZWVrKGl0ZXIsIGZyb21JbmRleCAtIHJlZmVyZW5jZU5vZGVJbmRleCk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVzY3JpYmVUZXh0UXVvdGUocmFuZ2UsIHNjb3BlID0gbnVsbCkge1xuICBzY29wZSA9IHJhbmdlRnJvbVNjb3BlKHNjb3BlIHx8IG93bmVyRG9jdW1lbnQocmFuZ2UpLmRvY3VtZW50RWxlbWVudCk7XG5cbiAgY29uc3Qgcm9vdCA9IHNjb3BlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyO1xuICBjb25zdCB0ZXh0ID0gc2NvcGUudG9TdHJpbmcoKTtcblxuICBjb25zdCBleGFjdCA9IHJhbmdlLnRvU3RyaW5nKCk7XG4gIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlVGV4dFF1b3RlU2VsZWN0b3IoeyBleGFjdCB9KTtcblxuICBjb25zdCBpdGVyID0gY3JlYXRlTm9kZUl0ZXJhdG9yKHJvb3QsIFNIT1dfVEVYVCk7XG5cbiAgY29uc3Qgc3RhcnROb2RlID0gZmlyc3RUZXh0Tm9kZUluUmFuZ2UocmFuZ2UpO1xuICBjb25zdCBzdGFydEluZGV4ID1cbiAgICByYW5nZS5zdGFydENvbnRhaW5lci5ub2RlVHlwZSA9PT0gVEVYVF9OT0RFXG4gICAgICA/IHNlZWsoaXRlciwgc3RhcnROb2RlKSArIHJhbmdlLnN0YXJ0T2Zmc2V0XG4gICAgICA6IHNlZWsoaXRlciwgc3RhcnROb2RlKTtcbiAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgZXhhY3QubGVuZ3RoO1xuXG4gIGNvbnN0IGFmZml4TGVuZ3RoUGFpcnMgPSBbXTtcblxuICBmb3IgYXdhaXQgKGNvbnN0IG1hdGNoIG9mIHNlbGVjdG9yKHNjb3BlKSkge1xuICAgIGNvbnN0IG1hdGNoSXRlciA9IGNyZWF0ZU5vZGVJdGVyYXRvcihyb290LCBTSE9XX1RFWFQpO1xuXG4gICAgY29uc3QgbWF0Y2hTdGFydE5vZGUgPSBmaXJzdFRleHROb2RlSW5SYW5nZShtYXRjaCk7XG4gICAgY29uc3QgbWF0Y2hTdGFydEluZGV4ID1cbiAgICAgIG1hdGNoLnN0YXJ0Q29udGFpbmVyLm5vZGVUeXBlID09PSBURVhUX05PREVcbiAgICAgICAgPyBzZWVrKG1hdGNoSXRlciwgbWF0Y2hTdGFydE5vZGUpICsgbWF0Y2guc3RhcnRPZmZzZXRcbiAgICAgICAgOiBzZWVrKG1hdGNoSXRlciwgbWF0Y2hTdGFydE5vZGUpO1xuICAgIGNvbnN0IG1hdGNoRW5kSW5kZXggPSBtYXRjaFN0YXJ0SW5kZXggKyBtYXRjaC50b1N0cmluZygpLmxlbmd0aDtcblxuICAgIC8vIElmIHRoZSBtYXRjaCBpcyB0aGUgc2FtZSBhcyB0aGUgaW5wdXQgcmFuZ2UsIGNvbnRpbnVlLlxuICAgIGlmIChtYXRjaFN0YXJ0SW5kZXggPT09IHN0YXJ0SW5kZXggfHwgbWF0Y2hFbmRJbmRleCA9PT0gZW5kSW5kZXgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIERldGVybWluZSBob3cgbWFueSBwcmVmaXggY2hhcmFjdGVycyBhcmUgc2hhcmVkLlxuICAgIGNvbnN0IHByZWZpeExlbmd0aCA9IG92ZXJsYXBSaWdodChcbiAgICAgIHRleHQuc3Vic3RyaW5nKDAsIG1hdGNoU3RhcnRJbmRleCksXG4gICAgICB0ZXh0LnN1YnN0cmluZygwLCBzdGFydEluZGV4KSxcbiAgICApO1xuXG4gICAgLy8gRGV0ZXJtaW5lIGhvdyBtYW55IHN1ZmZpeCBjaGFyYWN0ZXJzIGFyZSBzaGFyZWQuXG4gICAgY29uc3Qgc3VmZml4TGVuZ3RoID0gb3ZlcmxhcChcbiAgICAgIHRleHQuc3Vic3RyaW5nKG1hdGNoRW5kSW5kZXgpLFxuICAgICAgdGV4dC5zdWJzdHJpbmcoZW5kSW5kZXgpLFxuICAgICk7XG5cbiAgICAvLyBSZWNvcmQgdGhlIGFmZml4IGxlbmd0aHMgdGhhdCB3b3VsZCBoYXZlIHByZWNsdWRlZCB0aGlzIG1hdGNoLlxuICAgIGFmZml4TGVuZ3RoUGFpcnMucHVzaChbcHJlZml4TGVuZ3RoICsgMSwgc3VmZml4TGVuZ3RoICsgMV0pO1xuICB9XG5cbiAgLy8gQ29uc3RydWN0IGFuZCByZXR1cm4gYW4gdW5hbWJpZ3VvdXMgc2VsZWN0b3IuXG4gIGNvbnN0IHJlc3VsdCA9IHsgdHlwZTogJ1RleHRRdW90ZVNlbGVjdG9yJywgZXhhY3QgfTtcblxuICBpZiAoYWZmaXhMZW5ndGhQYWlycy5sZW5ndGgpIHtcbiAgICBjb25zdCBbcHJlZml4TGVuZ3RoLCBzdWZmaXhMZW5ndGhdID0gbWluaW1hbFNvbHV0aW9uKGFmZml4TGVuZ3RoUGFpcnMpO1xuXG4gICAgaWYgKHByZWZpeExlbmd0aCA+IDAgJiYgc3RhcnRJbmRleCA+IDApIHtcbiAgICAgIHJlc3VsdC5wcmVmaXggPSB0ZXh0LnN1YnN0cmluZyhzdGFydEluZGV4IC0gcHJlZml4TGVuZ3RoLCBzdGFydEluZGV4KTtcbiAgICB9XG5cbiAgICBpZiAoc3VmZml4TGVuZ3RoID4gMCAmJiBlbmRJbmRleCA8IHRleHQubGVuZ3RoKSB7XG4gICAgICByZXN1bHQuc3VmZml4ID0gdGV4dC5zdWJzdHJpbmcoZW5kSW5kZXgsIGVuZEluZGV4ICsgc3VmZml4TGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBvdmVybGFwKHRleHQxLCB0ZXh0Mikge1xuICBsZXQgY291bnQgPSAwO1xuXG4gIHdoaWxlIChjb3VudCA8IHRleHQxLmxlbmd0aCAmJiBjb3VudCA8IHRleHQyLmxlbmd0aCkge1xuICAgIGNvbnN0IGMxID0gdGV4dDFbY291bnRdO1xuICAgIGNvbnN0IGMyID0gdGV4dDJbY291bnRdO1xuICAgIGlmIChjMSAhPT0gYzIpIGJyZWFrO1xuICAgIGNvdW50Kys7XG4gIH1cblxuICByZXR1cm4gY291bnQ7XG59XG5cbmZ1bmN0aW9uIG92ZXJsYXBSaWdodCh0ZXh0MSwgdGV4dDIpIHtcbiAgbGV0IGNvdW50ID0gMDtcblxuICB3aGlsZSAoY291bnQgPCB0ZXh0MS5sZW5ndGggJiYgY291bnQgPCB0ZXh0Mi5sZW5ndGgpIHtcbiAgICBjb25zdCBjMSA9IHRleHQxW3RleHQxLmxlbmd0aCAtIDEgLSBjb3VudF07XG4gICAgY29uc3QgYzIgPSB0ZXh0Mlt0ZXh0Mi5sZW5ndGggLSAxIC0gY291bnRdO1xuICAgIGlmIChjMSAhPT0gYzIpIGJyZWFrO1xuICAgIGNvdW50Kys7XG4gIH1cblxuICByZXR1cm4gY291bnQ7XG59XG5cbmZ1bmN0aW9uIG1pbmltYWxTb2x1dGlvbihyZXF1aXJlbWVudHMpIHtcbiAgLy8gQnVpbGQgYWxsIHRoZSBwYWlycyBhbmQgb3JkZXIgdGhlbSBieSB0aGVpciBzdW1zLlxuICBjb25zdCBwYWlycyA9IHJlcXVpcmVtZW50cy5mbGF0TWFwKGwgPT4gcmVxdWlyZW1lbnRzLm1hcChyID0+IFtsWzBdLCByWzFdXSkpO1xuICBwYWlycy5zb3J0KChhLCBiKSA9PiBhWzBdICsgYVsxXSAtIChiWzBdICsgYlsxXSkpO1xuXG4gIC8vIEZpbmQgdGhlIGZpcnN0IHBhaXIgdGhhdCBzYXRpc2ZpZXMgZXZlcnkgcmVxdWlyZW1lbnQuXG4gIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgIGNvbnN0IFtwMCwgcDFdID0gcGFpcjtcbiAgICBpZiAocmVxdWlyZW1lbnRzLmV2ZXJ5KChbcjAsIHIxXSkgPT4gcjAgPD0gcDAgfHwgcjEgPD0gcDEpKSB7XG4gICAgICByZXR1cm4gcGFpcjtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIGxhcmdlc3QgcGFpcmluZyAodW5yZWFjaGFibGUpLlxuICByZXR1cm4gcGFpcnNbcGFpcnMubGVuZ3RoIC0gMV07XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVJlZmluYWJsZShzZWxlY3RvckNyZWF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yKHNvdXJjZSkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gc2VsZWN0b3JDcmVhdG9yKHNvdXJjZSk7XG5cbiAgICBpZiAoc291cmNlLnJlZmluZWRCeSkge1xuICAgICAgY29uc3QgcmVmaW5pbmdTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKHNvdXJjZS5yZWZpbmVkQnkpO1xuXG4gICAgICByZXR1cm4gYXN5bmMgZnVuY3Rpb24qIG1hdGNoQWxsKHNjb3BlKSB7XG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgbWF0Y2ggb2Ygc2VsZWN0b3Ioc2NvcGUpKSB7XG4gICAgICAgICAgeWllbGQqIHJlZmluaW5nU2VsZWN0b3IobWF0Y2gpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkZW1vL2luZGV4Lmh0bWxcIjsiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiBnbG9iYWwgaW5mbywgbW9kdWxlLCBzb3VyY2UsIHRhcmdldCAqL1xuXG5pbXBvcnQge1xuICBjcmVhdGVSYW5nZVNlbGVjdG9yQ3JlYXRvcixcbiAgY3JlYXRlVGV4dFF1b3RlU2VsZWN0b3IsXG4gIGRlc2NyaWJlVGV4dFF1b3RlLFxuICBoaWdobGlnaHRSYW5nZSxcbn0gZnJvbSAnQGFubm90YXRvci9kb20nO1xuaW1wb3J0IHsgbWFrZVJlZmluYWJsZSB9IGZyb20gJ0Bhbm5vdGF0b3Ivc2VsZWN0b3InO1xuXG5jb25zdCBFWEFNUExFX1NFTEVDVE9SUyA9IFtcbiAge1xuICAgIHR5cGU6ICdUZXh0UXVvdGVTZWxlY3RvcicsXG4gICAgZXhhY3Q6ICdub3QnLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ1JhbmdlU2VsZWN0b3InLFxuICAgIHN0YXJ0U2VsZWN0b3I6IHtcbiAgICAgIHR5cGU6ICdUZXh0UXVvdGVTZWxlY3RvcicsXG4gICAgICBleGFjdDogJ2FubicsXG4gICAgfSxcbiAgICBlbmRTZWxlY3Rvcjoge1xuICAgICAgdHlwZTogJ1RleHRRdW90ZVNlbGVjdG9yJyxcbiAgICAgIGV4YWN0OiAnIScsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdUZXh0UXVvdGVTZWxlY3RvcicsXG4gICAgZXhhY3Q6ICdhbm5vdGF0ZWQgd29ybGQnLFxuICAgIHJlZmluZWRCeToge1xuICAgICAgdHlwZTogJ1RleHRRdW90ZVNlbGVjdG9yJyxcbiAgICAgIGV4YWN0OiAndGF0JyxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdHlwZTogJ1RleHRRdW90ZVNlbGVjdG9yJyxcbiAgICBleGFjdDogJ1RvIGFubm90YXRlLCBvciBub3QgdG8gYW5ub3RhdGUsJyxcbiAgICByZWZpbmVkQnk6IHtcbiAgICAgIHR5cGU6ICdSYW5nZVNlbGVjdG9yJyxcbiAgICAgIHN0YXJ0U2VsZWN0b3I6IHtcbiAgICAgICAgdHlwZTogJ1RleHRRdW90ZVNlbGVjdG9yJyxcbiAgICAgICAgZXhhY3Q6ICdUbyBhbm5vdGF0ZScsXG4gICAgICAgIHJlZmluZWRCeToge1xuICAgICAgICAgIHR5cGU6ICdUZXh0UXVvdGVTZWxlY3RvcicsXG4gICAgICAgICAgZXhhY3Q6ICdhbm5vdGF0ZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZW5kU2VsZWN0b3I6IHtcbiAgICAgICAgdHlwZTogJ1RleHRRdW90ZVNlbGVjdG9yJyxcbiAgICAgICAgZXhhY3Q6ICdub3QgdG8gYW5ub3RhdGUnLFxuICAgICAgICByZWZpbmVkQnk6IHtcbiAgICAgICAgICB0eXBlOiAnVGV4dFF1b3RlU2VsZWN0b3InLFxuICAgICAgICAgIGV4YWN0OiAnIHRvJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByZWZpbmVkQnk6IHtcbiAgICAgICAgdHlwZTogJ1RleHRRdW90ZVNlbGVjdG9yJyxcbiAgICAgICAgZXhhY3Q6ICdvJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbl07XG5cbmNvbnN0IGNsZWFudXBGdW5jdGlvbnMgPSBbXTtcblxuZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgbGV0IHJlbW92ZUhpZ2hsaWdodDtcbiAgd2hpbGUgKChyZW1vdmVIaWdobGlnaHQgPSBjbGVhbnVwRnVuY3Rpb25zLnNoaWZ0KCkpKSB7XG4gICAgcmVtb3ZlSGlnaGxpZ2h0KCk7XG4gIH1cbiAgdGFyZ2V0Lm5vcm1hbGl6ZSgpO1xufVxuXG5jb25zdCBjcmVhdGVTZWxlY3RvciA9IG1ha2VSZWZpbmFibGUoc2VsZWN0b3IgPT4ge1xuICBjb25zdCBzZWxlY3RvckNyZWF0b3IgPSB7XG4gICAgVGV4dFF1b3RlU2VsZWN0b3I6IGNyZWF0ZVRleHRRdW90ZVNlbGVjdG9yLFxuICAgIFJhbmdlU2VsZWN0b3I6IGNyZWF0ZVJhbmdlU2VsZWN0b3JDcmVhdG9yKGNyZWF0ZVNlbGVjdG9yKSxcbiAgfVtzZWxlY3Rvci50eXBlXTtcblxuICBpZiAoc2VsZWN0b3JDcmVhdG9yID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIHNlbGVjdG9yIHR5cGU6ICR7c2VsZWN0b3IudHlwZX1gKTtcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RvckNyZWF0b3Ioc2VsZWN0b3IpO1xufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGFuY2hvcihzZWxlY3Rvcikge1xuICBjb25zdCBtYXRjaEFsbCA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgY29uc3QgcmFuZ2VzID0gW107XG5cbiAgZm9yIGF3YWl0IChjb25zdCByYW5nZSBvZiBtYXRjaEFsbCh0YXJnZXQpKSB7XG4gICAgcmFuZ2VzLnB1c2gocmFuZ2UpO1xuICB9XG5cbiAgZm9yIChjb25zdCByYW5nZSBvZiByYW5nZXMpIHtcbiAgICBjb25zdCByZW1vdmVIaWdobGlnaHQgPSBoaWdobGlnaHRSYW5nZShyYW5nZSk7XG4gICAgY2xlYW51cEZ1bmN0aW9ucy5wdXNoKHJlbW92ZUhpZ2hsaWdodCk7XG4gIH1cblxuICBpbmZvLmlubmVyVGV4dCA9IEpTT04uc3RyaW5naWZ5KHNlbGVjdG9yLCBudWxsLCAyKTtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGRlc2NyaWJlU2VsZWN0aW9uKCkge1xuICBjb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcbiAgaWYgKHNlbGVjdGlvbi50eXBlICE9PSAnUmFuZ2UnKSByZXR1cm47XG5cbiAgY29uc3QgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcbiAgaWYgKHJhbmdlLmNvbGxhcHNlZCkgcmV0dXJuO1xuXG4gIGNvbnN0IHNjb3BlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgc2NvcGUuc2VsZWN0Tm9kZUNvbnRlbnRzKHNvdXJjZSk7XG5cbiAgaWYgKCFzY29wZS5pc1BvaW50SW5SYW5nZShyYW5nZS5zdGFydENvbnRhaW5lciwgcmFuZ2Uuc3RhcnRPZmZzZXQpKSByZXR1cm47XG4gIGlmICghc2NvcGUuaXNQb2ludEluUmFuZ2UocmFuZ2UuZW5kQ29udGFpbmVyLCByYW5nZS5lbmRPZmZzZXQpKSByZXR1cm47XG5cbiAgcmV0dXJuIGRlc2NyaWJlVGV4dFF1b3RlKHJhbmdlLCBzY29wZSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG9uU2VsZWN0aW9uQ2hhbmdlKCkge1xuICBjb25zdCBzZWxlY3RvciA9IGF3YWl0IGRlc2NyaWJlU2VsZWN0aW9uKCk7XG4gIGlmIChzZWxlY3Rvcikge1xuICAgIGNsZWFudXAoKTtcbiAgICBhbmNob3Ioc2VsZWN0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uU2VsZWN0b3JFeGFtcGxlQ2xpY2soZXZlbnQpIHtcbiAgY29uc3QgZXhhbXBsZU51bWJlciA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnJ1bkV4YW1wbGU7XG4gIGlmICghZXhhbXBsZU51bWJlcikgcmV0dXJuO1xuICBjb25zdCBzZWxlY3RvciA9IEVYQU1QTEVfU0VMRUNUT1JTW2V4YW1wbGVOdW1iZXJdO1xuICBjbGVhbnVwKCk7XG4gIGFuY2hvcihzZWxlY3Rvcik7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIG9uU2VsZWN0aW9uQ2hhbmdlKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25TZWxlY3RvckV4YW1wbGVDbGljayk7XG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgb25TZWxlY3Rpb25DaGFuZ2UpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25TZWxlY3RvckV4YW1wbGVDbGljayk7XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==