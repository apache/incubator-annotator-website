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

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/array/from */ "../node_modules/core-js-pure/stable/array/from.js");

/***/ }),

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

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/object/define-properties */ "../node_modules/core-js-pure/stable/object/define-properties.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/object/define-property */ "../node_modules/core-js-pure/stable/object/define-property.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/object/get-own-property-descriptor */ "../node_modules/core-js-pure/stable/object/get-own-property-descriptor.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/object/get-own-property-descriptors */ "../node_modules/core-js-pure/stable/object/get-own-property-descriptors.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js":
/*!************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/object/get-own-property-symbols */ "../node_modules/core-js-pure/stable/object/get-own-property-symbols.js");

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

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/symbol */ "../node_modules/core-js-pure/stable/symbol/index.js");

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

/***/ "../node_modules/@babel/runtime-corejs3/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/object/define-property */ "../node_modules/core-js-pure/features/object/define-property.js");

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

/***/ "../node_modules/@babel/runtime-corejs3/helpers/AsyncGenerator.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/AsyncGenerator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$asyncIterator = __webpack_require__(/*! ../core-js/symbol/async-iterator */ "../node_modules/@babel/runtime-corejs3/core-js/symbol/async-iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../node_modules/@babel/runtime-corejs3/core-js/symbol.js");

var _Promise = __webpack_require__(/*! ../core-js/promise */ "../node_modules/@babel/runtime-corejs3/core-js/promise.js");

var AwaitValue = __webpack_require__(/*! ./AwaitValue */ "../node_modules/@babel/runtime-corejs3/helpers/AwaitValue.js");

function AsyncGenerator(gen) {
  var front, back;

  function send(key, arg) {
    return new _Promise(function (resolve, reject) {
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
      var wrappedAwait = value instanceof AwaitValue;

      _Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) {
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

if (typeof _Symbol === "function" && _Symbol$asyncIterator) {
  AsyncGenerator.prototype[_Symbol$asyncIterator] = function () {
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

module.exports = AsyncGenerator;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/AwaitValue.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/AwaitValue.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _AwaitValue(value) {
  this.wrapped = value;
}

module.exports = _AwaitValue;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(/*! ../core-js/array/is-array */ "../node_modules/@babel/runtime-corejs3/core-js/array/is-array.js");

function _arrayWithHoles(arr) {
  if (_Array$isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/arrayWithoutHoles.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/arrayWithoutHoles.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(/*! ../core-js/array/is-array */ "../node_modules/@babel/runtime-corejs3/core-js/array/is-array.js");

function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/asyncGeneratorDelegate.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/asyncGeneratorDelegate.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../node_modules/@babel/runtime-corejs3/core-js/symbol.js");

var _Promise = __webpack_require__(/*! ../core-js/promise */ "../node_modules/@babel/runtime-corejs3/core-js/promise.js");

function _asyncGeneratorDelegate(inner, awaitWrap) {
  var iter = {},
      waiting = false;

  function pump(key, value) {
    waiting = true;
    value = new _Promise(function (resolve) {
      resolve(inner[key](value));
    });
    return {
      done: false,
      value: awaitWrap(value)
    };
  }

  ;

  if (typeof _Symbol === "function" && _Symbol$iterator) {
    iter[_Symbol$iterator] = function () {
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

module.exports = _asyncGeneratorDelegate;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/asyncIterator.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/asyncIterator.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _getIteratorMethod = __webpack_require__(/*! ../core-js/get-iterator-method */ "../node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js");

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js");

var _Symbol$asyncIterator = __webpack_require__(/*! ../core-js/symbol/async-iterator */ "../node_modules/@babel/runtime-corejs3/core-js/symbol/async-iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../node_modules/@babel/runtime-corejs3/core-js/symbol.js");

function _asyncIterator(iterable) {
  var method;

  if (typeof _Symbol !== "undefined") {
    if (_Symbol$asyncIterator) {
      method = iterable[_Symbol$asyncIterator];
      if (method != null) return method.call(iterable);
    }

    if (_Symbol$iterator) {
      method = _getIteratorMethod(iterable);
      if (method != null) return method.call(iterable);
    }
  }

  throw new TypeError("Object is not async iterable");
}

module.exports = _asyncIterator;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/asyncToGenerator.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/asyncToGenerator.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "../node_modules/@babel/runtime-corejs3/core-js/promise.js");

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
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
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

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/awaitAsyncGenerator.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/awaitAsyncGenerator.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var AwaitValue = __webpack_require__(/*! ./AwaitValue */ "../node_modules/@babel/runtime-corejs3/helpers/AwaitValue.js");

function _awaitAsyncGenerator(value) {
  return new AwaitValue(value);
}

module.exports = _awaitAsyncGenerator;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/defineProperty.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/defineProperty.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs3/core-js/object/define-property.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/iterableToArray.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/iterableToArray.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__(/*! ../core-js/array/from */ "../node_modules/@babel/runtime-corejs3/core-js/array/from.js");

var _isIterable = __webpack_require__(/*! ../core-js/is-iterable */ "../node_modules/@babel/runtime-corejs3/core-js/is-iterable.js");

function _iterableToArray(iter) {
  if (_isIterable(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _Array$from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _getIterator = __webpack_require__(/*! ../core-js/get-iterator */ "../node_modules/@babel/runtime-corejs3/core-js/get-iterator.js");

var _isIterable = __webpack_require__(/*! ../core-js/is-iterable */ "../node_modules/@babel/runtime-corejs3/core-js/is-iterable.js");

function _iterableToArrayLimit(arr, i) {
  if (!(_isIterable(Object(arr)) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/nonIterableSpread.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/nonIterableSpread.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "../node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "../node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "../node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/toConsumableArray.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/toConsumableArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "../node_modules/@babel/runtime-corejs3/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "../node_modules/@babel/runtime-corejs3/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "../node_modules/@babel/runtime-corejs3/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/typeof.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/typeof.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../node_modules/@babel/runtime-corejs3/core-js/symbol.js");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/wrapAsyncGenerator.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/wrapAsyncGenerator.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var AsyncGenerator = __webpack_require__(/*! ./AsyncGenerator */ "../node_modules/@babel/runtime-corejs3/helpers/AsyncGenerator.js");

function _wrapAsyncGenerator(fn) {
  return function () {
    return new AsyncGenerator(fn.apply(this, arguments));
  };
}

module.exports = _wrapAsyncGenerator;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/regenerator/index.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/regenerator/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../node_modules/regenerator-runtime/runtime.js");


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

/***/ "../node_modules/core-js-pure/es/object/define-properties.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/es/object/define-properties.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.define-properties */ "../node_modules/core-js-pure/modules/es.object.define-properties.js");
var path = __webpack_require__(/*! ../../internals/path */ "../node_modules/core-js-pure/internals/path.js");

var Object = path.Object;

var defineProperties = module.exports = function defineProperties(T, D) {
  return Object.defineProperties(T, D);
};

if (Object.defineProperties.sham) defineProperties.sham = true;


/***/ }),

/***/ "../node_modules/core-js-pure/es/object/define-property.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/es/object/define-property.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.define-property */ "../node_modules/core-js-pure/modules/es.object.define-property.js");
var path = __webpack_require__(/*! ../../internals/path */ "../node_modules/core-js-pure/internals/path.js");

var Object = path.Object;

var defineProperty = module.exports = function defineProperty(it, key, desc) {
  return Object.defineProperty(it, key, desc);
};

if (Object.defineProperty.sham) defineProperty.sham = true;


/***/ }),

/***/ "../node_modules/core-js-pure/es/object/get-own-property-descriptor.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js-pure/es/object/get-own-property-descriptor.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.get-own-property-descriptor */ "../node_modules/core-js-pure/modules/es.object.get-own-property-descriptor.js");
var path = __webpack_require__(/*! ../../internals/path */ "../node_modules/core-js-pure/internals/path.js");

var Object = path.Object;

var getOwnPropertyDescriptor = module.exports = function getOwnPropertyDescriptor(it, key) {
  return Object.getOwnPropertyDescriptor(it, key);
};

if (Object.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor.sham = true;


/***/ }),

/***/ "../node_modules/core-js-pure/es/object/get-own-property-descriptors.js":
/*!******************************************************************************!*\
  !*** ../node_modules/core-js-pure/es/object/get-own-property-descriptors.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.get-own-property-descriptors */ "../node_modules/core-js-pure/modules/es.object.get-own-property-descriptors.js");
var path = __webpack_require__(/*! ../../internals/path */ "../node_modules/core-js-pure/internals/path.js");

module.exports = path.Object.getOwnPropertyDescriptors;


/***/ }),

/***/ "../node_modules/core-js-pure/es/object/get-own-property-symbols.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js-pure/es/object/get-own-property-symbols.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.symbol */ "../node_modules/core-js-pure/modules/es.symbol.js");
var path = __webpack_require__(/*! ../../internals/path */ "../node_modules/core-js-pure/internals/path.js");

module.exports = path.Object.getOwnPropertySymbols;


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

/***/ "../node_modules/core-js-pure/features/object/define-property.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js-pure/features/object/define-property.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/object/define-property */ "../node_modules/core-js-pure/es/object/define-property.js");


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

/***/ "../node_modules/core-js-pure/internals/own-keys.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/own-keys.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js-pure/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../node_modules/core-js-pure/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../node_modules/core-js-pure/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js-pure/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


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

/***/ "../node_modules/core-js-pure/modules/es.object.define-properties.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.object.define-properties.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js-pure/internals/descriptors.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "../node_modules/core-js-pure/internals/object-define-properties.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.object.define-property.js":
/*!*************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.object.define-property.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js-pure/internals/descriptors.js");
var objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js-pure/internals/object-define-property.js");

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.object.get-own-property-descriptor.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.object.get-own-property-descriptor.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js-pure/internals/fails.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js-pure/internals/to-indexed-object.js");
var nativeGetOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js").f;
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js-pure/internals/descriptors.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.object.get-own-property-descriptors.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.object.get-own-property-descriptors.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js-pure/internals/descriptors.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "../node_modules/core-js-pure/internals/own-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js-pure/internals/to-indexed-object.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "../node_modules/core-js-pure/internals/create-property.js");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


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

/***/ "../node_modules/core-js-pure/stable/array/from.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/stable/array/from.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/array/from */ "../node_modules/core-js-pure/es/array/from.js");


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

/***/ "../node_modules/core-js-pure/stable/object/define-properties.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/object/define-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/object/define-properties */ "../node_modules/core-js-pure/es/object/define-properties.js");


/***/ }),

/***/ "../node_modules/core-js-pure/stable/object/define-property.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/object/define-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/object/define-property */ "../node_modules/core-js-pure/es/object/define-property.js");


/***/ }),

/***/ "../node_modules/core-js-pure/stable/object/get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/object/get-own-property-descriptor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/object/get-own-property-descriptor */ "../node_modules/core-js-pure/es/object/get-own-property-descriptor.js");


/***/ }),

/***/ "../node_modules/core-js-pure/stable/object/get-own-property-descriptors.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/object/get-own-property-descriptors.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/object/get-own-property-descriptors */ "../node_modules/core-js-pure/es/object/get-own-property-descriptors.js");


/***/ }),

/***/ "../node_modules/core-js-pure/stable/object/get-own-property-symbols.js":
/*!******************************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/object/get-own-property-symbols.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/object/get-own-property-symbols */ "../node_modules/core-js-pure/es/object/get-own-property-symbols.js");


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

/***/ "../node_modules/core-js-pure/stable/symbol/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/stable/symbol/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/symbol */ "../node_modules/core-js-pure/es/symbol/index.js");


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


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = seek;
var E_END = 'Iterator exhausted before seek ended.';
var E_SHOW = 'Argument 1 of seek must use filter NodeFilter.SHOW_TEXT.';
var E_WHERE = 'Argument 2 of seek must be an integer or a Text Node.';
var DOCUMENT_POSITION_PRECEDING = 2;
var SHOW_TEXT = 4;
var TEXT_NODE = 3;

function seek(iter, where) {
  if (iter.whatToShow !== SHOW_TEXT) {
    var error; // istanbul ignore next

    try {
      error = new DOMException(E_SHOW, 'InvalidStateError');
    } catch (_unused) {
      error = new Error(E_SHOW);
      error.code = 11;
      error.name = 'InvalidStateError';

      error.toString = function () {
        return "InvalidStateError: ".concat(E_SHOW);
      };
    }

    throw error;
  }

  var count = 0;
  var node = iter.referenceNode;
  var predicates = null;

  if (isInteger(where)) {
    predicates = {
      forward: function forward() {
        return count < where;
      },
      backward: function backward() {
        return count > where || !iter.pointerBeforeReferenceNode;
      }
    };
  } else if (isText(where)) {
    var forward = before(node, where) ? function () {
      return false;
    } : function () {
      return node !== where;
    };

    var backward = function backward() {
      return node !== where || !iter.pointerBeforeReferenceNode;
    };

    predicates = {
      forward: forward,
      backward: backward
    };
  } else {
    throw new TypeError(E_WHERE);
  }

  while (predicates.forward()) {
    node = iter.nextNode();

    if (node === null) {
      throw new RangeError(E_END);
    }

    count += node.nodeValue.length;
  }

  if (iter.nextNode()) {
    node = iter.previousNode();
  }

  while (predicates.backward()) {
    node = iter.previousNode();

    if (node === null) {
      throw new RangeError(E_END);
    }

    count -= node.nodeValue.length;
  }

  if (!isText(iter.referenceNode)) {
    throw new RangeError(E_END);
  }

  return count;
}

function isInteger(n) {
  if (typeof n !== 'number') return false;
  return isFinite(n) && Math.floor(n) === n;
}

function isText(node) {
  return node.nodeType === TEXT_NODE;
}

function before(ref, node) {
  return ref.compareDocumentPosition(node) & DOCUMENT_POSITION_PRECEDING;
}
//# sourceMappingURL=index.js.map

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

/***/ "../packages/dom/src/css.ts":
/*!**********************************!*\
  !*** ../packages/dom/src/css.ts ***!
  \**********************************/
/*! exports provided: createCssSelectorMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCssSelectorMatcher", function() { return createCssSelectorMatcher; });
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator.js */ "../node_modules/@babel/runtime-corejs3/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/array/is-array.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator-method.js */ "../node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator_method_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/symbol.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/array/from.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_from_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator/index.js */ "../node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/awaitAsyncGenerator.js */ "../node_modules/@babel/runtime-corejs3/helpers/awaitAsyncGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_helpers_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/wrapAsyncGenerator.js */ "../node_modules/@babel/runtime-corejs3/helpers/wrapAsyncGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _owner_document_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./owner-document.ts */ "../packages/dom/src/owner-document.ts");
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










function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _babel_runtime_corejs3_core_js_stable_symbol_js__WEBPACK_IMPORTED_MODULE_3___default.a === "undefined" || _babel_runtime_corejs3_core_js_get_iterator_method_js__WEBPACK_IMPORTED_MODULE_2___default()(o) == null) { if (_babel_runtime_corejs3_core_js_stable_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default()(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = _babel_runtime_corejs3_core_js_get_iterator_js__WEBPACK_IMPORTED_MODULE_0___default()(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context2; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _babel_runtime_corejs3_core_js_stable_instance_slice_js__WEBPACK_IMPORTED_MODULE_5___default()(_context2 = Object.prototype.toString.call(o)).call(_context2, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _babel_runtime_corejs3_core_js_stable_array_from_js__WEBPACK_IMPORTED_MODULE_4___default()(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function createCssSelectorMatcher(selector) {
  return /*#__PURE__*/function () {
    var _matchAll = _babel_runtime_corejs3_helpers_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_8___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee(scope) {
      var document, _iterator, _step, element, range;

      return _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              document = Object(_owner_document_ts__WEBPACK_IMPORTED_MODULE_9__["ownerDocument"])(scope);
              _iterator = _createForOfIteratorHelper(document.querySelectorAll(selector.value));
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 13;
                break;
              }

              element = _step.value;
              range = document.createRange();
              range.selectNode(element);

              if (!(scope.isPointInRange(range.startContainer, range.startOffset) && scope.isPointInRange(range.endContainer, range.endOffset))) {
                _context.next = 11;
                break;
              }

              _context.next = 11;
              return range;

            case 11:
              _context.next = 4;
              break;

            case 13:
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](2);

              _iterator.e(_context.t0);

            case 18:
              _context.prev = 18;

              _iterator.f();

              return _context.finish(18);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 15, 18, 21]]);
    }));

    function matchAll(_x) {
      return _matchAll.apply(this, arguments);
    }

    return matchAll;
  }();
}

/***/ }),

/***/ "../packages/dom/src/highlight-range.ts":
/*!**********************************************!*\
  !*** ../packages/dom/src/highlight-range.ts ***!
  \**********************************************/
/*! exports provided: highlightRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightRange", function() { return highlightRange; });
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator.js */ "../node_modules/@babel/runtime-corejs3/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/array/is-array.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator-method.js */ "../node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator_method_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/symbol.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/array/from.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_from_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _owner_document_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./owner-document.ts */ "../packages/dom/src/owner-document.ts");
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









function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _babel_runtime_corejs3_core_js_stable_symbol_js__WEBPACK_IMPORTED_MODULE_3___default.a === "undefined" || _babel_runtime_corejs3_core_js_get_iterator_method_js__WEBPACK_IMPORTED_MODULE_2___default()(o) == null) { if (_babel_runtime_corejs3_core_js_stable_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default()(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = _babel_runtime_corejs3_core_js_get_iterator_js__WEBPACK_IMPORTED_MODULE_0___default()(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context2; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _babel_runtime_corejs3_core_js_stable_instance_slice_js__WEBPACK_IMPORTED_MODULE_5___default()(_context2 = Object.prototype.toString.call(o)).call(_context2, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _babel_runtime_corejs3_core_js_stable_array_from_js__WEBPACK_IMPORTED_MODULE_4___default()(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // Wrap each text node in a given DOM Range with a <mark> or other element.
// Breaks start and/or end node if needed.
// Returns a function that cleans up the created highlight (not a perfect undo: split text nodes are
// not merged again; if desired, you could run range.commonAncestorContainer.normalize() afterwards).
//
// Parameters:
// - range: a DOM Range object. Note that as highlighting modifies the DOM, the range may be
//   unusable afterwards
// - tagName: the element used to wrap text nodes. Defaults to 'mark'.
// - attributes: an Object defining any attributes to be set on the wrapper elements.

function highlightRange(range) {
  var tagName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'mark';
  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // First put all nodes in an array (splits start and end nodes if needed)
  var nodes = textNodesInRange(range); // Highlight each node

  var highlightElements = [];

  var _iterator = _createForOfIteratorHelper(nodes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;
      var highlightElement = wrapNodeInHighlight(node, tagName, attributes);
      highlightElements.push(highlightElement);
    } // Return a function that cleans up the highlightElements.

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  function removeHighlights() {
    // Remove each of the created highlightElements.
    var _iterator2 = _createForOfIteratorHelper(highlightElements),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var highlightElement = _step2.value;
        removeHighlight(highlightElement);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  return removeHighlights;
} // Return an array of the text nodes in the range. Split the start and end nodes if required.

function textNodesInRange(range) {
  // If the start or end node is a text node and only partly in the range, split it.
  if (isTextNode(range.startContainer) && range.startOffset > 0) {
    var endOffset = range.endOffset; // (this may get lost when the splitting the node)

    var createdNode = range.startContainer.splitText(range.startOffset);

    if (range.endContainer === range.startContainer) {
      // If the end was in the same container, it will now be in the newly created node.
      range.setEnd(createdNode, endOffset - range.startOffset);
    }

    range.setStart(createdNode, 0);
  }

  if (isTextNode(range.endContainer) && range.endOffset < range.endContainer.length) {
    range.endContainer.splitText(range.endOffset);
  } // Collect the text nodes.


  var walker = Object(_owner_document_ts__WEBPACK_IMPORTED_MODULE_8__["ownerDocument"])(range).createTreeWalker(range.commonAncestorContainer, NodeFilter.SHOW_TEXT, {
    acceptNode: function acceptNode(node) {
      return range.intersectsNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
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
  if (isTextNode(walker.currentNode)) nodes.push(walker.currentNode);

  while (walker.nextNode() && range.comparePoint(walker.currentNode, 0) !== 1) {
    nodes.push(walker.currentNode);
  }

  return nodes;
} // Replace [node] with <tagName ...attributes>[node]</tagName>


function wrapNodeInHighlight(node, tagName, attributes) {
  var _context;

  var document = node.ownerDocument;
  var highlightElement = document.createElement(tagName);

  _babel_runtime_corejs3_core_js_stable_instance_for_each_js__WEBPACK_IMPORTED_MODULE_7___default()(_context = _babel_runtime_corejs3_core_js_stable_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default()(attributes)).call(_context, function (key) {
    highlightElement.setAttribute(key, attributes[key]);
  });

  var tempRange = document.createRange();
  tempRange.selectNode(node);
  tempRange.surroundContents(highlightElement);
  return highlightElement;
} // Remove a highlight element created with wrapNodeInHighlight.


function removeHighlight(highlightElement) {
  // If it has somehow been removed already, there is nothing to be done.
  if (!highlightElement.parentNode) return;

  if (highlightElement.childNodes.length === 1) {
    highlightElement.replaceWith(highlightElement.firstChild);
  } else {
    // If the highlight somehow contains multiple nodes now, move them all.
    while (highlightElement.firstChild) {
      highlightElement.parentNode.insertBefore(highlightElement.firstChild, highlightElement);
    }

    highlightElement.remove();
  }
}

function isTextNode(node) {
  return node.nodeType === Node.TEXT_NODE;
}

/***/ }),

/***/ "../packages/dom/src/index.ts":
/*!************************************!*\
  !*** ../packages/dom/src/index.ts ***!
  \************************************/
/*! exports provided: createCssSelectorMatcher, makeCreateRangeSelectorMatcher, describeTextQuote, createTextQuoteSelectorMatcher, highlightRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css.ts */ "../packages/dom/src/css.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCssSelectorMatcher", function() { return _css_ts__WEBPACK_IMPORTED_MODULE_0__["createCssSelectorMatcher"]; });

/* harmony import */ var _range_index_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./range/index.ts */ "../packages/dom/src/range/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeCreateRangeSelectorMatcher", function() { return _range_index_ts__WEBPACK_IMPORTED_MODULE_1__["makeCreateRangeSelectorMatcher"]; });

/* harmony import */ var _text_quote_index_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-quote/index.ts */ "../packages/dom/src/text-quote/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "describeTextQuote", function() { return _text_quote_index_ts__WEBPACK_IMPORTED_MODULE_2__["describeTextQuote"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTextQuoteSelectorMatcher", function() { return _text_quote_index_ts__WEBPACK_IMPORTED_MODULE_2__["createTextQuoteSelectorMatcher"]; });

/* harmony import */ var _highlight_range_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highlight-range.ts */ "../packages/dom/src/highlight-range.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "highlightRange", function() { return _highlight_range_ts__WEBPACK_IMPORTED_MODULE_3__["highlightRange"]; });

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

/***/ "../packages/dom/src/owner-document.ts":
/*!*********************************************!*\
  !*** ../packages/dom/src/owner-document.ts ***!
  \*********************************************/
/*! exports provided: ownerDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ownerDocument", function() { return ownerDocument; });
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
function ownerDocument(range) {
  var _startContainer$owner;

  var startContainer = range.startContainer; // node.ownerDocument is null iff node is itself a Document.

  return (_startContainer$owner = startContainer.ownerDocument) !== null && _startContainer$owner !== void 0 ? _startContainer$owner : startContainer;
}

/***/ }),

/***/ "../packages/dom/src/range/cartesian.ts":
/*!**********************************************!*\
  !*** ../packages/dom/src/range/cartesian.ts ***!
  \**********************************************/
/*! exports provided: product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "product", function() { return product; });
/* harmony import */ var _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator/index.js */ "../node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/toConsumableArray.js */ "../node_modules/@babel/runtime-corejs3/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/promise.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_some_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/some.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/some.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_some_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_some_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/symbol/async-iterator.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/symbol/async-iterator.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_helpers_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/wrapAsyncGenerator.js */ "../node_modules/@babel/runtime-corejs3/helpers/wrapAsyncGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/awaitAsyncGenerator.js */ "../node_modules/@babel/runtime-corejs3/helpers/awaitAsyncGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncIterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncIterator.js */ "../node_modules/@babel/runtime-corejs3/helpers/asyncIterator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncIterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncIterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncGeneratorDelegate.js */ "../node_modules/@babel/runtime-corejs3/helpers/asyncGeneratorDelegate.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var cartesian__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! cartesian */ "../node_modules/cartesian/index.js");
/* harmony import */ var cartesian__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(cartesian__WEBPACK_IMPORTED_MODULE_12__);
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
  _product = _babel_runtime_corejs3_helpers_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_8___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var _len,
        iterables,
        _key,
        iterators,
        logs,
        notNull,
        nextValuePromises,
        _loop,
        _ret,
        _args2 = arguments;

    return _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            notNull = function _notNull(p) {
              return p !== null;
            };

            for (_len = _args2.length, iterables = new Array(_len), _key = 0; _key < _len; _key++) {
              iterables[_key] = _args2[_key];
            }

            // We listen to all iterators in parallel, while logging all the values they
            // produce. Whenever an iterator produces a value, we produce and yield all
            // combinations of that value with the logged values from other iterators.
            // Every combination is thus made exactly once, and as soon as it is known.
            iterators = _babel_runtime_corejs3_core_js_stable_instance_map_js__WEBPACK_IMPORTED_MODULE_7___default()(iterables).call(iterables, function (iterable) {
              return iterable[_babel_runtime_corejs3_core_js_stable_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_6___default.a]();
            }); // Initialise an empty log for each iterable.

            logs = _babel_runtime_corejs3_core_js_stable_instance_map_js__WEBPACK_IMPORTED_MODULE_7___default()(iterables).call(iterables, function () {
              return [];
            });
            nextValuePromises = _babel_runtime_corejs3_core_js_stable_instance_map_js__WEBPACK_IMPORTED_MODULE_7___default()(iterators).call(iterators, function (iterator, iterableNr) {
              return iterator.next().then( // Label the result with iterableNr, to know which iterable produced
              // this value after Promise.race below.
              function (nextResult) {
                return {
                  nextResult: nextResult,
                  iterableNr: iterableNr
                };
              });
            }); // Keep listening as long as any of the iterables is not yet exhausted.

            _loop = /*#__PURE__*/_babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _loop() {
              var _context;

              var _yield$_awaitAsyncGen, nextResult, iterableNr, arrays, combinations;

              return _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _loop$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return _babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_corejs3_core_js_stable_promise_js__WEBPACK_IMPORTED_MODULE_4___default.a.race(_babel_runtime_corejs3_core_js_stable_instance_filter_js__WEBPACK_IMPORTED_MODULE_3___default()(nextValuePromises).call(nextValuePromises, notNull)));

                    case 2:
                      _yield$_awaitAsyncGen = _context2.sent;
                      nextResult = _yield$_awaitAsyncGen.nextResult;
                      iterableNr = _yield$_awaitAsyncGen.iterableNr;

                      if (!(nextResult.done === true)) {
                        _context2.next = 8;
                        break;
                      }

                      nextValuePromises[iterableNr] = null;
                      return _context2.abrupt("return", "continue");

                    case 8:
                      // Produce all combinations of the received value with the logged values
                      // from the other iterables.
                      arrays = _babel_runtime_corejs3_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2___default()(logs);
                      arrays[iterableNr] = [nextResult.value];
                      combinations = cartesian__WEBPACK_IMPORTED_MODULE_12___default()(arrays); // Append the received value to the right log.

                      logs[iterableNr] = _babel_runtime_corejs3_core_js_stable_instance_concat_js__WEBPACK_IMPORTED_MODULE_1___default()(_context = []).call(_context, _babel_runtime_corejs3_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2___default()(logs[iterableNr]), [nextResult.value]); // Start listening for the next value of this iterable.

                      nextValuePromises[iterableNr] = iterators[iterableNr].next().then(function (nextResult) {
                        return {
                          nextResult: nextResult,
                          iterableNr: iterableNr
                        };
                      }); // Yield each of the produced combinations separately.

                      return _context2.delegateYield(_babel_runtime_corejs3_helpers_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_11___default()(_babel_runtime_corejs3_helpers_asyncIterator_js__WEBPACK_IMPORTED_MODULE_10___default()(combinations), _babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_9___default.a), "t0", 14);

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _loop);
            });

          case 6:
            if (!_babel_runtime_corejs3_core_js_stable_instance_some_js__WEBPACK_IMPORTED_MODULE_5___default()(nextValuePromises).call(nextValuePromises, notNull)) {
              _context3.next = 13;
              break;
            }

            return _context3.delegateYield(_loop(), "t0", 8);

          case 8:
            _ret = _context3.t0;

            if (!(_ret === "continue")) {
              _context3.next = 11;
              break;
            }

            return _context3.abrupt("continue", 6);

          case 11:
            _context3.next = 6;
            break;

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee);
  }));
  return _product.apply(this, arguments);
}

/***/ }),

/***/ "../packages/dom/src/range/index.ts":
/*!******************************************!*\
  !*** ../packages/dom/src/range/index.ts ***!
  \******************************************/
/*! exports provided: makeCreateRangeSelectorMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _match_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./match.ts */ "../packages/dom/src/range/match.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeCreateRangeSelectorMatcher", function() { return _match_ts__WEBPACK_IMPORTED_MODULE_0__["makeCreateRangeSelectorMatcher"]; });

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

/***/ "../packages/dom/src/range/match.ts":
/*!******************************************!*\
  !*** ../packages/dom/src/range/match.ts ***!
  \******************************************/
/*! exports provided: makeCreateRangeSelectorMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCreateRangeSelectorMatcher", function() { return makeCreateRangeSelectorMatcher; });
/* harmony import */ var _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator/index.js */ "../node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray.js */ "../node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/awaitAsyncGenerator.js */ "../node_modules/@babel/runtime-corejs3/helpers/awaitAsyncGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_helpers_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/wrapAsyncGenerator.js */ "../node_modules/@babel/runtime-corejs3/helpers/wrapAsyncGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncIterator.js */ "../node_modules/@babel/runtime-corejs3/helpers/asyncIterator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _owner_document_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../owner-document.ts */ "../packages/dom/src/owner-document.ts");
/* harmony import */ var _cartesian_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cartesian.ts */ "../packages/dom/src/range/cartesian.ts");
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







function makeCreateRangeSelectorMatcher(createMatcher) {
  return function createRangeSelectorMatcher(selector) {
    var startMatcher = createMatcher(selector.startSelector);
    var endMatcher = createMatcher(selector.endSelector);
    return /*#__PURE__*/function () {
      var _matchAll = _babel_runtime_corejs3_helpers_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(scope) {
        var startMatches, endMatches, pairs, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, _value2, _value3, start, end, result;

        return _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                startMatches = startMatcher(scope);
                endMatches = endMatcher(scope);
                pairs = Object(_cartesian_ts__WEBPACK_IMPORTED_MODULE_6__["product"])(startMatches, endMatches);
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _context.prev = 5;
                _iterator = _babel_runtime_corejs3_helpers_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4___default()(pairs);

              case 7:
                _context.next = 9;
                return _babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()(_iterator.next());

              case 9:
                _step = _context.sent;
                _iteratorNormalCompletion = _step.done;
                _context.next = 13;
                return _babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()(_step.value);

              case 13:
                _value = _context.sent;

                if (_iteratorNormalCompletion) {
                  _context.next = 25;
                  break;
                }

                _value2 = _value, _value3 = _babel_runtime_corejs3_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_value2, 2), start = _value3[0], end = _value3[1];
                result = Object(_owner_document_ts__WEBPACK_IMPORTED_MODULE_5__["ownerDocument"])(scope).createRange();
                result.setStart(start.startContainer, start.startOffset);
                result.setEnd(end.startContainer, end.startOffset);

                if (result.collapsed) {
                  _context.next = 22;
                  break;
                }

                _context.next = 22;
                return result;

              case 22:
                _iteratorNormalCompletion = true;
                _context.next = 7;
                break;

              case 25:
                _context.next = 31;
                break;

              case 27:
                _context.prev = 27;
                _context.t0 = _context["catch"](5);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 31:
                _context.prev = 31;
                _context.prev = 32;

                if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
                  _context.next = 36;
                  break;
                }

                _context.next = 36;
                return _babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()(_iterator.return());

              case 36:
                _context.prev = 36;

                if (!_didIteratorError) {
                  _context.next = 39;
                  break;
                }

                throw _iteratorError;

              case 39:
                return _context.finish(36);

              case 40:
                return _context.finish(31);

              case 41:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 27, 31, 41], [32,, 36, 40]]);
      }));

      function matchAll(_x) {
        return _matchAll.apply(this, arguments);
      }

      return matchAll;
    }();
  };
}

/***/ }),

/***/ "../packages/dom/src/text-quote/describe.ts":
/*!**************************************************!*\
  !*** ../packages/dom/src/text-quote/describe.ts ***!
  \**************************************************/
/*! exports provided: describeTextQuote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "describeTextQuote", function() { return describeTextQuote; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator.js */ "../node_modules/@babel/runtime-corejs3/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/array/is-array.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator-method.js */ "../node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator_method_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/symbol.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/array/from.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator/index.js */ "../node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty.js */ "../node_modules/@babel/runtime-corejs3/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_every_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/every.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/every.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_every_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_every_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _babel_runtime_corejs3_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/typeof.js */ "../node_modules/@babel/runtime-corejs3/helpers/typeof.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_flat_map_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/flat-map.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/flat-map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_flat_map_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_flat_map_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray.js */ "../node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/index-of.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator.js */ "../node_modules/@babel/runtime-corejs3/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var dom_seek__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! dom-seek */ "../node_modules/dom-seek/index.js");
/* harmony import */ var dom_seek__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(dom_seek__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _owner_document_ts__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../owner-document.ts */ "../packages/dom/src/owner-document.ts");
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

























function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys_js__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols_js__WEBPACK_IMPORTED_MODULE_6___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols_js__WEBPACK_IMPORTED_MODULE_6___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter_js__WEBPACK_IMPORTED_MODULE_5___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context3; _babel_runtime_corejs3_core_js_stable_instance_for_each_js__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = ownKeys(Object(source), true)).call(_context3, function (key) { _babel_runtime_corejs3_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_15___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties_js__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context4; _babel_runtime_corejs3_core_js_stable_instance_for_each_js__WEBPACK_IMPORTED_MODULE_3___default()(_context4 = ownKeys(Object(source))).call(_context4, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _babel_runtime_corejs3_core_js_stable_symbol_js__WEBPACK_IMPORTED_MODULE_11___default.a === "undefined" || _babel_runtime_corejs3_core_js_get_iterator_method_js__WEBPACK_IMPORTED_MODULE_10___default()(o) == null) { if (_babel_runtime_corejs3_core_js_stable_array_is_array_js__WEBPACK_IMPORTED_MODULE_9___default()(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = _babel_runtime_corejs3_core_js_get_iterator_js__WEBPACK_IMPORTED_MODULE_8___default()(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context2; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _babel_runtime_corejs3_core_js_stable_instance_slice_js__WEBPACK_IMPORTED_MODULE_13___default()(_context2 = Object.prototype.toString.call(o)).call(_context2, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _babel_runtime_corejs3_core_js_stable_array_from_js__WEBPACK_IMPORTED_MODULE_12___default()(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function describeTextQuote(_x, _x2) {
  return _describeTextQuote.apply(this, arguments);
}

function _describeTextQuote() {
  _describeTextQuote = _babel_runtime_corejs3_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_23___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_14___default.a.mark(function _callee(range, scope) {
    var document;
    return _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_14___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Default to search in the whole document.
            if (scope === undefined) {
              document = Object(_owner_document_ts__WEBPACK_IMPORTED_MODULE_25__["ownerDocument"])(range);
              scope = document.createRange();
              scope.selectNodeContents(document);
            }

            range = range.cloneRange(); // Take the part of the range that falls within the scope.

            if (range.compareBoundaryPoints(Range.START_TO_START, scope) === -1) range.setStart(scope.startContainer, scope.startOffset);
            if (range.compareBoundaryPoints(Range.END_TO_END, scope) === 1) range.setEnd(scope.endContainer, scope.endOffset);
            return _context.abrupt("return", _objectSpread({
              type: 'TextQuoteSelector',
              exact: range.toString()
            }, calculateContextForDisambiguation(range, scope)));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _describeTextQuote.apply(this, arguments);
}

function calculateContextForDisambiguation(range, scope) {
  var exactText = range.toString();
  var scopeText = scope.toString();
  var targetStartIndex = getRangeTextPosition(range, scope);
  var targetEndIndex = targetStartIndex + exactText.length; // Find all matches of the text in the scope.

  var stringMatches = [];
  var fromIndex = 0;

  while (fromIndex <= scopeText.length) {
    var matchIndex = _babel_runtime_corejs3_core_js_stable_instance_index_of_js__WEBPACK_IMPORTED_MODULE_22___default()(scopeText).call(scopeText, exactText, fromIndex);

    if (matchIndex === -1) break;
    stringMatches.push(matchIndex);
    fromIndex = matchIndex + 1;
  } // Count for each undesired match the required prefix and suffix lengths, such that either of them
  // would have invalidated the match.


  var affixLengthPairs = [];

  for (var _i = 0, _stringMatches = stringMatches; _i < _stringMatches.length; _i++) {
    var matchStartIndex = _stringMatches[_i];
    var matchEndIndex = matchStartIndex + exactText.length; // Skip the found match if it is the actual target.

    if (matchStartIndex === targetStartIndex) continue; // Count how many characters before & after them the false match and target have in common.

    var sufficientPrefixLength = charactersNeededToBeUnique(scopeText.substring(0, targetStartIndex), scopeText.substring(0, matchStartIndex), true);
    var sufficientSuffixLength = charactersNeededToBeUnique(scopeText.substring(targetEndIndex), scopeText.substring(matchEndIndex), false);
    affixLengthPairs.push([sufficientPrefixLength, sufficientSuffixLength]);
  } // Find the prefix and suffix that would invalidate all mismatches, using the minimal characters
  // for prefix and suffix combined.


  var _minimalSolution = minimalSolution(affixLengthPairs),
      _minimalSolution2 = _babel_runtime_corejs3_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_21___default()(_minimalSolution, 2),
      prefixLength = _minimalSolution2[0],
      suffixLength = _minimalSolution2[1];

  var prefix = scopeText.substring(targetStartIndex - prefixLength, targetStartIndex);
  var suffix = scopeText.substring(targetEndIndex, targetEndIndex + suffixLength);
  return {
    prefix: prefix,
    suffix: suffix
  };
}

function charactersNeededToBeUnique(target, impostor) {
  var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // Count how many characters the two strings have in common.
  var overlap = 0;

  var charAt = function charAt(s, i) {
    return reverse ? s[s.length - 1 - i] : s[overlap];
  };

  while (overlap < target.length && charAt(target, overlap) === charAt(impostor, overlap)) {
    overlap++;
  }

  if (overlap === target.length) return Infinity; // (no substring of target can make it distinguishable from its impostor)
  else return overlap + 1;
}

function minimalSolution(requirements) {
  // Ensure we try solutions with an empty prefix or suffix.
  requirements.push([0, 0]); // Build all the pairs and order them by their sums.

  var pairs = _babel_runtime_corejs3_core_js_stable_instance_flat_map_js__WEBPACK_IMPORTED_MODULE_20___default()(requirements).call(requirements, function (l) {
    return _babel_runtime_corejs3_core_js_stable_instance_map_js__WEBPACK_IMPORTED_MODULE_19___default()(requirements).call(requirements, function (r) {
      return [l[0], r[1]];
    });
  });

  _babel_runtime_corejs3_core_js_stable_instance_sort_js__WEBPACK_IMPORTED_MODULE_18___default()(pairs).call(pairs, function (a, b) {
    return a[0] + a[1] - (b[0] + b[1]);
  }); // Find the first pair that satisfies every requirement.


  var _iterator = _createForOfIteratorHelper(pairs),
      _step;

  try {
    var _loop = function _loop() {
      var pair = _step.value;

      var _pair = _babel_runtime_corejs3_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_21___default()(pair, 2),
          p0 = _pair[0],
          p1 = _pair[1];

      if (_babel_runtime_corejs3_core_js_stable_instance_every_js__WEBPACK_IMPORTED_MODULE_16___default()(requirements).call(requirements, function (_ref) {
        var _ref2 = _babel_runtime_corejs3_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_21___default()(_ref, 2),
            r0 = _ref2[0],
            r1 = _ref2[1];

        return r0 <= p0 || r1 <= p1;
      })) {
        return {
          v: pair
        };
      }
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _ret = _loop();

      if (_babel_runtime_corejs3_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_17___default()(_ret) === "object") return _ret.v;
    } // Return the largest pairing (unreachable).

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return pairs[pairs.length - 1];
} // Get the index of the first character of range within the text of scope.


function getRangeTextPosition(range, scope) {
  var iter = Object(_owner_document_ts__WEBPACK_IMPORTED_MODULE_25__["ownerDocument"])(scope).createNodeIterator(scope.commonAncestorContainer, NodeFilter.SHOW_TEXT, {
    acceptNode: function acceptNode(node) {
      // Only reveal nodes within the range
      return scope.intersectsNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  var scopeOffset = isTextNode(scope.startContainer) ? scope.startOffset : 0;
  if (isTextNode(range.startContainer)) return dom_seek__WEBPACK_IMPORTED_MODULE_24___default()(iter, range.startContainer) + range.startOffset - scopeOffset;else return dom_seek__WEBPACK_IMPORTED_MODULE_24___default()(iter, firstTextNodeInRange(range)) - scopeOffset;
}

function firstTextNodeInRange(range) {
  // Find the first text node inside the range.
  var iter = Object(_owner_document_ts__WEBPACK_IMPORTED_MODULE_25__["ownerDocument"])(range).createNodeIterator(range.commonAncestorContainer, NodeFilter.SHOW_TEXT, {
    acceptNode: function acceptNode(node) {
      // Only reveal nodes within the range; and skip any empty text nodes.
      return range.intersectsNode(node) && node.length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  var node = iter.nextNode();
  if (node === null) throw new Error('Range contains no text nodes');
  return node;
}

function isTextNode(node) {
  return node.nodeType === Node.TEXT_NODE;
}

/***/ }),

/***/ "../packages/dom/src/text-quote/index.ts":
/*!***********************************************!*\
  !*** ../packages/dom/src/text-quote/index.ts ***!
  \***********************************************/
/*! exports provided: describeTextQuote, createTextQuoteSelectorMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _describe_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./describe.ts */ "../packages/dom/src/text-quote/describe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "describeTextQuote", function() { return _describe_ts__WEBPACK_IMPORTED_MODULE_0__["describeTextQuote"]; });

/* harmony import */ var _match_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.ts */ "../packages/dom/src/text-quote/match.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTextQuoteSelectorMatcher", function() { return _match_ts__WEBPACK_IMPORTED_MODULE_1__["createTextQuoteSelectorMatcher"]; });

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

/***/ "../packages/dom/src/text-quote/match.ts":
/*!***********************************************!*\
  !*** ../packages/dom/src/text-quote/match.ts ***!
  \***********************************************/
/*! exports provided: createTextQuoteSelectorMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextQuoteSelectorMatcher", function() { return createTextQuoteSelectorMatcher; });
/* harmony import */ var _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator/index.js */ "../node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/index-of.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/awaitAsyncGenerator.js */ "../node_modules/@babel/runtime-corejs3/helpers/awaitAsyncGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_helpers_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/wrapAsyncGenerator.js */ "../node_modules/@babel/runtime-corejs3/helpers/wrapAsyncGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_seek__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-seek */ "../node_modules/dom-seek/index.js");
/* harmony import */ var dom_seek__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dom_seek__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _owner_document_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../owner-document.ts */ "../packages/dom/src/owner-document.ts");
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






function createTextQuoteSelectorMatcher(selector) {
  return /*#__PURE__*/function () {
    var _matchAll = _babel_runtime_corejs3_helpers_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(scope) {
      var document, scopeText, exact, prefix, suffix, searchPattern, iter, referenceNodeIndex, fromIndex, patternStartIndex, matchStartIndex, matchEndIndex, match;
      return _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              document = Object(_owner_document_ts__WEBPACK_IMPORTED_MODULE_5__["ownerDocument"])(scope);
              scopeText = scope.toString();
              exact = selector.exact;
              prefix = selector.prefix || '';
              suffix = selector.suffix || '';
              searchPattern = prefix + exact + suffix;
              iter = document.createNodeIterator(scope.commonAncestorContainer, NodeFilter.SHOW_TEXT, {
                acceptNode: function acceptNode(node) {
                  // Only reveal nodes within the range; and skip any empty text nodes.
                  return scope.intersectsNode(node) && node.length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                }
              }); // The index of the first character of iter.referenceNode inside the text.

              referenceNodeIndex = isTextNode(scope.startContainer) ? -scope.startOffset : 0;
              fromIndex = 0;

            case 9:
              if (!(fromIndex <= scopeText.length)) {
                _context.next = 25;
                break;
              }

              // Find the quote with its prefix and suffix in the string.
              patternStartIndex = _babel_runtime_corejs3_core_js_stable_instance_index_of_js__WEBPACK_IMPORTED_MODULE_1___default()(scopeText).call(scopeText, searchPattern, fromIndex);

              if (!(patternStartIndex === -1)) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("return");

            case 13:
              // Correct for the prefix and suffix lengths.
              matchStartIndex = patternStartIndex + prefix.length;
              matchEndIndex = matchStartIndex + exact.length; // Create a range to represent this exact quote in the dom.

              match = document.createRange(); // Seek to the start of the match, make the range start there.

              referenceNodeIndex += dom_seek__WEBPACK_IMPORTED_MODULE_4___default()(iter, matchStartIndex - referenceNodeIndex);
              match.setStart(iter.referenceNode, matchStartIndex - referenceNodeIndex); // Seek to the end of the match, make the range end there.

              referenceNodeIndex += dom_seek__WEBPACK_IMPORTED_MODULE_4___default()(iter, matchEndIndex - referenceNodeIndex);
              match.setEnd(iter.referenceNode, matchEndIndex - referenceNodeIndex); // Yield the match.

              _context.next = 22;
              return match;

            case 22:
              // Advance the search forward to detect multiple occurrences.
              fromIndex = matchStartIndex + 1;
              _context.next = 9;
              break;

            case 25:
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
  }();
}

function isTextNode(node) {
  return node.nodeType === Node.TEXT_NODE;
}

/***/ }),

/***/ "../packages/selector/src/index.ts":
/*!*****************************************!*\
  !*** ../packages/selector/src/index.ts ***!
  \*****************************************/
/*! exports provided: makeRefinable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRefinable", function() { return makeRefinable; });
/* harmony import */ var _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator/index.js */ "../node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/wrapAsyncGenerator.js */ "../node_modules/@babel/runtime-corejs3/helpers/wrapAsyncGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/awaitAsyncGenerator.js */ "../node_modules/@babel/runtime-corejs3/helpers/awaitAsyncGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncGeneratorDelegate.js */ "../node_modules/@babel/runtime-corejs3/helpers/asyncGeneratorDelegate.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncIterator.js */ "../node_modules/@babel/runtime-corejs3/helpers/asyncIterator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4__);
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





function makeRefinable(matcherCreator) {
  return function createMatcherWithRefinement(sourceSelector) {
    var matcher = matcherCreator(sourceSelector);

    if (sourceSelector.refinedBy) {
      var refiningSelector = createMatcherWithRefinement(sourceSelector.refinedBy);
      return /*#__PURE__*/function () {
        var _matchAll = _babel_runtime_corejs3_helpers_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(scope) {
          var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, match;

          return _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _context.prev = 2;
                  _iterator = _babel_runtime_corejs3_helpers_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4___default()(matcher(scope));

                case 4:
                  _context.next = 6;
                  return _babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()(_iterator.next());

                case 6:
                  _step = _context.sent;
                  _iteratorNormalCompletion = _step.done;
                  _context.next = 10;
                  return _babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()(_step.value);

                case 10:
                  _value = _context.sent;

                  if (_iteratorNormalCompletion) {
                    _context.next = 17;
                    break;
                  }

                  match = _value;
                  return _context.delegateYield(_babel_runtime_corejs3_helpers_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_corejs3_helpers_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4___default()(refiningSelector(match)), _babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2___default.a), "t0", 14);

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
                  return _babel_runtime_corejs3_helpers_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()(_iterator.return());

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
      }();
    }

    return matcher;
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
/* harmony import */ var _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator/index.js */ "../node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify.js */ "../node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator.js */ "../node_modules/@babel/runtime-corejs3/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncIterator.js */ "../node_modules/@babel/runtime-corejs3/helpers/asyncIterator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _annotator_dom_src_index_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @annotator/dom/src/index.ts */ "../packages/dom/src/index.ts");
/* harmony import */ var _annotator_selector_src_index_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @annotator/selector/src/index.ts */ "../packages/selector/src/index.ts");
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
  info.innerText = '';
}

var createMatcher = Object(_annotator_selector_src_index_ts__WEBPACK_IMPORTED_MODULE_5__["makeRefinable"])(function (selector) {
  var innerCreateMatcher = {
    TextQuoteSelector: _annotator_dom_src_index_ts__WEBPACK_IMPORTED_MODULE_4__["createTextQuoteSelectorMatcher"],
    RangeSelector: Object(_annotator_dom_src_index_ts__WEBPACK_IMPORTED_MODULE_4__["makeCreateRangeSelectorMatcher"])(createMatcher)
  }[selector.type];

  if (!innerCreateMatcher) {
    throw new Error("Unsupported selector type: ".concat(selector.type));
  }

  return innerCreateMatcher(selector);
});

function anchor(_x) {
  return _anchor.apply(this, arguments);
}

function _anchor() {
  _anchor = _babel_runtime_corejs3_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(selector) {
    var scope, matchAll, ranges, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, range, _i, _ranges, _range, removeHighlight;

    return _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            scope = document.createRange();
            scope.selectNodeContents(target);
            matchAll = createMatcher(selector);
            ranges = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 6;
            _iterator = _babel_runtime_corejs3_helpers_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3___default()(matchAll(scope));

          case 8:
            _context.next = 10;
            return _iterator.next();

          case 10:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 14;
            return _step.value;

          case 14:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 21;
              break;
            }

            range = _value;
            ranges.push(range);

          case 18:
            _iteratorNormalCompletion = true;
            _context.next = 8;
            break;

          case 21:
            _context.next = 27;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](6);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 27:
            _context.prev = 27;
            _context.prev = 28;

            if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
              _context.next = 32;
              break;
            }

            _context.next = 32;
            return _iterator.return();

          case 32:
            _context.prev = 32;

            if (!_didIteratorError) {
              _context.next = 35;
              break;
            }

            throw _iteratorError;

          case 35:
            return _context.finish(32);

          case 36:
            return _context.finish(27);

          case 37:
            for (_i = 0, _ranges = ranges; _i < _ranges.length; _i++) {
              _range = _ranges[_i];
              removeHighlight = Object(_annotator_dom_src_index_ts__WEBPACK_IMPORTED_MODULE_4__["highlightRange"])(_range);
              cleanupFunctions.push(removeHighlight);
            }

            info.innerText += _babel_runtime_corejs3_core_js_stable_json_stringify_js__WEBPACK_IMPORTED_MODULE_1___default()(selector, null, 2) + '\n\n';

          case 39:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 23, 27, 37], [28,, 32, 36]]);
  }));
  return _anchor.apply(this, arguments);
}

function onSelectionChange() {
  return _onSelectionChange.apply(this, arguments);
}

function _onSelectionChange() {
  _onSelectionChange = _babel_runtime_corejs3_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var scope, selection, i, range, selector;
    return _babel_runtime_corejs3_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cleanup();
            scope = document.createRange();
            scope.selectNodeContents(source);
            selection = document.getSelection();
            i = 0;

          case 5:
            if (!(i < selection.rangeCount)) {
              _context2.next = 15;
              break;
            }

            range = selection.getRangeAt(i);
            _context2.next = 9;
            return Object(_annotator_dom_src_index_ts__WEBPACK_IMPORTED_MODULE_4__["describeTextQuote"])(range, scope);

          case 9:
            selector = _context2.sent;
            _context2.next = 12;
            return anchor(selector);

          case 12:
            i++;
            _context2.next = 5;
            break;

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2FycmF5L2Zyb20uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2FycmF5L2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9pbnN0YW5jZS9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2luc3RhbmNlL2V2ZXJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9pbnN0YW5jZS9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2luc3RhbmNlL2ZsYXQtbWFwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9pbnN0YW5jZS9mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvaW5zdGFuY2UvaW5kZXgtb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2luc3RhbmNlL21hcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvaW5zdGFuY2Uvc2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2luc3RhbmNlL3NvbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2luc3RhbmNlL3NvcnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9vYmplY3QvZGVmaW5lLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvc3ltYm9sLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9zeW1ib2wvYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvYXJyYXkvZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy9hcnJheS9pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy9nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy9pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL3N5bWJvbC9hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvQXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvQXdhaXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvaGVscGVycy9hc3luY0dlbmVyYXRvckRlbGVnYXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9oZWxwZXJzL2FzeW5jSXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvaGVscGVycy9hd2FpdEFzeW5jR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvd3JhcEFzeW5jR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NhcnRlc2lhbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2FycmF5L2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2FycmF5L3ZpcnR1YWwvY29uY2F0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2FycmF5L3ZpcnR1YWwvZXZlcnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvYXJyYXkvdmlydHVhbC9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvYXJyYXkvdmlydHVhbC9mbGF0LW1hcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9hcnJheS92aXJ0dWFsL2Zvci1lYWNoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2FycmF5L3ZpcnR1YWwvaW5kZXgtb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvYXJyYXkvdmlydHVhbC9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvYXJyYXkvdmlydHVhbC9zbGljZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9hcnJheS92aXJ0dWFsL3NvbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvYXJyYXkvdmlydHVhbC9zb3J0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2luc3RhbmNlL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9pbnN0YW5jZS9ldmVyeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9pbnN0YW5jZS9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvaW5zdGFuY2UvZmxhdC1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvaW5zdGFuY2UvaW5kZXgtb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvaW5zdGFuY2UvbWFwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2luc3RhbmNlL3NsaWNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2luc3RhbmNlL3NvbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvaW5zdGFuY2Uvc29ydC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9vYmplY3QvZGVmaW5lLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvcHJvbWlzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9zeW1ib2wvYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9mZWF0dXJlcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ZlYXR1cmVzL2FycmF5L2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ZlYXR1cmVzL2dldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZmVhdHVyZXMvZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ZlYXR1cmVzL2lzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ZlYXR1cmVzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZmVhdHVyZXMvcHJvbWlzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9mZWF0dXJlcy9zeW1ib2wvYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZmVhdHVyZXMvc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ZlYXR1cmVzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYS1wb3NzaWJsZS1wcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2FycmF5LWZyb20uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYmluZC1jb250ZXh0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9jbGFzc29mLXJhdy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9jcmVhdGUtaXRlcmF0b3ItY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZW50cnktdmlydHVhbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZXhwb3J0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZmxhdHRlbi1pbnRvLWFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9mdW5jdGlvbi10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2hhcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2hvc3QtcmVwb3J0LWVycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pcy1wdXJlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pdGVyYXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL25hdGl2ZS1wcm9taXNlLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9uYXRpdmUtc3ltYm9sLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMtZXh0ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9wYXRoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9wZXJmb3JtLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvc2V0LWdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9zaGFyZWQtc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvc2xvcHB5LWFycmF5LW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvc3RyaW5nLW11bHRpYnl0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy90by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy90by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy91aWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3VzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3Y4LXZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy93cmFwcGVkLXdlbGwta25vd24tc3ltYm9sLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuYXJyYXkuZXZlcnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5hcnJheS5mbGF0LW1hcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLmFycmF5LmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLmFycmF5LmluZGV4LW9mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuYXJyYXkuaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLmFycmF5LnNsaWNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuYXJyYXkuc29tZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLmFycmF5LnNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5hcnJheS51bnNjb3BhYmxlcy5mbGF0LW1hcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLmpzb24udG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLm1hdGgudG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5wcm9taXNlLmFsbC1zZXR0bGVkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMucHJvbWlzZS5maW5hbGx5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLnN5bWJvbC5kZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLnN5bWJvbC5oYXMtaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5zeW1ib2wuaXMtY29uY2F0LXNwcmVhZGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5zeW1ib2wuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5zeW1ib2wubWF0Y2gtYWxsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuc3ltYm9sLm1hdGNoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuc3ltYm9sLnJlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5zeW1ib2wuc2VhcmNoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuc3ltYm9sLnNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5zeW1ib2wuc3BsaXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5zeW1ib2wudG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuc3ltYm9sLnRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5zeW1ib2wudW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lc25leHQuYWdncmVnYXRlLWVycm9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXNuZXh0LnByb21pc2UuYWxsLXNldHRsZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lc25leHQucHJvbWlzZS5hbnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lc25leHQucHJvbWlzZS50cnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lc25leHQuc3ltYm9sLmFzeW5jLWRpc3Bvc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lc25leHQuc3ltYm9sLmRpc3Bvc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lc25leHQuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lc25leHQuc3ltYm9sLnBhdHRlcm4tbWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lc25leHQuc3ltYm9sLnJlcGxhY2UtYWxsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvYXJyYXkvZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvYXJyYXkvaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL2FycmF5L3ZpcnR1YWwvZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvaW5zdGFuY2UvZXZlcnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvaW5zdGFuY2UvZmxhdC1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL2Zvci1lYWNoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL3N0YWJsZS9pbnN0YW5jZS9pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvaW5zdGFuY2UvbWFwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL3N0YWJsZS9pbnN0YW5jZS9zbGljZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvaW5zdGFuY2Uvc29tZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvaW5zdGFuY2Uvc29ydC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL29iamVjdC9kZWZpbmUtcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL29iamVjdC9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL3N0YWJsZS9wcm9taXNlL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL3N0YWJsZS9zeW1ib2wvYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL3N5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1zZWVrL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZG9tLXNlZWsvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vcGFja2FnZXMvZG9tL3NyYy9jc3MudHMiLCJ3ZWJwYWNrOi8vLy4uL3BhY2thZ2VzL2RvbS9zcmMvaGlnaGxpZ2h0LXJhbmdlLnRzIiwid2VicGFjazovLy8uLi9wYWNrYWdlcy9kb20vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uLi9wYWNrYWdlcy9kb20vc3JjL293bmVyLWRvY3VtZW50LnRzIiwid2VicGFjazovLy8uLi9wYWNrYWdlcy9kb20vc3JjL3JhbmdlL2NhcnRlc2lhbi50cyIsIndlYnBhY2s6Ly8vLi4vcGFja2FnZXMvZG9tL3NyYy9yYW5nZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vcGFja2FnZXMvZG9tL3NyYy9yYW5nZS9tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vcGFja2FnZXMvZG9tL3NyYy90ZXh0LXF1b3RlL2Rlc2NyaWJlLnRzIiwid2VicGFjazovLy8uLi9wYWNrYWdlcy9kb20vc3JjL3RleHQtcXVvdGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uL3BhY2thZ2VzL2RvbS9zcmMvdGV4dC1xdW90ZS9tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vcGFja2FnZXMvc2VsZWN0b3Ivc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL2RlbW8vaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNzc1NlbGVjdG9yTWF0Y2hlciIsInNlbGVjdG9yIiwic2NvcGUiLCJkb2N1bWVudCIsIm93bmVyRG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidmFsdWUiLCJlbGVtZW50IiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGUiLCJpc1BvaW50SW5SYW5nZSIsInN0YXJ0Q29udGFpbmVyIiwic3RhcnRPZmZzZXQiLCJlbmRDb250YWluZXIiLCJlbmRPZmZzZXQiLCJtYXRjaEFsbCIsImhpZ2hsaWdodFJhbmdlIiwidGFnTmFtZSIsImF0dHJpYnV0ZXMiLCJub2RlcyIsInRleHROb2Rlc0luUmFuZ2UiLCJoaWdobGlnaHRFbGVtZW50cyIsIm5vZGUiLCJoaWdobGlnaHRFbGVtZW50Iiwid3JhcE5vZGVJbkhpZ2hsaWdodCIsInB1c2giLCJyZW1vdmVIaWdobGlnaHRzIiwicmVtb3ZlSGlnaGxpZ2h0IiwiaXNUZXh0Tm9kZSIsImNyZWF0ZWROb2RlIiwic3BsaXRUZXh0Iiwic2V0RW5kIiwic2V0U3RhcnQiLCJsZW5ndGgiLCJ3YWxrZXIiLCJjcmVhdGVUcmVlV2Fsa2VyIiwiY29tbW9uQW5jZXN0b3JDb250YWluZXIiLCJOb2RlRmlsdGVyIiwiU0hPV19URVhUIiwiYWNjZXB0Tm9kZSIsImludGVyc2VjdHNOb2RlIiwiRklMVEVSX0FDQ0VQVCIsIkZJTFRFUl9SRUpFQ1QiLCJjdXJyZW50Tm9kZSIsIm5leHROb2RlIiwiY29tcGFyZVBvaW50IiwiY3JlYXRlRWxlbWVudCIsImtleSIsInNldEF0dHJpYnV0ZSIsInRlbXBSYW5nZSIsInN1cnJvdW5kQ29udGVudHMiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsInJlcGxhY2VXaXRoIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsInJlbW92ZSIsIm5vZGVUeXBlIiwiTm9kZSIsIlRFWFRfTk9ERSIsInByb2R1Y3QiLCJub3ROdWxsIiwicCIsIml0ZXJhYmxlcyIsIml0ZXJhdG9ycyIsIml0ZXJhYmxlIiwibG9ncyIsIm5leHRWYWx1ZVByb21pc2VzIiwiaXRlcmF0b3IiLCJpdGVyYWJsZU5yIiwibmV4dCIsInRoZW4iLCJuZXh0UmVzdWx0IiwicmFjZSIsImRvbmUiLCJhcnJheXMiLCJjb21iaW5hdGlvbnMiLCJjYXJ0ZXNpYW5BcnJheXMiLCJtYWtlQ3JlYXRlUmFuZ2VTZWxlY3Rvck1hdGNoZXIiLCJjcmVhdGVNYXRjaGVyIiwiY3JlYXRlUmFuZ2VTZWxlY3Rvck1hdGNoZXIiLCJzdGFydE1hdGNoZXIiLCJzdGFydFNlbGVjdG9yIiwiZW5kTWF0Y2hlciIsImVuZFNlbGVjdG9yIiwic3RhcnRNYXRjaGVzIiwiZW5kTWF0Y2hlcyIsInBhaXJzIiwic3RhcnQiLCJlbmQiLCJyZXN1bHQiLCJjb2xsYXBzZWQiLCJkZXNjcmliZVRleHRRdW90ZSIsInVuZGVmaW5lZCIsInNlbGVjdE5vZGVDb250ZW50cyIsImNsb25lUmFuZ2UiLCJjb21wYXJlQm91bmRhcnlQb2ludHMiLCJSYW5nZSIsIlNUQVJUX1RPX1NUQVJUIiwiRU5EX1RPX0VORCIsInR5cGUiLCJleGFjdCIsInRvU3RyaW5nIiwiY2FsY3VsYXRlQ29udGV4dEZvckRpc2FtYmlndWF0aW9uIiwiZXhhY3RUZXh0Iiwic2NvcGVUZXh0IiwidGFyZ2V0U3RhcnRJbmRleCIsImdldFJhbmdlVGV4dFBvc2l0aW9uIiwidGFyZ2V0RW5kSW5kZXgiLCJzdHJpbmdNYXRjaGVzIiwiZnJvbUluZGV4IiwibWF0Y2hJbmRleCIsImFmZml4TGVuZ3RoUGFpcnMiLCJtYXRjaFN0YXJ0SW5kZXgiLCJtYXRjaEVuZEluZGV4Iiwic3VmZmljaWVudFByZWZpeExlbmd0aCIsImNoYXJhY3RlcnNOZWVkZWRUb0JlVW5pcXVlIiwic3Vic3RyaW5nIiwic3VmZmljaWVudFN1ZmZpeExlbmd0aCIsIm1pbmltYWxTb2x1dGlvbiIsInByZWZpeExlbmd0aCIsInN1ZmZpeExlbmd0aCIsInByZWZpeCIsInN1ZmZpeCIsInRhcmdldCIsImltcG9zdG9yIiwicmV2ZXJzZSIsIm92ZXJsYXAiLCJjaGFyQXQiLCJzIiwiaSIsIkluZmluaXR5IiwicmVxdWlyZW1lbnRzIiwibCIsInIiLCJhIiwiYiIsInBhaXIiLCJwMCIsInAxIiwicjAiLCJyMSIsIml0ZXIiLCJjcmVhdGVOb2RlSXRlcmF0b3IiLCJzY29wZU9mZnNldCIsInNlZWsiLCJmaXJzdFRleHROb2RlSW5SYW5nZSIsIkVycm9yIiwiY3JlYXRlVGV4dFF1b3RlU2VsZWN0b3JNYXRjaGVyIiwic2VhcmNoUGF0dGVybiIsInJlZmVyZW5jZU5vZGVJbmRleCIsInBhdHRlcm5TdGFydEluZGV4IiwibWF0Y2giLCJyZWZlcmVuY2VOb2RlIiwibWFrZVJlZmluYWJsZSIsIm1hdGNoZXJDcmVhdG9yIiwiY3JlYXRlTWF0Y2hlcldpdGhSZWZpbmVtZW50Iiwic291cmNlU2VsZWN0b3IiLCJtYXRjaGVyIiwicmVmaW5lZEJ5IiwicmVmaW5pbmdTZWxlY3RvciIsIkVYQU1QTEVfU0VMRUNUT1JTIiwiY2xlYW51cEZ1bmN0aW9ucyIsImNsZWFudXAiLCJzaGlmdCIsIm5vcm1hbGl6ZSIsImluZm8iLCJpbm5lclRleHQiLCJpbm5lckNyZWF0ZU1hdGNoZXIiLCJUZXh0UXVvdGVTZWxlY3RvciIsIlJhbmdlU2VsZWN0b3IiLCJhbmNob3IiLCJyYW5nZXMiLCJvblNlbGVjdGlvbkNoYW5nZSIsInNvdXJjZSIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInJhbmdlQ291bnQiLCJnZXRSYW5nZUF0Iiwib25TZWxlY3RvckV4YW1wbGVDbGljayIsImV2ZW50IiwiZXhhbXBsZU51bWJlciIsImRhdGFzZXQiLCJydW5FeGFtcGxlIiwicHJldmVudERlZmF1bHQiLCJhZGRFdmVudExpc3RlbmVyIiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNB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QVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsU0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3h0QkE7O0FBRUE7QUFDQTtB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QUssQ0FBQzZGLGtCQUFOLENBQXlCZ0YsTUFBekI7QUFDTUMscUJBSlIsR0FJb0I3SyxRQUFRLENBQUM4SyxZQUFULEVBSnBCO0FBS1c5QyxhQUxYLEdBS2UsQ0FMZjs7QUFBQTtBQUFBLGtCQUtrQkEsQ0FBQyxHQUFHNkMsU0FBUyxDQUFDRSxVQUxoQztBQUFBO0FBQUE7QUFBQTs7QUFNVTFLLGlCQU5WLEdBTWtCd0ssU0FBUyxDQUFDRyxVQUFWLENBQXFCaEQsQ0FBckIsQ0FObEI7QUFBQTtBQUFBLG1CQU8yQnRDLHFGQUFpQixDQUFDckYsS0FBRCxFQUFRTixLQUFSLENBUDVDOztBQUFBO0FBT1VELG9CQVBWO0FBQUE7QUFBQSxtQkFRVTJLLE1BQU0sQ0FBQzNLLFFBQUQsQ0FSaEI7O0FBQUE7QUFLNENrSSxhQUFDLEVBTDdDO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBWUEsU0FBU2lELHNCQUFULENBQWdDQyxLQUFoQyxFQUF1QztBQUNyQyxNQUFNQyxhQUFhLEdBQUdELEtBQUssQ0FBQ3hELE1BQU4sQ0FBYTBELE9BQWIsQ0FBcUJDLFVBQTNDO0FBQ0EsTUFBSSxDQUFDRixhQUFMLEVBQW9CO0FBQ3BCLE1BQU1yTCxRQUFRLEdBQUdpSyxpQkFBaUIsQ0FBQ29CLGFBQUQsQ0FBbEM7QUFDQWxCLFNBQU87QUFDUFEsUUFBTSxDQUFDM0ssUUFBRCxDQUFOO0FBQ0FvTCxPQUFLLENBQUNJLGNBQU47QUFDRDs7QUFFRHRMLFFBQVEsQ0FBQ3VMLGdCQUFULENBQTBCLGlCQUExQixFQUE2Q1osaUJBQTdDO0FBQ0EzSyxRQUFRLENBQUN1TCxnQkFBVCxDQUEwQixPQUExQixFQUFtQ04sc0JBQW5DOztBQUVBLElBQUlPLEtBQUosRUFBZ0IsRSIsImZpbGUiOiJkZW1vL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL3N0YWJsZS9hcnJheS9mcm9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9zdGFibGUvYXJyYXkvaXMtYXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL3N0YWJsZS9pbnN0YW5jZS9jb25jYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL3N0YWJsZS9pbnN0YW5jZS9ldmVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL2ZpbHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL2ZsYXQtbWFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9zdGFibGUvaW5zdGFuY2UvZm9yLWVhY2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL3N0YWJsZS9pbnN0YW5jZS9pbmRleC1vZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL21hcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL3NsaWNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9zdGFibGUvaW5zdGFuY2Uvc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL3NvcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL3N0YWJsZS9qc29uL3N0cmluZ2lmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvc3RhYmxlL29iamVjdC9kZWZpbmUtcHJvcGVydGllc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvc3RhYmxlL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL3N0YWJsZS9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9zdGFibGUvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL3N0YWJsZS9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9zdGFibGUvb2JqZWN0L2tleXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL3N0YWJsZS9wcm9taXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9zdGFibGUvc3ltYm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9zdGFibGUvc3ltYm9sL2FzeW5jLWl0ZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9mZWF0dXJlcy9hcnJheS9mcm9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9mZWF0dXJlcy9hcnJheS9pcy1hcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvZmVhdHVyZXMvZ2V0LWl0ZXJhdG9yLW1ldGhvZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvZmVhdHVyZXMvZ2V0LWl0ZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9mZWF0dXJlcy9pcy1pdGVyYWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvZmVhdHVyZXMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvZmVhdHVyZXMvcHJvbWlzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvZmVhdHVyZXMvc3ltYm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9mZWF0dXJlcy9zeW1ib2wvYXN5bmMtaXRlcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL2ZlYXR1cmVzL3N5bWJvbC9pdGVyYXRvclwiKTsiLCJ2YXIgX1N5bWJvbCRhc3luY0l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2FzeW5jLWl0ZXJhdG9yXCIpO1xuXG52YXIgX1N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9Qcm9taXNlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvcHJvbWlzZVwiKTtcblxudmFyIEF3YWl0VmFsdWUgPSByZXF1aXJlKFwiLi9Bd2FpdFZhbHVlXCIpO1xuXG5mdW5jdGlvbiBBc3luY0dlbmVyYXRvcihnZW4pIHtcbiAgdmFyIGZyb250LCBiYWNrO1xuXG4gIGZ1bmN0aW9uIHNlbmQoa2V5LCBhcmcpIHtcbiAgICByZXR1cm4gbmV3IF9Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgYXJnOiBhcmcsXG4gICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgICBuZXh0OiBudWxsXG4gICAgICB9O1xuXG4gICAgICBpZiAoYmFjaykge1xuICAgICAgICBiYWNrID0gYmFjay5uZXh0ID0gcmVxdWVzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZyb250ID0gYmFjayA9IHJlcXVlc3Q7XG4gICAgICAgIHJlc3VtZShrZXksIGFyZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXN1bWUoa2V5LCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHJlc3VsdCA9IGdlbltrZXldKGFyZyk7XG4gICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICB2YXIgd3JhcHBlZEF3YWl0ID0gdmFsdWUgaW5zdGFuY2VvZiBBd2FpdFZhbHVlO1xuXG4gICAgICBfUHJvbWlzZS5yZXNvbHZlKHdyYXBwZWRBd2FpdCA/IHZhbHVlLndyYXBwZWQgOiB2YWx1ZSkudGhlbihmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIGlmICh3cmFwcGVkQXdhaXQpIHtcbiAgICAgICAgICByZXN1bWUoa2V5ID09PSBcInJldHVyblwiID8gXCJyZXR1cm5cIiA6IFwibmV4dFwiLCBhcmcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHRsZShyZXN1bHQuZG9uZSA/IFwicmV0dXJuXCIgOiBcIm5vcm1hbFwiLCBhcmcpO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICByZXN1bWUoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXR0bGUoXCJ0aHJvd1wiLCBlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHRsZSh0eXBlLCB2YWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcInJldHVyblwiOlxuICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJ0aHJvd1wiOlxuICAgICAgICBmcm9udC5yZWplY3QodmFsdWUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmcm9udCA9IGZyb250Lm5leHQ7XG5cbiAgICBpZiAoZnJvbnQpIHtcbiAgICAgIHJlc3VtZShmcm9udC5rZXksIGZyb250LmFyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuX2ludm9rZSA9IHNlbmQ7XG5cbiAgaWYgKHR5cGVvZiBnZW5bXCJyZXR1cm5cIl0gIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRoaXNbXCJyZXR1cm5cIl0gPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuaWYgKHR5cGVvZiBfU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX1N5bWJvbCRhc3luY0l0ZXJhdG9yKSB7XG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtfU3ltYm9sJGFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xufVxuXG5Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcIm5leHRcIiwgYXJnKTtcbn07XG5cbkFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtcInRocm93XCJdID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gdGhpcy5faW52b2tlKFwidGhyb3dcIiwgYXJnKTtcbn07XG5cbkFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtcInJldHVyblwiXSA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcInJldHVyblwiLCBhcmcpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBc3luY0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfQXdhaXRWYWx1ZSh2YWx1ZSkge1xuICB0aGlzLndyYXBwZWQgPSB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfQXdhaXRWYWx1ZTsiLCJ2YXIgX0FycmF5JGlzQXJyYXkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9pcy1hcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoX0FycmF5JGlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwidmFyIF9BcnJheSRpc0FycmF5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvaXMtYXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKF9BcnJheSRpc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJ2YXIgX1N5bWJvbCRpdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9TeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfUHJvbWlzZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3Byb21pc2VcIik7XG5cbmZ1bmN0aW9uIF9hc3luY0dlbmVyYXRvckRlbGVnYXRlKGlubmVyLCBhd2FpdFdyYXApIHtcbiAgdmFyIGl0ZXIgPSB7fSxcbiAgICAgIHdhaXRpbmcgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBwdW1wKGtleSwgdmFsdWUpIHtcbiAgICB3YWl0aW5nID0gdHJ1ZTtcbiAgICB2YWx1ZSA9IG5ldyBfUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgcmVzb2x2ZShpbm5lcltrZXldKHZhbHVlKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgdmFsdWU6IGF3YWl0V3JhcCh2YWx1ZSlcbiAgICB9O1xuICB9XG5cbiAgO1xuXG4gIGlmICh0eXBlb2YgX1N5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF9TeW1ib2wkaXRlcmF0b3IpIHtcbiAgICBpdGVyW19TeW1ib2wkaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgfVxuXG4gIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh3YWl0aW5nKSB7XG4gICAgICB3YWl0aW5nID0gZmFsc2U7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHB1bXAoXCJuZXh0XCIsIHZhbHVlKTtcbiAgfTtcblxuICBpZiAodHlwZW9mIGlubmVyW1widGhyb3dcIl0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGl0ZXJbXCJ0aHJvd1wiXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHdhaXRpbmcpIHtcbiAgICAgICAgd2FpdGluZyA9IGZhbHNlO1xuICAgICAgICB0aHJvdyB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHB1bXAoXCJ0aHJvd1wiLCB2YWx1ZSk7XG4gICAgfTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgaW5uZXJbXCJyZXR1cm5cIl0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGl0ZXJbXCJyZXR1cm5cIl0gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh3YWl0aW5nKSB7XG4gICAgICAgIHdhaXRpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHVtcChcInJldHVyblwiLCB2YWx1ZSk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBpdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY0dlbmVyYXRvckRlbGVnYXRlOyIsInZhciBfZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9nZXQtaXRlcmF0b3ItbWV0aG9kXCIpO1xuXG52YXIgX1N5bWJvbCRpdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9TeW1ib2wkYXN5bmNJdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9hc3luYy1pdGVyYXRvclwiKTtcblxudmFyIF9TeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbmZ1bmN0aW9uIF9hc3luY0l0ZXJhdG9yKGl0ZXJhYmxlKSB7XG4gIHZhciBtZXRob2Q7XG5cbiAgaWYgKHR5cGVvZiBfU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgaWYgKF9TeW1ib2wkYXN5bmNJdGVyYXRvcikge1xuICAgICAgbWV0aG9kID0gaXRlcmFibGVbX1N5bWJvbCRhc3luY0l0ZXJhdG9yXTtcbiAgICAgIGlmIChtZXRob2QgIT0gbnVsbCkgcmV0dXJuIG1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICB9XG5cbiAgICBpZiAoX1N5bWJvbCRpdGVyYXRvcikge1xuICAgICAgbWV0aG9kID0gX2dldEl0ZXJhdG9yTWV0aG9kKGl0ZXJhYmxlKTtcbiAgICAgIGlmIChtZXRob2QgIT0gbnVsbCkgcmV0dXJuIG1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGlzIG5vdCBhc3luYyBpdGVyYWJsZVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNJdGVyYXRvcjsiLCJ2YXIgX1Byb21pc2UgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9wcm9taXNlXCIpO1xuXG5mdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgX1Byb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IF9Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsInZhciBBd2FpdFZhbHVlID0gcmVxdWlyZShcIi4vQXdhaXRWYWx1ZVwiKTtcblxuZnVuY3Rpb24gX2F3YWl0QXN5bmNHZW5lcmF0b3IodmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBBd2FpdFZhbHVlKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXdhaXRBc3luY0dlbmVyYXRvcjsiLCJ2YXIgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBfT2JqZWN0JGRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwidmFyIF9BcnJheSRmcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9pc0l0ZXJhYmxlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvaXMtaXRlcmFibGVcIik7XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAoX2lzSXRlcmFibGUoT2JqZWN0KGl0ZXIpKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBfQXJyYXkkZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsInZhciBfZ2V0SXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9nZXQtaXRlcmF0b3JcIik7XG5cbnZhciBfaXNJdGVyYWJsZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2lzLWl0ZXJhYmxlXCIpO1xuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICghKF9pc0l0ZXJhYmxlKE9iamVjdChhcnIpKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBfZ2V0SXRlcmF0b3IoYXJyKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJ2YXIgX1N5bWJvbCRpdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9TeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIF9TeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX1N5bWJvbCRpdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBfU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfU3ltYm9sICYmIG9iaiAhPT0gX1N5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBBc3luY0dlbmVyYXRvciA9IHJlcXVpcmUoXCIuL0FzeW5jR2VuZXJhdG9yXCIpO1xuXG5mdW5jdGlvbiBfd3JhcEFzeW5jR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBBc3luY0dlbmVyYXRvcihmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfd3JhcEFzeW5jR2VuZXJhdG9yOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJ2YXIgZXh0ZW5kID0gcmVxdWlyZSgneHRlbmQvaW1tdXRhYmxlJyk7XG5cbi8vIFB1YmxpYyBBUElcbm1vZHVsZS5leHBvcnRzID0gY2FydGVzaWFuO1xuXG4vKipcbiAqIENyZWF0ZXMgY2FydGVzaWFuIHByb2R1Y3Qgb2YgdGhlIHByb3ZpZGVkIHByb3BlcnRpZXNcbiAqXG4gKiBAcGFyYW0gICB7b2JqZWN0fGFycmF5fSBsaXN0IC0gbGlzdCBvZiAoYXJyYXkpIHByb3BlcnRpZXMgb3IgYXJyYXkgb2YgYXJyYXlzXG4gKiBAcmV0dXJucyB7YXJyYXl9IGFsbCB0aGUgY29tYmluYXRpb25zIG9mIHRoZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIGNhcnRlc2lhbihsaXN0KVxue1xuICB2YXIgbGFzdCwgaW5pdCwga2V5cywgcHJvZHVjdCA9IFtdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKVxuICB7XG4gICAgaW5pdCA9IFtdO1xuICAgIGxhc3QgPSBsaXN0Lmxlbmd0aCAtIDE7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGxpc3QgPT0gJ29iamVjdCcgJiYgbGlzdCAhPT0gbnVsbClcbiAge1xuICAgIGluaXQgPSB7fTtcbiAgICBrZXlzID0gT2JqZWN0LmtleXMobGlzdCk7XG4gICAgbGFzdCA9IGtleXMubGVuZ3RoIC0gMTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RpbmcgYW4gQXJyYXkgb3IgYW4gT2JqZWN0LCBidXQgYCcgKyAobGlzdCA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBsaXN0KSArICdgIHByb3ZpZGVkLicpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKHJvdywgaSlcbiAge1xuICAgIHZhciBqLCBrLCByO1xuXG4gICAgayA9IGtleXMgPyBrZXlzW2ldIDogaTtcblxuICAgIC8vIGVpdGhlciBhcnJheSBvciBub3QsIG5vdCBleHBlY3Rpbmcgb2JqZWN0cyBoZXJlXG4gICAgQXJyYXkuaXNBcnJheShsaXN0W2tdKSB8fCAodHlwZW9mIGxpc3Rba10gPT0gJ3VuZGVmaW5lZCcgPyBsaXN0W2tdID0gW10gOiBsaXN0W2tdID0gW2xpc3Rba11dKTtcblxuICAgIGZvciAoaj0wOyBqIDwgbGlzdFtrXS5sZW5ndGg7IGorKylcbiAgICB7XG4gICAgICByID0gY2xvbmUocm93KTtcbiAgICAgIHN0b3JlKHIsIGxpc3Rba11bal0sIGspO1xuXG4gICAgICBpZiAoaSA+PSBsYXN0KVxuICAgICAge1xuICAgICAgICBwcm9kdWN0LnB1c2gocik7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIGFkZChyLCBpICsgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkKGluaXQsIDApO1xuXG4gIHJldHVybiBwcm9kdWN0O1xufVxuXG4vKipcbiAqIENsb25lcyAoc2hhbGxvdyBjb3B5KSBwcm92aWRlZCBvYmplY3Qgb3IgYXJyYXlcbiAqXG4gKiBAcGFyYW0gICB7b2JqZWN0fGFycmF5fSBvYmogLSBvYmplY3Qgb3IgYXJyYXkgdG8gY2xvbmVcbiAqIEByZXR1cm5zIHtvYmplY3R8YXJyYXl9IC0gc2hhbGxvdyBjb3B5IG9mIHRoZSBwcm92aWRlZCBvYmplY3Qgb3IgYXJyYXlcbiAqL1xuZnVuY3Rpb24gY2xvbmUob2JqKVxue1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopID8gW10uY29uY2F0KG9iaikgOiBleHRlbmQob2JqKTtcbn1cblxuLyoqXG4gKiBTdG9yZXMgcHJvdmlkZWQgZWxlbWVudCBpbiB0aGUgcHJvdmlkZWQgb2JqZWN0IG9yIGFycmF5XG4gKlxuICogQHBhcmFtICAge29iamVjdHxhcnJheX0gb2JqIC0gb2JqZWN0IG9yIGFycmF5IHRvIGFkZCB0b1xuICogQHBhcmFtICAge21peGVkfSBlbGVtIC0gZWxlbWVudCB0byBhZGRcbiAqIEBwYXJhbSAgIHtzdHJpbmd8bnVtYmVyfSBrZXkgLSBvYmplY3QncyBwcm9wZXJ0eSBrZXkgdG8gYWRkIHRvXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gc3RvcmUob2JqLCBlbGVtLCBrZXkpXG57XG4gIEFycmF5LmlzQXJyYXkob2JqKSA/IG9iai5wdXNoKGVsZW0pIDogKG9ialtrZXldID0gZWxlbSk7XG59XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5hcnJheS5mcm9tJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFscy9wYXRoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0aC5BcnJheS5mcm9tO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5hcnJheS5pcy1hcnJheScpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbHMvcGF0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGguQXJyYXkuaXNBcnJheTtcbiIsInJlcXVpcmUoJy4uLy4uLy4uL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0Jyk7XG52YXIgZW50cnlWaXJ0dWFsID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWxzL2VudHJ5LXZpcnR1YWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbnRyeVZpcnR1YWwoJ0FycmF5JykuY29uY2F0O1xuIiwicmVxdWlyZSgnLi4vLi4vLi4vbW9kdWxlcy9lcy5hcnJheS5ldmVyeScpO1xudmFyIGVudHJ5VmlydHVhbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFscy9lbnRyeS12aXJ0dWFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZW50cnlWaXJ0dWFsKCdBcnJheScpLmV2ZXJ5O1xuIiwicmVxdWlyZSgnLi4vLi4vLi4vbW9kdWxlcy9lcy5hcnJheS5maWx0ZXInKTtcbnZhciBlbnRyeVZpcnR1YWwgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbHMvZW50cnktdmlydHVhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVudHJ5VmlydHVhbCgnQXJyYXknKS5maWx0ZXI7XG4iLCJyZXF1aXJlKCcuLi8uLi8uLi9tb2R1bGVzL2VzLmFycmF5LmZsYXQtbWFwJyk7XG5yZXF1aXJlKCcuLi8uLi8uLi9tb2R1bGVzL2VzLmFycmF5LnVuc2NvcGFibGVzLmZsYXQtbWFwJyk7XG52YXIgZW50cnlWaXJ0dWFsID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWxzL2VudHJ5LXZpcnR1YWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbnRyeVZpcnR1YWwoJ0FycmF5JykuZmxhdE1hcDtcbiIsInJlcXVpcmUoJy4uLy4uLy4uL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2gnKTtcbnZhciBlbnRyeVZpcnR1YWwgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbHMvZW50cnktdmlydHVhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVudHJ5VmlydHVhbCgnQXJyYXknKS5mb3JFYWNoO1xuIiwicmVxdWlyZSgnLi4vLi4vLi4vbW9kdWxlcy9lcy5hcnJheS5pbmRleC1vZicpO1xudmFyIGVudHJ5VmlydHVhbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFscy9lbnRyeS12aXJ0dWFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZW50cnlWaXJ0dWFsKCdBcnJheScpLmluZGV4T2Y7XG4iLCJyZXF1aXJlKCcuLi8uLi8uLi9tb2R1bGVzL2VzLmFycmF5Lm1hcCcpO1xudmFyIGVudHJ5VmlydHVhbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFscy9lbnRyeS12aXJ0dWFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZW50cnlWaXJ0dWFsKCdBcnJheScpLm1hcDtcbiIsInJlcXVpcmUoJy4uLy4uLy4uL21vZHVsZXMvZXMuYXJyYXkuc2xpY2UnKTtcbnZhciBlbnRyeVZpcnR1YWwgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbHMvZW50cnktdmlydHVhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVudHJ5VmlydHVhbCgnQXJyYXknKS5zbGljZTtcbiIsInJlcXVpcmUoJy4uLy4uLy4uL21vZHVsZXMvZXMuYXJyYXkuc29tZScpO1xudmFyIGVudHJ5VmlydHVhbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFscy9lbnRyeS12aXJ0dWFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZW50cnlWaXJ0dWFsKCdBcnJheScpLnNvbWU7XG4iLCJyZXF1aXJlKCcuLi8uLi8uLi9tb2R1bGVzL2VzLmFycmF5LnNvcnQnKTtcbnZhciBlbnRyeVZpcnR1YWwgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbHMvZW50cnktdmlydHVhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVudHJ5VmlydHVhbCgnQXJyYXknKS5zb3J0O1xuIiwidmFyIGNvbmNhdCA9IHJlcXVpcmUoJy4uL2FycmF5L3ZpcnR1YWwvY29uY2F0Jyk7XG5cbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIG93biA9IGl0LmNvbmNhdDtcbiAgcmV0dXJuIGl0ID09PSBBcnJheVByb3RvdHlwZSB8fCAoaXQgaW5zdGFuY2VvZiBBcnJheSAmJiBvd24gPT09IEFycmF5UHJvdG90eXBlLmNvbmNhdCkgPyBjb25jYXQgOiBvd247XG59O1xuIiwidmFyIGV2ZXJ5ID0gcmVxdWlyZSgnLi4vYXJyYXkvdmlydHVhbC9ldmVyeScpO1xuXG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBvd24gPSBpdC5ldmVyeTtcbiAgcmV0dXJuIGl0ID09PSBBcnJheVByb3RvdHlwZSB8fCAoaXQgaW5zdGFuY2VvZiBBcnJheSAmJiBvd24gPT09IEFycmF5UHJvdG90eXBlLmV2ZXJ5KSA/IGV2ZXJ5IDogb3duO1xufTtcbiIsInZhciBmaWx0ZXIgPSByZXF1aXJlKCcuLi9hcnJheS92aXJ0dWFsL2ZpbHRlcicpO1xuXG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBvd24gPSBpdC5maWx0ZXI7XG4gIHJldHVybiBpdCA9PT0gQXJyYXlQcm90b3R5cGUgfHwgKGl0IGluc3RhbmNlb2YgQXJyYXkgJiYgb3duID09PSBBcnJheVByb3RvdHlwZS5maWx0ZXIpID8gZmlsdGVyIDogb3duO1xufTtcbiIsInZhciBmbGF0TWFwID0gcmVxdWlyZSgnLi4vYXJyYXkvdmlydHVhbC9mbGF0LW1hcCcpO1xuXG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBvd24gPSBpdC5mbGF0TWFwO1xuICByZXR1cm4gaXQgPT09IEFycmF5UHJvdG90eXBlIHx8IChpdCBpbnN0YW5jZW9mIEFycmF5ICYmIG93biA9PT0gQXJyYXlQcm90b3R5cGUuZmxhdE1hcCkgPyBmbGF0TWFwIDogb3duO1xufTtcbiIsInZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vYXJyYXkvdmlydHVhbC9pbmRleC1vZicpO1xuXG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBvd24gPSBpdC5pbmRleE9mO1xuICByZXR1cm4gaXQgPT09IEFycmF5UHJvdG90eXBlIHx8IChpdCBpbnN0YW5jZW9mIEFycmF5ICYmIG93biA9PT0gQXJyYXlQcm90b3R5cGUuaW5kZXhPZikgPyBpbmRleE9mIDogb3duO1xufTtcbiIsInZhciBtYXAgPSByZXF1aXJlKCcuLi9hcnJheS92aXJ0dWFsL21hcCcpO1xuXG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBvd24gPSBpdC5tYXA7XG4gIHJldHVybiBpdCA9PT0gQXJyYXlQcm90b3R5cGUgfHwgKGl0IGluc3RhbmNlb2YgQXJyYXkgJiYgb3duID09PSBBcnJheVByb3RvdHlwZS5tYXApID8gbWFwIDogb3duO1xufTtcbiIsInZhciBzbGljZSA9IHJlcXVpcmUoJy4uL2FycmF5L3ZpcnR1YWwvc2xpY2UnKTtcblxudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgb3duID0gaXQuc2xpY2U7XG4gIHJldHVybiBpdCA9PT0gQXJyYXlQcm90b3R5cGUgfHwgKGl0IGluc3RhbmNlb2YgQXJyYXkgJiYgb3duID09PSBBcnJheVByb3RvdHlwZS5zbGljZSkgPyBzbGljZSA6IG93bjtcbn07XG4iLCJ2YXIgc29tZSA9IHJlcXVpcmUoJy4uL2FycmF5L3ZpcnR1YWwvc29tZScpO1xuXG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBvd24gPSBpdC5zb21lO1xuICByZXR1cm4gaXQgPT09IEFycmF5UHJvdG90eXBlIHx8IChpdCBpbnN0YW5jZW9mIEFycmF5ICYmIG93biA9PT0gQXJyYXlQcm90b3R5cGUuc29tZSkgPyBzb21lIDogb3duO1xufTtcbiIsInZhciBzb3J0ID0gcmVxdWlyZSgnLi4vYXJyYXkvdmlydHVhbC9zb3J0Jyk7XG5cbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIG93biA9IGl0LnNvcnQ7XG4gIHJldHVybiBpdCA9PT0gQXJyYXlQcm90b3R5cGUgfHwgKGl0IGluc3RhbmNlb2YgQXJyYXkgJiYgb3duID09PSBBcnJheVByb3RvdHlwZS5zb3J0KSA/IHNvcnQgOiBvd247XG59O1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbHMvcGF0aCcpO1xudmFyICRKU09OID0gY29yZS5KU09OIHx8IChjb3JlLkpTT04gPSB7IHN0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnkgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydGllcycpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbHMvcGF0aCcpO1xuXG52YXIgT2JqZWN0ID0gcGF0aC5PYmplY3Q7XG5cbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKFQsIEQpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFQsIEQpO1xufTtcblxuaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLnNoYW0pIGRlZmluZVByb3BlcnRpZXMuc2hhbSA9IHRydWU7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciBwYXRoID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWxzL3BhdGgnKTtcblxudmFyIE9iamVjdCA9IHBhdGguT2JqZWN0O1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cbmlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkuc2hhbSkgZGVmaW5lUHJvcGVydHkuc2hhbSA9IHRydWU7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBwYXRoID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWxzL3BhdGgnKTtcblxudmFyIE9iamVjdCA9IHBhdGguT2JqZWN0O1xuXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbn07XG5cbmlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLnNoYW0pIGdldE93blByb3BlcnR5RGVzY3JpcHRvci5zaGFtID0gdHJ1ZTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWxzL3BhdGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXRoLk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5zeW1ib2wnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWxzL3BhdGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXRoLk9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLm9iamVjdC5rZXlzJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFscy9wYXRoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0aC5PYmplY3Qua2V5cztcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5wcm9taXNlJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnByb21pc2UuYWxsLXNldHRsZWQnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMucHJvbWlzZS5maW5hbGx5Jyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFscy9wYXRoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0aC5Qcm9taXNlO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnZhciBXcmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWxzL3dyYXBwZWQtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXcmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlLmYoJ2FzeW5jSXRlcmF0b3InKTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0Jyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5zeW1ib2wuZGVzY3JpcHRpb24nKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3ltYm9sLmhhcy1pbnN0YW5jZScpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5zeW1ib2wuaXMtY29uY2F0LXNwcmVhZGFibGUnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3ltYm9sLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN5bWJvbC5tYXRjaCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5zeW1ib2wubWF0Y2gtYWxsJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN5bWJvbC5yZXBsYWNlJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN5bWJvbC5zZWFyY2gnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3ltYm9sLnNwZWNpZXMnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3ltYm9sLnNwbGl0Jyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN5bWJvbC50by1wcmltaXRpdmUnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3ltYm9sLnRvLXN0cmluZy10YWcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3ltYm9sLnVuc2NvcGFibGVzJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLm1hdGgudG8tc3RyaW5nLXRhZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5qc29uLnRvLXN0cmluZy10YWcnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWxzL3BhdGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXRoLlN5bWJvbDtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3ltYm9sLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLml0ZXJhdG9yJyk7XG52YXIgV3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZSA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFscy93cmFwcGVkLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gV3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZS5mKCdpdGVyYXRvcicpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9lcy9hcnJheS9mcm9tJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL2VzL2FycmF5L2lzLWFycmF5Jyk7XG4iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMuc3RyaW5nLml0ZXJhdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcbiIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yJyk7XG4iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMuc3RyaW5nLml0ZXJhdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWl0ZXJhYmxlJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL2VzL29iamVjdC9kZWZpbmUtcHJvcGVydHknKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vZXMvcHJvbWlzZScpO1xuXG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzbmV4dC5hZ2dyZWdhdGUtZXJyb3InKTtcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzbmV4dC5wcm9taXNlLmFsbC1zZXR0bGVkJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzbmV4dC5wcm9taXNlLnRyeScpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lc25leHQucHJvbWlzZS5hbnknKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vZXMvc3ltYm9sL2FzeW5jLWl0ZXJhdG9yJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL2VzL3N5bWJvbCcpO1xuXG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzbmV4dC5zeW1ib2wuYXN5bmMtZGlzcG9zZScpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lc25leHQuc3ltYm9sLmRpc3Bvc2UnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXNuZXh0LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzbmV4dC5zeW1ib2wucGF0dGVybi1tYXRjaCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lc25leHQuc3ltYm9sLnJlcGxhY2UtYWxsJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL2VzL3N5bWJvbC9pdGVyYXRvcicpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkgJiYgaXQgIT09IG51bGwpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBzZXQgXCIgKyBTdHJpbmcoaXQpICsgJyBhcyBhIHByb3RvdHlwZScpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW5jb3JyZWN0ICcgKyAobmFtZSA/IG5hbWUgKyAnICcgOiAnJykgKyAnaW52b2NhdGlvbicpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgc2xvcHB5QXJyYXlNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2xvcHB5LWFycmF5LW1ldGhvZCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gc2xvcHB5QXJyYXlNZXRob2QoJ2ZvckVhY2gnKSA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbn0gOiBbXS5mb3JFYWNoO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYmluZC1jb250ZXh0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZycpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbi8vIGBBcnJheS5mcm9tYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LmZyb21cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBtYXBmbiA9IGFyZ3VtZW50c0xlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gZ2V0SXRlcmF0b3JNZXRob2QoTyk7XG4gIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3IsIG5leHQ7XG4gIGlmIChtYXBwaW5nKSBtYXBmbiA9IGJpbmQobWFwZm4sIGFyZ3VtZW50c0xlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAvLyBpZiB0aGUgdGFyZ2V0IGlzIG5vdCBpdGVyYWJsZSBvciBpdCdzIGFuIGFycmF5IHdpdGggdGhlIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2UgYSBzaW1wbGUgY2FzZVxuICBpZiAoaXRlcmF0b3JNZXRob2QgIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlcmF0b3JNZXRob2QpKSkge1xuICAgIGl0ZXJhdG9yID0gaXRlcmF0b3JNZXRob2QuY2FsbChPKTtcbiAgICBuZXh0ID0gaXRlcmF0b3IubmV4dDtcbiAgICByZXN1bHQgPSBuZXcgQygpO1xuICAgIGZvciAoOyEoc3RlcCA9IG5leHQuY2FsbChpdGVyYXRvcikpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmdcbiAgICAgICAgPyBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSlcbiAgICAgICAgOiBzdGVwLnZhbHVlXG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgcmVzdWx0ID0gbmV3IEMobGVuZ3RoKTtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwidmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYmluZC1jb250ZXh0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xuXG52YXIgcHVzaCA9IFtdLnB1c2g7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBmb3JFYWNoLCBtYXAsIGZpbHRlciwgc29tZSwgZXZlcnksIGZpbmQsIGZpbmRJbmRleCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgdmFyIElTX01BUCA9IFRZUEUgPT0gMTtcbiAgdmFyIElTX0ZJTFRFUiA9IFRZUEUgPT0gMjtcbiAgdmFyIElTX1NPTUUgPSBUWVBFID09IDM7XG4gIHZhciBJU19FVkVSWSA9IFRZUEUgPT0gNDtcbiAgdmFyIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDY7XG4gIHZhciBOT19IT0xFUyA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0LCBzcGVjaWZpY0NyZWF0ZSkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gSW5kZXhlZE9iamVjdChPKTtcbiAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgdGhhdCwgMyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBjcmVhdGUgPSBzcGVjaWZpY0NyZWF0ZSB8fCBhcnJheVNwZWNpZXNDcmVhdGU7XG4gICAgdmFyIHRhcmdldCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbHVlLCByZXN1bHQ7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWx1ZSA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzdWx0ID0gYm91bmRGdW5jdGlvbih2YWx1ZSwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgdGFyZ2V0W2luZGV4XSA9IHJlc3VsdDsgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYgKHJlc3VsdCkgc3dpdGNoIChUWVBFKSB7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWx1ZTsgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHB1c2guY2FsbCh0YXJnZXQsIHZhbHVlKTsgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgIC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiB0YXJnZXQ7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbiAgZm9yRWFjaDogY3JlYXRlTWV0aG9kKDApLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbiAgbWFwOiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbHRlclxuICBmaWx0ZXI6IGNyZWF0ZU1ldGhvZCgyKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5zb21lYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNvbWVcbiAgc29tZTogY3JlYXRlTWV0aG9kKDMpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmV2ZXJ5YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmV2ZXJ5XG4gIGV2ZXJ5OiBjcmVhdGVNZXRob2QoNCksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4gIGZpbmQ6IGNyZWF0ZU1ldGhvZCg1KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXhgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZEluZGV4XG4gIGZpbmRJbmRleDogY3JlYXRlTWV0aG9kKDYpXG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC12ZXJzaW9uJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuICAvLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc3XG4gIHJldHVybiBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gYXJyYXkuY29uc3RydWN0b3IgPSB7fTtcbiAgICBjb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGZvbzogMSB9O1xuICAgIH07XG4gICAgcmV0dXJuIGFycmF5W01FVEhPRF9OQU1FXShCb29sZWFuKS5mb28gIT09IDE7XG4gIH0pO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbi8vIGBBcnJheVNwZWNpZXNDcmVhdGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbEFycmF5LCBsZW5ndGgpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsQXJyYXkpKSB7XG4gICAgQyA9IG9yaWdpbmFsQXJyYXkuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGVsc2UgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gbmV3IChDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEMpKGxlbmd0aCA9PT0gMCA/IDAgOiBsZW5ndGgpO1xufTtcbiIsInZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xuXG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQpO1xuICAgIH07XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG4vLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBFTlRSSUVTKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEVOVFJJRVMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB2YXIgcmV0dXJuTWV0aG9kID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXR1cm5NZXRob2QgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0dXJuTWV0aG9kLmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgY2FsbGVkID0gMDtcbiAgdmFyIGl0ZXJhdG9yV2l0aFJldHVybiA9IHtcbiAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBkb25lOiAhIWNhbGxlZCsrIH07XG4gICAgfSxcbiAgICAncmV0dXJuJzogZnVuY3Rpb24gKCkge1xuICAgICAgU0FGRV9DTE9TSU5HID0gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIGl0ZXJhdG9yV2l0aFJldHVybltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20oaXRlcmF0b3JXaXRoUmV0dXJuLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBTS0lQX0NMT1NJTkcpIHtcbiAgaWYgKCFTS0lQX0NMT1NJTkcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgSVRFUkFUSU9OX1NVUFBPUlQgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgb2JqZWN0ID0ge307XG4gICAgb2JqZWN0W0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4geyBkb25lOiBJVEVSQVRJT05fU1VQUE9SVCA9IHRydWUgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICAgIGV4ZWMob2JqZWN0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gSVRFUkFUSU9OX1NVUFBPUlQ7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcblxuLy8gZ2V0dGluZyB0YWcgZnJvbSBFUzYrIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIHRhZywgcmVzdWx0O1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAodGFnID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogcmVzdWx0O1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBudWxsO1xuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG5ldyBGKCkpICE9PSBGLnByb3RvdHlwZTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJykuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJdGVyYXRvckNvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICBJdGVyYXRvckNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yQ29uc3RydWN0b3IsIFRPX1NUUklOR19UQUcsIGZhbHNlLCB0cnVlKTtcbiAgSXRlcmF0b3JzW1RPX1NUUklOR19UQUddID0gcmV0dXJuVGhpcztcbiAgcmV0dXJuIEl0ZXJhdG9yQ29uc3RydWN0b3I7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIHByb3BlcnR5S2V5ID0gdG9QcmltaXRpdmUoa2V5KTtcbiAgaWYgKHByb3BlcnR5S2V5IGluIG9iamVjdCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIHByb3BlcnR5S2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbcHJvcGVydHlLZXldID0gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtaXRlcmF0b3ItY29uc3RydWN0b3InKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgSXRlcmF0b3JzQ29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZScpO1xuXG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBJdGVyYXRvcnNDb3JlLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBJdGVyYXRvcnNDb3JlLkJVR0dZX1NBRkFSSV9JVEVSQVRPUlM7XG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcbnZhciBFTlRSSUVTID0gJ2VudHJpZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEl0ZXJhYmxlLCBOQU1FLCBJdGVyYXRvckNvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yKEl0ZXJhdG9yQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuXG4gIHZhciBnZXRJdGVyYXRpb25NZXRob2QgPSBmdW5jdGlvbiAoS0lORCkge1xuICAgIGlmIChLSU5EID09PSBERUZBVUxUICYmIGRlZmF1bHRJdGVyYXRvcikgcmV0dXJuIGRlZmF1bHRJdGVyYXRvcjtcbiAgICBpZiAoIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgS0lORCBpbiBJdGVyYWJsZVByb3RvdHlwZSkgcmV0dXJuIEl0ZXJhYmxlUHJvdG90eXBlW0tJTkRdO1xuICAgIHN3aXRjaCAoS0lORCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICAgIGNhc2UgRU5UUklFUzogcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzKTsgfTtcbiAgfTtcblxuICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIElOQ09SUkVDVF9WQUxVRVNfTkFNRSA9IGZhbHNlO1xuICB2YXIgSXRlcmFibGVQcm90b3R5cGUgPSBJdGVyYWJsZS5wcm90b3R5cGU7XG4gIHZhciBuYXRpdmVJdGVyYXRvciA9IEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SXVxuICAgIHx8IEl0ZXJhYmxlUHJvdG90eXBlWydAQGl0ZXJhdG9yJ11cbiAgICB8fCBERUZBVUxUICYmIEl0ZXJhYmxlUHJvdG90eXBlW0RFRkFVTFRdO1xuICB2YXIgZGVmYXVsdEl0ZXJhdG9yID0gIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgbmF0aXZlSXRlcmF0b3IgfHwgZ2V0SXRlcmF0aW9uTWV0aG9kKERFRkFVTFQpO1xuICB2YXIgYW55TmF0aXZlSXRlcmF0b3IgPSBOQU1FID09ICdBcnJheScgPyBJdGVyYWJsZVByb3RvdHlwZS5lbnRyaWVzIHx8IG5hdGl2ZUl0ZXJhdG9yIDogbmF0aXZlSXRlcmF0b3I7XG4gIHZhciBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIG1ldGhvZHMsIEtFWTtcblxuICAvLyBmaXggbmF0aXZlXG4gIGlmIChhbnlOYXRpdmVJdGVyYXRvcikge1xuICAgIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGFueU5hdGl2ZUl0ZXJhdG9yLmNhbGwobmV3IEl0ZXJhYmxlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIGlmICghSVNfUFVSRSAmJiBnZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUpICE9PSBJdGVyYXRvclByb3RvdHlwZSkge1xuICAgICAgICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgICBzZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsIHRydWUsIHRydWUpO1xuICAgICAgaWYgKElTX1BVUkUpIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gICAgfVxuICB9XG5cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGQVVMVCA9PSBWQUxVRVMgJiYgbmF0aXZlSXRlcmF0b3IgJiYgbmF0aXZlSXRlcmF0b3IubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gdHJ1ZTtcbiAgICBkZWZhdWx0SXRlcmF0b3IgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuYXRpdmVJdGVyYXRvci5jYWxsKHRoaXMpOyB9O1xuICB9XG5cbiAgLy8gZGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUlTX1BVUkUgfHwgRk9SQ0VEKSAmJiBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl0gIT09IGRlZmF1bHRJdGVyYXRvcikge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYWJsZVByb3RvdHlwZSwgSVRFUkFUT1IsIGRlZmF1bHRJdGVyYXRvcik7XG4gIH1cbiAgSXRlcmF0b3JzW05BTUVdID0gZGVmYXVsdEl0ZXJhdG9yO1xuXG4gIC8vIGV4cG9ydCBhZGRpdGlvbmFsIG1ldGhvZHNcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBnZXRJdGVyYXRpb25NZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/IGRlZmF1bHRJdGVyYXRvciA6IGdldEl0ZXJhdGlvbk1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6IGdldEl0ZXJhdGlvbk1ldGhvZChFTlRSSUVTKVxuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChLRVkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIHx8ICEoS0VZIGluIEl0ZXJhYmxlUHJvdG90eXBlKSkge1xuICAgICAgICByZWRlZmluZShJdGVyYWJsZVByb3RvdHlwZSwgS0VZLCBtZXRob2RzW0tFWV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSAkKHsgdGFyZ2V0OiBOQU1FLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTIHx8IElOQ09SUkVDVF9WQUxVRVNfTkFNRSB9LCBtZXRob2RzKTtcbiAgfVxuXG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93cmFwcGVkLXdlbGwta25vd24tc3ltYm9sJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUpIHtcbiAgdmFyIFN5bWJvbCA9IHBhdGguU3ltYm9sIHx8IChwYXRoLlN5bWJvbCA9IHt9KTtcbiAgaWYgKCFoYXMoU3ltYm9sLCBOQU1FKSkgZGVmaW5lUHJvcGVydHkoU3ltYm9sLCBOQU1FLCB7XG4gICAgdmFsdWU6IHdyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUuZihOQU1FKVxuICB9KTtcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBpdGVyYWJsZSBET00gY29sbGVjdGlvbnNcbi8vIGZsYWcgLSBgaXRlcmFibGVgIGludGVyZmFjZSAtICdlbnRyaWVzJywgJ2tleXMnLCAndmFsdWVzJywgJ2ZvckVhY2gnIG1ldGhvZHNcbm1vZHVsZS5leHBvcnRzID0ge1xuICBDU1NSdWxlTGlzdDogMCxcbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogMCxcbiAgQ1NTVmFsdWVMaXN0OiAwLFxuICBDbGllbnRSZWN0TGlzdDogMCxcbiAgRE9NUmVjdExpc3Q6IDAsXG4gIERPTVN0cmluZ0xpc3Q6IDAsXG4gIERPTVRva2VuTGlzdDogMSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IDAsXG4gIEZpbGVMaXN0OiAwLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogMCxcbiAgSFRNTENvbGxlY3Rpb246IDAsXG4gIEhUTUxGb3JtRWxlbWVudDogMCxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IDAsXG4gIE1lZGlhTGlzdDogMCxcbiAgTWltZVR5cGVBcnJheTogMCxcbiAgTmFtZWROb2RlTWFwOiAwLFxuICBOb2RlTGlzdDogMSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogMCxcbiAgUGx1Z2luOiAwLFxuICBQbHVnaW5BcnJheTogMCxcbiAgU1ZHTGVuZ3RoTGlzdDogMCxcbiAgU1ZHTnVtYmVyTGlzdDogMCxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IDAsXG4gIFNWR1BvaW50TGlzdDogMCxcbiAgU1ZHU3RyaW5nTGlzdDogMCxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogMCxcbiAgU291cmNlQnVmZmVyTGlzdDogMCxcbiAgU3R5bGVTaGVldExpc3Q6IDAsXG4gIFRleHRUcmFja0N1ZUxpc3Q6IDAsXG4gIFRleHRUcmFja0xpc3Q6IDAsXG4gIFRvdWNoTGlzdDogMFxufTtcbiIsInZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09OU1RSVUNUT1IpIHtcbiAgcmV0dXJuIHBhdGhbQ09OU1RSVUNUT1IgKyAnUHJvdG90eXBlJ107XG59O1xuIiwiLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2JpbmQtY29udGV4dCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG5cbnZhciB3cmFwQ29uc3RydWN0b3IgPSBmdW5jdGlvbiAoTmF0aXZlQ29uc3RydWN0b3IpIHtcbiAgdmFyIFdyYXBwZXIgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgTmF0aXZlQ29uc3RydWN0b3IpIHtcbiAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgTmF0aXZlQ29uc3RydWN0b3IoKTtcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKGEpO1xuICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgTmF0aXZlQ29uc3RydWN0b3IoYSwgYik7XG4gICAgICB9IHJldHVybiBuZXcgTmF0aXZlQ29uc3RydWN0b3IoYSwgYiwgYyk7XG4gICAgfSByZXR1cm4gTmF0aXZlQ29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbiAgV3JhcHBlci5wcm90b3R5cGUgPSBOYXRpdmVDb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIHJldHVybiBXcmFwcGVyO1xufTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5ub1RhcmdldEdldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBQUk9UTyA9IG9wdGlvbnMucHJvdG87XG5cbiAgdmFyIG5hdGl2ZVNvdXJjZSA9IEdMT0JBTCA/IGdsb2JhbCA6IFNUQVRJQyA/IGdsb2JhbFtUQVJHRVRdIDogKGdsb2JhbFtUQVJHRVRdIHx8IHt9KS5wcm90b3R5cGU7XG5cbiAgdmFyIHRhcmdldCA9IEdMT0JBTCA/IHBhdGggOiBwYXRoW1RBUkdFVF0gfHwgKHBhdGhbVEFSR0VUXSA9IHt9KTtcbiAgdmFyIHRhcmdldFByb3RvdHlwZSA9IHRhcmdldC5wcm90b3R5cGU7XG5cbiAgdmFyIEZPUkNFRCwgVVNFX05BVElWRSwgVklSVFVBTF9QUk9UT1RZUEU7XG4gIHZhciBrZXksIHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSwgbmF0aXZlUHJvcGVydHksIHJlc3VsdFByb3BlcnR5LCBkZXNjcmlwdG9yO1xuXG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgVVNFX05BVElWRSA9ICFGT1JDRUQgJiYgbmF0aXZlU291cmNlICYmIGhhcyhuYXRpdmVTb3VyY2UsIGtleSk7XG5cbiAgICB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuXG4gICAgaWYgKFVTRV9OQVRJVkUpIGlmIChvcHRpb25zLm5vVGFyZ2V0R2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG5hdGl2ZVNvdXJjZSwga2V5KTtcbiAgICAgIG5hdGl2ZVByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSBuYXRpdmVQcm9wZXJ0eSA9IG5hdGl2ZVNvdXJjZVtrZXldO1xuXG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBpbXBsZW1lbnRhdGlvblxuICAgIHNvdXJjZVByb3BlcnR5ID0gKFVTRV9OQVRJVkUgJiYgbmF0aXZlUHJvcGVydHkpID8gbmF0aXZlUHJvcGVydHkgOiBzb3VyY2Vba2V5XTtcblxuICAgIGlmIChVU0VfTkFUSVZFICYmIHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSA9PT0gdHlwZW9mIHNvdXJjZVByb3BlcnR5KSBjb250aW51ZTtcblxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgaWYgKG9wdGlvbnMuYmluZCAmJiBVU0VfTkFUSVZFKSByZXN1bHRQcm9wZXJ0eSA9IGJpbmQoc291cmNlUHJvcGVydHksIGdsb2JhbCk7XG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5ncyBpbiB0aGlzIHZlcnNpb25cbiAgICBlbHNlIGlmIChvcHRpb25zLndyYXAgJiYgVVNFX05BVElWRSkgcmVzdWx0UHJvcGVydHkgPSB3cmFwQ29uc3RydWN0b3Ioc291cmNlUHJvcGVydHkpO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIGVsc2UgaWYgKFBST1RPICYmIHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSAnZnVuY3Rpb24nKSByZXN1bHRQcm9wZXJ0eSA9IGJpbmQoRnVuY3Rpb24uY2FsbCwgc291cmNlUHJvcGVydHkpO1xuICAgIC8vIGRlZmF1bHQgY2FzZVxuICAgIGVsc2UgcmVzdWx0UHJvcGVydHkgPSBzb3VyY2VQcm9wZXJ0eTtcblxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8IChzb3VyY2VQcm9wZXJ0eSAmJiBzb3VyY2VQcm9wZXJ0eS5zaGFtKSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShyZXN1bHRQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG5cbiAgICB0YXJnZXRba2V5XSA9IHJlc3VsdFByb3BlcnR5O1xuXG4gICAgaWYgKFBST1RPKSB7XG4gICAgICBWSVJUVUFMX1BST1RPVFlQRSA9IFRBUkdFVCArICdQcm90b3R5cGUnO1xuICAgICAgaWYgKCFoYXMocGF0aCwgVklSVFVBTF9QUk9UT1RZUEUpKSB7XG4gICAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShwYXRoLCBWSVJUVUFMX1BST1RPVFlQRSwge30pO1xuICAgICAgfVxuICAgICAgLy8gZXhwb3J0IHZpcnR1YWwgcHJvdG90eXBlIG1ldGhvZHNcbiAgICAgIHBhdGhbVklSVFVBTF9QUk9UT1RZUEVdW2tleV0gPSBzb3VyY2VQcm9wZXJ0eTtcbiAgICAgIC8vIGV4cG9ydCByZWFsIHByb3RvdHlwZSBtZXRob2RzXG4gICAgICBpZiAob3B0aW9ucy5yZWFsICYmIHRhcmdldFByb3RvdHlwZSAmJiAhdGFyZ2V0UHJvdG90eXBlW2tleV0pIHtcbiAgICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHRhcmdldFByb3RvdHlwZSwga2V5LCBzb3VyY2VQcm9wZXJ0eSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9iaW5kLWNvbnRleHQnKTtcblxuLy8gYEZsYXR0ZW5JbnRvQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1mbGF0TWFwLyNzZWMtRmxhdHRlbkludG9BcnJheVxudmFyIGZsYXR0ZW5JbnRvQXJyYXkgPSBmdW5jdGlvbiAodGFyZ2V0LCBvcmlnaW5hbCwgc291cmNlLCBzb3VyY2VMZW4sIHN0YXJ0LCBkZXB0aCwgbWFwcGVyLCB0aGlzQXJnKSB7XG4gIHZhciB0YXJnZXRJbmRleCA9IHN0YXJ0O1xuICB2YXIgc291cmNlSW5kZXggPSAwO1xuICB2YXIgbWFwRm4gPSBtYXBwZXIgPyBiaW5kKG1hcHBlciwgdGhpc0FyZywgMykgOiBmYWxzZTtcbiAgdmFyIGVsZW1lbnQ7XG5cbiAgd2hpbGUgKHNvdXJjZUluZGV4IDwgc291cmNlTGVuKSB7XG4gICAgaWYgKHNvdXJjZUluZGV4IGluIHNvdXJjZSkge1xuICAgICAgZWxlbWVudCA9IG1hcEZuID8gbWFwRm4oc291cmNlW3NvdXJjZUluZGV4XSwgc291cmNlSW5kZXgsIG9yaWdpbmFsKSA6IHNvdXJjZVtzb3VyY2VJbmRleF07XG5cbiAgICAgIGlmIChkZXB0aCA+IDAgJiYgaXNBcnJheShlbGVtZW50KSkge1xuICAgICAgICB0YXJnZXRJbmRleCA9IGZsYXR0ZW5JbnRvQXJyYXkodGFyZ2V0LCBvcmlnaW5hbCwgZWxlbWVudCwgdG9MZW5ndGgoZWxlbWVudC5sZW5ndGgpLCB0YXJnZXRJbmRleCwgZGVwdGggLSAxKSAtIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGFyZ2V0SW5kZXggPj0gMHgxRkZGRkZGRkZGRkZGRikgdGhyb3cgVHlwZUVycm9yKCdFeGNlZWQgdGhlIGFjY2VwdGFibGUgYXJyYXkgbGVuZ3RoJyk7XG4gICAgICAgIHRhcmdldFt0YXJnZXRJbmRleF0gPSBlbGVtZW50O1xuICAgICAgfVxuXG4gICAgICB0YXJnZXRJbmRleCsrO1xuICAgIH1cbiAgICBzb3VyY2VJbmRleCsrO1xuICB9XG4gIHJldHVybiB0YXJnZXRJbmRleDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZmxhdHRlbkludG9BcnJheTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2hhcmVkKCduYXRpdmUtZnVuY3Rpb24tdG8tc3RyaW5nJywgRnVuY3Rpb24udG9TdHJpbmcpO1xuIiwidmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICByZXR1cm4gdHlwZW9mIHZhcmlhYmxlID09ICdmdW5jdGlvbicgPyB2YXJpYWJsZSA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihwYXRoW25hbWVzcGFjZV0pIHx8IGFGdW5jdGlvbihnbG9iYWxbbmFtZXNwYWNlXSlcbiAgICA6IHBhdGhbbmFtZXNwYWNlXSAmJiBwYXRoW25hbWVzcGFjZV1bbWV0aG9kXSB8fCBnbG9iYWxbbmFtZXNwYWNlXSAmJiBnbG9iYWxbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpdGVyYXRvck1ldGhvZCA9IGdldEl0ZXJhdG9yTWV0aG9kKGl0KTtcbiAgaWYgKHR5cGVvZiBpdGVyYXRvck1ldGhvZCAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBpdGVyYWJsZScpO1xuICB9IHJldHVybiBhbk9iamVjdChpdGVyYXRvck1ldGhvZC5jYWxsKGl0KSk7XG59O1xuIiwidmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHZhciBjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGU7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gY29uc29sZS5lcnJvcihhKSA6IGNvbnNvbGUuZXJyb3IoYSwgYik7XG4gIH1cbn07XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdkb2N1bWVudCcsICdkb2N1bWVudEVsZW1lbnQnKTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciBzcGxpdCA9ICcnLnNwbGl0O1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICByZXR1cm4gIU9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09ICdTdHJpbmcnID8gc3BsaXQuY2FsbChpdCwgJycpIDogT2JqZWN0KGl0KTtcbn0gOiBPYmplY3Q7XG4iLCJ2YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgb2JqZWN0SGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCkge1xuICB2YXIgc3RvcmUgPSBuZXcgV2Vha01hcCgpO1xuICB2YXIgd21nZXQgPSBzdG9yZS5nZXQ7XG4gIHZhciB3bWhhcyA9IHN0b3JlLmhhcztcbiAgdmFyIHdtc2V0ID0gc3RvcmUuc2V0O1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgd21zZXQuY2FsbChzdG9yZSwgaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWdldC5jYWxsKHN0b3JlLCBpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWhhcy5jYWxsKHN0b3JlLCBpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gb2JqZWN0SGFzKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b3R5cGVbSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNhcnJheVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjbGFzc29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09IE5BVElWRSA/IGZhbHNlXG4gICAgOiB0eXBlb2YgZGV0ZWN0aW9uID09ICdmdW5jdGlvbicgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8gPSBPYmplY3QoaXQpO1xuICByZXR1cm4gT1tJVEVSQVRPUl0gIT09IHVuZGVmaW5lZFxuICAgIHx8ICdAQGl0ZXJhdG9yJyBpbiBPXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgIHx8IEl0ZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eShjbGFzc29mKE8pKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc0FycmF5SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9iaW5kLWNvbnRleHQnKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZycpO1xuXG52YXIgUmVzdWx0ID0gZnVuY3Rpb24gKHN0b3BwZWQsIHJlc3VsdCkge1xuICB0aGlzLnN0b3BwZWQgPSBzdG9wcGVkO1xuICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbn07XG5cbnZhciBpdGVyYXRlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGZuLCB0aGF0LCBBU19FTlRSSUVTLCBJU19JVEVSQVRPUikge1xuICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoZm4sIHRoYXQsIEFTX0VOVFJJRVMgPyAyIDogMSk7XG4gIHZhciBpdGVyYXRvciwgaXRlckZuLCBpbmRleCwgbGVuZ3RoLCByZXN1bHQsIG5leHQsIHN0ZXA7XG5cbiAgaWYgKElTX0lURVJBVE9SKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYWJsZTtcbiAgfSBlbHNlIHtcbiAgICBpdGVyRm4gPSBnZXRJdGVyYXRvck1ldGhvZChpdGVyYWJsZSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKCdUYXJnZXQgaXMgbm90IGl0ZXJhYmxlJyk7XG4gICAgLy8gb3B0aW1pc2F0aW9uIGZvciBhcnJheSBpdGVyYXRvcnNcbiAgICBpZiAoaXNBcnJheUl0ZXJhdG9yTWV0aG9kKGl0ZXJGbikpIHtcbiAgICAgIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICByZXN1bHQgPSBBU19FTlRSSUVTXG4gICAgICAgICAgPyBib3VuZEZ1bmN0aW9uKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKVxuICAgICAgICAgIDogYm91bmRGdW5jdGlvbihpdGVyYWJsZVtpbmRleF0pO1xuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdCBpbnN0YW5jZW9mIFJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xuICAgIH1cbiAgICBpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTtcbiAgfVxuXG4gIG5leHQgPSBpdGVyYXRvci5uZXh0O1xuICB3aGlsZSAoIShzdGVwID0gbmV4dC5jYWxsKGl0ZXJhdG9yKSkuZG9uZSkge1xuICAgIHJlc3VsdCA9IGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcoaXRlcmF0b3IsIGJvdW5kRnVuY3Rpb24sIHN0ZXAudmFsdWUsIEFTX0VOVFJJRVMpO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0ID09ICdvYmplY3QnICYmIHJlc3VsdCAmJiByZXN1bHQgaW5zdGFuY2VvZiBSZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xufTtcblxuaXRlcmF0ZS5zdG9wID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICByZXR1cm4gbmV3IFJlc3VsdCh0cnVlLCByZXN1bHQpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gZmFsc2U7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVgIG9iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1vYmplY3RcbnZhciBJdGVyYXRvclByb3RvdHlwZSwgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlLCBhcnJheUl0ZXJhdG9yO1xuXG5pZiAoW10ua2V5cykge1xuICBhcnJheUl0ZXJhdG9yID0gW10ua2V5cygpO1xuICAvLyBTYWZhcmkgOCBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgaWYgKCEoJ25leHQnIGluIGFycmF5SXRlcmF0b3IpKSBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gdHJ1ZTtcbiAgZWxzZSB7XG4gICAgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoZ2V0UHJvdG90eXBlT2YoYXJyYXlJdGVyYXRvcikpO1xuICAgIGlmIChQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpIEl0ZXJhdG9yUHJvdG90eXBlID0gUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG59XG5cbmlmIChJdGVyYXRvclByb3RvdHlwZSA9PSB1bmRlZmluZWQpIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5pZiAoIUlTX1BVUkUgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSB7XG4gIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgSXRlcmF0b3JQcm90b3R5cGU6IEl0ZXJhdG9yUHJvdG90eXBlLFxuICBCVUdHWV9TQUZBUklfSVRFUkFUT1JTOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGFzaycpLnNldDtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlci1hZ2VudCcpO1xuXG52YXIgTXV0YXRpb25PYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgSVNfTk9ERSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuLy8gTm9kZS5qcyAxMSBzaG93cyBFeHBlcmltZW50YWxXYXJuaW5nIG9uIGdldHRpbmcgYHF1ZXVlTWljcm90YXNrYFxudmFyIHF1ZXVlTWljcm90YXNrRGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihnbG9iYWwsICdxdWV1ZU1pY3JvdGFzaycpO1xudmFyIHF1ZXVlTWljcm90YXNrID0gcXVldWVNaWNyb3Rhc2tEZXNjcmlwdG9yICYmIHF1ZXVlTWljcm90YXNrRGVzY3JpcHRvci52YWx1ZTtcblxudmFyIGZsdXNoLCBoZWFkLCBsYXN0LCBub3RpZnksIHRvZ2dsZSwgbm9kZSwgcHJvbWlzZSwgdGhlbjtcblxuLy8gbW9kZXJuIGVuZ2luZXMgaGF2ZSBxdWV1ZU1pY3JvdGFzayBtZXRob2RcbmlmICghcXVldWVNaWNyb3Rhc2spIHtcbiAgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKElTX05PREUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKElTX05PREUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXIsIGV4Y2VwdCBpT1MgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoTXV0YXRpb25PYnNlcnZlciAmJiAhLyhpcGhvbmV8aXBvZHxpcGFkKS4qYXBwbGV3ZWJraXQvaS50ZXN0KHVzZXJBZ2VudCkpIHtcbiAgICB0b2dnbGUgPSB0cnVlO1xuICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIHRoZW4gPSBwcm9taXNlLnRoZW47XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhlbi5jYWxsKHByb21pc2UsIGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1ZXVlTWljcm90YXNrIHx8IGZ1bmN0aW9uIChmbikge1xuICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gIGlmICghaGVhZCkge1xuICAgIGhlYWQgPSB0YXNrO1xuICAgIG5vdGlmeSgpO1xuICB9IGxhc3QgPSB0YXNrO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsLlByb21pc2U7XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHJldHVybiAhU3RyaW5nKFN5bWJvbCgpKTtcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBuYXRpdmVGdW5jdGlvblRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXRvLXN0cmluZycpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChuYXRpdmVGdW5jdGlvblRvU3RyaW5nLmNhbGwoV2Vha01hcCkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG5cbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xuXG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuXG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgc2NyaXB0ID0gJ3NjcmlwdCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGpzID0gJ2phdmEnICsgc2NyaXB0ICsgJzonO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSBTdHJpbmcoanMpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgc2NyaXB0ICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnLycgKyBzY3JpcHQgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5ID0ga2V5c1tpbmRleCsrXSwgUHJvcGVydGllc1trZXldKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcblxudmFyIG5hdGl2ZURlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gbmF0aXZlRGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxudmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsInZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJykuZjtcblxudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyhpdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJ1xuICAgID8gZ2V0V2luZG93TmFtZXMoaXQpXG4gICAgOiBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzKHRvSW5kZXhlZE9iamVjdChpdCkpO1xufTtcbiIsInZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyJyk7XG5cbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuXG4vLyBgT2JqZWN0LmdldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRwcm90b3R5cGVvZlxubW9kdWxlLmV4cG9ydHMgPSBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG90eXBlIDogbnVsbDtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhcyhoaWRkZW5LZXlzLCBrZXkpICYmIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgIW5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6IG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGFQb3NzaWJsZVByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLXBvc3NpYmxlLXByb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LnNldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5zZXRwcm90b3R5cGVvZlxuLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gZnVuY3Rpb24gKCkge1xuICB2YXIgQ09SUkVDVF9TRVRURVIgPSBmYWxzZTtcbiAgdmFyIHRlc3QgPSB7fTtcbiAgdmFyIHNldHRlcjtcbiAgdHJ5IHtcbiAgICBzZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQ7XG4gICAgc2V0dGVyLmNhbGwodGVzdCwgW10pO1xuICAgIENPUlJFQ1RfU0VUVEVSID0gdGVzdCBpbnN0YW5jZW9mIEFycmF5O1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgIGFuT2JqZWN0KE8pO1xuICAgIGFQb3NzaWJsZVByb3RvdHlwZShwcm90byk7XG4gICAgaWYgKENPUlJFQ1RfU0VUVEVSKSBzZXR0ZXIuY2FsbChPLCBwcm90byk7XG4gICAgZWxzZSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgIHJldHVybiBPO1xuICB9O1xufSgpIDogdW5kZWZpbmVkKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgdGVzdCA9IHt9O1xuXG50ZXN0W1RPX1NUUklOR19UQUddID0gJ3onO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZyh0ZXN0KSAhPT0gJ1tvYmplY3Qgel0nID8gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbn0gOiB0ZXN0LnRvU3RyaW5nO1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlcnJvcjogZmFsc2UsIHZhbHVlOiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBlcnJvcjogdHJ1ZSwgdmFsdWU6IGVycm9yIH07XG4gIH1cbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnVuc2FmZSAmJiB0YXJnZXRba2V5XSkgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgb3B0aW9ucyk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG4iLCJ2YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5lbnVtZXJhYmxlKSB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICBlbHNlIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgdmFsdWUpO1xufTtcbiIsIi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoZ2xvYmFsLCBrZXksIHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09OU1RSVUNUT1JfTkFNRSkge1xuICB2YXIgQ29uc3RydWN0b3IgPSBnZXRCdWlsdEluKENPTlNUUlVDVE9SX05BTUUpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiBDb25zdHJ1Y3RvciAmJiAhQ29uc3RydWN0b3JbU1BFQ0lFU10pIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgU1BFQ0lFUywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gICAgfSk7XG4gIH1cbn07XG4iLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtdG8tc3RyaW5nJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIE1FVEhPRF9SRVFVSVJFRCA9IHRvU3RyaW5nICE9PSAoe30pLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgVEFHLCBTVEFUSUMsIFNFVF9NRVRIT0QpIHtcbiAgaWYgKGl0KSB7XG4gICAgdmFyIHRhcmdldCA9IFNUQVRJQyA/IGl0IDogaXQucHJvdG90eXBlO1xuICAgIGlmICghaGFzKHRhcmdldCwgVE9fU1RSSU5HX1RBRykpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwgVE9fU1RSSU5HX1RBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBUQUcgfSk7XG4gICAgfVxuICAgIGlmIChTRVRfTUVUSE9EICYmIE1FVEhPRF9SRVFVSVJFRCkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHRhcmdldCwgJ3RvU3RyaW5nJywgdG9TdHJpbmcpO1xuICAgIH1cbiAgfVxufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgc2V0R2xvYmFsKFNIQVJFRCwge30pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlO1xuIiwidmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMy40JyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE5IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhbWV0aG9kIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCxuby10aHJvdy1saXRlcmFsXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyB0aHJvdyAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbi8vIGBTcGVjaWVzQ29uc3RydWN0b3JgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3BlY2llc2NvbnN0cnVjdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBkZWZhdWx0Q29uc3RydWN0b3IpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gZGVmYXVsdENvbnN0cnVjdG9yIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgY29kZVBvaW50QXQsIGF0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoQ09OVkVSVF9UT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgcG9zKSB7XG4gICAgdmFyIFMgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgIHZhciBwb3NpdGlvbiA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBzaXplID0gUy5sZW5ndGg7XG4gICAgdmFyIGZpcnN0LCBzZWNvbmQ7XG4gICAgaWYgKHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSBzaXplKSByZXR1cm4gQ09OVkVSVF9UT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBmaXJzdCA9IFMuY2hhckNvZGVBdChwb3NpdGlvbik7XG4gICAgcmV0dXJuIGZpcnN0IDwgMHhEODAwIHx8IGZpcnN0ID4gMHhEQkZGIHx8IHBvc2l0aW9uICsgMSA9PT0gc2l6ZVxuICAgICAgfHwgKHNlY29uZCA9IFMuY2hhckNvZGVBdChwb3NpdGlvbiArIDEpKSA8IDB4REMwMCB8fCBzZWNvbmQgPiAweERGRkZcbiAgICAgICAgPyBDT05WRVJUX1RPX1NUUklORyA/IFMuY2hhckF0KHBvc2l0aW9uKSA6IGZpcnN0XG4gICAgICAgIDogQ09OVkVSVF9UT19TVFJJTkcgPyBTLnNsaWNlKHBvc2l0aW9uLCBwb3NpdGlvbiArIDIpIDogKGZpcnN0IC0gMHhEODAwIDw8IDEwKSArIChzZWNvbmQgLSAweERDMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRBdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuY29kZXBvaW50YXRcbiAgY29kZUF0OiBjcmVhdGVNZXRob2QoZmFsc2UpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS5hdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL1N0cmluZy5wcm90b3R5cGUuYXRcbiAgY2hhckF0OiBjcmVhdGVNZXRob2QodHJ1ZSlcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYmluZC1jb250ZXh0Jyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9odG1sJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2VyLWFnZW50Jyk7XG5cbnZhciBsb2NhdGlvbiA9IGdsb2JhbC5sb2NhdGlvbjtcbnZhciBzZXQgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xuXG52YXIgcnVuID0gZnVuY3Rpb24gKGlkKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG5cbnZhciBydW5uZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBydW4oaWQpO1xuICB9O1xufTtcblxudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bihldmVudC5kYXRhKTtcbn07XG5cbnZhciBwb3N0ID0gZnVuY3Rpb24gKGlkKSB7XG4gIC8vIG9sZCBlbmdpbmVzIGhhdmUgbm90IGxvY2F0aW9uLm9yaWdpblxuICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCk7XG59O1xuXG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldCB8fCAhY2xlYXIpIHtcbiAgc2V0ID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgICh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pKS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2socnVubmVyKGlkKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhydW5uZXIoaWQpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIC8vIGV4Y2VwdCBpT1MgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjI0XG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwgJiYgIS8oaXBob25lfGlwb2R8aXBhZCkuKmFwcGxld2Via2l0L2kudGVzdCh1c2VyQWdlbnQpKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBiaW5kKHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMgJiYgIWZhaWxzKHBvc3QpKSB7XG4gICAgZGVmZXIgPSBwb3N0O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjcmVhdGVFbGVtZW50KCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4oaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KHJ1bm5lcihpZCksIDApO1xuICAgIH07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBjbGVhcjogY2xlYXJcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGxlbmd0aCwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCIvLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwidmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgVG9JbnRlZ2VyYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvaW50ZWdlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzTmFOKGFyZ3VtZW50ID0gK2FyZ3VtZW50KSA/IDAgOiAoYXJndW1lbnQgPiAwID8gZmxvb3IgOiBjZWlsKShhcmd1bWVudCk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gYXJndW1lbnQgPiAwID8gbWluKHRvSW50ZWdlcihhcmd1bWVudCksIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBQUkVGRVJSRURfU1RSSU5HKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpbnB1dC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgU3RyaW5nKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArICgrK2lkICsgcG9zdGZpeCkudG9TdHJpbmcoMzYpO1xufTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ25hdmlnYXRvcicsICd1c2VyQWdlbnQnKSB8fCAnJztcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucztcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gKyBtYXRjaFsxXTtcbn0gZWxzZSBpZiAodXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gbWF0Y2hbMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbiAmJiArdmVyc2lvbjtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgc3RvcmUgPSBzaGFyZWQoJ3drcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPSBOQVRJVkVfU1lNQk9MICYmIFN5bWJvbFtuYW1lXVxuICAgIHx8IChOQVRJVkVfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7XG52YXIgTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEID0gJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCc7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIGFycmF5W0lTX0NPTkNBVF9TUFJFQURBQkxFXSA9IGZhbHNlO1xuICByZXR1cm4gYXJyYXkuY29uY2F0KClbMF0gIT09IGFycmF5O1xufSk7XG5cbnZhciBTUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdjb25jYXQnKTtcblxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XG59O1xuXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIVNQRUNJRVNfU1VQUE9SVDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5jb25jYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmNvbmNhdFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQGlzQ29uY2F0U3ByZWFkYWJsZSBhbmQgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBjb25jYXQ6IGZ1bmN0aW9uIGNvbmNhdChhcmcpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgdmFyIG4gPSAwO1xuICAgIHZhciBpLCBrLCBsZW5ndGgsIGxlbiwgRTtcbiAgICBmb3IgKGkgPSAtMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBFID0gaSA9PT0gLTEgPyBPIDogYXJndW1lbnRzW2ldO1xuICAgICAgaWYgKGlzQ29uY2F0U3ByZWFkYWJsZShFKSkge1xuICAgICAgICBsZW4gPSB0b0xlbmd0aChFLmxlbmd0aCk7XG4gICAgICAgIGlmIChuICsgbGVuID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBsZW47IGsrKywgbisrKSBpZiAoayBpbiBFKSBjcmVhdGVQcm9wZXJ0eShBLCBuLCBFW2tdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuID49IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShBLCBuKyssIEUpO1xuICAgICAgfVxuICAgIH1cbiAgICBBLmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGV2ZXJ5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmV2ZXJ5O1xudmFyIHNsb3BweUFycmF5TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Nsb3BweS1hcnJheS1tZXRob2QnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5ldmVyeWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZXZlcnlcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IHNsb3BweUFycmF5TWV0aG9kKCdldmVyeScpIH0sIHtcbiAgZXZlcnk6IGZ1bmN0aW9uIGV2ZXJ5KGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRldmVyeSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIWFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpIH0sIHtcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJGZpbHRlcih0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmxhdHRlbkludG9BcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mbGF0dGVuLWludG8tYXJyYXknKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZsYXRNYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtZmxhdE1hcFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUgfSwge1xuICBmbGF0TWFwOiBmdW5jdGlvbiBmbGF0TWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgc291cmNlTGVuID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBBO1xuICAgIGFGdW5jdGlvbihjYWxsYmFja2ZuKTtcbiAgICBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIEEubGVuZ3RoID0gZmxhdHRlbkludG9BcnJheShBLCBPLCBPLCBzb3VyY2VMZW4sIDAsIDEsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogW10uZm9yRWFjaCAhPSBmb3JFYWNoIH0sIHtcbiAgZm9yRWFjaDogZm9yRWFjaFxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmcm9tID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZyb20nKTtcbnZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uJyk7XG5cbnZhciBJTkNPUlJFQ1RfSVRFUkFUSU9OID0gIWNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHtcbiAgQXJyYXkuZnJvbShpdGVyYWJsZSk7XG59KTtcblxuLy8gYEFycmF5LmZyb21gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkuZnJvbVxuJCh7IHRhcmdldDogJ0FycmF5Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBJTkNPUlJFQ1RfSVRFUkFUSU9OIH0sIHtcbiAgZnJvbTogZnJvbVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgc2xvcHB5QXJyYXlNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2xvcHB5LWFycmF5LW1ldGhvZCcpO1xuXG52YXIgbmF0aXZlSW5kZXhPZiA9IFtdLmluZGV4T2Y7XG5cbnZhciBORUdBVElWRV9aRVJPID0gISFuYXRpdmVJbmRleE9mICYmIDEgLyBbMV0uaW5kZXhPZigxLCAtMCkgPCAwO1xudmFyIFNMT1BQWV9NRVRIT0QgPSBzbG9wcHlBcnJheU1ldGhvZCgnaW5kZXhPZicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IE5FR0FUSVZFX1pFUk8gfHwgU0xPUFBZX01FVEhPRCB9LCB7XG4gIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuICAgICAgLy8gY29udmVydCAtMCB0byArMFxuICAgICAgPyBuYXRpdmVJbmRleE9mLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMFxuICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xuXG4vLyBgQXJyYXkuaXNBcnJheWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5pc2FycmF5XG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBzdGF0OiB0cnVlIH0sIHtcbiAgaXNBcnJheTogaXNBcnJheVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGRlZmluZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1pdGVyYXRvcicpO1xuXG52YXIgQVJSQVlfSVRFUkFUT1IgPSAnQXJyYXkgSXRlcmF0b3InO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoQVJSQVlfSVRFUkFUT1IpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmVudHJpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmVudHJpZXNcbi8vIGBBcnJheS5wcm90b3R5cGUua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUua2V5c1xuLy8gYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnZhbHVlc1xuLy8gYEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEBpdGVyYXRvclxuLy8gYENyZWF0ZUFycmF5SXRlcmF0b3JgIGludGVybmFsIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtY3JlYXRlYXJyYXlpdGVyYXRvclxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVJdGVyYXRvcihBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgIHR5cGU6IEFSUkFZX0lURVJBVE9SLFxuICAgIHRhcmdldDogdG9JbmRleGVkT2JqZWN0KGl0ZXJhdGVkKSwgLy8gdGFyZ2V0XG4gICAgaW5kZXg6IDAsICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gICAga2luZDoga2luZCAgICAgICAgICAgICAgICAgICAgICAgICAvLyBraW5kXG4gIH0pO1xuLy8gYCVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLSVhcnJheWl0ZXJhdG9ycHJvdG90eXBlJS5uZXh0XG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gIHZhciB0YXJnZXQgPSBzdGF0ZS50YXJnZXQ7XG4gIHZhciBraW5kID0gc3RhdGUua2luZDtcbiAgdmFyIGluZGV4ID0gc3RhdGUuaW5kZXgrKztcbiAgaWYgKCF0YXJnZXQgfHwgaW5kZXggPj0gdGFyZ2V0Lmxlbmd0aCkge1xuICAgIHN0YXRlLnRhcmdldCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4geyB2YWx1ZTogaW5kZXgsIGRvbmU6IGZhbHNlIH07XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4geyB2YWx1ZTogdGFyZ2V0W2luZGV4XSwgZG9uZTogZmFsc2UgfTtcbiAgcmV0dXJuIHsgdmFsdWU6IFtpbmRleCwgdGFyZ2V0W2luZGV4XV0sIGRvbmU6IGZhbHNlIH07XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtY3JlYXRldW5tYXBwZWRhcmd1bWVudHNvYmplY3Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWNyZWF0ZW1hcHBlZGFyZ3VtZW50c29iamVjdFxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIWFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciBuYXRpdmVTbGljZSA9IFtdLnNsaWNlO1xudmFyIG1heCA9IE1hdGgubWF4O1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNsaWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zbGljZVxuLy8gZmFsbGJhY2sgZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmdzIGFuZCBET00gb2JqZWN0c1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIWFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ3NsaWNlJykgfSwge1xuICBzbGljZTogZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGsgPSB0b0Fic29sdXRlSW5kZXgoc3RhcnQsIGxlbmd0aCk7XG4gICAgdmFyIGZpbiA9IHRvQWJzb2x1dGVJbmRleChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IGVuZCwgbGVuZ3RoKTtcbiAgICAvLyBpbmxpbmUgYEFycmF5U3BlY2llc0NyZWF0ZWAgZm9yIHVzYWdlIG5hdGl2ZSBgQXJyYXkjc2xpY2VgIHdoZXJlIGl0J3MgcG9zc2libGVcbiAgICB2YXIgQ29uc3RydWN0b3IsIHJlc3VsdCwgbjtcbiAgICBpZiAoaXNBcnJheShPKSkge1xuICAgICAgQ29uc3RydWN0b3IgPSBPLmNvbnN0cnVjdG9yO1xuICAgICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICAgIGlmICh0eXBlb2YgQ29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAoQ29uc3RydWN0b3IgPT09IEFycmF5IHx8IGlzQXJyYXkoQ29uc3RydWN0b3IucHJvdG90eXBlKSkpIHtcbiAgICAgICAgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KENvbnN0cnVjdG9yKSkge1xuICAgICAgICBDb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yW1NQRUNJRVNdO1xuICAgICAgICBpZiAoQ29uc3RydWN0b3IgPT09IG51bGwpIENvbnN0cnVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKENvbnN0cnVjdG9yID09PSBBcnJheSB8fCBDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmVTbGljZS5jYWxsKE8sIGssIGZpbik7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdCA9IG5ldyAoQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQ29uc3RydWN0b3IpKG1heChmaW4gLSBrLCAwKSk7XG4gICAgZm9yIChuID0gMDsgayA8IGZpbjsgaysrLCBuKyspIGlmIChrIGluIE8pIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgbiwgT1trXSk7XG4gICAgcmVzdWx0Lmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkc29tZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5zb21lO1xudmFyIHNsb3BweUFycmF5TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Nsb3BweS1hcnJheS1tZXRob2QnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5zb21lYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb21lXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBzbG9wcHlBcnJheU1ldGhvZCgnc29tZScpIH0sIHtcbiAgc29tZTogZnVuY3Rpb24gc29tZShjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkc29tZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHNsb3BweUFycmF5TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Nsb3BweS1hcnJheS1tZXRob2QnKTtcblxudmFyIG5hdGl2ZVNvcnQgPSBbXS5zb3J0O1xudmFyIHRlc3QgPSBbMSwgMiwgM107XG5cbi8vIElFOC1cbnZhciBGQUlMU19PTl9VTkRFRklORUQgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHRlc3Quc29ydCh1bmRlZmluZWQpO1xufSk7XG4vLyBWOCBidWdcbnZhciBGQUlMU19PTl9OVUxMID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB0ZXN0LnNvcnQobnVsbCk7XG59KTtcbi8vIE9sZCBXZWJLaXRcbnZhciBTTE9QUFlfTUVUSE9EID0gc2xvcHB5QXJyYXlNZXRob2QoJ3NvcnQnKTtcblxudmFyIEZPUkNFRCA9IEZBSUxTX09OX1VOREVGSU5FRCB8fCAhRkFJTFNfT05fTlVMTCB8fCBTTE9QUFlfTUVUSE9EO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNvcnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNvcnRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIHNvcnQ6IGZ1bmN0aW9uIHNvcnQoY29tcGFyZWZuKSB7XG4gICAgcmV0dXJuIGNvbXBhcmVmbiA9PT0gdW5kZWZpbmVkXG4gICAgICA/IG5hdGl2ZVNvcnQuY2FsbCh0b09iamVjdCh0aGlzKSlcbiAgICAgIDogbmF0aXZlU29ydC5jYWxsKHRvT2JqZWN0KHRoaXMpLCBhRnVuY3Rpb24oY29tcGFyZWZuKSk7XG4gIH1cbn0pO1xuIiwiLy8gdGhpcyBtZXRob2Qgd2FzIGFkZGVkIHRvIHVuc2NvcGFibGVzIGFmdGVyIGltcGxlbWVudGF0aW9uXG4vLyBpbiBwb3B1bGFyIGVuZ2luZXMsIHNvIGl0J3MgbW92ZWQgdG8gYSBzZXBhcmF0ZSBtb2R1bGVcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdmbGF0TWFwJyk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG5cbi8vIEpTT05bQEB0b1N0cmluZ1RhZ10gcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWpzb24tQEB0b3N0cmluZ3RhZ1xuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG4iLCJ2YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcblxuLy8gTWF0aFtAQHRvU3RyaW5nVGFnXSBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtbWF0aC1AQHRvc3RyaW5ndGFnXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFERVNDUklQVE9SUywgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgZGVmaW5lUHJvcGVydGllczogZGVmaW5lUHJvcGVydGllc1xufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIG9iamVjdERlZmluZVByb3BlcnR5TW9kaWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFERVNDUklQVE9SUywgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgZGVmaW5lUHJvcGVydHk6IG9iamVjdERlZmluZVByb3BlcnR5TW9kaWxlLmZcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcblxudmFyIEZBSUxTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcigxKTsgfSk7XG52YXIgRk9SQ0VEID0gIURFU0NSSVBUT1JTIHx8IEZBSUxTX09OX1BSSU1JVElWRVM7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCwgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICAgIHJldHVybiBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JbmRleGVkT2JqZWN0KGl0KSwga2V5KTtcbiAgfVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvcnNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iamVjdCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gICAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICAgIHZhciBrZXlzID0gb3duS2V5cyhPKTtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIga2V5LCBkZXNjcmlwdG9yO1xuICAgIHdoaWxlIChrZXlzLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIGtleSA9IGtleXNbaW5kZXgrK10pO1xuICAgICAgaWYgKGRlc2NyaXB0b3IgIT09IHVuZGVmaW5lZCkgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgbmF0aXZlS2V5cygxKTsgfSk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogRkFJTFNfT05fUFJJTUlUSVZFUyB9LCB7XG4gIGtleXM6IGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyh0b09iamVjdChpdCkpO1xuICB9XG59KTtcbiIsIi8vIGVtcHR5XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BlcmZvcm0nKTtcbnZhciBpdGVyYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUnKTtcblxuLy8gYFByb21pc2UuYWxsU2V0dGxlZGAgbWV0aG9kXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLWFsbFNldHRsZWRcbiQoeyB0YXJnZXQ6ICdQcm9taXNlJywgc3RhdDogdHJ1ZSB9LCB7XG4gIGFsbFNldHRsZWQ6IGZ1bmN0aW9uIGFsbFNldHRsZWQoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mKEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcHJvbWlzZVJlc29sdmUgPSBhRnVuY3Rpb24oQy5yZXNvbHZlKTtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgaXRlcmF0ZShpdGVyYWJsZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gY291bnRlcisrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgcHJvbWlzZVJlc29sdmUuY2FsbChDLCBwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzW2luZGV4XSA9IHsgc3RhdHVzOiAnZnVsZmlsbGVkJywgdmFsdWU6IHZhbHVlIH07XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzW2luZGV4XSA9IHsgc3RhdHVzOiAncmVqZWN0ZWQnLCByZWFzb246IGUgfTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikgcmVqZWN0KHJlc3VsdC52YWx1ZSk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBOYXRpdmVQcm9taXNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1wcm9taXNlLWNvbnN0cnVjdG9yJyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG5cbi8vIGBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UucHJvdG90eXBlLmZpbmFsbHlcbiQoeyB0YXJnZXQ6ICdQcm9taXNlJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUgfSwge1xuICAnZmluYWxseSc6IGZ1bmN0aW9uIChvbkZpbmFsbHkpIHtcbiAgICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBnZXRCdWlsdEluKCdQcm9taXNlJykpO1xuICAgIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIG9uRmluYWxseSA9PSAnZnVuY3Rpb24nO1xuICAgIHJldHVybiB0aGlzLnRoZW4oXG4gICAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHg7IH0pO1xuICAgICAgfSA6IG9uRmluYWxseSxcbiAgICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyB0aHJvdyBlOyB9KTtcbiAgICAgIH0gOiBvbkZpbmFsbHlcbiAgICApO1xuICB9XG59KTtcblxuLy8gcGF0Y2ggbmF0aXZlIFByb21pc2UucHJvdG90eXBlIGZvciBuYXRpdmUgYXN5bmMgZnVuY3Rpb25zXG5pZiAoIUlTX1BVUkUgJiYgdHlwZW9mIE5hdGl2ZVByb21pc2UgPT0gJ2Z1bmN0aW9uJyAmJiAhTmF0aXZlUHJvbWlzZS5wcm90b3R5cGVbJ2ZpbmFsbHknXSkge1xuICByZWRlZmluZShOYXRpdmVQcm9taXNlLnByb3RvdHlwZSwgJ2ZpbmFsbHknLCBnZXRCdWlsdEluKCdQcm9taXNlJykucHJvdG90eXBlWydmaW5hbGx5J10pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgTmF0aXZlUHJvbWlzZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtcHJvbWlzZS1jb25zdHJ1Y3RvcicpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUtYWxsJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zcGVjaWVzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLWluc3RhbmNlJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24nKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWljcm90YXNrJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgaG9zdFJlcG9ydEVycm9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ob3N0LXJlcG9ydC1lcnJvcnMnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wZXJmb3JtJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbFByb21pc2VTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKFBST01JU0UpO1xudmFyIFByb21pc2VDb25zdHJ1Y3RvciA9IE5hdGl2ZVByb21pc2U7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgJGZldGNoID0gZ2V0QnVpbHRJbignZmV0Y2gnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG52YXIgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHk7XG52YXIgSVNfTk9ERSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIERJU1BBVENIX0VWRU5UID0gISEoZG9jdW1lbnQgJiYgZG9jdW1lbnQuY3JlYXRlRXZlbnQgJiYgZ2xvYmFsLmRpc3BhdGNoRXZlbnQpO1xudmFyIFVOSEFORExFRF9SRUpFQ1RJT04gPSAndW5oYW5kbGVkcmVqZWN0aW9uJztcbnZhciBSRUpFQ1RJT05fSEFORExFRCA9ICdyZWplY3Rpb25oYW5kbGVkJztcbnZhciBQRU5ESU5HID0gMDtcbnZhciBGVUxGSUxMRUQgPSAxO1xudmFyIFJFSkVDVEVEID0gMjtcbnZhciBIQU5ETEVEID0gMTtcbnZhciBVTkhBTkRMRUQgPSAyO1xudmFyIEludGVybmFsLCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgUHJvbWlzZVdyYXBwZXIsIG5hdGl2ZVRoZW47XG5cbnZhciBGT1JDRUQgPSBpc0ZvcmNlZChQUk9NSVNFLCBmdW5jdGlvbiAoKSB7XG4gIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICB2YXIgcHJvbWlzZSA9IFByb21pc2VDb25zdHJ1Y3Rvci5yZXNvbHZlKDEpO1xuICB2YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG4gIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW1NQRUNJRVNdID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gIH07XG4gIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgcmV0dXJuICEoKElTX05PREUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKVxuICAgICYmICghSVNfUFVSRSB8fCBwcm9taXNlWydmaW5hbGx5J10pXG4gICAgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlXG4gICAgLy8gdjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgzMDU2NVxuICAgIC8vIHdlIGNhbid0IGRldGVjdCBpdCBzeW5jaHJvbm91c2x5LCBzbyBqdXN0IGNoZWNrIHZlcnNpb25zXG4gICAgJiYgVjhfVkVSU0lPTiAhPT0gNjYpO1xufSk7XG5cbnZhciBJTkNPUlJFQ1RfSVRFUkFUSU9OID0gRk9SQ0VEIHx8ICFjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24oZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG4gIFByb21pc2VDb25zdHJ1Y3Rvci5hbGwoaXRlcmFibGUpWydjYXRjaCddKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG59KTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG5cbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgc3RhdGUsIGlzUmVqZWN0KSB7XG4gIGlmIChzdGF0ZS5ub3RpZmllZCkgcmV0dXJuO1xuICBzdGF0ZS5ub3RpZmllZCA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHN0YXRlLnJlYWN0aW9ucztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZS52YWx1ZTtcbiAgICB2YXIgb2sgPSBzdGF0ZS5zdGF0ZSA9PSBGVUxGSUxMRUQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gY2hhaW5baW5kZXgrK107XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuLCBleGl0ZWQ7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5yZWplY3Rpb24gPT09IFVOSEFORExFRCkgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSwgc3RhdGUpO1xuICAgICAgICAgICAgc3RhdGUucmVqZWN0aW9uID0gSEFORExFRDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTsgLy8gY2FuIHRocm93XG4gICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgICAgIGV4aXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGRvbWFpbiAmJiAhZXhpdGVkKSBkb21haW4uZXhpdCgpO1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZS5yZWFjdGlvbnMgPSBbXTtcbiAgICBzdGF0ZS5ub3RpZmllZCA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhc3RhdGUucmVqZWN0aW9uKSBvblVuaGFuZGxlZChwcm9taXNlLCBzdGF0ZSk7XG4gIH0pO1xufTtcblxudmFyIGRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAobmFtZSwgcHJvbWlzZSwgcmVhc29uKSB7XG4gIHZhciBldmVudCwgaGFuZGxlcjtcbiAgaWYgKERJU1BBVENIX0VWRU5UKSB7XG4gICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldmVudC5wcm9taXNlID0gcHJvbWlzZTtcbiAgICBldmVudC5yZWFzb24gPSByZWFzb247XG4gICAgZXZlbnQuaW5pdEV2ZW50KG5hbWUsIGZhbHNlLCB0cnVlKTtcbiAgICBnbG9iYWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH0gZWxzZSBldmVudCA9IHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiByZWFzb24gfTtcbiAgaWYgKGhhbmRsZXIgPSBnbG9iYWxbJ29uJyArIG5hbWVdKSBoYW5kbGVyKGV2ZW50KTtcbiAgZWxzZSBpZiAobmFtZSA9PT0gVU5IQU5ETEVEX1JFSkVDVElPTikgaG9zdFJlcG9ydEVycm9ycygnVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgcmVhc29uKTtcbn07XG5cbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlLCBzdGF0ZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gc3RhdGUudmFsdWU7XG4gICAgdmFyIElTX1VOSEFORExFRCA9IGlzVW5oYW5kbGVkKHN0YXRlKTtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGlmIChJU19VTkhBTkRMRUQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoSVNfTk9ERSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgZGlzcGF0Y2hFdmVudChVTkhBTkRMRURfUkVKRUNUSU9OLCBwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBzdGF0ZS5yZWplY3Rpb24gPSBJU19OT0RFIHx8IGlzVW5oYW5kbGVkKHN0YXRlKSA/IFVOSEFORExFRCA6IEhBTkRMRUQ7XG4gICAgICBpZiAocmVzdWx0LmVycm9yKSB0aHJvdyByZXN1bHQudmFsdWU7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICByZXR1cm4gc3RhdGUucmVqZWN0aW9uICE9PSBIQU5ETEVEICYmICFzdGF0ZS5wYXJlbnQ7XG59O1xuXG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSwgc3RhdGUpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChJU19OT0RFKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgZGlzcGF0Y2hFdmVudChSRUpFQ1RJT05fSEFORExFRCwgcHJvbWlzZSwgc3RhdGUudmFsdWUpO1xuICB9KTtcbn07XG5cbnZhciBiaW5kID0gZnVuY3Rpb24gKGZuLCBwcm9taXNlLCBzdGF0ZSwgdW53cmFwKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBmbihwcm9taXNlLCBzdGF0ZSwgdmFsdWUsIHVud3JhcCk7XG4gIH07XG59O1xuXG52YXIgaW50ZXJuYWxSZWplY3QgPSBmdW5jdGlvbiAocHJvbWlzZSwgc3RhdGUsIHZhbHVlLCB1bndyYXApIHtcbiAgaWYgKHN0YXRlLmRvbmUpIHJldHVybjtcbiAgc3RhdGUuZG9uZSA9IHRydWU7XG4gIGlmICh1bndyYXApIHN0YXRlID0gdW53cmFwO1xuICBzdGF0ZS52YWx1ZSA9IHZhbHVlO1xuICBzdGF0ZS5zdGF0ZSA9IFJFSkVDVEVEO1xuICBub3RpZnkocHJvbWlzZSwgc3RhdGUsIHRydWUpO1xufTtcblxudmFyIGludGVybmFsUmVzb2x2ZSA9IGZ1bmN0aW9uIChwcm9taXNlLCBzdGF0ZSwgdmFsdWUsIHVud3JhcCkge1xuICBpZiAoc3RhdGUuZG9uZSkgcmV0dXJuO1xuICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgaWYgKHVud3JhcCkgc3RhdGUgPSB1bndyYXA7XG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICB2YXIgdGhlbiA9IGlzVGhlbmFibGUodmFsdWUpO1xuICAgIGlmICh0aGVuKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsXG4gICAgICAgICAgICBiaW5kKGludGVybmFsUmVzb2x2ZSwgcHJvbWlzZSwgd3JhcHBlciwgc3RhdGUpLFxuICAgICAgICAgICAgYmluZChpbnRlcm5hbFJlamVjdCwgcHJvbWlzZSwgd3JhcHBlciwgc3RhdGUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBpbnRlcm5hbFJlamVjdChwcm9taXNlLCB3cmFwcGVyLCBlcnJvciwgc3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHN0YXRlLnN0YXRlID0gRlVMRklMTEVEO1xuICAgICAgbm90aWZ5KHByb21pc2UsIHN0YXRlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGludGVybmFsUmVqZWN0KHByb21pc2UsIHsgZG9uZTogZmFsc2UgfSwgZXJyb3IsIHN0YXRlKTtcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmIChGT1JDRUQpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgUHJvbWlzZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgUHJvbWlzZUNvbnN0cnVjdG9yLCBQUk9NSVNFKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoYmluZChpbnRlcm5hbFJlc29sdmUsIHRoaXMsIHN0YXRlKSwgYmluZChpbnRlcm5hbFJlamVjdCwgdGhpcywgc3RhdGUpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaW50ZXJuYWxSZWplY3QodGhpcywgc3RhdGUsIGVycm9yKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICAgIHR5cGU6IFBST01JU0UsXG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIG5vdGlmaWVkOiBmYWxzZSxcbiAgICAgIHBhcmVudDogZmFsc2UsXG4gICAgICByZWFjdGlvbnM6IFtdLFxuICAgICAgcmVqZWN0aW9uOiBmYWxzZSxcbiAgICAgIHN0YXRlOiBQRU5ESU5HLFxuICAgICAgdmFsdWU6IHVuZGVmaW5lZFxuICAgIH0pO1xuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZWRlZmluZUFsbChQcm9taXNlQ29uc3RydWN0b3IucHJvdG90eXBlLCB7XG4gICAgLy8gYFByb21pc2UucHJvdG90eXBlLnRoZW5gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UucHJvdG90eXBlLnRoZW5cbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFByb21pc2VTdGF0ZSh0aGlzKTtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBQcm9taXNlQ29uc3RydWN0b3IpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gSVNfTk9ERSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgc3RhdGUucGFyZW50ID0gdHJ1ZTtcbiAgICAgIHN0YXRlLnJlYWN0aW9ucy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmIChzdGF0ZS5zdGF0ZSAhPSBQRU5ESU5HKSBub3RpZnkodGhpcywgc3RhdGUsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gYFByb21pc2UucHJvdG90eXBlLmNhdGNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wcm9taXNlLnByb3RvdHlwZS5jYXRjaFxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHByb21pc2UpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gYmluZChpbnRlcm5hbFJlc29sdmUsIHByb21pc2UsIHN0YXRlKTtcbiAgICB0aGlzLnJlamVjdCA9IGJpbmQoaW50ZXJuYWxSZWplY3QsIHByb21pc2UsIHN0YXRlKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gUHJvbWlzZUNvbnN0cnVjdG9yIHx8IEMgPT09IFByb21pc2VXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG5cbiAgaWYgKCFJU19QVVJFICYmIHR5cGVvZiBOYXRpdmVQcm9taXNlID09ICdmdW5jdGlvbicpIHtcbiAgICBuYXRpdmVUaGVuID0gTmF0aXZlUHJvbWlzZS5wcm90b3R5cGUudGhlbjtcblxuICAgIC8vIHdyYXAgbmF0aXZlIFByb21pc2UjdGhlbiBmb3IgbmF0aXZlIGFzeW5jIGZ1bmN0aW9uc1xuICAgIHJlZGVmaW5lKE5hdGl2ZVByb21pc2UucHJvdG90eXBlLCAndGhlbicsIGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZUNvbnN0cnVjdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbmF0aXZlVGhlbi5jYWxsKHRoYXQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjQwXG4gICAgfSwgeyB1bnNhZmU6IHRydWUgfSk7XG5cbiAgICAvLyB3cmFwIGZldGNoIHJlc3VsdFxuICAgIGlmICh0eXBlb2YgJGZldGNoID09ICdmdW5jdGlvbicpICQoeyBnbG9iYWw6IHRydWUsIGVudW1lcmFibGU6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIGZldGNoOiBmdW5jdGlvbiBmZXRjaChpbnB1dCAvKiAsIGluaXQgKi8pIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKFByb21pc2VDb25zdHJ1Y3RvciwgJGZldGNoLmFwcGx5KGdsb2JhbCwgYXJndW1lbnRzKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuJCh7IGdsb2JhbDogdHJ1ZSwgd3JhcDogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBQcm9taXNlOiBQcm9taXNlQ29uc3RydWN0b3Jcbn0pO1xuXG5zZXRUb1N0cmluZ1RhZyhQcm9taXNlQ29uc3RydWN0b3IsIFBST01JU0UsIGZhbHNlLCB0cnVlKTtcbnNldFNwZWNpZXMoUFJPTUlTRSk7XG5cblByb21pc2VXcmFwcGVyID0gZ2V0QnVpbHRJbihQUk9NSVNFKTtcblxuLy8gc3RhdGljc1xuJCh7IHRhcmdldDogUFJPTUlTRSwgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBgUHJvbWlzZS5yZWplY3RgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wcm9taXNlLnJlamVjdFxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICBjYXBhYmlsaXR5LnJlamVjdC5jYWxsKHVuZGVmaW5lZCwgcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cbiQoeyB0YXJnZXQ6IFBST01JU0UsIHN0YXQ6IHRydWUsIGZvcmNlZDogSVNfUFVSRSB8fCBGT1JDRUQgfSwge1xuICAvLyBgUHJvbWlzZS5yZXNvbHZlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcHJvbWlzZS5yZXNvbHZlXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShJU19QVVJFICYmIHRoaXMgPT09IFByb21pc2VXcmFwcGVyID8gUHJvbWlzZUNvbnN0cnVjdG9yIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuXG4kKHsgdGFyZ2V0OiBQUk9NSVNFLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IElOQ09SUkVDVF9JVEVSQVRJT04gfSwge1xuICAvLyBgUHJvbWlzZS5hbGxgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wcm9taXNlLmFsbFxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHByb21pc2VSZXNvbHZlID0gYUZ1bmN0aW9uKEMucmVzb2x2ZSk7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGl0ZXJhdGUoaXRlcmFibGUsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGNvdW50ZXIrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgICRwcm9taXNlUmVzb2x2ZS5jYWxsKEMsIHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikgcmVqZWN0KHJlc3VsdC52YWx1ZSk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gYFByb21pc2UucmFjZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UucmFjZVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkcHJvbWlzZVJlc29sdmUgPSBhRnVuY3Rpb24oQy5yZXNvbHZlKTtcbiAgICAgIGl0ZXJhdGUoaXRlcmFibGUsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgICRwcm9taXNlUmVzb2x2ZS5jYWxsKEMsIHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikgcmVqZWN0KHJlc3VsdC52YWx1ZSk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2hhckF0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy1tdWx0aWJ5dGUnKS5jaGFyQXQ7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGRlZmluZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1pdGVyYXRvcicpO1xuXG52YXIgU1RSSU5HX0lURVJBVE9SID0gJ1N0cmluZyBJdGVyYXRvcic7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihTVFJJTkdfSVRFUkFUT1IpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLUBAaXRlcmF0b3JcbmRlZmluZUl0ZXJhdG9yKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICB0eXBlOiBTVFJJTkdfSVRFUkFUT1IsXG4gICAgc3RyaW5nOiBTdHJpbmcoaXRlcmF0ZWQpLFxuICAgIGluZGV4OiAwXG4gIH0pO1xuLy8gYCVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy0lc3RyaW5naXRlcmF0b3Jwcm90b3R5cGUlLm5leHRcbn0sIGZ1bmN0aW9uIG5leHQoKSB7XG4gIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gIHZhciBzdHJpbmcgPSBzdGF0ZS5zdHJpbmc7XG4gIHZhciBpbmRleCA9IHN0YXRlLmluZGV4O1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBzdHJpbmcubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gY2hhckF0KHN0cmluZywgaW5kZXgpO1xuICBzdGF0ZS5pbmRleCArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC5hc3luY0l0ZXJhdG9yYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLmFzeW5jaXRlcmF0b3JcbmRlZmluZVdlbGxLbm93blN5bWJvbCgnYXN5bmNJdGVyYXRvcicpO1xuIiwiLy8gZW1wdHlcbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wuaGFzSW5zdGFuY2VgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wuaGFzaW5zdGFuY2VcbmRlZmluZVdlbGxLbm93blN5bWJvbCgnaGFzSW5zdGFuY2UnKTtcbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLmlzY29uY2F0c3ByZWFkYWJsZVxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wuaXRlcmF0b3JgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wuaXRlcmF0b3JcbmRlZmluZVdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBuYXRpdmVPYmplY3RDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLWV4dGVybmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93cmFwcGVkLXdlbGwta25vd24tc3ltYm9sJyk7XG52YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG5cbnZhciBISURERU4gPSBzaGFyZWRLZXkoJ2hpZGRlbicpO1xudmFyIFNZTUJPTCA9ICdTeW1ib2wnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKFNZTUJPTCk7XG52YXIgT2JqZWN0UHJvdG90eXBlID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIG5hdGl2ZUpTT05TdHJpbmdpZnkgPSBKU09OICYmIEpTT04uc3RyaW5naWZ5O1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xudmFyIG5hdGl2ZURlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzID0gZ2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsLmY7XG52YXIgbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUgPSBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90b3R5cGVTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgU3RyaW5nVG9TeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3RyaW5nLXRvLXN5bWJvbC1yZWdpc3RyeScpO1xudmFyIFN5bWJvbFRvU3RyaW5nUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC10by1zdHJpbmctcmVnaXN0cnknKTtcbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIFVTRV9TRVRURVIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0Q3JlYXRlKG5hdGl2ZURlZmluZVByb3BlcnR5KHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIHZhciBPYmplY3RQcm90b3R5cGVEZXNjcmlwdG9yID0gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdFByb3RvdHlwZSwgUCk7XG4gIGlmIChPYmplY3RQcm90b3R5cGVEZXNjcmlwdG9yKSBkZWxldGUgT2JqZWN0UHJvdG90eXBlW1BdO1xuICBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgaWYgKE9iamVjdFByb3RvdHlwZURlc2NyaXB0b3IgJiYgTyAhPT0gT2JqZWN0UHJvdG90eXBlKSB7XG4gICAgbmF0aXZlRGVmaW5lUHJvcGVydHkoT2JqZWN0UHJvdG90eXBlLCBQLCBPYmplY3RQcm90b3R5cGVEZXNjcmlwdG9yKTtcbiAgfVxufSA6IG5hdGl2ZURlZmluZVByb3BlcnR5O1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcsIGRlc2NyaXB0aW9uKSB7XG4gIHZhciBzeW1ib2wgPSBBbGxTeW1ib2xzW3RhZ10gPSBuYXRpdmVPYmplY3RDcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc2V0SW50ZXJuYWxTdGF0ZShzeW1ib2wsIHtcbiAgICB0eXBlOiBTWU1CT0wsXG4gICAgdGFnOiB0YWcsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXG4gIH0pO1xuICBpZiAoIURFU0NSSVBUT1JTKSBzeW1ib2wuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgcmV0dXJuIHN5bWJvbDtcbn07XG5cbnZhciBpc1N5bWJvbCA9IE5BVElWRV9TWU1CT0wgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChpdCkgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgaWYgKE8gPT09IE9iamVjdFByb3RvdHlwZSkgJGRlZmluZVByb3BlcnR5KE9iamVjdFByb3RvdHlwZVN5bWJvbHMsIFAsIEF0dHJpYnV0ZXMpO1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFBdHRyaWJ1dGVzLmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKE8sIEhJRERFTikpIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIEhJRERFTiwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHt9KSk7XG4gICAgICBPW0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoTywgSElEREVOKSAmJiBPW0hJRERFTl1ba2V5XSkgT1tISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSBuYXRpdmVPYmplY3RDcmVhdGUoQXR0cmlidXRlcywgeyBlbnVtZXJhYmxlOiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2NyaXB0b3IoTywga2V5LCBBdHRyaWJ1dGVzKTtcbiAgfSByZXR1cm4gbmF0aXZlRGVmaW5lUHJvcGVydHkoTywga2V5LCBBdHRyaWJ1dGVzKTtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIHByb3BlcnRpZXMgPSB0b0luZGV4ZWRPYmplY3QoUHJvcGVydGllcyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhwcm9wZXJ0aWVzKS5jb25jYXQoJGdldE93blByb3BlcnR5U3ltYm9scyhwcm9wZXJ0aWVzKSk7XG4gICRmb3JFYWNoKGtleXMsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIURFU0NSSVBUT1JTIHx8ICRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHByb3BlcnRpZXMsIGtleSkpICRkZWZpbmVQcm9wZXJ0eShPLCBrZXksIHByb3BlcnRpZXNba2V5XSk7XG4gIH0pO1xuICByZXR1cm4gTztcbn07XG5cbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IG5hdGl2ZU9iamVjdENyZWF0ZShPKSA6ICRkZWZpbmVQcm9wZXJ0aWVzKG5hdGl2ZU9iamVjdENyZWF0ZShPKSwgUHJvcGVydGllcyk7XG59O1xuXG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgUCA9IHRvUHJpbWl0aXZlKFYsIHRydWUpO1xuICB2YXIgZW51bWVyYWJsZSA9IG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodGhpcywgUCk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90b3R5cGUgJiYgaGFzKEFsbFN5bWJvbHMsIFApICYmICFoYXMoT2JqZWN0UHJvdG90eXBlU3ltYm9scywgUCkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGVudW1lcmFibGUgfHwgIWhhcyh0aGlzLCBQKSB8fCAhaGFzKEFsbFN5bWJvbHMsIFApIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtQXSA/IGVudW1lcmFibGUgOiB0cnVlO1xufTtcblxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICB2YXIgaXQgPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90b3R5cGUgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPYmplY3RQcm90b3R5cGVTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBkZXNjcmlwdG9yID0gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpO1xuICBpZiAoZGVzY3JpcHRvciAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSB7XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZGVzY3JpcHRvcjtcbn07XG5cbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICB2YXIgbmFtZXMgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzKHRvSW5kZXhlZE9iamVjdChPKSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgJGZvckVhY2gobmFtZXMsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoaGlkZGVuS2V5cywga2V5KSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhPKSB7XG4gIHZhciBJU19PQkpFQ1RfUFJPVE9UWVBFID0gTyA9PT0gT2JqZWN0UHJvdG90eXBlO1xuICB2YXIgbmFtZXMgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzKElTX09CSkVDVF9QUk9UT1RZUEUgPyBPYmplY3RQcm90b3R5cGVTeW1ib2xzIDogdG9JbmRleGVkT2JqZWN0KE8pKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICAkZm9yRWFjaChuYW1lcywgZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSAmJiAoIUlTX09CSkVDVF9QUk9UT1RZUEUgfHwgaGFzKE9iamVjdFByb3RvdHlwZSwga2V5KSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIGBTeW1ib2xgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wtY29uc3RydWN0b3JcbmlmICghTkFUSVZFX1NZTUJPTCkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3InKTtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSAhYXJndW1lbnRzLmxlbmd0aCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IFN0cmluZyhhcmd1bWVudHNbMF0pO1xuICAgIHZhciB0YWcgPSB1aWQoZGVzY3JpcHRpb24pO1xuICAgIHZhciBzZXR0ZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90b3R5cGUpIHNldHRlci5jYWxsKE9iamVjdFByb3RvdHlwZVN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzY3JpcHRvcih0aGlzLCB0YWcsIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIFVTRV9TRVRURVIpIHNldFN5bWJvbERlc2NyaXB0b3IoT2JqZWN0UHJvdG90eXBlLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6IHNldHRlciB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcsIGRlc2NyaXB0aW9uKTtcbiAgfTtcblxuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnRhZztcbiAgfSk7XG5cbiAgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgZGVmaW5lUHJvcGVydHlNb2R1bGUuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTKSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtU3ltYm9sLWRlc2NyaXB0aW9uXG4gICAgbmF0aXZlRGVmaW5lUHJvcGVydHkoJFN5bWJvbFtQUk9UT1RZUEVdLCAnZGVzY3JpcHRpb24nLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5kZXNjcmlwdGlvbjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIUlTX1BVUkUpIHtcbiAgICAgIHJlZGVmaW5lKE9iamVjdFByb3RvdHlwZSwgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB7IHVuc2FmZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlLmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdlbGxLbm93blN5bWJvbChuYW1lKSwgbmFtZSk7XG4gIH07XG59XG5cbiQoeyBnbG9iYWw6IHRydWUsIHdyYXA6IHRydWUsIGZvcmNlZDogIU5BVElWRV9TWU1CT0wsIHNoYW06ICFOQVRJVkVfU1lNQk9MIH0sIHtcbiAgU3ltYm9sOiAkU3ltYm9sXG59KTtcblxuJGZvckVhY2gob2JqZWN0S2V5cyhXZWxsS25vd25TeW1ib2xzU3RvcmUpLCBmdW5jdGlvbiAobmFtZSkge1xuICBkZWZpbmVXZWxsS25vd25TeW1ib2wobmFtZSk7XG59KTtcblxuJCh7IHRhcmdldDogU1lNQk9MLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFOQVRJVkVfU1lNQk9MIH0sIHtcbiAgLy8gYFN5bWJvbC5mb3JgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wuZm9yXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhrZXkpO1xuICAgIGlmIChoYXMoU3RyaW5nVG9TeW1ib2xSZWdpc3RyeSwgc3RyaW5nKSkgcmV0dXJuIFN0cmluZ1RvU3ltYm9sUmVnaXN0cnlbc3RyaW5nXTtcbiAgICB2YXIgc3ltYm9sID0gJFN5bWJvbChzdHJpbmcpO1xuICAgIFN0cmluZ1RvU3ltYm9sUmVnaXN0cnlbc3RyaW5nXSA9IHN5bWJvbDtcbiAgICBTeW1ib2xUb1N0cmluZ1JlZ2lzdHJ5W3N5bWJvbF0gPSBzdHJpbmc7XG4gICAgcmV0dXJuIHN5bWJvbDtcbiAgfSxcbiAgLy8gYFN5bWJvbC5rZXlGb3JgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wua2V5Zm9yXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sJyk7XG4gICAgaWYgKGhhcyhTeW1ib2xUb1N0cmluZ1JlZ2lzdHJ5LCBzeW0pKSByZXR1cm4gU3ltYm9sVG9TdHJpbmdSZWdpc3RyeVtzeW1dO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgVVNFX1NFVFRFUiA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBVU0VfU0VUVEVSID0gZmFsc2U7IH1cbn0pO1xuXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX1NZTUJPTCwgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yc1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Jcbn0pO1xuXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX1NZTUJPTCB9LCB7XG4gIC8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyBgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eXN5bWJvbHNcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gQ2hyb21lIDM4IGFuZCAzOSBgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc2AgZmFpbHMgb24gcHJpbWl0aXZlc1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzQ0M1xuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogZmFpbHMoZnVuY3Rpb24gKCkgeyBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZigxKTsgfSkgfSwge1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICAgIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZih0b09iamVjdChpdCkpO1xuICB9XG59KTtcblxuLy8gYEpTT04uc3RyaW5naWZ5YCBtZXRob2QgYmVoYXZpb3Igd2l0aCBzeW1ib2xzXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1qc29uLnN0cmluZ2lmeVxuSlNPTiAmJiAkKHsgdGFyZ2V0OiAnSlNPTicsIHN0YXQ6IHRydWUsIGZvcmNlZDogIU5BVElWRV9TWU1CT0wgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICByZXR1cm4gbmF0aXZlSlNPTlN0cmluZ2lmeShbc3ltYm9sXSkgIT0gJ1tudWxsXSdcbiAgICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgICB8fCBuYXRpdmVKU09OU3RyaW5naWZ5KHsgYTogc3ltYm9sIH0pICE9ICd7fSdcbiAgICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICAgIHx8IG5hdGl2ZUpTT05TdHJpbmdpZnkoT2JqZWN0KHN5bWJvbCkpICE9ICd7fSc7XG59KSB9LCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpbmRleCA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpbmRleCkgYXJncy5wdXNoKGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gbmF0aXZlSlNPTlN0cmluZ2lmeS5hcHBseShKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIGBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5wcm90b3R5cGUtQEB0b3ByaW1pdGl2ZVxuaWYgKCEkU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSkge1xuICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbn1cbi8vIGBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLnByb3RvdHlwZS1AQHRvc3RyaW5ndGFnXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCBTWU1CT0wpO1xuXG5oaWRkZW5LZXlzW0hJRERFTl0gPSB0cnVlO1xuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC5tYXRjaEFsbGAgd2VsbC1rbm93biBzeW1ib2xcbmRlZmluZVdlbGxLbm93blN5bWJvbCgnbWF0Y2hBbGwnKTtcbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wubWF0Y2hgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wubWF0Y2hcbmRlZmluZVdlbGxLbm93blN5bWJvbCgnbWF0Y2gnKTtcbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wucmVwbGFjZWAgd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5yZXBsYWNlXG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ3JlcGxhY2UnKTtcbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wuc2VhcmNoYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLnNlYXJjaFxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdzZWFyY2gnKTtcbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wuc3BlY2llc2Agd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5zcGVjaWVzXG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wuc3BsaXRgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wuc3BsaXRcbmRlZmluZVdlbGxLbm93blN5bWJvbCgnc3BsaXQnKTtcbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wudG9QcmltaXRpdmVgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wudG9wcmltaXRpdmVcbmRlZmluZVdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wudG9TdHJpbmdUYWdgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wudG9zdHJpbmd0YWdcbmRlZmluZVdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wudW5zY29wYWJsZXNgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wudW5zY29wYWJsZXNcbmRlZmluZVdlbGxLbm93blN5bWJvbCgndW5zY29wYWJsZXMnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgZ2V0SW50ZXJuYWxBZ2dyZWdhdGVFcnJvclN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoJ0FnZ3JlZ2F0ZUVycm9yJyk7XG5cbnZhciAkQWdncmVnYXRlRXJyb3IgPSBmdW5jdGlvbiBBZ2dyZWdhdGVFcnJvcihlcnJvcnMsIG1lc3NhZ2UpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICBpZiAoISh0aGF0IGluc3RhbmNlb2YgJEFnZ3JlZ2F0ZUVycm9yKSkgcmV0dXJuIG5ldyAkQWdncmVnYXRlRXJyb3IoZXJyb3JzLCBtZXNzYWdlKTtcbiAgaWYgKHNldFByb3RvdHlwZU9mKSB7XG4gICAgdGhhdCA9IHNldFByb3RvdHlwZU9mKG5ldyBFcnJvcihtZXNzYWdlKSwgZ2V0UHJvdG90eXBlT2YodGhhdCkpO1xuICB9XG4gIHZhciBlcnJvcnNBcnJheSA9IFtdO1xuICBpdGVyYXRlKGVycm9ycywgZXJyb3JzQXJyYXkucHVzaCwgZXJyb3JzQXJyYXkpO1xuICBpZiAoREVTQ1JJUFRPUlMpIHNldEludGVybmFsU3RhdGUodGhhdCwgeyBlcnJvcnM6IGVycm9yc0FycmF5LCB0eXBlOiAnQWdncmVnYXRlRXJyb3InIH0pO1xuICBlbHNlIHRoYXQuZXJyb3JzID0gZXJyb3JzQXJyYXk7XG4gIGlmIChtZXNzYWdlICE9PSB1bmRlZmluZWQpIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh0aGF0LCAnbWVzc2FnZScsIFN0cmluZyhtZXNzYWdlKSk7XG4gIHJldHVybiB0aGF0O1xufTtcblxuJEFnZ3JlZ2F0ZUVycm9yLnByb3RvdHlwZSA9IGNyZWF0ZShFcnJvci5wcm90b3R5cGUsIHtcbiAgY29uc3RydWN0b3I6IGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcig1LCAkQWdncmVnYXRlRXJyb3IpLFxuICBtZXNzYWdlOiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoNSwgJycpLFxuICBuYW1lOiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoNSwgJ0FnZ3JlZ2F0ZUVycm9yJyksXG4gIHRvU3RyaW5nOiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoNSwgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIG5hbWUgPSBhbk9iamVjdCh0aGlzKS5uYW1lO1xuICAgIG5hbWUgPSBuYW1lID09PSB1bmRlZmluZWQgPyAnQWdncmVnYXRlRXJyb3InIDogU3RyaW5nKG5hbWUpO1xuICAgIHZhciBtZXNzYWdlID0gdGhpcy5tZXNzYWdlO1xuICAgIG1lc3NhZ2UgPSBtZXNzYWdlID09PSB1bmRlZmluZWQgPyAnJyA6IFN0cmluZyhtZXNzYWdlKTtcbiAgICByZXR1cm4gbmFtZSArICc6ICcgKyBtZXNzYWdlO1xuICB9KVxufSk7XG5cbmlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkuZigkQWdncmVnYXRlRXJyb3IucHJvdG90eXBlLCAnZXJyb3JzJywge1xuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0SW50ZXJuYWxBZ2dyZWdhdGVFcnJvclN0YXRlKHRoaXMpLmVycm9ycztcbiAgfSxcbiAgY29uZmlndXJhYmxlOiB0cnVlXG59KTtcblxuJCh7IGdsb2JhbDogdHJ1ZSB9LCB7XG4gIEFnZ3JlZ2F0ZUVycm9yOiAkQWdncmVnYXRlRXJyb3Jcbn0pO1xuIiwiLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcbnJlcXVpcmUoJy4vZXMucHJvbWlzZS5hbGwtc2V0dGxlZC5qcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BlcmZvcm0nKTtcbnZhciBpdGVyYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUnKTtcblxudmFyIFBST01JU0VfQU5ZX0VSUk9SID0gJ05vIG9uZSBwcm9taXNlIHJlc29sdmVkJztcblxuLy8gYFByb21pc2UuYW55YCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtYW55XG4kKHsgdGFyZ2V0OiAnUHJvbWlzZScsIHN0YXQ6IHRydWUgfSwge1xuICBhbnk6IGZ1bmN0aW9uIGFueShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwcm9taXNlUmVzb2x2ZSA9IGFGdW5jdGlvbihDLnJlc29sdmUpO1xuICAgICAgdmFyIGVycm9ycyA9IFtdO1xuICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICB2YXIgYWxyZWFkeVJlc29sdmVkID0gZmFsc2U7XG4gICAgICBpdGVyYXRlKGl0ZXJhYmxlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgaW5kZXggPSBjb3VudGVyKys7XG4gICAgICAgIHZhciBhbHJlYWR5UmVqZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgZXJyb3JzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIHByb21pc2VSZXNvbHZlLmNhbGwoQywgcHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeVJlamVjdGVkIHx8IGFscmVhZHlSZXNvbHZlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlSZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlSZWplY3RlZCB8fCBhbHJlYWR5UmVzb2x2ZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5UmVqZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIGVycm9yc1tpbmRleF0gPSBlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlamVjdChuZXcgKGdldEJ1aWx0SW4oJ0FnZ3JlZ2F0ZUVycm9yJykpKGVycm9ycywgUFJPTUlTRV9BTllfRVJST1IpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlamVjdChuZXcgKGdldEJ1aWx0SW4oJ0FnZ3JlZ2F0ZUVycm9yJykpKGVycm9ycywgUFJPTUlTRV9BTllfRVJST1IpKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSByZWplY3QocmVzdWx0LnZhbHVlKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BlcmZvcm0nKTtcblxuLy8gYFByb21pc2UudHJ5YCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtdHJ5XG4kKHsgdGFyZ2V0OiAnUHJvbWlzZScsIHN0YXQ6IHRydWUgfSwge1xuICAndHJ5JzogZnVuY3Rpb24gKGNhbGxiYWNrZm4pIHtcbiAgICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mKHRoaXMpO1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGNhbGxiYWNrZm4pO1xuICAgIChyZXN1bHQuZXJyb3IgPyBwcm9taXNlQ2FwYWJpbGl0eS5yZWplY3QgOiBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlKShyZXN1bHQudmFsdWUpO1xuICAgIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wuYXN5bmNEaXNwb3NlYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtdXNpbmctc3RhdGVtZW50XG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ2FzeW5jRGlzcG9zZScpO1xuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC5kaXNwb3NlYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtdXNpbmctc3RhdGVtZW50XG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ2Rpc3Bvc2UnKTtcbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wub2JzZXJ2YWJsZWAgd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcbmRlZmluZVdlbGxLbm93blN5bWJvbCgnb2JzZXJ2YWJsZScpO1xuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC5wYXR0ZXJuTWF0Y2hgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wYXR0ZXJuLW1hdGNoaW5nXG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ3BhdHRlcm5NYXRjaCcpO1xuIiwiLy8gVE9ETzogcmVtb3ZlIGZyb20gYGNvcmUtanNANGBcbnZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbmRlZmluZVdlbGxLbm93blN5bWJvbCgncmVwbGFjZUFsbCcpO1xuIiwicmVxdWlyZSgnLi9lcy5hcnJheS5pdGVyYXRvcicpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uUHJvdG90eXBlID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgIUNvbGxlY3Rpb25Qcm90b3R5cGVbVE9fU1RSSU5HX1RBR10pIHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRywgQ09MTEVDVElPTl9OQU1FKTtcbiAgfVxuICBJdGVyYXRvcnNbQ09MTEVDVElPTl9OQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vZXMvYXJyYXkvZnJvbScpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9lcy9hcnJheS9pcy1hcnJheScpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi8uLi9lcy9hcnJheS92aXJ0dWFsL2Zvci1lYWNoJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL2VzL2luc3RhbmNlL2NvbmNhdCcpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9lcy9pbnN0YW5jZS9ldmVyeScpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9lcy9pbnN0YW5jZS9maWx0ZXInKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vZXMvaW5zdGFuY2UvZmxhdC1tYXAnKTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvcicpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9hcnJheS92aXJ0dWFsL2Zvci1lYWNoJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbnZhciBET01JdGVyYWJsZXMgPSB7XG4gIERPTVRva2VuTGlzdDogdHJ1ZSxcbiAgTm9kZUxpc3Q6IHRydWVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBvd24gPSBpdC5mb3JFYWNoO1xuICByZXR1cm4gaXQgPT09IEFycmF5UHJvdG90eXBlIHx8IChpdCBpbnN0YW5jZW9mIEFycmF5ICYmIG93biA9PT0gQXJyYXlQcm90b3R5cGUuZm9yRWFjaClcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgfHwgRE9NSXRlcmFibGVzLmhhc093blByb3BlcnR5KGNsYXNzb2YoaXQpKSA/IGZvckVhY2ggOiBvd247XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9lcy9pbnN0YW5jZS9pbmRleC1vZicpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9lcy9pbnN0YW5jZS9tYXAnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vZXMvaW5zdGFuY2Uvc2xpY2UnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vZXMvaW5zdGFuY2Uvc29tZScpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9lcy9pbnN0YW5jZS9zb3J0Jyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL2VzL2pzb24vc3RyaW5naWZ5Jyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL2VzL29iamVjdC9kZWZpbmUtcHJvcGVydGllcycpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9lcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5Jyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL2VzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vZXMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vZXMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9lcy9vYmplY3Qva2V5cycpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9lcy9wcm9taXNlJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL2VzL3N5bWJvbC9hc3luYy1pdGVyYXRvcicpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9lcy9zeW1ib2wnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWInKVsnZGVmYXVsdCddO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHNlZWs7XG52YXIgRV9FTkQgPSAnSXRlcmF0b3IgZXhoYXVzdGVkIGJlZm9yZSBzZWVrIGVuZGVkLic7XG52YXIgRV9TSE9XID0gJ0FyZ3VtZW50IDEgb2Ygc2VlayBtdXN0IHVzZSBmaWx0ZXIgTm9kZUZpbHRlci5TSE9XX1RFWFQuJztcbnZhciBFX1dIRVJFID0gJ0FyZ3VtZW50IDIgb2Ygc2VlayBtdXN0IGJlIGFuIGludGVnZXIgb3IgYSBUZXh0IE5vZGUuJztcbnZhciBET0NVTUVOVF9QT1NJVElPTl9QUkVDRURJTkcgPSAyO1xudmFyIFNIT1dfVEVYVCA9IDQ7XG52YXIgVEVYVF9OT0RFID0gMztcblxuZnVuY3Rpb24gc2VlayhpdGVyLCB3aGVyZSkge1xuICBpZiAoaXRlci53aGF0VG9TaG93ICE9PSBTSE9XX1RFWFQpIHtcbiAgICB2YXIgZXJyb3I7IC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbiAgICB0cnkge1xuICAgICAgZXJyb3IgPSBuZXcgRE9NRXhjZXB0aW9uKEVfU0hPVywgJ0ludmFsaWRTdGF0ZUVycm9yJyk7XG4gICAgfSBjYXRjaCAoX3VudXNlZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoRV9TSE9XKTtcbiAgICAgIGVycm9yLmNvZGUgPSAxMTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YWxpZFN0YXRlRXJyb3InO1xuXG4gICAgICBlcnJvci50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiSW52YWxpZFN0YXRlRXJyb3I6IFwiLmNvbmNhdChFX1NIT1cpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG4gIHZhciBjb3VudCA9IDA7XG4gIHZhciBub2RlID0gaXRlci5yZWZlcmVuY2VOb2RlO1xuICB2YXIgcHJlZGljYXRlcyA9IG51bGw7XG5cbiAgaWYgKGlzSW50ZWdlcih3aGVyZSkpIHtcbiAgICBwcmVkaWNhdGVzID0ge1xuICAgICAgZm9yd2FyZDogZnVuY3Rpb24gZm9yd2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIGNvdW50IDwgd2hlcmU7XG4gICAgICB9LFxuICAgICAgYmFja3dhcmQ6IGZ1bmN0aW9uIGJhY2t3YXJkKCkge1xuICAgICAgICByZXR1cm4gY291bnQgPiB3aGVyZSB8fCAhaXRlci5wb2ludGVyQmVmb3JlUmVmZXJlbmNlTm9kZTtcbiAgICAgIH1cbiAgICB9O1xuICB9IGVsc2UgaWYgKGlzVGV4dCh3aGVyZSkpIHtcbiAgICB2YXIgZm9yd2FyZCA9IGJlZm9yZShub2RlLCB3aGVyZSkgPyBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBub2RlICE9PSB3aGVyZTtcbiAgICB9O1xuXG4gICAgdmFyIGJhY2t3YXJkID0gZnVuY3Rpb24gYmFja3dhcmQoKSB7XG4gICAgICByZXR1cm4gbm9kZSAhPT0gd2hlcmUgfHwgIWl0ZXIucG9pbnRlckJlZm9yZVJlZmVyZW5jZU5vZGU7XG4gICAgfTtcblxuICAgIHByZWRpY2F0ZXMgPSB7XG4gICAgICBmb3J3YXJkOiBmb3J3YXJkLFxuICAgICAgYmFja3dhcmQ6IGJhY2t3YXJkXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEVfV0hFUkUpO1xuICB9XG5cbiAgd2hpbGUgKHByZWRpY2F0ZXMuZm9yd2FyZCgpKSB7XG4gICAgbm9kZSA9IGl0ZXIubmV4dE5vZGUoKTtcblxuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihFX0VORCk7XG4gICAgfVxuXG4gICAgY291bnQgKz0gbm9kZS5ub2RlVmFsdWUubGVuZ3RoO1xuICB9XG5cbiAgaWYgKGl0ZXIubmV4dE5vZGUoKSkge1xuICAgIG5vZGUgPSBpdGVyLnByZXZpb3VzTm9kZSgpO1xuICB9XG5cbiAgd2hpbGUgKHByZWRpY2F0ZXMuYmFja3dhcmQoKSkge1xuICAgIG5vZGUgPSBpdGVyLnByZXZpb3VzTm9kZSgpO1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKEVfRU5EKTtcbiAgICB9XG5cbiAgICBjb3VudCAtPSBub2RlLm5vZGVWYWx1ZS5sZW5ndGg7XG4gIH1cblxuICBpZiAoIWlzVGV4dChpdGVyLnJlZmVyZW5jZU5vZGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoRV9FTkQpO1xuICB9XG5cbiAgcmV0dXJuIGNvdW50O1xufVxuXG5mdW5jdGlvbiBpc0ludGVnZXIobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBpc0Zpbml0ZShuKSAmJiBNYXRoLmZsb29yKG4pID09PSBuO1xufVxuXG5mdW5jdGlvbiBpc1RleHQobm9kZSkge1xuICByZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gVEVYVF9OT0RFO1xufVxuXG5mdW5jdGlvbiBiZWZvcmUocmVmLCBub2RlKSB7XG4gIHJldHVybiByZWYuY29tcGFyZURvY3VtZW50UG9zaXRpb24obm9kZSkgJiBET0NVTUVOVF9QT1NJVElPTl9QUkVDRURJTkc7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBleHRlbmRcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciB0YXJnZXQgPSB7fVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB0eXBlIHsgQ3NzU2VsZWN0b3IsIE1hdGNoZXIgfSBmcm9tICdAYW5ub3RhdG9yL3NlbGVjdG9yJztcblxuaW1wb3J0IHsgb3duZXJEb2N1bWVudCB9IGZyb20gJy4vb3duZXItZG9jdW1lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ3NzU2VsZWN0b3JNYXRjaGVyKFxuICBzZWxlY3RvcjogQ3NzU2VsZWN0b3IsXG4pOiBNYXRjaGVyPFJhbmdlLCBSYW5nZT4ge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24qIG1hdGNoQWxsKHNjb3BlKSB7XG4gICAgY29uc3QgZG9jdW1lbnQgPSBvd25lckRvY3VtZW50KHNjb3BlKTtcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvci52YWx1ZSkpIHtcbiAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgIHJhbmdlLnNlbGVjdE5vZGUoZWxlbWVudCk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgc2NvcGUuaXNQb2ludEluUmFuZ2UocmFuZ2Uuc3RhcnRDb250YWluZXIsIHJhbmdlLnN0YXJ0T2Zmc2V0KSAmJlxuICAgICAgICBzY29wZS5pc1BvaW50SW5SYW5nZShyYW5nZS5lbmRDb250YWluZXIsIHJhbmdlLmVuZE9mZnNldClcbiAgICAgICkge1xuICAgICAgICB5aWVsZCByYW5nZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBvd25lckRvY3VtZW50IH0gZnJvbSAnLi9vd25lci1kb2N1bWVudCc7XG5cbi8vIFdyYXAgZWFjaCB0ZXh0IG5vZGUgaW4gYSBnaXZlbiBET00gUmFuZ2Ugd2l0aCBhIDxtYXJrPiBvciBvdGhlciBlbGVtZW50LlxuLy8gQnJlYWtzIHN0YXJ0IGFuZC9vciBlbmQgbm9kZSBpZiBuZWVkZWQuXG4vLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjbGVhbnMgdXAgdGhlIGNyZWF0ZWQgaGlnaGxpZ2h0IChub3QgYSBwZXJmZWN0IHVuZG86IHNwbGl0IHRleHQgbm9kZXMgYXJlXG4vLyBub3QgbWVyZ2VkIGFnYWluOyBpZiBkZXNpcmVkLCB5b3UgY291bGQgcnVuIHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyLm5vcm1hbGl6ZSgpIGFmdGVyd2FyZHMpLlxuLy9cbi8vIFBhcmFtZXRlcnM6XG4vLyAtIHJhbmdlOiBhIERPTSBSYW5nZSBvYmplY3QuIE5vdGUgdGhhdCBhcyBoaWdobGlnaHRpbmcgbW9kaWZpZXMgdGhlIERPTSwgdGhlIHJhbmdlIG1heSBiZVxuLy8gICB1bnVzYWJsZSBhZnRlcndhcmRzXG4vLyAtIHRhZ05hbWU6IHRoZSBlbGVtZW50IHVzZWQgdG8gd3JhcCB0ZXh0IG5vZGVzLiBEZWZhdWx0cyB0byAnbWFyaycuXG4vLyAtIGF0dHJpYnV0ZXM6IGFuIE9iamVjdCBkZWZpbmluZyBhbnkgYXR0cmlidXRlcyB0byBiZSBzZXQgb24gdGhlIHdyYXBwZXIgZWxlbWVudHMuXG5leHBvcnQgZnVuY3Rpb24gaGlnaGxpZ2h0UmFuZ2UoXG4gIHJhbmdlOiBSYW5nZSxcbiAgdGFnTmFtZSA9ICdtYXJrJyxcbiAgYXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9LFxuKTogKCkgPT4gdm9pZCB7XG4gIC8vIEZpcnN0IHB1dCBhbGwgbm9kZXMgaW4gYW4gYXJyYXkgKHNwbGl0cyBzdGFydCBhbmQgZW5kIG5vZGVzIGlmIG5lZWRlZClcbiAgY29uc3Qgbm9kZXMgPSB0ZXh0Tm9kZXNJblJhbmdlKHJhbmdlKTtcblxuICAvLyBIaWdobGlnaHQgZWFjaCBub2RlXG4gIGNvbnN0IGhpZ2hsaWdodEVsZW1lbnRzOiBIVE1MRWxlbWVudFtdID0gW107XG4gIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgIGNvbnN0IGhpZ2hsaWdodEVsZW1lbnQgPSB3cmFwTm9kZUluSGlnaGxpZ2h0KG5vZGUsIHRhZ05hbWUsIGF0dHJpYnV0ZXMpO1xuICAgIGhpZ2hsaWdodEVsZW1lbnRzLnB1c2goaGlnaGxpZ2h0RWxlbWVudCk7XG4gIH1cblxuICAvLyBSZXR1cm4gYSBmdW5jdGlvbiB0aGF0IGNsZWFucyB1cCB0aGUgaGlnaGxpZ2h0RWxlbWVudHMuXG4gIGZ1bmN0aW9uIHJlbW92ZUhpZ2hsaWdodHMoKSB7XG4gICAgLy8gUmVtb3ZlIGVhY2ggb2YgdGhlIGNyZWF0ZWQgaGlnaGxpZ2h0RWxlbWVudHMuXG4gICAgZm9yIChjb25zdCBoaWdobGlnaHRFbGVtZW50IG9mIGhpZ2hsaWdodEVsZW1lbnRzKSB7XG4gICAgICByZW1vdmVIaWdobGlnaHQoaGlnaGxpZ2h0RWxlbWVudCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZW1vdmVIaWdobGlnaHRzO1xufVxuXG4vLyBSZXR1cm4gYW4gYXJyYXkgb2YgdGhlIHRleHQgbm9kZXMgaW4gdGhlIHJhbmdlLiBTcGxpdCB0aGUgc3RhcnQgYW5kIGVuZCBub2RlcyBpZiByZXF1aXJlZC5cbmZ1bmN0aW9uIHRleHROb2Rlc0luUmFuZ2UocmFuZ2U6IFJhbmdlKTogVGV4dFtdIHtcbiAgLy8gSWYgdGhlIHN0YXJ0IG9yIGVuZCBub2RlIGlzIGEgdGV4dCBub2RlIGFuZCBvbmx5IHBhcnRseSBpbiB0aGUgcmFuZ2UsIHNwbGl0IGl0LlxuICBpZiAoaXNUZXh0Tm9kZShyYW5nZS5zdGFydENvbnRhaW5lcikgJiYgcmFuZ2Uuc3RhcnRPZmZzZXQgPiAwKSB7XG4gICAgY29uc3QgZW5kT2Zmc2V0ID0gcmFuZ2UuZW5kT2Zmc2V0OyAvLyAodGhpcyBtYXkgZ2V0IGxvc3Qgd2hlbiB0aGUgc3BsaXR0aW5nIHRoZSBub2RlKVxuICAgIGNvbnN0IGNyZWF0ZWROb2RlID0gcmFuZ2Uuc3RhcnRDb250YWluZXIuc3BsaXRUZXh0KHJhbmdlLnN0YXJ0T2Zmc2V0KTtcbiAgICBpZiAocmFuZ2UuZW5kQ29udGFpbmVyID09PSByYW5nZS5zdGFydENvbnRhaW5lcikge1xuICAgICAgLy8gSWYgdGhlIGVuZCB3YXMgaW4gdGhlIHNhbWUgY29udGFpbmVyLCBpdCB3aWxsIG5vdyBiZSBpbiB0aGUgbmV3bHkgY3JlYXRlZCBub2RlLlxuICAgICAgcmFuZ2Uuc2V0RW5kKGNyZWF0ZWROb2RlLCBlbmRPZmZzZXQgLSByYW5nZS5zdGFydE9mZnNldCk7XG4gICAgfVxuICAgIHJhbmdlLnNldFN0YXJ0KGNyZWF0ZWROb2RlLCAwKTtcbiAgfVxuICBpZiAoXG4gICAgaXNUZXh0Tm9kZShyYW5nZS5lbmRDb250YWluZXIpICYmXG4gICAgcmFuZ2UuZW5kT2Zmc2V0IDwgcmFuZ2UuZW5kQ29udGFpbmVyLmxlbmd0aFxuICApIHtcbiAgICByYW5nZS5lbmRDb250YWluZXIuc3BsaXRUZXh0KHJhbmdlLmVuZE9mZnNldCk7XG4gIH1cblxuICAvLyBDb2xsZWN0IHRoZSB0ZXh0IG5vZGVzLlxuICBjb25zdCB3YWxrZXIgPSBvd25lckRvY3VtZW50KHJhbmdlKS5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgIHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyLFxuICAgIE5vZGVGaWx0ZXIuU0hPV19URVhULFxuICAgIHtcbiAgICAgIGFjY2VwdE5vZGU6IChub2RlKSA9PlxuICAgICAgICByYW5nZS5pbnRlcnNlY3RzTm9kZShub2RlKVxuICAgICAgICAgID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUXG4gICAgICAgICAgOiBOb2RlRmlsdGVyLkZJTFRFUl9SRUpFQ1QsXG4gICAgfSxcbiAgKTtcbiAgd2Fsa2VyLmN1cnJlbnROb2RlID0gcmFuZ2Uuc3RhcnRDb250YWluZXI7XG5cbiAgLy8gLy8gT3B0aW1pc2UgYnkgc2tpcHBpbmcgbm9kZXMgdGhhdCBhcmUgZXhwbGljaXRseSBvdXRzaWRlIHRoZSByYW5nZS5cbiAgLy8gY29uc3QgTm9kZVR5cGVzV2l0aENoYXJhY3Rlck9mZnNldCA9IFtcbiAgLy8gIE5vZGUuVEVYVF9OT0RFLFxuICAvLyAgTm9kZS5QUk9DRVNTSU5HX0lOU1RSVUNUSU9OX05PREUsXG4gIC8vICBOb2RlLkNPTU1FTlRfTk9ERSxcbiAgLy8gXTtcbiAgLy8gaWYgKCFOb2RlVHlwZXNXaXRoQ2hhcmFjdGVyT2Zmc2V0LmluY2x1ZGVzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLm5vZGVUeXBlKSkge1xuICAvLyAgIGlmIChyYW5nZS5zdGFydE9mZnNldCA8IHJhbmdlLnN0YXJ0Q29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gIC8vICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSByYW5nZS5zdGFydENvbnRhaW5lci5jaGlsZE5vZGVzW3JhbmdlLnN0YXJ0T2Zmc2V0XTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgd2Fsa2VyLm5leHRTaWJsaW5nKCk7IC8vIFRPRE8gdmVyaWZ5IHRoaXMgaXMgY29ycmVjdC5cbiAgLy8gICB9XG4gIC8vIH1cblxuICBjb25zdCBub2RlczogVGV4dFtdID0gW107XG4gIGlmIChpc1RleHROb2RlKHdhbGtlci5jdXJyZW50Tm9kZSkpIG5vZGVzLnB1c2god2Fsa2VyLmN1cnJlbnROb2RlKTtcbiAgd2hpbGUgKHdhbGtlci5uZXh0Tm9kZSgpICYmIHJhbmdlLmNvbXBhcmVQb2ludCh3YWxrZXIuY3VycmVudE5vZGUsIDApICE9PSAxKVxuICAgIG5vZGVzLnB1c2god2Fsa2VyLmN1cnJlbnROb2RlIGFzIFRleHQpO1xuICByZXR1cm4gbm9kZXM7XG59XG5cbi8vIFJlcGxhY2UgW25vZGVdIHdpdGggPHRhZ05hbWUgLi4uYXR0cmlidXRlcz5bbm9kZV08L3RhZ05hbWU+XG5mdW5jdGlvbiB3cmFwTm9kZUluSGlnaGxpZ2h0KFxuICBub2RlOiBDaGlsZE5vZGUsXG4gIHRhZ05hbWU6IHN0cmluZyxcbiAgYXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbik6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgZG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQgYXMgRG9jdW1lbnQ7XG4gIGNvbnN0IGhpZ2hsaWdodEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBoaWdobGlnaHRFbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuICBjb25zdCB0ZW1wUmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICB0ZW1wUmFuZ2Uuc2VsZWN0Tm9kZShub2RlKTtcbiAgdGVtcFJhbmdlLnN1cnJvdW5kQ29udGVudHMoaGlnaGxpZ2h0RWxlbWVudCk7XG4gIHJldHVybiBoaWdobGlnaHRFbGVtZW50O1xufVxuXG4vLyBSZW1vdmUgYSBoaWdobGlnaHQgZWxlbWVudCBjcmVhdGVkIHdpdGggd3JhcE5vZGVJbkhpZ2hsaWdodC5cbmZ1bmN0aW9uIHJlbW92ZUhpZ2hsaWdodChoaWdobGlnaHRFbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAvLyBJZiBpdCBoYXMgc29tZWhvdyBiZWVuIHJlbW92ZWQgYWxyZWFkeSwgdGhlcmUgaXMgbm90aGluZyB0byBiZSBkb25lLlxuICBpZiAoIWhpZ2hsaWdodEVsZW1lbnQucGFyZW50Tm9kZSkgcmV0dXJuO1xuICBpZiAoaGlnaGxpZ2h0RWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSkge1xuICAgIGhpZ2hsaWdodEVsZW1lbnQucmVwbGFjZVdpdGgoaGlnaGxpZ2h0RWxlbWVudC5maXJzdENoaWxkIGFzIE5vZGUpO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIHRoZSBoaWdobGlnaHQgc29tZWhvdyBjb250YWlucyBtdWx0aXBsZSBub2RlcyBub3csIG1vdmUgdGhlbSBhbGwuXG4gICAgd2hpbGUgKGhpZ2hsaWdodEVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgaGlnaGxpZ2h0RWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcbiAgICAgICAgaGlnaGxpZ2h0RWxlbWVudC5maXJzdENoaWxkLFxuICAgICAgICBoaWdobGlnaHRFbGVtZW50LFxuICAgICAgKTtcbiAgICB9XG4gICAgaGlnaGxpZ2h0RWxlbWVudC5yZW1vdmUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1RleHROb2RlKG5vZGU6IE5vZGUpOiBub2RlIGlzIFRleHQge1xuICByZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREU7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgKiBmcm9tICcuL2Nzcyc7XG5leHBvcnQgKiBmcm9tICcuL3JhbmdlJztcbmV4cG9ydCAqIGZyb20gJy4vdGV4dC1xdW90ZSc7XG5leHBvcnQgKiBmcm9tICcuL2hpZ2hsaWdodC1yYW5nZSc7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gb3duZXJEb2N1bWVudChyYW5nZTogUmFuZ2UpOiBEb2N1bWVudCB7XG4gIGNvbnN0IHsgc3RhcnRDb250YWluZXIgfSA9IHJhbmdlO1xuICAvLyBub2RlLm93bmVyRG9jdW1lbnQgaXMgbnVsbCBpZmYgbm9kZSBpcyBpdHNlbGYgYSBEb2N1bWVudC5cbiAgcmV0dXJuIHN0YXJ0Q29udGFpbmVyLm93bmVyRG9jdW1lbnQgPz8gKHN0YXJ0Q29udGFpbmVyIGFzIERvY3VtZW50KTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBjYXJ0ZXNpYW5BcnJheXMgZnJvbSAnY2FydGVzaWFuJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uKiBwcm9kdWN0PFQ+KFxuICAuLi5pdGVyYWJsZXM6IEFzeW5jSXRlcmFibGU8VD5bXVxuKTogQXN5bmNHZW5lcmF0b3I8QXJyYXk8VD4sIHZvaWQsIHVuZGVmaW5lZD4ge1xuICAvLyBXZSBsaXN0ZW4gdG8gYWxsIGl0ZXJhdG9ycyBpbiBwYXJhbGxlbCwgd2hpbGUgbG9nZ2luZyBhbGwgdGhlIHZhbHVlcyB0aGV5XG4gIC8vIHByb2R1Y2UuIFdoZW5ldmVyIGFuIGl0ZXJhdG9yIHByb2R1Y2VzIGEgdmFsdWUsIHdlIHByb2R1Y2UgYW5kIHlpZWxkIGFsbFxuICAvLyBjb21iaW5hdGlvbnMgb2YgdGhhdCB2YWx1ZSB3aXRoIHRoZSBsb2dnZWQgdmFsdWVzIGZyb20gb3RoZXIgaXRlcmF0b3JzLlxuICAvLyBFdmVyeSBjb21iaW5hdGlvbiBpcyB0aHVzIG1hZGUgZXhhY3RseSBvbmNlLCBhbmQgYXMgc29vbiBhcyBpdCBpcyBrbm93bi5cblxuICBjb25zdCBpdGVyYXRvcnMgPSBpdGVyYWJsZXMubWFwKChpdGVyYWJsZSkgPT5cbiAgICBpdGVyYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSxcbiAgKTtcbiAgLy8gSW5pdGlhbGlzZSBhbiBlbXB0eSBsb2cgZm9yIGVhY2ggaXRlcmFibGUuXG4gIGNvbnN0IGxvZ3M6IFRbXVtdID0gaXRlcmFibGVzLm1hcCgoKSA9PiBbXSk7XG5cbiAgdHlwZSBOdW1iZXJlZFJlc3VsdFByb21pc2UgPSBQcm9taXNlPHtcbiAgICBuZXh0UmVzdWx0OiBJdGVyYXRvclJlc3VsdDxUPjtcbiAgICBpdGVyYWJsZU5yOiBudW1iZXI7XG4gIH0+O1xuXG4gIGZ1bmN0aW9uIG5vdE51bGwoXG4gICAgcDogTnVtYmVyZWRSZXN1bHRQcm9taXNlIHwgbnVsbCxcbiAgKTogcCBpcyBOdW1iZXJlZFJlc3VsdFByb21pc2Uge1xuICAgIHJldHVybiBwICE9PSBudWxsO1xuICB9XG5cbiAgY29uc3QgbmV4dFZhbHVlUHJvbWlzZXM6IEFycmF5PE51bWJlcmVkUmVzdWx0UHJvbWlzZSB8IG51bGw+ID0gaXRlcmF0b3JzLm1hcChcbiAgICAoaXRlcmF0b3IsIGl0ZXJhYmxlTnIpID0+XG4gICAgICBpdGVyYXRvci5uZXh0KCkudGhlbihcbiAgICAgICAgLy8gTGFiZWwgdGhlIHJlc3VsdCB3aXRoIGl0ZXJhYmxlTnIsIHRvIGtub3cgd2hpY2ggaXRlcmFibGUgcHJvZHVjZWRcbiAgICAgICAgLy8gdGhpcyB2YWx1ZSBhZnRlciBQcm9taXNlLnJhY2UgYmVsb3cuXG4gICAgICAgIChuZXh0UmVzdWx0KSA9PiAoeyBuZXh0UmVzdWx0LCBpdGVyYWJsZU5yIH0pLFxuICAgICAgKSxcbiAgKTtcblxuICAvLyBLZWVwIGxpc3RlbmluZyBhcyBsb25nIGFzIGFueSBvZiB0aGUgaXRlcmFibGVzIGlzIG5vdCB5ZXQgZXhoYXVzdGVkLlxuICB3aGlsZSAobmV4dFZhbHVlUHJvbWlzZXMuc29tZShub3ROdWxsKSkge1xuICAgIC8vIFdhaXQgdW50aWwgYW55IG9mIHRoZSBhY3RpdmUgaXRlcmF0b3JzIGhhcyBwcm9kdWNlZCBhIG5ldyB2YWx1ZS5cbiAgICBjb25zdCB7IG5leHRSZXN1bHQsIGl0ZXJhYmxlTnIgfSA9IGF3YWl0IFByb21pc2UucmFjZShcbiAgICAgIG5leHRWYWx1ZVByb21pc2VzLmZpbHRlcihub3ROdWxsKSxcbiAgICApO1xuXG4gICAgLy8gSWYgdGhpcyBpdGVyYWJsZSB3YXMgZXhoYXVzdGVkLCBzdG9wIGxpc3RlbmluZyB0byBpdCBhbmQgbW92ZSBvbi5cbiAgICBpZiAobmV4dFJlc3VsdC5kb25lID09PSB0cnVlKSB7XG4gICAgICBuZXh0VmFsdWVQcm9taXNlc1tpdGVyYWJsZU5yXSA9IG51bGw7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBQcm9kdWNlIGFsbCBjb21iaW5hdGlvbnMgb2YgdGhlIHJlY2VpdmVkIHZhbHVlIHdpdGggdGhlIGxvZ2dlZCB2YWx1ZXNcbiAgICAvLyBmcm9tIHRoZSBvdGhlciBpdGVyYWJsZXMuXG4gICAgY29uc3QgYXJyYXlzID0gWy4uLmxvZ3NdO1xuICAgIGFycmF5c1tpdGVyYWJsZU5yXSA9IFtuZXh0UmVzdWx0LnZhbHVlXTtcbiAgICBjb25zdCBjb21iaW5hdGlvbnM6IFRbXVtdID0gY2FydGVzaWFuQXJyYXlzKGFycmF5cyk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHJlY2VpdmVkIHZhbHVlIHRvIHRoZSByaWdodCBsb2cuXG4gICAgbG9nc1tpdGVyYWJsZU5yXSA9IFsuLi5sb2dzW2l0ZXJhYmxlTnJdLCBuZXh0UmVzdWx0LnZhbHVlXTtcblxuICAgIC8vIFN0YXJ0IGxpc3RlbmluZyBmb3IgdGhlIG5leHQgdmFsdWUgb2YgdGhpcyBpdGVyYWJsZS5cbiAgICBuZXh0VmFsdWVQcm9taXNlc1tpdGVyYWJsZU5yXSA9IGl0ZXJhdG9yc1tpdGVyYWJsZU5yXVxuICAgICAgLm5leHQoKVxuICAgICAgLnRoZW4oKG5leHRSZXN1bHQpID0+ICh7IG5leHRSZXN1bHQsIGl0ZXJhYmxlTnIgfSkpO1xuXG4gICAgLy8gWWllbGQgZWFjaCBvZiB0aGUgcHJvZHVjZWQgY29tYmluYXRpb25zIHNlcGFyYXRlbHkuXG4gICAgeWllbGQqIGNvbWJpbmF0aW9ucztcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9tYXRjaCc7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IE1hdGNoZXIsIFJhbmdlU2VsZWN0b3IsIFNlbGVjdG9yIH0gZnJvbSAnQGFubm90YXRvci9zZWxlY3Rvcic7XG5cbmltcG9ydCB7IG93bmVyRG9jdW1lbnQgfSBmcm9tICcuLi9vd25lci1kb2N1bWVudCc7XG5cbmltcG9ydCB7IHByb2R1Y3QgfSBmcm9tICcuL2NhcnRlc2lhbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ3JlYXRlUmFuZ2VTZWxlY3Rvck1hdGNoZXIoXG4gIGNyZWF0ZU1hdGNoZXI6IDxUIGV4dGVuZHMgU2VsZWN0b3I+KHNlbGVjdG9yOiBUKSA9PiBNYXRjaGVyPFJhbmdlLCBSYW5nZT4sXG4pOiAoc2VsZWN0b3I6IFJhbmdlU2VsZWN0b3IpID0+IE1hdGNoZXI8UmFuZ2UsIFJhbmdlPiB7XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVSYW5nZVNlbGVjdG9yTWF0Y2hlcihzZWxlY3Rvcikge1xuICAgIGNvbnN0IHN0YXJ0TWF0Y2hlciA9IGNyZWF0ZU1hdGNoZXIoc2VsZWN0b3Iuc3RhcnRTZWxlY3Rvcik7XG4gICAgY29uc3QgZW5kTWF0Y2hlciA9IGNyZWF0ZU1hdGNoZXIoc2VsZWN0b3IuZW5kU2VsZWN0b3IpO1xuXG4gICAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uKiBtYXRjaEFsbChzY29wZSkge1xuICAgICAgY29uc3Qgc3RhcnRNYXRjaGVzID0gc3RhcnRNYXRjaGVyKHNjb3BlKTtcbiAgICAgIGNvbnN0IGVuZE1hdGNoZXMgPSBlbmRNYXRjaGVyKHNjb3BlKTtcblxuICAgICAgY29uc3QgcGFpcnMgPSBwcm9kdWN0KHN0YXJ0TWF0Y2hlcywgZW5kTWF0Y2hlcyk7XG5cbiAgICAgIGZvciBhd2FpdCAoY29uc3QgW3N0YXJ0LCBlbmRdIG9mIHBhaXJzKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG93bmVyRG9jdW1lbnQoc2NvcGUpLmNyZWF0ZVJhbmdlKCk7XG5cbiAgICAgICAgcmVzdWx0LnNldFN0YXJ0KHN0YXJ0LnN0YXJ0Q29udGFpbmVyLCBzdGFydC5zdGFydE9mZnNldCk7XG4gICAgICAgIHJlc3VsdC5zZXRFbmQoZW5kLnN0YXJ0Q29udGFpbmVyLCBlbmQuc3RhcnRPZmZzZXQpO1xuXG4gICAgICAgIGlmICghcmVzdWx0LmNvbGxhcHNlZCkgeWllbGQgcmVzdWx0O1xuICAgICAgfVxuICAgIH07XG4gIH07XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc2VlayBmcm9tICdkb20tc2Vlayc7XG5pbXBvcnQgdHlwZSB7IFRleHRRdW90ZVNlbGVjdG9yIH0gZnJvbSAnQGFubm90YXRvci9zZWxlY3Rvcic7XG5cbmltcG9ydCB7IG93bmVyRG9jdW1lbnQgfSBmcm9tICcuLi9vd25lci1kb2N1bWVudCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZXNjcmliZVRleHRRdW90ZShcbiAgcmFuZ2U6IFJhbmdlLFxuICBzY29wZT86IFJhbmdlLFxuKTogUHJvbWlzZTxUZXh0UXVvdGVTZWxlY3Rvcj4ge1xuICAvLyBEZWZhdWx0IHRvIHNlYXJjaCBpbiB0aGUgd2hvbGUgZG9jdW1lbnQuXG4gIGlmIChzY29wZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgZG9jdW1lbnQgPSBvd25lckRvY3VtZW50KHJhbmdlKTtcbiAgICBzY29wZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgc2NvcGUuc2VsZWN0Tm9kZUNvbnRlbnRzKGRvY3VtZW50KTtcbiAgfVxuICByYW5nZSA9IHJhbmdlLmNsb25lUmFuZ2UoKTtcblxuICAvLyBUYWtlIHRoZSBwYXJ0IG9mIHRoZSByYW5nZSB0aGF0IGZhbGxzIHdpdGhpbiB0aGUgc2NvcGUuXG4gIGlmIChyYW5nZS5jb21wYXJlQm91bmRhcnlQb2ludHMoUmFuZ2UuU1RBUlRfVE9fU1RBUlQsIHNjb3BlKSA9PT0gLTEpXG4gICAgcmFuZ2Uuc2V0U3RhcnQoc2NvcGUuc3RhcnRDb250YWluZXIsIHNjb3BlLnN0YXJ0T2Zmc2V0KTtcbiAgaWYgKHJhbmdlLmNvbXBhcmVCb3VuZGFyeVBvaW50cyhSYW5nZS5FTkRfVE9fRU5ELCBzY29wZSkgPT09IDEpXG4gICAgcmFuZ2Uuc2V0RW5kKHNjb3BlLmVuZENvbnRhaW5lciwgc2NvcGUuZW5kT2Zmc2V0KTtcblxuICByZXR1cm4ge1xuICAgIHR5cGU6ICdUZXh0UXVvdGVTZWxlY3RvcicsXG4gICAgZXhhY3Q6IHJhbmdlLnRvU3RyaW5nKCksXG4gICAgLi4uY2FsY3VsYXRlQ29udGV4dEZvckRpc2FtYmlndWF0aW9uKHJhbmdlLCBzY29wZSksXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUNvbnRleHRGb3JEaXNhbWJpZ3VhdGlvbihcbiAgcmFuZ2U6IFJhbmdlLFxuICBzY29wZTogUmFuZ2UsXG4pOiB7IHByZWZpeD86IHN0cmluZzsgc3VmZml4Pzogc3RyaW5nIH0ge1xuICBjb25zdCBleGFjdFRleHQgPSByYW5nZS50b1N0cmluZygpO1xuICBjb25zdCBzY29wZVRleHQgPSBzY29wZS50b1N0cmluZygpO1xuICBjb25zdCB0YXJnZXRTdGFydEluZGV4ID0gZ2V0UmFuZ2VUZXh0UG9zaXRpb24ocmFuZ2UsIHNjb3BlKTtcbiAgY29uc3QgdGFyZ2V0RW5kSW5kZXggPSB0YXJnZXRTdGFydEluZGV4ICsgZXhhY3RUZXh0Lmxlbmd0aDtcblxuICAvLyBGaW5kIGFsbCBtYXRjaGVzIG9mIHRoZSB0ZXh0IGluIHRoZSBzY29wZS5cbiAgY29uc3Qgc3RyaW5nTWF0Y2hlczogbnVtYmVyW10gPSBbXTtcbiAgbGV0IGZyb21JbmRleCA9IDA7XG4gIHdoaWxlIChmcm9tSW5kZXggPD0gc2NvcGVUZXh0Lmxlbmd0aCkge1xuICAgIGNvbnN0IG1hdGNoSW5kZXggPSBzY29wZVRleHQuaW5kZXhPZihleGFjdFRleHQsIGZyb21JbmRleCk7XG4gICAgaWYgKG1hdGNoSW5kZXggPT09IC0xKSBicmVhaztcbiAgICBzdHJpbmdNYXRjaGVzLnB1c2gobWF0Y2hJbmRleCk7XG4gICAgZnJvbUluZGV4ID0gbWF0Y2hJbmRleCArIDE7XG4gIH1cblxuICAvLyBDb3VudCBmb3IgZWFjaCB1bmRlc2lyZWQgbWF0Y2ggdGhlIHJlcXVpcmVkIHByZWZpeCBhbmQgc3VmZml4IGxlbmd0aHMsIHN1Y2ggdGhhdCBlaXRoZXIgb2YgdGhlbVxuICAvLyB3b3VsZCBoYXZlIGludmFsaWRhdGVkIHRoZSBtYXRjaC5cbiAgY29uc3QgYWZmaXhMZW5ndGhQYWlyczogQXJyYXk8W251bWJlciwgbnVtYmVyXT4gPSBbXTtcbiAgZm9yIChjb25zdCBtYXRjaFN0YXJ0SW5kZXggb2Ygc3RyaW5nTWF0Y2hlcykge1xuICAgIGNvbnN0IG1hdGNoRW5kSW5kZXggPSBtYXRjaFN0YXJ0SW5kZXggKyBleGFjdFRleHQubGVuZ3RoO1xuXG4gICAgLy8gU2tpcCB0aGUgZm91bmQgbWF0Y2ggaWYgaXQgaXMgdGhlIGFjdHVhbCB0YXJnZXQuXG4gICAgaWYgKG1hdGNoU3RhcnRJbmRleCA9PT0gdGFyZ2V0U3RhcnRJbmRleCkgY29udGludWU7XG5cbiAgICAvLyBDb3VudCBob3cgbWFueSBjaGFyYWN0ZXJzIGJlZm9yZSAmIGFmdGVyIHRoZW0gdGhlIGZhbHNlIG1hdGNoIGFuZCB0YXJnZXQgaGF2ZSBpbiBjb21tb24uXG4gICAgY29uc3Qgc3VmZmljaWVudFByZWZpeExlbmd0aCA9IGNoYXJhY3RlcnNOZWVkZWRUb0JlVW5pcXVlKFxuICAgICAgc2NvcGVUZXh0LnN1YnN0cmluZygwLCB0YXJnZXRTdGFydEluZGV4KSxcbiAgICAgIHNjb3BlVGV4dC5zdWJzdHJpbmcoMCwgbWF0Y2hTdGFydEluZGV4KSxcbiAgICAgIHRydWUsXG4gICAgKTtcbiAgICBjb25zdCBzdWZmaWNpZW50U3VmZml4TGVuZ3RoID0gY2hhcmFjdGVyc05lZWRlZFRvQmVVbmlxdWUoXG4gICAgICBzY29wZVRleHQuc3Vic3RyaW5nKHRhcmdldEVuZEluZGV4KSxcbiAgICAgIHNjb3BlVGV4dC5zdWJzdHJpbmcobWF0Y2hFbmRJbmRleCksXG4gICAgICBmYWxzZSxcbiAgICApO1xuICAgIGFmZml4TGVuZ3RoUGFpcnMucHVzaChbc3VmZmljaWVudFByZWZpeExlbmd0aCwgc3VmZmljaWVudFN1ZmZpeExlbmd0aF0pO1xuICB9XG5cbiAgLy8gRmluZCB0aGUgcHJlZml4IGFuZCBzdWZmaXggdGhhdCB3b3VsZCBpbnZhbGlkYXRlIGFsbCBtaXNtYXRjaGVzLCB1c2luZyB0aGUgbWluaW1hbCBjaGFyYWN0ZXJzXG4gIC8vIGZvciBwcmVmaXggYW5kIHN1ZmZpeCBjb21iaW5lZC5cbiAgY29uc3QgW3ByZWZpeExlbmd0aCwgc3VmZml4TGVuZ3RoXSA9IG1pbmltYWxTb2x1dGlvbihhZmZpeExlbmd0aFBhaXJzKTtcbiAgY29uc3QgcHJlZml4ID0gc2NvcGVUZXh0LnN1YnN0cmluZyhcbiAgICB0YXJnZXRTdGFydEluZGV4IC0gcHJlZml4TGVuZ3RoLFxuICAgIHRhcmdldFN0YXJ0SW5kZXgsXG4gICk7XG4gIGNvbnN0IHN1ZmZpeCA9IHNjb3BlVGV4dC5zdWJzdHJpbmcoXG4gICAgdGFyZ2V0RW5kSW5kZXgsXG4gICAgdGFyZ2V0RW5kSW5kZXggKyBzdWZmaXhMZW5ndGgsXG4gICk7XG4gIHJldHVybiB7IHByZWZpeCwgc3VmZml4IH07XG59XG5cbmZ1bmN0aW9uIGNoYXJhY3RlcnNOZWVkZWRUb0JlVW5pcXVlKFxuICB0YXJnZXQ6IHN0cmluZyxcbiAgaW1wb3N0b3I6IHN0cmluZyxcbiAgcmV2ZXJzZSA9IGZhbHNlLFxuKSB7XG4gIC8vIENvdW50IGhvdyBtYW55IGNoYXJhY3RlcnMgdGhlIHR3byBzdHJpbmdzIGhhdmUgaW4gY29tbW9uLlxuICBsZXQgb3ZlcmxhcCA9IDA7XG4gIGNvbnN0IGNoYXJBdCA9IChzOiBzdHJpbmcsIGk6IG51bWJlcikgPT5cbiAgICByZXZlcnNlID8gc1tzLmxlbmd0aCAtIDEgLSBpXSA6IHNbb3ZlcmxhcF07XG4gIHdoaWxlIChcbiAgICBvdmVybGFwIDwgdGFyZ2V0Lmxlbmd0aCAmJlxuICAgIGNoYXJBdCh0YXJnZXQsIG92ZXJsYXApID09PSBjaGFyQXQoaW1wb3N0b3IsIG92ZXJsYXApXG4gIClcbiAgICBvdmVybGFwKys7XG4gIGlmIChvdmVybGFwID09PSB0YXJnZXQubGVuZ3RoKSByZXR1cm4gSW5maW5pdHk7XG4gIC8vIChubyBzdWJzdHJpbmcgb2YgdGFyZ2V0IGNhbiBtYWtlIGl0IGRpc3Rpbmd1aXNoYWJsZSBmcm9tIGl0cyBpbXBvc3RvcilcbiAgZWxzZSByZXR1cm4gb3ZlcmxhcCArIDE7XG59XG5cbmZ1bmN0aW9uIG1pbmltYWxTb2x1dGlvbihcbiAgcmVxdWlyZW1lbnRzOiBBcnJheTxbbnVtYmVyLCBudW1iZXJdPixcbik6IFtudW1iZXIsIG51bWJlcl0ge1xuICAvLyBFbnN1cmUgd2UgdHJ5IHNvbHV0aW9ucyB3aXRoIGFuIGVtcHR5IHByZWZpeCBvciBzdWZmaXguXG4gIHJlcXVpcmVtZW50cy5wdXNoKFswLCAwXSk7XG5cbiAgLy8gQnVpbGQgYWxsIHRoZSBwYWlycyBhbmQgb3JkZXIgdGhlbSBieSB0aGVpciBzdW1zLlxuICBjb25zdCBwYWlycyA9IHJlcXVpcmVtZW50cy5mbGF0TWFwKChsKSA9PlxuICAgIHJlcXVpcmVtZW50cy5tYXA8W251bWJlciwgbnVtYmVyXT4oKHIpID0+IFtsWzBdLCByWzFdXSksXG4gICk7XG4gIHBhaXJzLnNvcnQoKGEsIGIpID0+IGFbMF0gKyBhWzFdIC0gKGJbMF0gKyBiWzFdKSk7XG5cbiAgLy8gRmluZCB0aGUgZmlyc3QgcGFpciB0aGF0IHNhdGlzZmllcyBldmVyeSByZXF1aXJlbWVudC5cbiAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgY29uc3QgW3AwLCBwMV0gPSBwYWlyO1xuICAgIGlmIChyZXF1aXJlbWVudHMuZXZlcnkoKFtyMCwgcjFdKSA9PiByMCA8PSBwMCB8fCByMSA8PSBwMSkpIHtcbiAgICAgIHJldHVybiBwYWlyO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgbGFyZ2VzdCBwYWlyaW5nICh1bnJlYWNoYWJsZSkuXG4gIHJldHVybiBwYWlyc1twYWlycy5sZW5ndGggLSAxXTtcbn1cblxuLy8gR2V0IHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIHJhbmdlIHdpdGhpbiB0aGUgdGV4dCBvZiBzY29wZS5cbmZ1bmN0aW9uIGdldFJhbmdlVGV4dFBvc2l0aW9uKHJhbmdlOiBSYW5nZSwgc2NvcGU6IFJhbmdlKTogbnVtYmVyIHtcbiAgY29uc3QgaXRlciA9IG93bmVyRG9jdW1lbnQoc2NvcGUpLmNyZWF0ZU5vZGVJdGVyYXRvcihcbiAgICBzY29wZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcixcbiAgICBOb2RlRmlsdGVyLlNIT1dfVEVYVCxcbiAgICB7XG4gICAgICBhY2NlcHROb2RlKG5vZGU6IFRleHQpIHtcbiAgICAgICAgLy8gT25seSByZXZlYWwgbm9kZXMgd2l0aGluIHRoZSByYW5nZVxuICAgICAgICByZXR1cm4gc2NvcGUuaW50ZXJzZWN0c05vZGUobm9kZSlcbiAgICAgICAgICA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVFxuICAgICAgICAgIDogTm9kZUZpbHRlci5GSUxURVJfUkVKRUNUO1xuICAgICAgfSxcbiAgICB9LFxuICApO1xuICBjb25zdCBzY29wZU9mZnNldCA9IGlzVGV4dE5vZGUoc2NvcGUuc3RhcnRDb250YWluZXIpID8gc2NvcGUuc3RhcnRPZmZzZXQgOiAwO1xuICBpZiAoaXNUZXh0Tm9kZShyYW5nZS5zdGFydENvbnRhaW5lcikpXG4gICAgcmV0dXJuIHNlZWsoaXRlciwgcmFuZ2Uuc3RhcnRDb250YWluZXIpICsgcmFuZ2Uuc3RhcnRPZmZzZXQgLSBzY29wZU9mZnNldDtcbiAgZWxzZSByZXR1cm4gc2VlayhpdGVyLCBmaXJzdFRleHROb2RlSW5SYW5nZShyYW5nZSkpIC0gc2NvcGVPZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIGZpcnN0VGV4dE5vZGVJblJhbmdlKHJhbmdlOiBSYW5nZSk6IFRleHQge1xuICAvLyBGaW5kIHRoZSBmaXJzdCB0ZXh0IG5vZGUgaW5zaWRlIHRoZSByYW5nZS5cbiAgY29uc3QgaXRlciA9IG93bmVyRG9jdW1lbnQocmFuZ2UpLmNyZWF0ZU5vZGVJdGVyYXRvcihcbiAgICByYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcixcbiAgICBOb2RlRmlsdGVyLlNIT1dfVEVYVCxcbiAgICB7XG4gICAgICBhY2NlcHROb2RlKG5vZGU6IFRleHQpIHtcbiAgICAgICAgLy8gT25seSByZXZlYWwgbm9kZXMgd2l0aGluIHRoZSByYW5nZTsgYW5kIHNraXAgYW55IGVtcHR5IHRleHQgbm9kZXMuXG4gICAgICAgIHJldHVybiByYW5nZS5pbnRlcnNlY3RzTm9kZShub2RlKSAmJiBub2RlLmxlbmd0aCA+IDBcbiAgICAgICAgICA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVFxuICAgICAgICAgIDogTm9kZUZpbHRlci5GSUxURVJfUkVKRUNUO1xuICAgICAgfSxcbiAgICB9LFxuICApO1xuICBjb25zdCBub2RlID0gaXRlci5uZXh0Tm9kZSgpIGFzIFRleHQgfCBudWxsO1xuICBpZiAobm9kZSA9PT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKCdSYW5nZSBjb250YWlucyBubyB0ZXh0IG5vZGVzJyk7XG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBpc1RleHROb2RlKG5vZGU6IE5vZGUpOiBub2RlIGlzIFRleHQge1xuICByZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREU7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgKiBmcm9tICcuL2Rlc2NyaWJlJztcbmV4cG9ydCAqIGZyb20gJy4vbWF0Y2gnO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBNYXRjaGVyLCBUZXh0UXVvdGVTZWxlY3RvciB9IGZyb20gJ0Bhbm5vdGF0b3Ivc2VsZWN0b3InO1xuaW1wb3J0IHNlZWsgZnJvbSAnZG9tLXNlZWsnO1xuXG5pbXBvcnQgeyBvd25lckRvY3VtZW50IH0gZnJvbSAnLi4vb3duZXItZG9jdW1lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGV4dFF1b3RlU2VsZWN0b3JNYXRjaGVyKFxuICBzZWxlY3RvcjogVGV4dFF1b3RlU2VsZWN0b3IsXG4pOiBNYXRjaGVyPFJhbmdlLCBSYW5nZT4ge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24qIG1hdGNoQWxsKHNjb3BlKSB7XG4gICAgY29uc3QgZG9jdW1lbnQgPSBvd25lckRvY3VtZW50KHNjb3BlKTtcbiAgICBjb25zdCBzY29wZVRleHQgPSBzY29wZS50b1N0cmluZygpO1xuXG4gICAgY29uc3QgZXhhY3QgPSBzZWxlY3Rvci5leGFjdDtcbiAgICBjb25zdCBwcmVmaXggPSBzZWxlY3Rvci5wcmVmaXggfHwgJyc7XG4gICAgY29uc3Qgc3VmZml4ID0gc2VsZWN0b3Iuc3VmZml4IHx8ICcnO1xuICAgIGNvbnN0IHNlYXJjaFBhdHRlcm4gPSBwcmVmaXggKyBleGFjdCArIHN1ZmZpeDtcblxuICAgIGNvbnN0IGl0ZXIgPSBkb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IoXG4gICAgICBzY29wZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcixcbiAgICAgIE5vZGVGaWx0ZXIuU0hPV19URVhULFxuICAgICAge1xuICAgICAgICBhY2NlcHROb2RlKG5vZGU6IFRleHQpIHtcbiAgICAgICAgICAvLyBPbmx5IHJldmVhbCBub2RlcyB3aXRoaW4gdGhlIHJhbmdlOyBhbmQgc2tpcCBhbnkgZW1wdHkgdGV4dCBub2Rlcy5cbiAgICAgICAgICByZXR1cm4gc2NvcGUuaW50ZXJzZWN0c05vZGUobm9kZSkgJiYgbm9kZS5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVFxuICAgICAgICAgICAgOiBOb2RlRmlsdGVyLkZJTFRFUl9SRUpFQ1Q7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICk7XG5cbiAgICAvLyBUaGUgaW5kZXggb2YgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBpdGVyLnJlZmVyZW5jZU5vZGUgaW5zaWRlIHRoZSB0ZXh0LlxuICAgIGxldCByZWZlcmVuY2VOb2RlSW5kZXggPSBpc1RleHROb2RlKHNjb3BlLnN0YXJ0Q29udGFpbmVyKVxuICAgICAgPyAtc2NvcGUuc3RhcnRPZmZzZXRcbiAgICAgIDogMDtcblxuICAgIGxldCBmcm9tSW5kZXggPSAwO1xuICAgIHdoaWxlIChmcm9tSW5kZXggPD0gc2NvcGVUZXh0Lmxlbmd0aCkge1xuICAgICAgLy8gRmluZCB0aGUgcXVvdGUgd2l0aCBpdHMgcHJlZml4IGFuZCBzdWZmaXggaW4gdGhlIHN0cmluZy5cbiAgICAgIGNvbnN0IHBhdHRlcm5TdGFydEluZGV4ID0gc2NvcGVUZXh0LmluZGV4T2Yoc2VhcmNoUGF0dGVybiwgZnJvbUluZGV4KTtcbiAgICAgIGlmIChwYXR0ZXJuU3RhcnRJbmRleCA9PT0gLTEpIHJldHVybjtcblxuICAgICAgLy8gQ29ycmVjdCBmb3IgdGhlIHByZWZpeCBhbmQgc3VmZml4IGxlbmd0aHMuXG4gICAgICBjb25zdCBtYXRjaFN0YXJ0SW5kZXggPSBwYXR0ZXJuU3RhcnRJbmRleCArIHByZWZpeC5sZW5ndGg7XG4gICAgICBjb25zdCBtYXRjaEVuZEluZGV4ID0gbWF0Y2hTdGFydEluZGV4ICsgZXhhY3QubGVuZ3RoO1xuXG4gICAgICAvLyBDcmVhdGUgYSByYW5nZSB0byByZXByZXNlbnQgdGhpcyBleGFjdCBxdW90ZSBpbiB0aGUgZG9tLlxuICAgICAgY29uc3QgbWF0Y2ggPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuXG4gICAgICAvLyBTZWVrIHRvIHRoZSBzdGFydCBvZiB0aGUgbWF0Y2gsIG1ha2UgdGhlIHJhbmdlIHN0YXJ0IHRoZXJlLlxuICAgICAgcmVmZXJlbmNlTm9kZUluZGV4ICs9IHNlZWsoaXRlciwgbWF0Y2hTdGFydEluZGV4IC0gcmVmZXJlbmNlTm9kZUluZGV4KTtcbiAgICAgIG1hdGNoLnNldFN0YXJ0KGl0ZXIucmVmZXJlbmNlTm9kZSwgbWF0Y2hTdGFydEluZGV4IC0gcmVmZXJlbmNlTm9kZUluZGV4KTtcblxuICAgICAgLy8gU2VlayB0byB0aGUgZW5kIG9mIHRoZSBtYXRjaCwgbWFrZSB0aGUgcmFuZ2UgZW5kIHRoZXJlLlxuICAgICAgcmVmZXJlbmNlTm9kZUluZGV4ICs9IHNlZWsoaXRlciwgbWF0Y2hFbmRJbmRleCAtIHJlZmVyZW5jZU5vZGVJbmRleCk7XG4gICAgICBtYXRjaC5zZXRFbmQoaXRlci5yZWZlcmVuY2VOb2RlLCBtYXRjaEVuZEluZGV4IC0gcmVmZXJlbmNlTm9kZUluZGV4KTtcblxuICAgICAgLy8gWWllbGQgdGhlIG1hdGNoLlxuICAgICAgeWllbGQgbWF0Y2g7XG5cbiAgICAgIC8vIEFkdmFuY2UgdGhlIHNlYXJjaCBmb3J3YXJkIHRvIGRldGVjdCBtdWx0aXBsZSBvY2N1cnJlbmNlcy5cbiAgICAgIGZyb21JbmRleCA9IG1hdGNoU3RhcnRJbmRleCArIDE7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpc1RleHROb2RlKG5vZGU6IE5vZGUpOiBub2RlIGlzIFRleHQge1xuICByZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREU7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IE1hdGNoZXIsIFNlbGVjdG9yIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIHsgTWF0Y2hlciwgU2VsZWN0b3IgfSBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCB0eXBlIHsgQ3NzU2VsZWN0b3IsIFJhbmdlU2VsZWN0b3IsIFRleHRRdW90ZVNlbGVjdG9yIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUmVmaW5hYmxlPFxuICAvLyBBbnkgc3VidHlwZSBvZiBTZWxlY3RvciBjYW4gYmUgbWFkZSByZWZpbmFibGU7IGJ1dCBub3RlIHdlIGxpbWl0IHRoZSB2YWx1ZVxuICAvLyBvZiByZWZpbmVkQnkgYmVjYXVzZSBpdCBtdXN0IGFsc28gYmUgYWNjZXB0ZWQgYnkgbWF0Y2hlckNyZWF0b3IuXG4gIFRTZWxlY3RvciBleHRlbmRzIFNlbGVjdG9yICYgeyByZWZpbmVkQnk6IFRTZWxlY3RvciB9LFxuICBUU2NvcGUsXG4gIC8vIFRvIGVuYWJsZSByZWZpbmVtZW50LCB0aGUgaW1wbGVtZW50YXRpb27igJlzIE1hdGNoIG9iamVjdCBtdXN0IGJlIHVzYWJsZSBhcyBhXG4gIC8vIFNjb3BlIG9iamVjdCBpdHNlbGYuXG4gIFRNYXRjaCBleHRlbmRzIFRTY29wZVxuPihcbiAgbWF0Y2hlckNyZWF0b3I6IChzZWxlY3RvcjogVFNlbGVjdG9yKSA9PiBNYXRjaGVyPFRTY29wZSwgVE1hdGNoPixcbik6IChzZWxlY3RvcjogVFNlbGVjdG9yKSA9PiBNYXRjaGVyPFRTY29wZSwgVE1hdGNoPiB7XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVNYXRjaGVyV2l0aFJlZmluZW1lbnQoXG4gICAgc291cmNlU2VsZWN0b3I6IFRTZWxlY3RvcixcbiAgKTogTWF0Y2hlcjxUU2NvcGUsIFRNYXRjaD4ge1xuICAgIGNvbnN0IG1hdGNoZXIgPSBtYXRjaGVyQ3JlYXRvcihzb3VyY2VTZWxlY3Rvcik7XG5cbiAgICBpZiAoc291cmNlU2VsZWN0b3IucmVmaW5lZEJ5KSB7XG4gICAgICBjb25zdCByZWZpbmluZ1NlbGVjdG9yID0gY3JlYXRlTWF0Y2hlcldpdGhSZWZpbmVtZW50KFxuICAgICAgICBzb3VyY2VTZWxlY3Rvci5yZWZpbmVkQnksXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gYXN5bmMgZnVuY3Rpb24qIG1hdGNoQWxsKHNjb3BlKSB7XG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgbWF0Y2ggb2YgbWF0Y2hlcihzY29wZSkpIHtcbiAgICAgICAgICB5aWVsZCogcmVmaW5pbmdTZWxlY3RvcihtYXRjaCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXI7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZGVtby9pbmRleC5odG1sXCI7IiwiLyoqXG4gKiBAbGljZW5zZVxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyogZ2xvYmFsIGluZm8sIG1vZHVsZSwgc291cmNlLCB0YXJnZXQgKi9cblxuaW1wb3J0IHtcbiAgbWFrZUNyZWF0ZVJhbmdlU2VsZWN0b3JNYXRjaGVyLFxuICBjcmVhdGVUZXh0UXVvdGVTZWxlY3Rvck1hdGNoZXIsXG4gIGRlc2NyaWJlVGV4dFF1b3RlLFxuICBoaWdobGlnaHRSYW5nZSxcbn0gZnJvbSAnQGFubm90YXRvci9kb20nO1xuaW1wb3J0IHsgbWFrZVJlZmluYWJsZSB9IGZyb20gJ0Bhbm5vdGF0b3Ivc2VsZWN0b3InO1xuXG5jb25zdCBFWEFNUExFX1NFTEVDVE9SUyA9IFtcbiAge1xuICAgIHR5cGU6ICdUZXh0UXVvdGVTZWxlY3RvcicsXG4gICAgZXhhY3Q6ICdub3QnLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ1JhbmdlU2VsZWN0b3InLFxuICAgIHN0YXJ0U2VsZWN0b3I6IHtcbiAgICAgIHR5cGU6ICdUZXh0UXVvdGVTZWxlY3RvcicsXG4gICAgICBleGFjdDogJ2FubicsXG4gICAgfSxcbiAgICBlbmRTZWxlY3Rvcjoge1xuICAgICAgdHlwZTogJ1RleHRRdW90ZVNlbGVjdG9yJyxcbiAgICAgIGV4YWN0OiAnIScsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdUZXh0UXVvdGVTZWxlY3RvcicsXG4gICAgZXhhY3Q6ICdhbm5vdGF0ZWQgd29ybGQnLFxuICAgIHJlZmluZWRCeToge1xuICAgICAgdHlwZTogJ1RleHRRdW90ZVNlbGVjdG9yJyxcbiAgICAgIGV4YWN0OiAndGF0JyxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdHlwZTogJ1RleHRRdW90ZVNlbGVjdG9yJyxcbiAgICBleGFjdDogJ1RvIGFubm90YXRlLCBvciBub3QgdG8gYW5ub3RhdGUsJyxcbiAgICByZWZpbmVkQnk6IHtcbiAgICAgIHR5cGU6ICdSYW5nZVNlbGVjdG9yJyxcbiAgICAgIHN0YXJ0U2VsZWN0b3I6IHtcbiAgICAgICAgdHlwZTogJ1RleHRRdW90ZVNlbGVjdG9yJyxcbiAgICAgICAgZXhhY3Q6ICdUbyBhbm5vdGF0ZScsXG4gICAgICAgIHJlZmluZWRCeToge1xuICAgICAgICAgIHR5cGU6ICdUZXh0UXVvdGVTZWxlY3RvcicsXG4gICAgICAgICAgZXhhY3Q6ICdhbm5vdGF0ZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZW5kU2VsZWN0b3I6IHtcbiAgICAgICAgdHlwZTogJ1RleHRRdW90ZVNlbGVjdG9yJyxcbiAgICAgICAgZXhhY3Q6ICdub3QgdG8gYW5ub3RhdGUnLFxuICAgICAgICByZWZpbmVkQnk6IHtcbiAgICAgICAgICB0eXBlOiAnVGV4dFF1b3RlU2VsZWN0b3InLFxuICAgICAgICAgIGV4YWN0OiAnIHRvJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByZWZpbmVkQnk6IHtcbiAgICAgICAgdHlwZTogJ1RleHRRdW90ZVNlbGVjdG9yJyxcbiAgICAgICAgZXhhY3Q6ICdvJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbl07XG5cbmNvbnN0IGNsZWFudXBGdW5jdGlvbnMgPSBbXTtcblxuZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgbGV0IHJlbW92ZUhpZ2hsaWdodDtcbiAgd2hpbGUgKChyZW1vdmVIaWdobGlnaHQgPSBjbGVhbnVwRnVuY3Rpb25zLnNoaWZ0KCkpKSB7XG4gICAgcmVtb3ZlSGlnaGxpZ2h0KCk7XG4gIH1cbiAgdGFyZ2V0Lm5vcm1hbGl6ZSgpO1xuICBpbmZvLmlubmVyVGV4dCA9ICcnO1xufVxuXG5jb25zdCBjcmVhdGVNYXRjaGVyID0gbWFrZVJlZmluYWJsZSgoc2VsZWN0b3IpID0+IHtcbiAgY29uc3QgaW5uZXJDcmVhdGVNYXRjaGVyID0ge1xuICAgIFRleHRRdW90ZVNlbGVjdG9yOiBjcmVhdGVUZXh0UXVvdGVTZWxlY3Rvck1hdGNoZXIsXG4gICAgUmFuZ2VTZWxlY3RvcjogbWFrZUNyZWF0ZVJhbmdlU2VsZWN0b3JNYXRjaGVyKGNyZWF0ZU1hdGNoZXIpLFxuICB9W3NlbGVjdG9yLnR5cGVdO1xuXG4gIGlmICghaW5uZXJDcmVhdGVNYXRjaGVyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBzZWxlY3RvciB0eXBlOiAke3NlbGVjdG9yLnR5cGV9YCk7XG4gIH1cblxuICByZXR1cm4gaW5uZXJDcmVhdGVNYXRjaGVyKHNlbGVjdG9yKTtcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBhbmNob3Ioc2VsZWN0b3IpIHtcbiAgY29uc3Qgc2NvcGUgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICBzY29wZS5zZWxlY3ROb2RlQ29udGVudHModGFyZ2V0KTtcblxuICBjb25zdCBtYXRjaEFsbCA9IGNyZWF0ZU1hdGNoZXIoc2VsZWN0b3IpO1xuICBjb25zdCByYW5nZXMgPSBbXTtcblxuICBmb3IgYXdhaXQgKGNvbnN0IHJhbmdlIG9mIG1hdGNoQWxsKHNjb3BlKSkge1xuICAgIHJhbmdlcy5wdXNoKHJhbmdlKTtcbiAgfVxuXG4gIGZvciAoY29uc3QgcmFuZ2Ugb2YgcmFuZ2VzKSB7XG4gICAgY29uc3QgcmVtb3ZlSGlnaGxpZ2h0ID0gaGlnaGxpZ2h0UmFuZ2UocmFuZ2UpO1xuICAgIGNsZWFudXBGdW5jdGlvbnMucHVzaChyZW1vdmVIaWdobGlnaHQpO1xuICB9XG5cbiAgaW5mby5pbm5lclRleHQgKz0gSlNPTi5zdHJpbmdpZnkoc2VsZWN0b3IsIG51bGwsIDIpICsgJ1xcblxcbic7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG9uU2VsZWN0aW9uQ2hhbmdlKCkge1xuICBjbGVhbnVwKCk7XG4gIGNvbnN0IHNjb3BlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgc2NvcGUuc2VsZWN0Tm9kZUNvbnRlbnRzKHNvdXJjZSk7XG4gIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGlvbi5yYW5nZUNvdW50OyBpKyspIHtcbiAgICBjb25zdCByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KGkpO1xuICAgIGNvbnN0IHNlbGVjdG9yID0gYXdhaXQgZGVzY3JpYmVUZXh0UXVvdGUocmFuZ2UsIHNjb3BlKTtcbiAgICBhd2FpdCBhbmNob3Ioc2VsZWN0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uU2VsZWN0b3JFeGFtcGxlQ2xpY2soZXZlbnQpIHtcbiAgY29uc3QgZXhhbXBsZU51bWJlciA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnJ1bkV4YW1wbGU7XG4gIGlmICghZXhhbXBsZU51bWJlcikgcmV0dXJuO1xuICBjb25zdCBzZWxlY3RvciA9IEVYQU1QTEVfU0VMRUNUT1JTW2V4YW1wbGVOdW1iZXJdO1xuICBjbGVhbnVwKCk7XG4gIGFuY2hvcihzZWxlY3Rvcik7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIG9uU2VsZWN0aW9uQ2hhbmdlKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25TZWxlY3RvckV4YW1wbGVDbGljayk7XG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgb25TZWxlY3Rpb25DaGFuZ2UpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25TZWxlY3RvckV4YW1wbGVDbGljayk7XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==