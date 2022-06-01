"use strict";
(self["webpackChunkiweather_app"] = self["webpackChunkiweather_app"] || []).push([["project"],{

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
  temperatureDisplay.innerHTML = `${temperature}<span class="unit">°C</span>`;
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

function fetchCoordinates(LOCATION_COORDINATES_API) {
  fetch(LOCATION_COORDINATES_API).then((response) => response.json()).then((response) => {
    getWeather(response);
  }).catch(() => {
    (0,_display_js__WEBPACK_IMPORTED_MODULE_0__.displayError)('City not found');
  });
}

function fetchWeather(WEATHER_API) {
  fetch(WEATHER_API).then((response) => response.json()).then((response) => {
    getWeather(response);
  }).catch(() => {
    (0,_display_js__WEBPACK_IMPORTED_MODULE_0__.displayError)('Weather not found');
  });
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/project.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0U7QUFDRTtBQUNOO0FBQ0E7QUFDTTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyxLQUFLLElBQUksUUFBUTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNkNBQUs7QUFDcEM7QUFDQTtBQUNBLCtCQUErQiw4Q0FBTTtBQUNyQztBQUNBO0FBQ0EsK0JBQStCLDRDQUFJO0FBQ25DO0FBQ0E7QUFDQSwrQkFBK0IsNENBQUk7QUFDbkM7QUFDQTtBQUNBLCtCQUErQiwrQ0FBTztBQUN0QztBQUNBO0FBQ0EsK0JBQStCLCtDQUFPO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsWUFBWTtBQUNoRDs7QUFFQTtBQUNBLGlDQUFpQyxVQUFVO0FBQzNDO0FBQ0E7QUFDQSxrQ0FBa0MsV0FBVztBQUM3Qzs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGK0U7QUFDckM7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFVBQVUsV0FBVztBQUNyQjtBQUNBLEVBQUUsMERBQWE7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsSUFBSSx5REFBWTtBQUNoQixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILElBQUkseURBQVk7QUFDaEIsR0FBRztBQUNIOztBQUVBO0FBQ0EsVUFBVSxzQkFBc0I7QUFDaEMsNkVBQTZFLFNBQVMsT0FBTyxVQUFVLHNCQUFzQixRQUFRO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQSx3RkFBd0YsS0FBSyxzQkFBc0IsUUFBUTtBQUMzSDtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLE1BQU0seURBQVk7QUFDbEI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxJQUFJLCtEQUFzQixHQUFHLCtDQUFPO0FBQ3BDLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2l3ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL2l3ZWF0aGVyLWFwcC8uL3NyYy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbGVhciBmcm9tICcuL2ljb25zL0NsZWFyLnBuZyc7XG5pbXBvcnQgQ2xvdWRzIGZyb20gJy4vaWNvbnMvQ2xvdWRzLnBuZyc7XG5pbXBvcnQgRXh0cmVtZSBmcm9tICcuL2ljb25zL0V4dHJlbWUucG5nJztcbmltcG9ydCBSYWluIGZyb20gJy4vaWNvbnMvUmFpbi5wbmcnO1xuaW1wb3J0IFNub3cgZnJvbSAnLi9pY29ucy9Tbm93LnBuZyc7XG5pbXBvcnQgRGVmYXVsdCBmcm9tICcuL2ljb25zL0RlZmF1bHQucG5nJztcblxuY29uc3QgbG9jYXRpb25EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbG9jYXRpb25dJyk7XG5jb25zdCB0ZW1wZXJhdHVyZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZW1wZXJhdHVyZV0nKTtcbmNvbnN0IHdlYXRoZXJEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtd2VhdGhlcl0nKTtcbmNvbnN0IHdpbmRTcGVlZERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS13aW5kLXNwZWVkXScpO1xuY29uc3QgaHVtaWRpdHlEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaHVtaWRpdHldJyk7XG5leHBvcnQgY29uc3Qgd2VhdGhlckljb25EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtd2VhdGhlci1pY29uXScpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG5jb25zdCBlcnJvckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVycm9yLWNvbnRhaW5lcl0nKTtcblxuZnVuY3Rpb24gZGlzcGxheUxvY2F0aW9uKGNpdHksIGNvdW50cnkpIHtcbiAgbG9jYXRpb25EaXNwbGF5LmlubmVySFRNTCA9IGAke2NpdHl9LCAke2NvdW50cnl9YDtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUJhY2tncm91bmQod2VhdGhlckNhdGVnb3J5KSB7XG4gIGJvZHkucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICBib2R5LmNsYXNzTGlzdC5hZGQod2VhdGhlckNhdGVnb3J5KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXJJY29uKHdlYXRoZXJDYXRlZ29yeSkge1xuICBzd2l0Y2ggKHdlYXRoZXJDYXRlZ29yeSkge1xuICAgIGNhc2UgJ0NsZWFyJzpcbiAgICAgIHdlYXRoZXJJY29uRGlzcGxheS5zcmMgPSBDbGVhcjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0Nsb3Vkcyc6XG4gICAgICB3ZWF0aGVySWNvbkRpc3BsYXkuc3JjID0gQ2xvdWRzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUmFpbic6XG4gICAgICB3ZWF0aGVySWNvbkRpc3BsYXkuc3JjID0gUmFpbjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1Nub3cnOlxuICAgICAgd2VhdGhlckljb25EaXNwbGF5LnNyYyA9IFNub3c7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdFeHRyZW1lJzpcbiAgICAgIHdlYXRoZXJJY29uRGlzcGxheS5zcmMgPSBFeHRyZW1lO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHdlYXRoZXJJY29uRGlzcGxheS5zcmMgPSBEZWZhdWx0O1xuICB9XG4gIGRpc3BsYXlCYWNrZ3JvdW5kKHdlYXRoZXJDYXRlZ29yeSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyKHdlYXRoZXIpIHtcbiAgd2VhdGhlckRpc3BsYXkuaW5uZXJIVE1MID0gd2VhdGhlci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdlYXRoZXIuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUZW1wZXJhdHVyZSh0ZW1wZXJhdHVyZSkge1xuICB0ZW1wZXJhdHVyZURpc3BsYXkuaW5uZXJIVE1MID0gYCR7dGVtcGVyYXR1cmV9PHNwYW4gY2xhc3M9XCJ1bml0XCI+wrBDPC9zcGFuPmA7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlIdW1pZGl0eShodW1pZGl0eSkge1xuICBodW1pZGl0eURpc3BsYXkuaW5uZXJIVE1MID0gYCR7aHVtaWRpdHl9IDxzcGFuIGNsYXNzPVwidW5pdFwiPiU8L3NwYW4+YDtcbn1cbmZ1bmN0aW9uIGRpc3BsYXlXaW5kU3BlZWQod2luZFNwZWVkKSB7XG4gIHdpbmRTcGVlZERpc3BsYXkuaW5uZXJIVE1MID0gYCR7d2luZFNwZWVkfSA8c3BhbiBjbGFzcz1cInVuaXRcIj5tL3M8L3NwYW4+YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlFcnJvcihlcnJvcikge1xuICBlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XG4gIGVycm9yQ29udGFpbmVyLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtY2lyY2xlLXhtYXJrXCI+PC9pPjxwPkVycm9yOjwvcD48cCBkYXRhLWVycm9yLW1lc3NhZ2U+PC9wPic7XG4gIGNvbnN0IGVycm9yTWVzc2FnZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lcnJvci1tZXNzYWdlXScpO1xuICBlcnJvck1lc3NhZ2VEaXNwbGF5LmlubmVyVGV4dCA9IGVycm9yO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBlcnJvckNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdub25lJyk7XG4gIH0sIDMwMDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRGlzcGxheShcbiAgY2l0eSxcbiAgY291bnRyeSxcbiAgd2VhdGhlckNhdGVnb3J5LFxuICB3ZWF0aGVyLFxuICB0ZW1wZXJhdHVyZSxcbiAgaHVtaWRpdHksXG4gIHdpbmRTcGVlZCxcbikge1xuICBkaXNwbGF5TG9jYXRpb24oY2l0eSwgY291bnRyeSk7XG4gIGRpc3BsYXlXZWF0aGVySWNvbih3ZWF0aGVyQ2F0ZWdvcnkpO1xuICBkaXNwbGF5V2VhdGhlcih3ZWF0aGVyKTtcbiAgZGlzcGxheVRlbXBlcmF0dXJlKHRlbXBlcmF0dXJlKTtcbiAgZGlzcGxheUh1bWlkaXR5KGh1bWlkaXR5KTtcbiAgZGlzcGxheVdpbmRTcGVlZCh3aW5kU3BlZWQpO1xufVxuIiwiaW1wb3J0IHsgcmVuZGVyRGlzcGxheSwgZGlzcGxheUVycm9yLCB3ZWF0aGVySWNvbkRpc3BsYXkgfSBmcm9tICcuL2Rpc3BsYXkuanMnO1xuaW1wb3J0IERlZmF1bHQgZnJvbSAnLi9pY29ucy9EZWZhdWx0LnBuZyc7XG5cbmNvbnN0IHVzZXJMb2NhdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXVzZXItbG9jYXRpb24tYnV0dG9uXScpO1xuY29uc3QgbG9jYXRpb25Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbG9jYXRpb24tZm9ybV0nKTtcbmNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zZWFyY2gtaW5wdXRdJyk7XG5cbmNvbnN0IEFQSV9LRVkgPSAnN2M1MjIxMDU0MjY5ODA3YzMyYTExNDcwYmU2NjczZjInO1xuXG5mdW5jdGlvbiBnZXRXZWF0aGVyKHJlc3BvbnNlKSB7XG4gIGNvbnN0IGNpdHkgPSByZXNwb25zZS5uYW1lO1xuICBjb25zdCB7IGNvdW50cnkgfSA9IHJlc3BvbnNlLnN5cztcbiAgY29uc3Qgd2VhdGhlckNhdGVnb3J5ID0gcmVzcG9uc2Uud2VhdGhlclswXS5tYWluO1xuICBjb25zdCB3ZWF0aGVyID0gcmVzcG9uc2Uud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSByZXNwb25zZS5tYWluLnRlbXA7XG4gIGNvbnN0IHsgaHVtaWRpdHkgfSA9IHJlc3BvbnNlLm1haW47XG4gIGNvbnN0IHdpbmRTcGVlZCA9IHJlc3BvbnNlLndpbmQuc3BlZWQ7XG4gIHJlbmRlckRpc3BsYXkoY2l0eSwgY291bnRyeSwgd2VhdGhlckNhdGVnb3J5LCB3ZWF0aGVyLCB0ZW1wZXJhdHVyZSwgaHVtaWRpdHksIHdpbmRTcGVlZCk7XG59XG5cbmZ1bmN0aW9uIGZldGNoQ29vcmRpbmF0ZXMoTE9DQVRJT05fQ09PUkRJTkFURVNfQVBJKSB7XG4gIGZldGNoKExPQ0FUSU9OX0NPT1JESU5BVEVTX0FQSSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICBnZXRXZWF0aGVyKHJlc3BvbnNlKTtcbiAgfSkuY2F0Y2goKCkgPT4ge1xuICAgIGRpc3BsYXlFcnJvcignQ2l0eSBub3QgZm91bmQnKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZldGNoV2VhdGhlcihXRUFUSEVSX0FQSSkge1xuICBmZXRjaChXRUFUSEVSX0FQSSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICBnZXRXZWF0aGVyKHJlc3BvbnNlKTtcbiAgfSkuY2F0Y2goKCkgPT4ge1xuICAgIGRpc3BsYXlFcnJvcignV2VhdGhlciBub3QgZm91bmQnKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJMb2NhdGlvbihwb3NpdGlvbikge1xuICBjb25zdCB7IGxhdGl0dWRlLCBsb25naXR1ZGUgfSA9IHBvc2l0aW9uLmNvb3JkcztcbiAgY29uc3QgV0VBVEhFUl9BUEkgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0aXR1ZGV9Jmxvbj0ke2xvbmdpdHVkZX0mdW5pdHM9bWV0cmljJmFwcGlkPSR7QVBJX0tFWX1gO1xuICBmZXRjaFdlYXRoZXIoV0VBVEhFUl9BUEkpO1xufVxuXG5mdW5jdGlvbiBnZXRDb29yZGluYXRlcyhjaXR5KSB7XG4gIGNvbnN0IExPQ0FUSU9OX0NPT1JESU5BVEVTX0FQSSA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPSR7QVBJX0tFWX1gO1xuICBmZXRjaENvb3JkaW5hdGVzKExPQ0FUSU9OX0NPT1JESU5BVEVTX0FQSSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJ1bldlYXRoZXJBcHAoKSB7XG4gIHVzZXJMb2NhdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGdldFVzZXJMb2NhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXlFcnJvcignQ2Fubm90IGdldCBMb2NhdGlvbicpO1xuICAgIH1cbiAgfSk7XG5cbiAgbG9jYXRpb25Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gbG9jYXRpb25JbnB1dC52YWx1ZTtcbiAgICBpZiAobG9jYXRpb24gPT0gbnVsbCB8fCBsb2NhdGlvbiA9PT0gJycpIHJldHVybjtcbiAgICBsb2NhdGlvbklucHV0LnZhbHVlID0gbnVsbDtcbiAgICBnZXRDb29yZGluYXRlcyhsb2NhdGlvbik7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgd2VhdGhlckljb25EaXNwbGF5LnNyYyA9IERlZmF1bHQ7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9