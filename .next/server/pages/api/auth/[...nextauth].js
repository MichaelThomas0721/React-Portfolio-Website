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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/spotify":
/*!**********************************************!*\
  !*** external "next-auth/providers/spotify" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/spotify");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/spotify */ \"next-auth/providers/spotify\");\n/* harmony import */ var next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//Script used for spotify login and storing login data to session\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    //This is where the scope and client id and client secret are kept (you can't see the client id and secret because they are in a .env.local file so the are protected)\n    providers: [\n        next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1___default()({\n            authorization: \"https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,playlist-modify-private\",\n            clientId: process.env.CLIENT_ID,\n            clientSecret: process.env.CLIENT_SECRET\n        }), \n    ],\n    secret: process.env.SECRET,\n    callbacks: {\n        async jwt ({ token , account  }) {\n            if (account) {\n                token.accessToken = account.refresh_token;\n            }\n            return token;\n        },\n        async session (session, user) {\n            session.user = user;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ3lCO0FBRXpELEVBQWlFO0FBQ2pFLGlFQUFlQSxnREFBUSxDQUFDLENBQUM7SUFDdkIsRUFBc0s7SUFDdEtFLFNBQVMsRUFBRSxDQUFDO1FBQ1ZELGtFQUFlLENBQUMsQ0FBQztZQUNmRSxhQUFhLEVBQ1gsQ0FBNEc7WUFDOUdDLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVM7WUFDL0JDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGFBQWE7UUFDekMsQ0FBQztJQUNILENBQUM7SUFFREMsTUFBTSxFQUFFTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssTUFBTTtJQUUxQkMsU0FBUyxFQUFFLENBQUM7Y0FDSkMsR0FBRyxFQUFDLENBQUMsQ0FBQ0MsS0FBSyxHQUFFQyxPQUFPLEVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDN0IsRUFBRSxFQUFFQSxPQUFPLEVBQUUsQ0FBQztnQkFDWkQsS0FBSyxDQUFDRSxXQUFXLEdBQUdELE9BQU8sQ0FBQ0UsYUFBYTtZQUMzQyxDQUFDO1lBQ0QsTUFBTSxDQUFDSCxLQUFLO1FBQ2QsQ0FBQztjQUNLSSxPQUFPLEVBQUNBLE9BQU8sRUFBRUMsSUFBSSxFQUFFLENBQUM7WUFDNUJELE9BQU8sQ0FBQ0MsSUFBSSxHQUFHQSxJQUFJO1lBQ25CLE1BQU0sQ0FBQ0QsT0FBTztRQUNoQixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdW1lLXdlYi8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IFNwb3RpZnlQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9zcG90aWZ5XCI7XG5cbi8vU2NyaXB0IHVzZWQgZm9yIHNwb3RpZnkgbG9naW4gYW5kIHN0b3JpbmcgbG9naW4gZGF0YSB0byBzZXNzaW9uXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIC8vVGhpcyBpcyB3aGVyZSB0aGUgc2NvcGUgYW5kIGNsaWVudCBpZCBhbmQgY2xpZW50IHNlY3JldCBhcmUga2VwdCAoeW91IGNhbid0IHNlZSB0aGUgY2xpZW50IGlkIGFuZCBzZWNyZXQgYmVjYXVzZSB0aGV5IGFyZSBpbiBhIC5lbnYubG9jYWwgZmlsZSBzbyB0aGUgYXJlIHByb3RlY3RlZClcbiAgcHJvdmlkZXJzOiBbXG4gICAgU3BvdGlmeVByb3ZpZGVyKHtcbiAgICAgIGF1dGhvcml6YXRpb246XG4gICAgICAgIFwiaHR0cHM6Ly9hY2NvdW50cy5zcG90aWZ5LmNvbS9hdXRob3JpemU/c2NvcGU9dXNlci1yZWFkLWVtYWlsLHBsYXlsaXN0LXJlYWQtcHJpdmF0ZSxwbGF5bGlzdC1tb2RpZnktcHJpdmF0ZVwiLFxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkNMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgXSxcblxuICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFQ1JFVCxcblxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgYWNjb3VudCB9KSB7XG4gICAgICBpZiAoYWNjb3VudCkge1xuICAgICAgICB0b2tlbi5hY2Nlc3NUb2tlbiA9IGFjY291bnQucmVmcmVzaF90b2tlbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oc2Vzc2lvbiwgdXNlcikge1xuICAgICAgc2Vzc2lvbi51c2VyID0gdXNlcjtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIlNwb3RpZnlQcm92aWRlciIsInByb3ZpZGVycyIsImF1dGhvcml6YXRpb24iLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJDTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJDTElFTlRfU0VDUkVUIiwic2VjcmV0IiwiU0VDUkVUIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJhY2NvdW50IiwiYWNjZXNzVG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwic2Vzc2lvbiIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();