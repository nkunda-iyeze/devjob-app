import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <div className="dark:text-gray-100 dark:bg-slate-900 h-auto bg-slate-100" >
        <Navbar/>
        <SearchBar/>
        <HeroSection/>
        <div className='flex items-center justify-center'>
            <button className='bg-lightBlue text-white px-3 py-4 font-bold font-sans rounded'>Load More</button>
        </div>
    </div>
  )
}

export default Home