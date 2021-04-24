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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs3/core-js/array/from.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/array/from.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/array/from */ \"../node_modules/core-js-pure/features/array/from.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/array/from.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/array/is-array.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/array/is-array.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/array/is-array */ \"../node_modules/core-js-pure/features/array/is-array.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/array/is-array.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/get-iterator-method */ \"../node_modules/core-js-pure/features/get-iterator-method.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/get-iterator.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/get-iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/get-iterator */ \"../node_modules/core-js-pure/features/get-iterator.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/get-iterator.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/instance/bind.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/instance/bind.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/instance/bind */ \"../node_modules/core-js-pure/features/instance/bind.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/instance/bind.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/instance/concat.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/instance/concat.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/instance/concat */ \"../node_modules/core-js-pure/features/instance/concat.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/instance/concat.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/instance/filter.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/instance/filter.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/instance/filter */ \"../node_modules/core-js-pure/features/instance/filter.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/instance/filter.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/instance/flat-map.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/instance/flat-map.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/instance/flat-map */ \"../node_modules/core-js-pure/features/instance/flat-map.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/instance/flat-map.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/instance/index-of */ \"../node_modules/core-js-pure/features/instance/index-of.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/instance/map.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/instance/map.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/instance/map */ \"../node_modules/core-js-pure/features/instance/map.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/instance/map.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/instance/reduce.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/instance/reduce.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/instance/reduce */ \"../node_modules/core-js-pure/features/instance/reduce.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/instance/reduce.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/instance/slice.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/instance/slice.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/instance/slice */ \"../node_modules/core-js-pure/features/instance/slice.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/instance/slice.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/instance/starts-with.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/instance/starts-with.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/instance/starts-with */ \"../node_modules/core-js-pure/features/instance/starts-with.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/instance/starts-with.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/is-iterable.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/is-iterable.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/is-iterable */ \"../node_modules/core-js-pure/features/is-iterable.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/is-iterable.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/json/stringify.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/json/stringify.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/json/stringify */ \"../node_modules/core-js-pure/features/json/stringify.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/json/stringify.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/map.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/map.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/map */ \"../node_modules/core-js-pure/features/map/index.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/map.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/object/create.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/object/create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/create */ \"../node_modules/core-js-pure/features/object/create.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/object/create.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/define-property */ \"../node_modules/core-js-pure/features/object/define-property.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/object/define-property.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/object/get-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/object/get-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/get-prototype-of */ \"../node_modules/core-js-pure/features/object/get-prototype-of.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/object/get-prototype-of.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/object/keys.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/object/keys.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/keys */ \"../node_modules/core-js-pure/features/object/keys.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/object/keys.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/object/set-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/object/set-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/set-prototype-of */ \"../node_modules/core-js-pure/features/object/set-prototype-of.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/object/set-prototype-of.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/promise.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/promise.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/promise */ \"../node_modules/core-js-pure/features/promise/index.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/promise.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/reflect/construct.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/reflect/construct.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/reflect/construct */ \"../node_modules/core-js-pure/features/reflect/construct.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/reflect/construct.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/symbol.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/symbol.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/symbol */ \"../node_modules/core-js-pure/features/symbol/index.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/symbol.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/symbol/async-iterator.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/symbol/async-iterator.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/symbol/async-iterator */ \"../node_modules/core-js-pure/features/symbol/async-iterator.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/symbol/async-iterator.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/symbol/iterator */ \"../node_modules/core-js-pure/features/symbol/iterator.js\");\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/AsyncGenerator.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/AsyncGenerator.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AsyncGenerator; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/promise */ \"../node_modules/@babel/runtime-corejs3/core-js/promise.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/symbol */ \"../node_modules/@babel/runtime-corejs3/core-js/symbol.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/symbol/async-iterator */ \"../node_modules/@babel/runtime-corejs3/core-js/symbol/async-iterator.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _AwaitValue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AwaitValue.js */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/AwaitValue.js\");\n\n\n\n\nfunction AsyncGenerator(gen) {\n  var front, back;\n\n  function send(key, arg) {\n    return new _babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {\n      var request = {\n        key: key,\n        arg: arg,\n        resolve: resolve,\n        reject: reject,\n        next: null\n      };\n\n      if (back) {\n        back = back.next = request;\n      } else {\n        front = back = request;\n        resume(key, arg);\n      }\n    });\n  }\n\n  function resume(key, arg) {\n    try {\n      var result = gen[key](arg);\n      var value = result.value;\n      var wrappedAwait = value instanceof _AwaitValue_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n\n      _babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) {\n        if (wrappedAwait) {\n          resume(key === \"return\" ? \"return\" : \"next\", arg);\n          return;\n        }\n\n        settle(result.done ? \"return\" : \"normal\", arg);\n      }, function (err) {\n        resume(\"throw\", err);\n      });\n    } catch (err) {\n      settle(\"throw\", err);\n    }\n  }\n\n  function settle(type, value) {\n    switch (type) {\n      case \"return\":\n        front.resolve({\n          value: value,\n          done: true\n        });\n        break;\n\n      case \"throw\":\n        front.reject(value);\n        break;\n\n      default:\n        front.resolve({\n          value: value,\n          done: false\n        });\n        break;\n    }\n\n    front = front.next;\n\n    if (front) {\n      resume(front.key, front.arg);\n    } else {\n      back = null;\n    }\n  }\n\n  this._invoke = send;\n\n  if (typeof gen[\"return\"] !== \"function\") {\n    this[\"return\"] = undefined;\n  }\n}\n\nif (typeof _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === \"function\" && _babel_runtime_corejs3_core_js_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2___default.a) {\n  AsyncGenerator.prototype[_babel_runtime_corejs3_core_js_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2___default.a] = function () {\n    return this;\n  };\n}\n\nAsyncGenerator.prototype.next = function (arg) {\n  return this._invoke(\"next\", arg);\n};\n\nAsyncGenerator.prototype[\"throw\"] = function (arg) {\n  return this._invoke(\"throw\", arg);\n};\n\nAsyncGenerator.prototype[\"return\"] = function (arg) {\n  return this._invoke(\"return\", arg);\n};\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/AsyncGenerator.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/AwaitValue.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/AwaitValue.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _AwaitValue; });\nfunction _AwaitValue(value) {\n  this.wrapped = value;\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/AwaitValue.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/arrayLikeToArray.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/arrayLikeToArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayLikeToArray; });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/arrayWithHoles.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/arrayWithHoles.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayWithHoles; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/array/is-array */ \"../node_modules/@babel/runtime-corejs3/core-js/array/is-array.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _arrayWithHoles(arr) {\n  if (_babel_runtime_corejs3_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/arrayWithHoles.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/arrayWithoutHoles.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/arrayWithoutHoles.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayWithoutHoles; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/array/is-array */ \"../node_modules/@babel/runtime-corejs3/core-js/array/is-array.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/arrayLikeToArray.js\");\n\n\nfunction _arrayWithoutHoles(arr) {\n  if (_babel_runtime_corejs3_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr);\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/assertThisInitialized.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/assertThisInitialized.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _assertThisInitialized; });\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/assertThisInitialized.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/asyncGeneratorDelegate.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/asyncGeneratorDelegate.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _asyncGeneratorDelegate; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/promise */ \"../node_modules/@babel/runtime-corejs3/core-js/promise.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/symbol */ \"../node_modules/@babel/runtime-corejs3/core-js/symbol.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/symbol/iterator */ \"../node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction _asyncGeneratorDelegate(inner, awaitWrap) {\n  var iter = {},\n      waiting = false;\n\n  function pump(key, value) {\n    waiting = true;\n    value = new _babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve) {\n      resolve(inner[key](value));\n    });\n    return {\n      done: false,\n      value: awaitWrap(value)\n    };\n  }\n\n  ;\n\n  if (typeof _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === \"function\" && _babel_runtime_corejs3_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default.a) {\n    iter[_babel_runtime_corejs3_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default.a] = function () {\n      return this;\n    };\n  }\n\n  iter.next = function (value) {\n    if (waiting) {\n      waiting = false;\n      return value;\n    }\n\n    return pump(\"next\", value);\n  };\n\n  if (typeof inner[\"throw\"] === \"function\") {\n    iter[\"throw\"] = function (value) {\n      if (waiting) {\n        waiting = false;\n        throw value;\n      }\n\n      return pump(\"throw\", value);\n    };\n  }\n\n  if (typeof inner[\"return\"] === \"function\") {\n    iter[\"return\"] = function (value) {\n      if (waiting) {\n        waiting = false;\n        return value;\n      }\n\n      return pump(\"return\", value);\n    };\n  }\n\n  return iter;\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/asyncGeneratorDelegate.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/asyncIterator.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/asyncIterator.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _asyncIterator; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/symbol */ \"../node_modules/@babel/runtime-corejs3/core-js/symbol.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/symbol/async-iterator */ \"../node_modules/@babel/runtime-corejs3/core-js/symbol/async-iterator.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/symbol/iterator */ \"../node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator-method */ \"../node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction _asyncIterator(iterable) {\n  var method;\n\n  if (typeof _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_0___default.a !== \"undefined\") {\n    if (_babel_runtime_corejs3_core_js_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1___default.a) {\n      method = iterable[_babel_runtime_corejs3_core_js_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1___default.a];\n      if (method != null) return method.call(iterable);\n    }\n\n    if (_babel_runtime_corejs3_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default.a) {\n      method = _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_3___default()(iterable);\n      if (method != null) return method.call(iterable);\n    }\n  }\n\n  throw new TypeError(\"Object is not async iterable\");\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/asyncIterator.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _asyncToGenerator; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/promise */ \"../node_modules/@babel/runtime-corejs3/core-js/promise.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    _babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new _babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _awaitAsyncGenerator; });\n/* harmony import */ var _AwaitValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AwaitValue.js */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/AwaitValue.js\");\n\nfunction _awaitAsyncGenerator(value) {\n  return new _AwaitValue_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value);\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _classCallCheck; });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/construct.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/construct.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _construct; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/reflect/construct */ \"../node_modules/@babel/runtime-corejs3/core-js/reflect/construct.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/bind */ \"../node_modules/@babel/runtime-corejs3/core-js/instance/bind.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_bind__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setPrototypeOf.js */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/setPrototypeOf.js\");\n/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/isNativeReflectConstruct.js\");\n\n\n\n\nfunction _construct(Parent, args, Class) {\n  if (Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()) {\n    _construct = _babel_runtime_corejs3_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a;\n  } else {\n    _construct = function _construct(Parent, args, Class) {\n      var a = [null];\n      a.push.apply(a, args);\n\n      var Constructor = _babel_runtime_corejs3_core_js_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(Function).apply(Parent, a);\n\n      var instance = new Constructor();\n      if (Class) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(instance, Class.prototype);\n      return instance;\n    };\n  }\n\n  return _construct.apply(null, arguments);\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/construct.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _createClass; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/define-property */ \"../node_modules/@babel/runtime-corejs3/core-js/object/define-property.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n\n    _babel_runtime_corejs3_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _defineProperty; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/define-property */ \"../node_modules/@babel/runtime-corejs3/core-js/object/define-property.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    _babel_runtime_corejs3_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _getPrototypeOf; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/set-prototype-of */ \"../node_modules/@babel/runtime-corejs3/core-js/object/set-prototype-of.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/get-prototype-of */ \"../node_modules/@babel/runtime-corejs3/core-js/object/get-prototype-of.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = _babel_runtime_corejs3_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a ? _babel_runtime_corejs3_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a : function _getPrototypeOf(o) {\n    return o.__proto__ || _babel_runtime_corejs3_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(o);\n  };\n  return _getPrototypeOf(o);\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/inherits.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/inherits.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _inherits; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/create */ \"../node_modules/@babel/runtime-corejs3/core-js/object/create.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/setPrototypeOf.js\");\n\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = _babel_runtime_corejs3_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(subClass, superClass);\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/inherits.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/isNativeFunction.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/isNativeFunction.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _isNativeFunction; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/index-of */ \"../node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_index_of__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _isNativeFunction(fn) {\n  var _context;\n\n  return _babel_runtime_corejs3_core_js_instance_index_of__WEBPACK_IMPORTED_MODULE_0___default()(_context = Function.toString.call(fn)).call(_context, \"[native code]\") !== -1;\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/isNativeFunction.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/isNativeReflectConstruct.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/isNativeReflectConstruct.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _isNativeReflectConstruct; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/reflect/construct */ \"../node_modules/@babel/runtime-corejs3/core-js/reflect/construct.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _isNativeReflectConstruct() {\n  if (typeof Reflect === \"undefined\" || !_babel_runtime_corejs3_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false;\n  if (_babel_runtime_corejs3_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false;\n  if (typeof Proxy === \"function\") return true;\n\n  try {\n    Boolean.prototype.valueOf.call(_babel_runtime_corejs3_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {}));\n    return true;\n  } catch (e) {\n    return false;\n  }\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/isNativeReflectConstruct.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/iterableToArray.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/iterableToArray.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _iterableToArray; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/symbol */ \"../node_modules/@babel/runtime-corejs3/core-js/symbol.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/is-iterable */ \"../node_modules/@babel/runtime-corejs3/core-js/is-iterable.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/array/from */ \"../node_modules/@babel/runtime-corejs3/core-js/array/from.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction _iterableToArray(iter) {\n  if (typeof _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_0___default.a !== \"undefined\" && _babel_runtime_corejs3_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter))) return _babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default()(iter);\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/iterableToArrayLimit.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/iterableToArrayLimit.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _iterableToArrayLimit; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/symbol */ \"../node_modules/@babel/runtime-corejs3/core-js/symbol.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/is-iterable */ \"../node_modules/@babel/runtime-corejs3/core-js/is-iterable.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator */ \"../node_modules/@babel/runtime-corejs3/core-js/get-iterator.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction _iterableToArrayLimit(arr, i) {\n  if (typeof _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_0___default.a === \"undefined\" || !_babel_runtime_corejs3_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(arr))) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/iterableToArrayLimit.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/nonIterableRest.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/nonIterableRest.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _nonIterableRest; });\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/nonIterableRest.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/nonIterableSpread.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/nonIterableSpread.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _nonIterableSpread; });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _possibleConstructorReturn; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/typeof */ \"../node_modules/@babel/runtime-corejs3/helpers/typeof.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/assertThisInitialized.js\");\n\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_babel_runtime_corejs3_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return Object(_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(self);\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/setPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/setPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _setPrototypeOf; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/set-prototype-of */ \"../node_modules/@babel/runtime-corejs3/core-js/object/set-prototype-of.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = _babel_runtime_corejs3_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/setPrototypeOf.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _slicedToArray; });\n/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/arrayWithHoles.js\");\n/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/iterableToArrayLimit.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/nonIterableRest.js\");\n\n\n\n\nfunction _slicedToArray(arr, i) {\n  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || Object(_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr, i) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr, i) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/toConsumableArray.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/toConsumableArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _toConsumableArray; });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/unsupportedIterableToArray.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/unsupportedIterableToArray.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _unsupportedIterableToArray; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/slice */ \"../node_modules/@babel/runtime-corejs3/core-js/instance/slice.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/array/from */ \"../node_modules/@babel/runtime-corejs3/core-js/array/from.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/arrayLikeToArray.js\");\n\n\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  var _context;\n\n  if (!o) return;\n  if (typeof o === \"string\") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(o, minLen);\n\n  var n = _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_0___default()(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);\n\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return _babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(o, minLen);\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/unsupportedIterableToArray.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _wrapAsyncGenerator; });\n/* harmony import */ var _AsyncGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncGenerator.js */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/AsyncGenerator.js\");\n\nfunction _wrapAsyncGenerator(fn) {\n  return function () {\n    return new _AsyncGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](fn.apply(this, arguments));\n  };\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/esm/wrapNativeSuper.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/esm/wrapNativeSuper.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _wrapNativeSuper; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/map */ \"../node_modules/@babel/runtime-corejs3/core-js/map.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_object_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/create */ \"../node_modules/@babel/runtime-corejs3/core-js/object/create.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_object_create__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_object_create__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getPrototypeOf.js */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setPrototypeOf.js */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/setPrototypeOf.js\");\n/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isNativeFunction.js */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/isNativeFunction.js\");\n/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./construct.js */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/construct.js\");\n\n\n\n\n\n\nfunction _wrapNativeSuper(Class) {\n  var _cache = typeof _babel_runtime_corejs3_core_js_map__WEBPACK_IMPORTED_MODULE_0___default.a === \"function\" ? new _babel_runtime_corejs3_core_js_map__WEBPACK_IMPORTED_MODULE_0___default.a() : undefined;\n\n  _wrapNativeSuper = function _wrapNativeSuper(Class) {\n    if (Class === null || !Object(_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Class)) return Class;\n\n    if (typeof Class !== \"function\") {\n      throw new TypeError(\"Super expression must either be null or a function\");\n    }\n\n    if (typeof _cache !== \"undefined\") {\n      if (_cache.has(Class)) return _cache.get(Class);\n\n      _cache.set(Class, Wrapper);\n    }\n\n    function Wrapper() {\n      return Object(_construct_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Class, arguments, Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this).constructor);\n    }\n\n    Wrapper.prototype = _babel_runtime_corejs3_core_js_object_create__WEBPACK_IMPORTED_MODULE_1___default()(Class.prototype, {\n      constructor: {\n        value: Wrapper,\n        enumerable: false,\n        writable: true,\n        configurable: true\n      }\n    });\n    return Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Wrapper, Class);\n  };\n\n  return _wrapNativeSuper(Class);\n}\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/esm/wrapNativeSuper.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/helpers/typeof.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/typeof.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Symbol = __webpack_require__(/*! @babel/runtime-corejs3/core-js/symbol */ \"../node_modules/@babel/runtime-corejs3/core-js/symbol.js\");\n\nvar _Symbol$iterator = __webpack_require__(/*! @babel/runtime-corejs3/core-js/symbol/iterator */ \"../node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js\");\n\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof _Symbol === \"function\" && typeof _Symbol$iterator === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n\n    module.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof _Symbol === \"function\" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n\n    module.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/helpers/typeof.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs3/regenerator/index.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/regenerator/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"../node_modules/regenerator-runtime/runtime.js\");\n\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime-corejs3/regenerator/index.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/array/from.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/from.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.string.iterator */ \"../node_modules/core-js-pure/modules/es.string.iterator.js\");\n__webpack_require__(/*! ../../modules/es.array.from */ \"../node_modules/core-js-pure/modules/es.array.from.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"../node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Array.from;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/array/from.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/array/is-array.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/is-array.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.array.is-array */ \"../node_modules/core-js-pure/modules/es.array.is-array.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"../node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Array.isArray;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/array/is-array.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/array/virtual/concat.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/concat.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.concat */ \"../node_modules/core-js-pure/modules/es.array.concat.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"../node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').concat;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/array/virtual/concat.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/array/virtual/filter.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/filter.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.filter */ \"../node_modules/core-js-pure/modules/es.array.filter.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"../node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').filter;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/array/virtual/filter.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/array/virtual/flat-map.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/flat-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.flat-map */ \"../node_modules/core-js-pure/modules/es.array.flat-map.js\");\n__webpack_require__(/*! ../../../modules/es.array.unscopables.flat-map */ \"../node_modules/core-js-pure/modules/es.array.unscopables.flat-map.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"../node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').flatMap;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/array/virtual/flat-map.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/array/virtual/index-of.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.index-of */ \"../node_modules/core-js-pure/modules/es.array.index-of.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"../node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').indexOf;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/array/virtual/index-of.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/array/virtual/map.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.map */ \"../node_modules/core-js-pure/modules/es.array.map.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"../node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').map;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/array/virtual/map.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/array/virtual/reduce.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/reduce.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.reduce */ \"../node_modules/core-js-pure/modules/es.array.reduce.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"../node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').reduce;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/array/virtual/reduce.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/array/virtual/slice.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/slice.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.slice */ \"../node_modules/core-js-pure/modules/es.array.slice.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"../node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').slice;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/array/virtual/slice.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/function/virtual/bind.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/es/function/virtual/bind.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.function.bind */ \"../node_modules/core-js-pure/modules/es.function.bind.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"../node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Function').bind;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/function/virtual/bind.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/instance/bind.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/bind.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bind = __webpack_require__(/*! ../function/virtual/bind */ \"../node_modules/core-js-pure/es/function/virtual/bind.js\");\n\nvar FunctionPrototype = Function.prototype;\n\nmodule.exports = function (it) {\n  var own = it.bind;\n  return it === FunctionPrototype || (it instanceof Function && own === FunctionPrototype.bind) ? bind : own;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/instance/bind.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/instance/concat.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/concat.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var concat = __webpack_require__(/*! ../array/virtual/concat */ \"../node_modules/core-js-pure/es/array/virtual/concat.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.concat;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.concat) ? concat : own;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/instance/concat.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/instance/filter.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/filter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var filter = __webpack_require__(/*! ../array/virtual/filter */ \"../node_modules/core-js-pure/es/array/virtual/filter.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.filter;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.filter) ? filter : own;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/instance/filter.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/instance/flat-map.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/flat-map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var flatMap = __webpack_require__(/*! ../array/virtual/flat-map */ \"../node_modules/core-js-pure/es/array/virtual/flat-map.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.flatMap;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.flatMap) ? flatMap : own;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/instance/flat-map.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/instance/index-of.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/index-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var indexOf = __webpack_require__(/*! ../array/virtual/index-of */ \"../node_modules/core-js-pure/es/array/virtual/index-of.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.indexOf;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.indexOf) ? indexOf : own;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/instance/index-of.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/instance/map.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/map.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = __webpack_require__(/*! ../array/virtual/map */ \"../node_modules/core-js-pure/es/array/virtual/map.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.map;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.map) ? map : own;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/instance/map.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/instance/reduce.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/reduce.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var reduce = __webpack_require__(/*! ../array/virtual/reduce */ \"../node_modules/core-js-pure/es/array/virtual/reduce.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.reduce;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.reduce) ? reduce : own;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/instance/reduce.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/instance/slice.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/slice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var slice = __webpack_require__(/*! ../array/virtual/slice */ \"../node_modules/core-js-pure/es/array/virtual/slice.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.slice;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.slice) ? slice : own;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/instance/slice.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/instance/starts-with.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/starts-with.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var startsWith = __webpack_require__(/*! ../string/virtual/starts-with */ \"../node_modules/core-js-pure/es/string/virtual/starts-with.js\");\n\nvar StringPrototype = String.prototype;\n\nmodule.exports = function (it) {\n  var own = it.startsWith;\n  return typeof it === 'string' || it === StringPrototype\n    || (it instanceof String && own === StringPrototype.startsWith) ? startsWith : own;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/instance/starts-with.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/json/stringify.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/es/json/stringify.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var core = __webpack_require__(/*! ../../internals/path */ \"../node_modules/core-js-pure/internals/path.js\");\nvar $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });\n\nmodule.exports = function stringify(it) { // eslint-disable-line no-unused-vars\n  return $JSON.stringify.apply($JSON, arguments);\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/json/stringify.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/map/index.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js-pure/es/map/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.map */ \"../node_modules/core-js-pure/modules/es.map.js\");\n__webpack_require__(/*! ../../modules/es.object.to-string */ \"../node_modules/core-js-pure/modules/es.object.to-string.js\");\n__webpack_require__(/*! ../../modules/es.string.iterator */ \"../node_modules/core-js-pure/modules/es.string.iterator.js\");\n__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ \"../node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"../node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Map;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/map/index.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/object/create.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/es/object/create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.create */ \"../node_modules/core-js-pure/modules/es.object.create.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"../node_modules/core-js-pure/internals/path.js\");\n\nvar Object = path.Object;\n\nmodule.exports = function create(P, D) {\n  return Object.create(P, D);\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/object/create.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/object/define-property.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/es/object/define-property.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.define-property */ \"../node_modules/core-js-pure/modules/es.object.define-property.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"../node_modules/core-js-pure/internals/path.js\");\n\nvar Object = path.Object;\n\nvar defineProperty = module.exports = function defineProperty(it, key, desc) {\n  return Object.defineProperty(it, key, desc);\n};\n\nif (Object.defineProperty.sham) defineProperty.sham = true;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/object/define-property.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/object/get-prototype-of.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/es/object/get-prototype-of.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.get-prototype-of */ \"../node_modules/core-js-pure/modules/es.object.get-prototype-of.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"../node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Object.getPrototypeOf;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/object/get-prototype-of.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/object/keys.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js-pure/es/object/keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.keys */ \"../node_modules/core-js-pure/modules/es.object.keys.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"../node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Object.keys;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/object/keys.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/object/set-prototype-of.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/es/object/set-prototype-of.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.set-prototype-of */ \"../node_modules/core-js-pure/modules/es.object.set-prototype-of.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"../node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Object.setPrototypeOf;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/object/set-prototype-of.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/promise/index.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/es/promise/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.to-string */ \"../node_modules/core-js-pure/modules/es.object.to-string.js\");\n__webpack_require__(/*! ../../modules/es.string.iterator */ \"../node_modules/core-js-pure/modules/es.string.iterator.js\");\n__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ \"../node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\n__webpack_require__(/*! ../../modules/es.promise */ \"../node_modules/core-js-pure/modules/es.promise.js\");\n__webpack_require__(/*! ../../modules/es.promise.all-settled */ \"../node_modules/core-js-pure/modules/es.promise.all-settled.js\");\n__webpack_require__(/*! ../../modules/es.promise.finally */ \"../node_modules/core-js-pure/modules/es.promise.finally.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"../node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Promise;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/promise/index.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/reflect/construct.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/es/reflect/construct.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.reflect.construct */ \"../node_modules/core-js-pure/modules/es.reflect.construct.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"../node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Reflect.construct;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/reflect/construct.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/string/virtual/starts-with.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/es/string/virtual/starts-with.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.string.starts-with */ \"../node_modules/core-js-pure/modules/es.string.starts-with.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"../node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('String').startsWith;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/string/virtual/starts-with.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/symbol/async-iterator.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/es/symbol/async-iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.symbol.async-iterator */ \"../node_modules/core-js-pure/modules/es.symbol.async-iterator.js\");\nvar WrappedWellKnownSymbolModule = __webpack_require__(/*! ../../internals/wrapped-well-known-symbol */ \"../node_modules/core-js-pure/internals/wrapped-well-known-symbol.js\");\n\nmodule.exports = WrappedWellKnownSymbolModule.f('asyncIterator');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/symbol/async-iterator.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/symbol/index.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js-pure/es/symbol/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.array.concat */ \"../node_modules/core-js-pure/modules/es.array.concat.js\");\n__webpack_require__(/*! ../../modules/es.object.to-string */ \"../node_modules/core-js-pure/modules/es.object.to-string.js\");\n__webpack_require__(/*! ../../modules/es.symbol */ \"../node_modules/core-js-pure/modules/es.symbol.js\");\n__webpack_require__(/*! ../../modules/es.symbol.async-iterator */ \"../node_modules/core-js-pure/modules/es.symbol.async-iterator.js\");\n__webpack_require__(/*! ../../modules/es.symbol.description */ \"../node_modules/core-js-pure/modules/es.symbol.description.js\");\n__webpack_require__(/*! ../../modules/es.symbol.has-instance */ \"../node_modules/core-js-pure/modules/es.symbol.has-instance.js\");\n__webpack_require__(/*! ../../modules/es.symbol.is-concat-spreadable */ \"../node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js\");\n__webpack_require__(/*! ../../modules/es.symbol.iterator */ \"../node_modules/core-js-pure/modules/es.symbol.iterator.js\");\n__webpack_require__(/*! ../../modules/es.symbol.match */ \"../node_modules/core-js-pure/modules/es.symbol.match.js\");\n__webpack_require__(/*! ../../modules/es.symbol.match-all */ \"../node_modules/core-js-pure/modules/es.symbol.match-all.js\");\n__webpack_require__(/*! ../../modules/es.symbol.replace */ \"../node_modules/core-js-pure/modules/es.symbol.replace.js\");\n__webpack_require__(/*! ../../modules/es.symbol.search */ \"../node_modules/core-js-pure/modules/es.symbol.search.js\");\n__webpack_require__(/*! ../../modules/es.symbol.species */ \"../node_modules/core-js-pure/modules/es.symbol.species.js\");\n__webpack_require__(/*! ../../modules/es.symbol.split */ \"../node_modules/core-js-pure/modules/es.symbol.split.js\");\n__webpack_require__(/*! ../../modules/es.symbol.to-primitive */ \"../node_modules/core-js-pure/modules/es.symbol.to-primitive.js\");\n__webpack_require__(/*! ../../modules/es.symbol.to-string-tag */ \"../node_modules/core-js-pure/modules/es.symbol.to-string-tag.js\");\n__webpack_require__(/*! ../../modules/es.symbol.unscopables */ \"../node_modules/core-js-pure/modules/es.symbol.unscopables.js\");\n__webpack_require__(/*! ../../modules/es.math.to-string-tag */ \"../node_modules/core-js-pure/modules/es.math.to-string-tag.js\");\n__webpack_require__(/*! ../../modules/es.json.to-string-tag */ \"../node_modules/core-js-pure/modules/es.json.to-string-tag.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"../node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Symbol;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/symbol/index.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/es/symbol/iterator.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/es/symbol/iterator.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.symbol.iterator */ \"../node_modules/core-js-pure/modules/es.symbol.iterator.js\");\n__webpack_require__(/*! ../../modules/es.string.iterator */ \"../node_modules/core-js-pure/modules/es.string.iterator.js\");\n__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ \"../node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\nvar WrappedWellKnownSymbolModule = __webpack_require__(/*! ../../internals/wrapped-well-known-symbol */ \"../node_modules/core-js-pure/internals/wrapped-well-known-symbol.js\");\n\nmodule.exports = WrappedWellKnownSymbolModule.f('iterator');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/es/symbol/iterator.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/array/from.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/features/array/from.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/array/from */ \"../node_modules/core-js-pure/es/array/from.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/array/from.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/array/is-array.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/features/array/is-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/array/is-array */ \"../node_modules/core-js-pure/es/array/is-array.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/array/is-array.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/get-iterator-method.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js-pure/features/get-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.dom-collections.iterator */ \"../node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\n__webpack_require__(/*! ../modules/es.string.iterator */ \"../node_modules/core-js-pure/modules/es.string.iterator.js\");\n\nmodule.exports = __webpack_require__(/*! ../internals/get-iterator-method */ \"../node_modules/core-js-pure/internals/get-iterator-method.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/get-iterator-method.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/get-iterator.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/features/get-iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.dom-collections.iterator */ \"../node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\n__webpack_require__(/*! ../modules/es.string.iterator */ \"../node_modules/core-js-pure/modules/es.string.iterator.js\");\n\nmodule.exports = __webpack_require__(/*! ../internals/get-iterator */ \"../node_modules/core-js-pure/internals/get-iterator.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/get-iterator.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/instance/bind.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/features/instance/bind.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/instance/bind */ \"../node_modules/core-js-pure/es/instance/bind.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/instance/bind.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/instance/concat.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/features/instance/concat.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/instance/concat */ \"../node_modules/core-js-pure/es/instance/concat.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/instance/concat.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/instance/filter.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/features/instance/filter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/instance/filter */ \"../node_modules/core-js-pure/es/instance/filter.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/instance/filter.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/instance/flat-map.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/features/instance/flat-map.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/instance/flat-map */ \"../node_modules/core-js-pure/es/instance/flat-map.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/instance/flat-map.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/instance/index-of.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/features/instance/index-of.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/instance/index-of */ \"../node_modules/core-js-pure/es/instance/index-of.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/instance/index-of.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/instance/map.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/features/instance/map.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/instance/map */ \"../node_modules/core-js-pure/es/instance/map.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/instance/map.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/instance/reduce.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/features/instance/reduce.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/instance/reduce */ \"../node_modules/core-js-pure/es/instance/reduce.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/instance/reduce.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/instance/slice.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/features/instance/slice.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/instance/slice */ \"../node_modules/core-js-pure/es/instance/slice.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/instance/slice.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/instance/starts-with.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/features/instance/starts-with.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/instance/starts-with */ \"../node_modules/core-js-pure/es/instance/starts-with.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/instance/starts-with.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/is-iterable.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/features/is-iterable.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.dom-collections.iterator */ \"../node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\n__webpack_require__(/*! ../modules/es.string.iterator */ \"../node_modules/core-js-pure/modules/es.string.iterator.js\");\n\nmodule.exports = __webpack_require__(/*! ../internals/is-iterable */ \"../node_modules/core-js-pure/internals/is-iterable.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/is-iterable.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/json/stringify.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/features/json/stringify.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/json/stringify */ \"../node_modules/core-js-pure/es/json/stringify.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/json/stringify.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/map/index.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/features/map/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/map */ \"../node_modules/core-js-pure/es/map/index.js\");\n\n__webpack_require__(/*! ../../modules/esnext.map.from */ \"../node_modules/core-js-pure/modules/esnext.map.from.js\");\n__webpack_require__(/*! ../../modules/esnext.map.of */ \"../node_modules/core-js-pure/modules/esnext.map.of.js\");\n__webpack_require__(/*! ../../modules/esnext.map.delete-all */ \"../node_modules/core-js-pure/modules/esnext.map.delete-all.js\");\n__webpack_require__(/*! ../../modules/esnext.map.every */ \"../node_modules/core-js-pure/modules/esnext.map.every.js\");\n__webpack_require__(/*! ../../modules/esnext.map.filter */ \"../node_modules/core-js-pure/modules/esnext.map.filter.js\");\n__webpack_require__(/*! ../../modules/esnext.map.find */ \"../node_modules/core-js-pure/modules/esnext.map.find.js\");\n__webpack_require__(/*! ../../modules/esnext.map.find-key */ \"../node_modules/core-js-pure/modules/esnext.map.find-key.js\");\n__webpack_require__(/*! ../../modules/esnext.map.group-by */ \"../node_modules/core-js-pure/modules/esnext.map.group-by.js\");\n__webpack_require__(/*! ../../modules/esnext.map.includes */ \"../node_modules/core-js-pure/modules/esnext.map.includes.js\");\n__webpack_require__(/*! ../../modules/esnext.map.key-by */ \"../node_modules/core-js-pure/modules/esnext.map.key-by.js\");\n__webpack_require__(/*! ../../modules/esnext.map.key-of */ \"../node_modules/core-js-pure/modules/esnext.map.key-of.js\");\n__webpack_require__(/*! ../../modules/esnext.map.map-keys */ \"../node_modules/core-js-pure/modules/esnext.map.map-keys.js\");\n__webpack_require__(/*! ../../modules/esnext.map.map-values */ \"../node_modules/core-js-pure/modules/esnext.map.map-values.js\");\n__webpack_require__(/*! ../../modules/esnext.map.merge */ \"../node_modules/core-js-pure/modules/esnext.map.merge.js\");\n__webpack_require__(/*! ../../modules/esnext.map.reduce */ \"../node_modules/core-js-pure/modules/esnext.map.reduce.js\");\n__webpack_require__(/*! ../../modules/esnext.map.some */ \"../node_modules/core-js-pure/modules/esnext.map.some.js\");\n__webpack_require__(/*! ../../modules/esnext.map.update */ \"../node_modules/core-js-pure/modules/esnext.map.update.js\");\n// TODO: remove from `core-js@4`\n__webpack_require__(/*! ../../modules/esnext.map.update-or-insert */ \"../node_modules/core-js-pure/modules/esnext.map.update-or-insert.js\");\n__webpack_require__(/*! ../../modules/esnext.map.upsert */ \"../node_modules/core-js-pure/modules/esnext.map.upsert.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/map/index.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/object/create.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/features/object/create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/object/create */ \"../node_modules/core-js-pure/es/object/create.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/object/create.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/object/define-property.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js-pure/features/object/define-property.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/object/define-property */ \"../node_modules/core-js-pure/es/object/define-property.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/object/define-property.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/object/get-prototype-of.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js-pure/features/object/get-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/object/get-prototype-of */ \"../node_modules/core-js-pure/es/object/get-prototype-of.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/object/get-prototype-of.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/object/keys.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/features/object/keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/object/keys */ \"../node_modules/core-js-pure/es/object/keys.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/object/keys.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/object/set-prototype-of.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js-pure/features/object/set-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/object/set-prototype-of */ \"../node_modules/core-js-pure/es/object/set-prototype-of.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/object/set-prototype-of.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/promise/index.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/features/promise/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/promise */ \"../node_modules/core-js-pure/es/promise/index.js\");\n\n__webpack_require__(/*! ../../modules/esnext.aggregate-error */ \"../node_modules/core-js-pure/modules/esnext.aggregate-error.js\");\n// TODO: Remove from `core-js@4`\n__webpack_require__(/*! ../../modules/esnext.promise.all-settled */ \"../node_modules/core-js-pure/modules/esnext.promise.all-settled.js\");\n__webpack_require__(/*! ../../modules/esnext.promise.try */ \"../node_modules/core-js-pure/modules/esnext.promise.try.js\");\n__webpack_require__(/*! ../../modules/esnext.promise.any */ \"../node_modules/core-js-pure/modules/esnext.promise.any.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/promise/index.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/reflect/construct.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/features/reflect/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/reflect/construct */ \"../node_modules/core-js-pure/es/reflect/construct.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/reflect/construct.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/symbol/async-iterator.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js-pure/features/symbol/async-iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/symbol/async-iterator */ \"../node_modules/core-js-pure/es/symbol/async-iterator.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/symbol/async-iterator.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/symbol/index.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/features/symbol/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/symbol */ \"../node_modules/core-js-pure/es/symbol/index.js\");\n\n__webpack_require__(/*! ../../modules/esnext.symbol.async-dispose */ \"../node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js\");\n__webpack_require__(/*! ../../modules/esnext.symbol.dispose */ \"../node_modules/core-js-pure/modules/esnext.symbol.dispose.js\");\n__webpack_require__(/*! ../../modules/esnext.symbol.observable */ \"../node_modules/core-js-pure/modules/esnext.symbol.observable.js\");\n__webpack_require__(/*! ../../modules/esnext.symbol.pattern-match */ \"../node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js\");\n__webpack_require__(/*! ../../modules/esnext.symbol.replace-all */ \"../node_modules/core-js-pure/modules/esnext.symbol.replace-all.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/symbol/index.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/features/symbol/iterator.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/features/symbol/iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/symbol/iterator */ \"../node_modules/core-js-pure/es/symbol/iterator.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/features/symbol/iterator.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/a-function.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/a-function.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/a-function.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/a-possible-prototype.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/a-possible-prototype.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../node_modules/core-js-pure/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it) && it !== null) {\n    throw TypeError(\"Can't set \" + String(it) + ' as a prototype');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/a-possible-prototype.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/add-to-unscopables.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/add-to-unscopables.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/add-to-unscopables.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/an-instance.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/an-instance.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it, Constructor, name) {\n  if (!(it instanceof Constructor)) {\n    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/an-instance.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/an-object.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/an-object.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../node_modules/core-js-pure/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/an-object.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/array-from.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/array-from.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"../node_modules/core-js-pure/internals/bind-context.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../node_modules/core-js-pure/internals/to-object.js\");\nvar callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ \"../node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js\");\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"../node_modules/core-js-pure/internals/is-array-iterator-method.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../node_modules/core-js-pure/internals/to-length.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"../node_modules/core-js-pure/internals/create-property.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"../node_modules/core-js-pure/internals/get-iterator-method.js\");\n\n// `Array.from` method implementation\n// https://tc39.github.io/ecma262/#sec-array.from\nmodule.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n  var O = toObject(arrayLike);\n  var C = typeof this == 'function' ? this : Array;\n  var argumentsLength = arguments.length;\n  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;\n  var mapping = mapfn !== undefined;\n  var index = 0;\n  var iteratorMethod = getIteratorMethod(O);\n  var length, result, step, iterator, next;\n  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);\n  // if the target is not iterable or it's an array with the default iterator - use a simple case\n  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {\n    iterator = iteratorMethod.call(O);\n    next = iterator.next;\n    result = new C();\n    for (;!(step = next.call(iterator)).done; index++) {\n      createProperty(result, index, mapping\n        ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)\n        : step.value\n      );\n    }\n  } else {\n    length = toLength(O.length);\n    result = new C(length);\n    for (;length > index; index++) {\n      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);\n    }\n  }\n  result.length = index;\n  return result;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/array-from.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/array-includes.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/array-includes.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../node_modules/core-js-pure/internals/to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"../node_modules/core-js-pure/internals/to-absolute-index.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/array-includes.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/array-iteration.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/array-iteration.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bind = __webpack_require__(/*! ../internals/bind-context */ \"../node_modules/core-js-pure/internals/bind-context.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"../node_modules/core-js-pure/internals/indexed-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../node_modules/core-js-pure/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../node_modules/core-js-pure/internals/to-length.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"../node_modules/core-js-pure/internals/array-species-create.js\");\n\nvar push = [].push;\n\n// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var value, result;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n          case 3: return true;              // some\n          case 5: return value;             // find\n          case 6: return index;             // findIndex\n          case 2: push.call(target, value); // filter\n        } else if (IS_EVERY) return false;  // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6)\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/array-iteration.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/array-method-has-species-support.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/array-method-has-species-support.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../node_modules/core-js-pure/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ \"../node_modules/core-js-pure/internals/v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (METHOD_NAME) {\n  // We can't use this feature detection in V8 since it causes\n  // deoptimization and serious performance degradation\n  // https://github.com/zloirock/core-js/issues/677\n  return V8_VERSION >= 51 || !fails(function () {\n    var array = [];\n    var constructor = array.constructor = {};\n    constructor[SPECIES] = function () {\n      return { foo: 1 };\n    };\n    return array[METHOD_NAME](Boolean).foo !== 1;\n  });\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/array-method-has-species-support.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/array-reduce.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/array-reduce.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"../node_modules/core-js-pure/internals/a-function.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../node_modules/core-js-pure/internals/to-object.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"../node_modules/core-js-pure/internals/indexed-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../node_modules/core-js-pure/internals/to-length.js\");\n\n// `Array.prototype.{ reduce, reduceRight }` methods implementation\nvar createMethod = function (IS_RIGHT) {\n  return function (that, callbackfn, argumentsLength, memo) {\n    aFunction(callbackfn);\n    var O = toObject(that);\n    var self = IndexedObject(O);\n    var length = toLength(O.length);\n    var index = IS_RIGHT ? length - 1 : 0;\n    var i = IS_RIGHT ? -1 : 1;\n    if (argumentsLength < 2) while (true) {\n      if (index in self) {\n        memo = self[index];\n        index += i;\n        break;\n      }\n      index += i;\n      if (IS_RIGHT ? index < 0 : length <= index) {\n        throw TypeError('Reduce of empty array with no initial value');\n      }\n    }\n    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {\n      memo = callbackfn(memo, self[index], index, O);\n    }\n    return memo;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.reduce` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce\n  left: createMethod(false),\n  // `Array.prototype.reduceRight` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright\n  right: createMethod(true)\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/array-reduce.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/array-species-create.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/array-species-create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../node_modules/core-js-pure/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"../node_modules/core-js-pure/internals/is-array.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `ArraySpeciesCreate` abstract operation\n// https://tc39.github.io/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray, length) {\n  var C;\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/array-species-create.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/bind-context.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/bind-context.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"../node_modules/core-js-pure/internals/a-function.js\");\n\n// optional / simple context binding\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 0: return function () {\n      return fn.call(that);\n    };\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/bind-context.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\n\n// call something on iterator step with safe closing on error\nmodule.exports = function (iterator, fn, value, ENTRIES) {\n  try {\n    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (error) {\n    var returnMethod = iterator['return'];\n    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));\n    throw error;\n  }\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/check-correctness-of-iteration.js":
/*!********************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/check-correctness-of-iteration.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var called = 0;\n  var iteratorWithReturn = {\n    next: function () {\n      return { done: !!called++ };\n    },\n    'return': function () {\n      SAFE_CLOSING = true;\n    }\n  };\n  iteratorWithReturn[ITERATOR] = function () {\n    return this;\n  };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(iteratorWithReturn, function () { throw 2; });\n} catch (error) { /* empty */ }\n\nmodule.exports = function (exec, SKIP_CLOSING) {\n  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;\n  var ITERATION_SUPPORT = false;\n  try {\n    var object = {};\n    object[ITERATOR] = function () {\n      return {\n        next: function () {\n          return { done: ITERATION_SUPPORT = true };\n        }\n      };\n    };\n    exec(object);\n  } catch (error) { /* empty */ }\n  return ITERATION_SUPPORT;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/check-correctness-of-iteration.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/classof-raw.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/classof-raw.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/classof-raw.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/classof.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/classof.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"../node_modules/core-js-pure/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n// ES3 wrong here\nvar CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) { /* empty */ }\n};\n\n// getting tag from ES6+ `Object.prototype.toString`\nmodule.exports = function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag\n    // builtinTag case\n    : CORRECT_ARGUMENTS ? classofRaw(O)\n    // ES3 arguments fallback\n    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/classof.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/collection-delete-all.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/collection-delete-all.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../node_modules/core-js-pure/internals/a-function.js\");\n\n// https://github.com/tc39/collection-methods\nmodule.exports = function (/* ...elements */) {\n  var collection = anObject(this);\n  var remover = aFunction(collection['delete']);\n  var allDeleted = true;\n  var wasDeleted;\n  for (var k = 0, len = arguments.length; k < len; k++) {\n    wasDeleted = remover.call(collection, arguments[k]);\n    allDeleted = allDeleted && wasDeleted;\n  }\n  return !!allDeleted;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/collection-delete-all.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/collection-from.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/collection-from.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-setmap-offrom/\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../node_modules/core-js-pure/internals/a-function.js\");\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"../node_modules/core-js-pure/internals/bind-context.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"../node_modules/core-js-pure/internals/iterate.js\");\n\nmodule.exports = function from(source /* , mapFn, thisArg */) {\n  var length = arguments.length;\n  var mapFn = length > 1 ? arguments[1] : undefined;\n  var mapping, A, n, boundFunction;\n  aFunction(this);\n  mapping = mapFn !== undefined;\n  if (mapping) aFunction(mapFn);\n  if (source == undefined) return new this();\n  A = [];\n  if (mapping) {\n    n = 0;\n    boundFunction = bind(mapFn, length > 2 ? arguments[2] : undefined, 2);\n    iterate(source, function (nextItem) {\n      A.push(boundFunction(nextItem, n++));\n    });\n  } else {\n    iterate(source, A.push, A);\n  }\n  return new this(A);\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/collection-from.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/collection-of.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/collection-of.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-setmap-offrom/\nmodule.exports = function of() {\n  var length = arguments.length;\n  var A = new Array(length);\n  while (length--) A[length] = arguments[length];\n  return new this(A);\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/collection-of.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/collection-strong.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/collection-strong.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"../node_modules/core-js-pure/internals/object-define-property.js\").f;\nvar create = __webpack_require__(/*! ../internals/object-create */ \"../node_modules/core-js-pure/internals/object-create.js\");\nvar redefineAll = __webpack_require__(/*! ../internals/redefine-all */ \"../node_modules/core-js-pure/internals/redefine-all.js\");\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"../node_modules/core-js-pure/internals/bind-context.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"../node_modules/core-js-pure/internals/an-instance.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"../node_modules/core-js-pure/internals/iterate.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"../node_modules/core-js-pure/internals/define-iterator.js\");\nvar setSpecies = __webpack_require__(/*! ../internals/set-species */ \"../node_modules/core-js-pure/internals/set-species.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../node_modules/core-js-pure/internals/descriptors.js\");\nvar fastKey = __webpack_require__(/*! ../internals/internal-metadata */ \"../node_modules/core-js-pure/internals/internal-metadata.js\").fastKey;\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"../node_modules/core-js-pure/internals/internal-state.js\");\n\nvar setInternalState = InternalStateModule.set;\nvar internalStateGetterFor = InternalStateModule.getterFor;\n\nmodule.exports = {\n  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, CONSTRUCTOR_NAME);\n      setInternalState(that, {\n        type: CONSTRUCTOR_NAME,\n        index: create(null),\n        first: undefined,\n        last: undefined,\n        size: 0\n      });\n      if (!DESCRIPTORS) that.size = 0;\n      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);\n    });\n\n    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);\n\n    var define = function (that, key, value) {\n      var state = getInternalState(that);\n      var entry = getEntry(that, key);\n      var previous, index;\n      // change existing entry\n      if (entry) {\n        entry.value = value;\n      // create new entry\n      } else {\n        state.last = entry = {\n          index: index = fastKey(key, true),\n          key: key,\n          value: value,\n          previous: previous = state.last,\n          next: undefined,\n          removed: false\n        };\n        if (!state.first) state.first = entry;\n        if (previous) previous.next = entry;\n        if (DESCRIPTORS) state.size++;\n        else that.size++;\n        // add to index\n        if (index !== 'F') state.index[index] = entry;\n      } return that;\n    };\n\n    var getEntry = function (that, key) {\n      var state = getInternalState(that);\n      // fast case\n      var index = fastKey(key);\n      var entry;\n      if (index !== 'F') return state.index[index];\n      // frozen object case\n      for (entry = state.first; entry; entry = entry.next) {\n        if (entry.key == key) return entry;\n      }\n    };\n\n    redefineAll(C.prototype, {\n      // 23.1.3.1 Map.prototype.clear()\n      // 23.2.3.2 Set.prototype.clear()\n      clear: function clear() {\n        var that = this;\n        var state = getInternalState(that);\n        var data = state.index;\n        var entry = state.first;\n        while (entry) {\n          entry.removed = true;\n          if (entry.previous) entry.previous = entry.previous.next = undefined;\n          delete data[entry.index];\n          entry = entry.next;\n        }\n        state.first = state.last = undefined;\n        if (DESCRIPTORS) state.size = 0;\n        else that.size = 0;\n      },\n      // 23.1.3.3 Map.prototype.delete(key)\n      // 23.2.3.4 Set.prototype.delete(value)\n      'delete': function (key) {\n        var that = this;\n        var state = getInternalState(that);\n        var entry = getEntry(that, key);\n        if (entry) {\n          var next = entry.next;\n          var prev = entry.previous;\n          delete state.index[entry.index];\n          entry.removed = true;\n          if (prev) prev.next = next;\n          if (next) next.previous = prev;\n          if (state.first == entry) state.first = next;\n          if (state.last == entry) state.last = prev;\n          if (DESCRIPTORS) state.size--;\n          else that.size--;\n        } return !!entry;\n      },\n      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)\n      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)\n      forEach: function forEach(callbackfn /* , that = undefined */) {\n        var state = getInternalState(this);\n        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n        var entry;\n        while (entry = entry ? entry.next : state.first) {\n          boundFunction(entry.value, entry.key, this);\n          // revert to the last existing entry\n          while (entry && entry.removed) entry = entry.previous;\n        }\n      },\n      // 23.1.3.7 Map.prototype.has(key)\n      // 23.2.3.7 Set.prototype.has(value)\n      has: function has(key) {\n        return !!getEntry(this, key);\n      }\n    });\n\n    redefineAll(C.prototype, IS_MAP ? {\n      // 23.1.3.6 Map.prototype.get(key)\n      get: function get(key) {\n        var entry = getEntry(this, key);\n        return entry && entry.value;\n      },\n      // 23.1.3.9 Map.prototype.set(key, value)\n      set: function set(key, value) {\n        return define(this, key === 0 ? 0 : key, value);\n      }\n    } : {\n      // 23.2.3.1 Set.prototype.add(value)\n      add: function add(value) {\n        return define(this, value = value === 0 ? 0 : value, value);\n      }\n    });\n    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {\n      get: function () {\n        return getInternalState(this).size;\n      }\n    });\n    return C;\n  },\n  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {\n    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';\n    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);\n    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);\n    // add .keys, .values, .entries, [@@iterator]\n    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11\n    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {\n      setInternalState(this, {\n        type: ITERATOR_NAME,\n        target: iterated,\n        state: getInternalCollectionState(iterated),\n        kind: kind,\n        last: undefined\n      });\n    }, function () {\n      var state = getInternalIteratorState(this);\n      var kind = state.kind;\n      var entry = state.last;\n      // revert to the last existing entry\n      while (entry && entry.removed) entry = entry.previous;\n      // get next entry\n      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {\n        // or finish the iteration\n        state.target = undefined;\n        return { value: undefined, done: true };\n      }\n      // return step by kind\n      if (kind == 'keys') return { value: entry.key, done: false };\n      if (kind == 'values') return { value: entry.value, done: false };\n      return { value: [entry.key, entry.value], done: false };\n    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);\n\n    // add [@@species], 23.1.2.2, 23.2.2.2\n    setSpecies(CONSTRUCTOR_NAME);\n  }\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/collection-strong.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/collection.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/collection.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ./export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../node_modules/core-js-pure/internals/global.js\");\nvar InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ \"../node_modules/core-js-pure/internals/internal-metadata.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../node_modules/core-js-pure/internals/fails.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"../node_modules/core-js-pure/internals/iterate.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"../node_modules/core-js-pure/internals/an-instance.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../node_modules/core-js-pure/internals/is-object.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"../node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"../node_modules/core-js-pure/internals/object-define-property.js\").f;\nvar forEach = __webpack_require__(/*! ../internals/array-iteration */ \"../node_modules/core-js-pure/internals/array-iteration.js\").forEach;\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../node_modules/core-js-pure/internals/descriptors.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"../node_modules/core-js-pure/internals/internal-state.js\");\n\nvar setInternalState = InternalStateModule.set;\nvar internalStateGetterFor = InternalStateModule.getterFor;\n\nmodule.exports = function (CONSTRUCTOR_NAME, wrapper, common, IS_MAP, IS_WEAK) {\n  var NativeConstructor = global[CONSTRUCTOR_NAME];\n  var NativePrototype = NativeConstructor && NativeConstructor.prototype;\n  var ADDER = IS_MAP ? 'set' : 'add';\n  var exported = {};\n  var Constructor;\n\n  if (!DESCRIPTORS || typeof NativeConstructor != 'function'\n    || !(IS_WEAK || NativePrototype.forEach && !fails(function () { new NativeConstructor().entries().next(); }))\n  ) {\n    // create collection constructor\n    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);\n    InternalMetadataModule.REQUIRED = true;\n  } else {\n    Constructor = wrapper(function (target, iterable) {\n      setInternalState(anInstance(target, Constructor, CONSTRUCTOR_NAME), {\n        type: CONSTRUCTOR_NAME,\n        collection: new NativeConstructor()\n      });\n      if (iterable != undefined) iterate(iterable, target[ADDER], target, IS_MAP);\n    });\n\n    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);\n\n    forEach(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {\n      var IS_ADDER = KEY == 'add' || KEY == 'set';\n      if (KEY in NativePrototype && !(IS_WEAK && KEY == 'clear')) {\n        createNonEnumerableProperty(Constructor.prototype, KEY, function (a, b) {\n          var collection = getInternalState(this).collection;\n          if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;\n          var result = collection[KEY](a === 0 ? 0 : a, b);\n          return IS_ADDER ? this : result;\n        });\n      }\n    });\n\n    IS_WEAK || defineProperty(Constructor.prototype, 'size', {\n      get: function () {\n        return getInternalState(this).collection.size;\n      }\n    });\n  }\n\n  setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);\n\n  exported[CONSTRUCTOR_NAME] = Constructor;\n  $({ global: true, forced: true }, exported);\n\n  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);\n\n  return Constructor;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/collection.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/correct-is-regexp-logic.js":
/*!*************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/correct-is-regexp-logic.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\nmodule.exports = function (METHOD_NAME) {\n  var regexp = /./;\n  try {\n    '/./'[METHOD_NAME](regexp);\n  } catch (e) {\n    try {\n      regexp[MATCH] = false;\n      return '/./'[METHOD_NAME](regexp);\n    } catch (f) { /* empty */ }\n  } return false;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/correct-is-regexp-logic.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/correct-prototype-getter.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/correct-prototype-getter.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  function F() { /* empty */ }\n  F.prototype.constructor = null;\n  return Object.getPrototypeOf(new F()) !== F.prototype;\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/correct-prototype-getter.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/create-iterator-constructor.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/create-iterator-constructor.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ \"../node_modules/core-js-pure/internals/iterators-core.js\").IteratorPrototype;\nvar create = __webpack_require__(/*! ../internals/object-create */ \"../node_modules/core-js-pure/internals/object-create.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"../node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"../node_modules/core-js-pure/internals/iterators.js\");\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (IteratorConstructor, NAME, next) {\n  var TO_STRING_TAG = NAME + ' Iterator';\n  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });\n  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);\n  Iterators[TO_STRING_TAG] = returnThis;\n  return IteratorConstructor;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/create-iterator-constructor.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/create-non-enumerable-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/create-non-enumerable-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../node_modules/core-js-pure/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../node_modules/core-js-pure/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/create-property-descriptor.js":
/*!****************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/create-property-descriptor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/create-property-descriptor.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/create-property.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/create-property.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"../node_modules/core-js-pure/internals/to-primitive.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../node_modules/core-js-pure/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = function (object, key, value) {\n  var propertyKey = toPrimitive(key);\n  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));\n  else object[propertyKey] = value;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/create-property.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/define-iterator.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/define-iterator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ \"../node_modules/core-js-pure/internals/create-iterator-constructor.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"../node_modules/core-js-pure/internals/object-get-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"../node_modules/core-js-pure/internals/object-set-prototype-of.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"../node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"../node_modules/core-js-pure/internals/redefine.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../node_modules/core-js-pure/internals/is-pure.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"../node_modules/core-js-pure/internals/iterators.js\");\nvar IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ \"../node_modules/core-js-pure/internals/iterators-core.js\");\n\nvar IteratorPrototype = IteratorsCore.IteratorPrototype;\nvar BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;\nvar ITERATOR = wellKnownSymbol('iterator');\nvar KEYS = 'keys';\nvar VALUES = 'values';\nvar ENTRIES = 'entries';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {\n  createIteratorConstructor(IteratorConstructor, NAME, next);\n\n  var getIterationMethod = function (KIND) {\n    if (KIND === DEFAULT && defaultIterator) return defaultIterator;\n    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];\n    switch (KIND) {\n      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };\n      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };\n      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };\n    } return function () { return new IteratorConstructor(this); };\n  };\n\n  var TO_STRING_TAG = NAME + ' Iterator';\n  var INCORRECT_VALUES_NAME = false;\n  var IterablePrototype = Iterable.prototype;\n  var nativeIterator = IterablePrototype[ITERATOR]\n    || IterablePrototype['@@iterator']\n    || DEFAULT && IterablePrototype[DEFAULT];\n  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);\n  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;\n  var CurrentIteratorPrototype, methods, KEY;\n\n  // fix native\n  if (anyNativeIterator) {\n    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));\n    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {\n      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {\n        if (setPrototypeOf) {\n          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);\n        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {\n          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);\n        }\n      }\n      // Set @@toStringTag to native iterators\n      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);\n      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;\n    }\n  }\n\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {\n    INCORRECT_VALUES_NAME = true;\n    defaultIterator = function values() { return nativeIterator.call(this); };\n  }\n\n  // define iterator\n  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {\n    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);\n  }\n  Iterators[NAME] = defaultIterator;\n\n  // export additional methods\n  if (DEFAULT) {\n    methods = {\n      values: getIterationMethod(VALUES),\n      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),\n      entries: getIterationMethod(ENTRIES)\n    };\n    if (FORCED) for (KEY in methods) {\n      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {\n        redefine(IterablePrototype, KEY, methods[KEY]);\n      }\n    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);\n  }\n\n  return methods;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/define-iterator.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/define-well-known-symbol.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/define-well-known-symbol.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"../node_modules/core-js-pure/internals/path.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../node_modules/core-js-pure/internals/has.js\");\nvar wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/wrapped-well-known-symbol */ \"../node_modules/core-js-pure/internals/wrapped-well-known-symbol.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"../node_modules/core-js-pure/internals/object-define-property.js\").f;\n\nmodule.exports = function (NAME) {\n  var Symbol = path.Symbol || (path.Symbol = {});\n  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {\n    value: wrappedWellKnownSymbolModule.f(NAME)\n  });\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/define-well-known-symbol.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/descriptors.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/descriptors.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../node_modules/core-js-pure/internals/fails.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !fails(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/descriptors.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/document-create-element.js":
/*!*************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/document-create-element.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../node_modules/core-js-pure/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../node_modules/core-js-pure/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/document-create-element.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/dom-iterables.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/dom-iterables.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/dom-iterables.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/entry-virtual.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/entry-virtual.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"../node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = function (CONSTRUCTOR) {\n  return path[CONSTRUCTOR + 'Prototype'];\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/entry-virtual.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/enum-bug-keys.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/enum-bug-keys.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/enum-bug-keys.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/export.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/export.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"../node_modules/core-js-pure/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\").f;\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"../node_modules/core-js-pure/internals/is-forced.js\");\nvar path = __webpack_require__(/*! ../internals/path */ \"../node_modules/core-js-pure/internals/path.js\");\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"../node_modules/core-js-pure/internals/bind-context.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../node_modules/core-js-pure/internals/has.js\");\n\nvar wrapConstructor = function (NativeConstructor) {\n  var Wrapper = function (a, b, c) {\n    if (this instanceof NativeConstructor) {\n      switch (arguments.length) {\n        case 0: return new NativeConstructor();\n        case 1: return new NativeConstructor(a);\n        case 2: return new NativeConstructor(a, b);\n      } return new NativeConstructor(a, b, c);\n    } return NativeConstructor.apply(this, arguments);\n  };\n  Wrapper.prototype = NativeConstructor.prototype;\n  return Wrapper;\n};\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var PROTO = options.proto;\n\n  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;\n\n  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});\n  var targetPrototype = target.prototype;\n\n  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;\n  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;\n\n  for (key in source) {\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contains in native\n    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);\n\n    targetProperty = target[key];\n\n    if (USE_NATIVE) if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(nativeSource, key);\n      nativeProperty = descriptor && descriptor.value;\n    } else nativeProperty = nativeSource[key];\n\n    // export native or implementation\n    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];\n\n    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;\n\n    // bind timers to global for call from export context\n    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);\n    // wrap global constructors for prevent changs in this version\n    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);\n    // make static versions for prototype methods\n    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);\n    // default case\n    else resultProperty = sourceProperty;\n\n    // add a flag to not completely full polyfills\n    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(resultProperty, 'sham', true);\n    }\n\n    target[key] = resultProperty;\n\n    if (PROTO) {\n      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';\n      if (!has(path, VIRTUAL_PROTOTYPE)) {\n        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});\n      }\n      // export virtual prototype methods\n      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;\n      // export real prototype methods\n      if (options.real && targetPrototype && !targetPrototype[key]) {\n        createNonEnumerableProperty(targetPrototype, key, sourceProperty);\n      }\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/export.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/fails.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js-pure/internals/fails.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/fails.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/flatten-into-array.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/flatten-into-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"../node_modules/core-js-pure/internals/is-array.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../node_modules/core-js-pure/internals/to-length.js\");\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"../node_modules/core-js-pure/internals/bind-context.js\");\n\n// `FlattenIntoArray` abstract operation\n// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray\nvar flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {\n  var targetIndex = start;\n  var sourceIndex = 0;\n  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;\n  var element;\n\n  while (sourceIndex < sourceLen) {\n    if (sourceIndex in source) {\n      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];\n\n      if (depth > 0 && isArray(element)) {\n        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;\n      } else {\n        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');\n        target[targetIndex] = element;\n      }\n\n      targetIndex++;\n    }\n    sourceIndex++;\n  }\n  return targetIndex;\n};\n\nmodule.exports = flattenIntoArray;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/flatten-into-array.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/freezing.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/freezing.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  return Object.isExtensible(Object.preventExtensions({}));\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/freezing.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/function-bind.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/function-bind.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../node_modules/core-js-pure/internals/a-function.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../node_modules/core-js-pure/internals/is-object.js\");\n\nvar slice = [].slice;\nvar factories = {};\n\nvar construct = function (C, argsLength, args) {\n  if (!(argsLength in factories)) {\n    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';\n    // eslint-disable-next-line no-new-func\n    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');\n  } return factories[argsLength](C, args);\n};\n\n// `Function.prototype.bind` method implementation\n// https://tc39.github.io/ecma262/#sec-function.prototype.bind\nmodule.exports = Function.bind || function bind(that /* , ...args */) {\n  var fn = aFunction(this);\n  var partArgs = slice.call(arguments, 1);\n  var boundFunction = function bound(/* args... */) {\n    var args = partArgs.concat(slice.call(arguments));\n    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);\n  };\n  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;\n  return boundFunction;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/function-bind.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/function-to-string.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/function-to-string.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"../node_modules/core-js-pure/internals/shared.js\");\n\nmodule.exports = shared('native-function-to-string', Function.toString);\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/function-to-string.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/get-built-in.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/get-built-in.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"../node_modules/core-js-pure/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../node_modules/core-js-pure/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/get-built-in.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/get-iterator-method.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/get-iterator-method.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof */ \"../node_modules/core-js-pure/internals/classof.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"../node_modules/core-js-pure/internals/iterators.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/get-iterator-method.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/get-iterator.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/get-iterator.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"../node_modules/core-js-pure/internals/get-iterator-method.js\");\n\nmodule.exports = function (it) {\n  var iteratorMethod = getIteratorMethod(it);\n  if (typeof iteratorMethod != 'function') {\n    throw TypeError(String(it) + ' is not iterable');\n  } return anObject(iteratorMethod.call(it));\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/get-iterator.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/get-map-iterator.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/get-map-iterator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../node_modules/core-js-pure/internals/is-pure.js\");\nvar getIterator = __webpack_require__(/*! ../internals/get-iterator */ \"../node_modules/core-js-pure/internals/get-iterator.js\");\n\nmodule.exports = IS_PURE ? getIterator : function (it) {\n  // eslint-disable-next-line no-undef\n  return Map.prototype.entries.call(it);\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/get-map-iterator.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/global.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/global.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line no-undef\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  check(typeof self == 'object' && self) ||\n  check(typeof global == 'object' && global) ||\n  // eslint-disable-next-line no-new-func\n  Function('return this')();\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/global.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/has.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js-pure/internals/has.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/has.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/hidden-keys.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/hidden-keys.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/hidden-keys.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/host-report-errors.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/host-report-errors.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../node_modules/core-js-pure/internals/global.js\");\n\nmodule.exports = function (a, b) {\n  var console = global.console;\n  if (console && console.error) {\n    arguments.length === 1 ? console.error(a) : console.error(a, b);\n  }\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/host-report-errors.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/html.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js-pure/internals/html.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../node_modules/core-js-pure/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('document', 'documentElement');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/html.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/ie8-dom-define.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/ie8-dom-define.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../node_modules/core-js-pure/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../node_modules/core-js-pure/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"../node_modules/core-js-pure/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/ie8-dom-define.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/indexed-object.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/indexed-object.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../node_modules/core-js-pure/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"../node_modules/core-js-pure/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/indexed-object.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/internal-metadata.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/internal-metadata.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"../node_modules/core-js-pure/internals/hidden-keys.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../node_modules/core-js-pure/internals/is-object.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../node_modules/core-js-pure/internals/has.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"../node_modules/core-js-pure/internals/object-define-property.js\").f;\nvar uid = __webpack_require__(/*! ../internals/uid */ \"../node_modules/core-js-pure/internals/uid.js\");\nvar FREEZING = __webpack_require__(/*! ../internals/freezing */ \"../node_modules/core-js-pure/internals/freezing.js\");\n\nvar METADATA = uid('meta');\nvar id = 0;\n\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\n\nvar setMetadata = function (it) {\n  defineProperty(it, METADATA, { value: {\n    objectID: 'O' + ++id, // object ID\n    weakData: {}          // weak collections IDs\n  } });\n};\n\nvar fastKey = function (it, create) {\n  // return a primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, METADATA)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMetadata(it);\n  // return object ID\n  } return it[METADATA].objectID;\n};\n\nvar getWeakData = function (it, create) {\n  if (!has(it, METADATA)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMetadata(it);\n  // return the store of weak collections IDs\n  } return it[METADATA].weakData;\n};\n\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);\n  return it;\n};\n\nvar meta = module.exports = {\n  REQUIRED: false,\n  fastKey: fastKey,\n  getWeakData: getWeakData,\n  onFreeze: onFreeze\n};\n\nhiddenKeys[METADATA] = true;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/internal-metadata.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/internal-state.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/internal-state.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"../node_modules/core-js-pure/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../node_modules/core-js-pure/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../node_modules/core-js-pure/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"../node_modules/core-js-pure/internals/has.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"../node_modules/core-js-pure/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"../node_modules/core-js-pure/internals/hidden-keys.js\");\n\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = new WeakMap();\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/internal-state.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/is-array-iterator-method.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/is-array-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"../node_modules/core-js-pure/internals/iterators.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar ArrayPrototype = Array.prototype;\n\n// check on default Array iterator\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/is-array-iterator-method.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/is-array.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/is-array.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"../node_modules/core-js-pure/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.github.io/ecma262/#sec-isarray\nmodule.exports = Array.isArray || function isArray(arg) {\n  return classof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/is-array.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/is-forced.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/is-forced.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../node_modules/core-js-pure/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/is-forced.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/is-iterable.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/is-iterable.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof */ \"../node_modules/core-js-pure/internals/classof.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"../node_modules/core-js-pure/internals/iterators.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = function (it) {\n  var O = Object(it);\n  return O[ITERATOR] !== undefined\n    || '@@iterator' in O\n    // eslint-disable-next-line no-prototype-builtins\n    || Iterators.hasOwnProperty(classof(O));\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/is-iterable.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/is-object.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/is-object.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/is-object.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/is-pure.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/is-pure.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = true;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/is-pure.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/is-regexp.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/is-regexp.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../node_modules/core-js-pure/internals/is-object.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"../node_modules/core-js-pure/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\n// `IsRegExp` abstract operation\n// https://tc39.github.io/ecma262/#sec-isregexp\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/is-regexp.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/iterate.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/iterate.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"../node_modules/core-js-pure/internals/is-array-iterator-method.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../node_modules/core-js-pure/internals/to-length.js\");\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"../node_modules/core-js-pure/internals/bind-context.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"../node_modules/core-js-pure/internals/get-iterator-method.js\");\nvar callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ \"../node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js\");\n\nvar Result = function (stopped, result) {\n  this.stopped = stopped;\n  this.result = result;\n};\n\nvar iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {\n  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);\n  var iterator, iterFn, index, length, result, next, step;\n\n  if (IS_ITERATOR) {\n    iterator = iterable;\n  } else {\n    iterFn = getIteratorMethod(iterable);\n    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');\n    // optimisation for array iterators\n    if (isArrayIteratorMethod(iterFn)) {\n      for (index = 0, length = toLength(iterable.length); length > index; index++) {\n        result = AS_ENTRIES\n          ? boundFunction(anObject(step = iterable[index])[0], step[1])\n          : boundFunction(iterable[index]);\n        if (result && result instanceof Result) return result;\n      } return new Result(false);\n    }\n    iterator = iterFn.call(iterable);\n  }\n\n  next = iterator.next;\n  while (!(step = next.call(iterator)).done) {\n    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);\n    if (typeof result == 'object' && result && result instanceof Result) return result;\n  } return new Result(false);\n};\n\niterate.stop = function (result) {\n  return new Result(true, result);\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/iterate.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/iterators-core.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/iterators-core.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"../node_modules/core-js-pure/internals/object-get-prototype-of.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../node_modules/core-js-pure/internals/has.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../node_modules/core-js-pure/internals/is-pure.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar BUGGY_SAFARI_ITERATORS = false;\n\nvar returnThis = function () { return this; };\n\n// `%IteratorPrototype%` object\n// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object\nvar IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;\n\nif ([].keys) {\n  arrayIterator = [].keys();\n  // Safari 8 has buggy iterators w/o `next`\n  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;\n  else {\n    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));\n    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;\n  }\n}\n\nif (IteratorPrototype == undefined) IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\nif (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {\n  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);\n}\n\nmodule.exports = {\n  IteratorPrototype: IteratorPrototype,\n  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/iterators-core.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/iterators.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/iterators.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/iterators.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/map-upsert.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/map-upsert.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\n\n// `Map.prototype.upsert` method\n// https://github.com/thumbsupep/proposal-upsert\nmodule.exports = function upsert(key, updateFn /* , insertFn */) {\n  var map = anObject(this);\n  var insertFn = arguments.length > 2 ? arguments[2] : undefined;\n  var value;\n  if (typeof updateFn != 'function' && typeof insertFn != 'function') {\n    throw TypeError('At least one callback required');\n  }\n  if (map.has(key)) {\n    value = map.get(key);\n    if (typeof updateFn == 'function') {\n      value = updateFn(value);\n      map.set(key, value);\n    }\n  } else if (typeof insertFn == 'function') {\n    value = insertFn();\n    map.set(key, value);\n  } return value;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/map-upsert.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/microtask.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/microtask.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../node_modules/core-js-pure/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\").f;\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"../node_modules/core-js-pure/internals/classof-raw.js\");\nvar macrotask = __webpack_require__(/*! ../internals/task */ \"../node_modules/core-js-pure/internals/task.js\").set;\nvar userAgent = __webpack_require__(/*! ../internals/user-agent */ \"../node_modules/core-js-pure/internals/user-agent.js\");\n\nvar MutationObserver = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar IS_NODE = classof(process) == 'process';\n// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`\nvar queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');\nvar queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;\n\nvar flush, head, last, notify, toggle, node, promise, then;\n\n// modern engines have queueMicrotask method\nif (!queueMicrotask) {\n  flush = function () {\n    var parent, fn;\n    if (IS_NODE && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (error) {\n        if (head) notify();\n        else last = undefined;\n        throw error;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (IS_NODE) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339\n  } else if (MutationObserver && !/(iphone|ipod|ipad).*applewebkit/i.test(userAgent)) {\n    toggle = true;\n    node = document.createTextNode('');\n    new MutationObserver(flush).observe(node, { characterData: true });\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    promise = Promise.resolve(undefined);\n    then = promise.then;\n    notify = function () {\n      then.call(promise, flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n}\n\nmodule.exports = queueMicrotask || function (fn) {\n  var task = { fn: fn, next: undefined };\n  if (last) last.next = task;\n  if (!head) {\n    head = task;\n    notify();\n  } last = task;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/microtask.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/native-promise-constructor.js":
/*!****************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/native-promise-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../node_modules/core-js-pure/internals/global.js\");\n\nmodule.exports = global.Promise;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/native-promise-constructor.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/native-symbol.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/native-symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  // Chrome 38 Symbol has incorrect toString conversion\n  // eslint-disable-next-line no-undef\n  return !String(Symbol());\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/native-symbol.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/native-weak-map.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/native-weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../node_modules/core-js-pure/internals/global.js\");\nvar nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ \"../node_modules/core-js-pure/internals/function-to-string.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/native-weak-map.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/new-promise-capability.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/new-promise-capability.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../node_modules/core-js-pure/internals/a-function.js\");\n\nvar PromiseCapability = function (C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n};\n\n// 25.4.1.5 NewPromiseCapability(C)\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/new-promise-capability.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/not-a-regexp.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/not-a-regexp.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ \"../node_modules/core-js-pure/internals/is-regexp.js\");\n\nmodule.exports = function (it) {\n  if (isRegExp(it)) {\n    throw TypeError(\"The method doesn't accept regular expressions\");\n  } return it;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/not-a-regexp.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-create.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ \"../node_modules/core-js-pure/internals/object-define-properties.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"../node_modules/core-js-pure/internals/enum-bug-keys.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"../node_modules/core-js-pure/internals/hidden-keys.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"../node_modules/core-js-pure/internals/html.js\");\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"../node_modules/core-js-pure/internals/document-create-element.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"../node_modules/core-js-pure/internals/shared-key.js\");\nvar IE_PROTO = sharedKey('IE_PROTO');\n\nvar PROTOTYPE = 'prototype';\nvar Empty = function () { /* empty */ };\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = documentCreateElement('iframe');\n  var length = enumBugKeys.length;\n  var lt = '<';\n  var script = 'script';\n  var gt = '>';\n  var js = 'java' + script + ':';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  html.appendChild(iframe);\n  iframe.src = String(js);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];\n  return createDict();\n};\n\n// `Object.create` method\n// https://tc39.github.io/ecma262/#sec-object.create\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : defineProperties(result, Properties);\n};\n\nhiddenKeys[IE_PROTO] = true;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/object-create.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-define-properties.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-define-properties.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../node_modules/core-js-pure/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../node_modules/core-js-pure/internals/object-define-property.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"../node_modules/core-js-pure/internals/object-keys.js\");\n\n// `Object.defineProperties` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperties\nmodule.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = objectKeys(Properties);\n  var length = keys.length;\n  var index = 0;\n  var key;\n  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);\n  return O;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/object-define-properties.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-define-property.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-define-property.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../node_modules/core-js-pure/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"../node_modules/core-js-pure/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"../node_modules/core-js-pure/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/object-define-property.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js":
/*!************************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../node_modules/core-js-pure/internals/descriptors.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"../node_modules/core-js-pure/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"../node_modules/core-js-pure/internals/to-primitive.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../node_modules/core-js-pure/internals/has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"../node_modules/core-js-pure/internals/ie8-dom-define.js\");\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-get-own-property-names-external.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-get-own-property-names-external.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"../node_modules/core-js-pure/internals/object-get-own-property-names.js\").f;\n\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return nativeGetOwnPropertyNames(it);\n  } catch (error) {\n    return windowNames.slice();\n  }\n};\n\n// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]'\n    ? getWindowNames(it)\n    : nativeGetOwnPropertyNames(toIndexedObject(it));\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/object-get-own-property-names-external.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-get-own-property-names.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-get-own-property-names.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"../node_modules/core-js-pure/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"../node_modules/core-js-pure/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertynames\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-get-own-property-symbols.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-get-own-property-symbols.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-get-prototype-of.js":
/*!*************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-get-prototype-of.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"../node_modules/core-js-pure/internals/has.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../node_modules/core-js-pure/internals/to-object.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"../node_modules/core-js-pure/internals/shared-key.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"../node_modules/core-js-pure/internals/correct-prototype-getter.js\");\n\nvar IE_PROTO = sharedKey('IE_PROTO');\nvar ObjectPrototype = Object.prototype;\n\n// `Object.getPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.getprototypeof\nmodule.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectPrototype : null;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/object-get-prototype-of.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-keys-internal.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-keys-internal.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"../node_modules/core-js-pure/internals/has.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ \"../node_modules/core-js-pure/internals/array-includes.js\").indexOf;\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"../node_modules/core-js-pure/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/object-keys-internal.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-keys.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-keys.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"../node_modules/core-js-pure/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"../node_modules/core-js-pure/internals/enum-bug-keys.js\");\n\n// `Object.keys` method\n// https://tc39.github.io/ecma262/#sec-object.keys\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/object-keys.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-property-is-enumerable.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-property-is-enumerable.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-set-prototype-of.js":
/*!*************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-set-prototype-of.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ \"../node_modules/core-js-pure/internals/a-possible-prototype.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.setprototypeof\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nmodule.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {\n  var CORRECT_SETTER = false;\n  var test = {};\n  var setter;\n  try {\n    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;\n    setter.call(test, []);\n    CORRECT_SETTER = test instanceof Array;\n  } catch (error) { /* empty */ }\n  return function setPrototypeOf(O, proto) {\n    anObject(O);\n    aPossiblePrototype(proto);\n    if (CORRECT_SETTER) setter.call(O, proto);\n    else O.__proto__ = proto;\n    return O;\n  };\n}() : undefined);\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/object-set-prototype-of.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/object-to-string.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-to-string.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar classof = __webpack_require__(/*! ../internals/classof */ \"../node_modules/core-js-pure/internals/classof.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\n\ntest[TO_STRING_TAG] = 'z';\n\n// `Object.prototype.toString` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.tostring\nmodule.exports = String(test) !== '[object z]' ? function toString() {\n  return '[object ' + classof(this) + ']';\n} : test.toString;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/object-to-string.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/path.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js-pure/internals/path.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/path.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/perform.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/perform.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return { error: false, value: exec() };\n  } catch (error) {\n    return { error: true, value: error };\n  }\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/perform.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/promise-resolve.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/promise-resolve.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../node_modules/core-js-pure/internals/is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ \"../node_modules/core-js-pure/internals/new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/promise-resolve.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/redefine-all.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/redefine-all.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var redefine = __webpack_require__(/*! ../internals/redefine */ \"../node_modules/core-js-pure/internals/redefine.js\");\n\nmodule.exports = function (target, src, options) {\n  for (var key in src) {\n    if (options && options.unsafe && target[key]) target[key] = src[key];\n    else redefine(target, key, src[key], options);\n  } return target;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/redefine-all.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/redefine.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/redefine.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (target, key, value, options) {\n  if (options && options.enumerable) target[key] = value;\n  else createNonEnumerableProperty(target, key, value);\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/redefine.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/require-object-coercible.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/require-object-coercible.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.github.io/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/require-object-coercible.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/same-value-zero.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/same-value-zero.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// `SameValueZero` abstract operation\n// https://tc39.github.io/ecma262/#sec-samevaluezero\nmodule.exports = function (x, y) {\n  // eslint-disable-next-line no-self-compare\n  return x === y || x != x && y != y;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/same-value-zero.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/set-global.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/set-global.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../node_modules/core-js-pure/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    createNonEnumerableProperty(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/set-global.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/set-species.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/set-species.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../node_modules/core-js-pure/internals/get-built-in.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../node_modules/core-js-pure/internals/object-define-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../node_modules/core-js-pure/internals/descriptors.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (CONSTRUCTOR_NAME) {\n  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);\n  var defineProperty = definePropertyModule.f;\n\n  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {\n    defineProperty(Constructor, SPECIES, {\n      configurable: true,\n      get: function () { return this; }\n    });\n  }\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/set-species.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/set-to-string-tag.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/set-to-string-tag.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"../node_modules/core-js-pure/internals/object-define-property.js\").f;\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../node_modules/core-js-pure/internals/has.js\");\nvar toString = __webpack_require__(/*! ../internals/object-to-string */ \"../node_modules/core-js-pure/internals/object-to-string.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar METHOD_REQUIRED = toString !== ({}).toString;\n\nmodule.exports = function (it, TAG, STATIC, SET_METHOD) {\n  if (it) {\n    var target = STATIC ? it : it.prototype;\n    if (!has(target, TO_STRING_TAG)) {\n      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });\n    }\n    if (SET_METHOD && METHOD_REQUIRED) {\n      createNonEnumerableProperty(target, 'toString', toString);\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/set-to-string-tag.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/shared-key.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/shared-key.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"../node_modules/core-js-pure/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"../node_modules/core-js-pure/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/shared-key.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/shared-store.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/shared-store.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../node_modules/core-js-pure/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"../node_modules/core-js-pure/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/shared-store.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/shared.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/shared.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../node_modules/core-js-pure/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"../node_modules/core-js-pure/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.3.4',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/shared.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/sloppy-array-method.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/sloppy-array-method.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !method || !fails(function () {\n    // eslint-disable-next-line no-useless-call,no-throw-literal\n    method.call(null, argument || function () { throw 1; }, 1);\n  });\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/sloppy-array-method.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/species-constructor.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/species-constructor.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../node_modules/core-js-pure/internals/a-function.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `SpeciesConstructor` abstract operation\n// https://tc39.github.io/ecma262/#sec-speciesconstructor\nmodule.exports = function (O, defaultConstructor) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/species-constructor.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/string-multibyte.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/string-multibyte.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../node_modules/core-js-pure/internals/to-integer.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../node_modules/core-js-pure/internals/require-object-coercible.js\");\n\n// `String.prototype.{ codePointAt, at }` methods implementation\nvar createMethod = function (CONVERT_TO_STRING) {\n  return function ($this, pos) {\n    var S = String(requireObjectCoercible($this));\n    var position = toInteger(pos);\n    var size = S.length;\n    var first, second;\n    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n    first = S.charCodeAt(position);\n    return first < 0xD800 || first > 0xDBFF || position + 1 === size\n      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF\n        ? CONVERT_TO_STRING ? S.charAt(position) : first\n        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.codePointAt` method\n  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat\n  codeAt: createMethod(false),\n  // `String.prototype.at` method\n  // https://github.com/mathiasbynens/String.prototype.at\n  charAt: createMethod(true)\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/string-multibyte.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/task.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js-pure/internals/task.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../node_modules/core-js-pure/internals/global.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../node_modules/core-js-pure/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"../node_modules/core-js-pure/internals/classof-raw.js\");\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"../node_modules/core-js-pure/internals/bind-context.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"../node_modules/core-js-pure/internals/html.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"../node_modules/core-js-pure/internals/document-create-element.js\");\nvar userAgent = __webpack_require__(/*! ../internals/user-agent */ \"../node_modules/core-js-pure/internals/user-agent.js\");\n\nvar location = global.location;\nvar set = global.setImmediate;\nvar clear = global.clearImmediate;\nvar process = global.process;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\n\nvar run = function (id) {\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\n\nvar runner = function (id) {\n  return function () {\n    run(id);\n  };\n};\n\nvar listener = function (event) {\n  run(event.data);\n};\n\nvar post = function (id) {\n  // old engines have not location.origin\n  global.postMessage(id + '', location.protocol + '//' + location.host);\n};\n\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!set || !clear) {\n  set = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clear = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (classof(process) == 'process') {\n    defer = function (id) {\n      process.nextTick(runner(id));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(runner(id));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  // except iOS - https://github.com/zloirock/core-js/issues/624\n  } else if (MessageChannel && !/(iphone|ipod|ipad).*applewebkit/i.test(userAgent)) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = bind(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {\n    defer = post;\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in createElement('script')) {\n    defer = function (id) {\n      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(runner(id), 0);\n    };\n  }\n}\n\nmodule.exports = {\n  set: set,\n  clear: clear\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/task.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/to-absolute-index.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/to-absolute-index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../node_modules/core-js-pure/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/to-absolute-index.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/to-indexed-object.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/to-indexed-object.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"../node_modules/core-js-pure/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../node_modules/core-js-pure/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/to-indexed-object.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/to-integer.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/to-integer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.github.io/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/to-integer.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/to-length.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/to-length.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../node_modules/core-js-pure/internals/to-integer.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.github.io/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/to-length.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/to-object.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/to-object.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../node_modules/core-js-pure/internals/require-object-coercible.js\");\n\n// `ToObject` abstract operation\n// https://tc39.github.io/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/to-object.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/to-primitive.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/to-primitive.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../node_modules/core-js-pure/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.github.io/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/to-primitive.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/uid.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js-pure/internals/uid.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/uid.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/user-agent.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/user-agent.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../node_modules/core-js-pure/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/user-agent.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/v8-version.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/v8-version.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../node_modules/core-js-pure/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/user-agent */ \"../node_modules/core-js-pure/internals/user-agent.js\");\n\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  version = match[0] + match[1];\n} else if (userAgent) {\n  match = userAgent.match(/Chrome\\/(\\d+)/);\n  if (match) version = match[1];\n}\n\nmodule.exports = version && +version;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/v8-version.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/well-known-symbol.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/well-known-symbol.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../node_modules/core-js-pure/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"../node_modules/core-js-pure/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"../node_modules/core-js-pure/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"../node_modules/core-js-pure/internals/native-symbol.js\");\n\nvar Symbol = global.Symbol;\nvar store = shared('wks');\n\nmodule.exports = function (name) {\n  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]\n    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/well-known-symbol.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/internals/wrapped-well-known-symbol.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/wrapped-well-known-symbol.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.f = __webpack_require__(/*! ../internals/well-known-symbol */ \"../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/internals/wrapped-well-known-symbol.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.concat.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.concat.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../node_modules/core-js-pure/internals/fails.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"../node_modules/core-js-pure/internals/is-array.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../node_modules/core-js-pure/internals/is-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../node_modules/core-js-pure/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../node_modules/core-js-pure/internals/to-length.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"../node_modules/core-js-pure/internals/create-property.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"../node_modules/core-js-pure/internals/array-species-create.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"../node_modules/core-js-pure/internals/array-method-has-species-support.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');\nvar MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;\nvar MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';\n\nvar IS_CONCAT_SPREADABLE_SUPPORT = !fails(function () {\n  var array = [];\n  array[IS_CONCAT_SPREADABLE] = false;\n  return array.concat()[0] !== array;\n});\n\nvar SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');\n\nvar isConcatSpreadable = function (O) {\n  if (!isObject(O)) return false;\n  var spreadable = O[IS_CONCAT_SPREADABLE];\n  return spreadable !== undefined ? !!spreadable : isArray(O);\n};\n\nvar FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;\n\n// `Array.prototype.concat` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.concat\n// with adding support of @@isConcatSpreadable and @@species\n$({ target: 'Array', proto: true, forced: FORCED }, {\n  concat: function concat(arg) { // eslint-disable-line no-unused-vars\n    var O = toObject(this);\n    var A = arraySpeciesCreate(O, 0);\n    var n = 0;\n    var i, k, length, len, E;\n    for (i = -1, length = arguments.length; i < length; i++) {\n      E = i === -1 ? O : arguments[i];\n      if (isConcatSpreadable(E)) {\n        len = toLength(E.length);\n        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);\n      } else {\n        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        createProperty(A, n++, E);\n      }\n    }\n    A.length = n;\n    return A;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.array.concat.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.filter.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.filter.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar $filter = __webpack_require__(/*! ../internals/array-iteration */ \"../node_modules/core-js-pure/internals/array-iteration.js\").filter;\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"../node_modules/core-js-pure/internals/array-method-has-species-support.js\");\n\n// `Array.prototype.filter` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.filter\n// with adding support of @@species\n$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('filter') }, {\n  filter: function filter(callbackfn /* , thisArg */) {\n    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.array.filter.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.flat-map.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.flat-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar flattenIntoArray = __webpack_require__(/*! ../internals/flatten-into-array */ \"../node_modules/core-js-pure/internals/flatten-into-array.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../node_modules/core-js-pure/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../node_modules/core-js-pure/internals/to-length.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../node_modules/core-js-pure/internals/a-function.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"../node_modules/core-js-pure/internals/array-species-create.js\");\n\n// `Array.prototype.flatMap` method\n// https://github.com/tc39/proposal-flatMap\n$({ target: 'Array', proto: true }, {\n  flatMap: function flatMap(callbackfn /* , thisArg */) {\n    var O = toObject(this);\n    var sourceLen = toLength(O.length);\n    var A;\n    aFunction(callbackfn);\n    A = arraySpeciesCreate(O, 0);\n    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    return A;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.array.flat-map.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.from.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.from.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar from = __webpack_require__(/*! ../internals/array-from */ \"../node_modules/core-js-pure/internals/array-from.js\");\nvar checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ \"../node_modules/core-js-pure/internals/check-correctness-of-iteration.js\");\n\nvar INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {\n  Array.from(iterable);\n});\n\n// `Array.from` method\n// https://tc39.github.io/ecma262/#sec-array.from\n$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {\n  from: from\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.array.from.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.index-of.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar $indexOf = __webpack_require__(/*! ../internals/array-includes */ \"../node_modules/core-js-pure/internals/array-includes.js\").indexOf;\nvar sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ \"../node_modules/core-js-pure/internals/sloppy-array-method.js\");\n\nvar nativeIndexOf = [].indexOf;\n\nvar NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;\nvar SLOPPY_METHOD = sloppyArrayMethod('indexOf');\n\n// `Array.prototype.indexOf` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || SLOPPY_METHOD }, {\n  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {\n    return NEGATIVE_ZERO\n      // convert -0 to +0\n      ? nativeIndexOf.apply(this, arguments) || 0\n      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.array.index-of.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.is-array.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.is-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"../node_modules/core-js-pure/internals/is-array.js\");\n\n// `Array.isArray` method\n// https://tc39.github.io/ecma262/#sec-array.isarray\n$({ target: 'Array', stat: true }, {\n  isArray: isArray\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.array.is-array.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.iterator.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.iterator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"../node_modules/core-js-pure/internals/add-to-unscopables.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"../node_modules/core-js-pure/internals/iterators.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"../node_modules/core-js-pure/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"../node_modules/core-js-pure/internals/define-iterator.js\");\n\nvar ARRAY_ITERATOR = 'Array Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);\n\n// `Array.prototype.entries` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.entries\n// `Array.prototype.keys` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.keys\n// `Array.prototype.values` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.values\n// `Array.prototype[@@iterator]` method\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator\n// `CreateArrayIterator` internal method\n// https://tc39.github.io/ecma262/#sec-createarrayiterator\nmodule.exports = defineIterator(Array, 'Array', function (iterated, kind) {\n  setInternalState(this, {\n    type: ARRAY_ITERATOR,\n    target: toIndexedObject(iterated), // target\n    index: 0,                          // next index\n    kind: kind                         // kind\n  });\n// `%ArrayIteratorPrototype%.next` method\n// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next\n}, function () {\n  var state = getInternalState(this);\n  var target = state.target;\n  var kind = state.kind;\n  var index = state.index++;\n  if (!target || index >= target.length) {\n    state.target = undefined;\n    return { value: undefined, done: true };\n  }\n  if (kind == 'keys') return { value: index, done: false };\n  if (kind == 'values') return { value: target[index], done: false };\n  return { value: [index, target[index]], done: false };\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values%\n// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject\n// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject\nIterators.Arguments = Iterators.Array;\n\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.array.iterator.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.map.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar $map = __webpack_require__(/*! ../internals/array-iteration */ \"../node_modules/core-js-pure/internals/array-iteration.js\").map;\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"../node_modules/core-js-pure/internals/array-method-has-species-support.js\");\n\n// `Array.prototype.map` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.map\n// with adding support of @@species\n$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('map') }, {\n  map: function map(callbackfn /* , thisArg */) {\n    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.array.map.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.reduce.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.reduce.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar $reduce = __webpack_require__(/*! ../internals/array-reduce */ \"../node_modules/core-js-pure/internals/array-reduce.js\").left;\nvar sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ \"../node_modules/core-js-pure/internals/sloppy-array-method.js\");\n\n// `Array.prototype.reduce` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.reduce\n$({ target: 'Array', proto: true, forced: sloppyArrayMethod('reduce') }, {\n  reduce: function reduce(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.array.reduce.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.slice.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.slice.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../node_modules/core-js-pure/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"../node_modules/core-js-pure/internals/is-array.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"../node_modules/core-js-pure/internals/to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../node_modules/core-js-pure/internals/to-length.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"../node_modules/core-js-pure/internals/create-property.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"../node_modules/core-js-pure/internals/array-method-has-species-support.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\nvar nativeSlice = [].slice;\nvar max = Math.max;\n\n// `Array.prototype.slice` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.slice\n// fallback for not array-like ES3 strings and DOM objects\n$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('slice') }, {\n  slice: function slice(start, end) {\n    var O = toIndexedObject(this);\n    var length = toLength(O.length);\n    var k = toAbsoluteIndex(start, length);\n    var fin = toAbsoluteIndex(end === undefined ? length : end, length);\n    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible\n    var Constructor, result, n;\n    if (isArray(O)) {\n      Constructor = O.constructor;\n      // cross-realm fallback\n      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {\n        Constructor = undefined;\n      } else if (isObject(Constructor)) {\n        Constructor = Constructor[SPECIES];\n        if (Constructor === null) Constructor = undefined;\n      }\n      if (Constructor === Array || Constructor === undefined) {\n        return nativeSlice.call(O, k, fin);\n      }\n    }\n    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));\n    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);\n    result.length = n;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.array.slice.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.array.unscopables.flat-map.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.unscopables.flat-map.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// this method was added to unscopables after implementation\n// in popular engines, so it's moved to a separate module\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"../node_modules/core-js-pure/internals/add-to-unscopables.js\");\n\naddToUnscopables('flatMap');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.array.unscopables.flat-map.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.function.bind.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.function.bind.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind */ \"../node_modules/core-js-pure/internals/function-bind.js\");\n\n// `Function.prototype.bind` method\n// https://tc39.github.io/ecma262/#sec-function.prototype.bind\n$({ target: 'Function', proto: true }, {\n  bind: bind\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.function.bind.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.json.to-string-tag.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.json.to-string-tag.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../node_modules/core-js-pure/internals/global.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"../node_modules/core-js-pure/internals/set-to-string-tag.js\");\n\n// JSON[@@toStringTag] property\n// https://tc39.github.io/ecma262/#sec-json-@@tostringtag\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.json.to-string-tag.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.map.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar collection = __webpack_require__(/*! ../internals/collection */ \"../node_modules/core-js-pure/internals/collection.js\");\nvar collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ \"../node_modules/core-js-pure/internals/collection-strong.js\");\n\n// `Map` constructor\n// https://tc39.github.io/ecma262/#sec-map-objects\nmodule.exports = collection('Map', function (get) {\n  return function Map() { return get(this, arguments.length ? arguments[0] : undefined); };\n}, collectionStrong, true);\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.map.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.math.to-string-tag.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.math.to-string-tag.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"../node_modules/core-js-pure/internals/set-to-string-tag.js\");\n\n// Math[@@toStringTag] property\n// https://tc39.github.io/ecma262/#sec-math-@@tostringtag\nsetToStringTag(Math, 'Math', true);\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.math.to-string-tag.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.object.create.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.object.create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../node_modules/core-js-pure/internals/descriptors.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"../node_modules/core-js-pure/internals/object-create.js\");\n\n// `Object.create` method\n// https://tc39.github.io/ecma262/#sec-object.create\n$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {\n  create: create\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.object.create.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.object.define-property.js":
/*!*************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.object.define-property.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../node_modules/core-js-pure/internals/descriptors.js\");\nvar objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ \"../node_modules/core-js-pure/internals/object-define-property.js\");\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\n$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {\n  defineProperty: objectDefinePropertyModile.f\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.object.define-property.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.object.get-prototype-of.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.object.get-prototype-of.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../node_modules/core-js-pure/internals/fails.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../node_modules/core-js-pure/internals/to-object.js\");\nvar nativeGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"../node_modules/core-js-pure/internals/object-get-prototype-of.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"../node_modules/core-js-pure/internals/correct-prototype-getter.js\");\n\nvar FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });\n\n// `Object.getPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.getprototypeof\n$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {\n  getPrototypeOf: function getPrototypeOf(it) {\n    return nativeGetPrototypeOf(toObject(it));\n  }\n});\n\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.object.get-prototype-of.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.object.keys.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.object.keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../node_modules/core-js-pure/internals/to-object.js\");\nvar nativeKeys = __webpack_require__(/*! ../internals/object-keys */ \"../node_modules/core-js-pure/internals/object-keys.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../node_modules/core-js-pure/internals/fails.js\");\n\nvar FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });\n\n// `Object.keys` method\n// https://tc39.github.io/ecma262/#sec-object.keys\n$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {\n  keys: function keys(it) {\n    return nativeKeys(toObject(it));\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.object.keys.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.object.set-prototype-of.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.object.set-prototype-of.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"../node_modules/core-js-pure/internals/object-set-prototype-of.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.setprototypeof\n$({ target: 'Object', stat: true }, {\n  setPrototypeOf: setPrototypeOf\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.object.set-prototype-of.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.object.to-string.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.object.to-string.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// empty\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.object.to-string.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.promise.all-settled.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.promise.all-settled.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../node_modules/core-js-pure/internals/a-function.js\");\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"../node_modules/core-js-pure/internals/new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ../internals/perform */ \"../node_modules/core-js-pure/internals/perform.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"../node_modules/core-js-pure/internals/iterate.js\");\n\n// `Promise.allSettled` method\n// https://github.com/tc39/proposal-promise-allSettled\n$({ target: 'Promise', stat: true }, {\n  allSettled: function allSettled(iterable) {\n    var C = this;\n    var capability = newPromiseCapabilityModule.f(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var promiseResolve = aFunction(C.resolve);\n      var values = [];\n      var counter = 0;\n      var remaining = 1;\n      iterate(iterable, function (promise) {\n        var index = counter++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        promiseResolve.call(C, promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[index] = { status: 'fulfilled', value: value };\n          --remaining || resolve(values);\n        }, function (e) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[index] = { status: 'rejected', reason: e };\n          --remaining || resolve(values);\n        });\n      });\n      --remaining || resolve(values);\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.promise.all-settled.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.promise.finally.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.promise.finally.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../node_modules/core-js-pure/internals/is-pure.js\");\nvar NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ \"../node_modules/core-js-pure/internals/native-promise-constructor.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../node_modules/core-js-pure/internals/get-built-in.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"../node_modules/core-js-pure/internals/species-constructor.js\");\nvar promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ \"../node_modules/core-js-pure/internals/promise-resolve.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"../node_modules/core-js-pure/internals/redefine.js\");\n\n// `Promise.prototype.finally` method\n// https://tc39.github.io/ecma262/#sec-promise.prototype.finally\n$({ target: 'Promise', proto: true, real: true }, {\n  'finally': function (onFinally) {\n    var C = speciesConstructor(this, getBuiltIn('Promise'));\n    var isFunction = typeof onFinally == 'function';\n    return this.then(\n      isFunction ? function (x) {\n        return promiseResolve(C, onFinally()).then(function () { return x; });\n      } : onFinally,\n      isFunction ? function (e) {\n        return promiseResolve(C, onFinally()).then(function () { throw e; });\n      } : onFinally\n    );\n  }\n});\n\n// patch native Promise.prototype for native async functions\nif (!IS_PURE && typeof NativePromise == 'function' && !NativePromise.prototype['finally']) {\n  redefine(NativePromise.prototype, 'finally', getBuiltIn('Promise').prototype['finally']);\n}\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.promise.finally.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.promise.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.promise.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../node_modules/core-js-pure/internals/is-pure.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../node_modules/core-js-pure/internals/global.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../node_modules/core-js-pure/internals/get-built-in.js\");\nvar NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ \"../node_modules/core-js-pure/internals/native-promise-constructor.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"../node_modules/core-js-pure/internals/redefine.js\");\nvar redefineAll = __webpack_require__(/*! ../internals/redefine-all */ \"../node_modules/core-js-pure/internals/redefine-all.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"../node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar setSpecies = __webpack_require__(/*! ../internals/set-species */ \"../node_modules/core-js-pure/internals/set-species.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../node_modules/core-js-pure/internals/is-object.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../node_modules/core-js-pure/internals/a-function.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"../node_modules/core-js-pure/internals/an-instance.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"../node_modules/core-js-pure/internals/classof-raw.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"../node_modules/core-js-pure/internals/iterate.js\");\nvar checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ \"../node_modules/core-js-pure/internals/check-correctness-of-iteration.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"../node_modules/core-js-pure/internals/species-constructor.js\");\nvar task = __webpack_require__(/*! ../internals/task */ \"../node_modules/core-js-pure/internals/task.js\").set;\nvar microtask = __webpack_require__(/*! ../internals/microtask */ \"../node_modules/core-js-pure/internals/microtask.js\");\nvar promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ \"../node_modules/core-js-pure/internals/promise-resolve.js\");\nvar hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ \"../node_modules/core-js-pure/internals/host-report-errors.js\");\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"../node_modules/core-js-pure/internals/new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ../internals/perform */ \"../node_modules/core-js-pure/internals/perform.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"../node_modules/core-js-pure/internals/internal-state.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"../node_modules/core-js-pure/internals/is-forced.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ \"../node_modules/core-js-pure/internals/v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\nvar PROMISE = 'Promise';\nvar getInternalState = InternalStateModule.get;\nvar setInternalState = InternalStateModule.set;\nvar getInternalPromiseState = InternalStateModule.getterFor(PROMISE);\nvar PromiseConstructor = NativePromise;\nvar TypeError = global.TypeError;\nvar document = global.document;\nvar process = global.process;\nvar $fetch = getBuiltIn('fetch');\nvar newPromiseCapability = newPromiseCapabilityModule.f;\nvar newGenericPromiseCapability = newPromiseCapability;\nvar IS_NODE = classof(process) == 'process';\nvar DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);\nvar UNHANDLED_REJECTION = 'unhandledrejection';\nvar REJECTION_HANDLED = 'rejectionhandled';\nvar PENDING = 0;\nvar FULFILLED = 1;\nvar REJECTED = 2;\nvar HANDLED = 1;\nvar UNHANDLED = 2;\nvar Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;\n\nvar FORCED = isForced(PROMISE, function () {\n  // correct subclassing with @@species support\n  var promise = PromiseConstructor.resolve(1);\n  var empty = function () { /* empty */ };\n  var FakePromise = (promise.constructor = {})[SPECIES] = function (exec) {\n    exec(empty, empty);\n  };\n  // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n  return !((IS_NODE || typeof PromiseRejectionEvent == 'function')\n    && (!IS_PURE || promise['finally'])\n    && promise.then(empty) instanceof FakePromise\n    // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n    // we can't detect it synchronously, so just check versions\n    && V8_VERSION !== 66);\n});\n\nvar INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {\n  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });\n});\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\n\nvar notify = function (promise, state, isReject) {\n  if (state.notified) return;\n  state.notified = true;\n  var chain = state.reactions;\n  microtask(function () {\n    var value = state.value;\n    var ok = state.state == FULFILLED;\n    var index = 0;\n    // variable length - can't use forEach\n    while (chain.length > index) {\n      var reaction = chain[index++];\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);\n            state.rejection = HANDLED;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // can throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (error) {\n        if (domain && !exited) domain.exit();\n        reject(error);\n      }\n    }\n    state.reactions = [];\n    state.notified = false;\n    if (isReject && !state.rejection) onUnhandled(promise, state);\n  });\n};\n\nvar dispatchEvent = function (name, promise, reason) {\n  var event, handler;\n  if (DISPATCH_EVENT) {\n    event = document.createEvent('Event');\n    event.promise = promise;\n    event.reason = reason;\n    event.initEvent(name, false, true);\n    global.dispatchEvent(event);\n  } else event = { promise: promise, reason: reason };\n  if (handler = global['on' + name]) handler(event);\n  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);\n};\n\nvar onUnhandled = function (promise, state) {\n  task.call(global, function () {\n    var value = state.value;\n    var IS_UNHANDLED = isUnhandled(state);\n    var result;\n    if (IS_UNHANDLED) {\n      result = perform(function () {\n        if (IS_NODE) {\n          process.emit('unhandledRejection', value, promise);\n        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;\n      if (result.error) throw result.value;\n    }\n  });\n};\n\nvar isUnhandled = function (state) {\n  return state.rejection !== HANDLED && !state.parent;\n};\n\nvar onHandleUnhandled = function (promise, state) {\n  task.call(global, function () {\n    if (IS_NODE) {\n      process.emit('rejectionHandled', promise);\n    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);\n  });\n};\n\nvar bind = function (fn, promise, state, unwrap) {\n  return function (value) {\n    fn(promise, state, value, unwrap);\n  };\n};\n\nvar internalReject = function (promise, state, value, unwrap) {\n  if (state.done) return;\n  state.done = true;\n  if (unwrap) state = unwrap;\n  state.value = value;\n  state.state = REJECTED;\n  notify(promise, state, true);\n};\n\nvar internalResolve = function (promise, state, value, unwrap) {\n  if (state.done) return;\n  state.done = true;\n  if (unwrap) state = unwrap;\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n    var then = isThenable(value);\n    if (then) {\n      microtask(function () {\n        var wrapper = { done: false };\n        try {\n          then.call(value,\n            bind(internalResolve, promise, wrapper, state),\n            bind(internalReject, promise, wrapper, state)\n          );\n        } catch (error) {\n          internalReject(promise, wrapper, error, state);\n        }\n      });\n    } else {\n      state.value = value;\n      state.state = FULFILLED;\n      notify(promise, state, false);\n    }\n  } catch (error) {\n    internalReject(promise, { done: false }, error, state);\n  }\n};\n\n// constructor polyfill\nif (FORCED) {\n  // 25.4.3.1 Promise(executor)\n  PromiseConstructor = function Promise(executor) {\n    anInstance(this, PromiseConstructor, PROMISE);\n    aFunction(executor);\n    Internal.call(this);\n    var state = getInternalState(this);\n    try {\n      executor(bind(internalResolve, this, state), bind(internalReject, this, state));\n    } catch (error) {\n      internalReject(this, state, error);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    setInternalState(this, {\n      type: PROMISE,\n      done: false,\n      notified: false,\n      parent: false,\n      reactions: [],\n      rejection: false,\n      state: PENDING,\n      value: undefined\n    });\n  };\n  Internal.prototype = redefineAll(PromiseConstructor.prototype, {\n    // `Promise.prototype.then` method\n    // https://tc39.github.io/ecma262/#sec-promise.prototype.then\n    then: function then(onFulfilled, onRejected) {\n      var state = getInternalPromiseState(this);\n      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = IS_NODE ? process.domain : undefined;\n      state.parent = true;\n      state.reactions.push(reaction);\n      if (state.state != PENDING) notify(this, state, false);\n      return reaction.promise;\n    },\n    // `Promise.prototype.catch` method\n    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    var state = getInternalState(promise);\n    this.promise = promise;\n    this.resolve = bind(internalResolve, promise, state);\n    this.reject = bind(internalReject, promise, state);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === PromiseConstructor || C === PromiseWrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n\n  if (!IS_PURE && typeof NativePromise == 'function') {\n    nativeThen = NativePromise.prototype.then;\n\n    // wrap native Promise#then for native async functions\n    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {\n      var that = this;\n      return new PromiseConstructor(function (resolve, reject) {\n        nativeThen.call(that, resolve, reject);\n      }).then(onFulfilled, onRejected);\n    // https://github.com/zloirock/core-js/issues/640\n    }, { unsafe: true });\n\n    // wrap fetch result\n    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {\n      // eslint-disable-next-line no-unused-vars\n      fetch: function fetch(input /* , init */) {\n        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));\n      }\n    });\n  }\n}\n\n$({ global: true, wrap: true, forced: FORCED }, {\n  Promise: PromiseConstructor\n});\n\nsetToStringTag(PromiseConstructor, PROMISE, false, true);\nsetSpecies(PROMISE);\n\nPromiseWrapper = getBuiltIn(PROMISE);\n\n// statics\n$({ target: PROMISE, stat: true, forced: FORCED }, {\n  // `Promise.reject` method\n  // https://tc39.github.io/ecma262/#sec-promise.reject\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    capability.reject.call(undefined, r);\n    return capability.promise;\n  }\n});\n\n$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {\n  // `Promise.resolve` method\n  // https://tc39.github.io/ecma262/#sec-promise.resolve\n  resolve: function resolve(x) {\n    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);\n  }\n});\n\n$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {\n  // `Promise.all` method\n  // https://tc39.github.io/ecma262/#sec-promise.all\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var $promiseResolve = aFunction(C.resolve);\n      var values = [];\n      var counter = 0;\n      var remaining = 1;\n      iterate(iterable, function (promise) {\n        var index = counter++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        $promiseResolve.call(C, promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  },\n  // `Promise.race` method\n  // https://tc39.github.io/ecma262/#sec-promise.race\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      var $promiseResolve = aFunction(C.resolve);\n      iterate(iterable, function (promise) {\n        $promiseResolve.call(C, promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.promise.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.reflect.construct.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.reflect.construct.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../node_modules/core-js-pure/internals/get-built-in.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../node_modules/core-js-pure/internals/a-function.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../node_modules/core-js-pure/internals/is-object.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"../node_modules/core-js-pure/internals/object-create.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind */ \"../node_modules/core-js-pure/internals/function-bind.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../node_modules/core-js-pure/internals/fails.js\");\n\nvar nativeConstruct = getBuiltIn('Reflect', 'construct');\n\n// `Reflect.construct` method\n// https://tc39.github.io/ecma262/#sec-reflect.construct\n// MS Edge supports only 2 arguments and argumentsList argument is optional\n// FF Nightly sets third argument as `new.target`, but does not create `this` from it\nvar NEW_TARGET_BUG = fails(function () {\n  function F() { /* empty */ }\n  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);\n});\nvar ARGS_BUG = !fails(function () {\n  nativeConstruct(function () { /* empty */ });\n});\nvar FORCED = NEW_TARGET_BUG || ARGS_BUG;\n\n$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {\n  construct: function construct(Target, args /* , newTarget */) {\n    aFunction(Target);\n    anObject(args);\n    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);\n    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);\n    if (Target == newTarget) {\n      // w/o altered newTarget, optimization for 0-4 arguments\n      switch (args.length) {\n        case 0: return new Target();\n        case 1: return new Target(args[0]);\n        case 2: return new Target(args[0], args[1]);\n        case 3: return new Target(args[0], args[1], args[2]);\n        case 4: return new Target(args[0], args[1], args[2], args[3]);\n      }\n      // w/o altered newTarget, lot of arguments case\n      var $args = [null];\n      $args.push.apply($args, args);\n      return new (bind.apply(Target, $args))();\n    }\n    // with altered newTarget, not support built-in constructors\n    var proto = newTarget.prototype;\n    var instance = create(isObject(proto) ? proto : Object.prototype);\n    var result = Function.apply.call(Target, instance, args);\n    return isObject(result) ? result : instance;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.reflect.construct.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.string.iterator.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.string.iterator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar charAt = __webpack_require__(/*! ../internals/string-multibyte */ \"../node_modules/core-js-pure/internals/string-multibyte.js\").charAt;\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"../node_modules/core-js-pure/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"../node_modules/core-js-pure/internals/define-iterator.js\");\n\nvar STRING_ITERATOR = 'String Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);\n\n// `String.prototype[@@iterator]` method\n// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator\ndefineIterator(String, 'String', function (iterated) {\n  setInternalState(this, {\n    type: STRING_ITERATOR,\n    string: String(iterated),\n    index: 0\n  });\n// `%StringIteratorPrototype%.next` method\n// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next\n}, function next() {\n  var state = getInternalState(this);\n  var string = state.string;\n  var index = state.index;\n  var point;\n  if (index >= string.length) return { value: undefined, done: true };\n  point = charAt(string, index);\n  state.index += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.string.iterator.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.string.starts-with.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.string.starts-with.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../node_modules/core-js-pure/internals/to-length.js\");\nvar notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ \"../node_modules/core-js-pure/internals/not-a-regexp.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../node_modules/core-js-pure/internals/require-object-coercible.js\");\nvar correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ \"../node_modules/core-js-pure/internals/correct-is-regexp-logic.js\");\n\nvar nativeStartsWith = ''.startsWith;\nvar min = Math.min;\n\n// `String.prototype.startsWith` method\n// https://tc39.github.io/ecma262/#sec-string.prototype.startswith\n$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('startsWith') }, {\n  startsWith: function startsWith(searchString /* , position = 0 */) {\n    var that = String(requireObjectCoercible(this));\n    notARegExp(searchString);\n    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));\n    var search = String(searchString);\n    return nativeStartsWith\n      ? nativeStartsWith.call(that, search, index)\n      : that.slice(index, index + search.length) === search;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.string.starts-with.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.async-iterator.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.async-iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.asyncIterator` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.asynciterator\ndefineWellKnownSymbol('asyncIterator');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.symbol.async-iterator.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.description.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.description.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// empty\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.symbol.description.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.has-instance.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.has-instance.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.hasInstance` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.hasinstance\ndefineWellKnownSymbol('hasInstance');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.symbol.has-instance.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js":
/*!******************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.isConcatSpreadable` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable\ndefineWellKnownSymbol('isConcatSpreadable');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.iterator.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.iterator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.iterator` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.iterator\ndefineWellKnownSymbol('iterator');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.symbol.iterator.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../node_modules/core-js-pure/internals/global.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../node_modules/core-js-pure/internals/is-pure.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../node_modules/core-js-pure/internals/descriptors.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"../node_modules/core-js-pure/internals/native-symbol.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../node_modules/core-js-pure/internals/fails.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../node_modules/core-js-pure/internals/has.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"../node_modules/core-js-pure/internals/is-array.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../node_modules/core-js-pure/internals/is-object.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../node_modules/core-js-pure/internals/to-object.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"../node_modules/core-js-pure/internals/to-primitive.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ \"../node_modules/core-js-pure/internals/object-create.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"../node_modules/core-js-pure/internals/object-keys.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"../node_modules/core-js-pure/internals/object-get-own-property-names.js\");\nvar getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ \"../node_modules/core-js-pure/internals/object-get-own-property-names-external.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"../node_modules/core-js-pure/internals/object-get-own-property-symbols.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../node_modules/core-js-pure/internals/object-define-property.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"../node_modules/core-js-pure/internals/object-property-is-enumerable.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"../node_modules/core-js-pure/internals/redefine.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"../node_modules/core-js-pure/internals/shared.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"../node_modules/core-js-pure/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"../node_modules/core-js-pure/internals/hidden-keys.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"../node_modules/core-js-pure/internals/uid.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/wrapped-well-known-symbol */ \"../node_modules/core-js-pure/internals/wrapped-well-known-symbol.js\");\nvar defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"../node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"../node_modules/core-js-pure/internals/internal-state.js\");\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"../node_modules/core-js-pure/internals/array-iteration.js\").forEach;\n\nvar HIDDEN = sharedKey('hidden');\nvar SYMBOL = 'Symbol';\nvar PROTOTYPE = 'prototype';\nvar TO_PRIMITIVE = wellKnownSymbol('toPrimitive');\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(SYMBOL);\nvar ObjectPrototype = Object[PROTOTYPE];\nvar $Symbol = global.Symbol;\nvar JSON = global.JSON;\nvar nativeJSONStringify = JSON && JSON.stringify;\nvar nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\nvar nativeDefineProperty = definePropertyModule.f;\nvar nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;\nvar nativePropertyIsEnumerable = propertyIsEnumerableModule.f;\nvar AllSymbols = shared('symbols');\nvar ObjectPrototypeSymbols = shared('op-symbols');\nvar StringToSymbolRegistry = shared('string-to-symbol-registry');\nvar SymbolToStringRegistry = shared('symbol-to-string-registry');\nvar WellKnownSymbolsStore = shared('wks');\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDescriptor = DESCRIPTORS && fails(function () {\n  return nativeObjectCreate(nativeDefineProperty({}, 'a', {\n    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (O, P, Attributes) {\n  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);\n  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];\n  nativeDefineProperty(O, P, Attributes);\n  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {\n    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);\n  }\n} : nativeDefineProperty;\n\nvar wrap = function (tag, description) {\n  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);\n  setInternalState(symbol, {\n    type: SYMBOL,\n    tag: tag,\n    description: description\n  });\n  if (!DESCRIPTORS) symbol.description = description;\n  return symbol;\n};\n\nvar isSymbol = NATIVE_SYMBOL && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return Object(it) instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(O, P, Attributes) {\n  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);\n  anObject(O);\n  var key = toPrimitive(P, true);\n  anObject(Attributes);\n  if (has(AllSymbols, key)) {\n    if (!Attributes.enumerable) {\n      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));\n      O[HIDDEN][key] = true;\n    } else {\n      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;\n      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });\n    } return setSymbolDescriptor(O, key, Attributes);\n  } return nativeDefineProperty(O, key, Attributes);\n};\n\nvar $defineProperties = function defineProperties(O, Properties) {\n  anObject(O);\n  var properties = toIndexedObject(Properties);\n  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));\n  $forEach(keys, function (key) {\n    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);\n  });\n  return O;\n};\n\nvar $create = function create(O, Properties) {\n  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);\n};\n\nvar $propertyIsEnumerable = function propertyIsEnumerable(V) {\n  var P = toPrimitive(V, true);\n  var enumerable = nativePropertyIsEnumerable.call(this, P);\n  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;\n  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;\n};\n\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {\n  var it = toIndexedObject(O);\n  var key = toPrimitive(P, true);\n  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;\n  var descriptor = nativeGetOwnPropertyDescriptor(it, key);\n  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {\n    descriptor.enumerable = true;\n  }\n  return descriptor;\n};\n\nvar $getOwnPropertyNames = function getOwnPropertyNames(O) {\n  var names = nativeGetOwnPropertyNames(toIndexedObject(O));\n  var result = [];\n  $forEach(names, function (key) {\n    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);\n  });\n  return result;\n};\n\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(O) {\n  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;\n  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));\n  var result = [];\n  $forEach(names, function (key) {\n    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {\n      result.push(AllSymbols[key]);\n    }\n  });\n  return result;\n};\n\n// `Symbol` constructor\n// https://tc39.github.io/ecma262/#sec-symbol-constructor\nif (!NATIVE_SYMBOL) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');\n    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);\n    var tag = uid(description);\n    var setter = function (value) {\n      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));\n    };\n    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });\n    return wrap(tag, description);\n  };\n\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return getInternalState(this).tag;\n  });\n\n  propertyIsEnumerableModule.f = $propertyIsEnumerable;\n  definePropertyModule.f = $defineProperty;\n  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;\n  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;\n  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS) {\n    // https://github.com/tc39/proposal-Symbol-description\n    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {\n      configurable: true,\n      get: function description() {\n        return getInternalState(this).description;\n      }\n    });\n    if (!IS_PURE) {\n      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });\n    }\n  }\n\n  wrappedWellKnownSymbolModule.f = function (name) {\n    return wrap(wellKnownSymbol(name), name);\n  };\n}\n\n$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {\n  Symbol: $Symbol\n});\n\n$forEach(objectKeys(WellKnownSymbolsStore), function (name) {\n  defineWellKnownSymbol(name);\n});\n\n$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {\n  // `Symbol.for` method\n  // https://tc39.github.io/ecma262/#sec-symbol.for\n  'for': function (key) {\n    var string = String(key);\n    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];\n    var symbol = $Symbol(string);\n    StringToSymbolRegistry[string] = symbol;\n    SymbolToStringRegistry[symbol] = string;\n    return symbol;\n  },\n  // `Symbol.keyFor` method\n  // https://tc39.github.io/ecma262/#sec-symbol.keyfor\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');\n    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];\n  },\n  useSetter: function () { USE_SETTER = true; },\n  useSimple: function () { USE_SETTER = false; }\n});\n\n$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {\n  // `Object.create` method\n  // https://tc39.github.io/ecma262/#sec-object.create\n  create: $create,\n  // `Object.defineProperty` method\n  // https://tc39.github.io/ecma262/#sec-object.defineproperty\n  defineProperty: $defineProperty,\n  // `Object.defineProperties` method\n  // https://tc39.github.io/ecma262/#sec-object.defineproperties\n  defineProperties: $defineProperties,\n  // `Object.getOwnPropertyDescriptor` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor\n});\n\n$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {\n  // `Object.getOwnPropertyNames` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // `Object.getOwnPropertySymbols` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives\n// https://bugs.chromium.org/p/v8/issues/detail?id=3443\n$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {\n  getOwnPropertySymbols: function getOwnPropertySymbols(it) {\n    return getOwnPropertySymbolsModule.f(toObject(it));\n  }\n});\n\n// `JSON.stringify` method behavior with symbols\n// https://tc39.github.io/ecma262/#sec-json.stringify\nJSON && $({ target: 'JSON', stat: true, forced: !NATIVE_SYMBOL || fails(function () {\n  var symbol = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  return nativeJSONStringify([symbol]) != '[null]'\n    // WebKit converts symbol values to JSON as null\n    || nativeJSONStringify({ a: symbol }) != '{}'\n    // V8 throws on boxed symbols\n    || nativeJSONStringify(Object(symbol)) != '{}';\n}) }, {\n  stringify: function stringify(it) {\n    var args = [it];\n    var index = 1;\n    var replacer, $replacer;\n    while (arguments.length > index) args.push(arguments[index++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return nativeJSONStringify.apply(JSON, args);\n  }\n});\n\n// `Symbol.prototype[@@toPrimitive]` method\n// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive\nif (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {\n  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n}\n// `Symbol.prototype[@@toStringTag]` property\n// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag\nsetToStringTag($Symbol, SYMBOL);\n\nhiddenKeys[HIDDEN] = true;\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.symbol.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.match-all.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.match-all.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.matchAll` well-known symbol\ndefineWellKnownSymbol('matchAll');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.symbol.match-all.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.match.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.match.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.match` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.match\ndefineWellKnownSymbol('match');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.symbol.match.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.replace.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.replace.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.replace` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.replace\ndefineWellKnownSymbol('replace');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.symbol.replace.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.search.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.search.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.search` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.search\ndefineWellKnownSymbol('search');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.symbol.search.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.species.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.species.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.species` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.species\ndefineWellKnownSymbol('species');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.symbol.species.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.split.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.split.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.split` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.split\ndefineWellKnownSymbol('split');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.symbol.split.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.to-primitive.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.to-primitive.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.toPrimitive` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.toprimitive\ndefineWellKnownSymbol('toPrimitive');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.symbol.to-primitive.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.to-string-tag.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.to-string-tag.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.toStringTag` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.tostringtag\ndefineWellKnownSymbol('toStringTag');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.symbol.to-string-tag.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.symbol.unscopables.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.unscopables` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.unscopables\ndefineWellKnownSymbol('unscopables');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/es.symbol.unscopables.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.aggregate-error.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.aggregate-error.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../node_modules/core-js-pure/internals/descriptors.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"../node_modules/core-js-pure/internals/object-get-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"../node_modules/core-js-pure/internals/object-set-prototype-of.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"../node_modules/core-js-pure/internals/object-create.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"../node_modules/core-js-pure/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"../node_modules/core-js-pure/internals/iterate.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"../node_modules/core-js-pure/internals/internal-state.js\");\n\nvar setInternalState = InternalStateModule.set;\nvar getInternalAggregateErrorState = InternalStateModule.getterFor('AggregateError');\n\nvar $AggregateError = function AggregateError(errors, message) {\n  var that = this;\n  if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message);\n  if (setPrototypeOf) {\n    that = setPrototypeOf(new Error(message), getPrototypeOf(that));\n  }\n  var errorsArray = [];\n  iterate(errors, errorsArray.push, errorsArray);\n  if (DESCRIPTORS) setInternalState(that, { errors: errorsArray, type: 'AggregateError' });\n  else that.errors = errorsArray;\n  if (message !== undefined) createNonEnumerableProperty(that, 'message', String(message));\n  return that;\n};\n\n$AggregateError.prototype = create(Error.prototype, {\n  constructor: createPropertyDescriptor(5, $AggregateError),\n  message: createPropertyDescriptor(5, ''),\n  name: createPropertyDescriptor(5, 'AggregateError'),\n  toString: createPropertyDescriptor(5, function toString() {\n    var name = anObject(this).name;\n    name = name === undefined ? 'AggregateError' : String(name);\n    var message = this.message;\n    message = message === undefined ? '' : String(message);\n    return name + ': ' + message;\n  })\n});\n\nif (DESCRIPTORS) defineProperty.f($AggregateError.prototype, 'errors', {\n  get: function () {\n    return getInternalAggregateErrorState(this).errors;\n  },\n  configurable: true\n});\n\n$({ global: true }, {\n  AggregateError: $AggregateError\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.aggregate-error.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.map.delete-all.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.map.delete-all.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../node_modules/core-js-pure/internals/is-pure.js\");\nvar collectionDeleteAll = __webpack_require__(/*! ../internals/collection-delete-all */ \"../node_modules/core-js-pure/internals/collection-delete-all.js\");\n\n// `Map.prototype.deleteAll` method\n// https://github.com/tc39/proposal-collection-methods\n$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {\n  deleteAll: function deleteAll(/* ...elements */) {\n    return collectionDeleteAll.apply(this, arguments);\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.map.delete-all.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.map.every.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.map.every.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../node_modules/core-js-pure/internals/is-pure.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"../node_modules/core-js-pure/internals/bind-context.js\");\nvar getMapIterator = __webpack_require__(/*! ../internals/get-map-iterator */ \"../node_modules/core-js-pure/internals/get-map-iterator.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"../node_modules/core-js-pure/internals/iterate.js\");\n\n// `Map.prototype.every` method\n// https://github.com/tc39/proposal-collection-methods\n$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {\n  every: function every(callbackfn /* , thisArg */) {\n    var map = anObject(this);\n    var iterator = getMapIterator(map);\n    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n    return !iterate(iterator, function (key, value) {\n      if (!boundFunction(value, key, map)) return iterate.stop();\n    }, undefined, true, true).stopped;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.map.every.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.map.filter.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.map.filter.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../node_modules/core-js-pure/internals/is-pure.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../node_modules/core-js-pure/internals/get-built-in.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../node_modules/core-js-pure/internals/a-function.js\");\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"../node_modules/core-js-pure/internals/bind-context.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"../node_modules/core-js-pure/internals/species-constructor.js\");\nvar getMapIterator = __webpack_require__(/*! ../internals/get-map-iterator */ \"../node_modules/core-js-pure/internals/get-map-iterator.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"../node_modules/core-js-pure/internals/iterate.js\");\n\n// `Map.prototype.filter` method\n// https://github.com/tc39/proposal-collection-methods\n$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {\n  filter: function filter(callbackfn /* , thisArg */) {\n    var map = anObject(this);\n    var iterator = getMapIterator(map);\n    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n    var newMap = new (speciesConstructor(map, getBuiltIn('Map')))();\n    var setter = aFunction(newMap.set);\n    iterate(iterator, function (key, value) {\n      if (boundFunction(value, key, map)) setter.call(newMap, key, value);\n    }, undefined, true, true);\n    return newMap;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.map.filter.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.map.find-key.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.map.find-key.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../node_modules/core-js-pure/internals/is-pure.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"../node_modules/core-js-pure/internals/bind-context.js\");\nvar getMapIterator = __webpack_require__(/*! ../internals/get-map-iterator */ \"../node_modules/core-js-pure/internals/get-map-iterator.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"../node_modules/core-js-pure/internals/iterate.js\");\n\n// `Map.prototype.findKey` method\n// https://github.com/tc39/proposal-collection-methods\n$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {\n  findKey: function findKey(callbackfn /* , thisArg */) {\n    var map = anObject(this);\n    var iterator = getMapIterator(map);\n    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n    return iterate(iterator, function (key, value) {\n      if (boundFunction(value, key, map)) return iterate.stop(key);\n    }, undefined, true, true).result;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.map.find-key.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.map.find.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.map.find.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../node_modules/core-js-pure/internals/is-pure.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"../node_modules/core-js-pure/internals/bind-context.js\");\nvar getMapIterator = __webpack_require__(/*! ../internals/get-map-iterator */ \"../node_modules/core-js-pure/internals/get-map-iterator.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"../node_modules/core-js-pure/internals/iterate.js\");\n\n// `Map.prototype.find` method\n// https://github.com/tc39/proposal-collection-methods\n$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {\n  find: function find(callbackfn /* , thisArg */) {\n    var map = anObject(this);\n    var iterator = getMapIterator(map);\n    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n    return iterate(iterator, function (key, value) {\n      if (boundFunction(value, key, map)) return iterate.stop(value);\n    }, undefined, true, true).result;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.map.find.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.map.from.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.map.from.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar from = __webpack_require__(/*! ../internals/collection-from */ \"../node_modules/core-js-pure/internals/collection-from.js\");\n\n// `Map.from` method\n// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from\n$({ target: 'Map', stat: true }, {\n  from: from\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.map.from.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.map.group-by.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.map.group-by.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"../node_modules/core-js-pure/internals/iterate.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../node_modules/core-js-pure/internals/a-function.js\");\n\n// `Map.groupBy` method\n// https://github.com/tc39/proposal-collection-methods\n$({ target: 'Map', stat: true }, {\n  groupBy: function groupBy(iterable, keyDerivative) {\n    var newMap = new this();\n    aFunction(keyDerivative);\n    var has = aFunction(newMap.has);\n    var get = aFunction(newMap.get);\n    var set = aFunction(newMap.set);\n    iterate(iterable, function (element) {\n      var derivedKey = keyDerivative(element);\n      if (!has.call(newMap, derivedKey)) set.call(newMap, derivedKey, [element]);\n      else get.call(newMap, derivedKey).push(element);\n    });\n    return newMap;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.map.group-by.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.map.includes.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.map.includes.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../node_modules/core-js-pure/internals/is-pure.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar getMapIterator = __webpack_require__(/*! ../internals/get-map-iterator */ \"../node_modules/core-js-pure/internals/get-map-iterator.js\");\nvar sameValueZero = __webpack_require__(/*! ../internals/same-value-zero */ \"../node_modules/core-js-pure/internals/same-value-zero.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"../node_modules/core-js-pure/internals/iterate.js\");\n\n// `Map.prototype.includes` method\n// https://github.com/tc39/proposal-collection-methods\n$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {\n  includes: function includes(searchElement) {\n    return iterate(getMapIterator(anObject(this)), function (key, value) {\n      if (sameValueZero(value, searchElement)) return iterate.stop();\n    }, undefined, true, true).stopped;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.map.includes.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.map.key-by.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.map.key-by.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"../node_modules/core-js-pure/internals/iterate.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../node_modules/core-js-pure/internals/a-function.js\");\n\n// `Map.keyBy` method\n// https://github.com/tc39/proposal-collection-methods\n$({ target: 'Map', stat: true }, {\n  keyBy: function keyBy(iterable, keyDerivative) {\n    var newMap = new this();\n    aFunction(keyDerivative);\n    var setter = aFunction(newMap.set);\n    iterate(iterable, function (element) {\n      setter.call(newMap, keyDerivative(element), element);\n    });\n    return newMap;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.map.key-by.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.map.key-of.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.map.key-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../node_modules/core-js-pure/internals/is-pure.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar getMapIterator = __webpack_require__(/*! ../internals/get-map-iterator */ \"../node_modules/core-js-pure/internals/get-map-iterator.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"../node_modules/core-js-pure/internals/iterate.js\");\n\n// `Map.prototype.includes` method\n// https://github.com/tc39/proposal-collection-methods\n$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {\n  keyOf: function keyOf(searchElement) {\n    return iterate(getMapIterator(anObject(this)), function (key, value) {\n      if (value === searchElement) return iterate.stop(key);\n    }, undefined, true, true).result;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.map.key-of.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.map.map-keys.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.map.map-keys.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../node_modules/core-js-pure/internals/is-pure.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../node_modules/core-js-pure/internals/get-built-in.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../node_modules/core-js-pure/internals/a-function.js\");\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"../node_modules/core-js-pure/internals/bind-context.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"../node_modules/core-js-pure/internals/species-constructor.js\");\nvar getMapIterator = __webpack_require__(/*! ../internals/get-map-iterator */ \"../node_modules/core-js-pure/internals/get-map-iterator.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"../node_modules/core-js-pure/internals/iterate.js\");\n\n// `Map.prototype.mapKeys` method\n// https://github.com/tc39/proposal-collection-methods\n$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {\n  mapKeys: function mapKeys(callbackfn /* , thisArg */) {\n    var map = anObject(this);\n    var iterator = getMapIterator(map);\n    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n    var newMap = new (speciesConstructor(map, getBuiltIn('Map')))();\n    var setter = aFunction(newMap.set);\n    iterate(iterator, function (key, value) {\n      setter.call(newMap, boundFunction(value, key, map), value);\n    }, undefined, true, true);\n    return newMap;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.map.map-keys.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.map.map-values.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.map.map-values.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../node_modules/core-js-pure/internals/is-pure.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../node_modules/core-js-pure/internals/get-built-in.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../node_modules/core-js-pure/internals/a-function.js\");\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"../node_modules/core-js-pure/internals/bind-context.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"../node_modules/core-js-pure/internals/species-constructor.js\");\nvar getMapIterator = __webpack_require__(/*! ../internals/get-map-iterator */ \"../node_modules/core-js-pure/internals/get-map-iterator.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"../node_modules/core-js-pure/internals/iterate.js\");\n\n// `Map.prototype.mapValues` method\n// https://github.com/tc39/proposal-collection-methods\n$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {\n  mapValues: function mapValues(callbackfn /* , thisArg */) {\n    var map = anObject(this);\n    var iterator = getMapIterator(map);\n    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n    var newMap = new (speciesConstructor(map, getBuiltIn('Map')))();\n    var setter = aFunction(newMap.set);\n    iterate(iterator, function (key, value) {\n      setter.call(newMap, key, boundFunction(value, key, map));\n    }, undefined, true, true);\n    return newMap;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.map.map-values.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.map.merge.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.map.merge.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../node_modules/core-js-pure/internals/is-pure.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../node_modules/core-js-pure/internals/a-function.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"../node_modules/core-js-pure/internals/iterate.js\");\n\n// `Map.prototype.merge` method\n// https://github.com/tc39/proposal-collection-methods\n$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {\n  // eslint-disable-next-line no-unused-vars\n  merge: function merge(iterable /* ...iterbles */) {\n    var map = anObject(this);\n    var setter = aFunction(map.set);\n    var i = 0;\n    while (i < arguments.length) {\n      iterate(arguments[i++], setter, map, true);\n    }\n    return map;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.map.merge.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.map.of.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.map.of.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar of = __webpack_require__(/*! ../internals/collection-of */ \"../node_modules/core-js-pure/internals/collection-of.js\");\n\n// `Map.of` method\n// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of\n$({ target: 'Map', stat: true }, {\n  of: of\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.map.of.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.map.reduce.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.map.reduce.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../node_modules/core-js-pure/internals/is-pure.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../node_modules/core-js-pure/internals/a-function.js\");\nvar getMapIterator = __webpack_require__(/*! ../internals/get-map-iterator */ \"../node_modules/core-js-pure/internals/get-map-iterator.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"../node_modules/core-js-pure/internals/iterate.js\");\n\n// `Map.prototype.reduce` method\n// https://github.com/tc39/proposal-collection-methods\n$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {\n  reduce: function reduce(callbackfn /* , initialValue */) {\n    var map = anObject(this);\n    var iterator = getMapIterator(map);\n    var noInitial = arguments.length < 2;\n    var accumulator = noInitial ? undefined : arguments[1];\n    aFunction(callbackfn);\n    iterate(iterator, function (key, value) {\n      if (noInitial) {\n        noInitial = false;\n        accumulator = value;\n      } else {\n        accumulator = callbackfn(accumulator, value, key, map);\n      }\n    }, undefined, true, true);\n    if (noInitial) throw TypeError('Reduce of empty map with no initial value');\n    return accumulator;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.map.reduce.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.map.some.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.map.some.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../node_modules/core-js-pure/internals/is-pure.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"../node_modules/core-js-pure/internals/bind-context.js\");\nvar getMapIterator = __webpack_require__(/*! ../internals/get-map-iterator */ \"../node_modules/core-js-pure/internals/get-map-iterator.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"../node_modules/core-js-pure/internals/iterate.js\");\n\n// `Set.prototype.some` method\n// https://github.com/tc39/proposal-collection-methods\n$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {\n  some: function some(callbackfn /* , thisArg */) {\n    var map = anObject(this);\n    var iterator = getMapIterator(map);\n    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n    return iterate(iterator, function (key, value) {\n      if (boundFunction(value, key, map)) return iterate.stop();\n    }, undefined, true, true).stopped;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.map.some.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.map.update-or-insert.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.map.update-or-insert.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// TODO: remove from `core-js@4`\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../node_modules/core-js-pure/internals/is-pure.js\");\nvar $upsert = __webpack_require__(/*! ../internals/map-upsert */ \"../node_modules/core-js-pure/internals/map-upsert.js\");\n\n// `Map.prototype.updateOrInsert` method (replaced by `Map.prototype.upsert`)\n// https://github.com/thumbsupep/proposal-upsert\n$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {\n  updateOrInsert: $upsert\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.map.update-or-insert.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.map.update.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.map.update.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../node_modules/core-js-pure/internals/is-pure.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../node_modules/core-js-pure/internals/an-object.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../node_modules/core-js-pure/internals/a-function.js\");\n\n// `Set.prototype.update` method\n// https://github.com/tc39/proposal-collection-methods\n$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {\n  update: function update(key, callback /* , thunk */) {\n    var map = anObject(this);\n    var length = arguments.length;\n    aFunction(callback);\n    var isPresentInMap = map.has(key);\n    if (!isPresentInMap && length < 3) {\n      throw TypeError('Updating absent value');\n    }\n    var value = isPresentInMap ? map.get(key) : aFunction(length > 2 ? arguments[2] : undefined)(key, map);\n    map.set(key, callback(value, key, map));\n    return map;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.map.update.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.map.upsert.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.map.upsert.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../node_modules/core-js-pure/internals/is-pure.js\");\nvar $upsert = __webpack_require__(/*! ../internals/map-upsert */ \"../node_modules/core-js-pure/internals/map-upsert.js\");\n\n// `Map.prototype.upsert` method\n// https://github.com/thumbsupep/proposal-upsert\n$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {\n  upsert: $upsert\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.map.upsert.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.promise.all-settled.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.promise.all-settled.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// TODO: Remove from `core-js@4`\n__webpack_require__(/*! ./es.promise.all-settled.js */ \"../node_modules/core-js-pure/modules/es.promise.all-settled.js\");\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.promise.all-settled.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.promise.any.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.promise.any.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../node_modules/core-js-pure/internals/a-function.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../node_modules/core-js-pure/internals/get-built-in.js\");\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"../node_modules/core-js-pure/internals/new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ../internals/perform */ \"../node_modules/core-js-pure/internals/perform.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"../node_modules/core-js-pure/internals/iterate.js\");\n\nvar PROMISE_ANY_ERROR = 'No one promise resolved';\n\n// `Promise.any` method\n// https://github.com/tc39/proposal-promise-any\n$({ target: 'Promise', stat: true }, {\n  any: function any(iterable) {\n    var C = this;\n    var capability = newPromiseCapabilityModule.f(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var promiseResolve = aFunction(C.resolve);\n      var errors = [];\n      var counter = 0;\n      var remaining = 1;\n      var alreadyResolved = false;\n      iterate(iterable, function (promise) {\n        var index = counter++;\n        var alreadyRejected = false;\n        errors.push(undefined);\n        remaining++;\n        promiseResolve.call(C, promise).then(function (value) {\n          if (alreadyRejected || alreadyResolved) return;\n          alreadyResolved = true;\n          resolve(value);\n        }, function (e) {\n          if (alreadyRejected || alreadyResolved) return;\n          alreadyRejected = true;\n          errors[index] = e;\n          --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));\n        });\n      });\n      --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.promise.any.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.promise.try.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.promise.try.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../node_modules/core-js-pure/internals/export.js\");\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"../node_modules/core-js-pure/internals/new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ../internals/perform */ \"../node_modules/core-js-pure/internals/perform.js\");\n\n// `Promise.try` method\n// https://github.com/tc39/proposal-promise-try\n$({ target: 'Promise', stat: true }, {\n  'try': function (callbackfn) {\n    var promiseCapability = newPromiseCapabilityModule.f(this);\n    var result = perform(callbackfn);\n    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);\n    return promiseCapability.promise;\n  }\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.promise.try.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.asyncDispose` well-known symbol\n// https://github.com/tc39/proposal-using-statement\ndefineWellKnownSymbol('asyncDispose');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.symbol.dispose.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.symbol.dispose.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.dispose` well-known symbol\n// https://github.com/tc39/proposal-using-statement\ndefineWellKnownSymbol('dispose');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.symbol.dispose.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.symbol.observable.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.symbol.observable.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.observable` well-known symbol\n// https://github.com/tc39/proposal-observable\ndefineWellKnownSymbol('observable');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.symbol.observable.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.patternMatch` well-known symbol\n// https://github.com/tc39/proposal-pattern-matching\ndefineWellKnownSymbol('patternMatch');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/esnext.symbol.replace-all.js":
/*!*************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/esnext.symbol.replace-all.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// TODO: remove from `core-js@4`\nvar defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\ndefineWellKnownSymbol('replaceAll');\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/esnext.symbol.replace-all.js?");

/***/ }),

/***/ "../node_modules/core-js-pure/modules/web.dom-collections.iterator.js":
/*!****************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/web.dom-collections.iterator.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./es.array.iterator */ \"../node_modules/core-js-pure/modules/es.array.iterator.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"../node_modules/core-js-pure/internals/dom-iterables.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../node_modules/core-js-pure/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"../node_modules/core-js-pure/internals/iterators.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  if (CollectionPrototype && !CollectionPrototype[TO_STRING_TAG]) {\n    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);\n  }\n  Iterators[COLLECTION_NAME] = Iterators.Array;\n}\n\n\n//# sourceURL=webpack:///../node_modules/core-js-pure/modules/web.dom-collections.iterator.js?");

/***/ }),

/***/ "../node_modules/regenerator-runtime/runtime.js":
/*!******************************************************!*\
  !*** ../node_modules/regenerator-runtime/runtime.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar runtime = (function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  exports.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  exports.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  exports.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  exports.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return PromiseImpl.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return PromiseImpl.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new PromiseImpl(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  exports.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    if (PromiseImpl === void 0) PromiseImpl = Promise;\n\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList),\n      PromiseImpl\n    );\n\n    return exports.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  exports.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n\n  // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n  return exports;\n\n}(\n  // If this script is executing as a CommonJS module, use module.exports\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\n  // object. Either way, the resulting object will be used to initialize\n  // the regeneratorRuntime variable at the top of this file.\n   true ? module.exports : undefined\n));\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n}\n\n\n//# sourceURL=webpack:///../node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///../node_modules/webpack/buildin/global.js?");

/***/ }),

/***/ "../packages/dom/src/css.ts":
/*!**********************************!*\
  !*** ../packages/dom/src/css.ts ***!
  \**********************************/
/*! exports provided: createCssSelectorMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCssSelectorMatcher\", function() { return createCssSelectorMatcher; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/slice */ \"../node_modules/@babel/runtime-corejs3/core-js/instance/slice.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/array/from */ \"../node_modules/@babel/runtime-corejs3/core-js/array/from.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/symbol */ \"../node_modules/@babel/runtime-corejs3/core-js/symbol.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator-method */ \"../node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator */ \"../node_modules/@babel/runtime-corejs3/core-js/get-iterator.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"../node_modules/@babel/runtime-corejs3/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _owner_document_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./owner-document.ts */ \"../packages/dom/src/owner-document.ts\");\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\n\n\n\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_2___default.a === \"undefined\" || _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_3___default()(o) == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4___default()(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { var _context2; if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = Object.prototype.toString.call(o)).call(_context2, 8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return _babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n/**\n * Find the elements corresponding to the given {@link\n * CssSelector}.\n *\n * The given CssSelector returns all elements within `scope` that it matches.\n * However, the selector is evaluated relative to the Document as a whole.\n * *(XXX is this intentional, a mistake, or compromise?)*\n *\n * The function is curried, taking first the selector and then the scope.\n *\n * As there may be multiple matches for a given selector, the matcher will\n * return an (async) generator that produces each match in the order they are\n * found in the text.\n *\n * Each matching element is returned as a {@link https://developer.mozilla.org/en-US/docs/Web/API/Range\n * | Range} surrounding that element. This in order to make its output reusable\n * as the scope for any subsequents selectors that {@link\n * Selector.refinedBy | refine} this CssSelector.\n *\n * @param selector - The {@link CssSelector} to be\n * anchored\n * @returns A {@link Matcher} function that applies\n * `selector` to a given {@link https://developer.mozilla.org/en-US/docs/Web/API/Range\n * | Range}\n *\n * @public\n */\n\nfunction createCssSelectorMatcher(selector) {\n  return /*#__PURE__*/function () {\n    var _matchAll = Object(_babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_6__[\"default\"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee(scope) {\n      var document, _iterator, _step, element, range;\n\n      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              document = Object(_owner_document_ts__WEBPACK_IMPORTED_MODULE_8__[\"ownerDocument\"])(scope);\n              _iterator = _createForOfIteratorHelper(document.querySelectorAll(selector.value));\n              _context.prev = 2;\n\n              _iterator.s();\n\n            case 4:\n              if ((_step = _iterator.n()).done) {\n                _context.next = 13;\n                break;\n              }\n\n              element = _step.value;\n              range = document.createRange();\n              range.selectNode(element);\n\n              if (!(scope.isPointInRange(range.startContainer, range.startOffset) && scope.isPointInRange(range.endContainer, range.endOffset))) {\n                _context.next = 11;\n                break;\n              }\n\n              _context.next = 11;\n              return range;\n\n            case 11:\n              _context.next = 4;\n              break;\n\n            case 13:\n              _context.next = 18;\n              break;\n\n            case 15:\n              _context.prev = 15;\n              _context.t0 = _context[\"catch\"](2);\n\n              _iterator.e(_context.t0);\n\n            case 18:\n              _context.prev = 18;\n\n              _iterator.f();\n\n              return _context.finish(18);\n\n            case 21:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[2, 15, 18, 21]]);\n    }));\n\n    function matchAll(_x) {\n      return _matchAll.apply(this, arguments);\n    }\n\n    return matchAll;\n  }();\n}\n\n//# sourceURL=webpack:///../packages/dom/src/css.ts?");

/***/ }),

/***/ "../packages/dom/src/highlight-range.ts":
/*!**********************************************!*\
  !*** ../packages/dom/src/highlight-range.ts ***!
  \**********************************************/
/*! exports provided: highlightRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"highlightRange\", function() { return highlightRange; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/keys */ \"../node_modules/@babel/runtime-corejs3/core-js/object/keys.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/slice */ \"../node_modules/@babel/runtime-corejs3/core-js/instance/slice.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/array/from */ \"../node_modules/@babel/runtime-corejs3/core-js/array/from.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/symbol */ \"../node_modules/@babel/runtime-corejs3/core-js/symbol.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator-method */ \"../node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator */ \"../node_modules/@babel/runtime-corejs3/core-js/get-iterator.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _owner_document_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./owner-document.ts */ \"../packages/dom/src/owner-document.ts\");\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\n\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_3___default.a === \"undefined\" || _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_4___default()(o) == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_5___default()(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { var _context; if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_1___default()(_context = Object.prototype.toString.call(o)).call(_context, 8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return _babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default()(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n/**\n * Wrap each text node in a given DOM Range with a `<mark>` or other element.\n *\n * If the Range start and/or ends within a Text node, that node will be split\n * in order to only wrap the contained part in the mark element.\n *\n * The highlight can be removed again by calling the function that cleans up the\n * wrapper elements. Note that this might not perfectly restore the DOM to its\n * previous state: text nodes that were split are not merged again. One could\n * consider running `range.commonAncestorContainer.normalize()` afterwards to\n * join all adjacent text nodes.\n *\n * @param range - A DOM Range object. Note that as highlighting modifies the\n * DOM, the range may be unusable afterwards.\n * @param tagName - The element used to wrap text nodes. Defaults to 'mark'.\n * @param attributes - An object defining any attributes to be set on the\n * wrapper elements\n * @returns A function that removes the created highlight.\n *\n * @public\n */\n\nfunction highlightRange(range) {\n  var tagName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'mark';\n  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  // First put all nodes in an array (splits start and end nodes if needed)\n  var nodes = textNodesInRange(range); // Highlight each node\n\n  var highlightElements = [];\n\n  var _iterator = _createForOfIteratorHelper(nodes),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var node = _step.value;\n      var highlightElement = wrapNodeInHighlight(node, tagName, attributes);\n      highlightElements.push(highlightElement);\n    } // Return a function that cleans up the highlightElements.\n\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  function removeHighlights() {\n    // Remove each of the created highlightElements.\n    var _iterator2 = _createForOfIteratorHelper(highlightElements),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var highlightElement = _step2.value;\n        removeHighlight(highlightElement);\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n  }\n\n  return removeHighlights;\n} // Return an array of the text nodes in the range. Split the start and end nodes if required.\n\nfunction textNodesInRange(range) {\n  // If the start or end node is a text node and only partly in the range, split it.\n  if (isTextNode(range.startContainer) && range.startOffset > 0) {\n    var endOffset = range.endOffset; // (this may get lost when the splitting the node)\n\n    var createdNode = range.startContainer.splitText(range.startOffset);\n\n    if (range.endContainer === range.startContainer) {\n      // If the end was in the same container, it will now be in the newly created node.\n      range.setEnd(createdNode, endOffset - range.startOffset);\n    }\n\n    range.setStart(createdNode, 0);\n  }\n\n  if (isTextNode(range.endContainer) && range.endOffset < range.endContainer.length) {\n    range.endContainer.splitText(range.endOffset);\n  } // Collect the text nodes.\n\n\n  var walker = Object(_owner_document_ts__WEBPACK_IMPORTED_MODULE_6__[\"ownerDocument\"])(range).createTreeWalker(range.commonAncestorContainer, NodeFilter.SHOW_TEXT, {\n    acceptNode: function acceptNode(node) {\n      return range.intersectsNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;\n    }\n  });\n  walker.currentNode = range.startContainer; // // Optimise by skipping nodes that are explicitly outside the range.\n  // const NodeTypesWithCharacterOffset = [\n  //  Node.TEXT_NODE,\n  //  Node.PROCESSING_INSTRUCTION_NODE,\n  //  Node.COMMENT_NODE,\n  // ];\n  // if (!NodeTypesWithCharacterOffset.includes(range.startContainer.nodeType)) {\n  //   if (range.startOffset < range.startContainer.childNodes.length) {\n  //     walker.currentNode = range.startContainer.childNodes[range.startOffset];\n  //   } else {\n  //     walker.nextSibling(); // TODO verify this is correct.\n  //   }\n  // }\n\n  var nodes = [];\n  if (isTextNode(walker.currentNode)) nodes.push(walker.currentNode);\n\n  while (walker.nextNode() && range.comparePoint(walker.currentNode, 0) !== 1) {\n    nodes.push(walker.currentNode);\n  }\n\n  return nodes;\n} // Replace [node] with <tagName ...attributes>[node]</tagName>\n\n\nfunction wrapNodeInHighlight(node, tagName, attributes) {\n  var document = node.ownerDocument;\n  var highlightElement = document.createElement(tagName);\n\n  _babel_runtime_corejs3_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(attributes).forEach(function (key) {\n    highlightElement.setAttribute(key, attributes[key]);\n  });\n\n  var tempRange = document.createRange();\n  tempRange.selectNode(node);\n  tempRange.surroundContents(highlightElement);\n  return highlightElement;\n} // Remove a highlight element created with wrapNodeInHighlight.\n\n\nfunction removeHighlight(highlightElement) {\n  // If it has somehow been removed already, there is nothing to be done.\n  if (!highlightElement.parentNode) return;\n\n  if (highlightElement.childNodes.length === 1) {\n    highlightElement.replaceWith(highlightElement.firstChild);\n  } else {\n    // If the highlight somehow contains multiple nodes now, move them all.\n    while (highlightElement.firstChild) {\n      highlightElement.parentNode.insertBefore(highlightElement.firstChild, highlightElement);\n    }\n\n    highlightElement.remove();\n  }\n}\n\nfunction isTextNode(node) {\n  return node.nodeType === Node.TEXT_NODE;\n}\n\n//# sourceURL=webpack:///../packages/dom/src/highlight-range.ts?");

/***/ }),

/***/ "../packages/dom/src/index.ts":
/*!************************************!*\
  !*** ../packages/dom/src/index.ts ***!
  \************************************/
/*! exports provided: createCssSelectorMatcher, makeCreateRangeSelectorMatcher, describeTextQuote, createTextQuoteSelectorMatcher, describeTextPosition, createTextPositionSelectorMatcher, highlightRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css.ts */ \"../packages/dom/src/css.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createCssSelectorMatcher\", function() { return _css_ts__WEBPACK_IMPORTED_MODULE_0__[\"createCssSelectorMatcher\"]; });\n\n/* harmony import */ var _range_index_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./range/index.ts */ \"../packages/dom/src/range/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"makeCreateRangeSelectorMatcher\", function() { return _range_index_ts__WEBPACK_IMPORTED_MODULE_1__[\"makeCreateRangeSelectorMatcher\"]; });\n\n/* harmony import */ var _text_quote_index_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-quote/index.ts */ \"../packages/dom/src/text-quote/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"describeTextQuote\", function() { return _text_quote_index_ts__WEBPACK_IMPORTED_MODULE_2__[\"describeTextQuote\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createTextQuoteSelectorMatcher\", function() { return _text_quote_index_ts__WEBPACK_IMPORTED_MODULE_2__[\"createTextQuoteSelectorMatcher\"]; });\n\n/* harmony import */ var _text_position_index_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-position/index.ts */ \"../packages/dom/src/text-position/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"describeTextPosition\", function() { return _text_position_index_ts__WEBPACK_IMPORTED_MODULE_3__[\"describeTextPosition\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createTextPositionSelectorMatcher\", function() { return _text_position_index_ts__WEBPACK_IMPORTED_MODULE_3__[\"createTextPositionSelectorMatcher\"]; });\n\n/* harmony import */ var _highlight_range_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./highlight-range.ts */ \"../packages/dom/src/highlight-range.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"highlightRange\", function() { return _highlight_range_ts__WEBPACK_IMPORTED_MODULE_4__[\"highlightRange\"]; });\n\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\n\n\n//# sourceURL=webpack:///../packages/dom/src/index.ts?");

/***/ }),

/***/ "../packages/dom/src/normalize-range.ts":
/*!**********************************************!*\
  !*** ../packages/dom/src/normalize-range.ts ***!
  \**********************************************/
/*! exports provided: normalizeRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalizeRange\", function() { return normalizeRange; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/slicedToArray */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _owner_document_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./owner-document.ts */ \"../packages/dom/src/owner-document.ts\");\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n/**\n * TextRange is a Range that guarantees to always have Text nodes as its start\n * and end nodes. To ensure the type remains correct, it also restricts usage\n * of methods that would modify these nodes (note that a user can simply cast\n * the TextRange back to a Range to remove these restrictions).\n */\n\n/**\n * Normalise a {@link https://developer.mozilla.org/en-US/docs/Web/API/Range |\n * Range} such that ranges spanning the same text become exact equals.\n *\n * *Note: in this context ‘text’ means any characters, including whitespace.*\n\n * Normalises a range such that both its start and end are text nodes, and that\n * if there are equivalent text selections it takes the narrowest option (i.e.\n * it prefers the start not to be at the end of a text node, and vice versa).\n *\n * If there is no text between the start and end, they thus collapse onto one a\n * single position; and if there are multiple equivalent positions, it takes the\n * first one; or, if scope is passed, the first equivalent falling within scope.\n *\n * Note that if the given range does not contain non-empty text nodes, it may\n * end up pointing at a text node outside of it (before it if possible, else\n * after). If the document does not contain any text nodes, an error is thrown.\n */\nfunction normalizeRange(range, scope) {\n  var document = Object(_owner_document_ts__WEBPACK_IMPORTED_MODULE_1__[\"ownerDocument\"])(range);\n  var walker = document.createTreeWalker(document, NodeFilter.SHOW_TEXT, {\n    acceptNode: function acceptNode(node) {\n      return !scope || scope.intersectsNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;\n    }\n  });\n\n  var _snapBoundaryPointToT = snapBoundaryPointToTextNode(range.startContainer, range.startOffset),\n      _snapBoundaryPointToT2 = Object(_babel_runtime_corejs3_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_snapBoundaryPointToT, 2),\n      startContainer = _snapBoundaryPointToT2[0],\n      startOffset = _snapBoundaryPointToT2[1]; // If we point at the end of a text node, move to the start of the next one.\n  // The step is repeated to skip over empty text nodes.\n\n\n  walker.currentNode = startContainer;\n\n  while (startOffset === startContainer.length && walker.nextNode()) {\n    startContainer = walker.currentNode;\n    startOffset = 0;\n  } // Set the range’s start; note this might move its end too.\n\n\n  range.setStart(startContainer, startOffset);\n\n  var _snapBoundaryPointToT3 = snapBoundaryPointToTextNode(range.endContainer, range.endOffset),\n      _snapBoundaryPointToT4 = Object(_babel_runtime_corejs3_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_snapBoundaryPointToT3, 2),\n      endContainer = _snapBoundaryPointToT4[0],\n      endOffset = _snapBoundaryPointToT4[1]; // If we point at the start of a text node, move to the end of the previous one.\n  // The step is repeated to skip over empty text nodes.\n\n\n  walker.currentNode = endContainer;\n\n  while (endOffset === 0 && walker.previousNode()) {\n    endContainer = walker.currentNode;\n    endOffset = endContainer.length;\n  } // Set the range’s end; note this might move its start too.\n\n\n  range.setEnd(endContainer, endOffset);\n  return range;\n} // Given an arbitrary boundary point, this returns either:\n// - that same boundary point, if its node is a text node;\n// - otherwise the first boundary point after it whose node is a text node, if any;\n// - otherwise, the last boundary point before it whose node is a text node.\n// If the document has no text nodes, it throws an error.\n\nfunction snapBoundaryPointToTextNode(node, offset) {\n  var _node$ownerDocument;\n\n  if (isText(node)) return [node, offset]; // Find the node at or right after the boundary point.\n\n  var curNode;\n\n  if (isCharacterData(node)) {\n    curNode = node;\n  } else if (offset < node.childNodes.length) {\n    curNode = node.childNodes[offset];\n  } else {\n    curNode = node;\n\n    while (curNode.nextSibling === null) {\n      if (curNode.parentNode === null) // Boundary point is at end of document\n        throw new Error('not implemented'); // TODO\n\n      curNode = curNode.parentNode;\n    }\n\n    curNode = curNode.nextSibling;\n  }\n\n  if (isText(curNode)) return [curNode, 0]; // Walk to the next text node, or the last if there is none.\n\n  var document = (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 ? _node$ownerDocument : node;\n  var walker = document.createTreeWalker(document, NodeFilter.SHOW_TEXT);\n  walker.currentNode = curNode;\n\n  if (walker.nextNode() !== null) {\n    return [walker.currentNode, 0];\n  } else if (walker.previousNode() !== null) {\n    return [walker.currentNode, walker.currentNode.length];\n  } else {\n    throw new Error('Document contains no text nodes.');\n  }\n}\n\nfunction isText(node) {\n  return node.nodeType === Node.TEXT_NODE;\n}\n\nfunction isCharacterData(node) {\n  return node.nodeType === Node.PROCESSING_INSTRUCTION_NODE || node.nodeType === Node.COMMENT_NODE || node.nodeType === Node.TEXT_NODE;\n}\n\n//# sourceURL=webpack:///../packages/dom/src/normalize-range.ts?");

/***/ }),

/***/ "../packages/dom/src/owner-document.ts":
/*!*********************************************!*\
  !*** ../packages/dom/src/owner-document.ts ***!
  \*********************************************/
/*! exports provided: ownerDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ownerDocument\", function() { return ownerDocument; });\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\nfunction ownerDocument(range) {\n  var _startContainer$owner;\n\n  var startContainer = range.startContainer; // node.ownerDocument is null iff node is itself a Document.\n\n  return (_startContainer$owner = startContainer.ownerDocument) !== null && _startContainer$owner !== void 0 ? _startContainer$owner : startContainer;\n}\n\n//# sourceURL=webpack:///../packages/dom/src/owner-document.ts?");

/***/ }),

/***/ "../packages/dom/src/range/cartesian.ts":
/*!**********************************************!*\
  !*** ../packages/dom/src/range/cartesian.ts ***!
  \**********************************************/
/*! exports provided: cartesian */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cartesian\", function() { return cartesian; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/toConsumableArray */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncIterator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/asyncIterator.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncGeneratorDelegate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncGeneratorDelegate */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/asyncGeneratorDelegate.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"../node_modules/@babel/runtime-corejs3/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/map */ \"../node_modules/@babel/runtime-corejs3/core-js/instance/map.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_map__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/promise */ \"../node_modules/@babel/runtime-corejs3/core-js/promise.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_reduce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/reduce */ \"../node_modules/@babel/runtime-corejs3/core-js/instance/reduce.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_reduce__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_reduce__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_flat_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/flat-map */ \"../node_modules/@babel/runtime-corejs3/core-js/instance/flat-map.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_flat_map__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_flat_map__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_concat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/concat */ \"../node_modules/@babel/runtime-corejs3/core-js/instance/concat.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_concat__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_concat__WEBPACK_IMPORTED_MODULE_10__);\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * Generates the Cartesian product of the sets generated by the given iterables.\n *\n *   𝑆₁ × ... × 𝑆ₙ = { (𝑒₁,...,𝑒ₙ) | 𝑒ᵢ ∈ 𝑆ᵢ }\n */\nfunction cartesian() {\n  return _cartesian.apply(this, arguments);\n}\n\nfunction _cartesian() {\n  _cartesian = Object(_babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {\n    var _len,\n        iterables,\n        _key,\n        iterators,\n        active,\n        logs,\n        nexts,\n        result,\n        index,\n        value,\n        scratch,\n        closeAll,\n        _args2 = arguments;\n\n    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            for (_len = _args2.length, iterables = new Array(_len), _key = 0; _key < _len; _key++) {\n              iterables[_key] = _args2[_key];\n            }\n\n            // Create iterators for traversing each iterable and tagging every value\n            // with the index of its source iterable.\n            iterators = _babel_runtime_corejs3_core_js_instance_map__WEBPACK_IMPORTED_MODULE_6___default()(iterables).call(iterables, function (iterable, index) {\n              var generator = /*#__PURE__*/function () {\n                var _ref = Object(_babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {\n                  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, value;\n\n                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {\n                    while (1) {\n                      switch (_context.prev = _context.next) {\n                        case 0:\n                          _iteratorNormalCompletion = true;\n                          _didIteratorError = false;\n                          _context.prev = 2;\n                          _iterator = Object(_babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(iterable);\n\n                        case 4:\n                          _context.next = 6;\n                          return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_iterator.next());\n\n                        case 6:\n                          _step = _context.sent;\n                          _iteratorNormalCompletion = _step.done;\n                          _context.next = 10;\n                          return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_step.value);\n\n                        case 10:\n                          _value = _context.sent;\n\n                          if (_iteratorNormalCompletion) {\n                            _context.next = 18;\n                            break;\n                          }\n\n                          value = _value;\n                          _context.next = 15;\n                          return {\n                            index: index,\n                            value: value\n                          };\n\n                        case 15:\n                          _iteratorNormalCompletion = true;\n                          _context.next = 4;\n                          break;\n\n                        case 18:\n                          _context.next = 24;\n                          break;\n\n                        case 20:\n                          _context.prev = 20;\n                          _context.t0 = _context[\"catch\"](2);\n                          _didIteratorError = true;\n                          _iteratorError = _context.t0;\n\n                        case 24:\n                          _context.prev = 24;\n                          _context.prev = 25;\n\n                          if (!(!_iteratorNormalCompletion && _iterator.return != null)) {\n                            _context.next = 29;\n                            break;\n                          }\n\n                          _context.next = 29;\n                          return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_iterator.return());\n\n                        case 29:\n                          _context.prev = 29;\n\n                          if (!_didIteratorError) {\n                            _context.next = 32;\n                            break;\n                          }\n\n                          throw _iteratorError;\n\n                        case 32:\n                          return _context.finish(29);\n\n                        case 33:\n                          return _context.finish(24);\n\n                        case 34:\n                          return _context.abrupt(\"return\", {\n                            index: index\n                          });\n\n                        case 35:\n                        case \"end\":\n                          return _context.stop();\n                      }\n                    }\n                  }, _callee, null, [[2, 20, 24, 34], [25,, 29, 33]]);\n                }));\n\n                return function generator() {\n                  return _ref.apply(this, arguments);\n                };\n              }();\n\n              return generator();\n            });\n            _context3.prev = 2;\n            // Track the number of non-exhausted iterators.\n            active = iterators.length; // Track all the values of each iterator in a log.\n\n            logs = _babel_runtime_corejs3_core_js_instance_map__WEBPACK_IMPORTED_MODULE_6___default()(iterators).call(iterators, function () {\n              return [];\n            }); // Track the promise of the next value of each iterator.\n\n            nexts = _babel_runtime_corejs3_core_js_instance_map__WEBPACK_IMPORTED_MODULE_6___default()(iterators).call(iterators, function (it) {\n              return it.next();\n            }); // Iterate the values of all the iterators in parallel and yield tuples from\n            // the partial product of each new value and the existing logs of the other\n            // iterators.\n\n          case 6:\n            if (!active) {\n              _context3.next = 23;\n              break;\n            }\n\n            _context3.next = 9;\n            return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a.race(nexts));\n\n          case 9:\n            result = _context3.sent;\n            index = result.value.index; // If the iterator has exhausted all the values, set the promise\n            // of its next value to never resolve.\n\n            if (!result.done) {\n              _context3.next = 15;\n              break;\n            }\n\n            active--;\n            nexts[index] = new _babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a(function () {\n              return undefined;\n            });\n            return _context3.abrupt(\"continue\", 6);\n\n          case 15:\n            // Append the new value to the log.\n            value = result.value.value;\n            logs[index].push(value); // Record the promise of the next value.\n\n            nexts[index] = iterators[index].next(); // Create a scratch input for computing a partial product.\n\n            scratch = Object(_babel_runtime_corejs3_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(logs);\n            scratch[index] = [value]; // Synchronously compute and yield tuples of the partial product.\n\n            return _context3.delegateYield(Object(_babel_runtime_corejs3_helpers_esm_asyncGeneratorDelegate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Object(_babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_babel_runtime_corejs3_core_js_instance_reduce__WEBPACK_IMPORTED_MODULE_8___default()(scratch).call(scratch, function (acc, next) {\n              return _babel_runtime_corejs3_core_js_instance_flat_map__WEBPACK_IMPORTED_MODULE_9___default()(acc).call(acc, function (v) {\n                return _babel_runtime_corejs3_core_js_instance_map__WEBPACK_IMPORTED_MODULE_6___default()(next).call(next, function (w) {\n                  var _context2;\n\n                  return _babel_runtime_corejs3_core_js_instance_concat__WEBPACK_IMPORTED_MODULE_10___default()(_context2 = []).call(_context2, Object(_babel_runtime_corejs3_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(v), [w]);\n                });\n              });\n            }, [[]])), _babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), \"t0\", 21);\n\n          case 21:\n            _context3.next = 6;\n            break;\n\n          case 23:\n            _context3.prev = 23;\n            closeAll = _babel_runtime_corejs3_core_js_instance_map__WEBPACK_IMPORTED_MODULE_6___default()(iterators).call(iterators, function (it, index) {\n              return it.return({\n                index: index\n              });\n            });\n            _context3.next = 27;\n            return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a.all(closeAll));\n\n          case 27:\n            return _context3.finish(23);\n\n          case 28:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee2, null, [[2,, 23, 28]]);\n  }));\n  return _cartesian.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///../packages/dom/src/range/cartesian.ts?");

/***/ }),

/***/ "../packages/dom/src/range/index.ts":
/*!******************************************!*\
  !*** ../packages/dom/src/range/index.ts ***!
  \******************************************/
/*! exports provided: makeCreateRangeSelectorMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _match_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./match.ts */ \"../packages/dom/src/range/match.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"makeCreateRangeSelectorMatcher\", function() { return _match_ts__WEBPACK_IMPORTED_MODULE_0__[\"makeCreateRangeSelectorMatcher\"]; });\n\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n//# sourceURL=webpack:///../packages/dom/src/range/index.ts?");

/***/ }),

/***/ "../packages/dom/src/range/match.ts":
/*!******************************************!*\
  !*** ../packages/dom/src/range/match.ts ***!
  \******************************************/
/*! exports provided: makeCreateRangeSelectorMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeCreateRangeSelectorMatcher\", function() { return makeCreateRangeSelectorMatcher; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/slicedToArray */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncIterator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/asyncIterator.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"../node_modules/@babel/runtime-corejs3/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _owner_document_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../owner-document.ts */ \"../packages/dom/src/owner-document.ts\");\n/* harmony import */ var _cartesian_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cartesian.ts */ \"../packages/dom/src/range/cartesian.ts\");\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\n\n\n\n/**\n * Find the range(s) corresponding to the given {@link\n * RangeSelector}.\n *\n * As a RangeSelector itself nests two further selectors, one needs to pass a\n * `createMatcher` function that will be used to process those nested selectors.\n *\n * The function is curried, taking first the `createMatcher` function, then the\n * selector, and then the scope.\n *\n * As there may be multiple matches for a given selector, the matcher will\n * return an (async) generator that produces each match in the order they are\n * found in the text. If both its nested selectors produce multiple matches, the\n * RangeSelector matches each possible pair among those in which the order of\n * start and end are respected. *(Note this behaviour is a rather free\n * interpretation — the Web Annotation Data Model spec is silent about multiple\n * matches for RangeSelectors)*\n *\n * @example\n * By using a matcher for {@link TextQuoteSelector}s, one\n * could create a matcher for text quotes with ellipsis to select a phrase\n * “ipsum … amet,”:\n * ```\n * const selector = {\n *   type: 'RangeSelector',\n *   startSelector: {\n *     type: 'TextQuoteSelector',\n *     exact: 'ipsum ',\n *   },\n *   endSelector: {\n *     type: 'TextQuoteSelector',\n *     // Because the end of a RangeSelector is *exclusive*, we’ll present the\n *     // latter part of the quote as the *prefix* so it will part of the match.\n *     exact: '',\n *     prefix: ' amet,',\n *   }\n * }}\n * const createRangeSelectorMatcher = makeCreateRangeSelectorMatcher(createTextQuoteMatcher);\n * const match = createRangeSelectorMatcher(selector)(document.body);\n * console.log(match)\n * // ⇒ Range { startContainer: #text, startOffset: 6, endContainer: #text,\n * //   endOffset: 27, … }\n * ```\n *\n * @example\n * To support RangeSelectors that might themselves contain RangeSelectors,\n * recursion can be created by supplying the resulting matcher creator function\n * as the `createMatcher` parameter:\n * ```\n * const createWhicheverMatcher = (selector) => {\n *   const innerCreateMatcher = {\n *     TextQuoteSelector: createTextQuoteSelectorMatcher,\n *     TextPositionSelector: createTextPositionSelectorMatcher,\n *     RangeSelector: makeCreateRangeSelectorMatcher(createWhicheverMatcher),\n *   }[selector.type];\n *   return innerCreateMatcher(selector);\n * });\n * ```\n *\n * @param createMatcher - The function used to process nested selectors.\n * @returns A function that, given a RangeSelector, creates a {@link\n * Matcher} function that applies it to a given {@link https://developer.mozilla.org/en-US/docs/Web/API/Range\n * | Range}\n *\n * @public\n */\n\nfunction makeCreateRangeSelectorMatcher(createMatcher) {\n  return function createRangeSelectorMatcher(selector) {\n    var startMatcher = createMatcher(selector.startSelector);\n    var endMatcher = createMatcher(selector.endSelector);\n    return /*#__PURE__*/function () {\n      var _matchAll = Object(_babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee(scope) {\n        var startMatches, endMatches, pairs, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, _value2, _value3, start, end, result;\n\n        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                startMatches = startMatcher(scope);\n                endMatches = endMatcher(scope);\n                pairs = Object(_cartesian_ts__WEBPACK_IMPORTED_MODULE_6__[\"cartesian\"])(startMatches, endMatches);\n                _iteratorNormalCompletion = true;\n                _didIteratorError = false;\n                _context.prev = 5;\n                _iterator = Object(_babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(pairs);\n\n              case 7:\n                _context.next = 9;\n                return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_iterator.next());\n\n              case 9:\n                _step = _context.sent;\n                _iteratorNormalCompletion = _step.done;\n                _context.next = 13;\n                return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_step.value);\n\n              case 13:\n                _value = _context.sent;\n\n                if (_iteratorNormalCompletion) {\n                  _context.next = 25;\n                  break;\n                }\n\n                _value2 = _value, _value3 = Object(_babel_runtime_corejs3_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_value2, 2), start = _value3[0], end = _value3[1];\n                result = Object(_owner_document_ts__WEBPACK_IMPORTED_MODULE_5__[\"ownerDocument\"])(scope).createRange();\n                result.setStart(start.startContainer, start.startOffset);\n                result.setEnd(end.startContainer, end.startOffset);\n\n                if (result.collapsed) {\n                  _context.next = 22;\n                  break;\n                }\n\n                _context.next = 22;\n                return result;\n\n              case 22:\n                _iteratorNormalCompletion = true;\n                _context.next = 7;\n                break;\n\n              case 25:\n                _context.next = 31;\n                break;\n\n              case 27:\n                _context.prev = 27;\n                _context.t0 = _context[\"catch\"](5);\n                _didIteratorError = true;\n                _iteratorError = _context.t0;\n\n              case 31:\n                _context.prev = 31;\n                _context.prev = 32;\n\n                if (!(!_iteratorNormalCompletion && _iterator.return != null)) {\n                  _context.next = 36;\n                  break;\n                }\n\n                _context.next = 36;\n                return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_iterator.return());\n\n              case 36:\n                _context.prev = 36;\n\n                if (!_didIteratorError) {\n                  _context.next = 39;\n                  break;\n                }\n\n                throw _iteratorError;\n\n              case 39:\n                return _context.finish(36);\n\n              case 40:\n                return _context.finish(31);\n\n              case 41:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[5, 27, 31, 41], [32,, 36, 40]]);\n      }));\n\n      function matchAll(_x) {\n        return _matchAll.apply(this, arguments);\n      }\n\n      return matchAll;\n    }();\n  };\n}\n\n//# sourceURL=webpack:///../packages/dom/src/range/match.ts?");

/***/ }),

/***/ "../packages/dom/src/text-node-chunker.ts":
/*!************************************************!*\
  !*** ../packages/dom/src/text-node-chunker.ts ***!
  \************************************************/
/*! exports provided: EmptyScopeError, OutOfScopeError, TextNodeChunker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EmptyScopeError\", function() { return EmptyScopeError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OutOfScopeError\", function() { return OutOfScopeError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextNodeChunker\", function() { return TextNodeChunker; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/reflect/construct */ \"../node_modules/@babel/runtime-corejs3/core-js/reflect/construct.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/createClass */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/defineProperty */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/classCallCheck */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inherits */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/possibleConstructorReturn */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/getPrototypeOf */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/wrapNativeSuper */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/wrapNativeSuper.js\");\n/* harmony import */ var _normalize_range_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./normalize-range.ts */ \"../packages/dom/src/normalize-range.ts\");\n/* harmony import */ var _owner_document_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./owner-document.ts */ \"../packages/dom/src/owner-document.ts\");\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs3_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs3_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = _babel_runtime_corejs3_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs3_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !_babel_runtime_corejs3_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs3_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs3_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar EmptyScopeError = /*#__PURE__*/function (_TypeError) {\n  Object(_babel_runtime_corejs3_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(EmptyScopeError, _TypeError);\n\n  var _super = _createSuper(EmptyScopeError);\n\n  function EmptyScopeError(message) {\n    Object(_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, EmptyScopeError);\n\n    return _super.call(this, message || 'Scope contains no text nodes.');\n  }\n\n  return EmptyScopeError;\n}( /*#__PURE__*/Object(_babel_runtime_corejs3_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(TypeError));\nvar OutOfScopeError = /*#__PURE__*/function (_TypeError2) {\n  Object(_babel_runtime_corejs3_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(OutOfScopeError, _TypeError2);\n\n  var _super2 = _createSuper(OutOfScopeError);\n\n  function OutOfScopeError(message) {\n    Object(_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, OutOfScopeError);\n\n    return _super2.call(this, message || 'Cannot convert node to chunk, as it falls outside of chunker’s scope.');\n  }\n\n  return OutOfScopeError;\n}( /*#__PURE__*/Object(_babel_runtime_corejs3_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(TypeError));\nvar TextNodeChunker = /*#__PURE__*/function () {\n  /**\n   * @param scope A Range that overlaps with at least one text node.\n   */\n  function TextNodeChunker(scope) {\n    Object(_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, TextNodeChunker);\n\n    this.scope = scope;\n\n    Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"iter\", void 0);\n\n    this.iter = Object(_owner_document_ts__WEBPACK_IMPORTED_MODULE_9__[\"ownerDocument\"])(scope).createNodeIterator(scope.commonAncestorContainer, NodeFilter.SHOW_TEXT, {\n      acceptNode: function acceptNode(node) {\n        return scope.intersectsNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;\n      }\n    }); // Move the iterator to after the start (= root) node.\n\n    this.iter.nextNode(); // If the start node is not a text node, move it to the first text node.\n\n    if (!isText(this.iter.referenceNode)) {\n      var nextNode = this.iter.nextNode();\n      if (nextNode === null) throw new EmptyScopeError();\n    }\n  }\n\n  Object(_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(TextNodeChunker, [{\n    key: \"currentChunk\",\n    get: function get() {\n      var node = this.iter.referenceNode; // This test should not actually be needed, but it keeps TypeScript happy.\n\n      if (!isText(node)) throw new EmptyScopeError();\n      return this.nodeToChunk(node);\n    }\n  }, {\n    key: \"nodeToChunk\",\n    value: function nodeToChunk(node) {\n      if (!this.scope.intersectsNode(node)) throw new OutOfScopeError();\n      var startOffset = node === this.scope.startContainer ? this.scope.startOffset : 0;\n      var endOffset = node === this.scope.endContainer ? this.scope.endOffset : node.length;\n      return {\n        node: node,\n        startOffset: startOffset,\n        endOffset: endOffset,\n        data: node.data.substring(startOffset, endOffset),\n        equals: function equals(other) {\n          return other.node === this.node && other.startOffset === this.startOffset && other.endOffset === this.endOffset;\n        }\n      };\n    }\n  }, {\n    key: \"rangeToChunkRange\",\n    value: function rangeToChunkRange(range) {\n      range = range.cloneRange(); // Take the part of the range that falls within the scope.\n\n      if (range.compareBoundaryPoints(Range.START_TO_START, this.scope) === -1) range.setStart(this.scope.startContainer, this.scope.startOffset);\n      if (range.compareBoundaryPoints(Range.END_TO_END, this.scope) === 1) range.setEnd(this.scope.endContainer, this.scope.endOffset); // Ensure it starts and ends at text nodes.\n\n      var textRange = Object(_normalize_range_ts__WEBPACK_IMPORTED_MODULE_8__[\"normalizeRange\"])(range, this.scope);\n      var startChunk = this.nodeToChunk(textRange.startContainer);\n      var startIndex = textRange.startOffset - startChunk.startOffset;\n      var endChunk = this.nodeToChunk(textRange.endContainer);\n      var endIndex = textRange.endOffset - endChunk.startOffset;\n      return {\n        startChunk: startChunk,\n        startIndex: startIndex,\n        endChunk: endChunk,\n        endIndex: endIndex\n      };\n    }\n  }, {\n    key: \"chunkRangeToRange\",\n    value: function chunkRangeToRange(chunkRange) {\n      var range = Object(_owner_document_ts__WEBPACK_IMPORTED_MODULE_9__[\"ownerDocument\"])(this.scope).createRange(); // The `+…startOffset` parts are only relevant for the first chunk, as it\n      // might start within a text node.\n\n      range.setStart(chunkRange.startChunk.node, chunkRange.startIndex + chunkRange.startChunk.startOffset);\n      range.setEnd(chunkRange.endChunk.node, chunkRange.endIndex + chunkRange.endChunk.startOffset);\n      return range;\n    }\n  }, {\n    key: \"nextChunk\",\n    value: function nextChunk() {\n      // Move the iterator to after the current node, so nextNode() will cause a jump.\n      if (this.iter.pointerBeforeReferenceNode) this.iter.nextNode();\n      if (this.iter.nextNode()) return this.currentChunk;else return null;\n    }\n  }, {\n    key: \"previousChunk\",\n    value: function previousChunk() {\n      if (!this.iter.pointerBeforeReferenceNode) this.iter.previousNode();\n      if (this.iter.previousNode()) return this.currentChunk;else return null;\n    }\n  }, {\n    key: \"precedesCurrentChunk\",\n    value: function precedesCurrentChunk(chunk) {\n      if (this.currentChunk === null) return false;\n      return !!(this.currentChunk.node.compareDocumentPosition(chunk.node) & Node.DOCUMENT_POSITION_PRECEDING);\n    }\n  }]);\n\n  return TextNodeChunker;\n}();\n\nfunction isText(node) {\n  return node.nodeType === Node.TEXT_NODE;\n}\n\n//# sourceURL=webpack:///../packages/dom/src/text-node-chunker.ts?");

/***/ }),

/***/ "../packages/dom/src/text-position/describe.ts":
/*!*****************************************************!*\
  !*** ../packages/dom/src/text-position/describe.ts ***!
  \*****************************************************/
/*! exports provided: describeTextPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"describeTextPosition\", function() { return describeTextPosition; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"../node_modules/@babel/runtime-corejs3/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_user_annotator_incubator_annotator_website_annotator_packages_selector_src_index_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../packages/selector/src/index.ts */ \"../packages/selector/src/index.ts\");\n/* harmony import */ var _owner_document_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../owner-document.ts */ \"../packages/dom/src/owner-document.ts\");\n/* harmony import */ var _text_node_chunker_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../text-node-chunker.ts */ \"../packages/dom/src/text-node-chunker.ts\");\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\n\n/**\n * Returns a {@link TextPositionSelector} that points\n * at the target text within the given scope.\n *\n * When no scope is given, the position is described relative to the document\n * as a whole. Note this means all the characters in all Text nodes are counted\n * to determine the target’s position, including those in the `<head>` and\n * whitespace, hence even a minor modification could make the selector point to\n * a different text than its original target.\n *\n * @example\n * ```\n * const target = window.getSelection().getRangeAt(0);\n * const selector = await describeTextPosition(target);\n * console.log(selector);\n * // {\n * //   type: 'TextPositionSelector',\n * //   start: 702,\n * //   end: 736\n * // }\n * ```\n *\n * @param range - The range of characters that the selector should describe\n * @param maybeScope - A {@link https://developer.mozilla.org/en-US/docs/Web/API/Range\n * | Range} that serves as the ‘document’ for purposes of finding occurrences\n * and determining prefix and suffix. Defaults to span the full Document\n * containing the range.\n * @returns The selector describing the `range` relative to `scope`\n *\n * @public\n */\n\nfunction describeTextPosition(_x, _x2) {\n  return _describeTextPosition.apply(this, arguments);\n}\n\nfunction _describeTextPosition() {\n  _describeTextPosition = Object(_babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(range, maybeScope) {\n    var scope, document, textChunks;\n    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // Default to search in the whole document.\n            if (maybeScope !== undefined) {\n              scope = maybeScope;\n            } else {\n              document = Object(_owner_document_ts__WEBPACK_IMPORTED_MODULE_3__[\"ownerDocument\"])(range);\n              scope = document.createRange();\n              scope.selectNodeContents(document);\n            }\n\n            textChunks = new _text_node_chunker_ts__WEBPACK_IMPORTED_MODULE_4__[\"TextNodeChunker\"](scope);\n\n            if (!(textChunks.currentChunk === null)) {\n              _context.next = 4;\n              break;\n            }\n\n            throw new RangeError('Range does not contain any Text nodes.');\n\n          case 4:\n            _context.next = 6;\n            return Object(_home_user_annotator_incubator_annotator_website_annotator_packages_selector_src_index_ts__WEBPACK_IMPORTED_MODULE_2__[\"describeTextPosition\"])(textChunks.rangeToChunkRange(range), textChunks);\n\n          case 6:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _describeTextPosition.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///../packages/dom/src/text-position/describe.ts?");

/***/ }),

/***/ "../packages/dom/src/text-position/index.ts":
/*!**************************************************!*\
  !*** ../packages/dom/src/text-position/index.ts ***!
  \**************************************************/
/*! exports provided: describeTextPosition, createTextPositionSelectorMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _describe_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./describe.ts */ \"../packages/dom/src/text-position/describe.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"describeTextPosition\", function() { return _describe_ts__WEBPACK_IMPORTED_MODULE_0__[\"describeTextPosition\"]; });\n\n/* harmony import */ var _match_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.ts */ \"../packages/dom/src/text-position/match.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createTextPositionSelectorMatcher\", function() { return _match_ts__WEBPACK_IMPORTED_MODULE_1__[\"createTextPositionSelectorMatcher\"]; });\n\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n//# sourceURL=webpack:///../packages/dom/src/text-position/index.ts?");

/***/ }),

/***/ "../packages/dom/src/text-position/match.ts":
/*!**************************************************!*\
  !*** ../packages/dom/src/text-position/match.ts ***!
  \**************************************************/
/*! exports provided: createTextPositionSelectorMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTextPositionSelectorMatcher\", function() { return createTextPositionSelectorMatcher; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncIterator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/asyncIterator.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"../node_modules/@babel/runtime-corejs3/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _home_user_annotator_incubator_annotator_website_annotator_packages_selector_src_index_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../packages/selector/src/index.ts */ \"../packages/selector/src/index.ts\");\n/* harmony import */ var _text_node_chunker_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../text-node-chunker.ts */ \"../packages/dom/src/text-node-chunker.ts\");\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\n\n\n/**\n * Find the range of text corresponding to the given {@link\n * TextPositionSelector}.\n *\n * The start and end positions are measured relative to the first text character\n * in the given scope.\n *\n * The function is curried, taking first the selector and then the scope.\n *\n * Its end result is an (async) generator producing a single {@link https://developer.mozilla.org/en-US/docs/Web/API/Range\n * | Range} to represent the match. (unlike a {@link\n * TextQuoteSelector}, a TextPositionSelector cannot have\n * multiple matches).\n *\n * @example\n * ```\n * const selector = { type: 'TextPositionSelector', start: 702, end: 736 };\n *\n * // Search in the whole document.\n * const scope = document.createRange();\n * scope.selectNodeContents(document);\n *\n * const matches = textQuoteSelectorMatcher(selector)(scope);\n * const match = (await matches.next()).value;\n *\n * // ⇒ Range { startContainer: #text, startOffset: 64, endContainer: #text,\n * //   endOffset: 98, … }\n * ```\n *\n * @param selector - The {@link TextPositionSelector}\n * to be anchored\n * @returns A {@link Matcher} function that applies\n * `selector` to a given {@link https://developer.mozilla.org/en-US/docs/Web/API/Range\n * | Range}\n *\n * @public\n */\n\nfunction createTextPositionSelectorMatcher(selector) {\n  var abstractMatcher = Object(_home_user_annotator_incubator_annotator_website_annotator_packages_selector_src_index_ts__WEBPACK_IMPORTED_MODULE_4__[\"textPositionSelectorMatcher\"])(selector);\n  return /*#__PURE__*/function () {\n    var _matchAll = Object(_babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(scope) {\n      var textChunks, matches, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, abstractMatch;\n\n      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              textChunks = new _text_node_chunker_ts__WEBPACK_IMPORTED_MODULE_5__[\"TextNodeChunker\"](scope);\n              matches = abstractMatcher(textChunks);\n              _iteratorNormalCompletion = true;\n              _didIteratorError = false;\n              _context.prev = 4;\n              _iterator = Object(_babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(matches);\n\n            case 6:\n              _context.next = 8;\n              return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_iterator.next());\n\n            case 8:\n              _step = _context.sent;\n              _iteratorNormalCompletion = _step.done;\n              _context.next = 12;\n              return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_step.value);\n\n            case 12:\n              _value = _context.sent;\n\n              if (_iteratorNormalCompletion) {\n                _context.next = 20;\n                break;\n              }\n\n              abstractMatch = _value;\n              _context.next = 17;\n              return textChunks.chunkRangeToRange(abstractMatch);\n\n            case 17:\n              _iteratorNormalCompletion = true;\n              _context.next = 6;\n              break;\n\n            case 20:\n              _context.next = 26;\n              break;\n\n            case 22:\n              _context.prev = 22;\n              _context.t0 = _context[\"catch\"](4);\n              _didIteratorError = true;\n              _iteratorError = _context.t0;\n\n            case 26:\n              _context.prev = 26;\n              _context.prev = 27;\n\n              if (!(!_iteratorNormalCompletion && _iterator.return != null)) {\n                _context.next = 31;\n                break;\n              }\n\n              _context.next = 31;\n              return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_iterator.return());\n\n            case 31:\n              _context.prev = 31;\n\n              if (!_didIteratorError) {\n                _context.next = 34;\n                break;\n              }\n\n              throw _iteratorError;\n\n            case 34:\n              return _context.finish(31);\n\n            case 35:\n              return _context.finish(26);\n\n            case 36:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[4, 22, 26, 36], [27,, 31, 35]]);\n    }));\n\n    function matchAll(_x) {\n      return _matchAll.apply(this, arguments);\n    }\n\n    return matchAll;\n  }();\n}\n\n//# sourceURL=webpack:///../packages/dom/src/text-position/match.ts?");

/***/ }),

/***/ "../packages/dom/src/text-quote/describe.ts":
/*!**************************************************!*\
  !*** ../packages/dom/src/text-quote/describe.ts ***!
  \**************************************************/
/*! exports provided: describeTextQuote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"describeTextQuote\", function() { return describeTextQuote; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"../node_modules/@babel/runtime-corejs3/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_user_annotator_incubator_annotator_website_annotator_packages_selector_src_index_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../packages/selector/src/index.ts */ \"../packages/selector/src/index.ts\");\n/* harmony import */ var _owner_document_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../owner-document.ts */ \"../packages/dom/src/owner-document.ts\");\n/* harmony import */ var _text_node_chunker_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../text-node-chunker.ts */ \"../packages/dom/src/text-node-chunker.ts\");\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\n\n/**\n * Create a {@link TextQuoteSelector} that\n * unambiguously describes the given range.\n *\n * The selector will contain the *exact* target quote, and in case this quote\n * appears multiple times in the text, sufficient context around the quote will\n * be included in the selector’s *prefix* and *suffix* attributes to\n * disambiguate. By default, more prefix and suffix are included than strictly\n * required; both in order to be robust against slight modifications, and in an\n * attempt to not end halfway a word (mainly for the sake of human readability).\n *\n * @example\n * ```\n * const target = window.getSelection().getRangeAt(0);\n * const selector = await describeTextQuote(target);\n * console.log(selector);\n * // {\n * //   type: 'TextQuoteSelector',\n * //   exact: 'ipsum',\n * //   prefix: 'Lorem ',\n * //   suffix: ' dolor'\n * // }\n * ```\n *\n * @param range - The {@link https://developer.mozilla.org/en-US/docs/Web/API/Range\n * | Range} whose text content will be described\n * @param maybeScope - A {@link https://developer.mozilla.org/en-US/docs/Web/API/Range\n * | Range} that serves as the ‘document’ for purposes of finding occurrences\n * and determining prefix and suffix. Defaults to span the full Document\n * containing the range.\n * @param options - Options to fine-tune the function’s behaviour.\n * @returns The selector unambiguously describing the `range` in `scope`.\n *\n * @public\n */\n\nfunction describeTextQuote(_x, _x2) {\n  return _describeTextQuote.apply(this, arguments);\n}\n\nfunction _describeTextQuote() {\n  _describeTextQuote = Object(_babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(range, maybeScope) {\n    var options,\n        scope,\n        document,\n        chunker,\n        _args = arguments;\n    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};\n\n            if (maybeScope !== undefined) {\n              scope = maybeScope;\n            } else {\n              document = Object(_owner_document_ts__WEBPACK_IMPORTED_MODULE_3__[\"ownerDocument\"])(range);\n              scope = document.createRange();\n              scope.selectNodeContents(document);\n            }\n\n            chunker = new _text_node_chunker_ts__WEBPACK_IMPORTED_MODULE_4__[\"TextNodeChunker\"](scope);\n            _context.next = 5;\n            return Object(_home_user_annotator_incubator_annotator_website_annotator_packages_selector_src_index_ts__WEBPACK_IMPORTED_MODULE_2__[\"describeTextQuote\"])(chunker.rangeToChunkRange(range), function () {\n              return new _text_node_chunker_ts__WEBPACK_IMPORTED_MODULE_4__[\"TextNodeChunker\"](scope);\n            }, options);\n\n          case 5:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _describeTextQuote.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///../packages/dom/src/text-quote/describe.ts?");

/***/ }),

/***/ "../packages/dom/src/text-quote/index.ts":
/*!***********************************************!*\
  !*** ../packages/dom/src/text-quote/index.ts ***!
  \***********************************************/
/*! exports provided: describeTextQuote, createTextQuoteSelectorMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _describe_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./describe.ts */ \"../packages/dom/src/text-quote/describe.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"describeTextQuote\", function() { return _describe_ts__WEBPACK_IMPORTED_MODULE_0__[\"describeTextQuote\"]; });\n\n/* harmony import */ var _match_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.ts */ \"../packages/dom/src/text-quote/match.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createTextQuoteSelectorMatcher\", function() { return _match_ts__WEBPACK_IMPORTED_MODULE_1__[\"createTextQuoteSelectorMatcher\"]; });\n\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n//# sourceURL=webpack:///../packages/dom/src/text-quote/index.ts?");

/***/ }),

/***/ "../packages/dom/src/text-quote/match.ts":
/*!***********************************************!*\
  !*** ../packages/dom/src/text-quote/match.ts ***!
  \***********************************************/
/*! exports provided: createTextQuoteSelectorMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTextQuoteSelectorMatcher\", function() { return createTextQuoteSelectorMatcher; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncIterator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/asyncIterator.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"../node_modules/@babel/runtime-corejs3/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _home_user_annotator_incubator_annotator_website_annotator_packages_selector_src_index_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../packages/selector/src/index.ts */ \"../packages/selector/src/index.ts\");\n/* harmony import */ var _text_node_chunker_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../text-node-chunker.ts */ \"../packages/dom/src/text-node-chunker.ts\");\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\n\n\n/**\n * Find occurrences in a text matching the given {@link\n * TextQuoteSelector}.\n *\n * This performs an exact search for the selector’s quote (including prefix and\n * suffix) within the text contained in the given scope (a  {@link\n * https://developer.mozilla.org/en-US/docs/Web/API/Range | Range}).\n *\n * Note the match is based on strict character-by-character equivalence, i.e.\n * it is sensitive to whitespace, capitalisation, etc.\n *\n * The function is curried, taking first the selector and then the scope.\n *\n * As there may be multiple matches for a given selector (when its prefix and\n * suffix attributes are not sufficient to disambiguate it), the matcher will\n * return an (async) generator that produces each match in the order they are\n * found in the text.\n *\n * @example\n * ```\n * // Find the word ‘banana’.\n * const selector = { type: 'TextQuoteSelector', exact: 'banana' };\n *\n * // Search in the document body.\n * const scope = document.createRange();\n * scope.selectNodeContents(document.body);\n *\n * // Read all matches.\n * const matches = textQuoteSelectorMatcher(selector)(scope);\n * for await (match of matches) console.log(match);\n * // ⇒ Range { startContainer: #text, startOffset: 187, endContainer: #text,\n * //   endOffset: 193, … }\n * // ⇒ Range { startContainer: #text, startOffset: 631, endContainer: #text,\n * //   endOffset: 637, … }\n * ```\n *\n * @param selector - The {@link TextQuoteSelector}\n * to be anchored\n * @returns a {@link Matcher} function that applies\n * `selector` to a given {@link https://developer.mozilla.org/en-US/docs/Web/API/Range\n * | Range}\n *\n * @public\n */\n\nfunction createTextQuoteSelectorMatcher(selector) {\n  var abstractMatcher = Object(_home_user_annotator_incubator_annotator_website_annotator_packages_selector_src_index_ts__WEBPACK_IMPORTED_MODULE_4__[\"textQuoteSelectorMatcher\"])(selector);\n  return /*#__PURE__*/function () {\n    var _matchAll = Object(_babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(scope) {\n      var textChunks, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, abstractMatch;\n\n      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              textChunks = new _text_node_chunker_ts__WEBPACK_IMPORTED_MODULE_5__[\"TextNodeChunker\"](scope);\n              _context.next = 11;\n              break;\n\n            case 4:\n              _context.prev = 4;\n              _context.t0 = _context[\"catch\"](0);\n\n              if (!(_context.t0 instanceof _text_node_chunker_ts__WEBPACK_IMPORTED_MODULE_5__[\"EmptyScopeError\"])) {\n                _context.next = 10;\n                break;\n              }\n\n              return _context.abrupt(\"return\");\n\n            case 10:\n              throw _context.t0;\n\n            case 11:\n              _iteratorNormalCompletion = true;\n              _didIteratorError = false;\n              _context.prev = 13;\n              _iterator = Object(_babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(abstractMatcher(textChunks));\n\n            case 15:\n              _context.next = 17;\n              return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_iterator.next());\n\n            case 17:\n              _step = _context.sent;\n              _iteratorNormalCompletion = _step.done;\n              _context.next = 21;\n              return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_step.value);\n\n            case 21:\n              _value = _context.sent;\n\n              if (_iteratorNormalCompletion) {\n                _context.next = 29;\n                break;\n              }\n\n              abstractMatch = _value;\n              _context.next = 26;\n              return textChunks.chunkRangeToRange(abstractMatch);\n\n            case 26:\n              _iteratorNormalCompletion = true;\n              _context.next = 15;\n              break;\n\n            case 29:\n              _context.next = 35;\n              break;\n\n            case 31:\n              _context.prev = 31;\n              _context.t1 = _context[\"catch\"](13);\n              _didIteratorError = true;\n              _iteratorError = _context.t1;\n\n            case 35:\n              _context.prev = 35;\n              _context.prev = 36;\n\n              if (!(!_iteratorNormalCompletion && _iterator.return != null)) {\n                _context.next = 40;\n                break;\n              }\n\n              _context.next = 40;\n              return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_iterator.return());\n\n            case 40:\n              _context.prev = 40;\n\n              if (!_didIteratorError) {\n                _context.next = 43;\n                break;\n              }\n\n              throw _iteratorError;\n\n            case 43:\n              return _context.finish(40);\n\n            case 44:\n              return _context.finish(35);\n\n            case 45:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 4], [13, 31, 35, 45], [36,, 40, 44]]);\n    }));\n\n    function matchAll(_x) {\n      return _matchAll.apply(this, arguments);\n    }\n\n    return matchAll;\n  }();\n}\n\n//# sourceURL=webpack:///../packages/dom/src/text-quote/match.ts?");

/***/ }),

/***/ "../packages/selector/src/index.ts":
/*!*****************************************!*\
  !*** ../packages/selector/src/index.ts ***!
  \*****************************************/
/*! exports provided: describeTextQuote, textQuoteSelectorMatcher, describeTextPosition, textPositionSelectorMatcher, chunkEquals, chunkRangeEquals, makeRefinable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeRefinable\", function() { return makeRefinable; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncGeneratorDelegate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncGeneratorDelegate */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/asyncGeneratorDelegate.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncIterator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/asyncIterator.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"../node_modules/@babel/runtime-corejs3/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _text_index_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text/index.ts */ \"../packages/selector/src/text/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"describeTextQuote\", function() { return _text_index_ts__WEBPACK_IMPORTED_MODULE_5__[\"describeTextQuote\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"textQuoteSelectorMatcher\", function() { return _text_index_ts__WEBPACK_IMPORTED_MODULE_5__[\"textQuoteSelectorMatcher\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"describeTextPosition\", function() { return _text_index_ts__WEBPACK_IMPORTED_MODULE_5__[\"describeTextPosition\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"textPositionSelectorMatcher\", function() { return _text_index_ts__WEBPACK_IMPORTED_MODULE_5__[\"textPositionSelectorMatcher\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"chunkEquals\", function() { return _text_index_ts__WEBPACK_IMPORTED_MODULE_5__[\"chunkEquals\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"chunkRangeEquals\", function() { return _text_index_ts__WEBPACK_IMPORTED_MODULE_5__[\"chunkRangeEquals\"]; });\n\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\n\n\n/**\n * Wrap a matcher creation function so that it supports refinement of selection.\n *\n * See {@link https://www.w3.org/TR/2017/REC-annotation-model-20170223/#refinement-of-selection\n * | §4.2.9 Refinement of Selection} in the Web Annotation Data Model.\n *\n * @param matcherCreator - The function to wrap; it will be executed both for\n * {@link Selector}s passed to the returned wrapper function, and for any\n * refining Selector those might contain (and any refinement of that, etc.).\n *\n * @public\n */\n\nfunction makeRefinable(matcherCreator) {\n  return function createMatcherWithRefinement(sourceSelector) {\n    var matcher = matcherCreator(sourceSelector);\n\n    if (sourceSelector.refinedBy) {\n      var refiningSelector = createMatcherWithRefinement(sourceSelector.refinedBy);\n      return /*#__PURE__*/function () {\n        var _matchAll = Object(_babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee(scope) {\n          var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, match;\n\n          return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  _iteratorNormalCompletion = true;\n                  _didIteratorError = false;\n                  _context.prev = 2;\n                  _iterator = Object(_babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(matcher(scope));\n\n                case 4:\n                  _context.next = 6;\n                  return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_iterator.next());\n\n                case 6:\n                  _step = _context.sent;\n                  _iteratorNormalCompletion = _step.done;\n                  _context.next = 10;\n                  return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_step.value);\n\n                case 10:\n                  _value = _context.sent;\n\n                  if (_iteratorNormalCompletion) {\n                    _context.next = 17;\n                    break;\n                  }\n\n                  match = _value;\n                  return _context.delegateYield(Object(_babel_runtime_corejs3_helpers_esm_asyncGeneratorDelegate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(refiningSelector(match)), _babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), \"t0\", 14);\n\n                case 14:\n                  _iteratorNormalCompletion = true;\n                  _context.next = 4;\n                  break;\n\n                case 17:\n                  _context.next = 23;\n                  break;\n\n                case 19:\n                  _context.prev = 19;\n                  _context.t1 = _context[\"catch\"](2);\n                  _didIteratorError = true;\n                  _iteratorError = _context.t1;\n\n                case 23:\n                  _context.prev = 23;\n                  _context.prev = 24;\n\n                  if (!(!_iteratorNormalCompletion && _iterator.return != null)) {\n                    _context.next = 28;\n                    break;\n                  }\n\n                  _context.next = 28;\n                  return Object(_babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_iterator.return());\n\n                case 28:\n                  _context.prev = 28;\n\n                  if (!_didIteratorError) {\n                    _context.next = 31;\n                    break;\n                  }\n\n                  throw _iteratorError;\n\n                case 31:\n                  return _context.finish(28);\n\n                case 32:\n                  return _context.finish(23);\n\n                case 33:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee, null, [[2, 19, 23, 33], [24,, 28, 32]]);\n        }));\n\n        function matchAll(_x) {\n          return _matchAll.apply(this, arguments);\n        }\n\n        return matchAll;\n      }();\n    }\n\n    return matcher;\n  };\n}\n\n//# sourceURL=webpack:///../packages/selector/src/index.ts?");

/***/ }),

/***/ "../packages/selector/src/text/chunker.ts":
/*!************************************************!*\
  !*** ../packages/selector/src/text/chunker.ts ***!
  \************************************************/
/*! exports provided: chunkEquals, chunkRangeEquals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chunkEquals\", function() { return chunkEquals; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chunkRangeEquals\", function() { return chunkRangeEquals; });\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n/**\n * Represents a piece of text in any kind of ‘file’.\n *\n * Its purpose is to enable generic algorithms to deal with text content of any\n * type of ‘file’ that consists of many pieces of text (e.g. a DOM, PDF, …).\n * Each Chunk represents one piece of text ({@link Chunk.data}). An object\n * implementing this interface would typically have other attributes as well to\n * map the chunk back to its position in the file (e.g. a Text node in the DOM).\n *\n * @typeParam TData - Piece of text, typically `string`\n *\n * @public\n */\n\n/**\n * Test two {@link Chunk}s for equality.\n *\n * Equality here means that both represent the same piece of text (i.e. at the\n * same position) in the file. It compares using the custom {@link Chunk.equals}\n * method if either chunk defines one, and falls back to checking the objects’\n * identity (i.e. `chunk1 === chunk2`).\n *\n * @public\n */\nfunction chunkEquals(chunk1, chunk2) {\n  if (chunk1.equals) return chunk1.equals(chunk2);\n  if (chunk2.equals) return chunk2.equals(chunk1);\n  return chunk1 === chunk2;\n}\n/**\n * Points at a range of characters between two points inside {@link Chunk}s.\n *\n * Analogous to the DOM’s ({@link https://developer.mozilla.org/en-US/docs/Web/API/AbstractRange\n * | Abstract}){@link https://developer.mozilla.org/en-US/docs/Web/API/Range |\n * Range}. Each index expresses an offset inside the value of the corresponding\n * {@link Chunk.data}, and can equal the length of that data in order to point\n * to the position right after the chunk’s last character.\n *\n * @public\n */\n\n/**\n * Test two {@link ChunkRange}s for equality.\n *\n * Equality here means equality of each of their four properties (i.e.\n * {@link startChunk}, {@link startIndex},\n * {@link endChunk}, and {@link endIndex}).\n * For the `startChunk`s and `endChunk`s, this function uses the custom\n * {@link Chunk.equals} method if defined.\n *\n * Note that if the start/end of one range points at the end of a chunk, and the\n * other to the start of a subsequent chunk, they are not considered equal, even\n * though semantically they may be representing the same range of characters. To\n * test for such semantic equivalence, ensure that both inputs are normalised:\n * typically this means the range is shrunk to its narrowest equivalent, and (if\n * it is empty) positioned at its first equivalent.\n *\n * @public\n */\nfunction chunkRangeEquals(range1, range2) {\n  return chunkEquals(range1.startChunk, range2.startChunk) && chunkEquals(range1.endChunk, range2.endChunk) && range1.startIndex === range2.startIndex && range1.endIndex === range2.endIndex;\n}\n/**\n * Presents the pieces of text contained in some underlying ‘file’ as a sequence\n * of {@link Chunk}s.\n *\n * Rather than presenting a list of all pieces, the `Chunker` provides methods\n * to walk through the file piece by piece. This permits implementations to read\n * and convert the file to `Chunk`s lazily.\n *\n * For those familiar with the DOM APIs, it is similar to a NodeIterator (but\n * unlike NodeIterator, it has no concept of being ‘before’ or ‘after’ a chunk).\n *\n * @typeParam TChunk - (sub)type of `Chunk` being used.\n *\n * @public\n */\n\n//# sourceURL=webpack:///../packages/selector/src/text/chunker.ts?");

/***/ }),

/***/ "../packages/selector/src/text/code-point-seeker.ts":
/*!**********************************************************!*\
  !*** ../packages/selector/src/text/code-point-seeker.ts ***!
  \**********************************************************/
/*! exports provided: CodePointSeeker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CodePointSeeker\", function() { return CodePointSeeker; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/toConsumableArray */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/classCallCheck */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/createClass */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/defineProperty */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/slice */ \"../node_modules/@babel/runtime-corejs3/core-js/instance/slice.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_concat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/concat */ \"../node_modules/@babel/runtime-corejs3/core-js/instance/concat.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_concat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_concat__WEBPACK_IMPORTED_MODULE_5__);\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\n\n\n\n/**\n * Seeks through text counting Unicode *code points* instead of *code units*.\n *\n * Javascript characters correspond to 16 bits *code units*, hence two such\n * ‘characters’ might together constitute a single Unicode character (i.e. a\n * *code point*). The {@link CodePointSeeker} allows to ignore this\n * variable-length encoding, by counting code points instead.\n *\n * It is made to wrap a {@link Seeker} that counts code units (presumably a\n * {@link TextSeeker}), which must be passed to its {@link constructor}.\n *\n * When reading from the `CodePointSeeker`, the returned values is not a string\n * but an array of strings, each containing one code point (thus each having a\n * `length` that is either 1 or 2).\n *\n * @public\n */\nvar CodePointSeeker = /*#__PURE__*/function () {\n  /**\n   *\n   * @param raw  The {@link Seeker} to wrap, which counts in code *units* (e.g.\n   * a {@link TextSeeker}). It should have {@link Seeker.position | position}\n   * `0` and its methods must no longer be used directly if the\n   * `CodePointSeeker`’s position is to remain correct.\n   */\n  function CodePointSeeker(raw) {\n    Object(_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, CodePointSeeker);\n\n    this.raw = raw;\n\n    Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, \"position\", 0);\n  }\n\n  Object(_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(CodePointSeeker, [{\n    key: \"seekBy\",\n    value: function seekBy(length) {\n      this.seekTo(this.position + length);\n    }\n  }, {\n    key: \"seekTo\",\n    value: function seekTo(target) {\n      this._readOrSeekTo(false, target);\n    }\n  }, {\n    key: \"read\",\n    value: function read(length, roundUp) {\n      return this.readTo(this.position + length, roundUp);\n    }\n  }, {\n    key: \"readTo\",\n    value: function readTo(target, roundUp) {\n      return this._readOrSeekTo(true, target, roundUp);\n    }\n  }, {\n    key: \"currentChunk\",\n    get: function get() {\n      return this.raw.currentChunk;\n    }\n  }, {\n    key: \"offsetInChunk\",\n    get: function get() {\n      return this.raw.offsetInChunk;\n    }\n  }, {\n    key: \"seekToChunk\",\n    value: function seekToChunk(target) {\n      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n\n      this._readOrSeekToChunk(false, target, offset);\n    }\n  }, {\n    key: \"readToChunk\",\n    value: function readToChunk(target) {\n      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n      return this._readOrSeekToChunk(true, target, offset);\n    }\n  }, {\n    key: \"_readOrSeekToChunk\",\n    value: function _readOrSeekToChunk(read, target) {\n      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n      var oldRawPosition = this.raw.position;\n      var s = this.raw.readToChunk(target, offset);\n      var movedForward = this.raw.position >= oldRawPosition;\n\n      if (movedForward && endsWithinCharacter(s)) {\n        this.raw.seekBy(-1);\n        s = _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_4___default()(s).call(s, 0, -1);\n      } else if (!movedForward && startsWithinCharacter(s)) {\n        this.raw.seekBy(1);\n        s = _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_4___default()(s).call(s, 1);\n      }\n\n      var result = Object(_babel_runtime_corejs3_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(s);\n\n      this.position = movedForward ? this.position + result.length : this.position - result.length;\n      if (read) return result;\n    }\n  }, {\n    key: \"_readOrSeekTo\",\n    value: function _readOrSeekTo(read, target) {\n      var roundUp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      var result = [];\n\n      if (this.position < target) {\n        var unpairedSurrogate = '';\n        var characters = [];\n\n        while (this.position < target) {\n          var s = unpairedSurrogate + this.raw.read(1, true);\n\n          if (endsWithinCharacter(s)) {\n            unpairedSurrogate = _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_4___default()(s).call(s, -1); // consider this half-character part of the next string.\n\n            s = _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_4___default()(s).call(s, 0, -1);\n          } else {\n            unpairedSurrogate = '';\n          }\n\n          characters = Object(_babel_runtime_corejs3_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(s);\n          this.position += characters.length;\n          if (read) result = _babel_runtime_corejs3_core_js_instance_concat__WEBPACK_IMPORTED_MODULE_5___default()(result).call(result, characters);\n        }\n\n        if (unpairedSurrogate) this.raw.seekBy(-1); // align with the last complete character.\n\n        if (!roundUp && this.position > target) {\n          var overshootInCodePoints = this.position - target;\n\n          var overshootInCodeUnits = _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_4___default()(characters).call(characters, -overshootInCodePoints).join('').length;\n\n          this.position -= overshootInCodePoints;\n          this.raw.seekBy(-overshootInCodeUnits);\n        }\n      } else {\n        // Nearly equal to the if-block, but moving backward in the text.\n        var _unpairedSurrogate = '';\n        var _characters = [];\n\n        while (this.position > target) {\n          var _s = this.raw.read(-1, true) + _unpairedSurrogate;\n\n          if (startsWithinCharacter(_s)) {\n            _unpairedSurrogate = _s[0];\n            _s = _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_4___default()(_s).call(_s, 1);\n          } else {\n            _unpairedSurrogate = '';\n          }\n\n          _characters = Object(_babel_runtime_corejs3_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_s);\n          this.position -= _characters.length;\n          if (read) result = _babel_runtime_corejs3_core_js_instance_concat__WEBPACK_IMPORTED_MODULE_5___default()(_characters).call(_characters, result);\n        }\n\n        if (_unpairedSurrogate) this.raw.seekBy(1);\n\n        if (!roundUp && this.position < target) {\n          var _overshootInCodePoints = target - this.position;\n\n          var _overshootInCodeUnits = _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_4___default()(_characters).call(_characters, 0, _overshootInCodePoints).join('').length;\n\n          this.position += _overshootInCodePoints;\n          this.raw.seekBy(_overshootInCodeUnits);\n        }\n      }\n\n      if (read) return result;\n    }\n  }]);\n\n  return CodePointSeeker;\n}();\n\nfunction endsWithinCharacter(s) {\n  var codeUnit = s.charCodeAt(s.length - 1);\n  return 0xd800 <= codeUnit && codeUnit <= 0xdbff;\n}\n\nfunction startsWithinCharacter(s) {\n  var codeUnit = s.charCodeAt(0);\n  return 0xdc00 <= codeUnit && codeUnit <= 0xdfff;\n}\n\n//# sourceURL=webpack:///../packages/selector/src/text/code-point-seeker.ts?");

/***/ }),

/***/ "../packages/selector/src/text/describe-text-position.ts":
/*!***************************************************************!*\
  !*** ../packages/selector/src/text/describe-text-position.ts ***!
  \***************************************************************/
/*! exports provided: describeTextPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"describeTextPosition\", function() { return describeTextPosition; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"../node_modules/@babel/runtime-corejs3/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _code_point_seeker_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code-point-seeker.ts */ \"../packages/selector/src/text/code-point-seeker.ts\");\n/* harmony import */ var _seeker_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seeker.ts */ \"../packages/selector/src/text/seeker.ts\");\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\n/**\n * Returns a {@link TextPositionSelector} that points at the target text within\n * the given scope.\n *\n * This is an abstract implementation of the function’s logic, which expects a\n * generic {@link Chunker} to represent the text, and a {@link ChunkRange} to\n * represent the target.\n *\n * See {@link dom.describeTextPosition} for a wrapper around\n * this implementation which applies it to the text of an HTML DOM.\n *\n * @param target - The range of characters that the selector should describe\n * @param scope - The text, presented as a {@link Chunker}, which contains the\n * target range, and relative to which its position will be measured\n * @returns The {@link TextPositionSelector} that describes `target` relative\n * to `scope`\n *\n * @public\n */\n\nfunction describeTextPosition(_x, _x2) {\n  return _describeTextPosition.apply(this, arguments);\n}\n\nfunction _describeTextPosition() {\n  _describeTextPosition = Object(_babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(target, scope) {\n    var codeUnitSeeker, codePointSeeker, start, end;\n    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            codeUnitSeeker = new _seeker_ts__WEBPACK_IMPORTED_MODULE_3__[\"TextSeeker\"](scope);\n            codePointSeeker = new _code_point_seeker_ts__WEBPACK_IMPORTED_MODULE_2__[\"CodePointSeeker\"](codeUnitSeeker);\n            codePointSeeker.seekToChunk(target.startChunk, target.startIndex);\n            start = codePointSeeker.position;\n            codePointSeeker.seekToChunk(target.endChunk, target.endIndex);\n            end = codePointSeeker.position;\n            return _context.abrupt(\"return\", {\n              type: 'TextPositionSelector',\n              start: start,\n              end: end\n            });\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _describeTextPosition.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///../packages/selector/src/text/describe-text-position.ts?");

/***/ }),

/***/ "../packages/selector/src/text/describe-text-quote.ts":
/*!************************************************************!*\
  !*** ../packages/selector/src/text/describe-text-quote.ts ***!
  \************************************************************/
/*! exports provided: describeTextQuote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"describeTextQuote\", function() { return describeTextQuote; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"../node_modules/@babel/runtime-corejs3/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chunker_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunker.ts */ \"../packages/selector/src/text/chunker.ts\");\n/* harmony import */ var _seeker_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seeker.ts */ \"../packages/selector/src/text/seeker.ts\");\n/* harmony import */ var _index_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.ts */ \"../packages/selector/src/text/index.ts\");\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\n\n/**\n * @public\n */\n\n/**\n * Returns a {@link TextQuoteSelector} that points at the target quote in the\n * given text.\n *\n * The selector will contain the exact target quote. In case this quote appears\n * multiple times in the text, sufficient context around the quote will be\n * included in the selector’s `prefix` and `suffix` attributes to disambiguate.\n * By default, more prefix and suffix are included than strictly required; both\n * in order to be robust against slight modifications, and in an attempt to not\n * end halfway a word (mainly for human readability).\n *\n * This is an abstract implementation of the function’s logic, which expects a\n * generic {@link Chunker} to represent the text, and a {@link ChunkRange} to\n * represent the target.\n *\n * See {@link dom.describeTextQuote} for a wrapper around this\n * implementation which applies it to the text of an HTML DOM.\n *\n * @param target - The range of characters that the selector should describe\n * @param scope - The text containing the target range; or, more accurately, a\n * function that produces {@link Chunker}s corresponding to this text.\n * @param options - Options to fine-tune the function’s behaviour.\n * @returns The {@link TextQuoteSelector} that describes `target`.\n *\n * @public\n */\nfunction describeTextQuote(_x, _x2) {\n  return _describeTextQuote.apply(this, arguments);\n}\n\nfunction _describeTextQuote() {\n  _describeTextQuote = Object(_babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(target, scope) {\n    var options,\n        _options$minimalConte,\n        minimalContext,\n        _options$minimumQuote,\n        minimumQuoteLength,\n        _options$maxWordLengt,\n        maxWordLength,\n        seekerAtTarget,\n        seekerAtUnintendedMatch,\n        exact,\n        prefix,\n        suffix,\n        currentQuoteLength,\n        length,\n        _length,\n        _length2,\n        tentativeSelector,\n        matches,\n        nextMatch,\n        unintendedMatch,\n        extraPrefix,\n        extraSuffix,\n        _args = arguments;\n\n    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};\n            _options$minimalConte = options.minimalContext, minimalContext = _options$minimalConte === void 0 ? false : _options$minimalConte, _options$minimumQuote = options.minimumQuoteLength, minimumQuoteLength = _options$minimumQuote === void 0 ? 0 : _options$minimumQuote, _options$maxWordLengt = options.maxWordLength, maxWordLength = _options$maxWordLengt === void 0 ? 50 : _options$maxWordLengt; // Create a seeker to read the target quote and the context around it.\n            // TODO Possible optimisation: as it need not be an AbsoluteSeeker, a\n            // different implementation could provide direct ‘jump’ access in seekToChunk\n            // (the scope’s Chunker would of course also have to support this).\n\n            seekerAtTarget = new _seeker_ts__WEBPACK_IMPORTED_MODULE_3__[\"TextSeeker\"](scope()); // Create a second seeker so that we will be able to simultaneously read\n            // characters near both the target and an unintended match, if we find any.\n\n            seekerAtUnintendedMatch = new _seeker_ts__WEBPACK_IMPORTED_MODULE_3__[\"TextSeeker\"](scope()); // Read the target’s exact text.\n\n            seekerAtTarget.seekToChunk(target.startChunk, target.startIndex);\n            exact = seekerAtTarget.readToChunk(target.endChunk, target.endIndex); // Start with an empty prefix and suffix.\n\n            prefix = '';\n            suffix = ''; // If the quote is below the given minimum length, add some prefix & suffix.\n\n            currentQuoteLength = function currentQuoteLength() {\n              return prefix.length + exact.length + suffix.length;\n            };\n\n            if (currentQuoteLength() < minimumQuoteLength) {\n              // Expand the prefix, but only to reach halfway towards the desired length.\n              seekerAtTarget.seekToChunk(target.startChunk, target.startIndex - prefix.length);\n              length = Math.floor((minimumQuoteLength - currentQuoteLength()) / 2);\n              prefix = seekerAtTarget.read(-length, false, true) + prefix; // If needed, expand the suffix to achieve the minimum length.\n\n              if (currentQuoteLength() < minimumQuoteLength) {\n                seekerAtTarget.seekToChunk(target.endChunk, target.endIndex + suffix.length);\n                _length = minimumQuoteLength - currentQuoteLength();\n                suffix = suffix + seekerAtTarget.read(_length, false, true); // We might have to expand the prefix again (if at the end of the scope).\n\n                if (currentQuoteLength() < minimumQuoteLength) {\n                  seekerAtTarget.seekToChunk(target.startChunk, target.startIndex - prefix.length);\n                  _length2 = minimumQuoteLength - currentQuoteLength();\n                  prefix = seekerAtTarget.read(-_length2, false, true) + prefix;\n                }\n              }\n            } // Expand prefix & suffix to avoid them ending somewhere halfway in a word.\n\n\n            if (!minimalContext) {\n              seekerAtTarget.seekToChunk(target.startChunk, target.startIndex - prefix.length);\n              prefix = readUntilWhitespace(seekerAtTarget, maxWordLength, true) + prefix;\n              seekerAtTarget.seekToChunk(target.endChunk, target.endIndex + suffix.length);\n              suffix = suffix + readUntilWhitespace(seekerAtTarget, maxWordLength, false);\n            } // Search for matches of the quote using the current prefix and suffix. At\n            // each unintended match we encounter, we extend the prefix or suffix to\n            // ensure it will no longer match.\n\n\n          case 11:\n            if (false) {}\n\n            tentativeSelector = {\n              type: 'TextQuoteSelector',\n              exact: exact,\n              prefix: prefix,\n              suffix: suffix\n            };\n            matches = Object(_index_ts__WEBPACK_IMPORTED_MODULE_4__[\"textQuoteSelectorMatcher\"])(tentativeSelector)(scope());\n            _context.next = 16;\n            return matches.next();\n\n          case 16:\n            nextMatch = _context.sent;\n\n            if (!(!nextMatch.done && Object(_chunker_ts__WEBPACK_IMPORTED_MODULE_2__[\"chunkRangeEquals\"])(nextMatch.value, target))) {\n              _context.next = 21;\n              break;\n            }\n\n            _context.next = 20;\n            return matches.next();\n\n          case 20:\n            nextMatch = _context.sent;\n\n          case 21:\n            if (!nextMatch.done) {\n              _context.next = 23;\n              break;\n            }\n\n            return _context.abrupt(\"return\", tentativeSelector);\n\n          case 23:\n            // Possible optimisation: A subsequent search could safely skip the part we\n            // already processed, instead of starting from the beginning again. But we’d\n            // need the matcher to start at the seeker’s position, instead of searching\n            // in the whole current chunk. Then we could just seek back to just after\n            // the start of the prefix: seeker.seekBy(-prefix.length + 1); (don’t forget\n            // to also correct for any changes in the prefix we will make below)\n            // We’ll have to add more prefix/suffix to disqualify this unintended match.\n            unintendedMatch = nextMatch.value; // Count how many characters we’d need as a prefix to disqualify this match.\n\n            seekerAtTarget.seekToChunk(target.startChunk, target.startIndex - prefix.length);\n            seekerAtUnintendedMatch.seekToChunk(unintendedMatch.startChunk, unintendedMatch.startIndex - prefix.length);\n            extraPrefix = readUntilDifferent(seekerAtTarget, seekerAtUnintendedMatch, true);\n            if (extraPrefix !== undefined && !minimalContext) extraPrefix = readUntilWhitespace(seekerAtTarget, maxWordLength, true) + extraPrefix; // Count how many characters we’d need as a suffix to disqualify this match.\n\n            seekerAtTarget.seekToChunk(target.endChunk, target.endIndex + suffix.length);\n            seekerAtUnintendedMatch.seekToChunk(unintendedMatch.endChunk, unintendedMatch.endIndex + suffix.length);\n            extraSuffix = readUntilDifferent(seekerAtTarget, seekerAtUnintendedMatch, false);\n            if (extraSuffix !== undefined && !minimalContext) extraSuffix = extraSuffix + readUntilWhitespace(seekerAtTarget, maxWordLength, false);\n\n            if (!minimalContext) {\n              _context.next = 44;\n              break;\n            }\n\n            if (!(extraPrefix !== undefined && (extraSuffix === undefined || extraPrefix.length <= extraSuffix.length))) {\n              _context.next = 37;\n              break;\n            }\n\n            prefix = extraPrefix + prefix;\n            _context.next = 42;\n            break;\n\n          case 37:\n            if (!(extraSuffix !== undefined)) {\n              _context.next = 41;\n              break;\n            }\n\n            suffix = suffix + extraSuffix;\n            _context.next = 42;\n            break;\n\n          case 41:\n            throw new Error('Target cannot be disambiguated; how could that have happened‽');\n\n          case 42:\n            _context.next = 46;\n            break;\n\n          case 44:\n            // For redundancy, expand both prefix and suffix.\n            if (extraPrefix !== undefined) prefix = extraPrefix + prefix;\n            if (extraSuffix !== undefined) suffix = suffix + extraSuffix;\n\n          case 46:\n            _context.next = 11;\n            break;\n\n          case 48:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _describeTextQuote.apply(this, arguments);\n}\n\nfunction readUntilDifferent(seeker1, seeker2, reverse) {\n  var result = '';\n\n  while (true) {\n    var nextCharacter = void 0;\n\n    try {\n      nextCharacter = seeker1.read(reverse ? -1 : 1);\n    } catch (err) {\n      return undefined; // Start/end of text reached: cannot expand result.\n    }\n\n    result = reverse ? nextCharacter + result : result + nextCharacter; // Check if the newly added character makes the result differ from the second seeker.\n\n    var comparisonCharacter = void 0;\n\n    try {\n      comparisonCharacter = seeker2.read(reverse ? -1 : 1);\n    } catch (err) {\n      // A RangeError would merely mean seeker2 is exhausted.\n      if (!(err instanceof RangeError)) throw err;\n    }\n\n    if (nextCharacter !== comparisonCharacter) return result;\n  }\n}\n\nfunction readUntilWhitespace(seeker) {\n  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;\n  var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var result = '';\n\n  while (result.length < limit) {\n    var nextCharacter = void 0;\n\n    try {\n      nextCharacter = seeker.read(reverse ? -1 : 1);\n    } catch (err) {\n      if (!(err instanceof RangeError)) throw err;\n      break; // End/start of text reached.\n    } // Stop if we reached whitespace.\n\n\n    if (isWhitespace(nextCharacter)) {\n      seeker.seekBy(reverse ? 1 : -1); // ‘undo’ the last read.\n\n      break;\n    }\n\n    result = reverse ? nextCharacter + result : result + nextCharacter;\n  }\n\n  return result;\n}\n\nfunction isWhitespace(s) {\n  return /^\\s+$/.test(s);\n}\n\n//# sourceURL=webpack:///../packages/selector/src/text/describe-text-quote.ts?");

/***/ }),

/***/ "../packages/selector/src/text/index.ts":
/*!**********************************************!*\
  !*** ../packages/selector/src/text/index.ts ***!
  \**********************************************/
/*! exports provided: describeTextQuote, textQuoteSelectorMatcher, describeTextPosition, textPositionSelectorMatcher, chunkEquals, chunkRangeEquals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _describe_text_quote_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./describe-text-quote.ts */ \"../packages/selector/src/text/describe-text-quote.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"describeTextQuote\", function() { return _describe_text_quote_ts__WEBPACK_IMPORTED_MODULE_0__[\"describeTextQuote\"]; });\n\n/* harmony import */ var _match_text_quote_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match-text-quote.ts */ \"../packages/selector/src/text/match-text-quote.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"textQuoteSelectorMatcher\", function() { return _match_text_quote_ts__WEBPACK_IMPORTED_MODULE_1__[\"textQuoteSelectorMatcher\"]; });\n\n/* harmony import */ var _describe_text_position_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./describe-text-position.ts */ \"../packages/selector/src/text/describe-text-position.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"describeTextPosition\", function() { return _describe_text_position_ts__WEBPACK_IMPORTED_MODULE_2__[\"describeTextPosition\"]; });\n\n/* harmony import */ var _match_text_position_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./match-text-position.ts */ \"../packages/selector/src/text/match-text-position.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"textPositionSelectorMatcher\", function() { return _match_text_position_ts__WEBPACK_IMPORTED_MODULE_3__[\"textPositionSelectorMatcher\"]; });\n\n/* harmony import */ var _chunker_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chunker.ts */ \"../packages/selector/src/text/chunker.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"chunkEquals\", function() { return _chunker_ts__WEBPACK_IMPORTED_MODULE_4__[\"chunkEquals\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"chunkRangeEquals\", function() { return _chunker_ts__WEBPACK_IMPORTED_MODULE_4__[\"chunkRangeEquals\"]; });\n\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\n\n\n//# sourceURL=webpack:///../packages/selector/src/text/index.ts?");

/***/ }),

/***/ "../packages/selector/src/text/match-text-position.ts":
/*!************************************************************!*\
  !*** ../packages/selector/src/text/match-text-position.ts ***!
  \************************************************************/
/*! exports provided: textPositionSelectorMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"textPositionSelectorMatcher\", function() { return textPositionSelectorMatcher; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"../node_modules/@babel/runtime-corejs3/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _code_point_seeker_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code-point-seeker.ts */ \"../packages/selector/src/text/code-point-seeker.ts\");\n/* harmony import */ var _seeker_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./seeker.ts */ \"../packages/selector/src/text/seeker.ts\");\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\n\n/**\n * Find the range of text corresponding to the given {@link TextPositionSelector}.\n *\n * This is an abstract implementation of the function’s logic, which expects a\n * generic {@link Chunker} to represent the text, and returns an (async)\n * generator producing a single {@link ChunkRange} to represent the match.\n * (unlike e.g. TextQuoteSelector, it cannot result in multiple matches).\n *\n * See {@link dom.createTextPositionSelectorMatcher} for a\n * wrapper around this implementation which applies it to the text of an HTML\n * DOM.\n *\n * The function is curried, taking first the selector and then the text.\n *\n * @example\n * ```\n * const selector = { type: 'TextPositionSelector', start: 702, end: 736 };\n * const matches = textPositionSelectorMatcher(selector)(textChunks);\n * const match = (await matches.next()).value;\n * console.log(match);\n * // ⇒ { startChunk: { … }, startIndex: 64, endChunk: { … }, endIndex: 98 }\n * ```\n *\n * @param selector - the {@link TextPositionSelector} to be anchored\n * @returns a {@link Matcher} function that applies `selector` to a given text\n *\n * @public\n */\n\nfunction textPositionSelectorMatcher(selector) {\n  var start = selector.start,\n      end = selector.end;\n  return /*#__PURE__*/function () {\n    var _matchAll = Object(_babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(textChunks) {\n      var codeUnitSeeker, codePointSeeker, startChunk, startIndex, endChunk, endIndex;\n      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              codeUnitSeeker = new _seeker_ts__WEBPACK_IMPORTED_MODULE_4__[\"TextSeeker\"](textChunks);\n              codePointSeeker = new _code_point_seeker_ts__WEBPACK_IMPORTED_MODULE_3__[\"CodePointSeeker\"](codeUnitSeeker);\n              codePointSeeker.seekTo(start);\n              startChunk = codeUnitSeeker.currentChunk;\n              startIndex = codeUnitSeeker.offsetInChunk;\n              codePointSeeker.seekTo(end);\n              endChunk = codeUnitSeeker.currentChunk;\n              endIndex = codeUnitSeeker.offsetInChunk;\n              _context.next = 10;\n              return {\n                startChunk: startChunk,\n                startIndex: startIndex,\n                endChunk: endChunk,\n                endIndex: endIndex\n              };\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    function matchAll(_x) {\n      return _matchAll.apply(this, arguments);\n    }\n\n    return matchAll;\n  }();\n}\n\n//# sourceURL=webpack:///../packages/selector/src/text/match-text-position.ts?");

/***/ }),

/***/ "../packages/selector/src/text/match-text-quote.ts":
/*!*********************************************************!*\
  !*** ../packages/selector/src/text/match-text-quote.ts ***!
  \*********************************************************/
/*! exports provided: textQuoteSelectorMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"textQuoteSelectorMatcher\", function() { return textQuoteSelectorMatcher; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/slice */ \"../node_modules/@babel/runtime-corejs3/core-js/instance/slice.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/array/from */ \"../node_modules/@babel/runtime-corejs3/core-js/array/from.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/symbol */ \"../node_modules/@babel/runtime-corejs3/core-js/symbol.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator-method */ \"../node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator */ \"../node_modules/@babel/runtime-corejs3/core-js/get-iterator.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/awaitAsyncGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/wrapAsyncGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"../node_modules/@babel/runtime-corejs3/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_starts_with__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/starts-with */ \"../node_modules/@babel/runtime-corejs3/core-js/instance/starts-with.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_starts_with__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_starts_with__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/filter */ \"../node_modules/@babel/runtime-corejs3/core-js/instance/filter.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_filter__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_filter__WEBPACK_IMPORTED_MODULE_9__);\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\n\n\n\n\n\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _babel_runtime_corejs3_core_js_symbol__WEBPACK_IMPORTED_MODULE_2___default.a === \"undefined\" || _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_3___default()(o) == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4___default()(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { var _context2; if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = Object.prototype.toString.call(o)).call(_context2, 8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return _babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/**\n * Find occurrences in a text matching the given {@link TextQuoteSelector}.\n *\n * This performs an exact search the selector’s quote (including prefix and\n * suffix) within the given text.\n *\n * Note the match is based on strict character-by-character equivalence, i.e.\n * it is sensitive to whitespace, capitalisation, etc.\n *\n * This is an abstract implementation of the function’s logic, which expects a\n * generic {@link Chunker} to represent the text, and returns an (async)\n * generator of {@link ChunkRange}s to represent the matches.\n *\n * See {@link dom.createTextQuoteSelectorMatcher} for a\n * wrapper around this implementation which applies it to the text of an HTML\n * DOM.\n *\n * The function is curried, taking first the selector and then the text.\n *\n * As there may be multiple matches for a given selector (when its prefix and\n * suffix attributes are not sufficient to disambiguate it), the matcher will\n * return an (async) generator that produces each match in the order they are\n * found in the text.\n *\n * @example\n * ```\n * const selector = { type: 'TextQuoteSelector', exact: 'banana' };\n * const matches = textQuoteSelectorMatcher(selector)(textChunks);\n * for await (match of matches) console.log(match);\n * // ⇒ { startChunk: { … }, startIndex: 187, endChunk: { … }, endIndex: 193 }\n * // ⇒ { startChunk: { … }, startIndex: 631, endChunk: { … }, endIndex: 637 }\n * ```\n *\n * @param selector - The {@link TextQuoteSelector} to be anchored\n * @returns a {@link Matcher} function that applies `selector` to a given text\n *\n * @public\n */\nfunction textQuoteSelectorMatcher(selector) {\n  return /*#__PURE__*/function () {\n    var _matchAll = Object(_babel_runtime_corejs3_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_6__[\"default\"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee(textChunks) {\n      var exact, prefix, suffix, searchPattern, partialMatches, isFirstChunk, chunk, chunkValue, remainingPartialMatches, _iterator, _step, partialMatch, charactersMatched, charactersUntilMatchEnd, charactersUntilMatchStart, charactersUntilSuffixEnd, fromIndex, patternStartIndex, newPartialMatches, searchStartPoint, _loop, i, _iterator2, _step2, partialMatchStartIndex, _charactersMatched, _partialMatch;\n\n      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              exact = selector.exact;\n              prefix = selector.prefix || '';\n              suffix = selector.suffix || '';\n              searchPattern = prefix + exact + suffix; // The code below essentially just performs string.indexOf(searchPattern),\n              // but on a string that is chopped up in multiple chunks. It runs a loop\n              // containing three steps:\n              // 1. Continue checking any partial matches from the previous chunk(s).\n              // 2. Try find the whole pattern in the chunk (possibly multiple times).\n              // 3. Check if this chunk ends with a partial match (or even multiple partial matches).\n\n              partialMatches = [];\n              isFirstChunk = true;\n\n            case 6:\n              chunk = textChunks.currentChunk;\n              chunkValue = chunk.data; // 1. Continue checking any partial matches from the previous chunk(s).\n\n              remainingPartialMatches = [];\n              _iterator = _createForOfIteratorHelper(partialMatches);\n              _context.prev = 10;\n\n              _iterator.s();\n\n            case 12:\n              if ((_step = _iterator.n()).done) {\n                _context.next = 27;\n                break;\n              }\n\n              partialMatch = _step.value;\n              charactersMatched = partialMatch.charactersMatched; // If the current chunk contains the start and/or end of the match, record these.\n\n              if (partialMatch.endChunk === undefined) {\n                charactersUntilMatchEnd = prefix.length + exact.length - charactersMatched;\n\n                if (charactersUntilMatchEnd <= chunkValue.length) {\n                  partialMatch.endChunk = chunk;\n                  partialMatch.endIndex = charactersUntilMatchEnd;\n                }\n              }\n\n              if (partialMatch.startChunk === undefined) {\n                charactersUntilMatchStart = prefix.length - charactersMatched;\n\n                if (charactersUntilMatchStart < chunkValue.length || partialMatch.endChunk !== undefined // handles an edge case: an empty quote at the end of a chunk.\n                ) {\n                    partialMatch.startChunk = chunk;\n                    partialMatch.startIndex = charactersUntilMatchStart;\n                  }\n              }\n\n              charactersUntilSuffixEnd = searchPattern.length - charactersMatched;\n\n              if (!(charactersUntilSuffixEnd <= chunkValue.length)) {\n                _context.next = 24;\n                break;\n              }\n\n              if (!_babel_runtime_corejs3_core_js_instance_starts_with__WEBPACK_IMPORTED_MODULE_8___default()(chunkValue).call(chunkValue, searchPattern.substring(charactersMatched))) {\n                _context.next = 22;\n                break;\n              }\n\n              _context.next = 22;\n              return partialMatch;\n\n            case 22:\n              _context.next = 25;\n              break;\n\n            case 24:\n              if (chunkValue === searchPattern.substring(charactersMatched, charactersMatched + chunkValue.length)) {\n                // The chunk is too short to complete the match; comparison has to be completed in subsequent chunks.\n                partialMatch.charactersMatched += chunkValue.length;\n                remainingPartialMatches.push(partialMatch);\n              }\n\n            case 25:\n              _context.next = 12;\n              break;\n\n            case 27:\n              _context.next = 32;\n              break;\n\n            case 29:\n              _context.prev = 29;\n              _context.t0 = _context[\"catch\"](10);\n\n              _iterator.e(_context.t0);\n\n            case 32:\n              _context.prev = 32;\n\n              _iterator.f();\n\n              return _context.finish(32);\n\n            case 35:\n              partialMatches = remainingPartialMatches; // 2. Try find the whole pattern in the chunk (possibly multiple times).\n\n              if (!(searchPattern.length <= chunkValue.length)) {\n                _context.next = 49;\n                break;\n              }\n\n              fromIndex = 0;\n\n            case 38:\n              if (!(fromIndex <= chunkValue.length)) {\n                _context.next = 49;\n                break;\n              }\n\n              patternStartIndex = chunkValue.indexOf(searchPattern, fromIndex);\n\n              if (!(patternStartIndex === -1)) {\n                _context.next = 42;\n                break;\n              }\n\n              return _context.abrupt(\"break\", 49);\n\n            case 42:\n              fromIndex = patternStartIndex + 1; // Handle edge case: an empty searchPattern would already have been yielded at the end of the last chunk.\n\n              if (!(patternStartIndex === 0 && searchPattern.length === 0 && !isFirstChunk)) {\n                _context.next = 45;\n                break;\n              }\n\n              return _context.abrupt(\"continue\", 38);\n\n            case 45:\n              _context.next = 47;\n              return {\n                startChunk: chunk,\n                startIndex: patternStartIndex + prefix.length,\n                endChunk: chunk,\n                endIndex: patternStartIndex + prefix.length + exact.length\n              };\n\n            case 47:\n              _context.next = 38;\n              break;\n\n            case 49:\n              // 3. Check if this chunk ends with a partial match (or even multiple partial matches).\n              newPartialMatches = [];\n              searchStartPoint = Math.max(chunkValue.length - searchPattern.length + 1, 0);\n\n              _loop = function _loop(i) {\n                var character = chunkValue[i];\n                newPartialMatches = _babel_runtime_corejs3_core_js_instance_filter__WEBPACK_IMPORTED_MODULE_9___default()(newPartialMatches).call(newPartialMatches, function (partialMatchStartIndex) {\n                  return character === searchPattern[i - partialMatchStartIndex];\n                });\n                if (character === searchPattern[0]) newPartialMatches.push(i);\n              };\n\n              for (i = searchStartPoint; i < chunkValue.length; i++) {\n                _loop(i);\n              }\n\n              _iterator2 = _createForOfIteratorHelper(newPartialMatches);\n\n              try {\n                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n                  partialMatchStartIndex = _step2.value;\n                  _charactersMatched = chunkValue.length - partialMatchStartIndex;\n                  _partialMatch = {\n                    charactersMatched: _charactersMatched\n                  };\n\n                  if (_charactersMatched >= prefix.length + exact.length) {\n                    _partialMatch.endChunk = chunk;\n                    _partialMatch.endIndex = partialMatchStartIndex + prefix.length + exact.length;\n                  }\n\n                  if (_charactersMatched > prefix.length || _partialMatch.endChunk !== undefined // handles an edge case: an empty quote at the end of a chunk.\n                  ) {\n                      _partialMatch.startChunk = chunk;\n                      _partialMatch.startIndex = partialMatchStartIndex + prefix.length;\n                    }\n\n                  partialMatches.push(_partialMatch);\n                }\n              } catch (err) {\n                _iterator2.e(err);\n              } finally {\n                _iterator2.f();\n              }\n\n              isFirstChunk = false;\n\n            case 56:\n              if (textChunks.nextChunk() !== null) {\n                _context.next = 6;\n                break;\n              }\n\n            case 57:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[10, 29, 32, 35]]);\n    }));\n\n    function matchAll(_x) {\n      return _matchAll.apply(this, arguments);\n    }\n\n    return matchAll;\n  }();\n}\n\n//# sourceURL=webpack:///../packages/selector/src/text/match-text-quote.ts?");

/***/ }),

/***/ "../packages/selector/src/text/seeker.ts":
/*!***********************************************!*\
  !*** ../packages/selector/src/text/seeker.ts ***!
  \***********************************************/
/*! exports provided: TextSeeker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextSeeker\", function() { return TextSeeker; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/slicedToArray */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/classCallCheck */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/createClass */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/defineProperty */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/slice */ \"../node_modules/@babel/runtime-corejs3/core-js/instance/slice.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _chunker_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chunker.ts */ \"../packages/selector/src/text/chunker.ts\");\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\n\n\nvar E_END = 'Iterator exhausted before seek ended.';\n/**\n * Abstraction to seek (jump) or read to a position inside a ‘file’ consisting of a\n * sequence of data chunks.\n *\n * This interface is a combination of three interfaces in one: for seeking to a\n * relative position, an absolute position, or a specific chunk. These three are\n * defined separately for clarity and flexibility, but normally used together.\n *\n * A Seeker internally maintains a pointer to the chunk it is currently ‘in’ and\n * the offset position within that chunk.\n *\n * @typeParam TChunk - Type of chunks the file consists of.\n * @typeParam TData - Type of data this seeker’s read methods will return (not\n * necessarily the same as the `TData` parameter of {@link Chunk}, see e.g.\n * {@link CodePointSeeker})\n *\n * @public\n */\n\n/**\n * A TextSeeker is constructed around a {@link Chunker}, to let it be treated as\n * a continuous sequence of characters.\n *\n * Seeking to a given numeric position will cause a `TextSeeker` to pull chunks\n * from the underlying `Chunker`, counting their lengths until the requested\n * position is reached. `Chunks` are not stored but simply read again when\n * seeking backwards.\n *\n * The `Chunker` is presumed to read an unchanging file. If a chunk’s length\n * would change while seeking, a TextSeeker’s absolute positioning would be\n * incorrect.\n *\n * See {@link CodePointSeeker} for a {@link Seeker} that counts Unicode *code\n * points* instead of Javascript’s ‘normal’ characters.\n *\n * @public\n */\nvar TextSeeker = /*#__PURE__*/function () {\n  function TextSeeker(chunker) {\n    Object(_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, TextSeeker);\n\n    this.chunker = chunker;\n\n    Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, \"currentChunkPosition\", 0);\n\n    Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, \"offsetInChunk\", 0);\n\n    // Walk to the start of the first non-empty chunk inside the scope.\n    this.seekTo(0);\n  }\n\n  Object(_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(TextSeeker, [{\n    key: \"currentChunk\",\n    get: // The chunk containing our current text position.\n    function get() {\n      return this.chunker.currentChunk;\n    } // The index of the first character of the current chunk inside the text.\n\n  }, {\n    key: \"position\",\n    get: // The current text position (measured in code units)\n    function get() {\n      return this.currentChunkPosition + this.offsetInChunk;\n    }\n  }, {\n    key: \"read\",\n    value: function read(length) {\n      var roundUp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      var lessIsFine = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      return this._readOrSeekTo(true, this.position + length, roundUp, lessIsFine);\n    }\n  }, {\n    key: \"readTo\",\n    value: function readTo(target) {\n      var roundUp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      return this._readOrSeekTo(true, target, roundUp);\n    }\n  }, {\n    key: \"seekBy\",\n    value: function seekBy(length) {\n      this.seekTo(this.position + length);\n    }\n  }, {\n    key: \"seekTo\",\n    value: function seekTo(target) {\n      this._readOrSeekTo(false, target);\n    }\n  }, {\n    key: \"seekToChunk\",\n    value: function seekToChunk(target) {\n      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n\n      this._readOrSeekToChunk(false, target, offset);\n    }\n  }, {\n    key: \"readToChunk\",\n    value: function readToChunk(target) {\n      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n      return this._readOrSeekToChunk(true, target, offset);\n    }\n  }, {\n    key: \"_readOrSeekToChunk\",\n    value: function _readOrSeekToChunk(read, target) {\n      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n      var oldPosition = this.position;\n      var result = ''; // Walk to the requested chunk.\n\n      if (!this.chunker.precedesCurrentChunk(target)) {\n        // Search forwards.\n        while (!Object(_chunker_ts__WEBPACK_IMPORTED_MODULE_5__[\"chunkEquals\"])(this.currentChunk, target)) {\n          var _this$_readToNextChun = this._readToNextChunk(),\n              _this$_readToNextChun2 = Object(_babel_runtime_corejs3_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this$_readToNextChun, 2),\n              data = _this$_readToNextChun2[0],\n              nextChunk = _this$_readToNextChun2[1];\n\n          if (read) result += data;\n          if (nextChunk === null) throw new RangeError(E_END);\n        }\n      } else {\n        // Search backwards.\n        while (!Object(_chunker_ts__WEBPACK_IMPORTED_MODULE_5__[\"chunkEquals\"])(this.currentChunk, target)) {\n          var _this$_readToPrevious = this._readToPreviousChunk(),\n              _this$_readToPrevious2 = Object(_babel_runtime_corejs3_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this$_readToPrevious, 2),\n              _data = _this$_readToPrevious2[0],\n              previousChunk = _this$_readToPrevious2[1];\n\n          if (read) result = _data + result;\n          if (previousChunk === null) throw new RangeError(E_END);\n        }\n      } // Now we know where the chunk is, walk to the requested offset.\n      // Note we might have started inside the chunk, and the offset could even\n      // point at a position before or after the chunk.\n\n\n      var targetPosition = this.currentChunkPosition + offset;\n\n      if (!read) {\n        this.seekTo(targetPosition);\n      } else {\n        if (targetPosition >= this.position) {\n          // Read further until the target.\n          result += this.readTo(targetPosition);\n        } else if (targetPosition >= oldPosition) {\n          // We passed by our target position: step back.\n          this.seekTo(targetPosition);\n          result = _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_4___default()(result).call(result, 0, targetPosition - oldPosition);\n        } else {\n          // The target precedes our starting position: read backwards from there.\n          this.seekTo(oldPosition);\n          result = this.readTo(targetPosition);\n        }\n\n        return result;\n      }\n    }\n  }, {\n    key: \"_readOrSeekTo\",\n    value: function _readOrSeekTo(read, target) {\n      var roundUp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      var lessIsFine = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n      var result = '';\n\n      if (this.position <= target) {\n        while (true) {\n          var endOfChunk = this.currentChunkPosition + this.currentChunk.data.length;\n\n          if (endOfChunk <= target) {\n            // The target is beyond the current chunk.\n            // (we use < not ≤: if the target is *at* the end of the chunk, possibly\n            // because the current chunk is empty, we prefer to take the next chunk)\n            var _this$_readToNextChun3 = this._readToNextChunk(),\n                _this$_readToNextChun4 = Object(_babel_runtime_corejs3_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this$_readToNextChun3, 2),\n                data = _this$_readToNextChun4[0],\n                nextChunk = _this$_readToNextChun4[1];\n\n            if (read) result += data;\n\n            if (nextChunk === null) {\n              if (this.position === target || lessIsFine) break;else throw new RangeError(E_END);\n            }\n          } else {\n            // The target is within the current chunk.\n            var newOffset = roundUp ? this.currentChunk.data.length : target - this.currentChunkPosition;\n            if (read) result += this.currentChunk.data.substring(this.offsetInChunk, newOffset);\n            this.offsetInChunk = newOffset; // If we finish end at the end of the chunk, seek to the start of the next non-empty node.\n            // (TODO decide: should we keep this guarantee of not finishing at the end of a chunk?)\n\n            if (roundUp) this.seekBy(0);\n            break;\n          }\n        }\n      } else {\n        // Similar to the if-block, but moving backward in the text.\n        while (this.position > target) {\n          if (this.currentChunkPosition <= target) {\n            // The target is within the current chunk.\n            var _newOffset = roundUp ? 0 : target - this.currentChunkPosition;\n\n            if (read) result = this.currentChunk.data.substring(_newOffset, this.offsetInChunk) + result;\n            this.offsetInChunk = _newOffset;\n            break;\n          } else {\n            var _this$_readToPrevious3 = this._readToPreviousChunk(),\n                _this$_readToPrevious4 = Object(_babel_runtime_corejs3_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this$_readToPrevious3, 2),\n                _data2 = _this$_readToPrevious4[0],\n                previousChunk = _this$_readToPrevious4[1];\n\n            if (read) result = _data2 + result;\n\n            if (previousChunk === null) {\n              if (lessIsFine) break;else throw new RangeError(E_END);\n            }\n          }\n        }\n      }\n\n      if (read) return result;\n    } // Read to the start of the next chunk, if any; otherwise to the end of the current chunk.\n\n  }, {\n    key: \"_readToNextChunk\",\n    value: function _readToNextChunk() {\n      var data = this.currentChunk.data.substring(this.offsetInChunk);\n      var chunkLength = this.currentChunk.data.length;\n      var nextChunk = this.chunker.nextChunk();\n\n      if (nextChunk !== null) {\n        this.currentChunkPosition += chunkLength;\n        this.offsetInChunk = 0;\n      } else {\n        this.offsetInChunk = chunkLength;\n      }\n\n      return [data, nextChunk];\n    } // Read backwards to the end of the previous chunk, if any; otherwise to the start of the current chunk.\n\n  }, {\n    key: \"_readToPreviousChunk\",\n    value: function _readToPreviousChunk() {\n      var data = this.currentChunk.data.substring(0, this.offsetInChunk);\n      var previousChunk = this.chunker.previousChunk();\n\n      if (previousChunk !== null) {\n        this.currentChunkPosition -= this.currentChunk.data.length;\n        this.offsetInChunk = this.currentChunk.data.length;\n      } else {\n        this.offsetInChunk = 0;\n      }\n\n      return [data, previousChunk];\n    }\n  }]);\n\n  return TextSeeker;\n}();\n\n//# sourceURL=webpack:///../packages/selector/src/text/seeker.ts?");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"index.html\");\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncIterator */ \"../node_modules/@babel/runtime-corejs3/helpers/esm/asyncIterator.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"../node_modules/@babel/runtime-corejs3/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/json/stringify */ \"../node_modules/@babel/runtime-corejs3/core-js/json/stringify.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/promise */ \"../node_modules/@babel/runtime-corejs3/core-js/promise.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _home_user_annotator_incubator_annotator_website_annotator_packages_dom_src_index_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../packages/dom/src/index.ts */ \"../packages/dom/src/index.ts\");\n/* harmony import */ var _home_user_annotator_incubator_annotator_website_annotator_packages_selector_src_index_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../packages/selector/src/index.ts */ \"../packages/selector/src/index.ts\");\n/**\n * @license\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\n\n\n/* global info, module, source, target, form */\n\n\nvar EXAMPLE_SELECTORS = [{\n  type: 'TextQuoteSelector',\n  exact: 'not'\n}, {\n  type: 'RangeSelector',\n  startSelector: {\n    type: 'TextQuoteSelector',\n    exact: 'ann'\n  },\n  endSelector: {\n    type: 'TextQuoteSelector',\n    exact: '!'\n  }\n}, {\n  type: 'TextQuoteSelector',\n  exact: 'annotated world',\n  refinedBy: {\n    type: 'TextQuoteSelector',\n    exact: 'tat'\n  }\n}, {\n  type: 'TextQuoteSelector',\n  exact: 'To annotate, or not to annotate,',\n  refinedBy: {\n    type: 'RangeSelector',\n    startSelector: {\n      type: 'TextQuoteSelector',\n      exact: 'To annotate',\n      refinedBy: {\n        type: 'TextQuoteSelector',\n        exact: 'annotate'\n      }\n    },\n    endSelector: {\n      type: 'TextQuoteSelector',\n      exact: 'not to annotate',\n      refinedBy: {\n        type: 'TextQuoteSelector',\n        exact: ' to'\n      }\n    },\n    refinedBy: {\n      type: 'TextQuoteSelector',\n      exact: 'o'\n    }\n  }\n}];\nvar cleanupFunctions = [];\n\nfunction cleanup() {\n  var removeHighlight;\n\n  while (removeHighlight = cleanupFunctions.shift()) {\n    removeHighlight();\n  }\n\n  target.normalize();\n  info.innerText = '';\n}\n\nvar createMatcher = Object(_home_user_annotator_incubator_annotator_website_annotator_packages_selector_src_index_ts__WEBPACK_IMPORTED_MODULE_6__[\"makeRefinable\"])(function (selector) {\n  var innerCreateMatcher = {\n    TextQuoteSelector: _home_user_annotator_incubator_annotator_website_annotator_packages_dom_src_index_ts__WEBPACK_IMPORTED_MODULE_5__[\"createTextQuoteSelectorMatcher\"],\n    TextPositionSelector: _home_user_annotator_incubator_annotator_website_annotator_packages_dom_src_index_ts__WEBPACK_IMPORTED_MODULE_5__[\"createTextPositionSelectorMatcher\"],\n    RangeSelector: Object(_home_user_annotator_incubator_annotator_website_annotator_packages_dom_src_index_ts__WEBPACK_IMPORTED_MODULE_5__[\"makeCreateRangeSelectorMatcher\"])(createMatcher)\n  }[selector.type];\n\n  if (!innerCreateMatcher) {\n    throw new Error(\"Unsupported selector type: \".concat(selector.type));\n  }\n\n  return innerCreateMatcher(selector);\n});\n\nfunction anchor(selector) {\n  var scope, matchAll, ranges, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, range, _i, _ranges, _range, removeHighlight;\n\n  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function anchor$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          scope = document.createRange();\n          scope.selectNodeContents(target);\n          matchAll = createMatcher(selector);\n          ranges = [];\n          _iteratorNormalCompletion = true;\n          _didIteratorError = false;\n          _context.prev = 6;\n          _iterator = Object(_babel_runtime_corejs3_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(matchAll(scope));\n\n        case 8:\n          _context.next = 10;\n          return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_iterator.next());\n\n        case 10:\n          _step = _context.sent;\n          _iteratorNormalCompletion = _step.done;\n          _context.next = 14;\n          return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_step.value);\n\n        case 14:\n          _value = _context.sent;\n\n          if (_iteratorNormalCompletion) {\n            _context.next = 21;\n            break;\n          }\n\n          range = _value;\n          ranges.push(range);\n\n        case 18:\n          _iteratorNormalCompletion = true;\n          _context.next = 8;\n          break;\n\n        case 21:\n          _context.next = 27;\n          break;\n\n        case 23:\n          _context.prev = 23;\n          _context.t0 = _context[\"catch\"](6);\n          _didIteratorError = true;\n          _iteratorError = _context.t0;\n\n        case 27:\n          _context.prev = 27;\n          _context.prev = 28;\n\n          if (!(!_iteratorNormalCompletion && _iterator.return != null)) {\n            _context.next = 32;\n            break;\n          }\n\n          _context.next = 32;\n          return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_iterator.return());\n\n        case 32:\n          _context.prev = 32;\n\n          if (!_didIteratorError) {\n            _context.next = 35;\n            break;\n          }\n\n          throw _iteratorError;\n\n        case 35:\n          return _context.finish(32);\n\n        case 36:\n          return _context.finish(27);\n\n        case 37:\n          for (_i = 0, _ranges = ranges; _i < _ranges.length; _i++) {\n            _range = _ranges[_i];\n            removeHighlight = Object(_home_user_annotator_incubator_annotator_website_annotator_packages_dom_src_index_ts__WEBPACK_IMPORTED_MODULE_5__[\"highlightRange\"])(_range);\n            cleanupFunctions.push(removeHighlight);\n          }\n\n          info.innerText += _babel_runtime_corejs3_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(selector, null, 2) + '\\n\\n';\n\n        case 39:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, null, null, [[6, 23, 27, 37], [28,, 32, 36]], _babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a);\n}\n\nfunction onSelectionChange() {\n  return _onSelectionChange.apply(this, arguments);\n}\n\nfunction _onSelectionChange() {\n  _onSelectionChange = Object(_babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {\n    var describeMode, scope, selection, i, range, selector;\n    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            cleanup();\n            describeMode = form.describeMode.value;\n            scope = document.createRange();\n            scope.selectNodeContents(source);\n            selection = document.getSelection();\n            i = 0;\n\n          case 6:\n            if (!(i < selection.rangeCount)) {\n              _context2.next = 23;\n              break;\n            }\n\n            range = selection.getRangeAt(i);\n\n            if (!(describeMode === 'TextPosition')) {\n              _context2.next = 14;\n              break;\n            }\n\n            _context2.next = 11;\n            return Object(_home_user_annotator_incubator_annotator_website_annotator_packages_dom_src_index_ts__WEBPACK_IMPORTED_MODULE_5__[\"describeTextPosition\"])(range, scope);\n\n          case 11:\n            _context2.t0 = _context2.sent;\n            _context2.next = 17;\n            break;\n\n          case 14:\n            _context2.next = 16;\n            return Object(_home_user_annotator_incubator_annotator_website_annotator_packages_dom_src_index_ts__WEBPACK_IMPORTED_MODULE_5__[\"describeTextQuote\"])(range, scope, {\n              minimumQuoteLength: 10\n            });\n\n          case 16:\n            _context2.t0 = _context2.sent;\n\n          case 17:\n            selector = _context2.t0;\n            _context2.next = 20;\n            return anchor(selector);\n\n          case 20:\n            i++;\n            _context2.next = 6;\n            break;\n\n          case 23:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _onSelectionChange.apply(this, arguments);\n}\n\nfunction onSelectorExampleClick(event) {\n  var exampleNumber = event.target.dataset.runExample;\n  if (!exampleNumber) return;\n  var selector = EXAMPLE_SELECTORS[exampleNumber];\n  cleanup();\n  anchor(selector);\n  event.preventDefault();\n}\n\ndocument.addEventListener('selectionchange', onSelectionChange);\nform.addEventListener('change', onSelectionChange);\ndocument.addEventListener('click', onSelectorExampleClick);\n\nif (false) {}\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"style.css\");\n\n//# sourceURL=webpack:///./style.css?");

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./index.html ./index.js ./style.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./index.html */\"./index.html\");\n__webpack_require__(/*! ./index.js */\"./index.js\");\nmodule.exports = __webpack_require__(/*! ./style.css */\"./style.css\");\n\n\n//# sourceURL=webpack:///multi_./index.html_./index.js_./style.css?");

/***/ })

/******/ });