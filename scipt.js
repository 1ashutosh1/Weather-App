const apiKey = "c14361388e3dfe6aef9c24c25249bb5b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("input");
const searchBtn = document.querySelector("button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if(response.status == 404){
   document.querySelector('.error').style.display = "block";
   document.querySelector(".weather").style.display = "none";
  } 
  
  else{
   let data = await response.json();
  
  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
  document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
  
  const weathercondition = data.weather[0].main;
  if(weathercondition === "Clouds"){
   weatherIcon.src = "images/clouds.png";
  }
  else if(weathercondition === "Clear"){
   weatherIcon.src = "images/clear.png";
  }
  else if(weathercondition === "Rain"){
   weatherIcon.src = "images/rain.png";
  }
  else if(weathercondition === "Drizzle"){
   weatherIcon.src = "images/drizzle.png";
  }
  else if(weathercondition === "Mist"){
   weatherIcon.src = "images/mist.png";
  }
  else if(weathercondition === "Snow"){
   weatherIcon.src = "images/snow.png";
  }
  
  document.querySelector(".weather").style.display = "block";
  document.querySelector('.error').style.display = "none";
  }
}

searchBtn.addEventListener('click',() => {
 checkWeather(searchBox.value);
})