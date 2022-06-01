import Clear from './icons/Clear.png';
import Clouds from './icons/Clouds.png';
import Extreme from './icons/Extreme.png';
import Rain from './icons/Rain.png';
import Snow from './icons/Snow.png';
import Default from './icons/Default.png';

const locationDisplay = document.querySelector('[data-location]');
const temperatureDisplay = document.querySelector('[data-temperature]');
const weatherDisplay = document.querySelector('[data-weather]');
const windSpeedDisplay = document.querySelector('[data-wind-speed]');
const humidityDisplay = document.querySelector('[data-humidity]');
export const weatherIconDisplay = document.querySelector('[data-weather-icon]');
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
      weatherIconDisplay.src = Clear;
      break;
    case 'Clouds':
      weatherIconDisplay.src = Clouds;
      break;
    case 'Rain':
      weatherIconDisplay.src = Rain;
      break;
    case 'Snow':
      weatherIconDisplay.src = Snow;
      break;
    case 'Extreme':
      weatherIconDisplay.src = Extreme;
      break;
    default:
      weatherIconDisplay.src = Default;
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

export function displayError(error) {
  errorContainer.classList.remove('none');
  errorContainer.innerHTML = '<i class="fa-regular fa-circle-xmark"></i><p>Error:</p><p data-error-message></p>';
  const errorMessageDisplay = document.querySelector('[data-error-message]');
  errorMessageDisplay.innerText = error;
  setTimeout(() => {
    errorContainer.innerHTML = '';
    errorContainer.classList.add('none');
  }, 3000);
}

export function renderDisplay(
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
