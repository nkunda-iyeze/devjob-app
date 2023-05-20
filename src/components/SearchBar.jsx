import React from 'react'
import {BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
const SearchBar = () => {
  return (
    <div className='flex justify-center  '>
        <form className=' px-4 bg-white flex justify-center items-center rounded -mt-8 shadow-xl dark:bg-gray-800'>
        <label htmlFor="search" className='flex text-lightBlue font-black text-2xl'><BsSearch/> </label>
        <input type="text" placeholder='Filter by titles,companies,expertise...' id='search' className='py-6 px-4 focus:outline-none border-r-2 border-gray md:w-72 bg-transparent dark:border-slate-700'/>
        <label htmlFor="search" className='flex text-lightBlue font-black text-2xl'><SlLocationPin/> </label>
        <input type="text" placeholder='Filter by location.' id='location' className='py-6 px-4 focus:outline-none border-r-2 border-gray md:w-72 bg-transparent dark:border-slate-700'/>
        <input type="checkbox" name="fullTime" id="" className='mx-3 text-2xl cursor-pointer'/> <span className='font-bold font-sans mx-3 cursor-pointer' >Full Job</span>
        <button type='submit' className='bg-lightBlue text-white px-4 py-3 mx-5 font-bold rounded'>Search</button>
    </form>
    </div>
  )
}

export default SearchBar