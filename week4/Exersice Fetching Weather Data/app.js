// Step 1:Variable declaration to store reffrences 
const userCity = document.getElementById("cityInput"); 
const weather_info = document.getElementById("weather-info"); 
const btn = document.getElementById("btn"); 

// Step 2: adding an event listner to button
btn.addEventListener("click", () => {
    // Step 3: getting the city name 
    const name_City = userCity.value;

    // Step 4:error checking to see if the field is left blank 
    if (name_City === "") {
        alert("Please enter a city name.");
    } else {
        // Step 5: making a request using our api key 
        const key_Api = '4b0e3d64123a349d711d464c1ba50f99';
        const Api_Url = `https://api.openweathermap.org/data/2.5/weather?q=${name_City}&appid=${key_Api}`;

        const xhr = new XMLHttpRequest(); 
        xhr.open("GET", Api_Url, true); 

        xhr.onload = function () {
            if (xhr.status === 200) { 
                const data = JSON.parse(xhr.responseText); 

               
                const description_Info = data.weather[0].description;
                const finalTemp = data.main.temp;
                const wind_Speed = data.wind.speed;
                const city = data.name;

               
                const weatherHTML = `
                    <p>The Weather in ${city} is ${description_Info}</p>
                    <p>The Temperature is ${(finalTemp-273.15).toFixed(2)} °C and the Wind Speed is ${wind_Speed}m/s</p>
                `;
                weather_info.innerHTML = weatherHTML;
            } else {
                console.error("Error:", xhr.statusText);
                alert("An error occurred while fetching weather data."); 
            }
        };

        xhr.send(); 
    }
});