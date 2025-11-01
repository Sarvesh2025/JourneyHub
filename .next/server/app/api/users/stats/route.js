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
exports.id = "app/api/users/stats/route";
exports.ids = ["app/api/users/stats/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "./action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fstats%2Froute&page=%2Fapi%2Fusers%2Fstats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fstats%2Froute.js&appDir=C%3A%5CUsers%5Cutsav%5CCampgroundMaster%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cutsav%5CCampgroundMaster&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fstats%2Froute&page=%2Fapi%2Fusers%2Fstats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fstats%2Froute.js&appDir=C%3A%5CUsers%5Cutsav%5CCampgroundMaster%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cutsav%5CCampgroundMaster&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_utsav_CampgroundMaster_app_api_users_stats_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/users/stats/route.js */ \"(rsc)/./app/api/users/stats/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/stats/route\",\n        pathname: \"/api/users/stats\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/stats/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\utsav\\\\CampgroundMaster\\\\app\\\\api\\\\users\\\\stats\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_utsav_CampgroundMaster_app_api_users_stats_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/users/stats/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRnN0YXRzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ1c2VycyUyRnN0YXRzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdXNlcnMlMkZzdGF0cyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUN1dHNhdiU1Q0NhbXBncm91bmRNYXN0ZXIlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q3V0c2F2JTVDQ2FtcGdyb3VuZE1hc3RlciZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDb0I7QUFDakc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95ZWxwY2FtcC8/ZTM1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFx1dHNhdlxcXFxDYW1wZ3JvdW5kTWFzdGVyXFxcXGFwcFxcXFxhcGlcXFxcdXNlcnNcXFxcc3RhdHNcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3VzZXJzL3N0YXRzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXNlcnMvc3RhdHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3VzZXJzL3N0YXRzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcdXRzYXZcXFxcQ2FtcGdyb3VuZE1hc3RlclxcXFxhcHBcXFxcYXBpXFxcXHVzZXJzXFxcXHN0YXRzXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS91c2Vycy9zdGF0cy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fstats%2Froute&page=%2Fapi%2Fusers%2Fstats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fstats%2Froute.js&appDir=C%3A%5CUsers%5Cutsav%5CCampgroundMaster%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cutsav%5CCampgroundMaster&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/users/stats/route.js":
/*!**************************************!*\
  !*** ./app/api/users/stats/route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_authOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/authOptions */ \"(rsc)/./lib/authOptions.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.js\");\n/* harmony import */ var _lib_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/models */ \"(rsc)/./lib/models.js\");\n\n\n\n\n\nasync function GET(request) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_authOptions__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_3__.connectToDatabase)();\n        // Get user ID from username\n        const user = await _lib_models__WEBPACK_IMPORTED_MODULE_4__.User.findOne({\n            username: session.user.name\n        });\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"User not found\"\n            }, {\n                status: 404\n            });\n        }\n        // Count campgrounds (posts) created by user\n        const campgroundCount = await _lib_models__WEBPACK_IMPORTED_MODULE_4__.Campground.countDocuments({\n            author: user._id\n        });\n        // Count reviews (comments) created by user\n        const reviewCount = await _lib_models__WEBPACK_IMPORTED_MODULE_4__.Review.countDocuments({\n            author: user._id\n        });\n        // Get recent campgrounds\n        const recentCampgrounds = await _lib_models__WEBPACK_IMPORTED_MODULE_4__.Campground.find({\n            author: user._id\n        }).sort({\n            _id: -1\n        }).limit(5).select(\"title location price images\");\n        // Get recent reviews with campground info\n        const recentReviews = await _lib_models__WEBPACK_IMPORTED_MODULE_4__.Review.find({\n            author: user._id\n        }).sort({\n            _id: -1\n        }).limit(5).select(\"body rating\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            ok: true,\n            stats: {\n                campgroundCount,\n                reviewCount,\n                recentCampgrounds,\n                recentReviews\n            },\n            user: {\n                username: user.username,\n                email: user.email,\n                avatar: user.avatar\n            }\n        });\n    } catch (error) {\n        console.error(\"Error fetching user stats:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch user statistics\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VzZXJzL3N0YXRzL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkM7QUFDRTtBQUNHO0FBQ0g7QUFDVztBQUVqRCxlQUFlTyxJQUFJQyxPQUFPO0lBQy9CLElBQUk7UUFDRixNQUFNQyxVQUFVLE1BQU1SLDJEQUFnQkEsQ0FBQ0MseURBQVdBO1FBRWxELElBQUksQ0FBQ08sU0FBU0MsTUFBTTtZQUNsQixPQUFPVixxREFBWUEsQ0FBQ1csSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQWUsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3BFO1FBRUEsTUFBTVYsMERBQWlCQTtRQUV2Qiw0QkFBNEI7UUFDNUIsTUFBTU8sT0FBTyxNQUFNSiw2Q0FBSUEsQ0FBQ1EsT0FBTyxDQUFDO1lBQUVDLFVBQVVOLFFBQVFDLElBQUksQ0FBQ00sSUFBSTtRQUFDO1FBRTlELElBQUksQ0FBQ04sTUFBTTtZQUNULE9BQU9WLHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBaUIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3RFO1FBRUEsNENBQTRDO1FBQzVDLE1BQU1JLGtCQUFrQixNQUFNYixtREFBVUEsQ0FBQ2MsY0FBYyxDQUFDO1lBQUVDLFFBQVFULEtBQUtVLEdBQUc7UUFBQztRQUUzRSwyQ0FBMkM7UUFDM0MsTUFBTUMsY0FBYyxNQUFNaEIsK0NBQU1BLENBQUNhLGNBQWMsQ0FBQztZQUFFQyxRQUFRVCxLQUFLVSxHQUFHO1FBQUM7UUFFbkUseUJBQXlCO1FBQ3pCLE1BQU1FLG9CQUFvQixNQUFNbEIsbURBQVVBLENBQUNtQixJQUFJLENBQUM7WUFBRUosUUFBUVQsS0FBS1UsR0FBRztRQUFDLEdBQ2hFSSxJQUFJLENBQUM7WUFBRUosS0FBSyxDQUFDO1FBQUUsR0FDZkssS0FBSyxDQUFDLEdBQ05DLE1BQU0sQ0FBQztRQUVWLDBDQUEwQztRQUMxQyxNQUFNQyxnQkFBZ0IsTUFBTXRCLCtDQUFNQSxDQUFDa0IsSUFBSSxDQUFDO1lBQUVKLFFBQVFULEtBQUtVLEdBQUc7UUFBQyxHQUN4REksSUFBSSxDQUFDO1lBQUVKLEtBQUssQ0FBQztRQUFFLEdBQ2ZLLEtBQUssQ0FBQyxHQUNOQyxNQUFNLENBQUM7UUFFVixPQUFPMUIscURBQVlBLENBQUNXLElBQUksQ0FBQztZQUN2QmlCLElBQUk7WUFDSkMsT0FBTztnQkFDTFo7Z0JBQ0FJO2dCQUNBQztnQkFDQUs7WUFDRjtZQUNBakIsTUFBTTtnQkFDSkssVUFBVUwsS0FBS0ssUUFBUTtnQkFDdkJlLE9BQU9wQixLQUFLb0IsS0FBSztnQkFDakJDLFFBQVFyQixLQUFLcUIsTUFBTTtZQUNyQjtRQUNGO0lBQ0YsRUFBRSxPQUFPbkIsT0FBTztRQUNkb0IsUUFBUXBCLEtBQUssQ0FBQyw4QkFBOEJBO1FBQzVDLE9BQU9aLHFEQUFZQSxDQUFDVyxJQUFJLENBQ3RCO1lBQUVDLE9BQU87UUFBa0MsR0FDM0M7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95ZWxwY2FtcC8uL2FwcC9hcGkvdXNlcnMvc3RhdHMvcm91dGUuanM/ZjhjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9saWIvYXV0aE9wdGlvbnMnO1xuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tICdAL2xpYi9kYic7XG5pbXBvcnQgeyBDYW1wZ3JvdW5kLCBSZXZpZXcsIFVzZXIgfSBmcm9tICdAL2xpYi9tb2RlbHMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gICAgXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgICB9XG5cbiAgICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gICAgLy8gR2V0IHVzZXIgSUQgZnJvbSB1c2VybmFtZVxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyB1c2VybmFtZTogc2Vzc2lvbi51c2VyLm5hbWUgfSk7XG4gICAgXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VzZXIgbm90IGZvdW5kJyB9LCB7IHN0YXR1czogNDA0IH0pO1xuICAgIH1cblxuICAgIC8vIENvdW50IGNhbXBncm91bmRzIChwb3N0cykgY3JlYXRlZCBieSB1c2VyXG4gICAgY29uc3QgY2FtcGdyb3VuZENvdW50ID0gYXdhaXQgQ2FtcGdyb3VuZC5jb3VudERvY3VtZW50cyh7IGF1dGhvcjogdXNlci5faWQgfSk7XG5cbiAgICAvLyBDb3VudCByZXZpZXdzIChjb21tZW50cykgY3JlYXRlZCBieSB1c2VyXG4gICAgY29uc3QgcmV2aWV3Q291bnQgPSBhd2FpdCBSZXZpZXcuY291bnREb2N1bWVudHMoeyBhdXRob3I6IHVzZXIuX2lkIH0pO1xuXG4gICAgLy8gR2V0IHJlY2VudCBjYW1wZ3JvdW5kc1xuICAgIGNvbnN0IHJlY2VudENhbXBncm91bmRzID0gYXdhaXQgQ2FtcGdyb3VuZC5maW5kKHsgYXV0aG9yOiB1c2VyLl9pZCB9KVxuICAgICAgLnNvcnQoeyBfaWQ6IC0xIH0pXG4gICAgICAubGltaXQoNSlcbiAgICAgIC5zZWxlY3QoJ3RpdGxlIGxvY2F0aW9uIHByaWNlIGltYWdlcycpO1xuXG4gICAgLy8gR2V0IHJlY2VudCByZXZpZXdzIHdpdGggY2FtcGdyb3VuZCBpbmZvXG4gICAgY29uc3QgcmVjZW50UmV2aWV3cyA9IGF3YWl0IFJldmlldy5maW5kKHsgYXV0aG9yOiB1c2VyLl9pZCB9KVxuICAgICAgLnNvcnQoeyBfaWQ6IC0xIH0pXG4gICAgICAubGltaXQoNSlcbiAgICAgIC5zZWxlY3QoJ2JvZHkgcmF0aW5nJyk7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgb2s6IHRydWUsXG4gICAgICBzdGF0czoge1xuICAgICAgICBjYW1wZ3JvdW5kQ291bnQsXG4gICAgICAgIHJldmlld0NvdW50LFxuICAgICAgICByZWNlbnRDYW1wZ3JvdW5kcyxcbiAgICAgICAgcmVjZW50UmV2aWV3cyxcbiAgICAgIH0sXG4gICAgICB1c2VyOiB7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgYXZhdGFyOiB1c2VyLmF2YXRhcixcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIHN0YXRzOicsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIHVzZXIgc3RhdGlzdGljcycgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJjb25uZWN0VG9EYXRhYmFzZSIsIkNhbXBncm91bmQiLCJSZXZpZXciLCJVc2VyIiwiR0VUIiwicmVxdWVzdCIsInNlc3Npb24iLCJ1c2VyIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiZmluZE9uZSIsInVzZXJuYW1lIiwibmFtZSIsImNhbXBncm91bmRDb3VudCIsImNvdW50RG9jdW1lbnRzIiwiYXV0aG9yIiwiX2lkIiwicmV2aWV3Q291bnQiLCJyZWNlbnRDYW1wZ3JvdW5kcyIsImZpbmQiLCJzb3J0IiwibGltaXQiLCJzZWxlY3QiLCJyZWNlbnRSZXZpZXdzIiwib2siLCJzdGF0cyIsImVtYWlsIiwiYXZhdGFyIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/users/stats/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/authOptions.js":
/*!****************************!*\
  !*** ./lib/authOptions.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.js\");\n/* harmony import */ var _lib_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/models */ \"(rsc)/./lib/models.js\");\n\n\n\nconst authOptions = {\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.username || !credentials?.password) return null;\n                await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n                const fn = _lib_models__WEBPACK_IMPORTED_MODULE_2__.User.authenticate();\n                return new Promise((resolve)=>{\n                    fn(credentials.username, credentials.password, (err, user)=>{\n                        if (err || !user) return resolve(null);\n                        resolve({\n                            id: String(user._id),\n                            username: user.username,\n                            email: user.email || null\n                        });\n                    });\n                });\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.username = user.username;\n                token.email = user.email || null;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user = {\n                    id: token.id,\n                    name: token.username,\n                    email: token.email || null\n                };\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aE9wdGlvbnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwRDtBQUNiO0FBQ1Q7QUFFN0IsTUFBTUcsY0FBYztJQUN6QkMsU0FBUztRQUFFQyxVQUFVO0lBQU07SUFDM0JDLFdBQVc7UUFDVE4sMkVBQVdBLENBQUM7WUFDVk8sTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxVQUFVO29CQUFFQyxPQUFPO29CQUFZQyxNQUFNO2dCQUFPO2dCQUM1Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3pCLElBQUksQ0FBQ0EsYUFBYUMsWUFBWSxDQUFDRCxhQUFhSSxVQUFVLE9BQU87Z0JBQzdELE1BQU1YLDBEQUFpQkE7Z0JBQ3ZCLE1BQU1hLEtBQUtaLDZDQUFJQSxDQUFDYSxZQUFZO2dCQUM1QixPQUFPLElBQUlDLFFBQVEsQ0FBQ0M7b0JBQ2xCSCxHQUFHTixZQUFZQyxRQUFRLEVBQUVELFlBQVlJLFFBQVEsRUFBRSxDQUFDTSxLQUFLQzt3QkFDbkQsSUFBSUQsT0FBTyxDQUFDQyxNQUFNLE9BQU9GLFFBQVE7d0JBQ2pDQSxRQUFROzRCQUFFRyxJQUFJQyxPQUFPRixLQUFLRyxHQUFHOzRCQUFHYixVQUFVVSxLQUFLVixRQUFROzRCQUFFYyxPQUFPSixLQUFLSSxLQUFLLElBQUk7d0JBQUs7b0JBQ3JGO2dCQUNGO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RDLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRVAsSUFBSSxFQUFFO1lBQ3ZCLElBQUlBLE1BQU07Z0JBQ1JPLE1BQU1OLEVBQUUsR0FBR0QsS0FBS0MsRUFBRTtnQkFDbEJNLE1BQU1qQixRQUFRLEdBQUdVLEtBQUtWLFFBQVE7Z0JBQzlCaUIsTUFBTUgsS0FBSyxHQUFHSixLQUFLSSxLQUFLLElBQUk7WUFDOUI7WUFDQSxPQUFPRztRQUNUO1FBQ0EsTUFBTXRCLFNBQVEsRUFBRUEsT0FBTyxFQUFFc0IsS0FBSyxFQUFFO1lBQzlCLElBQUlBLE9BQU87Z0JBQ1R0QixRQUFRZSxJQUFJLEdBQUc7b0JBQ2JDLElBQUlNLE1BQU1OLEVBQUU7b0JBQ1piLE1BQU1tQixNQUFNakIsUUFBUTtvQkFDcEJjLE9BQU9HLE1BQU1ILEtBQUssSUFBSTtnQkFDeEI7WUFDRjtZQUNBLE9BQU9uQjtRQUNUO0lBQ0Y7SUFDQXVCLE9BQU87UUFBRUMsUUFBUTtJQUFTO0lBQzFCQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7QUFDckMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3llbHBjYW1wLy4vbGliL2F1dGhPcHRpb25zLmpzP2E5YzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENyZWRlbnRpYWxzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tICdAL2xpYi9kYic7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQC9saWIvbW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xuICBzZXNzaW9uOiB7IHN0cmF0ZWd5OiAnand0JyB9LFxuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFscyh7XG4gICAgICBuYW1lOiAnQ3JlZGVudGlhbHMnLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgdXNlcm5hbWU6IHsgbGFiZWw6ICdVc2VybmFtZScsIHR5cGU6ICd0ZXh0JyB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogJ1Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJyB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LnVzZXJuYW1lIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHJldHVybiBudWxsO1xuICAgICAgICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICAgICAgICBjb25zdCBmbiA9IFVzZXIuYXV0aGVudGljYXRlKCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgIGZuKGNyZWRlbnRpYWxzLnVzZXJuYW1lLCBjcmVkZW50aWFscy5wYXNzd29yZCwgKGVyciwgdXNlcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVyciB8fCAhdXNlcikgcmV0dXJuIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICByZXNvbHZlKHsgaWQ6IFN0cmluZyh1c2VyLl9pZCksIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLCBlbWFpbDogdXNlci5lbWFpbCB8fCBudWxsIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWQ7XG4gICAgICAgIHRva2VuLnVzZXJuYW1lID0gdXNlci51c2VybmFtZTtcbiAgICAgICAgdG9rZW4uZW1haWwgPSB1c2VyLmVtYWlsIHx8IG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHNlc3Npb24udXNlciA9IHtcbiAgICAgICAgICBpZDogdG9rZW4uaWQsXG4gICAgICAgICAgbmFtZTogdG9rZW4udXNlcm5hbWUsXG4gICAgICAgICAgZW1haWw6IHRva2VuLmVtYWlsIHx8IG51bGxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH1cbiAgfSxcbiAgcGFnZXM6IHsgc2lnbkluOiAnL2xvZ2luJyB9LFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVFxufTtcbiJdLCJuYW1lcyI6WyJDcmVkZW50aWFscyIsImNvbm5lY3RUb0RhdGFiYXNlIiwiVXNlciIsImF1dGhPcHRpb25zIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwidXNlcm5hbWUiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsImZuIiwiYXV0aGVudGljYXRlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJlcnIiLCJ1c2VyIiwiaWQiLCJTdHJpbmciLCJfaWQiLCJlbWFpbCIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwicGFnZXMiLCJzaWduSW4iLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/authOptions.js\n");

/***/ }),

/***/ "(rsc)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.DB_URL;\nif (!MONGODB_URI) {\n    throw new Error(\"Missing DB_URL in environment\");\n}\nlet cached = global._mongoose;\nif (!cached) {\n    cached = global._mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectToDatabase() {\n    if (cached.conn) return cached.conn;\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI).then((mongoose)=>mongoose);\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0MsTUFBTTtBQUV0QyxJQUFJLENBQUNILGFBQWE7SUFDaEIsTUFBTSxJQUFJSSxNQUFNO0FBQ2xCO0FBRUEsSUFBSUMsU0FBU0MsT0FBT0MsU0FBUztBQUM3QixJQUFJLENBQUNGLFFBQVE7SUFDWEEsU0FBU0MsT0FBT0MsU0FBUyxHQUFHO1FBQUVDLE1BQU07UUFBTUMsU0FBUztJQUFLO0FBQzFEO0FBRU8sZUFBZUM7SUFDcEIsSUFBSUwsT0FBT0csSUFBSSxFQUFFLE9BQU9ILE9BQU9HLElBQUk7SUFDbkMsSUFBSSxDQUFDSCxPQUFPSSxPQUFPLEVBQUU7UUFDbkJKLE9BQU9JLE9BQU8sR0FBR1YsdURBQWdCLENBQUNDLGFBQWFZLElBQUksQ0FBQyxDQUFDYixXQUFhQTtJQUNwRTtJQUNBTSxPQUFPRyxJQUFJLEdBQUcsTUFBTUgsT0FBT0ksT0FBTztJQUNsQyxPQUFPSixPQUFPRyxJQUFJO0FBQ3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veWVscGNhbXAvLi9saWIvZGIuanM/M2RjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52LkRCX1VSTDtcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgREJfVVJMIGluIGVudmlyb25tZW50Jyk7XG59XG5cbmxldCBjYWNoZWQgPSBnbG9iYWwuX21vbmdvb3NlO1xuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gZ2xvYmFsLl9tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGlmIChjYWNoZWQuY29ubikgcmV0dXJuIGNhY2hlZC5jb25uO1xuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJKS50aGVuKChtb25nb29zZSkgPT4gbW9uZ29vc2UpO1xuICB9XG4gIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gIHJldHVybiBjYWNoZWQuY29ubjtcbn1cbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkRCX1VSTCIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiX21vbmdvb3NlIiwiY29ubiIsInByb21pc2UiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNvbm5lY3QiLCJ0aGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.js\n");

/***/ }),

/***/ "(rsc)/./lib/models.js":
/*!***********************!*\
  !*** ./lib/models.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Campground: () => (/* binding */ Campground),\n/* harmony export */   Review: () => (/* binding */ Review),\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n\nconst require = /* createRequire() */ undefined;\n// Reuse existing CommonJS Mongoose models inside Next (ESM)\nconst Campground = __webpack_require__(/*! ../models/campground */ \"(rsc)/./models/campground.js\");\nconst Review = __webpack_require__(/*! ../models/review */ \"(rsc)/./models/review.js\");\nconst User = __webpack_require__(/*! ../models/user */ \"(rsc)/./models/user.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1QztBQUN2QyxNQUFNQyxVQUFVRCwrQkFBOEI7QUFFOUMsNERBQTREO0FBQzVELE1BQU1HLGFBQWFGLG1CQUFPQSxDQUFDO0FBQzNCLE1BQU1HLFNBQVNILG1CQUFPQSxDQUFDO0FBQ3ZCLE1BQU1JLE9BQU9KLG1CQUFPQSxDQUFDO0FBRWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95ZWxwY2FtcC8uL2xpYi9tb2RlbHMuanM/YTQxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSZXF1aXJlIH0gZnJvbSAnbW9kdWxlJztcbmNvbnN0IHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKGltcG9ydC5tZXRhLnVybCk7XG5cbi8vIFJldXNlIGV4aXN0aW5nIENvbW1vbkpTIE1vbmdvb3NlIG1vZGVscyBpbnNpZGUgTmV4dCAoRVNNKVxuY29uc3QgQ2FtcGdyb3VuZCA9IHJlcXVpcmUoJy4uL21vZGVscy9jYW1wZ3JvdW5kJyk7XG5jb25zdCBSZXZpZXcgPSByZXF1aXJlKCcuLi9tb2RlbHMvcmV2aWV3Jyk7XG5jb25zdCBVc2VyID0gcmVxdWlyZSgnLi4vbW9kZWxzL3VzZXInKTtcblxuZXhwb3J0IHsgQ2FtcGdyb3VuZCwgUmV2aWV3LCBVc2VyIH07XG4iXSwibmFtZXMiOlsiY3JlYXRlUmVxdWlyZSIsInJlcXVpcmUiLCJ1cmwiLCJDYW1wZ3JvdW5kIiwiUmV2aWV3IiwiVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/models.js\n");

/***/ }),

/***/ "(rsc)/./models/campground.js":
/*!******************************!*\
  !*** ./models/campground.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst Schema = mongoose.Schema;\nconst Review = __webpack_require__(/*! ./review */ \"(rsc)/./models/review.js\");\nconst ImageSchema = new Schema({\n    url: String,\n    filename: String\n});\nImageSchema.virtual(\"thumbnail\").get(function() {\n    return this.url.replace(\"/upload\", \"/upload/w_200\");\n});\nconst opts = {\n    toJSON: {\n        virtuals: true\n    }\n};\nconst CampgroundSchema = new Schema({\n    title: String,\n    location: String,\n    geometry: {\n        type: {\n            type: String,\n            enum: [\n                \"Point\"\n            ],\n            required: true\n        },\n        coordinates: {\n            type: [\n                Number\n            ],\n            required: true\n        }\n    },\n    images: [\n        ImageSchema\n    ],\n    price: Number,\n    description: String,\n    author: {\n        type: Schema.Types.ObjectId,\n        ref: \"User\"\n    },\n    reviews: [\n        {\n            type: Schema.Types.ObjectId,\n            ref: \"Review\"\n        }\n    ]\n}, opts);\nCampgroundSchema.virtual(\"properties.popUpMarkup\").get(function() {\n    return `\r\n    <strong><a href=\"/campgrounds/${this._id}\">${this.title}</a></strong>\r\n    <p>${this.description.substring(0, 100)}...</P>\r\n    `;\n});\nCampgroundSchema.post(\"findOneAndDelete\", async function(doc) {\n    if (doc) {\n        await Review.deleteMany({\n            _id: {\n                $in: doc.reviews\n            }\n        });\n    }\n});\nmodule.exports = mongoose.models.Campground || mongoose.model(\"Campground\", CampgroundSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvY2FtcGdyb3VuZC5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsV0FBV0MsbUJBQU9BLENBQUM7QUFDekIsTUFBTUMsU0FBU0YsU0FBU0UsTUFBTTtBQUM5QixNQUFNQyxTQUFTRixtQkFBT0EsQ0FBQztBQUV2QixNQUFNRyxjQUFjLElBQUlGLE9BQU87SUFDM0JHLEtBQUtDO0lBQ0xDLFVBQVVEO0FBQ2Q7QUFFQUYsWUFBWUksT0FBTyxDQUFDLGFBQWFDLEdBQUcsQ0FBQztJQUNqQyxPQUFPLElBQUksQ0FBQ0osR0FBRyxDQUFDSyxPQUFPLENBQUMsV0FBVztBQUN2QztBQUVBLE1BQU1DLE9BQU87SUFBRUMsUUFBUTtRQUFFQyxVQUFVO0lBQUs7QUFBRTtBQUUxQyxNQUFNQyxtQkFBbUIsSUFBSVosT0FBTztJQUNoQ2EsT0FBT1Q7SUFDUFUsVUFBVVY7SUFDVlcsVUFBVTtRQUNOQyxNQUFNO1lBQ0ZBLE1BQU1aO1lBQ05hLE1BQU07Z0JBQUM7YUFBUTtZQUNmQyxVQUFVO1FBQ2Q7UUFDQUMsYUFBYTtZQUNUSCxNQUFNO2dCQUFDSTthQUFPO1lBQ2RGLFVBQVU7UUFDZDtJQUNKO0lBQ0FHLFFBQVE7UUFBQ25CO0tBQVk7SUFDckJvQixPQUFPRjtJQUNQRyxhQUFhbkI7SUFDYm9CLFFBQVE7UUFDSlIsTUFBTWhCLE9BQU95QixLQUFLLENBQUNDLFFBQVE7UUFDM0JDLEtBQUs7SUFDVDtJQUNBQyxTQUFTO1FBQ0w7WUFDSVosTUFBTWhCLE9BQU95QixLQUFLLENBQUNDLFFBQVE7WUFDM0JDLEtBQUs7UUFDVDtLQUNIO0FBQ0wsR0FBR2xCO0FBRUhHLGlCQUFpQk4sT0FBTyxDQUFDLDBCQUEwQkMsR0FBRyxDQUFDO0lBQ25ELE9BQU8sQ0FBQztrQ0FDc0IsRUFBRSxJQUFJLENBQUNzQixHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQ2hCLEtBQUssQ0FBQztPQUNyRCxFQUFFLElBQUksQ0FBQ1UsV0FBVyxDQUFDTyxTQUFTLENBQUMsR0FBRyxLQUFLO0lBQ3hDLENBQUM7QUFDTDtBQUVBbEIsaUJBQWlCbUIsSUFBSSxDQUFDLG9CQUFvQixlQUFnQkMsR0FBRztJQUN6RCxJQUFJQSxLQUFLO1FBQ0wsTUFBTS9CLE9BQU9nQyxVQUFVLENBQUM7WUFDcEJKLEtBQUs7Z0JBQ0RLLEtBQUtGLElBQUlKLE9BQU87WUFDcEI7UUFBQztJQUVUO0FBQ0o7QUFFQU8sT0FBT0MsT0FBTyxHQUFHdEMsU0FBU3VDLE1BQU0sQ0FBQ0MsVUFBVSxJQUFJeEMsU0FBU3lDLEtBQUssQ0FBQyxjQUFjM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95ZWxwY2FtcC8uL21vZGVscy9jYW1wZ3JvdW5kLmpzPzViYTIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xyXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcbmNvbnN0IFJldmlldyA9IHJlcXVpcmUoJy4vcmV2aWV3JylcclxuXHJcbmNvbnN0IEltYWdlU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgICB1cmw6IFN0cmluZyxcclxuICAgIGZpbGVuYW1lOiBTdHJpbmdcclxufSlcclxuXHJcbkltYWdlU2NoZW1hLnZpcnR1YWwoJ3RodW1ibmFpbCcpLmdldChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy51cmwucmVwbGFjZSgnL3VwbG9hZCcsICcvdXBsb2FkL3dfMjAwJyk7XHJcbn0pXHJcblxyXG5jb25zdCBvcHRzID0geyB0b0pTT046IHsgdmlydHVhbHM6IHRydWUgfSB9O1xyXG5cclxuY29uc3QgQ2FtcGdyb3VuZFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgdGl0bGU6IFN0cmluZyxcclxuICAgIGxvY2F0aW9uOiBTdHJpbmcsXHJcbiAgICBnZW9tZXRyeToge1xyXG4gICAgICAgIHR5cGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICBlbnVtOiBbJ1BvaW50J10sXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb29yZGluYXRlczoge1xyXG4gICAgICAgICAgICB0eXBlOiBbTnVtYmVyXSxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaW1hZ2VzOiBbSW1hZ2VTY2hlbWFdLFxyXG4gICAgcHJpY2U6IE51bWJlcixcclxuICAgIGRlc2NyaXB0aW9uOiBTdHJpbmcsXHJcbiAgICBhdXRob3I6IHtcclxuICAgICAgICB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICAgICAgcmVmOiAnVXNlcidcclxuICAgIH0sXHJcbiAgICByZXZpZXdzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICAgICAgICAgIHJlZjogJ1JldmlldydcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0sIG9wdHMpO1xyXG5cclxuQ2FtcGdyb3VuZFNjaGVtYS52aXJ0dWFsKCdwcm9wZXJ0aWVzLnBvcFVwTWFya3VwJykuZ2V0KGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8c3Ryb25nPjxhIGhyZWY9XCIvY2FtcGdyb3VuZHMvJHt0aGlzLl9pZH1cIj4ke3RoaXMudGl0bGV9PC9hPjwvc3Ryb25nPlxyXG4gICAgPHA+JHt0aGlzLmRlc2NyaXB0aW9uLnN1YnN0cmluZygwLCAxMDApfS4uLjwvUD5cclxuICAgIGA7XHJcbn0pXHJcblxyXG5DYW1wZ3JvdW5kU2NoZW1hLnBvc3QoJ2ZpbmRPbmVBbmREZWxldGUnLCBhc3luYyBmdW5jdGlvbiAoZG9jKSB7XHJcbiAgICBpZiAoZG9jKSB7XHJcbiAgICAgICAgYXdhaXQgUmV2aWV3LmRlbGV0ZU1hbnkoe1xyXG4gICAgICAgICAgICBfaWQ6IHtcclxuICAgICAgICAgICAgICAgICRpbjogZG9jLnJldmlld3NcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5DYW1wZ3JvdW5kIHx8IG1vbmdvb3NlLm1vZGVsKCdDYW1wZ3JvdW5kJywgQ2FtcGdyb3VuZFNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJTY2hlbWEiLCJSZXZpZXciLCJJbWFnZVNjaGVtYSIsInVybCIsIlN0cmluZyIsImZpbGVuYW1lIiwidmlydHVhbCIsImdldCIsInJlcGxhY2UiLCJvcHRzIiwidG9KU09OIiwidmlydHVhbHMiLCJDYW1wZ3JvdW5kU2NoZW1hIiwidGl0bGUiLCJsb2NhdGlvbiIsImdlb21ldHJ5IiwidHlwZSIsImVudW0iLCJyZXF1aXJlZCIsImNvb3JkaW5hdGVzIiwiTnVtYmVyIiwiaW1hZ2VzIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImF1dGhvciIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJyZXZpZXdzIiwiX2lkIiwic3Vic3RyaW5nIiwicG9zdCIsImRvYyIsImRlbGV0ZU1hbnkiLCIkaW4iLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWxzIiwiQ2FtcGdyb3VuZCIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/campground.js\n");

/***/ }),

/***/ "(rsc)/./models/review.js":
/*!**************************!*\
  !*** ./models/review.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst { Schema } = mongoose;\n// const Schema = mongoose.Schema;\nconst reviewSchema = new Schema({\n    body: String,\n    rating: Number,\n    author: {\n        type: Schema.Types.ObjectId,\n        ref: \"User\"\n    }\n});\nmodule.exports = mongoose.models.Review || mongoose.model(\"Review\", reviewSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvcmV2aWV3LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUN6QixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHRjtBQUNuQixrQ0FBa0M7QUFFbEMsTUFBTUcsZUFBZSxJQUFJRCxPQUFPO0lBQzVCRSxNQUFNQztJQUNOQyxRQUFRQztJQUNSQyxRQUFRO1FBQ0pDLE1BQU1QLE9BQU9RLEtBQUssQ0FBQ0MsUUFBUTtRQUMzQkMsS0FBSztJQUNUO0FBQ0o7QUFFQUMsT0FBT0MsT0FBTyxHQUFHZCxTQUFTZSxNQUFNLENBQUNDLE1BQU0sSUFBSWhCLFNBQVNpQixLQUFLLENBQUMsVUFBVWQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95ZWxwY2FtcC8uL21vZGVscy9yZXZpZXcuanM/MzZmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2U7XG4vLyBjb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XG5cbmNvbnN0IHJldmlld1NjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIGJvZHk6IFN0cmluZyxcbiAgICByYXRpbmc6IE51bWJlcixcbiAgICBhdXRob3I6IHtcbiAgICAgICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgICByZWY6ICdVc2VyJ1xuICAgIH1cbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWxzLlJldmlldyB8fCBtb25nb29zZS5tb2RlbCgnUmV2aWV3JywgcmV2aWV3U2NoZW1hKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiU2NoZW1hIiwicmV2aWV3U2NoZW1hIiwiYm9keSIsIlN0cmluZyIsInJhdGluZyIsIk51bWJlciIsImF1dGhvciIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIlJldmlldyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/review.js\n");

/***/ }),

/***/ "(rsc)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst { Schema } = mongoose;\n// const Schema = mongoose.Schema;\nconst passportLocalMongoose = __webpack_require__(/*! passport-local-mongoose */ \"(rsc)/./node_modules/passport-local-mongoose/index.js\");\nconst UserSchema = new Schema({\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    avatar: {\n        url: String,\n        filename: String\n    }\n});\nUserSchema.plugin(passportLocalMongoose);\nmodule.exports = mongoose.models.User || mongoose.model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdXNlci5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsV0FBV0MsbUJBQU9BLENBQUM7QUFDekIsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0Y7QUFDbkIsa0NBQWtDO0FBQ2xDLE1BQU1HLHdCQUF3QkYsbUJBQU9BLENBQUM7QUFFdEMsTUFBTUcsYUFBYSxJQUFJRixPQUFPO0lBQzFCRyxPQUFPO1FBQ0hDLE1BQU1DO1FBQ05DLFVBQVU7UUFDVkMsUUFBUTtJQUNaO0lBQ0FDLFFBQVE7UUFDSkMsS0FBS0o7UUFDTEssVUFBVUw7SUFDZDtBQUNKO0FBRUFILFdBQVdTLE1BQU0sQ0FBQ1Y7QUFFbEJXLE9BQU9DLE9BQU8sR0FBR2YsU0FBU2dCLE1BQU0sQ0FBQ0MsSUFBSSxJQUFJakIsU0FBU2tCLEtBQUssQ0FBQyxRQUFRZCIsInNvdXJjZXMiOlsid2VicGFjazovL3llbHBjYW1wLy4vbW9kZWxzL3VzZXIuanM/NjU5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2U7XG4vLyBjb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XG5jb25zdCBwYXNzcG9ydExvY2FsTW9uZ29vc2UgPSByZXF1aXJlKCdwYXNzcG9ydC1sb2NhbC1tb25nb29zZScpO1xuXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgZW1haWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgdW5pcXVlOiB0cnVlXG4gICAgfSxcbiAgICBhdmF0YXI6IHtcbiAgICAgICAgdXJsOiBTdHJpbmcsXG4gICAgICAgIGZpbGVuYW1lOiBTdHJpbmdcbiAgICB9XG59KTtcblxuVXNlclNjaGVtYS5wbHVnaW4ocGFzc3BvcnRMb2NhbE1vbmdvb3NlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbCgnVXNlcicsIFVzZXJTY2hlbWEpOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJTY2hlbWEiLCJwYXNzcG9ydExvY2FsTW9uZ29vc2UiLCJVc2VyU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJhdmF0YXIiLCJ1cmwiLCJmaWxlbmFtZSIsInBsdWdpbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/@babel","vendor-chunks/passport-local-mongoose","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/passport-local","vendor-chunks/@panva","vendor-chunks/oidc-token-hash","vendor-chunks/generaterr","vendor-chunks/scmp","vendor-chunks/passport-strategy"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fstats%2Froute&page=%2Fapi%2Fusers%2Fstats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fstats%2Froute.js&appDir=C%3A%5CUsers%5Cutsav%5CCampgroundMaster%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cutsav%5CCampgroundMaster&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();