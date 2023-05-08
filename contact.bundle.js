"use strict";
(self["webpackChunkrestuarant_page"] = self["webpackChunkrestuarant_page"] || []).push([["contact"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });


function contact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const parag1 = document.createElement('p');
    parag1.textContent = '📞 123 456 789';

    const parag2 = document.createElement('p');
    parag2.textContent = '🏠 TraRags Boulevard 42, Dunzledorf, Bayern, Deutschland';

    const img = document.createElement('img');
    img.src = 'images/map-location.png';
    img.setAttribute('class', 'map-pic');

    content.append(parag1, parag2, img);
}   

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7Y29udGFjdH07XG5cbmZ1bmN0aW9uIGNvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IHBhcmFnMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhZzEudGV4dENvbnRlbnQgPSAn8J+TniAxMjMgNDU2IDc4OSc7XG5cbiAgICBjb25zdCBwYXJhZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYWcyLnRleHRDb250ZW50ID0gJ/Cfj6AgVHJhUmFncyBCb3VsZXZhcmQgNDIsIER1bnpsZWRvcmYsIEJheWVybiwgRGV1dHNjaGxhbmQnO1xuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNyYyA9ICdpbWFnZXMvbWFwLWxvY2F0aW9uLnBuZyc7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWFwLXBpYycpO1xuXG4gICAgY29udGVudC5hcHBlbmQocGFyYWcxLCBwYXJhZzIsIGltZyk7XG59ICAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9