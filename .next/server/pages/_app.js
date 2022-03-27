"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./lib/gtag.js
const GA_TRACKING_ID = "G-D1ZTF5CGYT";
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url)=>{
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url
    });
};
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const gtag_event = ({ action , category , label , value  })=>{
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
    });
};

;// CONCATENATED MODULE: ./pages/_app.js







function App({ Component , pageProps: { session , ...pageProps } ,  }) {
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        const handleRouteChange = (url)=>{
            pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [
        router.events
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.SessionProvider, {
            session: session,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                    strategy: "afterInteractive",
                    src: `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                    id: "gtag-init",
                    strategy: "afterInteractive",
                    dangerouslySetInnerHTML: {
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    }));
};


/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8605));
module.exports = __webpack_exports__;

})();