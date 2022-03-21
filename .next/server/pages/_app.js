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

/***/ "./lib/gtag.js":
/*!*********************!*\
  !*** ./lib/gtag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GA_TRACKING_ID\": () => (/* binding */ GA_TRACKING_ID),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview),\n/* harmony export */   \"event\": () => (/* binding */ event)\n/* harmony export */ });\nconst GA_TRACKING_ID = \"G-D1ZTF5CGYT\";\n// https://developers.google.com/analytics/devguides/collection/gtagjs/pages\nconst pageview = (url)=>{\n    window.gtag('config', GA_TRACKING_ID, {\n        page_path: url\n    });\n};\n// https://developers.google.com/analytics/devguides/collection/gtagjs/events\nconst event = ({ action , category , label , value  })=>{\n    window.gtag('event', action, {\n        event_category: category,\n        event_label: label,\n        value: value\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ3RhZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxLQUFLLENBQUNBLGNBQWMsR0FBR0MsY0FBNkI7QUFFM0QsRUFBNEU7QUFDckUsS0FBSyxDQUFDRyxRQUFRLElBQUlDLEdBQUcsR0FBSyxDQUFDO0lBQ2hDQyxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFRLFNBQUVQLGNBQWMsRUFBRSxDQUFDO1FBQ3JDUSxTQUFTLEVBQUVILEdBQUc7SUFDaEIsQ0FBQztBQUNILENBQUM7QUFFRCxFQUE2RTtBQUN0RSxLQUFLLENBQUNJLEtBQUssSUFBSSxDQUFDLENBQUNDLE1BQU0sR0FBRUMsUUFBUSxHQUFFQyxLQUFLLEdBQUVDLEtBQUssRUFBQyxDQUFDLEdBQUssQ0FBQztJQUM1RFAsTUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBTyxRQUFFRyxNQUFNLEVBQUUsQ0FBQztRQUM1QkksY0FBYyxFQUFFSCxRQUFRO1FBQ3hCSSxXQUFXLEVBQUVILEtBQUs7UUFDbEJDLEtBQUssRUFBRUEsS0FBSztJQUNkLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdW1lLXdlYi8uL2xpYi9ndGFnLmpzP2ZmNTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEdBX1RSQUNLSU5HX0lEID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR0FfSURcclxuXHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvcGFnZXNcclxuZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gKHVybCkgPT4ge1xyXG4gIHdpbmRvdy5ndGFnKCdjb25maWcnLCBHQV9UUkFDS0lOR19JRCwge1xyXG4gICAgcGFnZV9wYXRoOiB1cmwsXHJcbiAgfSlcclxufVxyXG5cclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2d0YWdqcy9ldmVudHNcclxuZXhwb3J0IGNvbnN0IGV2ZW50ID0gKHsgYWN0aW9uLCBjYXRlZ29yeSwgbGFiZWwsIHZhbHVlIH0pID0+IHtcclxuICB3aW5kb3cuZ3RhZygnZXZlbnQnLCBhY3Rpb24sIHtcclxuICAgIGV2ZW50X2NhdGVnb3J5OiBjYXRlZ29yeSxcclxuICAgIGV2ZW50X2xhYmVsOiBsYWJlbCxcclxuICAgIHZhbHVlOiB2YWx1ZSxcclxuICB9KVxyXG59Il0sIm5hbWVzIjpbIkdBX1RSQUNLSU5HX0lEIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dBX0lEIiwicGFnZXZpZXciLCJ1cmwiLCJ3aW5kb3ciLCJndGFnIiwicGFnZV9wYXRoIiwiZXZlbnQiLCJhY3Rpb24iLCJjYXRlZ29yeSIsImxhYmVsIiwidmFsdWUiLCJldmVudF9jYXRlZ29yeSIsImV2ZW50X2xhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/gtag.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/script */ \"next/script\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/gtag */ \"./lib/gtag.js\");\n\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            _lib_gtag__WEBPACK_IMPORTED_MODULE_5__.pageview(url);\n        };\n        router.events.on('routeChangeComplete', handleRouteChange);\n        return ()=>{\n            router.events.off('routeChangeComplete', handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                strategy: \"afterInteractive\",\n                src: `https://www.googletagmanager.com/gtag/js?id=${_lib_gtag__WEBPACK_IMPORTED_MODULE_5__.GA_TRACKING_ID}`\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\micha\\\\Documents\\\\Personal\\\\Programming\\\\resume-web\\\\Next.js Front-End\\\\resume-web\\\\pages\\\\_app.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                id: \"gtag-init\",\n                strategy: \"afterInteractive\",\n                dangerouslySetInnerHTML: {\n                    __html: `\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '${_lib_gtag__WEBPACK_IMPORTED_MODULE_5__.GA_TRACKING_ID}', {\n              page_path: window.location.pathname,\n            });\n          `\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\micha\\\\Documents\\\\Personal\\\\Programming\\\\resume-web\\\\Next.js Front-End\\\\resume-web\\\\pages\\\\_app.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\micha\\\\Documents\\\\Personal\\\\Programming\\\\resume-web\\\\Next.js Front-End\\\\resume-web\\\\pages\\\\_app.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFFRztBQUNEO0FBQ087QUFDSjtBQUVuQyxLQUFLLENBQUNJLEdBQUcsSUFBSSxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQ3pDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHTCxzREFBUztJQUN4QkYsZ0RBQVMsS0FBTyxDQUFDO1FBQ2YsS0FBSyxDQUFDUSxpQkFBaUIsSUFBSUMsR0FBRyxHQUFLLENBQUM7WUFDbENOLCtDQUFhLENBQUNNLEdBQUc7UUFDbkIsQ0FBQztRQUNERixNQUFNLENBQUNJLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLENBQXFCLHNCQUFFSixpQkFBaUI7UUFDekQsTUFBTSxLQUFPLENBQUM7WUFDWkQsTUFBTSxDQUFDSSxNQUFNLENBQUNFLEdBQUcsQ0FBQyxDQUFxQixzQkFBRUwsaUJBQWlCO1FBQzVELENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ0Q7UUFBQUEsTUFBTSxDQUFDSSxNQUFNO0lBQUEsQ0FBQztJQUVsQixNQUFNOzt3RkFHRFYsb0RBQU07Z0JBQ0xhLFFBQVEsRUFBQyxDQUFrQjtnQkFDM0JDLEdBQUcsR0FBRyw0Q0FBNEMsRUFBRVoscURBQW1COzs7Ozs7d0ZBRXhFRixvREFBTTtnQkFDTGdCLEVBQUUsRUFBQyxDQUFXO2dCQUNkSCxRQUFRLEVBQUMsQ0FBa0I7Z0JBQzNCSSx1QkFBdUIsRUFBRSxDQUFDO29CQUN4QkMsTUFBTSxHQUFHOzs7OzRCQUlTLEVBQUVoQixxREFBbUIsQ0FBQzs7O1VBR3hDO2dCQUNGLENBQUM7Ozs7Ozt3RkFFRkUsU0FBUzttQkFBS0MsU0FBUzs7Ozs7Ozs7QUFHOUIsQ0FBQztBQUVELGlFQUFlRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdW1lLXdlYi8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcblxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU2NyaXB0IGZyb20gJ25leHQvc2NyaXB0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgKiBhcyBndGFnIGZyb20gJy4uL2xpYi9ndGFnJ1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsKSA9PiB7XG4gICAgICBndGFnLnBhZ2V2aWV3KHVybClcbiAgICB9XG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKVxuICAgIH1cbiAgfSwgW3JvdXRlci5ldmVudHNdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBHbG9iYWwgU2l0ZSBUYWcgKGd0YWcuanMpIC0gR29vZ2xlIEFuYWx5dGljcyAqL31cbiAgICAgIDxTY3JpcHRcbiAgICAgICAgc3RyYXRlZ3k9XCJhZnRlckludGVyYWN0aXZlXCJcbiAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD0ke2d0YWcuR0FfVFJBQ0tJTkdfSUR9YH1cbiAgICAgIC8+XG4gICAgICA8U2NyaXB0XG4gICAgICAgIGlkPVwiZ3RhZy1pbml0XCJcbiAgICAgICAgc3RyYXRlZ3k9XCJhZnRlckludGVyYWN0aXZlXCJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxuICAgICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICcke2d0YWcuR0FfVFJBQ0tJTkdfSUR9Jywge1xuICAgICAgICAgICAgICBwYWdlX3BhdGg6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGAsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIlNjcmlwdCIsInVzZVJvdXRlciIsImd0YWciLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsInBhZ2V2aWV3IiwiZXZlbnRzIiwib24iLCJvZmYiLCJzdHJhdGVneSIsInNyYyIsIkdBX1RSQUNLSU5HX0lEIiwiaWQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "next/script":
/*!******************************!*\
  !*** external "next/script" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/script");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();