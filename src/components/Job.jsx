import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../assets/logos/scoot.svg'
import { ReactSVG } from 'react-svg'
const Job = ({job}) => {
  return ( 
 
        <div className='flex flex-col px-8 py-6  rounded-lg font-mono antialiased dark:shadow-sm dark:bg-slate-800 bg-white'>
          {/* company's logo */}
        <Link to={`/job/${job.id}`} className='-mt-12 w-14 py-6 px-2 rounded-3xl flex items-center justify-center' style={{backgroundColor:`${job.logoBackground}`}} >
          <ReactSVG src={job.logo}/>
        </Link>
        <p className='text-lg text-gray-500  font-extralight my-2'>{job.postedAt}<span> {job.contract} </span></p>
        <p className='text-xl font-bold my-4'>{job.position}</p>
        <span className='text-lg text-gray-500  font-extralight my-2'>{job.company}</span>
        <span className='text-lg font-semibold text-lightBlue mt-12'>{job.location} </span>
        </div>

  )
}

export default Job