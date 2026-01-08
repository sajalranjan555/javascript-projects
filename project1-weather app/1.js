const apiKey="16a2323f706622b9836a17507c67ae47"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox=document.querySelector(".search input")
const button=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`)
    var data=await response.json();
    // console.log(data)



    document.querySelector(".city").innerHTML=data.name
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C"
    document.querySelector(".humid").innerHTML=data.main.humidity +"%"
    document.querySelector(".wind").innerHTML=data.wind.speed +" km/h"


    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="/images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="/images/clear.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="/images/rain.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="/images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="/images/mist.png"
    }
    document.querySelector(".weather").style.display="block"
}

button.addEventListener("click",()=>{
    checkWeather(searchBox.value)
})
