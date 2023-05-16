import React from 'react'

const SearchBar = () => {
  return (
    <form>
        <input type="text" placeholder='Filter by titles,companies,expertise...' />
        <input type="text" placeholder='Filter by location.' />
        <input type="checkbox" name="fullTime" id="" />
    </form>
  )
}

export default SearchBar