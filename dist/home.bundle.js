"use strict";
(self["webpackChunkbakery_page"] = self["webpackChunkbakery_page"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _images_artur_rutkowski_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/artur-rutkowski-unsplash.jpg */ "./src/images/artur-rutkowski-unsplash.jpg");



function home() {
    const content = document.getElementById('content')
    content.innerHTML = '';

    const parag1 = document.createElement('p');
    parag1.textContent = 'The authentic central European experience.';
    
    const img = new Image();
    img.src = _images_artur_rutkowski_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__;
    img.setAttribute('id', 'baker');
    
    const parag2 = document.createElement('p');
    parag2.textContent = 'Order online or visit our countryside bakery!';
    
    content.append(parag1, img, parag2);
}

/***/ }),

/***/ "./src/images/artur-rutkowski-unsplash.jpg":
/*!*************************************************!*\
  !*** ./src/images/artur-rutkowski-unsplash.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "547ee42794d48395ed51.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBYztBQUM4Qzs7QUFFNUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxpRUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jha2VyeS1wYWdlLy4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtob21lfTtcbmltcG9ydCBicmVhZFBpYyBmcm9tICcuL2ltYWdlcy9hcnR1ci1ydXRrb3dza2ktdW5zcGxhc2guanBnJ1xuXG5mdW5jdGlvbiBob21lKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IHBhcmFnMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhZzEudGV4dENvbnRlbnQgPSAnVGhlIGF1dGhlbnRpYyBjZW50cmFsIEV1cm9wZWFuIGV4cGVyaWVuY2UuJztcbiAgICBcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gYnJlYWRQaWM7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmFrZXInKTtcbiAgICBcbiAgICBjb25zdCBwYXJhZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYWcyLnRleHRDb250ZW50ID0gJ09yZGVyIG9ubGluZSBvciB2aXNpdCBvdXIgY291bnRyeXNpZGUgYmFrZXJ5ISc7XG4gICAgXG4gICAgY29udGVudC5hcHBlbmQocGFyYWcxLCBpbWcsIHBhcmFnMik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9