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
            var sunriseTime = moment.unix(sunrise).format("hh:mm a");
            var sunsetTime = moment.unix(sunset).format("hh:mm a");
            var currentTime = moment.unix(sunrise).format("MM/DD/YYYY");
       
        // console.log(name, icon, description, temp, humidity, speed, deg, all, sunrise, sunset, sunriseTime, sunsetTime, currentTime);

        // Display our weather information on the page using querySelector and setting the innerText to equal our new variables.
        //Name
        document.querySelector(".city").innerText = "Weather in " + name;
        //Temp
        document.querySelector(".temp").innerText = temp + "°F";
        //Icon - control size of icon by adding '@2x.png' in very last string position - currently ".png"
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
         //Description
        document.querySelector(".description").innerText = description;
        //Cloudiness
        document.querySelector(".cloud-coverage").innerText = "Cloud Coverage: " + all + "%";
       
        //Humidity
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        //Wind Speed
        document.querySelector(".wind-speed").innerText = "Wind Speed: " + speed + " mph";
        //Wind Direction
        document.querySelector(".wind-direction").innerText = "Wind Direction: " + deg + "°";
        //Wind Gust
        document.querySelector(".wind-gust").innerText = "Gust: " + gust + " mph";
        //Sunrise
        document.querySelector(".sunrise").innerText = "Sunrise: " + sunriseTime;
        //Sunset 
        document.querySelector(".sunset").innerText = "Sunset: " + sunsetTime;
        //Current Time
        document.querySelector(".time").innerText = currentTime;

            // Need to Find with a more beach-specific API:
                 //High Tide
                    //Low Tide
                        //UV Index
        
        // Hide/Show Page
        document.querySelector(".weather").classList.remove("loading");
        
        //Dynamic Background Images
        // document.body.style.backgroundImage = url("https://source.unsplash.com/1600x900/?" + name + "")
        
    },

    //2) Add Search Function linked to API
    search: function () {
        // get content from search bar and send to fetchWeather
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

//1) Add Event listener
document.querySelector(".search-btn").addEventListener("click", function () {
    //3) Call Search Function off of Button Event Listner
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {

    if (event.key == "Enter") {
        weather.search();
    }
});

// Convert City to Lat/Long via Direct GeoCode = https://openweathermap.org/api/geocoding-api
// One Call = https://openweathermap.org/api/one-call-3