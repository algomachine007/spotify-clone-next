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
exports.id = "pages/api/signin";
exports.ids = ["pages/api/signin"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsaUVBQWUsSUFBSUEsd0RBQUosRUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL215YXBwLy4vbGliL3ByaXNtYS50cz85ODIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJpc21hQ2xpZW50KClcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/signin.ts":
/*!*****************************!*\
  !*** ./pages/api/signin.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  const {\n    email,\n    password\n  } = req.body;\n  const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].user.findUnique({\n    where: {\n      email\n    }\n  });\n\n  if (user && bcrypt__WEBPACK_IMPORTED_MODULE_0___default().compareSync(password, user.password)) {\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n      id: user.id,\n      email: user.email,\n      time: Date.now()\n    }, 'hello', {\n      expiresIn: '8h'\n    });\n    res.setHeader('Set-Cookie', cookie__WEBPACK_IMPORTED_MODULE_2___default().serialize('TRAX_ACCESS_TOKEN', token, {\n      httpOnly: true,\n      maxAge: 8 * 60 * 60,\n      path: '/',\n      sameSite: 'lax',\n      secure: false\n    }));\n    res.json(user);\n  } else {\n    res.status(401);\n    res.json({\n      error: 'Email or Password is wrong'\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnbmluLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQSxpRUFBZSxPQUFPSSxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtBQUNsRSxRQUFNO0FBQUVDLElBQUFBLEtBQUY7QUFBU0MsSUFBQUE7QUFBVCxNQUFzQkgsR0FBRyxDQUFDSSxJQUFoQztBQUVBLFFBQU1DLElBQUksR0FBRyxNQUFNTixtRUFBQSxDQUF1QjtBQUN4Q1EsSUFBQUEsS0FBSyxFQUFFO0FBQ0xMLE1BQUFBO0FBREs7QUFEaUMsR0FBdkIsQ0FBbkI7O0FBTUEsTUFBSUcsSUFBSSxJQUFJVCx5REFBQSxDQUFtQk8sUUFBbkIsRUFBNkJFLElBQUksQ0FBQ0YsUUFBbEMsQ0FBWixFQUF5RDtBQUN2RCxVQUFNTSxLQUFLLEdBQUdaLHdEQUFBLENBQ1o7QUFDRWMsTUFBQUEsRUFBRSxFQUFFTixJQUFJLENBQUNNLEVBRFg7QUFFRVQsTUFBQUEsS0FBSyxFQUFFRyxJQUFJLENBQUNILEtBRmQ7QUFHRVUsTUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLEdBQUw7QUFIUixLQURZLEVBTVosT0FOWSxFQU9aO0FBQ0VDLE1BQUFBLFNBQVMsRUFBRTtBQURiLEtBUFksQ0FBZDtBQVlBZCxJQUFBQSxHQUFHLENBQUNlLFNBQUosQ0FDRSxZQURGLEVBRUVsQix1REFBQSxDQUFpQixtQkFBakIsRUFBc0NXLEtBQXRDLEVBQTZDO0FBQzNDUyxNQUFBQSxRQUFRLEVBQUUsSUFEaUM7QUFFM0NDLE1BQUFBLE1BQU0sRUFBRSxJQUFJLEVBQUosR0FBUyxFQUYwQjtBQUczQ0MsTUFBQUEsSUFBSSxFQUFFLEdBSHFDO0FBSTNDQyxNQUFBQSxRQUFRLEVBQUUsS0FKaUM7QUFLM0NDLE1BQUFBLE1BQU07QUFMcUMsS0FBN0MsQ0FGRjtBQVdBckIsSUFBQUEsR0FBRyxDQUFDc0IsSUFBSixDQUFTbEIsSUFBVDtBQUNELEdBekJELE1BeUJPO0FBQ0xKLElBQUFBLEdBQUcsQ0FBQ3VCLE1BQUosQ0FBVyxHQUFYO0FBQ0F2QixJQUFBQSxHQUFHLENBQUNzQixJQUFKLENBQVM7QUFBRUUsTUFBQUEsS0FBSyxFQUFFO0FBQVQsS0FBVDtBQUNEO0FBQ0YsQ0F0Q0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWFwcC8uL3BhZ2VzL2FwaS9zaWduaW4udHM/MmE0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCdcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IGNvb2tpZSBmcm9tICdjb29raWUnXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vbGliL3ByaXNtYSdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keVxuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgZW1haWwsXG4gICAgfSxcbiAgfSlcblxuICBpZiAodXNlciAmJiBiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpKSB7XG4gICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihcbiAgICAgIHtcbiAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICB0aW1lOiBEYXRlLm5vdygpLFxuICAgICAgfSxcbiAgICAgICdoZWxsbycsXG4gICAgICB7XG4gICAgICAgIGV4cGlyZXNJbjogJzhoJyxcbiAgICAgIH1cbiAgICApXG5cbiAgICByZXMuc2V0SGVhZGVyKFxuICAgICAgJ1NldC1Db29raWUnLFxuICAgICAgY29va2llLnNlcmlhbGl6ZSgnVFJBWF9BQ0NFU1NfVE9LRU4nLCB0b2tlbiwge1xuICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgbWF4QWdlOiA4ICogNjAgKiA2MCxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICBzYW1lU2l0ZTogJ2xheCcsXG4gICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcbiAgICAgIH0pXG4gICAgKVxuXG4gICAgcmVzLmpzb24odXNlcilcbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDQwMSlcbiAgICByZXMuanNvbih7IGVycm9yOiAnRW1haWwgb3IgUGFzc3dvcmQgaXMgd3JvbmcnIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJiY3J5cHQiLCJqd3QiLCJjb29raWUiLCJwcmlzbWEiLCJyZXEiLCJyZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJjb21wYXJlU3luYyIsInRva2VuIiwic2lnbiIsImlkIiwidGltZSIsIkRhdGUiLCJub3ciLCJleHBpcmVzSW4iLCJzZXRIZWFkZXIiLCJzZXJpYWxpemUiLCJodHRwT25seSIsIm1heEFnZSIsInBhdGgiLCJzYW1lU2l0ZSIsInNlY3VyZSIsImpzb24iLCJzdGF0dXMiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/signin.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/signin.ts"));
module.exports = __webpack_exports__;

})();