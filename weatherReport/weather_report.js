function showweatherDetails(event) {
    event.preventDefault();
    const place = document.getElementById('city').value;
    const apiKey = '1475e2c61d182e3ebcef7429dde0c573';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiKey}&units=metric`;
    //Data and Response can be used instead of data and response, no issue of small letters here but better is to use small letters
    fetch(apiUrl).then(Response => Response.json()).then(Data => {
        const iconId = Data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`;

        document.getElementById("weathericon").setAttribute("src", iconUrl);
        document.getElementById("cityTemp").innerText = `${Math.round(Data.main.temp)}` + String.fromCharCode(8451);
        document.getElementById("cityHeading").innerText = `${Data.name}, ${Data.sys.country}`;
        document.getElementById("headingFeelsLike").innerText = `${Data.main.feels_like}`;
        document.getElementById("headingHumidity").innerText = `${Data.main.humidity}`;
        document.getElementById("headingWindSpeed").innerText = `${Data.wind.speed}`;

        document.getElementById("resultCard").classList.add('transition-all', 'duration-800');
        document.getElementById("resultCard").classList.replace('hidden', 'flex');
        console.log(Data);

    }).catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `< p > Failed to fetch weather.Please try again.</p > `;
    });
}

document.getElementById('weather-Form').addEventListener('submit', showweatherDetails);
