/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \***************************************************************************************************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Exo2.0-Thin.otf */ "./src/assets/fonts/Exo2.0-Thin.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/background.png */ "./src/assets/img/background.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/kote.png */ "./src/assets/img/kote.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Exo 2\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"opentype\");\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.body {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-family: \"Exo 2\", sans-serif;\n}\n\n.cards-section__title {\n  color: #ffffff;\n  font-size: 36px;\n  font-weight: 100;\n  line-height: 42px;\n  text-align: center;\n  text-shadow: 0px 1px 1px #000000;\n}\n.cards-section__cards-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.card__container {\n  position: relative;\n  margin: 25px 40px;\n}\n.card__body {\n  position: relative;\n  width: 320px;\n  height: 509px;\n  padding: 21px 0 0 48px;\n  border: 4px solid #1698d9;\n  border-radius: 12px;\n  background: #f2f2f2;\n  -webkit-clip-path: polygon(16% 0, 100% 0, 100% 100%, 0 100%, 0 10%);\n          clip-path: polygon(16% 0, 100% 0, 100% 100%, 0 100%, 0 10%);\n  cursor: pointer;\n}\n.card__body::after {\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  width: 50px;\n  height: 50px;\n  background: linear-gradient(-45deg, #f2f2f2, #f2f2f2 34.5px, #1698d9 0, #1698d9 39px, transparent 0);\n  content: \"\";\n}\n.card__body::before {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  border-radius: 8px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: 61% 170%;\n  background-repeat: no-repeat;\n  background-size: 368px 360px;\n  content: \"\";\n}\n.card__header, .card__header-selected {\n  padding-left: 3px;\n  color: #666666;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 19px;\n}\n.card__header-selected {\n  display: none;\n  padding-left: 3px;\n  color: #e62e7a;\n}\n.card__title {\n  margin-top: 5px;\n  color: #000000;\n  font-family: \"Trebuchet MS\";\n  font-size: 48px;\n  line-height: 56px;\n}\n.card__sub-title {\n  color: #000000;\n  font-family: \"Trebuchet MS\";\n  font-size: 24px;\n  line-height: 28px;\n}\n.card__benefits {\n  margin-top: 14px;\n  list-style: none;\n}\n.card__benefit {\n  color: #666666;\n  font-family: \"Trebuchet MS\";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n}\n.card__description, .card__description-selected, .card__description-not-available {\n  margin-top: 14px;\n  color: white;\n  font-size: 13px;\n  line-height: 15.23px;\n  text-align: center;\n}\n.card__description-selected, .card__description-not-available {\n  display: none;\n}\n.card__description-not-available {\n  color: #ffff66;\n}\n.card__buy-link {\n  border-bottom: 1px dashed #2ea8e6;\n  color: #2ea8e6;\n  cursor: pointer;\n}\n\n.card__radio-select {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  opacity: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n.card__radio-select:checked ~ .card__description {\n  display: none;\n}\n\n.card__radio-select:checked ~ .card__description-selected {\n  display: block;\n}\n\n.card__radio-select:checked + .card__wrapper .card__body {\n  border: 4px solid #d91667;\n}\n.card__radio-select:checked + .card__wrapper .card__body::after {\n  background: linear-gradient(-45deg, #f2f2f2, #f2f2f2 34.5px, #d91667 0, #d91667 39px, transparent 0);\n}\n.card__radio-select:checked + .card__wrapper .card__body .size__container {\n  background: #d91667;\n}\n.card__radio-select:checked + .card__wrapper .card__body .card__description {\n  display: none;\n}\n.card__radio-select:checked + .card__wrapper .card__body .card__description-selected {\n  display: block;\n}\n\n.card__radio-select:checked + .card__wrapper--selected:hover .card__body {\n  border: 4px solid #e52e7a;\n}\n.card__radio-select:checked + .card__wrapper--selected:hover .card__body::after {\n  background: linear-gradient(-45deg, #f2f2f2, #f2f2f2 34.5px, #e52e7a 0, #e52e7a 39px, transparent 0);\n}\n.card__radio-select:checked + .card__wrapper--selected:hover .card__body .size__container {\n  background: #e52e7a;\n}\n.card__radio-select:checked + .card__wrapper--selected:hover .card__body .card__header-selected {\n  display: block;\n}\n.card__radio-select:checked + .card__wrapper--selected:hover .card__body .card__header {\n  display: none;\n}\n\n.card__radio-select:not(:checked):not(:disabled) + .card__wrapper .card__body:hover {\n  border: 4px solid #2ea8e6;\n}\n.card__radio-select:not(:checked):not(:disabled) + .card__wrapper .card__body:hover::after {\n  background: linear-gradient(-45deg, #f2f2f2, #f2f2f2 34.5px, #2ea8e6 0, #2ea8e6 39px, transparent 0);\n}\n.card__radio-select:not(:checked):not(:disabled) + .card__wrapper .card__body:hover .size__container {\n  background: #2ea8e6;\n}\n\n.card__radio-select:disabled + .card__wrapper .card__body {\n  border: 4px solid #b3b3b3;\n}\n.card__radio-select:disabled + .card__wrapper .card__body::after {\n  background: linear-gradient(-45deg, #f2f2f2, #f2f2f2 34.5px, #b3b3b3 0, #b3b3b3 39px, transparent 0);\n}\n.card__radio-select:disabled + .card__wrapper .card__body::before {\n  opacity: 0.5;\n}\n.card__radio-select:disabled + .card__wrapper .card__body * {\n  color: #b3b3b3;\n}\n.card__radio-select:disabled + .card__wrapper .card__body .size__container {\n  background: #b3b3b3;\n}\n.card__radio-select:disabled + .card__wrapper .card__body .size__count,\n.card__radio-select:disabled + .card__wrapper .card__body .size__measure {\n  color: white !important;\n}\n\n.card__radio-select:disabled ~ .card__description-not-available {\n  display: block;\n}\n\n.card__radio-select:disabled ~ .card__description {\n  display: none;\n}\n\n.size__container {\n  display: flex;\n  display: flex;\n  position: absolute;\n  right: 16px;\n  bottom: 16px;\n  flex-direction: column;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 80px;\n  height: 80px;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  border-radius: 50%;\n  background: #1698d9;\n  color: white;\n}\n.size__count {\n  font-family: \"Trebuchet MS\";\n  font-size: 42px;\n  line-height: 22px;\n}\n.size__measure {\n  font-family: \"Trebuchet MS\";\n  font-size: 20px;\n  line-height: 22px;\n}", "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAAA;EACE,oBAAA;EACA,+DAAA;AACF;AACA;EACE,sBAAA;EACA,SAAA;EACA,UAAA;AACF;;AACA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mDAAA;EACA,gCAAA;AAEF;;AAEE;EACE,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gCAAA;AACJ;AAEE;EACE,aAAA;EACA,eAAA;EACA,uBAAA;AAAJ;;AAKE;EACE,kBAAA;EACA,iBAAA;AAFJ;AAKE;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,mBAAA;EACA,mBAAA;EACA,mEAAA;UAAA,2DAAA;EACA,eAAA;AAHJ;AAII;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,oGAAA;EACA,WAAA;AAFN;AAKI;EACE,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,SAAA;EACA,kBAAA;EACA,yDAAA;EACA,6BAAA;EACA,4BAAA;EACA,4BAAA;EACA,WAAA;AAHN;AAOE;EAEE,iBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AANJ;AASE;EACE,aAAA;EACA,iBAAA;EACA,cAAA;AAPJ;AAUE;EACE,eAAA;EACA,cAAA;EACA,2BAAA;EACA,eAAA;EACA,iBAAA;AARJ;AAWE;EACE,cAAA;EACA,2BAAA;EACA,eAAA;EACA,iBAAA;AATJ;AAYE;EACE,gBAAA;EACA,gBAAA;AAVJ;AAaE;EACE,cAAA;EACA,2BAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;AAXJ;AAaE;EAGE,gBAAA;EACA,YAAA;EACA,eAAA;EACA,oBAAA;EACA,kBAAA;AAbJ;AAeE;EAEE,aAAA;AAdJ;AAgBE;EACE,cAAA;AAdJ;AAgBE;EACE,iCAAA;EACA,cAAA;EACA,eAAA;AAdJ;;AAkBA;EACE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,UAAA;EACA,wBAAA;KAAA,qBAAA;UAAA,gBAAA;AAfF;;AAiBA;EACE,aAAA;AAdF;;AAgBA;EACE,cAAA;AAbF;;AAgBA;EACE,yBAAA;AAbF;AAcE;EACE,oGAAA;AAZJ;AAeE;EACE,mBAAA;AAbJ;AAeE;EACE,aAAA;AAbJ;AAeE;EACE,cAAA;AAbJ;;AAgBA;EACE,yBAAA;AAbF;AAeE;EACE,oGAAA;AAbJ;AAeE;EACE,mBAAA;AAbJ;AAeE;EACE,cAAA;AAbJ;AAeE;EACE,aAAA;AAbJ;;AAgBA;EACE,yBAAA;AAbF;AAcE;EACE,oGAAA;AAZJ;AAcE;EACE,mBAAA;AAZJ;;AAeA;EACE,yBAAA;AAZF;AAaE;EACE,oGAAA;AAXJ;AAaE;EACE,YAAA;AAXJ;AAaE;EACE,cAAA;AAXJ;AAaE;EACE,mBAAA;AAXJ;AAaE;;EAEE,uBAAA;AAXJ;;AAcA;EACE,cAAA;AAXF;;AAaA;EACE,aAAA;AAVF;;AAcE;EACE,aAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,sBAAA;EACA,mBAAA;EACA,8BAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;AAXJ;AAcE;EACE,2BAAA;EACA,eAAA;EACA,iBAAA;AAZJ;AAeE;EACE,2BAAA;EACA,eAAA;EACA,iBAAA;AAbJ","sourcesContent":["@font-face {\r\n  font-family: 'Exo 2';\r\n  src: url('./assets/fonts/Exo2.0-Thin.otf') format('opentype');\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.body {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: url('./assets/img/background.png');\r\n  font-family: 'Exo 2', sans-serif;\r\n}\r\n\r\n.cards-section {\r\n  &__title {\r\n    color: #ffffff;\r\n    font-size: 36px;\r\n    font-weight: 100;\r\n    line-height: 42px;\r\n    text-align: center;\r\n    text-shadow: 0px 1px 1px #000000;\r\n  }\r\n\r\n  &__cards-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n  }\r\n}\r\n\r\n.card {\r\n  &__container {\r\n    position: relative;\r\n    margin: 25px 40px;\r\n  }\r\n\r\n  &__body {\r\n    position: relative;\r\n    width: 320px;\r\n    height: 509px;\r\n    padding: 21px 0 0 48px;\r\n    border: 4px solid #1698d9;\r\n    border-radius: 12px;\r\n    background: #f2f2f2;\r\n    clip-path: polygon(16% 0, 100% 0, 100% 100%, 0 100%, 0 10%);\r\n    cursor: pointer;\r\n    &::after {\r\n      position: absolute;\r\n      top: -1px;\r\n      left: -1px;\r\n      width: 50px;\r\n      height: 50px;\r\n      background: linear-gradient(-45deg, #f2f2f2, #f2f2f2 34.5px, #1698d9 0, #1698d9 39px, transparent 0);\r\n      content: '';\r\n    }\r\n\r\n    &::before {\r\n      position: absolute;\r\n      top: 0px;\r\n      right: 0px;\r\n      bottom: 0px;\r\n      left: 0px;\r\n      border-radius: 8px;\r\n      background-image: url('./assets/img/kote.png');\r\n      background-position: 61% 170%;\r\n      background-repeat: no-repeat;\r\n      background-size: 368px 360px;\r\n      content: '';\r\n    }\r\n  }\r\n\r\n  &__header,\r\n  &__header-selected {\r\n    padding-left: 3px;\r\n    color: #666666;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    line-height: 19px;\r\n  }\r\n\r\n  &__header-selected {\r\n    display: none;\r\n    padding-left: 3px;\r\n    color: #e62e7a;\r\n  }\r\n\r\n  &__title {\r\n    margin-top: 5px;\r\n    color: #000000;\r\n    font-family: 'Trebuchet MS';\r\n    font-size: 48px;\r\n    line-height: 56px;\r\n  }\r\n\r\n  &__sub-title {\r\n    color: #000000;\r\n    font-family: 'Trebuchet MS';\r\n    font-size: 24px;\r\n    line-height: 28px;\r\n  }\r\n\r\n  &__benefits {\r\n    margin-top: 14px;\r\n    list-style: none;\r\n  }\r\n\r\n  &__benefit {\r\n    color: #666666;\r\n    font-family: 'Trebuchet MS';\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 16px;\r\n  }\r\n  &__description,\r\n  &__description-selected,\r\n  &__description-not-available {\r\n    margin-top: 14px;\r\n    color: white;\r\n    font-size: 13px;\r\n    line-height: 15.23px;\r\n    text-align: center;\r\n  }\r\n  &__description-selected,\r\n  &__description-not-available {\r\n    display: none;\r\n  }\r\n  &__description-not-available {\r\n    color: #ffff66;\r\n  }\r\n  &__buy-link {\r\n    border-bottom: 1px dashed #2ea8e6;\r\n    color: #2ea8e6;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.card__radio-select {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  opacity: 0;\r\n  appearance: none;\r\n}\r\n.card__radio-select:checked ~ .card__description {\r\n  display: none;\r\n}\r\n.card__radio-select:checked ~ .card__description-selected {\r\n  display: block;\r\n}\r\n\r\n.card__radio-select:checked + .card__wrapper .card__body {\r\n  border: 4px solid #d91667;\r\n  &::after {\r\n    background: linear-gradient(-45deg, #f2f2f2, #f2f2f2 34.5px, #d91667 0, #d91667 39px, transparent 0);\r\n  }\r\n\r\n  & .size__container {\r\n    background: #d91667;\r\n  }\r\n  & .card__description {\r\n    display: none;\r\n  }\r\n  & .card__description-selected {\r\n    display: block;\r\n  }\r\n}\r\n.card__radio-select:checked + .card__wrapper--selected:hover .card__body {\r\n  border: 4px solid #e52e7a;\r\n\r\n  &::after {\r\n    background: linear-gradient(-45deg, #f2f2f2, #f2f2f2 34.5px, #e52e7a 0, #e52e7a 39px, transparent 0);\r\n  }\r\n  & .size__container {\r\n    background: #e52e7a;\r\n  }\r\n  & .card__header-selected {\r\n    display: block;\r\n  }\r\n  & .card__header {\r\n    display: none;\r\n  }\r\n}\r\n.card__radio-select:not(:checked):not(:disabled) + .card__wrapper .card__body:hover {\r\n  border: 4px solid #2ea8e6;\r\n  &::after {\r\n    background: linear-gradient(-45deg, #f2f2f2, #f2f2f2 34.5px, #2ea8e6 0, #2ea8e6 39px, transparent 0);\r\n  }\r\n  & .size__container {\r\n    background: #2ea8e6;\r\n  }\r\n}\r\n.card__radio-select:disabled + .card__wrapper .card__body {\r\n  border: 4px solid #b3b3b3;\r\n  &::after {\r\n    background: linear-gradient(-45deg, #f2f2f2, #f2f2f2 34.5px, #b3b3b3 0, #b3b3b3 39px, transparent 0);\r\n  }\r\n  &::before {\r\n    opacity: 0.5;\r\n  }\r\n  & * {\r\n    color: #b3b3b3;\r\n  }\r\n  & .size__container {\r\n    background: #b3b3b3;\r\n  }\r\n  & .size__count,\r\n  .size__measure {\r\n    color: white !important;\r\n  }\r\n}\r\n.card__radio-select:disabled ~ .card__description-not-available {\r\n  display: block;\r\n}\r\n.card__radio-select:disabled ~ .card__description {\r\n  display: none;\r\n}\r\n\r\n.size {\r\n  &__container {\r\n    display: flex;\r\n    display: flex;\r\n    position: absolute;\r\n    right: 16px;\r\n    bottom: 16px;\r\n    flex-direction: column;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    width: 80px;\r\n    height: 80px;\r\n    padding-top: 20px;\r\n    padding-bottom: 5px;\r\n    border-radius: 50%;\r\n    background: #1698d9;\r\n    color: white;\r\n  }\r\n\r\n  &__count {\r\n    font-family: 'Trebuchet MS';\r\n    font-size: 42px;\r\n    line-height: 22px;\r\n  }\r\n\r\n  &__measure {\r\n    font-family: 'Trebuchet MS';\r\n    font-size: 20px;\r\n    line-height: 22px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/assets/img/background.png":
/*!***************************************!*\
  !*** ./src/assets/img/background.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/background.png";

/***/ }),

/***/ "./src/assets/img/kote.png":
/*!*********************************!*\
  !*** ./src/assets/img/kote.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/kote.png";

/***/ }),

/***/ "./src/assets/fonts/Exo2.0-Thin.otf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Exo2.0-Thin.otf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/Exo2.0-Thin.otf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./index.scss */ "./src/index.scss");
const cards = document.querySelectorAll('.card__wrapper');
const checkboxes = document.querySelectorAll('.card__radio-select');
const buylinks = document.querySelectorAll('.card__buy-link');
cards.forEach((card) => {
    card.addEventListener('mouseout', function () {
        const checkbox = card.previousElementSibling;
        if (checkbox.checked) {
            card.classList.add('card__wrapper--selected');
        }
    });
});
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('input', function () {
        const card = checkbox.nextElementSibling;
        if (!checkbox.checked) {
            card.classList.remove('card__wrapper--selected');
        }
    });
});
buylinks.forEach((link) => {
    link.addEventListener('click', function () {
        if (link.hasAttribute('data-label')) {
            const id = link.getAttribute('data-label');
            const checkbox = document.querySelector(`#${id}`);
            if (!checkbox.disabled)
                checkbox.checked = true;
        }
    });
});

})();

/******/ })()
;
//# sourceMappingURL=index.js.map