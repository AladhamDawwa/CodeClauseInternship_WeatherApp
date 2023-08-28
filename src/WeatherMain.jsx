import { useState } from 'react'

let CtoF = (temperature, deg)=>{
  if(deg === 'C'){
    return [(temperature * 9 / 5) + 32, 'F'];
  } else {
    return [(temperature - 32) * 5 / 9, 'C'];
  }
}

const WeatherMain = ({weatherData,weatherData : {temp, description, icon}, setWeatherData, }) => {
  const [deg, setDeg] = useState('C');
  return (
    <><img src={`./images/${icon}.png`} /><p onClick={() => {
      const [temperature, degree] = CtoF(temp, deg);
      setWeatherData({ ...weatherData, temp: temperature });
      setDeg(degree);
    } }
      className="temperature">{Math.round(temp)}<span>°{deg}</span></p><p className="description">{description}</p></>
  )
}
export default WeatherMain