
const apikey = "e75cec84dcbae9f5d818722f18b1c856";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

let weather = document.querySelector(".weather");
let City = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humadity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let errormsg = document.querySelector(".error"); 

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        errormsg.style.display = "block";
        weather.style.display = "none";
    }else{
        var data = await response.json();

    console.log(data);

    City.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°c";
    humadity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";


    if(data.weather[0].main == "Clouds"){
        weathericon.src = "clouds.png"; 
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src = "clear.png"; 
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "rain.png"; 
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "drizzle.png"; 
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "mist.png"; 
    }

    weather.style.display = "block";
    errormsg.style.display = "none";
    }

}

searchBtn.addEventListener ("click", ()=>{
    checkweather(searchbox.value);
    searchbox.value = "";
});