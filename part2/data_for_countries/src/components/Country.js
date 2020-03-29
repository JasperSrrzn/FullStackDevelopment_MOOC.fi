import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Country = ({country}) => {

  const [weather, setWeather] = useState('')

  useEffect(()=>{
    const api_key = process.env.REACT_APP_API_KEY
    const base_url = 'http://api.weatherstack.com/current?access_key='
    const url = base_url.concat(api_key,'&query=',country.capital).replace(" ","%20")
    console.log(url)
    axios
    .get(url)
    .then(response => {
      setWeather(response.data.current)
    })
  },[])

  return (
    <div>
    <h1>{country.name}</h1>
    <p>capital {country.capital}</p>
    <p>population {country.population}</p>
    <h2>languages</h2>
    <ul>
    {country.languages.map(language=><li key={language.name}>{language.name}</li>)}
    </ul>
    <img src={country.flag} alt="flag" width="200" height="150"/>
    <h2>weather in {country.capital}</h2>
    <p><strong>temperature:</strong> {weather.temperature} Celcius</p>
    <img src={weather.weather_icons} alt="weather" width="75" height="75"/>
    <p><strong>wind:</strong> {weather.wind_speed} mph direction {weather.wind_dir} </p>
    </div>
  )
}

export default Country
