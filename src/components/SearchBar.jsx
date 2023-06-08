import React from 'react'
import {BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
const SearchBar = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='max-w-[1000px] -mt-5 md:-mt-10    shadow-xl'>
      {/* form  */}
        <form className='px-4 bg-white flex justify-center items-center rounded  dark:bg-gray-800'>

        <label htmlFor="search" className='hidden md:flex text-lightBlue font-black text-2xl'><BsSearch/> 
        </label>
        <input type="text" placeholder='Filter by titles,companies,expertise...' id='search' className='py-6 px-4 focus:outline-none md:border-r-2 md:border-gray md:w-72 bg-transparent dark:border-slate-700'/>
        <label htmlFor="search" className='hidden md:flex text-lightBlue font-black text-2xl'><SlLocationPin/> </label>
        <input type="text" placeholder='Filter by location.' id='location' className='hidden md:flex py-6 px-4 focus:outline-none border-r-2 border-gray md:w-72 bg-transparent dark:border-slate-700'/>
        <input type="checkbox" name="fullTime" id="" className='mx-3 text-2xl cursor-pointer hidden md:flex'/> <span className='font-bold font-sans mx-3 cursor-pointer hidden md:flex' >Full Job</span>

        <button type='submit' className='bg-lightBlue text-white px-4 py-3 mx-5 font-bold rounded hidden md:flex'>
          Search
        </button>

        {/* on small device */}
        <button className='text-3xl md:hidden flex text-slate-500 dark:text-slate-50'>
        <ion-icon name="funnel">

        </ion-icon>
        </button>
        {/* on small device */}
        <button type='submit' className='bg-lightBlue text-white text-3xl px-4 py-3 mx-5 font-black rounded md:hidden'>
        <BsSearch/>
        </button>
    </form>
    </div>
    </div>
  )
}

export default SearchBar