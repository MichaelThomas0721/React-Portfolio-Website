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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Picker = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function() {\n    return __webpack_require__.e(/*! import() */ \"node_modules_emoji-picker-react_dist_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! emoji-picker-react */ \"./node_modules/emoji-picker-react/dist/index.js\", 23));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"..\\\\components\\\\RpsButton.js -> \" + \"emoji-picker-react\"\n        ]\n    },\n    ssr: false\n});\n_c1 = Picker;\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    var test = function test() {\n        props.userInput.current = props.num;\n        props.changeAiText();\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), chosenEmoji = ref[0], setChosenEmoji = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), picker = ref1[0], setPicker = ref1[1];\n    var onEmojiClick = function(event, emojiObject) {\n        setChosenEmoji(emojiObject);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-wrap flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return test();\n                },\n                className: \"rpsBtn\",\n                children: props.value\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\micha\\\\Documents\\\\Personal\\\\Programming\\\\resume-web\\\\Next.js Front-End\\\\resume-web\\\\components\\\\RpsButton.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"p-3 pl-8 pr-8 rounded bg-slate-700 w-fit m-auto\",\n                onClick: function() {\n                    return setPicker(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Picker, {\n                        className: \"fixed\",\n                        onEmojiClick: onEmojiClick\n                    }, void 0, false, void 0, void 0));\n                },\n                children: \"Edit\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\micha\\\\Documents\\\\Personal\\\\Programming\\\\resume-web\\\\Next.js Front-End\\\\resume-web\\\\components\\\\RpsButton.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-black absolute translate-y-f1/2\",\n                children: picker\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\micha\\\\Documents\\\\Personal\\\\Programming\\\\resume-web\\\\Next.js Front-End\\\\resume-web\\\\components\\\\RpsButton.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\micha\\\\Documents\\\\Personal\\\\Programming\\\\resume-web\\\\Next.js Front-End\\\\resume-web\\\\components\\\\RpsButton.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this));\n};\nvar _c, _c1;\n$RefreshReg$(_c, \"Picker$dynamic\");\n$RefreshReg$(_c1, \"Picker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jwc0J1dHRvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnQztBQUNDO0FBQ0M7QUFDbEMsR0FBSyxDQUFDRyxNQUFNLEdBQUdELG1EQUFPLE1BQUMsUUFBUTtJQUFGLE1BQU0sQ0FBTiw2TkFBMkI7Ozs7Ozs7SUFBS0UsR0FBRyxFQUFFLEtBQUs7OztBQUV2RSw2QkFBZSxvQ0FBVUMsS0FBSyxFQUFFLENBQUM7UUFJdEJDLElBQUksR0FBYixRQUFRLENBQUNBLElBQUksR0FBRyxDQUFDO1FBQ2ZELEtBQUssQ0FBQ0UsU0FBUyxDQUFDQyxPQUFPLEdBQUdILEtBQUssQ0FBQ0ksR0FBRztRQUNuQ0osS0FBSyxDQUFDSyxZQUFZO0lBQ3BCLENBQUM7SUFORCxHQUFLLENBQWlDVixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUE1Q1csV0FBVyxHQUFvQlgsR0FBYyxLQUFoQ1ksY0FBYyxHQUFJWixHQUFjO0lBQ3BELEdBQUssQ0FBdUJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQWxDYSxNQUFNLEdBQWViLElBQWMsS0FBM0JjLFNBQVMsR0FBSWQsSUFBYztJQU8xQyxHQUFLLENBQUNlLFlBQVksR0FBRyxRQUFRQyxDQUFQQyxLQUFLLEVBQUVELFdBQVcsRUFBSyxDQUFDO1FBQzVDSixjQUFjLENBQUNJLFdBQVc7SUFDNUIsQ0FBQztJQUdELE1BQU0sNkVBQ0hFLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQXlCOzt3RkFDckNDLENBQU07Z0JBQUNDLE9BQU8sRUFBRSxRQUFRO29CQUFGZixNQUFNLENBQU5BLElBQUk7O2dCQUFJYSxTQUFTLEVBQUMsQ0FBUTswQkFDOUNkLEtBQUssQ0FBQ2lCLEtBQUs7Ozs7Ozt3RkFFYkYsQ0FBTTtnQkFBQ0QsU0FBUyxFQUFDLENBQWlEO2dCQUFDRSxPQUFPLEVBQUUsUUFBUTtvQkFBRlAsTUFBTSxDQUFOQSxTQUFTLDZFQUFFWCxNQUFNO3dCQUFDZ0IsU0FBUyxFQUFDLENBQU87d0JBQUNKLFlBQVksRUFBRUEsWUFBWTs7OzBCQUFPLENBRXhKOzs7Ozs7d0ZBQ0NHLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFvQzswQkFDMUNOLE1BQU07Ozs7Ozs7Ozs7OztBQUlyQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUnBzQnV0dG9uLmpzP2EwZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuY29uc3QgUGlja2VyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ2Vtb2ppLXBpY2tlci1yZWFjdCcpLCB7IHNzcjogZmFsc2UgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMpIHtcclxuICBjb25zdCBbY2hvc2VuRW1vamksIHNldENob3NlbkVtb2ppXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwaWNrZXIsIHNldFBpY2tlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgZnVuY3Rpb24gdGVzdCgpIHtcclxuICAgIHByb3BzLnVzZXJJbnB1dC5jdXJyZW50ID0gcHJvcHMubnVtO1xyXG4gICAgcHJvcHMuY2hhbmdlQWlUZXh0KCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkVtb2ppQ2xpY2sgPSAoZXZlbnQsIGVtb2ppT2JqZWN0KSA9PiB7XHJcbiAgICBzZXRDaG9zZW5FbW9qaShlbW9qaU9iamVjdCk7XHJcbiAgfTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGZsZXgtY29sXCI+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGVzdCgpfSBjbGFzc05hbWU9XCJycHNCdG5cIj5cclxuICAgICAgICB7cHJvcHMudmFsdWV9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMyBwbC04IHByLTggcm91bmRlZCBiZy1zbGF0ZS03MDAgdy1maXQgbS1hdXRvXCIgb25DbGljaz17KCkgPT4gc2V0UGlja2VyKDxQaWNrZXIgY2xhc3NOYW1lPVwiZml4ZWRcIiBvbkVtb2ppQ2xpY2s9e29uRW1vamlDbGlja30gLz4pfT5cclxuICAgICAgICBFZGl0XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIGFic29sdXRlIHRyYW5zbGF0ZS15LWYxLzJcIj5cclxuICAgICAgICAgICAgICB7cGlja2VyfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZHluYW1pYyIsIlBpY2tlciIsInNzciIsInByb3BzIiwidGVzdCIsInVzZXJJbnB1dCIsImN1cnJlbnQiLCJudW0iLCJjaGFuZ2VBaVRleHQiLCJjaG9zZW5FbW9qaSIsInNldENob3NlbkVtb2ppIiwicGlja2VyIiwic2V0UGlja2VyIiwib25FbW9qaUNsaWNrIiwiZW1vamlPYmplY3QiLCJldmVudCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RpsButton.js\n");

/***/ })

});