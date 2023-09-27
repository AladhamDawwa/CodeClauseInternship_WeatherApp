import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWater, faWind } from '@fortawesome/free-solid-svg-icons'

const WeatherDetails = ({details : {humidity, speed}}) => {
  return (
    <div className="weather-details">
      <div className="humidity">
        <i><FontAwesomeIcon icon={faWater} /></i>
        <div>
          <span>{humidity}%</span>
          <p>Humidity</p>
        </div>
      </div>
      <div className="wind">
        <i><FontAwesomeIcon icon={faWind} /></i>
        <div>
          <span>{Math.round(speed * 3.6)} km/h</span>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  )
}
export default WeatherDetails