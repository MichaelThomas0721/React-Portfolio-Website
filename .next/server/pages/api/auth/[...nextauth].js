"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 2482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/spotify"
const spotify_namespaceObject = require("next-auth/providers/spotify");
var spotify_default = /*#__PURE__*/__webpack_require__.n(spotify_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js


//Script used for spotify login and storing login data to session
/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    //This is where the scope and client id and client secret are kept (you can't see the client id and secret because they are in a .env.local file so the are protected)
    providers: [
        spotify_default()({
            authorization: "https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,playlist-modify-private",
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
        }), 
    ],
    secret: process.env.SECRET,
    callbacks: {
        async jwt ({ token , account  }) {
            if (account) {
                token.accessToken = account.refresh_token;
            }
            return token;
        },
        async session (session, user) {
            session.user = user;
            return session;
        }
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2482));
module.exports = __webpack_exports__;

})();