"use strict";
(self["webpackChunkbakery_page"] = self["webpackChunkbakery_page"] || []).push([["menu"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBYztBQUNxQjs7QUFFbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLG1EQUFPOztBQUV6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQjhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFOUMsaUVBQWM7QUFDZCxJQUFJLG9EQUFLO0FBQ1QsSUFBSSxvREFBSztBQUNULElBQUksb0RBQUs7QUFDVCxJQUFJLG9EQUFLO0FBQ1QsSUFBSSxvREFBSztBQUNULElBQUksb0RBQUs7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2Jha2VyeS1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vYmFrZXJ5LXBhZ2UvLi9zcmMvbWVudVBpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge21lbnV9O1xuaW1wb3J0IG1lbnVQaWMgZnJvbSBcIi4vbWVudVBpYy5qc1wiOyBcblxuZnVuY3Rpb24gbWVudSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgbWVudURlc2MgPSBbJ1J5ZSBCcmVhZCcsICdMb2FmIEJyZWFkJywgJ0Nyb2lzc2FudCcsICdCYWd1ZXR0ZScsICdQcmV0emVsJywgJ0NsYXNzaWMgUGFpbiddO1xuICAgIFxuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51Jyk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNjsgaSsrKXtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudUl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcblxuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLnNyYyA9IG1lbnVQaWNbaV07XG5cbiAgICAgICAgY29uc3QgcGFyYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmFnLnRleHRDb250ZW50ID0gbWVudURlc2NbaV07XG5cbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kKGltZywgcGFyYWcpO1xuICAgICAgICBtZW51LmFwcGVuZChtZW51SXRlbSk7XG4gICAgfVxuICAgIGNvbnRlbnQuYXBwZW5kKG1lbnUpO1xufVxuXG4iLCJpbXBvcnQgbWVudTAgZnJvbSAnLi9pbWFnZXMvbWVudS9tZW51ICgwKS5wbmcnXG5pbXBvcnQgbWVudTEgZnJvbSAnLi9pbWFnZXMvbWVudS9tZW51ICgxKS5wbmcnXG5pbXBvcnQgbWVudTIgZnJvbSAnLi9pbWFnZXMvbWVudS9tZW51ICgyKS5wbmcnXG5pbXBvcnQgbWVudTMgZnJvbSAnLi9pbWFnZXMvbWVudS9tZW51ICgzKS5wbmcnXG5pbXBvcnQgbWVudTQgZnJvbSAnLi9pbWFnZXMvbWVudS9tZW51ICg0KS5wbmcnXG5pbXBvcnQgbWVudTUgZnJvbSAnLi9pbWFnZXMvbWVudS9tZW51ICg1KS5wbmcnXG5cbmV4cG9ydCBkZWZhdWx0W1xuICAgIG1lbnUwLFxuICAgIG1lbnUxLFxuICAgIG1lbnUyLFxuICAgIG1lbnUzLFxuICAgIG1lbnU0LFxuICAgIG1lbnU1XG5dIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9