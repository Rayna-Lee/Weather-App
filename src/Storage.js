function changeCity(response, event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = `${response.data.name}`;
  console.log(response.data);
}

function changeCityTrigger() {
  changeCity();
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", changeCity);

  let apiKey = `c119ffef35b7245a5e03b6e5724ae961`;
  let units = `metric`;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=singapore&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(changeCity);
}

function showTemperature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#temperature-now");
  let temperature = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = temperature;

  changeCityTrigger();

  console.log(response.data.name);

  let apiKey = `c119ffef35b7245a5e03b6e5724ae961`;
  let units = `metric`;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=singapore&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(changeCityTrigger);
}

function showTemperatureTrigger() {
  showTemperature();
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", showTemperature);

  let apiKey = `c119ffef35b7245a5e03b6e5724ae961`;
  let units = `metric`;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=singapore&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

//let searchInput = document.querySelector("#search-text-input");

//Current Button Call

function showTemperature(response) {
  console.log(response.data.main.temp);
  let temperature = Math.round(response.data.main.temp);
  let title = document.querySelector("#temperature-now");
  title.innerHTML = temperature;
}

function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);

  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let units = `metric`;
  let apiKey = `c119ffef35b7245a5e03b6e5724ae961`;
  let apiUrlCurrentLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrlCurrentLocation).then(showTemperature);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("submit", showTemperature);

navigator.geolocation.getCurrentPosition(showPosition);

//Change City Name
function changeCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let searchInput = document.querySelector("#search-text-input");
  cityElement.innerHTML = `${searchInput.value}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeCity);

//Change City by search bar
function changeCity(response) {
  console.log(response);

  let cityElement = document.querySelector("#city");
  let searchInput = document.querySelector("#search-text-input");
  cityElement.innerHTML = `${searchInput.value}`;

  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", changeCity);
}

function changeCityTrigger(event) {
  event.preventDefault();

  changeCity();

  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", changeCity);
}

function getLocation(event) {
  //let searchInput = document.querySelector("#search-text-input");
  let apiKey = `c119ffef35b7245a5e03b6e5724ae961`;
  let units = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=singapore&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(changeCityTrigger);
}

let apiKey = `c119ffef35b7245a5e03b6e5724ae961`;

let city = `Sydney`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

function showTemperatureNow(response) {
  console.log(Math.round(response.data.main.temp));
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperatureNow);

function changeTitle(response) {
  let temperatureElement = document.querySelector("h1");
  temperatureElement.innerHTML = `It is  ${Math.round(
    response.data.main.temp
  )}°C in ${city}`;
}
axios.get(`${apiUrl}&appid=${apiKey}`).then(changeTitle);
