"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/RockPaperScissors",{

/***/ "./components/RpsButton.js":
/*!*********************************!*\
  !*** ./components/RpsButton.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var emoji_picker_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emoji-picker-react */ \"./node_modules/emoji-picker-react/dist/index.js\");\n/* harmony import */ var emoji_picker_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emoji_picker_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    var test = function test() {\n        props.userInput.current = props.num;\n        props.changeAiText();\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), chosenEmoji = ref[0], setChosenEmoji = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), picker = ref1[0], setPicker = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-wrap flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return test();\n                },\n                className: \"rpsBtn\",\n                children: props.value\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\micha\\\\Documents\\\\Personal\\\\Programming\\\\resume-web\\\\Next.js Front-End\\\\resume-web\\\\components\\\\RpsButton.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"p-3 pl-8 pr-8 rounded bg-slate-700 w-fit m-auto\",\n                onClick: function() {\n                    return setPicker(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((emoji_picker_react__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, void 0, void 0));\n                },\n                children: \"Edit\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\micha\\\\Documents\\\\Personal\\\\Programming\\\\resume-web\\\\Next.js Front-End\\\\resume-web\\\\components\\\\RpsButton.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\micha\\\\Documents\\\\Personal\\\\Programming\\\\resume-web\\\\Next.js Front-End\\\\resume-web\\\\components\\\\RpsButton.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jwc0J1dHRvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1QztBQUNQO0FBRWhDLDZCQUFlLG9DQUFVRSxLQUFLLEVBQUUsQ0FBQztRQUl0QkMsSUFBSSxHQUFiLFFBQVEsQ0FBQ0EsSUFBSSxHQUFHLENBQUM7UUFDZkQsS0FBSyxDQUFDRSxTQUFTLENBQUNDLE9BQU8sR0FBR0gsS0FBSyxDQUFDSSxHQUFHO1FBQ25DSixLQUFLLENBQUNLLFlBQVk7SUFDcEIsQ0FBQztJQU5ELEdBQUssQ0FBaUNOLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTVDTyxXQUFXLEdBQW9CUCxHQUFjLEtBQWhDUSxjQUFjLEdBQUlSLEdBQWM7SUFDcEQsR0FBSyxDQUF1QkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBbENTLE1BQU0sR0FBZVQsSUFBYyxLQUEzQlUsU0FBUyxHQUFJVixJQUFjO0lBTzFDLE1BQU0sNkVBQ0hXLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQXlCOzt3RkFDckNDLENBQU07Z0JBQUNDLE9BQU8sRUFBRSxRQUFRO29CQUFGWixNQUFNLENBQU5BLElBQUk7O2dCQUFJVSxTQUFTLEVBQUMsQ0FBUTswQkFDOUNYLEtBQUssQ0FBQ2MsS0FBSzs7Ozs7O3dGQUViRixDQUFNO2dCQUFDRCxTQUFTLEVBQUMsQ0FBaUQ7Z0JBQUNFLE9BQU8sRUFBRSxRQUFRO29CQUFGSixNQUFNLENBQU5BLFNBQVMsNkVBQUVYLDJEQUFNOzswQkFBSyxDQUV6Rzs7Ozs7Ozs7Ozs7O0FBR04sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Jwc0J1dHRvbi5qcz9hMGY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQaWNrZXIgZnJvbSAnZW1vamktcGlja2VyLXJlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gIGNvbnN0IFtjaG9zZW5FbW9qaSwgc2V0Q2hvc2VuRW1vamldID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BpY2tlciwgc2V0UGlja2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBmdW5jdGlvbiB0ZXN0KCkge1xyXG4gICAgcHJvcHMudXNlcklucHV0LmN1cnJlbnQgPSBwcm9wcy5udW07XHJcbiAgICBwcm9wcy5jaGFuZ2VBaVRleHQoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGZsZXgtY29sXCI+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGVzdCgpfSBjbGFzc05hbWU9XCJycHNCdG5cIj5cclxuICAgICAgICB7cHJvcHMudmFsdWV9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMyBwbC04IHByLTggcm91bmRlZCBiZy1zbGF0ZS03MDAgdy1maXQgbS1hdXRvXCIgb25DbGljaz17KCkgPT4gc2V0UGlja2VyKDxQaWNrZXIvPil9PlxyXG4gICAgICAgIEVkaXRcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJQaWNrZXIiLCJ1c2VTdGF0ZSIsInByb3BzIiwidGVzdCIsInVzZXJJbnB1dCIsImN1cnJlbnQiLCJudW0iLCJjaGFuZ2VBaVRleHQiLCJjaG9zZW5FbW9qaSIsInNldENob3NlbkVtb2ppIiwicGlja2VyIiwic2V0UGlja2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RpsButton.js\n");

/***/ })

});