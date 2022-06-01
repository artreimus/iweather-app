import { renderDisplay, displayError, weatherIconDisplay } from './display.js';
import Default from './icons/Default.png';

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
  renderDisplay(city, country, weatherCategory, weather, temperature, humidity, windSpeed);
}

function fetchCoordinates(LOCATION_COORDINATES_API) {
  fetch(LOCATION_COORDINATES_API).then((response) => response.json()).then((response) => {
    getWeather(response);
  }).catch(() => {
    displayError('City not found');
  });
}

function fetchWeather(WEATHER_API) {
  fetch(WEATHER_API).then((response) => response.json()).then((response) => {
    getWeather(response);
  }).catch(() => {
    displayError('Weather not found');
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

export default function runWeatherApp() {
  userLocationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getUserLocation);
    } else {
      displayError('Cannot get Location');
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
    weatherIconDisplay.src = Default;
  });
}
