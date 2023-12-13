require('dotenv').config();

function getWeather() {
    const locationInput = document.getElementById('locationInput');
    const weatherResult = document.getElementById('weatherResult');

    const apiKey = process.env.api_key;
    const location = locationInput.value.trim();

    if (location === '') {
        alert('Please enter a city or zip code.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            const resultText = `Weather in ${cityName}: ${temperature}°C, ${description}`;
            weatherResult.textContent = resultText;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherResult.textContent = 'Error fetching weather data. Please try again.';
        });
}
