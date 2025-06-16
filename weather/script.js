const container = document.querySelector('.container');
const search = document.querySelector('.searchbox button');
const weatherInfo = document.querySelector('.weather-info');
const weatherDetails = document.querySelector('.weather-details');
const errorLoc = document.querySelector('.not-found');

search.addEventListener('click', () => {
    const city = document.querySelector('.searchbox input').value;
    const APIKey = 'Your API Key'; //Api key from website

    if (city === '')
        return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {
                container.style.height = '400px';
                weatherInfo.style.display = 'none';
                weatherDetails.style.display = 'none';
                errorLoc.style.display = 'block';
                errorLoc.classList.add('fadeIn');
                return;
            }

        errorLoc.style.display = 'none';
        errorLoc.classList.remove('fadeIn');

        const image = document.querySelector('.weather-info img');
        const temperature = document.querySelector('.weather-info .temperature');
        const description = document.querySelector('.weather-info .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png';
                break;
            case 'Clouds':
                image.src = 'images/cloud.png';
                break;
            case 'Rain':
                image.src = 'images/rain.png';
                break;
            case 'Snow':
                image.src = 'images/snow.png';
                break;
            case 'Haze':
                image.src = 'images/mist.png';
                break;
            default:
                image.src = '';
        }
        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)} Km/h`;
        
        weatherInfo.style.display = '';
        weatherDetails.style.display = '';
        weatherInfo.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '600px'; 

    });

});
