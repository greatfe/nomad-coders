const APP_ID = 'eb67597e08c74dd217087db8ec520789';
function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APP_ID}&units=metric`;
  console.log(url);

  fetch(url)
    .then(response => response.json())
    .then((data => {
      console.log(data.name, data.weather[0].main);
    }));
}
function onGeoFail() {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);