"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/LocationContext.tsx":
/*!*****************************************!*\
  !*** ./src/context/LocationContext.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LocationProvider: () => (/* binding */ LocationProvider),\n/* harmony export */   useLocation: () => (/* binding */ useLocation)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/data/data/com.termux/files/home/Mayap_A_Biyahe/src/context/LocationContext.tsx\";\n\n\nconst LocationContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\nconst LocationProvider = ({\n  children\n}) => {\n  const {\n    0: location,\n    1: setLocation\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (!navigator.geolocation) return;\n    navigator.geolocation.getCurrentPosition(pos => setLocation({\n      lat: pos.coords.latitude,\n      lng: pos.coords.longitude\n    }), () => setLocation({\n      lat: 14.9333,\n      lng: 120.5333\n    }) // Default to Lubao center\n    );\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LocationContext.Provider, {\n    value: {\n      location\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, undefined);\n};\nconst useLocation = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LocationContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Mb2NhdGlvbkNvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEU7QUFBQTtBQUU5RSxNQUFNTyxlQUFlLGdCQUFHTixvREFBYSxDQUFNLElBQUksQ0FBQztBQUV6QyxNQUFNTyxnQkFBZ0IsR0FBR0EsQ0FBQztFQUFFQztBQUF3QyxDQUFDLEtBQUs7RUFDL0UsTUFBTTtJQUFBLEdBQUNDLFFBQVE7SUFBQSxHQUFFQztFQUFXLElBQUlSLCtDQUFRLENBQXNDLElBQUksQ0FBQztFQUVuRkMsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBSSxDQUFDUSxTQUFTLENBQUNDLFdBQVcsRUFBRTtJQUM1QkQsU0FBUyxDQUFDQyxXQUFXLENBQUNDLGtCQUFrQixDQUNyQ0MsR0FBRyxJQUFLSixXQUFXLENBQUM7TUFBRUssR0FBRyxFQUFFRCxHQUFHLENBQUNFLE1BQU0sQ0FBQ0MsUUFBUTtNQUFFQyxHQUFHLEVBQUVKLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDRztJQUFVLENBQUMsQ0FBQyxFQUM3RSxNQUFNVCxXQUFXLENBQUM7TUFBRUssR0FBRyxFQUFFLE9BQU87TUFBRUcsR0FBRyxFQUFFO0lBQVMsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztFQUNILENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDRWIsNkRBQUEsQ0FBQ0MsZUFBZSxDQUFDYyxRQUFRO0lBQUNDLEtBQUssRUFBRTtNQUFFWjtJQUFTLENBQUU7SUFBQUQsUUFBQSxFQUMzQ0E7RUFBUTtJQUFBYyxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDZSxDQUFDO0FBRS9CLENBQUM7QUFFTSxNQUFNQyxXQUFXLEdBQUdBLENBQUEsS0FBTXpCLGlEQUFVLENBQUNLLGVBQWUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21heWFwLWEtYml5YWhlLy4vc3JjL2NvbnRleHQvTG9jYXRpb25Db250ZXh0LnRzeD9kNGVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBMb2NhdGlvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0PGFueT4obnVsbCk7XG5cbmV4cG9ydCBjb25zdCBMb2NhdGlvblByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZTx7IGxhdDogbnVtYmVyLCBsbmc6IG51bWJlciB9IHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5nZW9sb2NhdGlvbikgcmV0dXJuO1xuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAocG9zKSA9PiBzZXRMb2NhdGlvbih7IGxhdDogcG9zLmNvb3Jkcy5sYXRpdHVkZSwgbG5nOiBwb3MuY29vcmRzLmxvbmdpdHVkZSB9KSxcbiAgICAgICgpID0+IHNldExvY2F0aW9uKHsgbGF0OiAxNC45MzMzLCBsbmc6IDEyMC41MzMzIH0pIC8vIERlZmF1bHQgdG8gTHViYW8gY2VudGVyXG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExvY2F0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBsb2NhdGlvbiB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0xvY2F0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VMb2NhdGlvbiA9ICgpID0+IHVzZUNvbnRleHQoTG9jYXRpb25Db250ZXh0KTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwianN4REVWIiwiX2pzeERFViIsIkxvY2F0aW9uQ29udGV4dCIsIkxvY2F0aW9uUHJvdmlkZXIiLCJjaGlsZHJlbiIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInBvcyIsImxhdCIsImNvb3JkcyIsImxhdGl0dWRlIiwibG5nIiwibG9uZ2l0dWRlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInVzZUxvY2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/LocationContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_LocationContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/LocationContext */ \"./src/context/LocationContext.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/data/data/com.termux/files/home/Mayap_A_Biyahe/src/pages/_app.tsx\";\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n// Comment out the local CSS import that is failing\n// import \"../styles/globals.css\"; \n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_context_LocationContext__WEBPACK_IMPORTED_MODULE_1__.LocationProvider, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"script\", {\n        src: \"https://cdn.tailwindcss.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBRWlDOztBQUU5RDtBQUNBO0FBQUE7QUFFZSxTQUFTSSxLQUFLQSxDQUFDO0VBQUVDLFNBQVM7RUFBRUM7QUFBb0IsQ0FBQyxFQUFFO0VBQ2hFLG9CQUNFSCw2REFBQSxDQUFDRixzRUFBZ0I7SUFBQU0sUUFBQSxnQkFDZkosNkRBQUEsQ0FBQ0gsa0RBQUk7TUFBQU8sUUFBQSxlQUNISiw2REFBQTtRQUFRSyxHQUFHLEVBQUM7TUFBNkI7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BQVM7SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FDL0MsQ0FBQyxlQUNQVCw2REFBQSxDQUFDRSxTQUFTLEVBQUFRLGFBQUEsS0FBS1AsU0FBUztNQUFBRyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FBRyxDQUFDO0VBQUE7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLE9BQ1osQ0FBQztBQUV2QiIsInNvdXJjZXMiOlsid2VicGFjazovL21heWFwLWEtYml5YWhlLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IExvY2F0aW9uUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9Mb2NhdGlvbkNvbnRleHRcIjtcblxuLy8gQ29tbWVudCBvdXQgdGhlIGxvY2FsIENTUyBpbXBvcnQgdGhhdCBpcyBmYWlsaW5nXG4vLyBpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjsgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8TG9jYXRpb25Qcm92aWRlcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLnRhaWx3aW5kY3NzLmNvbVwiPjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvTG9jYXRpb25Qcm92aWRlcj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiSGVhZCIsIkxvY2F0aW9uUHJvdmlkZXIiLCJqc3hERVYiLCJfanN4REVWIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjaGlsZHJlbiIsInNyYyIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl9vYmplY3RTcHJlYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();