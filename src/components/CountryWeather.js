import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addData, scearchCountry, selectionCountry, submitSearch } from '../redux/ActionTypes';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CountryWeather = () => {
  const scearch = useSelector(state => state.scearch)
  const country = useSelector(state => state.country)
  const [looading, setLooading] = useState(true)
  const dispatch = useDispatch()

  let keyApi="ce07e8e312e30399a4fe81295bf19155"
  let cityName=scearch===""?"sfax":scearch

  let getCountry=async()=>{
    let res= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keyApi}`)
    dispatch(addData(res))
    setLooading(false)
  }
  
  useEffect(() => {
  
  getCountry()
   }, []);

if(looading===true){
  return<Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
}

  let hendelSubmit=(e)=>{
    e.preventDefault();
    getCountry()
    dispatch(submitSearch(""))
  } 
  
  const getWeatherIcon=(i)=>{
if(i==="Thunderstorm"){return "wi-thunderstorm"}
else if(i==="Drizzle"){return "wi-sleet"}
else if(i==="Rain"){return "wi-storm-showers"}
else if(i==="Snow"){return "wi-snow"}
else if(i==="Atmosphere"){return "wi-fog"}
else if(i==="Clear"){return "wi-day-sunny"}
else if(i==="Clouds"){return "wi-day-fog"}
  }

  let countryId=country.data.sys.country
  let temp= Math.floor(country.data.main.temp - 273.15)
  let temp_min= Math.floor(country.data.main.temp_min - 273.15)
  let temp_max= Math.floor(country.data.main.temp_max - 273.15)
  let icon= country.data.weather[0].main
  let weatherIcon= `wi ${getWeatherIcon(icon)} display-1`

    return (
        <div className="weatherSide" >
          <form action=""onSubmit={hendelSubmit}>
            <input type="text" value={scearch} onChange={(e)=>dispatch(scearchCountry(e.target.value))} />
            <h1 className="name"><span>{country.data.name}</span>, <span>{countryId}</span></h1>
            <h2 className="icon">
            <i className={weatherIcon}></i>
            </h2>
            {temp===null? <span></span>:<h2 className="temp"> {temp} °</h2>}
            {temp_min ===null?
             <span></span>
             :<h3 className="temp">
              <span>min: {temp_min} °</span>   <span>max: {temp_max} °</span>
                
                </h3>}
            <h3>{country.data.weather[0].description}</h3>
          </form>
            <button onClick={()=>dispatch(selectionCountry(country.data.name,countryId,temp,temp_min,temp_max,weatherIcon,country.data.weather[0].description))}>selection</button>
        </div>
    )
}

export default CountryWeather
