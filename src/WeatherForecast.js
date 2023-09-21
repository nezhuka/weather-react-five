import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);
function handleResponse(response){
console.log(response.data);
setForecast(response.data.daily);  
setLoaded (true);
}
if (loaded){
  console.log(forecast);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
         <WeatherForecastDay data = {forecast[0]}/>
        </div>
      </div>
    </div>
  );
  
} else {
  let apiKey = "136ae2d3113de3faf64cadb4t05bd1o9"
 let longitude = props.coordinates.lon;
 let latitude = props.coordinates.lat;
  let apiUrl = 
`https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);  
return null;
    
}
}