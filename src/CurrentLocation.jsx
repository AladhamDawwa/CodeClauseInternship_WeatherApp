import CountryCodes from './Countries.js'

const CurrentLocation = ({details : {city, country}}) => {
  return (
    <div className='location'>
      <p>{city?.toLowerCase()}, </p>
      <p>{CountryCodes[country]}</p>
    </div>
  )
}
export default CurrentLocation