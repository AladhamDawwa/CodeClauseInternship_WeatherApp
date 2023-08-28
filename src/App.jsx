import './App.css'
import NotFound from './NotFound'
import Weather from './Weather'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { getSearchedWeather } from './WeatherLogic'
import getWeatherData from './WeatherLogic'
import { useState, useEffect } from 'react'

let App = ()=>{
  const [weatherData, setWeatherData] = useState(null);
  useEffect(()=>{
    (async () => {
      await getWeatherData(setWeatherData);
    })();
    document.getElementById('root').classList.add('active');
  },[]);
  return(
    <>
      <form className="search-box" onSubmit={async(e)=>{
        e.preventDefault();
        setWeatherData(await getSearchedWeather(e.target[0].value));
      }}>
        <i><FontAwesomeIcon icon={faLocationDot} /></i>
        <input type="text" placeholder="Enter your location" />
        <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </form>
      {(weatherData) ? <Weather weather={weatherData}/> : ((weatherData === undefined) ? <NotFound /> : <></>) }
    </>
  );
}

export default App
