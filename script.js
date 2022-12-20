let latitude;
let longitude;
let cityName;
const searchButton = document.querySelector(".searchBtn");

searchButton.addEventListener("click", () => {});

async function getMeWeatherData(cityName) {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=53dabd4298e397b8b0097f65387786a3&units=imperial`,
		{ mode: "cors" }
	);
	const weatherData = await response.json();
	console.log(weatherData.main.temp);
}

getMeWeatherData("london");

function clickMe() {
	console.log("iwork");
}
