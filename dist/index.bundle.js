(self["webpackChunkiweather_app"] = self["webpackChunkiweather_app"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

// import './style.css';

const userLocationBtn = document.querySelector('[data-user-location-button]');
const locationForm = document.querySelector('[data-location-form]');
const locationInput = document.querySelector('[data-search-input]');
const API_KEY = '7c5221054269807c32a11470be6673f2';

function getUserLocation(position) {
  const { latitude, longitude } = position.coords;
  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
  fetchWeather(WEATHER_API);
}

function getCoordinates(city) {
  const LOCATION_COORDINATES_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  fetchCoordinates(LOCATION_COORDINATES_API);
}

function fetchCoordinates(LOCATION_COORDINATES_API) {
  fetch(LOCATION_COORDINATES_API).then((res) => {
    console.log(res.ok);
    console.log(res.status);
    return res.json();
  });
}

function fetchWeather(WEATHER_API) {
  console.log(WEATHER_API);
  fetch(WEATHER_API).then((res) => {
    console.log(res.ok);
    console.log(res.status);
    return res.json();
  });
}

function displayError(error) {
  alert(error);
}

userLocationBtn.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getUserLocation, displayError);
  } else {
    alert('Error');
  }
});

locationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = locationInput.value;
  if (location == null || location === '') return;
  locationInput.value = null;

  getCoordinates(location);
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLHNCQUFzQjtBQUNoQyw2RUFBNkUsU0FBUyxPQUFPLFVBQVUsc0JBQXNCLFFBQVE7QUFDckk7QUFDQTs7QUFFQTtBQUNBLHdGQUF3RixLQUFLLHNCQUFzQixRQUFRO0FBQzNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2l3ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgdXNlckxvY2F0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdXNlci1sb2NhdGlvbi1idXR0b25dJyk7XG5jb25zdCBsb2NhdGlvbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1sb2NhdGlvbi1mb3JtXScpO1xuY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNlYXJjaC1pbnB1dF0nKTtcbmNvbnN0IEFQSV9LRVkgPSAnN2M1MjIxMDU0MjY5ODA3YzMyYTExNDcwYmU2NjczZjInO1xuXG5mdW5jdGlvbiBnZXRVc2VyTG9jYXRpb24ocG9zaXRpb24pIHtcbiAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBwb3NpdGlvbi5jb29yZHM7XG4gIGNvbnN0IFdFQVRIRVJfQVBJID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdGl0dWRlfSZsb249JHtsb25naXR1ZGV9JnVuaXRzPW1ldHJpYyZhcHBpZD0ke0FQSV9LRVl9YDtcbiAgZmV0Y2hXZWF0aGVyKFdFQVRIRVJfQVBJKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXMoY2l0eSkge1xuICBjb25zdCBMT0NBVElPTl9DT09SRElOQVRFU19BUEkgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZhcHBpZD0ke0FQSV9LRVl9YDtcbiAgZmV0Y2hDb29yZGluYXRlcyhMT0NBVElPTl9DT09SRElOQVRFU19BUEkpO1xufVxuXG5mdW5jdGlvbiBmZXRjaENvb3JkaW5hdGVzKExPQ0FUSU9OX0NPT1JESU5BVEVTX0FQSSkge1xuICBmZXRjaChMT0NBVElPTl9DT09SRElOQVRFU19BUEkpLnRoZW4oKHJlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlcy5vayk7XG4gICAgY29uc29sZS5sb2cocmVzLnN0YXR1cyk7XG4gICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmZXRjaFdlYXRoZXIoV0VBVEhFUl9BUEkpIHtcbiAgY29uc29sZS5sb2coV0VBVEhFUl9BUEkpO1xuICBmZXRjaChXRUFUSEVSX0FQSSkudGhlbigocmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVzLm9rKTtcbiAgICBjb25zb2xlLmxvZyhyZXMuc3RhdHVzKTtcbiAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlFcnJvcihlcnJvcikge1xuICBhbGVydChlcnJvcik7XG59XG5cbnVzZXJMb2NhdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZ2V0VXNlckxvY2F0aW9uLCBkaXNwbGF5RXJyb3IpO1xuICB9IGVsc2Uge1xuICAgIGFsZXJ0KCdFcnJvcicpO1xuICB9XG59KTtcblxubG9jYXRpb25Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbG9jYXRpb24gPSBsb2NhdGlvbklucHV0LnZhbHVlO1xuICBpZiAobG9jYXRpb24gPT0gbnVsbCB8fCBsb2NhdGlvbiA9PT0gJycpIHJldHVybjtcbiAgbG9jYXRpb25JbnB1dC52YWx1ZSA9IG51bGw7XG5cbiAgZ2V0Q29vcmRpbmF0ZXMobG9jYXRpb24pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=