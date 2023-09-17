import React from "react";
import FormattedDate from "./FormattedDate";
import WetherIcon from "./WetherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function Wetherinfo(props){
    return (
      <div className="Weatherinfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            
              
 <WetherIcon code={props.data.icon}
                />
  <WeatherTemperature celsius={props.data.temperature}/>    
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity:{props.data.humidity}%</li>
              <li>Wind:{props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}