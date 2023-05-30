import React from 'react'
// import logo from '../assets/logos/scoot.svg'
import { ReactSVG } from 'react-svg'
const Card = ({searchJobs}) => {
  return ( 
    <div className='lg:grid lg:grid-cols-3 gap-5 px-8'>
      {/* div one */}
      {
        searchJobs.map((data,i)=>(
        <div className='flex flex-col px-8 py-6  rounded-lg font-mono antialiased my-4 dark:shadow-sm dark:bg-slate-800 bg-white' key={i}>
          {/* company's logo */}
        <div className='md:-mt-12 w-14 py-6 px-2 rounded-3xl' style={{backgroundColor:`${data.logoBackground}`}} >
          <ReactSVG src={data.logo}  className='text-black '/>
        </div>
        <p className='text-lg text-gray-500  font-extralight my-2'>{data.postedAt}<span> {data.contract} </span></p>
        <p className='text-xl font-bold my-4'>{data.position}</p>
        <span className='text-lg text-gray-500  font-extralight my-2'>{data.company}</span>
        <span className='text-lg font-semibold text-lightBlue mt-12'>{data.location} </span>
        </div>
        ))
      }
   
    </div>
  )
}

export default Card