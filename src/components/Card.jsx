import React from 'react'
import scoot from '../assets/logos/scoot.svg'
const Card = () => {
  return (
    <div className='lg:grid grid-cols-3 gap-5'>
        <div className='flex flex-col px-8 py-6  rounded-lg font-mono shadow-xl shadow-zinc-400 antialiased my-4 dark:shadow-sm dark:bg-slate-800'>
          {/* company's logo */}
        <div className='bg-orange-400 -mt-12 w-14 py-6 px-2 rounded-3xl' >
          <img src={scoot} alt="" className=''/>
        </div>
        <p className='text-lg text-gray-500  font-extralight my-2'>5h ago  .<span> Full Time</span></p>
        <p className='text-xl font-bold my-4'>Senior Software Engineer</p>
        <span className='text-lg text-gray-500  font-extralight my-2'>Scoot</span>
        <span className='text-lg font-semibold text-lightBlue mt-12'>United Kingdom</span>
        </div>
        
    </div>
  )
}

export default Card