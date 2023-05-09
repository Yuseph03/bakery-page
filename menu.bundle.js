"use strict";
(self["webpackChunkrestuarant_page"] = self["webpackChunkrestuarant_page"] || []).push([["menu"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _menuPic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuPic.js */ "./src/menuPic.js");

 

function menu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuDesc = ['Rye Bread', 'Loaf Bread', 'Croissant', 'Baguette', 'Pretzel', 'Classic Pain'];
    

    const menu = document.createElement('div');
    menu.setAttribute('class', 'menu');

    for(let i = 0; i < 6; i++){
        const menuItem = document.createElement('div');
        menuItem.setAttribute('class', 'menu-item');

        const img = new Image();
        img.src = _menuPic_js__WEBPACK_IMPORTED_MODULE_0__["default"][i];

        const parag = document.createElement('p');
        parag.textContent = menuDesc[i];

        menuItem.append(img, parag);
        menu.append(menuItem);
    }
    content.append(menu);
}



/***/ }),

/***/ "./src/menuPic.js":
/*!************************!*\
  !*** ./src/menuPic.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_menu_menu_0_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menu/menu (0).png */ "./src/images/menu/menu (0).png");
/* harmony import */ var _images_menu_menu_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/menu/menu (1).png */ "./src/images/menu/menu (1).png");
/* harmony import */ var _images_menu_menu_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/menu/menu (2).png */ "./src/images/menu/menu (2).png");
/* harmony import */ var _images_menu_menu_3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/menu/menu (3).png */ "./src/images/menu/menu (3).png");
/* harmony import */ var _images_menu_menu_4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/menu/menu (4).png */ "./src/images/menu/menu (4).png");
/* harmony import */ var _images_menu_menu_5_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/menu/menu (5).png */ "./src/images/menu/menu (5).png");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    _images_menu_menu_0_png__WEBPACK_IMPORTED_MODULE_0__,
    _images_menu_menu_1_png__WEBPACK_IMPORTED_MODULE_1__,
    _images_menu_menu_2_png__WEBPACK_IMPORTED_MODULE_2__,
    _images_menu_menu_3_png__WEBPACK_IMPORTED_MODULE_3__,
    _images_menu_menu_4_png__WEBPACK_IMPORTED_MODULE_4__,
    _images_menu_menu_5_png__WEBPACK_IMPORTED_MODULE_5__
]);

/***/ }),

/***/ "./src/images/menu/menu (0).png":
/*!**************************************!*\
  !*** ./src/images/menu/menu (0).png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68b31a088c92393044d0.png";

/***/ }),

/***/ "./src/images/menu/menu (1).png":
/*!**************************************!*\
  !*** ./src/images/menu/menu (1).png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9cf78177e4686e8b9715.png";

/***/ }),

/***/ "./src/images/menu/menu (2).png":
/*!**************************************!*\
  !*** ./src/images/menu/menu (2).png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7d674a9c3e5c0e75d11.png";

/***/ }),

/***/ "./src/images/menu/menu (3).png":
/*!**************************************!*\
  !*** ./src/images/menu/menu (3).png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b8bdd0e571b71b825d4.png";

/***/ }),

/***/ "./src/images/menu/menu (4).png":
/*!**************************************!*\
  !*** ./src/images/menu/menu (4).png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4d6a988533ca542bea1.png";

/***/ }),

/***/ "./src/images/menu/menu (5).png":
/*!**************************************!*\
  !*** ./src/images/menu/menu (5).png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bff43e14f690afeb9ec4.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBYztBQUNxQjs7QUFFbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLG1EQUFPOztBQUV6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQjhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFOUMsaUVBQWM7QUFDZCxJQUFJLG9EQUFLO0FBQ1QsSUFBSSxvREFBSztBQUNULElBQUksb0RBQUs7QUFDVCxJQUFJLG9EQUFLO0FBQ1QsSUFBSSxvREFBSztBQUNULElBQUksb0RBQUs7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9tZW51UGljLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7bWVudX07XG5pbXBvcnQgbWVudVBpYyBmcm9tIFwiLi9tZW51UGljLmpzXCI7IFxuXG5mdW5jdGlvbiBtZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBtZW51RGVzYyA9IFsnUnllIEJyZWFkJywgJ0xvYWYgQnJlYWQnLCAnQ3JvaXNzYW50JywgJ0JhZ3VldHRlJywgJ1ByZXR6ZWwnLCAnQ2xhc3NpYyBQYWluJ107XG4gICAgXG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUnKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA2OyBpKyspe1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbScpO1xuXG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuc3JjID0gbWVudVBpY1tpXTtcblxuICAgICAgICBjb25zdCBwYXJhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYWcudGV4dENvbnRlbnQgPSBtZW51RGVzY1tpXTtcblxuICAgICAgICBtZW51SXRlbS5hcHBlbmQoaW1nLCBwYXJhZyk7XG4gICAgICAgIG1lbnUuYXBwZW5kKG1lbnVJdGVtKTtcbiAgICB9XG4gICAgY29udGVudC5hcHBlbmQobWVudSk7XG59XG5cbiIsImltcG9ydCBtZW51MCBmcm9tICcuL2ltYWdlcy9tZW51L21lbnUgKDApLnBuZydcbmltcG9ydCBtZW51MSBmcm9tICcuL2ltYWdlcy9tZW51L21lbnUgKDEpLnBuZydcbmltcG9ydCBtZW51MiBmcm9tICcuL2ltYWdlcy9tZW51L21lbnUgKDIpLnBuZydcbmltcG9ydCBtZW51MyBmcm9tICcuL2ltYWdlcy9tZW51L21lbnUgKDMpLnBuZydcbmltcG9ydCBtZW51NCBmcm9tICcuL2ltYWdlcy9tZW51L21lbnUgKDQpLnBuZydcbmltcG9ydCBtZW51NSBmcm9tICcuL2ltYWdlcy9tZW51L21lbnUgKDUpLnBuZydcblxuZXhwb3J0IGRlZmF1bHRbXG4gICAgbWVudTAsXG4gICAgbWVudTEsXG4gICAgbWVudTIsXG4gICAgbWVudTMsXG4gICAgbWVudTQsXG4gICAgbWVudTVcbl0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=