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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/project.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0U7QUFDRTtBQUNOO0FBQ0E7QUFDTTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyxLQUFLLElBQUksUUFBUTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNkNBQUs7QUFDcEM7QUFDQTtBQUNBLCtCQUErQiw4Q0FBTTtBQUNyQztBQUNBO0FBQ0EsK0JBQStCLDRDQUFJO0FBQ25DO0FBQ0E7QUFDQSwrQkFBK0IsNENBQUk7QUFDbkM7QUFDQTtBQUNBLCtCQUErQiwrQ0FBTztBQUN0QztBQUNBO0FBQ0EsK0JBQStCLCtDQUFPO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsWUFBWTtBQUNoRDs7QUFFQTtBQUNBLGlDQUFpQyxVQUFVO0FBQzNDO0FBQ0E7QUFDQSxrQ0FBa0MsV0FBVztBQUM3Qzs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGK0U7QUFDckM7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFVBQVUsV0FBVztBQUNyQjtBQUNBLEVBQUUsMERBQWE7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsNkRBQTZELGNBQWM7QUFDM0U7QUFDQTtBQUNBLElBQUk7QUFDSixJQUFJLHlEQUFZO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxjQUFjO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixJQUFJLHlEQUFZO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLHNCQUFzQjtBQUNoQyw2RUFBNkUsU0FBUyxPQUFPLFVBQVUsc0JBQXNCLFFBQVE7QUFDckk7QUFDQTs7QUFFQTtBQUNBLHdGQUF3RixLQUFLLHNCQUFzQixRQUFRO0FBQzNIO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sTUFBTSx5REFBWTtBQUNsQjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLElBQUksK0RBQXNCLEdBQUcsK0NBQU87QUFDcEMsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXdlYXRoZXItYXBwLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vaXdlYXRoZXItYXBwLy4vc3JjL3Byb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsZWFyIGZyb20gJy4vaWNvbnMvQ2xlYXIucG5nJztcbmltcG9ydCBDbG91ZHMgZnJvbSAnLi9pY29ucy9DbG91ZHMucG5nJztcbmltcG9ydCBFeHRyZW1lIGZyb20gJy4vaWNvbnMvRXh0cmVtZS5wbmcnO1xuaW1wb3J0IFJhaW4gZnJvbSAnLi9pY29ucy9SYWluLnBuZyc7XG5pbXBvcnQgU25vdyBmcm9tICcuL2ljb25zL1Nub3cucG5nJztcbmltcG9ydCBEZWZhdWx0IGZyb20gJy4vaWNvbnMvRGVmYXVsdC5wbmcnO1xuXG5jb25zdCBsb2NhdGlvbkRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1sb2NhdGlvbl0nKTtcbmNvbnN0IHRlbXBlcmF0dXJlRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlbXBlcmF0dXJlXScpO1xuY29uc3Qgd2VhdGhlckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS13ZWF0aGVyXScpO1xuY29uc3Qgd2luZFNwZWVkRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXdpbmQtc3BlZWRdJyk7XG5jb25zdCBodW1pZGl0eURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1odW1pZGl0eV0nKTtcbmV4cG9ydCBjb25zdCB3ZWF0aGVySWNvbkRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS13ZWF0aGVyLWljb25dJyk7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbmNvbnN0IGVycm9yQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZXJyb3ItY29udGFpbmVyXScpO1xuXG5mdW5jdGlvbiBkaXNwbGF5TG9jYXRpb24oY2l0eSwgY291bnRyeSkge1xuICBsb2NhdGlvbkRpc3BsYXkuaW5uZXJIVE1MID0gYCR7Y2l0eX0sICR7Y291bnRyeX1gO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5QmFja2dyb3VuZCh3ZWF0aGVyQ2F0ZWdvcnkpIHtcbiAgYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gIGJvZHkuY2xhc3NMaXN0LmFkZCh3ZWF0aGVyQ2F0ZWdvcnkpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlckljb24od2VhdGhlckNhdGVnb3J5KSB7XG4gIHN3aXRjaCAod2VhdGhlckNhdGVnb3J5KSB7XG4gICAgY2FzZSAnQ2xlYXInOlxuICAgICAgd2VhdGhlckljb25EaXNwbGF5LnNyYyA9IENsZWFyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQ2xvdWRzJzpcbiAgICAgIHdlYXRoZXJJY29uRGlzcGxheS5zcmMgPSBDbG91ZHM7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdSYWluJzpcbiAgICAgIHdlYXRoZXJJY29uRGlzcGxheS5zcmMgPSBSYWluO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnU25vdyc6XG4gICAgICB3ZWF0aGVySWNvbkRpc3BsYXkuc3JjID0gU25vdztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0V4dHJlbWUnOlxuICAgICAgd2VhdGhlckljb25EaXNwbGF5LnNyYyA9IEV4dHJlbWU7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgd2VhdGhlckljb25EaXNwbGF5LnNyYyA9IERlZmF1bHQ7XG4gIH1cbiAgZGlzcGxheUJhY2tncm91bmQod2VhdGhlckNhdGVnb3J5KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIod2VhdGhlcikge1xuICB3ZWF0aGVyRGlzcGxheS5pbm5lckhUTUwgPSB3ZWF0aGVyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd2VhdGhlci5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRlbXBlcmF0dXJlKHRlbXBlcmF0dXJlKSB7XG4gIHRlbXBlcmF0dXJlRGlzcGxheS5pbm5lckhUTUwgPSBgJHt0ZW1wZXJhdHVyZX08c3BhbiBjbGFzcz1cInVuaXQtdGVtcGVyYXR1cmVcIj7CsEM8L3NwYW4+YDtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUh1bWlkaXR5KGh1bWlkaXR5KSB7XG4gIGh1bWlkaXR5RGlzcGxheS5pbm5lckhUTUwgPSBgJHtodW1pZGl0eX0gPHNwYW4gY2xhc3M9XCJ1bml0XCI+JTwvc3Bhbj5gO1xufVxuZnVuY3Rpb24gZGlzcGxheVdpbmRTcGVlZCh3aW5kU3BlZWQpIHtcbiAgd2luZFNwZWVkRGlzcGxheS5pbm5lckhUTUwgPSBgJHt3aW5kU3BlZWR9IDxzcGFuIGNsYXNzPVwidW5pdFwiPm0vczwvc3Bhbj5gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUVycm9yKGVycm9yKSB7XG4gIGVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcbiAgZXJyb3JDb250YWluZXIuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1jaXJjbGUteG1hcmtcIj48L2k+PHA+RXJyb3I6PC9wPjxwIGRhdGEtZXJyb3ItbWVzc2FnZT48L3A+JztcbiAgY29uc3QgZXJyb3JNZXNzYWdlRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVycm9yLW1lc3NhZ2VdJyk7XG4gIGVycm9yTWVzc2FnZURpc3BsYXkuaW5uZXJUZXh0ID0gZXJyb3I7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGVycm9yQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcbiAgfSwgMzAwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEaXNwbGF5KFxuICBjaXR5LFxuICBjb3VudHJ5LFxuICB3ZWF0aGVyQ2F0ZWdvcnksXG4gIHdlYXRoZXIsXG4gIHRlbXBlcmF0dXJlLFxuICBodW1pZGl0eSxcbiAgd2luZFNwZWVkLFxuKSB7XG4gIGRpc3BsYXlMb2NhdGlvbihjaXR5LCBjb3VudHJ5KTtcbiAgZGlzcGxheVdlYXRoZXJJY29uKHdlYXRoZXJDYXRlZ29yeSk7XG4gIGRpc3BsYXlXZWF0aGVyKHdlYXRoZXIpO1xuICBkaXNwbGF5VGVtcGVyYXR1cmUodGVtcGVyYXR1cmUpO1xuICBkaXNwbGF5SHVtaWRpdHkoaHVtaWRpdHkpO1xuICBkaXNwbGF5V2luZFNwZWVkKHdpbmRTcGVlZCk7XG59XG4iLCJpbXBvcnQgeyByZW5kZXJEaXNwbGF5LCBkaXNwbGF5RXJyb3IsIHdlYXRoZXJJY29uRGlzcGxheSB9IGZyb20gJy4vZGlzcGxheS5qcyc7XG5pbXBvcnQgRGVmYXVsdCBmcm9tICcuL2ljb25zL0RlZmF1bHQucG5nJztcblxuY29uc3QgdXNlckxvY2F0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdXNlci1sb2NhdGlvbi1idXR0b25dJyk7XG5jb25zdCBsb2NhdGlvbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1sb2NhdGlvbi1mb3JtXScpO1xuY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNlYXJjaC1pbnB1dF0nKTtcblxuY29uc3QgQVBJX0tFWSA9ICc3YzUyMjEwNTQyNjk4MDdjMzJhMTE0NzBiZTY2NzNmMic7XG5cbmZ1bmN0aW9uIGdldFdlYXRoZXIocmVzcG9uc2UpIHtcbiAgY29uc3QgY2l0eSA9IHJlc3BvbnNlLm5hbWU7XG4gIGNvbnN0IHsgY291bnRyeSB9ID0gcmVzcG9uc2Uuc3lzO1xuICBjb25zdCB3ZWF0aGVyQ2F0ZWdvcnkgPSByZXNwb25zZS53ZWF0aGVyWzBdLm1haW47XG4gIGNvbnN0IHdlYXRoZXIgPSByZXNwb25zZS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICBjb25zdCB0ZW1wZXJhdHVyZSA9IHJlc3BvbnNlLm1haW4udGVtcDtcbiAgY29uc3QgeyBodW1pZGl0eSB9ID0gcmVzcG9uc2UubWFpbjtcbiAgY29uc3Qgd2luZFNwZWVkID0gcmVzcG9uc2Uud2luZC5zcGVlZDtcbiAgcmVuZGVyRGlzcGxheShjaXR5LCBjb3VudHJ5LCB3ZWF0aGVyQ2F0ZWdvcnksIHdlYXRoZXIsIHRlbXBlcmF0dXJlLCBodW1pZGl0eSwgd2luZFNwZWVkKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb29yZGluYXRlcyhMT0NBVElPTl9DT09SRElOQVRFU19BUEkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKExPQ0FUSU9OX0NPT1JESU5BVEVTX0FQSSwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgY29uc3QgY29vcmRpbmF0ZXNEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGdldFdlYXRoZXIoY29vcmRpbmF0ZXNEYXRhKTtcbiAgfSBjYXRjaCB7XG4gICAgZGlzcGxheUVycm9yKCdDaXR5IG5vdCBmb3VuZCcpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihXRUFUSEVSX0FQSSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goV0VBVEhFUl9BUEksIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGdldFdlYXRoZXIod2VhdGhlckRhdGEpO1xuICAgIGNvbnNvbGUubG9nKCdPSycpO1xuICB9IGNhdGNoIHtcbiAgICBkaXNwbGF5RXJyb3IoJ1dlYXRoZXIgbm90IGZvdW5kJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VXNlckxvY2F0aW9uKHBvc2l0aW9uKSB7XG4gIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gcG9zaXRpb24uY29vcmRzO1xuICBjb25zdCBXRUFUSEVSX0FQSSA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXRpdHVkZX0mbG9uPSR7bG9uZ2l0dWRlfSZ1bml0cz1tZXRyaWMmYXBwaWQ9JHtBUElfS0VZfWA7XG4gIGZldGNoV2VhdGhlcihXRUFUSEVSX0FQSSk7XG59XG5cbmZ1bmN0aW9uIGdldENvb3JkaW5hdGVzKGNpdHkpIHtcbiAgY29uc3QgTE9DQVRJT05fQ09PUkRJTkFURVNfQVBJID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmYXBwaWQ9JHtBUElfS0VZfWA7XG4gIGZldGNoQ29vcmRpbmF0ZXMoTE9DQVRJT05fQ09PUkRJTkFURVNfQVBJKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcnVuV2VhdGhlckFwcCgpIHtcbiAgdXNlckxvY2F0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZ2V0VXNlckxvY2F0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGxheUVycm9yKCdDYW5ub3QgZ2V0IExvY2F0aW9uJyk7XG4gICAgfVxuICB9KTtcblxuICBsb2NhdGlvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSBsb2NhdGlvbklucHV0LnZhbHVlO1xuICAgIGlmIChsb2NhdGlvbiA9PSBudWxsIHx8IGxvY2F0aW9uID09PSAnJykgcmV0dXJuO1xuICAgIGxvY2F0aW9uSW5wdXQudmFsdWUgPSBudWxsO1xuICAgIGdldENvb3JkaW5hdGVzKGxvY2F0aW9uKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICB3ZWF0aGVySWNvbkRpc3BsYXkuc3JjID0gRGVmYXVsdDtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=