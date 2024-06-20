(() => {
var exports = {};
exports.id = 572;
exports.ids = [572];
exports.modules = {

/***/ 5752:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom-experimental/server-rendering-stub");

/***/ }),

/***/ 7640:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-experimental");

/***/ }),

/***/ 6931:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-experimental/jsx-runtime");

/***/ }),

/***/ 7597:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack-experimental/client");

/***/ }),

/***/ 5927:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack-experimental/client.edge");

/***/ }),

/***/ 213:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack-experimental/server.edge");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 1705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'create',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8847)), "/Users/jameson/blakeCode/redis-with-next/src/app/create/page.jsx"],
          
        }]
      },
        {
        
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5004)), "/Users/jameson/blakeCode/redis-with-next/src/app/layout.jsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["/Users/jameson/blakeCode/redis-with-next/src/app/create/page.jsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/create/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/create/page",
        pathname: "/create",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 2303:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const actions = {
'7cfdde7c497aac430b995b39f182683e173e8929': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8839)).then(mod => mod["createBook"]),
}

async function endpoint(id, ...args) {
  const action = await actions[id]()
  return action.apply(null, args)
}

// Using CJS to avoid this to be tree-shaken away due to unused exports.
module.exports = {
  '7cfdde7c497aac430b995b39f182683e173e8929': endpoint.bind(null, '7cfdde7c497aac430b995b39f182683e173e8929'),
}


/***/ }),

/***/ 4311:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3636))

/***/ }),

/***/ 3636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Create)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: ./node_modules/next/dist/client/app-call-server.js
var app_call_server = __webpack_require__(6937);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js
var action_proxy = __webpack_require__(3009);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js
var action_client_wrapper = __webpack_require__(1324);
;// CONCATENATED MODULE: ./src/app/actions/create.js



function __build_action__(action, args) {
  return callServer(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ createBook */ 

var createBook = (0,action_client_wrapper/* default */.Z)("7cfdde7c497aac430b995b39f182683e173e8929");


// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(7640);
;// CONCATENATED MODULE: ./src/app/create/page.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Create() {
    const [error, setError] = (0,react_experimental_.useState)("");
    async function handleSubmit(formData) {
        const result = await createBook(formData);
        if (result?.error) {
            setError(result.error);
        }
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            action: handleSubmit,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "Add a New Book"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "text",
                    name: "title",
                    placeholder: "title"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "text",
                    name: "author",
                    placeholder: "author"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "number",
                    name: "rating",
                    max: 10,
                    min: 1,
                    placeholder: "rating"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                    name: "blurb",
                    placeholder: "blurb..."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "submit",
                    className: "btn",
                    children: "Add Book"
                }),
                error && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "error",
                    children: error
                })
            ]
        })
    });
}


/***/ }),

/***/ 8839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBook: () => (/* binding */ createBook)
/* harmony export */ });
/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8758);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(390);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4050);
/* __next_internal_action_entry_do_not_use__ createBook */ 
// import { client } from "@/lib/db"

async function createBook(formData) {
    const { title, rating, author, blurb } = Object.fromEntries(formData);
}

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_2__["default"])([
    createBook
]);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__.createActionProxy)("7cfdde7c497aac430b995b39f182683e173e8929", null, createBook);


/***/ }),

/***/ 8847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/jameson/blakeCode/redis-with-next/src/app/create/page.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,763,747,759], () => (__webpack_exec__(1705)));
module.exports = __webpack_exports__;

})();