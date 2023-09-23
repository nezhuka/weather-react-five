import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastDay(props){
function maxTemperature(){
    let temperature = Math.round (props.data.temperature.maximum);
return `${temperature}°`
}
function minTemperature() {
  let temperature = Math.round(props.data.temperature.minimum);
  return `${temperature}°`;
}

function day(){
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
let days = ["Sun",
"Mond",
"Tue",
"Wed",
"Thu",
"Fri",
"Sat"];
    return days [day];
}
    return (
        <div>
         <div className="WeatherForecast-day">{day()}</div>
 <WeatherIcon code={props.data.condition.icon_url} size={36}/>


<img src=
{props.data.condition.icon_url} />
          
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">{maxTemperature()}
              
            </span>
            <span className="WeatherForecast-temperature-min">{minTemperature()}
            
            </span>
          </div>
          </div>
    );
}