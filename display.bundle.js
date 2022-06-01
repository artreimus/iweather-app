"use strict";
(self["webpackChunkiweather_app"] = self["webpackChunkiweather_app"] || []).push([["display"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/display.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0U7QUFDRTtBQUNOO0FBQ0E7QUFDTTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyxLQUFLLElBQUksUUFBUTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNkNBQUs7QUFDcEM7QUFDQTtBQUNBLCtCQUErQiw4Q0FBTTtBQUNyQztBQUNBO0FBQ0EsK0JBQStCLDRDQUFJO0FBQ25DO0FBQ0E7QUFDQSwrQkFBK0IsNENBQUk7QUFDbkM7QUFDQTtBQUNBLCtCQUErQiwrQ0FBTztBQUN0QztBQUNBO0FBQ0EsK0JBQStCLCtDQUFPO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsWUFBWTtBQUNoRDs7QUFFQTtBQUNBLGlDQUFpQyxVQUFVO0FBQzNDO0FBQ0E7QUFDQSxrQ0FBa0MsV0FBVztBQUM3Qzs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXdlYXRoZXItYXBwLy4vc3JjL2Rpc3BsYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsZWFyIGZyb20gJy4vaWNvbnMvQ2xlYXIucG5nJztcbmltcG9ydCBDbG91ZHMgZnJvbSAnLi9pY29ucy9DbG91ZHMucG5nJztcbmltcG9ydCBFeHRyZW1lIGZyb20gJy4vaWNvbnMvRXh0cmVtZS5wbmcnO1xuaW1wb3J0IFJhaW4gZnJvbSAnLi9pY29ucy9SYWluLnBuZyc7XG5pbXBvcnQgU25vdyBmcm9tICcuL2ljb25zL1Nub3cucG5nJztcbmltcG9ydCBEZWZhdWx0IGZyb20gJy4vaWNvbnMvRGVmYXVsdC5wbmcnO1xuXG5jb25zdCBsb2NhdGlvbkRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1sb2NhdGlvbl0nKTtcbmNvbnN0IHRlbXBlcmF0dXJlRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlbXBlcmF0dXJlXScpO1xuY29uc3Qgd2VhdGhlckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS13ZWF0aGVyXScpO1xuY29uc3Qgd2luZFNwZWVkRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXdpbmQtc3BlZWRdJyk7XG5jb25zdCBodW1pZGl0eURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1odW1pZGl0eV0nKTtcbmV4cG9ydCBjb25zdCB3ZWF0aGVySWNvbkRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS13ZWF0aGVyLWljb25dJyk7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbmNvbnN0IGVycm9yQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZXJyb3ItY29udGFpbmVyXScpO1xuXG5mdW5jdGlvbiBkaXNwbGF5TG9jYXRpb24oY2l0eSwgY291bnRyeSkge1xuICBsb2NhdGlvbkRpc3BsYXkuaW5uZXJIVE1MID0gYCR7Y2l0eX0sICR7Y291bnRyeX1gO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5QmFja2dyb3VuZCh3ZWF0aGVyQ2F0ZWdvcnkpIHtcbiAgYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gIGJvZHkuY2xhc3NMaXN0LmFkZCh3ZWF0aGVyQ2F0ZWdvcnkpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlckljb24od2VhdGhlckNhdGVnb3J5KSB7XG4gIHN3aXRjaCAod2VhdGhlckNhdGVnb3J5KSB7XG4gICAgY2FzZSAnQ2xlYXInOlxuICAgICAgd2VhdGhlckljb25EaXNwbGF5LnNyYyA9IENsZWFyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQ2xvdWRzJzpcbiAgICAgIHdlYXRoZXJJY29uRGlzcGxheS5zcmMgPSBDbG91ZHM7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdSYWluJzpcbiAgICAgIHdlYXRoZXJJY29uRGlzcGxheS5zcmMgPSBSYWluO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnU25vdyc6XG4gICAgICB3ZWF0aGVySWNvbkRpc3BsYXkuc3JjID0gU25vdztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0V4dHJlbWUnOlxuICAgICAgd2VhdGhlckljb25EaXNwbGF5LnNyYyA9IEV4dHJlbWU7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgd2VhdGhlckljb25EaXNwbGF5LnNyYyA9IERlZmF1bHQ7XG4gIH1cbiAgZGlzcGxheUJhY2tncm91bmQod2VhdGhlckNhdGVnb3J5KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIod2VhdGhlcikge1xuICB3ZWF0aGVyRGlzcGxheS5pbm5lckhUTUwgPSB3ZWF0aGVyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd2VhdGhlci5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRlbXBlcmF0dXJlKHRlbXBlcmF0dXJlKSB7XG4gIHRlbXBlcmF0dXJlRGlzcGxheS5pbm5lckhUTUwgPSBgJHt0ZW1wZXJhdHVyZX08c3BhbiBjbGFzcz1cInVuaXQtdGVtcGVyYXR1cmVcIj7CsEM8L3NwYW4+YDtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUh1bWlkaXR5KGh1bWlkaXR5KSB7XG4gIGh1bWlkaXR5RGlzcGxheS5pbm5lckhUTUwgPSBgJHtodW1pZGl0eX0gPHNwYW4gY2xhc3M9XCJ1bml0XCI+JTwvc3Bhbj5gO1xufVxuZnVuY3Rpb24gZGlzcGxheVdpbmRTcGVlZCh3aW5kU3BlZWQpIHtcbiAgd2luZFNwZWVkRGlzcGxheS5pbm5lckhUTUwgPSBgJHt3aW5kU3BlZWR9IDxzcGFuIGNsYXNzPVwidW5pdFwiPm0vczwvc3Bhbj5gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUVycm9yKGVycm9yKSB7XG4gIGVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcbiAgZXJyb3JDb250YWluZXIuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1jaXJjbGUteG1hcmtcIj48L2k+PHA+RXJyb3I6PC9wPjxwIGRhdGEtZXJyb3ItbWVzc2FnZT48L3A+JztcbiAgY29uc3QgZXJyb3JNZXNzYWdlRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVycm9yLW1lc3NhZ2VdJyk7XG4gIGVycm9yTWVzc2FnZURpc3BsYXkuaW5uZXJUZXh0ID0gZXJyb3I7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGVycm9yQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcbiAgfSwgMzAwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEaXNwbGF5KFxuICBjaXR5LFxuICBjb3VudHJ5LFxuICB3ZWF0aGVyQ2F0ZWdvcnksXG4gIHdlYXRoZXIsXG4gIHRlbXBlcmF0dXJlLFxuICBodW1pZGl0eSxcbiAgd2luZFNwZWVkLFxuKSB7XG4gIGRpc3BsYXlMb2NhdGlvbihjaXR5LCBjb3VudHJ5KTtcbiAgZGlzcGxheVdlYXRoZXJJY29uKHdlYXRoZXJDYXRlZ29yeSk7XG4gIGRpc3BsYXlXZWF0aGVyKHdlYXRoZXIpO1xuICBkaXNwbGF5VGVtcGVyYXR1cmUodGVtcGVyYXR1cmUpO1xuICBkaXNwbGF5SHVtaWRpdHkoaHVtaWRpdHkpO1xuICBkaXNwbGF5V2luZFNwZWVkKHdpbmRTcGVlZCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=