import React, { useContext } from 'react'
import { JobContext } from '../context/JobContext'
import { useParams } from 'react-router-dom';

const Footer = () => {

    const {jobs} = useContext(JobContext);
    const {id} = useParams()
    const job = jobs.find(job => job.id === parseInt(id))

  return (
    <div className='bg-slate-100 flex justify-center dark:bg-gray-800 dark:text-white dark:border-t-2'>
        <div className='md:flex justify-between items-center py-4 w-[1000px] '>
            <div>
                <p className='text-2xl font-bold '>{job.position}</p>
                <p className='text-gray-600 text-lg'>{job.company}</p>
            </div>
            <div className='bg-lightBlue px-6 py-2 text-white rounded-md'>
              <p className='text-lg text-center font-semibold cursor-pointer'>Apply Now </p>
          </div>
        </div>

    </div>
  )
}

export default Footer