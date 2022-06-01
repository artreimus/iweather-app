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
