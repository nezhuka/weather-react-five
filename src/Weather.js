import React, {useState} from "react";
import axios from "axios";

import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
export default function Weather(props){

    const[weatherData, setWeatherData] = useState({ready:false});
    const[city, setCity] = useState(props.defaultCity);
    function handleResponse(response){
     console.log(response.data); 
setWeatherData({
  ready: true,
  coordinates:response.data.coordinates,
  date: new Date(response.data.time * 1000),
  temperature: response.data.temperature.current,
  humidity: response.data.temperature.humidity,
  wind: response.data.wind.speed,
  city: response.data.city,
  description: response.data.condition.description,
  icon: response.data.condition.icon_url,
});
        
    
    }

    function search(){
    const apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);   
    }
function handleSubmit(event){
  event.preventDefault();
  search(city);
}

function handleCityChange(event){
  setCity(event.target.value);
}
    if(weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn 
         btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <Weatherinfo data={weatherData} />
  <WeatherForecast coordinates={weatherData.coordinates} icon={weatherData.icon} />      
      </div>
    );  
   } else {
search();
return "Loading...";
}
}