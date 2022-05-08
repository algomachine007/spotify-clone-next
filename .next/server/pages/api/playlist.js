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
exports.id = "pages/api/playlist";
exports.ids = ["pages/api/playlist"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateRoute\": () => (/* binding */ validateRoute),\n/* harmony export */   \"validateToken\": () => (/* binding */ validateToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prisma */ \"(api)/./lib/prisma.ts\");\n\n\nconst validateRoute = handler => {\n  return async (req, res) => {\n    const token = req.cookies.TRAX_ACCESS_TOKEN;\n\n    if (token) {\n      let user;\n\n      try {\n        const {\n          id\n        } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, 'hello');\n        user = await _prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n          where: {\n            id\n          }\n        });\n\n        if (!user) {\n          throw new Error('Not real user');\n        }\n      } catch (error) {\n        res.status(401);\n        res.json({\n          error: 'Not Authorizied'\n        });\n        return;\n      }\n\n      return handler(req, res, user);\n    }\n\n    res.status(401);\n    res.json({\n      error: 'Not Authorizied'\n    });\n  };\n};\nconst validateToken = token => {\n  const user = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, 'hello');\n  return user;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7QUFFTyxNQUFNRSxhQUFhLEdBQUlDLE9BQUQsSUFBYTtBQUN4QyxTQUFPLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQzFELFVBQU1DLEtBQUssR0FBR0YsR0FBRyxDQUFDRyxPQUFKLENBQVlDLGlCQUExQjs7QUFFQSxRQUFJRixLQUFKLEVBQVc7QUFDVCxVQUFJRyxJQUFKOztBQUVBLFVBQUk7QUFDRixjQUFNO0FBQUVDLFVBQUFBO0FBQUYsWUFBU1YsMERBQUEsQ0FBV00sS0FBWCxFQUFrQixPQUFsQixDQUFmO0FBQ0FHLFFBQUFBLElBQUksR0FBRyxNQUFNUiwrREFBQSxDQUF1QjtBQUNsQ1ksVUFBQUEsS0FBSyxFQUFFO0FBQUVILFlBQUFBO0FBQUY7QUFEMkIsU0FBdkIsQ0FBYjs7QUFJQSxZQUFJLENBQUNELElBQUwsRUFBVztBQUNULGdCQUFNLElBQUlLLEtBQUosQ0FBVSxlQUFWLENBQU47QUFDRDtBQUNGLE9BVEQsQ0FTRSxPQUFPQyxLQUFQLEVBQWM7QUFDZFYsUUFBQUEsR0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWDtBQUNBWCxRQUFBQSxHQUFHLENBQUNZLElBQUosQ0FBUztBQUFFRixVQUFBQSxLQUFLLEVBQUU7QUFBVCxTQUFUO0FBQ0E7QUFDRDs7QUFFRCxhQUFPWixPQUFPLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXSSxJQUFYLENBQWQ7QUFDRDs7QUFFREosSUFBQUEsR0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWDtBQUNBWCxJQUFBQSxHQUFHLENBQUNZLElBQUosQ0FBUztBQUFFRixNQUFBQSxLQUFLLEVBQUU7QUFBVCxLQUFUO0FBQ0QsR0ExQkQ7QUEyQkQsQ0E1Qk07QUE4QkEsTUFBTUcsYUFBYSxHQUFJWixLQUFELElBQVc7QUFDdEMsUUFBTUcsSUFBSSxHQUFHVCwwREFBQSxDQUFXTSxLQUFYLEVBQWtCLE9BQWxCLENBQWI7QUFDQSxTQUFPRyxJQUFQO0FBQ0QsQ0FITSIsInNvdXJjZXMiOlsid2VicGFjazovL215YXBwLy4vbGliL2F1dGgudHM/YmY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHByaXNtYSBmcm9tICcuL3ByaXNtYSdcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlUm91dGUgPSAoaGFuZGxlcikgPT4ge1xuICByZXR1cm4gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSByZXEuY29va2llcy5UUkFYX0FDQ0VTU19UT0tFTlxuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBsZXQgdXNlclxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBqd3QudmVyaWZ5KHRva2VuLCAnaGVsbG8nKVxuICAgICAgICB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCByZWFsIHVzZXInKVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXMuc3RhdHVzKDQwMSlcbiAgICAgICAgcmVzLmpzb24oeyBlcnJvcjogJ05vdCBBdXRob3JpemllZCcgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzLCB1c2VyKVxuICAgIH1cblxuICAgIHJlcy5zdGF0dXMoNDAxKVxuICAgIHJlcy5qc29uKHsgZXJyb3I6ICdOb3QgQXV0aG9yaXppZWQnIH0pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlVG9rZW4gPSAodG9rZW4pID0+IHtcbiAgY29uc3QgdXNlciA9IGp3dC52ZXJpZnkodG9rZW4sICdoZWxsbycpXG4gIHJldHVybiB1c2VyXG59XG4iXSwibmFtZXMiOlsiand0IiwicHJpc21hIiwidmFsaWRhdGVSb3V0ZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ0b2tlbiIsImNvb2tpZXMiLCJUUkFYX0FDQ0VTU19UT0tFTiIsInVzZXIiLCJpZCIsInZlcmlmeSIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsIkVycm9yIiwiZXJyb3IiLCJzdGF0dXMiLCJqc29uIiwidmFsaWRhdGVUb2tlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/auth.ts\n");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsaUVBQWUsSUFBSUEsd0RBQUosRUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL215YXBwLy4vbGliL3ByaXNtYS50cz85ODIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJpc21hQ2xpZW50KClcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/playlist.ts":
/*!*******************************!*\
  !*** ./pages/api/playlist.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/auth */ \"(api)/./lib/auth.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.validateRoute)(async (req, res, user) => {\n  const playlists = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].playlist.findMany({\n    where: {\n      userId: user.id\n    },\n    orderBy: {\n      name: 'asc'\n    }\n  });\n  res.json(playlists);\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGxheWxpc3QudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUVBLGlFQUFlQyx3REFBYSxDQUFDLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsS0FBMEI7QUFDckQsUUFBTUMsU0FBUyxHQUFHLE1BQU1MLHFFQUFBLENBQXlCO0FBQy9DUSxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsTUFBTSxFQUFFTCxJQUFJLENBQUNNO0FBRFIsS0FEd0M7QUFJL0NDLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxJQUFJLEVBQUU7QUFEQztBQUpzQyxHQUF6QixDQUF4QjtBQVNBVCxFQUFBQSxHQUFHLENBQUNVLElBQUosQ0FBU1IsU0FBVDtBQUNELENBWDJCLENBQTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlhcHAvLi9wYWdlcy9hcGkvcGxheWxpc3QudHM/MTg4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uL2xpYi9wcmlzbWEnXG5pbXBvcnQgeyB2YWxpZGF0ZVJvdXRlIH0gZnJvbSAnLi4vLi4vbGliL2F1dGgnXG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlUm91dGUoYXN5bmMgKHJlcSwgcmVzLCB1c2VyKSA9PiB7XG4gIGNvbnN0IHBsYXlsaXN0cyA9IGF3YWl0IHByaXNtYS5wbGF5bGlzdC5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICB9LFxuICAgIG9yZGVyQnk6IHtcbiAgICAgIG5hbWU6ICdhc2MnLFxuICAgIH0sXG4gIH0pXG5cbiAgcmVzLmpzb24ocGxheWxpc3RzKVxufSlcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJ2YWxpZGF0ZVJvdXRlIiwicmVxIiwicmVzIiwidXNlciIsInBsYXlsaXN0cyIsInBsYXlsaXN0IiwiZmluZE1hbnkiLCJ3aGVyZSIsInVzZXJJZCIsImlkIiwib3JkZXJCeSIsIm5hbWUiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/playlist.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/playlist.ts"));
module.exports = __webpack_exports__;

})();