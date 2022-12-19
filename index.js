const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8f86057d35msh4abb53f571dc0b5p1bb056jsn9670b223a536',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

// console.log(zero);

const getWeather = (city) => {
    // debugger
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            // sunrise.innerHTML = response.sunrise
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            temp.innerHTML = response.temp
            // sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));


        // zero = document.querySelectorAll('span').innerHTML('undefined')
        // if (zero == "undefined") {
        //     zero.textContent = "wrong City";
        // } else {
        //     zero
        // }

}
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
 })
 getWeather("lahore")

