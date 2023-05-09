"use strict";
(self["webpackChunkrestuarant_page"] = self["webpackChunkrestuarant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./CedarvilleCursive-Regular.ttf */ "./src/CedarvilleCursive-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! images/yuhan-du-unsplash.jpg */ "./src/images/yuhan-du-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Cursive';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf');\n  font-weight: 600;\n  font-style: italic;\n}\n\nhtml {\n  position: relative;\n  min-height: 100%;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-attachment: fixed;\n  background-size: cover;\n  margin: 0;\n  color: white;\n  font-family: 'Roboto', sans-serif;\n}\n\n#head {\n  display: flex;\n  background-color: #2b2d31ee;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 2em;\n  padding: 1em;\n  max-height: 180px;\n}\n\n#main-logo {\n  display: flex;\n  justify-content: center;\n  margin-top: 0.5em;\n  font-family: 'Cursive';\n\n  font-size: 75px;\n  font-weight: 550;\n  text-shadow:  4px 4px 3px #0098D4;\n}\n\n.head-navbar {\n  display: flex;\n  font-family: 'Cursive';\n  justify-content: space-around;\n}\n\nul {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  list-style: none;\n  height: min-content;\n\n  font-size: 35px;\n}\n\nul li {\n  margin-left: 0.5em;\n}\n\nul li:hover {\n  border-bottom: solid 3px #0098D4;\n  margin-top: -5px;\n}\n\n#content {\n  background-color: #36393eca;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: white;\n  margin: auto;\n  padding: 3em;\n  max-width: 450px;\n  border-radius: 10px;\n}\n\n#content p {\n  font-size: 23px;\n  font-weight: bold;\n}\n\n#baker {\n  width: 60%;\n  border-radius: 8em;\n}\n\n/* FOOTER */\n\n.footer {\n  background-color: #2b2d31ee;\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 1em;\n  height: 30px;\n  gap: 10px;\n  width: 100%;\n  font-size: 18px;\n}\n\n.fa-github {\n  width: 30px;\n  transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n \n/* SCROLLBAR */\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n::-webkit-scrollbar-track {\n  background: #000000; \n}\n \n::-webkit-scrollbar-thumb {\n  background: #2b2d31ee; \n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #1f1f1f; \n}\n\n\n/* MENU */\n\n.menu {\ndisplay: grid;\ngrid-template-columns: 1fr 1fr;\ngap: 1em;\n}\n\n.menu-item {\nbackground-color: #1b1d1fac;\npadding: 2em;\n}\n\n.menu-item:hover {\nbackground-color: #2c303578;\n}\n\n.menu-item p:nth-child(2) {\nfont-weight: bolder;\nfont-size: 19px;\n}\n\n.menu img {\nwidth: 50%;\n}\n\n/* CONTACT */\n\n.map-pic {\nwidth: 100%;\n}\n\n.text-column p {\ntext-align: left;\nfont-size: 19px;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,0DAAyD;EACzD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,yDAAmD;EACnD,4BAA4B;EAC5B,sBAAsB;EACtB,SAAS;EACT,YAAY;EACZ,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,sBAAsB;;EAEtB,eAAe;EACf,gBAAgB;EAChB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,eAAe;EACf,gBAAgB;EAChB,mBAAmB;;EAEnB,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gCAAgC;EAChC,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;EAC3B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA,WAAW;;AAEX;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,YAAY;EACZ,SAAS;EACT,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,sCAAsC;AACxC;;AAEA;EACE,oCAAoC;AACtC;;AAEA,cAAc;;AAEd;EACE,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;AACrB;;;AAGA,SAAS;;AAET;AACA,aAAa;AACb,8BAA8B;AAC9B,QAAQ;AACR;;AAEA;AACA,2BAA2B;AAC3B,YAAY;AACZ;;AAEA;AACA,2BAA2B;AAC3B;;AAEA;AACA,mBAAmB;AACnB,eAAe;AACf;;AAEA;AACA,UAAU;AACV;;AAEA,YAAY;;AAEZ;AACA,WAAW;AACX;;AAEA;AACA,gBAAgB;AAChB,eAAe;AACf","sourcesContent":["@font-face {\n  font-family: 'Cursive';\n  src: url('./CedarvilleCursive-Regular.ttf') format('ttf');\n  font-weight: 600;\n  font-style: italic;\n}\n\nhtml {\n  position: relative;\n  min-height: 100%;\n}\n\nbody {\n  background-image: url(images/yuhan-du-unsplash.jpg);\n  background-attachment: fixed;\n  background-size: cover;\n  margin: 0;\n  color: white;\n  font-family: 'Roboto', sans-serif;\n}\n\n#head {\n  display: flex;\n  background-color: #2b2d31ee;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 2em;\n  padding: 1em;\n  max-height: 180px;\n}\n\n#main-logo {\n  display: flex;\n  justify-content: center;\n  margin-top: 0.5em;\n  font-family: 'Cursive';\n\n  font-size: 75px;\n  font-weight: 550;\n  text-shadow:  4px 4px 3px #0098D4;\n}\n\n.head-navbar {\n  display: flex;\n  font-family: 'Cursive';\n  justify-content: space-around;\n}\n\nul {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  list-style: none;\n  height: min-content;\n\n  font-size: 35px;\n}\n\nul li {\n  margin-left: 0.5em;\n}\n\nul li:hover {\n  border-bottom: solid 3px #0098D4;\n  margin-top: -5px;\n}\n\n#content {\n  background-color: #36393eca;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: white;\n  margin: auto;\n  padding: 3em;\n  max-width: 450px;\n  border-radius: 10px;\n}\n\n#content p {\n  font-size: 23px;\n  font-weight: bold;\n}\n\n#baker {\n  width: 60%;\n  border-radius: 8em;\n}\n\n/* FOOTER */\n\n.footer {\n  background-color: #2b2d31ee;\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 1em;\n  height: 30px;\n  gap: 10px;\n  width: 100%;\n  font-size: 18px;\n}\n\n.fa-github {\n  width: 30px;\n  transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n \n/* SCROLLBAR */\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n::-webkit-scrollbar-track {\n  background: #000000; \n}\n \n::-webkit-scrollbar-thumb {\n  background: #2b2d31ee; \n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #1f1f1f; \n}\n\n\n/* MENU */\n\n.menu {\ndisplay: grid;\ngrid-template-columns: 1fr 1fr;\ngap: 1em;\n}\n\n.menu-item {\nbackground-color: #1b1d1fac;\npadding: 2em;\n}\n\n.menu-item:hover {\nbackground-color: #2c303578;\n}\n\n.menu-item p:nth-child(2) {\nfont-weight: bolder;\nfont-size: 19px;\n}\n\n.menu img {\nwidth: 50%;\n}\n\n/* CONTACT */\n\n.map-pic {\nwidth: 100%;\n}\n\n.text-column p {\ntext-align: left;\nfont-size: 19px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _images_github_mark_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/github-mark.svg */ "./src/images/github-mark.svg");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");






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
    const img = new Image();
    img.src = _images_github_mark_svg__WEBPACK_IMPORTED_MODULE_3__;
    img.setAttribute('class', 'fa-github');

    gitLogo.append(img)
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

/***/ "./src/CedarvilleCursive-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/CedarvilleCursive-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d038d9ba6f24f43a1fd2.ttf";

/***/ }),

/***/ "./src/images/artur-rutkowski-unsplash.jpg":
/*!*************************************************!*\
  !*** ./src/images/artur-rutkowski-unsplash.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "547ee42794d48395ed51.jpg";

/***/ }),

/***/ "./src/images/github-mark.svg":
/*!************************************!*\
  !*** ./src/images/github-mark.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97ed8e7eef60d61ca469.svg";

/***/ }),

/***/ "./src/images/map-location.png":
/*!*************************************!*\
  !*** ./src/images/map-location.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b0b81e1e37ffc0fc84b.png";

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

/***/ }),

/***/ "./src/images/yuhan-du-unsplash.jpg":
/*!******************************************!*\
  !*** ./src/images/yuhan-du-unsplash.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce2f541e87dafc3e54c1.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MsMENBQUk7QUFDdEMsa0NBQWtDLDBDQUFJO0FBQ3RDLHFDQUFxQyxnREFBTzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsb0RBQU07QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEVjO0FBQ3FCOztBQUVuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsbURBQU87O0FBRXpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCOEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU5QyxpRUFBYztBQUNkLElBQUksb0RBQUs7QUFDVCxJQUFJLG9EQUFLO0FBQ1QsSUFBSSxvREFBSztBQUNULElBQUksb0RBQUs7QUFDVCxJQUFJLG9EQUFLO0FBQ1QsSUFBSSxvREFBSztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL21lbnVQaWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQ2VkYXJ2aWxsZUN1cnNpdmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJpbWFnZXMveXVoYW4tZHUtdW5zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDdXJzaXZlJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3R0ZicpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuaHRtbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2hlYWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJkMzFlZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIG1heC1oZWlnaHQ6IDE4MHB4O1xcbn1cXG5cXG4jbWFpbi1sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgZm9udC1mYW1pbHk6ICdDdXJzaXZlJztcXG5cXG4gIGZvbnQtc2l6ZTogNzVweDtcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxuICB0ZXh0LXNoYWRvdzogIDRweCA0cHggM3B4ICMwMDk4RDQ7XFxufVxcblxcbi5oZWFkLW5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1mYW1pbHk6ICdDdXJzaXZlJztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG51bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFxuICBmb250LXNpemU6IDM1cHg7XFxufVxcblxcbnVsIGxpIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG59XFxuXFxudWwgbGk6aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4ICMwMDk4RDQ7XFxuICBtYXJnaW4tdG9wOiAtNXB4O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzOTNlY2E7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDNlbTtcXG4gIG1heC13aWR0aDogNDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jY29udGVudCBwIHtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jYmFrZXIge1xcbiAgd2lkdGg6IDYwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDhlbTtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyZDMxZWU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5mYS1naXRodWIge1xcbiAgd2lkdGg6IDMwcHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZhLWdpdGh1Yjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxufVxcbiBcXG4vKiBTQ1JPTExCQVIgKi9cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7IFxcbn1cXG4gXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiAjMmIyZDMxZWU7IFxcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMxZjFmMWY7IFxcbn1cXG5cXG5cXG4vKiBNRU5VICovXFxuXFxuLm1lbnUge1xcbmRpc3BsYXk6IGdyaWQ7XFxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbmdhcDogMWVtO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMWIxZDFmYWM7XFxucGFkZGluZzogMmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMmMzMDM1Nzg7XFxufVxcblxcbi5tZW51LWl0ZW0gcDpudGgtY2hpbGQoMikge1xcbmZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuZm9udC1zaXplOiAxOXB4O1xcbn1cXG5cXG4ubWVudSBpbWcge1xcbndpZHRoOiA1MCU7XFxufVxcblxcbi8qIENPTlRBQ1QgKi9cXG5cXG4ubWFwLXBpYyB7XFxud2lkdGg6IDEwMCU7XFxufVxcblxcbi50ZXh0LWNvbHVtbiBwIHtcXG50ZXh0LWFsaWduOiBsZWZ0O1xcbmZvbnQtc2l6ZTogMTlweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsMERBQXlEO0VBQ3pELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseURBQW1EO0VBQ25ELDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFlBQVk7RUFDWixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixzQkFBc0I7O0VBRXRCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjs7RUFFbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFlBQVk7RUFDWixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7OztBQUdBLFNBQVM7O0FBRVQ7QUFDQSxhQUFhO0FBQ2IsOEJBQThCO0FBQzlCLFFBQVE7QUFDUjs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQixZQUFZO0FBQ1o7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkIsZUFBZTtBQUNmOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBLFlBQVk7O0FBRVo7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDdXJzaXZlJztcXG4gIHNyYzogdXJsKCcuL0NlZGFydmlsbGVDdXJzaXZlLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0dGYnKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbmh0bWwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL3l1aGFuLWR1LXVuc3BsYXNoLmpwZyk7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2hlYWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJkMzFlZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIG1heC1oZWlnaHQ6IDE4MHB4O1xcbn1cXG5cXG4jbWFpbi1sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgZm9udC1mYW1pbHk6ICdDdXJzaXZlJztcXG5cXG4gIGZvbnQtc2l6ZTogNzVweDtcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxuICB0ZXh0LXNoYWRvdzogIDRweCA0cHggM3B4ICMwMDk4RDQ7XFxufVxcblxcbi5oZWFkLW5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1mYW1pbHk6ICdDdXJzaXZlJztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG51bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFxuICBmb250LXNpemU6IDM1cHg7XFxufVxcblxcbnVsIGxpIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG59XFxuXFxudWwgbGk6aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4ICMwMDk4RDQ7XFxuICBtYXJnaW4tdG9wOiAtNXB4O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzOTNlY2E7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDNlbTtcXG4gIG1heC13aWR0aDogNDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jY29udGVudCBwIHtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jYmFrZXIge1xcbiAgd2lkdGg6IDYwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDhlbTtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyZDMxZWU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5mYS1naXRodWIge1xcbiAgd2lkdGg6IDMwcHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZhLWdpdGh1Yjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxufVxcbiBcXG4vKiBTQ1JPTExCQVIgKi9cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7IFxcbn1cXG4gXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiAjMmIyZDMxZWU7IFxcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMxZjFmMWY7IFxcbn1cXG5cXG5cXG4vKiBNRU5VICovXFxuXFxuLm1lbnUge1xcbmRpc3BsYXk6IGdyaWQ7XFxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbmdhcDogMWVtO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMWIxZDFmYWM7XFxucGFkZGluZzogMmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMmMzMDM1Nzg7XFxufVxcblxcbi5tZW51LWl0ZW0gcDpudGgtY2hpbGQoMikge1xcbmZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuZm9udC1zaXplOiAxOXB4O1xcbn1cXG5cXG4ubWVudSBpbWcge1xcbndpZHRoOiA1MCU7XFxufVxcblxcbi8qIENPTlRBQ1QgKi9cXG5cXG4ubWFwLXBpYyB7XFxud2lkdGg6IDEwMCU7XFxufVxcblxcbi50ZXh0LWNvbHVtbiBwIHtcXG50ZXh0LWFsaWduOiBsZWZ0O1xcbmZvbnQtc2l6ZTogMTlweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7Y29udGFjdH07XG5pbXBvcnQgbWFwTG9jIGZyb20gJy4vaW1hZ2VzL21hcC1sb2NhdGlvbi5wbmcnXG5cbmZ1bmN0aW9uIGNvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IHBhcmFnMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhZzEudGV4dENvbnRlbnQgPSAn8J+TniAxMjMgNDU2IDc4OSc7XG5cbiAgICBjb25zdCBwYXJhZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYWcyLnRleHRDb250ZW50ID0gJ1RyYVJhZ3MgQm91bGV2YXJkIDQyLCBEdW56bGVkb3JmLCBCYXllcm4sIERldXRzY2hsYW5kJztcblxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBtYXBMb2M7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWFwLXBpYycpO1xuXG4gICAgY29udGVudC5hcHBlbmQocGFyYWcxLCBwYXJhZzIsIGltZyk7XG59ICAgIiwiZXhwb3J0IHtob21lfTtcbmltcG9ydCBicmVhZFBpYyBmcm9tICcuL2ltYWdlcy9hcnR1ci1ydXRrb3dza2ktdW5zcGxhc2guanBnJ1xuXG5mdW5jdGlvbiBob21lKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IHBhcmFnMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhZzEudGV4dENvbnRlbnQgPSAnVGhlIGF1dGhlbnRpYyBjZW50cmFsIEV1cm9wZWFuIGV4cGVyaWVuY2UuJztcbiAgICBcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gYnJlYWRQaWM7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmFrZXInKTtcbiAgICBcbiAgICBjb25zdCBwYXJhZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYWcyLnRleHRDb250ZW50ID0gJ09yZGVyIG9ubGluZSBvciB2aXNpdCBvdXIgY291bnRyeXNpZGUgYmFrZXJ5ISc7XG4gICAgXG4gICAgY29udGVudC5hcHBlbmQocGFyYWcxLCBpbWcsIHBhcmFnMik7XG59IiwiaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgeyBjb250YWN0IH0gZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuaW1wb3J0IEdpdFBpYyBmcm9tICcuL2ltYWdlcy9naXRodWItbWFyay5zdmcnXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmhlYWRlcigpO1xuaG9tZSgpO1xuZm9vdGVyKCk7XG5cbi8vIEhFQURFUlxuZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5cbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZC5zZXRBdHRyaWJ1dGUoJ2lkJywnaGVhZCcpO1xuICAgIFxuICAgIGNvbnN0IG1haW5Mb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgbWFpbkxvZ28uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluLWxvZ28nKTtcbiAgICBtYWluTG9nby50ZXh0Q29udGVudCA9ICdMdWR3aWdcXCdzJztcbiAgICBcbiAgICBjb25zdCBoZWFkTmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZE5hdmJhci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYWQtbmF2YmFyJyk7XG4gICAgXG4gICAgY29uc3QgdW5vcmRlcmVkTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgXG4gICAgY29uc3QgaG9tZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBob21lTGkuc2V0QXR0cmlidXRlKCdpZCcsICdob21lQnRuJyk7XG4gICAgaG9tZUxpLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIFxuICAgIGNvbnN0IG1lbnVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbWVudUxpLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudUJ0bicpO1xuICAgIG1lbnVMaS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBcbiAgICBjb25zdCBjb250YWN0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnRhY3RMaS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3RCdG4nKTtcbiAgICBjb250YWN0TGkudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgXG4gICAgaGVhZC5hcHBlbmQobWFpbkxvZ28sIGhlYWROYXZiYXIpO1xuICAgIGhlYWROYXZiYXIuYXBwZW5kQ2hpbGQodW5vcmRlcmVkTCk7XG4gICAgdW5vcmRlcmVkTC5hcHBlbmQoaG9tZUxpLCBtZW51TGksIGNvbnRhY3RMaSk7XG4gICAgY29udGVudC5iZWZvcmUoaGVhZCk7XG59XG5cbi8vIFRBQiBTV0lUQ0ggTE9HSUNcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZUJ0bicpO1xuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51QnRuJyk7XG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RCdG4nKTtcblxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhvbWUpO1xubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1lbnUpO1xuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRhY3QpO1xuXG4vLyBGT09URVJcbmZ1bmN0aW9uIGZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcbiAgICBmb290LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9vdGVyJylcblxuICAgIGNvbnN0IGZvb3RQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZm9vdFAudGV4dENvbnRlbnQgPSAnQ29weXJpZ2h0ICcrbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpKycgwqkgWXVzZXBoMDMnXG5cbiAgICBjb25zdCBnaXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgZ2l0TGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vWXVzZXBoMDNcIlxuICAgIGNvbnN0IGdpdExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gR2l0UGljO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLWdpdGh1YicpO1xuXG4gICAgZ2l0TG9nby5hcHBlbmQoaW1nKVxuICAgIGdpdExpbmsuYXBwZW5kKGdpdExvZ28pO1xuICAgIGZvb3QuYXBwZW5kKGZvb3RQLCBnaXRMaW5rKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChmb290KTtcbn0iLCJleHBvcnQge21lbnV9O1xuaW1wb3J0IG1lbnVQaWMgZnJvbSBcIi4vbWVudVBpYy5qc1wiOyBcblxuZnVuY3Rpb24gbWVudSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgbWVudURlc2MgPSBbJ1J5ZSBCcmVhZCcsICdMb2FmIEJyZWFkJywgJ0Nyb2lzc2FudCcsICdCYWd1ZXR0ZScsICdQcmV0emVsJywgJ0NsYXNzaWMgUGFpbiddO1xuICAgIFxuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51Jyk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNjsgaSsrKXtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudUl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcblxuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLnNyYyA9IG1lbnVQaWNbaV07XG5cbiAgICAgICAgY29uc3QgcGFyYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmFnLnRleHRDb250ZW50ID0gbWVudURlc2NbaV07XG5cbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kKGltZywgcGFyYWcpO1xuICAgICAgICBtZW51LmFwcGVuZChtZW51SXRlbSk7XG4gICAgfVxuICAgIGNvbnRlbnQuYXBwZW5kKG1lbnUpO1xufVxuXG4iLCJpbXBvcnQgbWVudTAgZnJvbSAnLi9pbWFnZXMvbWVudS9tZW51ICgwKS5wbmcnXG5pbXBvcnQgbWVudTEgZnJvbSAnLi9pbWFnZXMvbWVudS9tZW51ICgxKS5wbmcnXG5pbXBvcnQgbWVudTIgZnJvbSAnLi9pbWFnZXMvbWVudS9tZW51ICgyKS5wbmcnXG5pbXBvcnQgbWVudTMgZnJvbSAnLi9pbWFnZXMvbWVudS9tZW51ICgzKS5wbmcnXG5pbXBvcnQgbWVudTQgZnJvbSAnLi9pbWFnZXMvbWVudS9tZW51ICg0KS5wbmcnXG5pbXBvcnQgbWVudTUgZnJvbSAnLi9pbWFnZXMvbWVudS9tZW51ICg1KS5wbmcnXG5cbmV4cG9ydCBkZWZhdWx0W1xuICAgIG1lbnUwLFxuICAgIG1lbnUxLFxuICAgIG1lbnUyLFxuICAgIG1lbnUzLFxuICAgIG1lbnU0LFxuICAgIG1lbnU1XG5dIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9