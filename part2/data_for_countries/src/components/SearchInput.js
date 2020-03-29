import React from 'react';

const SearchInput = ({searchCountry, handleSearch}) => {
  return (
  <form>
    find countries<input value={searchCountry} onChange={handleSearch}></input>
  </form>
  )
}

export default SearchInput
