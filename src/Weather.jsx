import { useEffect, useState } from 'react'
import Forecast from './Forecast.jsx'
import WeatherDetails from './WeatherDetails.jsx'
import WeatherMain from './WeatherMain.jsx'
import CurrentLocation from './CurrentLocation.jsx'

const Weather = ({weather}) => {
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState([]);
  useEffect(()=>{
    const [todayWeather, ...forecast] = weather;
    setWeatherData(todayWeather);
    setForecastData(forecast);
  },[weather]);

  const {city, country, humidity, speed} = weatherData;
  let {icon} = weatherData;
  icon = icon ? icon : '404';

  return (
    <div className="weather">
      <CurrentLocation details={{city, country}}/>
      <div className="weather-box">
        <WeatherMain weatherData={weatherData} setWeatherData={setWeatherData}/>
        <WeatherDetails details={{humidity,speed}}/>
      </div>

      <Forecast forecastData={forecastData}/>
    </div>
  )
}
export default Weather