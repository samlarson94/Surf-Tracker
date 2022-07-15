// Create Obect to Store Weather Information needed to utilize API
let weather = {
    apiKey: "2e29086a1bb8840c610e0d65481f5462",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=imperial&appid=" 
            + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        // extract wanted variables from weather object
        const { name } = data;
        const { icon, description } = data.weather[0];
        const {temp, humidity } = data.main;
        const { all } = data.clouds;
        const {speed, deg, gust } = data.wind;
        const { sunrise, sunset } = data.sys;
        console.log(name, icon, description, temp, humidity, speed, deg, all, sunrise, sunset);

        // Display our weather information on the page using querySelector and setting the innerText to equal our new variables.
        //Name
        document.querySelector(".city").innerText = "Weather in " + name;
        //Temp
        document.querySelector(".temp").innerText = temp + "°F";
        //Icon - control size of icon by adding '@2x.png' in very last string position - currently ".png"
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        //Cloudiness
        document.querySelector(".cloud-coverage").innerText = "Cloud Coverage: " + all + "%";
        //Description
        document.querySelector(".description").innerText = description;
        //Humidity
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        //Wind Speed
        document.querySelector(".wind-speed").innerText = "Wind Speed: " + speed + " mph";
        //Wind Direction
        document.querySelector(".wind-direction").innerText = "Wind Direction: " + deg + "°";
        //Wind Gust
        document.querySelector(".wind-gust").innerText = "Gust: " + gust + " mph";
        //Sunrise
        document.querySelector(".sunrise").innerText = "Sunrise: " + sunrise;
        //Sunset 
        document.querySelector(".sunset").innerText = "Sunrise: " + sunset;

            // Need to Find with a more beach-specific API:
                 //High Tide
                     //Low Tide
                           //UV Index
        
    }
}

// Convert City to Lat/Long via Direct GeoCode = https://openweathermap.org/api/geocoding-api
// One Call = https://openweathermap.org/api/one-call-3