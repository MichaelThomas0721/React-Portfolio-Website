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

/***/ "./components/RpsInfo.js":
/*!*******************************!*\
  !*** ./components/RpsInfo.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RpsInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction RpsInfo(props) {\n    var displayInfo = function displayInfo() {\n        for(var opt in props.usedEmojis){\n            var win = [];\n            var loss = [];\n            for(var opt2 in props.usedEmojis){\n                if (aiInput % 2 == 0 == (userInput.current % 2 == 0)) {\n                    win.push(opt2);\n                } else loss.push(opt2);\n            }\n            info.set(opt, [\n                win,\n                loss\n            ]);\n        }\n        console.table(info);\n    };\n    var createInfoButtons = function createInfoButtons() {\n        var _this = this;\n        setInfoButtons(Array.from(props.usedEmojis.current).map(function(param) {\n            var _param = _slicedToArray(param, 2), key = _param[0], value = _param[1];\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RpsButton, {\n                changeAiText: changeAiText,\n                value: value,\n                userInput: userInput,\n                num: key\n            }, key, false, {\n                fileName: \"C:\\\\Users\\\\micha\\\\Documents\\\\Personal\\\\Programming\\\\resume-web\\\\Next.js Front-End\\\\resume-web\\\\components\\\\RpsInfo.js\",\n                lineNumber: 27,\n                columnNumber: 11\n            }, _this));\n        }));\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), infoButtons = ref[0], setInfoButtons = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), info = ref1[0], setInfo = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), infoPopUp = ref2[0], setInfoPopUp = ref2[1];\n    var userInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        displayInfo();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            infoPopUp,\n            infoButtons\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\micha\\\\Documents\\\\Personal\\\\Programming\\\\resume-web\\\\Next.js Front-End\\\\resume-web\\\\components\\\\RpsInfo.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this));\n};\n_s(RpsInfo, \"NLw4MOnWUJxZZIheDrKT6Ie/JPk=\");\n_c = RpsInfo;\nvar _c;\n$RefreshReg$(_c, \"RpsInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jwc0luZm8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsUUFBUSxDQUFDRyxPQUFPLENBQUNDLEtBQUssRUFBRSxDQUFDO1FBTTdCQyxXQUFXLEdBQXBCLFFBQVEsQ0FBQ0EsV0FBVyxHQUFHLENBQUM7UUFDdEIsR0FBRyxDQUFFLEdBQUcsQ0FBQ0MsR0FBRyxJQUFJRixLQUFLLENBQUNHLFVBQVUsQ0FBRSxDQUFDO1lBQ2pDLEdBQUcsQ0FBQ0MsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNaLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNiLEdBQUcsQ0FBRSxHQUFHLENBQUNDLElBQUksSUFBSU4sS0FBSyxDQUFDRyxVQUFVLENBQUUsQ0FBQztnQkFDbEMsRUFBRSxFQUFHSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBTUMsU0FBUyxDQUFDQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO29CQUN2REwsR0FBRyxDQUFDTSxJQUFJLENBQUNKLElBQUk7Z0JBQ2YsQ0FBQyxNQUFNRCxJQUFJLENBQUNLLElBQUksQ0FBQ0osSUFBSTtZQUN2QixDQUFDO1lBQ0RLLElBQUksQ0FBQ0MsR0FBRyxDQUFDVixHQUFHLEVBQUUsQ0FBQ0U7Z0JBQUFBLEdBQUc7Z0JBQUVDLElBQUk7WUFBQSxDQUFDO1FBQzNCLENBQUM7UUFDRFEsT0FBTyxDQUFDQyxLQUFLLENBQUNILElBQUk7SUFDcEIsQ0FBQztRQUVRSSxpQkFBaUIsR0FBMUIsUUFBUSxDQUFDQSxpQkFBaUIsR0FBRyxDQUFDOztRQUM1QkMsY0FBYyxDQUNaQyxLQUFLLENBQUNDLElBQUksQ0FBQ2xCLEtBQUssQ0FBQ0csVUFBVSxDQUFDTSxPQUFPLEVBQUVVLEdBQUcsQ0FBQyxRQUFRLFFBQVUsQ0FBQzttREFBakJDLEdBQUcsY0FBRUMsS0FBSztZQUNuRCxNQUFNLDZFQUNIQyxTQUFTO2dCQUNSQyxZQUFZLEVBQUVBLFlBQVk7Z0JBQzFCRixLQUFLLEVBQUVBLEtBQUs7Z0JBQ1piLFNBQVMsRUFBRUEsU0FBUztnQkFDcEJnQixHQUFHLEVBQUVKLEdBQUc7ZUFDSEEsR0FBRzs7Ozs7UUFHZCxDQUFDO0lBRUwsQ0FBQzs7SUFqQ0QsR0FBSyxDQUFpQ3ZCLEdBQVUsR0FBVkEsK0NBQVEsSUFBdkM0QixXQUFXLEdBQW9CNUIsR0FBVSxLQUE1Qm1CLGNBQWMsR0FBSW5CLEdBQVU7SUFDaEQsR0FBSyxDQUFtQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUE1QmMsSUFBSSxHQUFhZCxJQUFZLEtBQXZCNkIsT0FBTyxHQUFJN0IsSUFBWTtJQUNwQyxHQUFLLENBQTZCQSxJQUFVLEdBQVZBLCtDQUFRLElBQW5DOEIsU0FBUyxHQUFrQjlCLElBQVUsS0FBMUIrQixZQUFZLEdBQUkvQixJQUFVO0lBQzVDLEdBQUssQ0FBQ1csU0FBUyxHQUFHWiw2Q0FBTTtJQWdDeEJFLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDbkJHLFdBQVc7SUFDVCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSw2RUFDSDRCLENBQUc7O1lBQ0RGLFNBQVM7WUFDVEYsV0FBVzs7Ozs7OztBQUdsQixDQUFDO0dBOUN1QjFCLE9BQU87S0FBUEEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Jwc0luZm8uanM/OTA1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJwc0luZm8ocHJvcHMpIHtcclxuICBjb25zdCBbaW5mb0J1dHRvbnMsIHNldEluZm9CdXR0b25zXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2luZm8sIHNldEluZm9dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbmZvUG9wVXAsIHNldEluZm9Qb3BVcF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHVzZXJJbnB1dCA9IHVzZVJlZigpO1xyXG5cclxuICBmdW5jdGlvbiBkaXNwbGF5SW5mbygpIHtcclxuICAgIGZvciAobGV0IG9wdCBpbiBwcm9wcy51c2VkRW1vamlzKSB7XHJcbiAgICAgIGxldCB3aW4gPSBbXTtcclxuICAgICAgbGV0IGxvc3MgPSBbXTtcclxuICAgICAgZm9yIChsZXQgb3B0MiBpbiBwcm9wcy51c2VkRW1vamlzKSB7XHJcbiAgICAgICAgaWYgKChhaUlucHV0ICUgMiA9PSAwKSA9PSAodXNlcklucHV0LmN1cnJlbnQgJSAyID09IDApKSB7XHJcbiAgICAgICAgICB3aW4ucHVzaChvcHQyKTtcclxuICAgICAgICB9IGVsc2UgbG9zcy5wdXNoKG9wdDIpO1xyXG4gICAgICB9XHJcbiAgICAgIGluZm8uc2V0KG9wdCwgW3dpbiwgbG9zc10pO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS50YWJsZShpbmZvKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUluZm9CdXR0b25zKCkge1xyXG4gICAgc2V0SW5mb0J1dHRvbnMoXHJcbiAgICAgIEFycmF5LmZyb20ocHJvcHMudXNlZEVtb2ppcy5jdXJyZW50KS5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8UnBzQnV0dG9uXHJcbiAgICAgICAgICAgIGNoYW5nZUFpVGV4dD17Y2hhbmdlQWlUZXh0fVxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgIHVzZXJJbnB1dD17dXNlcklucHV0fVxyXG4gICAgICAgICAgICBudW09e2tleX1cclxuICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuZGlzcGxheUluZm8oKTtcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtpbmZvUG9wVXB9XHJcbiAgICAgIHtpbmZvQnV0dG9uc31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUnBzSW5mbyIsInByb3BzIiwiZGlzcGxheUluZm8iLCJvcHQiLCJ1c2VkRW1vamlzIiwid2luIiwibG9zcyIsIm9wdDIiLCJhaUlucHV0IiwidXNlcklucHV0IiwiY3VycmVudCIsInB1c2giLCJpbmZvIiwic2V0IiwiY29uc29sZSIsInRhYmxlIiwiY3JlYXRlSW5mb0J1dHRvbnMiLCJzZXRJbmZvQnV0dG9ucyIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImtleSIsInZhbHVlIiwiUnBzQnV0dG9uIiwiY2hhbmdlQWlUZXh0IiwibnVtIiwiaW5mb0J1dHRvbnMiLCJzZXRJbmZvIiwiaW5mb1BvcFVwIiwic2V0SW5mb1BvcFVwIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RpsInfo.js\n");

/***/ })

});