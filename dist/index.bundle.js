"use strict";
(self["webpackChunkrestuarant_page"] = self["webpackChunkrestuarant_page"] || []).push([["index"],{

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

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });


function home() {
    const content = document.getElementById('content')
    content.innerHTML = '';

    const parag1 = document.createElement('p');
    parag1.textContent = 'The authentic central European experience.';
    
    const img = document.createElement('img');
    img.src = 'images/artur-rutkowski-unsplash.jpg';
    img.setAttribute('id', 'baker');
    
    const parag2 = document.createElement('p');
    parag2.textContent = 'Order online or visit our countryside bakery!';
    
    content.append(parag1, img, parag2);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




header();
(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)();
footer();

// HEADER
function header() {
    const content = document.getElementById('content')

    const head = document.createElement('div');
    head.setAttribute('id','head');
    
    const mainLogo = document.createElement('nav');
    mainLogo.setAttribute('id', 'main-logo');
    mainLogo.textContent = 'Ludwig\'s';
    
    const headNavbar = document.createElement('div');
    headNavbar.setAttribute('class', 'head-navbar');
    
    const unorderedL = document.createElement('ul');
    
    const homeLi = document.createElement('li');
    homeLi.setAttribute('id', 'homeBtn');
    homeLi.textContent = 'Home';
    
    const menuLi = document.createElement('li');
    menuLi.setAttribute('id', 'menuBtn');
    menuLi.textContent = 'Menu';
    
    const contactLi = document.createElement('li');
    contactLi.setAttribute('id', 'contactBtn');
    contactLi.textContent = 'Contact';
    
    head.append(mainLogo, headNavbar);
    headNavbar.appendChild(unorderedL);
    unorderedL.append(homeLi, menuLi, contactLi);
    content.before(head);
}

// TAB SWITCH LOGIC
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');

homeBtn.addEventListener('click', _home_js__WEBPACK_IMPORTED_MODULE_0__.home);
menuBtn.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_1__.menu);
contactBtn.addEventListener('click', _contact_js__WEBPACK_IMPORTED_MODULE_2__.contact);

// FOOTER
function footer() {
    const foot = document.createElement('footer')
    foot.setAttribute('class', 'footer')

    const footP = document.createElement('p')
    footP.textContent = 'Copyright '+new Date().getFullYear()+' © Yuseph03'

    const gitLink = document.createElement('a')
    gitLink.href = "https://github.com/Yuseph03"
    const gitLogo = document.createElement('i')
    gitLogo.setAttribute('class', 'fab fa-github')

    gitLink.append(gitLogo);
    foot.append(footP, gitLink);
    document.body.append(foot);
}

/***/ }),

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakJjOztBQUVkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakJpQztBQUNBO0FBQ007O0FBRXZDO0FBQ0EsOENBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MsMENBQUk7QUFDdEMsa0NBQWtDLDBDQUFJO0FBQ3RDLHFDQUFxQyxnREFBTzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuRWM7O0FBRWQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLE9BQU87QUFDdEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge2NvbnRhY3R9O1xuXG5mdW5jdGlvbiBjb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBwYXJhZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYWcxLnRleHRDb250ZW50ID0gJ/Cfk54gMTIzIDQ1NiA3ODknO1xuXG4gICAgY29uc3QgcGFyYWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmFnMi50ZXh0Q29udGVudCA9ICfwn4+gIFRyYVJhZ3MgQm91bGV2YXJkIDQyLCBEdW56bGVkb3JmLCBCYXllcm4sIERldXRzY2hsYW5kJztcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSAnaW1hZ2VzL21hcC1sb2NhdGlvbi5wbmcnO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21hcC1waWMnKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKHBhcmFnMSwgcGFyYWcyLCBpbWcpO1xufSAgICIsImV4cG9ydCB7aG9tZX07XG5cbmZ1bmN0aW9uIGhvbWUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgcGFyYWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmFnMS50ZXh0Q29udGVudCA9ICdUaGUgYXV0aGVudGljIGNlbnRyYWwgRXVyb3BlYW4gZXhwZXJpZW5jZS4nO1xuICAgIFxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSAnaW1hZ2VzL2FydHVyLXJ1dGtvd3NraS11bnNwbGFzaC5qcGcnO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Jha2VyJyk7XG4gICAgXG4gICAgY29uc3QgcGFyYWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmFnMi50ZXh0Q29udGVudCA9ICdPcmRlciBvbmxpbmUgb3IgdmlzaXQgb3VyIGNvdW50cnlzaWRlIGJha2VyeSEnO1xuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kKHBhcmFnMSwgaW1nLCBwYXJhZzIpO1xufSIsImltcG9ydCB7IGhvbWUgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IHsgY29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcblxuaGVhZGVyKCk7XG5ob21lKCk7XG5mb290ZXIoKTtcblxuLy8gSEVBREVSXG5mdW5jdGlvbiBoZWFkZXIoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcblxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkLnNldEF0dHJpYnV0ZSgnaWQnLCdoZWFkJyk7XG4gICAgXG4gICAgY29uc3QgbWFpbkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBtYWluTG9nby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4tbG9nbycpO1xuICAgIG1haW5Mb2dvLnRleHRDb250ZW50ID0gJ0x1ZHdpZ1xcJ3MnO1xuICAgIFxuICAgIGNvbnN0IGhlYWROYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkTmF2YmFyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhZC1uYXZiYXInKTtcbiAgICBcbiAgICBjb25zdCB1bm9yZGVyZWRMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBcbiAgICBjb25zdCBob21lTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGhvbWVMaS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWVCdG4nKTtcbiAgICBob21lTGkudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgXG4gICAgY29uc3QgbWVudUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBtZW51TGkuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51QnRuJyk7XG4gICAgbWVudUxpLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIFxuICAgIGNvbnN0IGNvbnRhY3RMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29udGFjdExpLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdEJ0bicpO1xuICAgIGNvbnRhY3RMaS50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICBcbiAgICBoZWFkLmFwcGVuZChtYWluTG9nbywgaGVhZE5hdmJhcik7XG4gICAgaGVhZE5hdmJhci5hcHBlbmRDaGlsZCh1bm9yZGVyZWRMKTtcbiAgICB1bm9yZGVyZWRMLmFwcGVuZChob21lTGksIG1lbnVMaSwgY29udGFjdExpKTtcbiAgICBjb250ZW50LmJlZm9yZShoZWFkKTtcbn1cblxuLy8gVEFCIFNXSVRDSCBMT0dJQ1xuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lQnRuJyk7XG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVCdG4nKTtcbmNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEJ0bicpO1xuXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaG9tZSk7XG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudSk7XG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udGFjdCk7XG5cbi8vIEZPT1RFUlxuZnVuY3Rpb24gZm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICAgIGZvb3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb290ZXInKVxuXG4gICAgY29uc3QgZm9vdFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBmb290UC50ZXh0Q29udGVudCA9ICdDb3B5cmlnaHQgJytuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkrJyDCqSBZdXNlcGgwMydcblxuICAgIGNvbnN0IGdpdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBnaXRMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9ZdXNlcGgwM1wiXG4gICAgY29uc3QgZ2l0TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgIGdpdExvZ28uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYWIgZmEtZ2l0aHViJylcblxuICAgIGdpdExpbmsuYXBwZW5kKGdpdExvZ28pO1xuICAgIGZvb3QuYXBwZW5kKGZvb3RQLCBnaXRMaW5rKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChmb290KTtcbn0iLCJleHBvcnQge21lbnV9O1xuXG5mdW5jdGlvbiBtZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBtZW51RGVzYyA9IFsnUnllIEJyZWFkJywgJ0xvYWYgQnJlYWQnLCAnQ3JvaXNzYW50JywgJ0JhZ3VldHRlJywgJ1ByZXR6ZWwnLCAnQ2xhc3NpYyBQYWluJ107XG4gICAgXG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUnKTtcblxuICAgIGZvcihpID0gMDsgaSA8IDY7IGkrKyl7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG5cbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZy5zcmMgPSAnaW1hZ2VzL21lbnUvbWVudSAoJysgaSArJykucG5nJztcblxuICAgICAgICBjb25zdCBwYXJhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYWcudGV4dENvbnRlbnQgPSBtZW51RGVzY1tpXTtcblxuICAgICAgICBtZW51SXRlbS5hcHBlbmQoaW1nLCBwYXJhZyk7XG4gICAgICAgIG1lbnUuYXBwZW5kKG1lbnVJdGVtKTtcbiAgICB9XG4gICAgY29udGVudC5hcHBlbmQobWVudSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9