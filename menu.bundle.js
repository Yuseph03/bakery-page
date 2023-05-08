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


function menu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuDesc = ['Rye Bread', 'Loaf Bread', 'Croissant', 'Baguette', 'Pretzel', 'Classic Pain'];
    

    const menu = document.createElement('div');
    menu.setAttribute('class', 'menu');

    for(i = 0; i < 6; i++){
        const menuItem = document.createElement('div');
        menuItem.setAttribute('class', 'menu-item');

        const img = document.createElement('img');
        img.src = 'images/menu/menu ('+ i +').png';

        const parag = document.createElement('p');
        parag.textContent = menuDesc[i];

        menuItem.append(img, parag);
        menu.append(menuItem);
    }
    content.append(menu);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFjOztBQUVkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge21lbnV9O1xuXG5mdW5jdGlvbiBtZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBtZW51RGVzYyA9IFsnUnllIEJyZWFkJywgJ0xvYWYgQnJlYWQnLCAnQ3JvaXNzYW50JywgJ0JhZ3VldHRlJywgJ1ByZXR6ZWwnLCAnQ2xhc3NpYyBQYWluJ107XG4gICAgXG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUnKTtcblxuICAgIGZvcihpID0gMDsgaSA8IDY7IGkrKyl7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG5cbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZy5zcmMgPSAnaW1hZ2VzL21lbnUvbWVudSAoJysgaSArJykucG5nJztcblxuICAgICAgICBjb25zdCBwYXJhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYWcudGV4dENvbnRlbnQgPSBtZW51RGVzY1tpXTtcblxuICAgICAgICBtZW51SXRlbS5hcHBlbmQoaW1nLCBwYXJhZyk7XG4gICAgICAgIG1lbnUuYXBwZW5kKG1lbnVJdGVtKTtcbiAgICB9XG4gICAgY29udGVudC5hcHBlbmQobWVudSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9