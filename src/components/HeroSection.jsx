import React from 'react'
import Card from './Card'

const HeroSection = () => {
  return (
    <div className='container mx-auto px-20 py-10'>
        <Card/>
        <div className='flex items-center justify-center'>
            <button className='bg-lightBlue text-white px-3 py-4 font-bold font-sans rounded'>Load More</button>
        </div>
    </div>
  )
}

export default HeroSection