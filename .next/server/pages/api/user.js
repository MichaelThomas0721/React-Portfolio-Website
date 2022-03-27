"use strict";
(() => {
var exports = {};
exports.id = 541;
exports.ids = [541];
exports.modules = {

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 4324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_spotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);


//script for getting the user id from the spotify api
const handler = async (req, res)=>{
    //get access token
    const { token: { accessToken  } ,  } = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({
        req
    });
    //call the spotify.js function to call the api
    const response = await (0,_lib_spotify__WEBPACK_IMPORTED_MODULE_0__/* .getUserId */ .n5)(accessToken);
    const item = await response.json();
    //return the information
    return res.status(200).json(item);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [756], () => (__webpack_exec__(4324)));
module.exports = __webpack_exports__;

})();