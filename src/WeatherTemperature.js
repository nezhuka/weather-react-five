import React, {useState} from "react";

export default function WeatherTemperature(props){
const [unit, setUnit] = useState("celsius");
function convertToFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
}

function convertToCelsius(event){
    event.preventDefault();
    setUnit ("celsius");
}
if(unit === "celsius"){
return (
  <div className="WeatherTemperature">
    <span className="temperature">{Math.round(props.celsius)}</span>
    <span className="unit">
      °C |{" "}
      <a href="/" onClick={convertToFahrenheit}>
        °F
      </a>
    </span>
  </div>
);
} else {
return (
  <div className="WeatherTemperature">
    <span className="temperature">{Math.round(props.celsius)}</span>
    <span className="unit">
        <a href="/" onClick={convertToFahrenheit}>
      °C </a>{" "}
 | °F
    </span>
    </div>
);
}
}