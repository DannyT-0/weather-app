let latitude;
let longitude;
let cityName;
const searchButton = document.querySelector(".searchBtn");
const outputDisplay = document.querySelector(".output");
const textBar = document.querySelector(".locationInput");
const temperatureValue = document.querySelector(".temp");
const skyView = document.querySelector(".skyView");
const windSpeed = document.querySelector(".windSpeed");

async function getMeWeatherData() {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${textBar.value}&appid=53dabd4298e397b8b0097f65387786a3&units=imperial`,
		{ mode: "cors" }
	);
	const weatherData = await response.json();
	temperatureValue.textContent = "Temperature:" + " " + weatherData.main.temp;
	skyView.textContent = weatherData.weather[0].description;
	windSpeed.textContent = weatherData.wind.speed + "mph";
}

searchButton.addEventListener("click", getMeWeatherData);
