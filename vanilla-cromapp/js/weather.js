const APP_ID = 'eb67597e08c74dd217087db8ec520789';
const weather = document.querySelector("#weather span");

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APP_ID}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then((data => {
      weather.innerText = `${data.name} ${data.weather[0].main} ${data.main.temp}`;
    }));
}
function onGeoFail() {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);

