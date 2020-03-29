import React, {useState, useEffect} from 'react';
import axios from 'axios'
import SearchInput from './components/SearchInput'
import Countries from './components/Countries'


const App = () => {
  const [searchCountry,setSearchCountry] = useState('')
  const [countries, setCountries] = useState([])


  const handleSearch = (event) => {
    setSearchCountry(event.target.value)
  }

  useEffect(()=>{
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response=>{
        setCountries(response.data)
      })
  },[])


  return (
    <div>
    <SearchInput searchCountry={searchCountry} handleSearch={handleSearch} />
    <Countries countries={countries} searchCountry={searchCountry}/>
    </div>

  )
}

export default App
