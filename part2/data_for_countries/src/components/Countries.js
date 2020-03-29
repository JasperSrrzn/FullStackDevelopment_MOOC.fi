import React, {useState} from 'react';
import Country from './Country'


const Countries = ({countries, searchCountry}) => {

  const [countryToShow, setCountryToShow] = useState('')

  const mapFunction = (country, show) => {

    if (country.name==show){
      return <Country key={country.name} country={country}/>
    } else {
      return <p key={country.name}>{country.name} <button onClick={handleClick(country)}>show</button></p>
    }

  }


  const handleClick = (country) => () => {
    setCountryToShow(country)
  }

  const filteredCountries = countries
                                .filter(country=>country.name.toLowerCase().includes(searchCountry.toLowerCase()))

  if (filteredCountries.length>10){
    return <p>Too many matches, specify another filter</p>
  } else if (filteredCountries.length===1) {
    return <Country country={filteredCountries[0]}/>
  } else {
    return filteredCountries.map(country=>mapFunction(country, countryToShow.name))
  }
}

export default Countries
