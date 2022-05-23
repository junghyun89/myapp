'use strict';

const API_KEY = "15158171cb4853122d769e6733803088"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const degree = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        degree.innerText = `${Math.floor(data.main.temp)}℃`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather Information.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);