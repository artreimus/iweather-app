"use strict";
(self["webpackChunkiweather_app"] = self["webpackChunkiweather_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-bgc: rgb(17, 17, 17);\n  --secondary-bgc: rgba(255, 255, 255, 0.8);\n  --primary-fc: rgb(255, 255, 255);\n  --ff-primary: Arial, Helvetica, sans-serif;\n  --divider-primary: rgb(189, 189, 189);\n  --default-gradient: linear-gradient(176deg, #00dbde 0%, #fc00ff 100%);\n\n  --sunny-gradient: radial-gradient(\n    circle farthest-corner at 10% 20%,\n    rgb(255, 253, 161) 11.3%,\n    rgb(248, 238, 89) 41.2%,\n    rgb(255, 220, 66) 77.8%\n  );\n  --cloudy-gradient: radial-gradient(\n    circle farthest-corner at 10% 20%,\n    rgba(161, 255, 255, 1) 11.3%,\n    rgba(6, 255, 255, 1) 41.2%,\n    rgba(0, 216, 216, 1) 77.8%\n  );\n  --rainy-gradient: radial-gradient(\n    circle farthest-corner at 10% 20%,\n    rgb(161, 167, 255) 11.3%,\n    rgb(6, 93, 255) 41.2%,\n    rgb(0, 17, 170) 77.8%\n  );\n  --snow-gradient: radial-gradient(\n    circle farthest-corner at 10% 20%,\n    rgb(161, 252, 255) 11.3%,\n    rgb(6, 205, 255) 41.2%,\n    rgb(0, 181, 236) 77.8%\n  );\n  --extreme-gradient: radial-gradient(\n    circle farthest-corner at 10% 20%,\n    rgb(255, 139, 131) 11.3%,\n    rgb(255, 124, 115) 41.2%,\n    rgb(236, 55, 0) 77.8%\n  );\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\np,\nbutton,\ni {\n  margin: 0;\n  padding: 0;\n}\n\ninput {\n  border: none;\n  font-family: inherit;\n  font-size: inherit;\n  outline: none;\n  color: inherit;\n}\n\nbody {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  font-family: var(--ff-primary);\n  height: 100vh;\n  background-image: var(--default-gradient);\n  gap: 0.5rem;\n}\n\n.Clear {\n  background-image: var(--sunny-gradient);\n}\n\n.Rain {\n  background-image: var(--rainy-gradient);\n}\n\n.Snow {\n  background-image: var(--snow-gradient);\n}\n\n.Clouds {\n  background-image: var(--cloudy-gradient);\n}\n\n.Extreme {\n  background-image: var(--sunny-gradient);\n}\n\nbutton {\n  font-family: inherit;\n  cursor: pointer;\n}\n\n.error-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 0.6rem;\n  background-color: var(--secondary-bgc);\n  border-radius: 15px;\n  border: rgb(255, 92, 92) solid 3px;\n  min-width: 20rem;\n  max-width: 90%;\n  height: 4rem;\n  padding: 1rem;\n}\n\n.error-container i {\n  font-size: 1.5rem;\n}\n\n.error-container p {\n  font-size: 1.3rem;\n  font-weight: 800;\n}\n\n.none {\n  display: none;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--secondary-bgc);\n  border-radius: 15px;\n  min-width: 20rem;\n  max-width: 40rem;\n  height: fit-content;\n  padding: 15px;\n  margin: 0 auto;\n  margin: 0.5rem 1rem;\n}\n\n.container-header {\n  padding: 0.8rem;\n  border-bottom: 2px solid var(--divider-primary);\n}\n\n.container-input {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  gap: 1rem;\n  flex-direction: row;\n  padding: 1rem 0;\n  border-bottom: 2px solid var(--divider-primary);\n}\n\n.form-container {\n  width: 50%;\n  border-radius: 5px;\n  border: 2px solid black;\n  padding: 0 0 0 10px;\n  overflow: hidden;\n  transition: background-color 250ms ease-in-out;\n}\n\n.form-container input[type=\"text\"] {\n  transition: 250ms ease-in-out;\n}\n.form-container input[type=\"text\"]:focus {\n  background-color: rgba(255, 255, 255, 0.6);\n  box-shadow: 0 0 10000px 10000px rgba(255, 255, 255, 0.5);\n}\n\n.form-container form {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0px;\n}\n\n.search-input {\n  border: 0px;\n  background-color: transparent;\n  width: 100%;\n  height: 3rem;\n  transition: border 250ms ease-in;\n  display: inline-block;\n  padding: 0 5px 0 0;\n}\n\n.search-btn {\n  background-color: transparent;\n  margin: 0;\n  padding: 3px 5px;\n  border: none;\n  border-left: 1px solid black;\n  transform: scale(1);\n  transition: transform 250ms ease-in;\n}\n\n.search-btn:hover .fa-magnifying-glass {\n  transform: scale(1.1);\n}\n\n.user-location-btn {\n  height: 2rem;\n  width: clamp(30%, 40%);\n  padding: 0.2rem;\n  font-size: 1rem;\n  font-weight: 600;\n  border: 3px solid #000000;\n  background-color: transparent;\n  border-radius: 5px;\n  transition: background-color 250ms ease-in-out;\n}\n\n.user-location-btn:hover {\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\n.container-output {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n  font-family: inherit;\n  padding: 1rem 0;\n  gap: 0.5rem;\n}\n\n.weather-icon {\n  max-width: 100%;\n  height: 8rem;\n}\n\n.temperature {\n  font-weight: 900;\n  font-size: 3.5rem;\n}\n\n.location,\n.weather {\n  font-size: 1.2rem;\n}\n\n.weather-details-container {\n  width: 100%;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: space-evenly;\n  margin-top: 1rem;\n}\n\n.details {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  width: 30%;\n  font-size: 1rem;\n  font-family: inherit;\n  gap: 0.4rem;\n}\n\n.weather-details-container {\n  display: flex;\n  align-items: flex-start;\n}\n\n.weather-header {\n  text-align: center;\n  /* flex: 1; */\n}\n\n.weather-body {\n  font-weight: bold;\n  text-align: center;\n  overflow-wrap: wrap;\n  white-space: normal;\n}\n\n.unit {\n  font-size: 0.9rem;\n}\n\n.unit-temperature {\n  font-size: 2rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --primary-bgc: rgb(17, 17, 17);\n  --secondary-bgc: rgba(255, 255, 255, 0.8);\n  --primary-fc: rgb(255, 255, 255);\n  --ff-primary: Arial, Helvetica, sans-serif;\n  --divider-primary: rgb(189, 189, 189);\n  --default-gradient: linear-gradient(176deg, #00dbde 0%, #fc00ff 100%);\n\n  --sunny-gradient: radial-gradient(\n    circle farthest-corner at 10% 20%,\n    rgb(255, 253, 161) 11.3%,\n    rgb(248, 238, 89) 41.2%,\n    rgb(255, 220, 66) 77.8%\n  );\n  --cloudy-gradient: radial-gradient(\n    circle farthest-corner at 10% 20%,\n    rgba(161, 255, 255, 1) 11.3%,\n    rgba(6, 255, 255, 1) 41.2%,\n    rgba(0, 216, 216, 1) 77.8%\n  );\n  --rainy-gradient: radial-gradient(\n    circle farthest-corner at 10% 20%,\n    rgb(161, 167, 255) 11.3%,\n    rgb(6, 93, 255) 41.2%,\n    rgb(0, 17, 170) 77.8%\n  );\n  --snow-gradient: radial-gradient(\n    circle farthest-corner at 10% 20%,\n    rgb(161, 252, 255) 11.3%,\n    rgb(6, 205, 255) 41.2%,\n    rgb(0, 181, 236) 77.8%\n  );\n  --extreme-gradient: radial-gradient(\n    circle farthest-corner at 10% 20%,\n    rgb(255, 139, 131) 11.3%,\n    rgb(255, 124, 115) 41.2%,\n    rgb(236, 55, 0) 77.8%\n  );\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\np,\nbutton,\ni {\n  margin: 0;\n  padding: 0;\n}\n\ninput {\n  border: none;\n  font-family: inherit;\n  font-size: inherit;\n  outline: none;\n  color: inherit;\n}\n\nbody {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  font-family: var(--ff-primary);\n  height: 100vh;\n  background-image: var(--default-gradient);\n  gap: 0.5rem;\n}\n\n.Clear {\n  background-image: var(--sunny-gradient);\n}\n\n.Rain {\n  background-image: var(--rainy-gradient);\n}\n\n.Snow {\n  background-image: var(--snow-gradient);\n}\n\n.Clouds {\n  background-image: var(--cloudy-gradient);\n}\n\n.Extreme {\n  background-image: var(--sunny-gradient);\n}\n\nbutton {\n  font-family: inherit;\n  cursor: pointer;\n}\n\n.error-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 0.6rem;\n  background-color: var(--secondary-bgc);\n  border-radius: 15px;\n  border: rgb(255, 92, 92) solid 3px;\n  min-width: 20rem;\n  max-width: 90%;\n  height: 4rem;\n  padding: 1rem;\n}\n\n.error-container i {\n  font-size: 1.5rem;\n}\n\n.error-container p {\n  font-size: 1.3rem;\n  font-weight: 800;\n}\n\n.none {\n  display: none;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--secondary-bgc);\n  border-radius: 15px;\n  min-width: 20rem;\n  max-width: 40rem;\n  height: fit-content;\n  padding: 15px;\n  margin: 0 auto;\n  margin: 0.5rem 1rem;\n}\n\n.container-header {\n  padding: 0.8rem;\n  border-bottom: 2px solid var(--divider-primary);\n}\n\n.container-input {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  gap: 1rem;\n  flex-direction: row;\n  padding: 1rem 0;\n  border-bottom: 2px solid var(--divider-primary);\n}\n\n.form-container {\n  width: 50%;\n  border-radius: 5px;\n  border: 2px solid black;\n  padding: 0 0 0 10px;\n  overflow: hidden;\n  transition: background-color 250ms ease-in-out;\n}\n\n.form-container input[type=\"text\"] {\n  transition: 250ms ease-in-out;\n}\n.form-container input[type=\"text\"]:focus {\n  background-color: rgba(255, 255, 255, 0.6);\n  box-shadow: 0 0 10000px 10000px rgba(255, 255, 255, 0.5);\n}\n\n.form-container form {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0px;\n}\n\n.search-input {\n  border: 0px;\n  background-color: transparent;\n  width: 100%;\n  height: 3rem;\n  transition: border 250ms ease-in;\n  display: inline-block;\n  padding: 0 5px 0 0;\n}\n\n.search-btn {\n  background-color: transparent;\n  margin: 0;\n  padding: 3px 5px;\n  border: none;\n  border-left: 1px solid black;\n  transform: scale(1);\n  transition: transform 250ms ease-in;\n}\n\n.search-btn:hover .fa-magnifying-glass {\n  transform: scale(1.1);\n}\n\n.user-location-btn {\n  height: 2rem;\n  width: clamp(30%, 40%);\n  padding: 0.2rem;\n  font-size: 1rem;\n  font-weight: 600;\n  border: 3px solid #000000;\n  background-color: transparent;\n  border-radius: 5px;\n  transition: background-color 250ms ease-in-out;\n}\n\n.user-location-btn:hover {\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\n.container-output {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n  font-family: inherit;\n  padding: 1rem 0;\n  gap: 0.5rem;\n}\n\n.weather-icon {\n  max-width: 100%;\n  height: 8rem;\n}\n\n.temperature {\n  font-weight: 900;\n  font-size: 3.5rem;\n}\n\n.location,\n.weather {\n  font-size: 1.2rem;\n}\n\n.weather-details-container {\n  width: 100%;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: space-evenly;\n  margin-top: 1rem;\n}\n\n.details {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  width: 30%;\n  font-size: 1rem;\n  font-family: inherit;\n  gap: 0.4rem;\n}\n\n.weather-details-container {\n  display: flex;\n  align-items: flex-start;\n}\n\n.weather-header {\n  text-align: center;\n  /* flex: 1; */\n}\n\n.weather-body {\n  font-weight: bold;\n  text-align: center;\n  overflow-wrap: wrap;\n  white-space: normal;\n}\n\n.unit {\n  font-size: 0.9rem;\n}\n\n.unit-temperature {\n  font-size: 2rem;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayError": () => (/* binding */ displayError),
/* harmony export */   "renderDisplay": () => (/* binding */ renderDisplay),
/* harmony export */   "weatherIconDisplay": () => (/* binding */ weatherIconDisplay)
/* harmony export */ });
/* harmony import */ var _icons_Clear_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/Clear.png */ "./src/icons/Clear.png");
/* harmony import */ var _icons_Clouds_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/Clouds.png */ "./src/icons/Clouds.png");
/* harmony import */ var _icons_Extreme_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/Extreme.png */ "./src/icons/Extreme.png");
/* harmony import */ var _icons_Rain_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/Rain.png */ "./src/icons/Rain.png");
/* harmony import */ var _icons_Snow_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/Snow.png */ "./src/icons/Snow.png");
/* harmony import */ var _icons_Default_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/Default.png */ "./src/icons/Default.png");







const locationDisplay = document.querySelector('[data-location]');
const temperatureDisplay = document.querySelector('[data-temperature]');
const weatherDisplay = document.querySelector('[data-weather]');
const windSpeedDisplay = document.querySelector('[data-wind-speed]');
const humidityDisplay = document.querySelector('[data-humidity]');
const weatherIconDisplay = document.querySelector('[data-weather-icon]');
const body = document.getElementsByTagName('body')[0];
const errorContainer = document.querySelector('[data-error-container]');

function displayLocation(city, country) {
  locationDisplay.innerHTML = `${city}, ${country}`;
}

function displayBackground(weatherCategory) {
  body.removeAttribute('class');
  body.classList.add(weatherCategory);
}

function displayWeatherIcon(weatherCategory) {
  switch (weatherCategory) {
    case 'Clear':
      weatherIconDisplay.src = _icons_Clear_png__WEBPACK_IMPORTED_MODULE_0__;
      break;
    case 'Clouds':
      weatherIconDisplay.src = _icons_Clouds_png__WEBPACK_IMPORTED_MODULE_1__;
      break;
    case 'Rain':
      weatherIconDisplay.src = _icons_Rain_png__WEBPACK_IMPORTED_MODULE_3__;
      break;
    case 'Snow':
      weatherIconDisplay.src = _icons_Snow_png__WEBPACK_IMPORTED_MODULE_4__;
      break;
    case 'Extreme':
      weatherIconDisplay.src = _icons_Extreme_png__WEBPACK_IMPORTED_MODULE_2__;
      break;
    default:
      weatherIconDisplay.src = _icons_Default_png__WEBPACK_IMPORTED_MODULE_5__;
  }
  displayBackground(weatherCategory);
}

function displayWeather(weather) {
  weatherDisplay.innerHTML = weather.charAt(0).toUpperCase() + weather.slice(1);
}

function displayTemperature(temperature) {
  temperatureDisplay.innerHTML = `${temperature}<span class="unit-temperature">°C</span>`;
}

function displayHumidity(humidity) {
  humidityDisplay.innerHTML = `${humidity} <span class="unit">%</span>`;
}
function displayWindSpeed(windSpeed) {
  windSpeedDisplay.innerHTML = `${windSpeed} <span class="unit">m/s</span>`;
}

function displayError(error) {
  errorContainer.classList.remove('none');
  errorContainer.innerHTML = '<i class="fa-regular fa-circle-xmark"></i><p>Error:</p><p data-error-message></p>';
  const errorMessageDisplay = document.querySelector('[data-error-message]');
  errorMessageDisplay.innerText = error;
  setTimeout(() => {
    errorContainer.innerHTML = '';
    errorContainer.classList.add('none');
  }, 3000);
}

function renderDisplay(
  city,
  country,
  weatherCategory,
  weather,
  temperature,
  humidity,
  windSpeed,
) {
  displayLocation(city, country);
  displayWeatherIcon(weatherCategory);
  displayWeather(weather);
  displayTemperature(temperature);
  displayHumidity(humidity);
  displayWindSpeed(windSpeed);
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");



(0,_project_js__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ runWeatherApp)
/* harmony export */ });
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ "./src/display.js");
/* harmony import */ var _icons_Default_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/Default.png */ "./src/icons/Default.png");



const userLocationBtn = document.querySelector('[data-user-location-button]');
const locationForm = document.querySelector('[data-location-form]');
const locationInput = document.querySelector('[data-search-input]');

const API_KEY = '7c5221054269807c32a11470be6673f2';

function getWeather(response) {
  const city = response.name;
  const { country } = response.sys;
  const weatherCategory = response.weather[0].main;
  const weather = response.weather[0].description;
  const temperature = response.main.temp;
  const { humidity } = response.main;
  const windSpeed = response.wind.speed;
  (0,_display_js__WEBPACK_IMPORTED_MODULE_0__.renderDisplay)(city, country, weatherCategory, weather, temperature, humidity, windSpeed);
}

async function fetchCoordinates(LOCATION_COORDINATES_API) {
  try {
    const response = await fetch(LOCATION_COORDINATES_API, { mode: 'cors' });
    const coordinatesData = await response.json();
    getWeather(coordinatesData);
  } catch {
    (0,_display_js__WEBPACK_IMPORTED_MODULE_0__.displayError)('City not found');
  }
}

async function fetchWeather(WEATHER_API) {
  try {
    const response = await fetch(WEATHER_API, { mode: 'cors' });
    const weatherData = await response.json();
    getWeather(weatherData);
    console.log('OK');
  } catch {
    (0,_display_js__WEBPACK_IMPORTED_MODULE_0__.displayError)('Weather not found');
  }
}

function getUserLocation(position) {
  const { latitude, longitude } = position.coords;
  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
  fetchWeather(WEATHER_API);
}

function getCoordinates(city) {
  const LOCATION_COORDINATES_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  fetchCoordinates(LOCATION_COORDINATES_API);
}

function runWeatherApp() {
  userLocationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getUserLocation);
    } else {
      (0,_display_js__WEBPACK_IMPORTED_MODULE_0__.displayError)('Cannot get Location');
    }
  });

  locationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = locationInput.value;
    if (location == null || location === '') return;
    locationInput.value = null;
    getCoordinates(location);
  });

  document.addEventListener('DOMContentLoaded', () => {
    _display_js__WEBPACK_IMPORTED_MODULE_0__.weatherIconDisplay.src = _icons_Default_png__WEBPACK_IMPORTED_MODULE_1__;
  });
}


/***/ }),

/***/ "./src/icons/Clear.png":
/*!*****************************!*\
  !*** ./src/icons/Clear.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09b1546a421326832a9c.png";

/***/ }),

/***/ "./src/icons/Clouds.png":
/*!******************************!*\
  !*** ./src/icons/Clouds.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "570f7a271972c1dc17ca.png";

/***/ }),

/***/ "./src/icons/Default.png":
/*!*******************************!*\
  !*** ./src/icons/Default.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4fe5c1d9aee73277cf3.png";

/***/ }),

/***/ "./src/icons/Extreme.png":
/*!*******************************!*\
  !*** ./src/icons/Extreme.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb4cf6bdf8d6f4971e29.png";

/***/ }),

/***/ "./src/icons/Rain.png":
/*!****************************!*\
  !*** ./src/icons/Rain.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9159e4cbd346421c9b66.png";

/***/ }),

/***/ "./src/icons/Snow.png":
/*!****************************!*\
  !*** ./src/icons/Snow.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a3b486266abe967fca2.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsaUNBQWlDLG1DQUFtQyw4Q0FBOEMscUNBQXFDLCtD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RUE7QUFDQTtBQUNBLDZEQUE2RCxjQUFjO0FBQzNFO0FBQ0E7QUFDQSxJQUFJO0FBQ0osSUFBSSx5REFBWTtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0QsY0FBYztBQUM5RDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osSUFBSSx5REFBWTtBQUNoQjtBQUNBOztBQUVBO0FBQ0EsVUFBVSxzQkFBc0I7QUFDaEMsNkVBQTZFLFNBQVMsT0FBTyxVQUFVLHNCQUFzQixRQUFRO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQSx3RkFBd0YsS0FBSyxzQkFBc0IsUUFBUTtBQUMzSDtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLE1BQU0seURBQVk7QUFDbEI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxJQUFJLCtEQUFzQixHQUFHLCtDQUFPO0FBQ3BDLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2l3ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vaXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9pd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9pd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vaXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2l3ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vaXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2l3ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9pd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9pd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9pd2VhdGhlci1hcHAvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9pd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaXdlYXRoZXItYXBwLy4vc3JjL3Byb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXByaW1hcnktYmdjOiByZ2IoMTcsIDE3LCAxNyk7XFxuICAtLXNlY29uZGFyeS1iZ2M6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIC0tcHJpbWFyeS1mYzogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgLS1mZi1wcmltYXJ5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgLS1kaXZpZGVyLXByaW1hcnk6IHJnYigxODksIDE4OSwgMTg5KTtcXG4gIC0tZGVmYXVsdC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDE3NmRlZywgIzAwZGJkZSAwJSwgI2ZjMDBmZiAxMDAlKTtcXG5cXG4gIC0tc3VubnktZ3JhZGllbnQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCAxMCUgMjAlLFxcbiAgICByZ2IoMjU1LCAyNTMsIDE2MSkgMTEuMyUsXFxuICAgIHJnYigyNDgsIDIzOCwgODkpIDQxLjIlLFxcbiAgICByZ2IoMjU1LCAyMjAsIDY2KSA3Ny44JVxcbiAgKTtcXG4gIC0tY2xvdWR5LWdyYWRpZW50OiByYWRpYWwtZ3JhZGllbnQoXFxuICAgIGNpcmNsZSBmYXJ0aGVzdC1jb3JuZXIgYXQgMTAlIDIwJSxcXG4gICAgcmdiYSgxNjEsIDI1NSwgMjU1LCAxKSAxMS4zJSxcXG4gICAgcmdiYSg2LCAyNTUsIDI1NSwgMSkgNDEuMiUsXFxuICAgIHJnYmEoMCwgMjE2LCAyMTYsIDEpIDc3LjglXFxuICApO1xcbiAgLS1yYWlueS1ncmFkaWVudDogcmFkaWFsLWdyYWRpZW50KFxcbiAgICBjaXJjbGUgZmFydGhlc3QtY29ybmVyIGF0IDEwJSAyMCUsXFxuICAgIHJnYigxNjEsIDE2NywgMjU1KSAxMS4zJSxcXG4gICAgcmdiKDYsIDkzLCAyNTUpIDQxLjIlLFxcbiAgICByZ2IoMCwgMTcsIDE3MCkgNzcuOCVcXG4gICk7XFxuICAtLXNub3ctZ3JhZGllbnQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCAxMCUgMjAlLFxcbiAgICByZ2IoMTYxLCAyNTIsIDI1NSkgMTEuMyUsXFxuICAgIHJnYig2LCAyMDUsIDI1NSkgNDEuMiUsXFxuICAgIHJnYigwLCAxODEsIDIzNikgNzcuOCVcXG4gICk7XFxuICAtLWV4dHJlbWUtZ3JhZGllbnQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCAxMCUgMjAlLFxcbiAgICByZ2IoMjU1LCAxMzksIDEzMSkgMTEuMyUsXFxuICAgIHJnYigyNTUsIDEyNCwgMTE1KSA0MS4yJSxcXG4gICAgcmdiKDIzNiwgNTUsIDApIDc3LjglXFxuICApO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbnAsXFxuYnV0dG9uLFxcbmkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXByaW1hcnkpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWRlZmF1bHQtZ3JhZGllbnQpO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5DbGVhciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1zdW5ueS1ncmFkaWVudCk7XFxufVxcblxcbi5SYWluIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLXJhaW55LWdyYWRpZW50KTtcXG59XFxuXFxuLlNub3cge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tc25vdy1ncmFkaWVudCk7XFxufVxcblxcbi5DbG91ZHMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tY2xvdWR5LWdyYWRpZW50KTtcXG59XFxuXFxuLkV4dHJlbWUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tc3VubnktZ3JhZGllbnQpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lcnJvci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjZyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmdjKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXI6IHJnYigyNTUsIDkyLCA5Mikgc29saWQgM3B4O1xcbiAgbWluLXdpZHRoOiAyMHJlbTtcXG4gIG1heC13aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmVycm9yLWNvbnRhaW5lciBpIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZXJyb3ItY29udGFpbmVyIHAge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4ubm9uZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iZ2MpO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1pbi13aWR0aDogMjByZW07XFxuICBtYXgtd2lkdGg6IDQwcmVtO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbjogMC41cmVtIDFyZW07XFxufVxcblxcbi5jb250YWluZXItaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1kaXZpZGVyLXByaW1hcnkpO1xcbn1cXG5cXG4uY29udGFpbmVyLWlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogMXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZGl2aWRlci1wcmltYXJ5KTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDAgMCAwIDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxuICBib3gtc2hhZG93OiAwIDAgMTAwMDBweCAxMDAwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gIGJvcmRlcjogMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHRyYW5zaXRpb246IGJvcmRlciAyNTBtcyBlYXNlLWluO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMCA1cHggMCAwO1xcbn1cXG5cXG4uc2VhcmNoLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDNweCA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluO1xcbn1cXG5cXG4uc2VhcmNoLWJ0bjpob3ZlciAuZmEtbWFnbmlmeWluZy1nbGFzcyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi51c2VyLWxvY2F0aW9uLWJ0biB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogY2xhbXAoMzAlLCA0MCUpO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDAwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi51c2VyLWxvY2F0aW9uLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxufVxcblxcbi5jb250YWluZXItb3V0cHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi53ZWF0aGVyLWljb24ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4cmVtO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbn1cXG5cXG4ubG9jYXRpb24sXFxuLndlYXRoZXIge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi53ZWF0aGVyLWRldGFpbHMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZ2FwOiAwLjRyZW07XFxufVxcblxcbi53ZWF0aGVyLWRldGFpbHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLndlYXRoZXItaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC8qIGZsZXg6IDE7ICovXFxufVxcblxcbi53ZWF0aGVyLWJvZHkge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdy13cmFwOiB3cmFwO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG59XFxuXFxuLnVuaXQge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi51bml0LXRlbXBlcmF0dXJlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDhCQUE4QjtFQUM5Qix5Q0FBeUM7RUFDekMsZ0NBQWdDO0VBQ2hDLDBDQUEwQztFQUMxQyxxQ0FBcUM7RUFDckMscUVBQXFFOztFQUVyRTs7Ozs7R0FLQztFQUNEOzs7OztHQUtDO0VBQ0Q7Ozs7O0dBS0M7RUFDRDs7Ozs7R0FLQztFQUNEOzs7OztHQUtDO0FBQ0g7O0FBRUE7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7Ozs7Ozs7O0VBU0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSwwQ0FBMEM7RUFDMUMsd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWJnYzogcmdiKDE3LCAxNywgMTcpO1xcbiAgLS1zZWNvbmRhcnktYmdjOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAtLXByaW1hcnktZmM6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIC0tZmYtcHJpbWFyeTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIC0tZGl2aWRlci1wcmltYXJ5OiByZ2IoMTg5LCAxODksIDE4OSk7XFxuICAtLWRlZmF1bHQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxNzZkZWcsICMwMGRiZGUgMCUsICNmYzAwZmYgMTAwJSk7XFxuXFxuICAtLXN1bm55LWdyYWRpZW50OiByYWRpYWwtZ3JhZGllbnQoXFxuICAgIGNpcmNsZSBmYXJ0aGVzdC1jb3JuZXIgYXQgMTAlIDIwJSxcXG4gICAgcmdiKDI1NSwgMjUzLCAxNjEpIDExLjMlLFxcbiAgICByZ2IoMjQ4LCAyMzgsIDg5KSA0MS4yJSxcXG4gICAgcmdiKDI1NSwgMjIwLCA2NikgNzcuOCVcXG4gICk7XFxuICAtLWNsb3VkeS1ncmFkaWVudDogcmFkaWFsLWdyYWRpZW50KFxcbiAgICBjaXJjbGUgZmFydGhlc3QtY29ybmVyIGF0IDEwJSAyMCUsXFxuICAgIHJnYmEoMTYxLCAyNTUsIDI1NSwgMSkgMTEuMyUsXFxuICAgIHJnYmEoNiwgMjU1LCAyNTUsIDEpIDQxLjIlLFxcbiAgICByZ2JhKDAsIDIxNiwgMjE2LCAxKSA3Ny44JVxcbiAgKTtcXG4gIC0tcmFpbnktZ3JhZGllbnQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCAxMCUgMjAlLFxcbiAgICByZ2IoMTYxLCAxNjcsIDI1NSkgMTEuMyUsXFxuICAgIHJnYig2LCA5MywgMjU1KSA0MS4yJSxcXG4gICAgcmdiKDAsIDE3LCAxNzApIDc3LjglXFxuICApO1xcbiAgLS1zbm93LWdyYWRpZW50OiByYWRpYWwtZ3JhZGllbnQoXFxuICAgIGNpcmNsZSBmYXJ0aGVzdC1jb3JuZXIgYXQgMTAlIDIwJSxcXG4gICAgcmdiKDE2MSwgMjUyLCAyNTUpIDExLjMlLFxcbiAgICByZ2IoNiwgMjA1LCAyNTUpIDQxLjIlLFxcbiAgICByZ2IoMCwgMTgxLCAyMzYpIDc3LjglXFxuICApO1xcbiAgLS1leHRyZW1lLWdyYWRpZW50OiByYWRpYWwtZ3JhZGllbnQoXFxuICAgIGNpcmNsZSBmYXJ0aGVzdC1jb3JuZXIgYXQgMTAlIDIwJSxcXG4gICAgcmdiKDI1NSwgMTM5LCAxMzEpIDExLjMlLFxcbiAgICByZ2IoMjU1LCAxMjQsIDExNSkgNDEuMiUsXFxuICAgIHJnYigyMzYsIDU1LCAwKSA3Ny44JVxcbiAgKTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5wLFxcbmJ1dHRvbixcXG5pIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1wcmltYXJ5KTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1kZWZhdWx0LWdyYWRpZW50KTtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uQ2xlYXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tc3VubnktZ3JhZGllbnQpO1xcbn1cXG5cXG4uUmFpbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1yYWlueS1ncmFkaWVudCk7XFxufVxcblxcbi5Tbm93IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLXNub3ctZ3JhZGllbnQpO1xcbn1cXG5cXG4uQ2xvdWRzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWNsb3VkeS1ncmFkaWVudCk7XFxufVxcblxcbi5FeHRyZW1lIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLXN1bm55LWdyYWRpZW50KTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZXJyb3ItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC42cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJnYyk7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiByZ2IoMjU1LCA5MiwgOTIpIHNvbGlkIDNweDtcXG4gIG1pbi13aWR0aDogMjByZW07XFxuICBtYXgtd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5lcnJvci1jb250YWluZXIgaSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmVycm9yLWNvbnRhaW5lciBwIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLm5vbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmdjKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBtaW4td2lkdGg6IDIwcmVtO1xcbiAgbWF4LXdpZHRoOiA0MHJlbTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW46IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4uY29udGFpbmVyLWhlYWRlciB7XFxuICBwYWRkaW5nOiAwLjhyZW07XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZGl2aWRlci1wcmltYXJ5KTtcXG59XFxuXFxuLmNvbnRhaW5lci1pbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDFyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWRpdmlkZXItcHJpbWFyeSk7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNTAlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwMDAwcHggMTAwMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICBib3JkZXI6IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMjUwbXMgZWFzZS1pbjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAgNXB4IDAgMDtcXG59XFxuXFxuLnNlYXJjaC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbjtcXG59XFxuXFxuLnNlYXJjaC1idG46aG92ZXIgLmZhLW1hZ25pZnlpbmctZ2xhc3Mge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4udXNlci1sb2NhdGlvbi1idG4ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IGNsYW1wKDMwJSwgNDAlKTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjMDAwMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udXNlci1sb2NhdGlvbi1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbn1cXG5cXG4uY29udGFpbmVyLW91dHB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ud2VhdGhlci1pY29uIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogOHJlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG59XFxuXFxuLmxvY2F0aW9uLFxcbi53ZWF0aGVyIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ud2VhdGhlci1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMCU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGdhcDogMC40cmVtO1xcbn1cXG5cXG4ud2VhdGhlci1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi53ZWF0aGVyLWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAvKiBmbGV4OiAxOyAqL1xcbn1cXG5cXG4ud2VhdGhlci1ib2R5IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3ctd3JhcDogd3JhcDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcblxcbi51bml0IHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4udW5pdC10ZW1wZXJhdHVyZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IENsZWFyIGZyb20gJy4vaWNvbnMvQ2xlYXIucG5nJztcbmltcG9ydCBDbG91ZHMgZnJvbSAnLi9pY29ucy9DbG91ZHMucG5nJztcbmltcG9ydCBFeHRyZW1lIGZyb20gJy4vaWNvbnMvRXh0cmVtZS5wbmcnO1xuaW1wb3J0IFJhaW4gZnJvbSAnLi9pY29ucy9SYWluLnBuZyc7XG5pbXBvcnQgU25vdyBmcm9tICcuL2ljb25zL1Nub3cucG5nJztcbmltcG9ydCBEZWZhdWx0IGZyb20gJy4vaWNvbnMvRGVmYXVsdC5wbmcnO1xuXG5jb25zdCBsb2NhdGlvbkRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1sb2NhdGlvbl0nKTtcbmNvbnN0IHRlbXBlcmF0dXJlRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlbXBlcmF0dXJlXScpO1xuY29uc3Qgd2VhdGhlckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS13ZWF0aGVyXScpO1xuY29uc3Qgd2luZFNwZWVkRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXdpbmQtc3BlZWRdJyk7XG5jb25zdCBodW1pZGl0eURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1odW1pZGl0eV0nKTtcbmV4cG9ydCBjb25zdCB3ZWF0aGVySWNvbkRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS13ZWF0aGVyLWljb25dJyk7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbmNvbnN0IGVycm9yQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZXJyb3ItY29udGFpbmVyXScpO1xuXG5mdW5jdGlvbiBkaXNwbGF5TG9jYXRpb24oY2l0eSwgY291bnRyeSkge1xuICBsb2NhdGlvbkRpc3BsYXkuaW5uZXJIVE1MID0gYCR7Y2l0eX0sICR7Y291bnRyeX1gO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5QmFja2dyb3VuZCh3ZWF0aGVyQ2F0ZWdvcnkpIHtcbiAgYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gIGJvZHkuY2xhc3NMaXN0LmFkZCh3ZWF0aGVyQ2F0ZWdvcnkpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlckljb24od2VhdGhlckNhdGVnb3J5KSB7XG4gIHN3aXRjaCAod2VhdGhlckNhdGVnb3J5KSB7XG4gICAgY2FzZSAnQ2xlYXInOlxuICAgICAgd2VhdGhlckljb25EaXNwbGF5LnNyYyA9IENsZWFyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQ2xvdWRzJzpcbiAgICAgIHdlYXRoZXJJY29uRGlzcGxheS5zcmMgPSBDbG91ZHM7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdSYWluJzpcbiAgICAgIHdlYXRoZXJJY29uRGlzcGxheS5zcmMgPSBSYWluO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnU25vdyc6XG4gICAgICB3ZWF0aGVySWNvbkRpc3BsYXkuc3JjID0gU25vdztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0V4dHJlbWUnOlxuICAgICAgd2VhdGhlckljb25EaXNwbGF5LnNyYyA9IEV4dHJlbWU7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgd2VhdGhlckljb25EaXNwbGF5LnNyYyA9IERlZmF1bHQ7XG4gIH1cbiAgZGlzcGxheUJhY2tncm91bmQod2VhdGhlckNhdGVnb3J5KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIod2VhdGhlcikge1xuICB3ZWF0aGVyRGlzcGxheS5pbm5lckhUTUwgPSB3ZWF0aGVyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd2VhdGhlci5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRlbXBlcmF0dXJlKHRlbXBlcmF0dXJlKSB7XG4gIHRlbXBlcmF0dXJlRGlzcGxheS5pbm5lckhUTUwgPSBgJHt0ZW1wZXJhdHVyZX08c3BhbiBjbGFzcz1cInVuaXQtdGVtcGVyYXR1cmVcIj7CsEM8L3NwYW4+YDtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUh1bWlkaXR5KGh1bWlkaXR5KSB7XG4gIGh1bWlkaXR5RGlzcGxheS5pbm5lckhUTUwgPSBgJHtodW1pZGl0eX0gPHNwYW4gY2xhc3M9XCJ1bml0XCI+JTwvc3Bhbj5gO1xufVxuZnVuY3Rpb24gZGlzcGxheVdpbmRTcGVlZCh3aW5kU3BlZWQpIHtcbiAgd2luZFNwZWVkRGlzcGxheS5pbm5lckhUTUwgPSBgJHt3aW5kU3BlZWR9IDxzcGFuIGNsYXNzPVwidW5pdFwiPm0vczwvc3Bhbj5gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUVycm9yKGVycm9yKSB7XG4gIGVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcbiAgZXJyb3JDb250YWluZXIuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1jaXJjbGUteG1hcmtcIj48L2k+PHA+RXJyb3I6PC9wPjxwIGRhdGEtZXJyb3ItbWVzc2FnZT48L3A+JztcbiAgY29uc3QgZXJyb3JNZXNzYWdlRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVycm9yLW1lc3NhZ2VdJyk7XG4gIGVycm9yTWVzc2FnZURpc3BsYXkuaW5uZXJUZXh0ID0gZXJyb3I7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGVycm9yQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcbiAgfSwgMzAwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEaXNwbGF5KFxuICBjaXR5LFxuICBjb3VudHJ5LFxuICB3ZWF0aGVyQ2F0ZWdvcnksXG4gIHdlYXRoZXIsXG4gIHRlbXBlcmF0dXJlLFxuICBodW1pZGl0eSxcbiAgd2luZFNwZWVkLFxuKSB7XG4gIGRpc3BsYXlMb2NhdGlvbihjaXR5LCBjb3VudHJ5KTtcbiAgZGlzcGxheVdlYXRoZXJJY29uKHdlYXRoZXJDYXRlZ29yeSk7XG4gIGRpc3BsYXlXZWF0aGVyKHdlYXRoZXIpO1xuICBkaXNwbGF5VGVtcGVyYXR1cmUodGVtcGVyYXR1cmUpO1xuICBkaXNwbGF5SHVtaWRpdHkoaHVtaWRpdHkpO1xuICBkaXNwbGF5V2luZFNwZWVkKHdpbmRTcGVlZCk7XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBydW5XZWF0aGVyQXBwIGZyb20gJy4vcHJvamVjdC5qcyc7XG5cbnJ1bldlYXRoZXJBcHAoKTtcbiIsImltcG9ydCB7IHJlbmRlckRpc3BsYXksIGRpc3BsYXlFcnJvciwgd2VhdGhlckljb25EaXNwbGF5IH0gZnJvbSAnLi9kaXNwbGF5LmpzJztcbmltcG9ydCBEZWZhdWx0IGZyb20gJy4vaWNvbnMvRGVmYXVsdC5wbmcnO1xuXG5jb25zdCB1c2VyTG9jYXRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS11c2VyLWxvY2F0aW9uLWJ1dHRvbl0nKTtcbmNvbnN0IGxvY2F0aW9uRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxvY2F0aW9uLWZvcm1dJyk7XG5jb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2VhcmNoLWlucHV0XScpO1xuXG5jb25zdCBBUElfS0VZID0gJzdjNTIyMTA1NDI2OTgwN2MzMmExMTQ3MGJlNjY3M2YyJztcblxuZnVuY3Rpb24gZ2V0V2VhdGhlcihyZXNwb25zZSkge1xuICBjb25zdCBjaXR5ID0gcmVzcG9uc2UubmFtZTtcbiAgY29uc3QgeyBjb3VudHJ5IH0gPSByZXNwb25zZS5zeXM7XG4gIGNvbnN0IHdlYXRoZXJDYXRlZ29yeSA9IHJlc3BvbnNlLndlYXRoZXJbMF0ubWFpbjtcbiAgY29uc3Qgd2VhdGhlciA9IHJlc3BvbnNlLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gcmVzcG9uc2UubWFpbi50ZW1wO1xuICBjb25zdCB7IGh1bWlkaXR5IH0gPSByZXNwb25zZS5tYWluO1xuICBjb25zdCB3aW5kU3BlZWQgPSByZXNwb25zZS53aW5kLnNwZWVkO1xuICByZW5kZXJEaXNwbGF5KGNpdHksIGNvdW50cnksIHdlYXRoZXJDYXRlZ29yeSwgd2VhdGhlciwgdGVtcGVyYXR1cmUsIGh1bWlkaXR5LCB3aW5kU3BlZWQpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaENvb3JkaW5hdGVzKExPQ0FUSU9OX0NPT1JESU5BVEVTX0FQSSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goTE9DQVRJT05fQ09PUkRJTkFURVNfQVBJLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBjb25zdCBjb29yZGluYXRlc0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgZ2V0V2VhdGhlcihjb29yZGluYXRlc0RhdGEpO1xuICB9IGNhdGNoIHtcbiAgICBkaXNwbGF5RXJyb3IoJ0NpdHkgbm90IGZvdW5kJyk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKFdFQVRIRVJfQVBJKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChXRUFUSEVSX0FQSSwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgZ2V0V2VhdGhlcih3ZWF0aGVyRGF0YSk7XG4gICAgY29uc29sZS5sb2coJ09LJyk7XG4gIH0gY2F0Y2gge1xuICAgIGRpc3BsYXlFcnJvcignV2VhdGhlciBub3QgZm91bmQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRVc2VyTG9jYXRpb24ocG9zaXRpb24pIHtcbiAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBwb3NpdGlvbi5jb29yZHM7XG4gIGNvbnN0IFdFQVRIRVJfQVBJID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdGl0dWRlfSZsb249JHtsb25naXR1ZGV9JnVuaXRzPW1ldHJpYyZhcHBpZD0ke0FQSV9LRVl9YDtcbiAgZmV0Y2hXZWF0aGVyKFdFQVRIRVJfQVBJKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXMoY2l0eSkge1xuICBjb25zdCBMT0NBVElPTl9DT09SRElOQVRFU19BUEkgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZhcHBpZD0ke0FQSV9LRVl9YDtcbiAgZmV0Y2hDb29yZGluYXRlcyhMT0NBVElPTl9DT09SRElOQVRFU19BUEkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBydW5XZWF0aGVyQXBwKCkge1xuICB1c2VyTG9jYXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihnZXRVc2VyTG9jYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5RXJyb3IoJ0Nhbm5vdCBnZXQgTG9jYXRpb24nKTtcbiAgICB9XG4gIH0pO1xuXG4gIGxvY2F0aW9uRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGxvY2F0aW9uSW5wdXQudmFsdWU7XG4gICAgaWYgKGxvY2F0aW9uID09IG51bGwgfHwgbG9jYXRpb24gPT09ICcnKSByZXR1cm47XG4gICAgbG9jYXRpb25JbnB1dC52YWx1ZSA9IG51bGw7XG4gICAgZ2V0Q29vcmRpbmF0ZXMobG9jYXRpb24pO1xuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIHdlYXRoZXJJY29uRGlzcGxheS5zcmMgPSBEZWZhdWx0O1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==