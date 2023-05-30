import React, { useEffect } from 'react'
import Card from './Card'
import data from '../data.json'
const HeroSection = ({
  setJobs,searchJobs,setSearchJobs
}) => {
  useEffect(()=>{
    setJobs(data);
    setSearchJobs(data);
  })
  return (
    <div className='container mx-auto px-20 py-10'>
        <Card searchJobs={searchJobs} />
        
    </div>
  )
}

export default HeroSection