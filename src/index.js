function showTemperature(response) {
  console.log(response.data.main.temp);
  let temperature = Math.round(response.data.main.temp);
  let title = document.querySelector("h1");
  title.innerHTML = `The temperature outside is ${temperature}°C`;
}

function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);

  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let units = `metric`;
  let apiKey = `c119ffef35b7245a5e03b6e5724ae961`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(showPosition);
