"use strict";
(self["webpackChunkbakery_page"] = self["webpackChunkbakery_page"] || []).push([["contact"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _images_map_location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/map-location.png */ "./src/images/map-location.png");



function contact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const parag1 = document.createElement('p');
    parag1.textContent = '📞 123 456 789';

    const parag2 = document.createElement('p');
    parag2.textContent = 'TraRags Boulevard 42, Dunzledorf, Bayern, Deutschland';

    const img = new Image();
    img.src = _images_map_location_png__WEBPACK_IMPORTED_MODULE_0__;
    img.setAttribute('class', 'map-pic');

    content.append(parag1, parag2, img);
}   

/***/ }),

/***/ "./src/images/map-location.png":
/*!*************************************!*\
  !*** ./src/images/map-location.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b0b81e1e37ffc0fc84b.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBaUI7QUFDNkI7O0FBRTlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLHFEQUFNO0FBQ3BCOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWtlcnktcGFnZS8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7Y29udGFjdH07XG5pbXBvcnQgbWFwTG9jIGZyb20gJy4vaW1hZ2VzL21hcC1sb2NhdGlvbi5wbmcnXG5cbmZ1bmN0aW9uIGNvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IHBhcmFnMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhZzEudGV4dENvbnRlbnQgPSAn8J+TniAxMjMgNDU2IDc4OSc7XG5cbiAgICBjb25zdCBwYXJhZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYWcyLnRleHRDb250ZW50ID0gJ1RyYVJhZ3MgQm91bGV2YXJkIDQyLCBEdW56bGVkb3JmLCBCYXllcm4sIERldXRzY2hsYW5kJztcblxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBtYXBMb2M7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWFwLXBpYycpO1xuXG4gICAgY29udGVudC5hcHBlbmQocGFyYWcxLCBwYXJhZzIsIGltZyk7XG59ICAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9