const apikey = "53a839d18d1a5217018270bae675e8fb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const geoApiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=";

const searchBtn = document.querySelector(".search button");
const searchBox = document.querySelector(".search input");
const weather = document.querySelector(".weather-icon");
//niche debounce ka hai
const suggestionBox = document.querySelector(".suggestions");

//new add debounce
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}
//niche debounce ka hai
async function checkWeather(location) {
  if (!location) return;
}
//


//console.log(weather)

async function checkWeather(location) {
    const response = await fetch(apiUrl + location + `&appid=${apikey}`);
    var data = await response.json();

//niche debounce ka hai
if (data.cod !== 200) {
    document.querySelector(".location").innerHTML = "City not found";
    return;
  }
//
    

  

  
   

    
}

//niche debounce ka hai
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}
//


// Fetch and display weather
async function checkWeather(location) {
  if (!location) return;

  const response = await fetch(apiUrl + location + `&appid=${apikey}`);
  const data = await response.json();
console.log(data);



  //niche debounce ka hai
  if (data.cod !== 200) {
    document.querySelector(".location").innerHTML = "City not found";
    return;
  }
//






  document.querySelector(".location").innerHTML = data.name + ", " + data.sys.country;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".celcius").innerHTML = data.main.humidity + "%";
  document.querySelector(".speed").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main === "Clouds") weather.src = "images/cloud.png";
  else if (data.weather[0].main === "Clear") weather.src = "images/clear.png";
  else if (data.weather[0].main === "Rain") weather.src = "images/rain.png";
  else if (data.weather[0].main === "Drizzle") weather.src = "images/drizzle.png";
  else if (data.weather[0].main === "Mist") weather.src = "images/mist.png";
}






//niche debounce ka hai
// Fetch city suggestions
async function fetchCitySuggestions(query) {
  if (!query) {
    suggestionBox.innerHTML = "";
    return;
  }

  const response = await fetch(`${geoApiUrl}${query}&limit=5&appid=${apikey}`);
  const cities = await response.json();

  suggestionBox.innerHTML = "";

  // Show top 5 suggestions
  cities.forEach(city => {
    const li = document.createElement("li");
    li.textContent = `${city.name}, ${city.country}`;
    li.addEventListener("click", () => {
      searchBox.value = city.name;
      suggestionBox.innerHTML = "";
      checkWeather(city.name);
    });
    suggestionBox.appendChild(li);
  });
}
//






searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
}
);







//niche debounce ka hai
searchBox.addEventListener("input", debounce(() => {
  fetchCitySuggestions(searchBox.value);
}, 400));

//
