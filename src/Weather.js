import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather(){
    const{ready, setReady}= useState(false);
    const[temperature, setTemperature] = useState(null);
    function handleResponse(response){
        console.log(response.data);
        setTemperature(response.data.main.temp);
    setReady(true);
    }

    if(ready) {
    return (
   <div className="Weather">
     <form>
       <div className="row">
         <div className="col-9">
           <input
             type="search"
             placeholder="Enter a city..."
             className="form-control"
             autoFocus="on"
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
     <h1>New York</h1>
     <ul>
       <li>Wednesday 7:00</li>
       <li>Mostly cloudy</li>
     </ul>
     <div className="row mt-3">
       <div className="col-6">
           <img
             src="https://tse1.mm.bing.net/th?id=OIP.S0UVTDlC2SKNjel2zYhaDgHaF7&pid=Api&rs=1&c=1&qlt=95&w=152&h=121"
             alt="Mostly Cloudy"
           />
           
             <span className="temperature">{temperature}</span>
             <span className="unit">°C</span>
       </div>
       <div className="col-6">
         <ul>
           <li>Precipitation: 15%</li>
           <li>Humidity: 72%</li>
           <li>Wind: 13 km/h</li>
         </ul>
       </div>
     </div>
   </div>
 );  
   } else {
const apiKey = "136ae2d3113de3faf64cadb4t05bd1o9";
let city = "New York";
let apiUrl =
  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`; 
  axios.get(apiUrl).then(handleResponse); 

  return "Loading...";
}
}