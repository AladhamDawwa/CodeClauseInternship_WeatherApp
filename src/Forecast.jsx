const Forecast = ({forecastData}) => {
  return (
    <div id='forecast'>
          {forecastData.map(({temp, description},index)=>{
            const weekday = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
            description = description ? description : '404';
            return(
              <div key={index} className='forecast'>
                <p>{weekday[new Date().getDay() + index + 1]}</p>
                <img src={`./images/${description}.png`}/>
                <p>{Math.round(temp)}°C</p>
              </div>
            );
          })}
      </div>
  )
}
export default Forecast