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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RpsInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction RpsInfo(props) {\n    var displayInfo = function displayInfo() {\n        for(var opt in props.usedEmojis.current){\n            var win = [];\n            var loss = [];\n            for(var opt2 in props.usedEmojis.current){\n                if (opt2 % 2 == 0 == (opt % 2 == 0) == opt < opt2) {\n                    win.push(opt2);\n                } else loss.push(opt2);\n                console.log(opt2);\n            }\n            info.set(opt, [\n                win,\n                loss\n            ]);\n        }\n        console.table(info);\n    };\n    var createInfoButtons = function createInfoButtons() {\n        var _this = this;\n        setInfoButtons(Array.from(props.usedEmojis.current).map(function(param) {\n            var _param = _slicedToArray(param, 2), key = _param[0], value = _param[1];\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RpsButton, {\n                changeAiText: changeAiText,\n                value: value,\n                userInput: userInput,\n                num: key\n            }, key, false, {\n                fileName: \"C:\\\\Users\\\\micha\\\\Documents\\\\Personal\\\\Programming\\\\resume-web\\\\Next.js Front-End\\\\resume-web\\\\components\\\\RpsInfo.js\",\n                lineNumber: 31,\n                columnNumber: 11\n            }, _this));\n        }));\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), infoButtons = ref[0], setInfoButtons = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Map()), info = ref1[0], setInfo = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), infoPopUp = ref2[0], setInfoPopUp = ref2[1];\n    var userInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        displayInfo();\n        console.table(props.usedEmojis.current);\n    }, [\n        props.usedEmojis.current\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            infoPopUp,\n            infoButtons\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\micha\\\\Documents\\\\Personal\\\\Programming\\\\resume-web\\\\Next.js Front-End\\\\resume-web\\\\components\\\\RpsInfo.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this));\n};\n_s(RpsInfo, \"GAzuzPK1WzuK64Ip4phS/NESAfQ=\");\n_c = RpsInfo;\nvar _c;\n$RefreshReg$(_c, \"RpsInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jwc0luZm8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsUUFBUSxDQUFDRyxPQUFPLENBQUNDLEtBQUssRUFBRSxDQUFDO1FBTTdCQyxXQUFXLEdBQXBCLFFBQVEsQ0FBQ0EsV0FBVyxHQUFHLENBQUM7UUFDdEIsR0FBRyxDQUFFLEdBQUcsQ0FBQ0MsR0FBRyxJQUFJRixLQUFLLENBQUNHLFVBQVUsQ0FBQ0MsT0FBTyxDQUFFLENBQUM7WUFDekMsR0FBRyxDQUFDQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ1osR0FBRyxDQUFDQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsR0FBRyxDQUFFLEdBQUcsQ0FBQ0MsSUFBSSxJQUFJUCxLQUFLLENBQUNHLFVBQVUsQ0FBQ0MsT0FBTyxDQUFFLENBQUM7Z0JBQzFDLEVBQUUsRUFDRUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQU1MLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUNqQ0EsR0FBRyxHQUFHSyxJQUFJLEVBQ1YsQ0FBQztvQkFDREYsR0FBRyxDQUFDRyxJQUFJLENBQUNELElBQUk7Z0JBQ2YsQ0FBQyxNQUFNRCxJQUFJLENBQUNFLElBQUksQ0FBQ0QsSUFBSTtnQkFDckJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJO1lBQ2xCLENBQUM7WUFDREksSUFBSSxDQUFDQyxHQUFHLENBQUNWLEdBQUcsRUFBRSxDQUFDRztnQkFBQUEsR0FBRztnQkFBRUMsSUFBSTtZQUFBLENBQUM7UUFDM0IsQ0FBQztRQUNERyxPQUFPLENBQUNJLEtBQUssQ0FBQ0YsSUFBSTtJQUNwQixDQUFDO1FBRVFHLGlCQUFpQixHQUExQixRQUFRLENBQUNBLGlCQUFpQixHQUFHLENBQUM7O1FBQzVCQyxjQUFjLENBQ1pDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDakIsS0FBSyxDQUFDRyxVQUFVLENBQUNDLE9BQU8sRUFBRWMsR0FBRyxDQUFDLFFBQVEsUUFBVSxDQUFDO21EQUFqQkMsR0FBRyxjQUFFQyxLQUFLO1lBQ25ELE1BQU0sNkVBQ0hDLFNBQVM7Z0JBQ1JDLFlBQVksRUFBRUEsWUFBWTtnQkFDMUJGLEtBQUssRUFBRUEsS0FBSztnQkFDWkcsU0FBUyxFQUFFQSxTQUFTO2dCQUNwQkMsR0FBRyxFQUFFTCxHQUFHO2VBQ0hBLEdBQUc7Ozs7O1FBR2QsQ0FBQztJQUVMLENBQUM7O0lBckNELEdBQUssQ0FBaUN0QixHQUFVLEdBQVZBLCtDQUFRLElBQXZDNEIsV0FBVyxHQUFvQjVCLEdBQVUsS0FBNUJrQixjQUFjLEdBQUlsQixHQUFVO0lBQ2hELEdBQUssQ0FBbUJBLElBQW1CLEdBQW5CQSwrQ0FBUSxDQUFDLEdBQUcsQ0FBQzZCLEdBQUcsS0FBakNmLElBQUksR0FBYWQsSUFBbUIsS0FBOUI4QixPQUFPLEdBQUk5QixJQUFtQjtJQUMzQyxHQUFLLENBQTZCQSxJQUFVLEdBQVZBLCtDQUFRLElBQW5DK0IsU0FBUyxHQUFrQi9CLElBQVUsS0FBMUJnQyxZQUFZLEdBQUloQyxJQUFVO0lBQzVDLEdBQUssQ0FBQzBCLFNBQVMsR0FBRzNCLDZDQUFNO0lBb0N4QkUsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNmRyxXQUFXO1FBQ1hRLE9BQU8sQ0FBQ0ksS0FBSyxDQUFDYixLQUFLLENBQUNHLFVBQVUsQ0FBQ0MsT0FBTztJQUN4QyxDQUFDLEVBQUUsQ0FBQ0o7UUFBQUEsS0FBSyxDQUFDRyxVQUFVLENBQUNDLE9BQU87SUFBQSxDQUFDO0lBRTdCLE1BQU0sNkVBQ0gwQixDQUFHOztZQUNERixTQUFTO1lBQ1RILFdBQVc7Ozs7Ozs7QUFHbEIsQ0FBQztHQW5EdUIxQixPQUFPO0tBQVBBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ScHNJbmZvLmpzPzkwNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBScHNJbmZvKHByb3BzKSB7XHJcbiAgY29uc3QgW2luZm9CdXR0b25zLCBzZXRJbmZvQnV0dG9uc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtpbmZvLCBzZXRJbmZvXSA9IHVzZVN0YXRlKG5ldyBNYXAoKSk7XHJcbiAgY29uc3QgW2luZm9Qb3BVcCwgc2V0SW5mb1BvcFVwXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgdXNlcklucHV0ID0gdXNlUmVmKCk7XHJcblxyXG4gIGZ1bmN0aW9uIGRpc3BsYXlJbmZvKCkge1xyXG4gICAgZm9yIChsZXQgb3B0IGluIHByb3BzLnVzZWRFbW9qaXMuY3VycmVudCkge1xyXG4gICAgICBsZXQgd2luID0gW107XHJcbiAgICAgIGxldCBsb3NzID0gW107XHJcbiAgICAgIGZvciAobGV0IG9wdDIgaW4gcHJvcHMudXNlZEVtb2ppcy5jdXJyZW50KSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgKChvcHQyICUgMiA9PSAwKSA9PSAob3B0ICUgMiA9PSAwKSkgPT1cclxuICAgICAgICAgIG9wdCA8IG9wdDJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHdpbi5wdXNoKG9wdDIpO1xyXG4gICAgICAgIH0gZWxzZSBsb3NzLnB1c2gob3B0Mik7XHJcbiAgICAgICAgY29uc29sZS5sb2cob3B0Mik7XHJcbiAgICAgIH1cclxuICAgICAgaW5mby5zZXQob3B0LCBbd2luLCBsb3NzXSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLnRhYmxlKGluZm8pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlSW5mb0J1dHRvbnMoKSB7XHJcbiAgICBzZXRJbmZvQnV0dG9ucyhcclxuICAgICAgQXJyYXkuZnJvbShwcm9wcy51c2VkRW1vamlzLmN1cnJlbnQpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxScHNCdXR0b25cclxuICAgICAgICAgICAgY2hhbmdlQWlUZXh0PXtjaGFuZ2VBaVRleHR9XHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgdXNlcklucHV0PXt1c2VySW5wdXR9XHJcbiAgICAgICAgICAgIG51bT17a2V5fVxyXG4gICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGxheUluZm8oKTtcclxuICAgIGNvbnNvbGUudGFibGUocHJvcHMudXNlZEVtb2ppcy5jdXJyZW50KTtcclxuICB9LCBbcHJvcHMudXNlZEVtb2ppcy5jdXJyZW50XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7aW5mb1BvcFVwfVxyXG4gICAgICB7aW5mb0J1dHRvbnN9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJwc0luZm8iLCJwcm9wcyIsImRpc3BsYXlJbmZvIiwib3B0IiwidXNlZEVtb2ppcyIsImN1cnJlbnQiLCJ3aW4iLCJsb3NzIiwib3B0MiIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiaW5mbyIsInNldCIsInRhYmxlIiwiY3JlYXRlSW5mb0J1dHRvbnMiLCJzZXRJbmZvQnV0dG9ucyIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImtleSIsInZhbHVlIiwiUnBzQnV0dG9uIiwiY2hhbmdlQWlUZXh0IiwidXNlcklucHV0IiwibnVtIiwiaW5mb0J1dHRvbnMiLCJNYXAiLCJzZXRJbmZvIiwiaW5mb1BvcFVwIiwic2V0SW5mb1BvcFVwIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RpsInfo.js\n");

/***/ })

});