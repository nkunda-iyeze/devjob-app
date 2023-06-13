import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { JobContext } from '../context/JobContext';
import { ReactSVG } from 'react-svg';
import Footer from '../components/Footer';

const JobDescription = () => {

  const {id} = useParams(); 
  const {jobs} = useContext(JobContext)
  const job = jobs.find(job => job.id === parseInt(id))
if(!job){
  return (
    <section className='md:h-screen flex items-center justify-center h-full'>
      <p>Is Loading ....</p>
    </section>
  )
}
else{
  
  return (
    <section className='dark:bg-gray-900 dark:text-white '>
    {/* header section */}
      <header className=''>
      <div className='flex justify-center items-center dark:bg-gray-900'>
        <div className='w-[1000px] md:-mt-14 shadow-xl  mt-12 '>
            {/* div */}
            <div className='bg-white md:flex items-center justify-center rounded-2xl dark:bg-gray-800'>
              {/* Logo */}
             
              <div className='hidden md:flex py-14 px-12 text-2xl items-center justify-center' style={{backgroundColor:`${job.logoBackground}`}}>
                <ReactSVG src={job.logo}/>
              </div>
              {/* job title and button wrapper */}
              <div className='md:flex md:flex-1 md:justify-between justify-center items-center px-10 py-4'>
                {/* job title  */}
                <div className='flex flex-col items-center'>
                  {/* display this div on small screens  */}
                  <div className='flex justify-center items-center p-10  w-[50px] h-[60px] -mt-24 rounded-full  md:hidden' style={{backgroundColor:`${job.logoBackground}`}}>
                  <ReactSVG src={job.logo}/>
                  </div>
                  <p className='text-xl font-bold mb-3'>{job.company} </p>
                    <a href={job.website} className='text-gray-500'>{job.company}.com</a>
                </div>
                {/* button */}
              <div className=' bg-slate-200 flex items-center justify-center px-3 py-2 rounded-lg' >
                  <a href={job.website} className='font-bold text-lightBlue'> Company Site</a>
                 
              </div>
              </div>
              
            </div>
        </div>
      </div>
    </header>
    {/* body section  */}
    <section className=' bg-slate-100 container mx-auto my-14 p-12 max-w-[1000px] rounded-md dark:bg-gray-800'>
       {/* division 1 */}
      <div className='md:flex justify-between items-center mb-6'>
       
        <div className=''>
          {/* job title  */}
          <div className=''>
              <p className=' '>{job.postedAt} . <span> {job.contract} </span></p>
              <h3 className='text-4xl font-bold my-6'>{job.position}</h3>
              <p className='font-bold text-lightBlue'>{job.location}</p>
          </div>
        </div>
        {/*  button*/}
        <div className='bg-lightBlue px-6 py-2 text-white rounded-md cursor-pointer'>
              <p className='text-lg font-semibold text-center'>Apply Now </p>
          </div>
     
      </div>
      {/* division 2 */}
      <div>
        
        <h1 className='text-4xl font-bold my-6'>Requirements</h1>
        <p className='my-12'>
        {job.requirements.content}
        </p>

        <ul className='list-inside'>
          {
            job.requirements.items.map((item,id)=>{
              return <li key={id} className='py-1 font-medium'><span className="list-bullet"></span>{item}</li>
            })
          }
        </ul>
        <h1 className='text-4xl font-bold mt-6'>What You Will Do</h1>
        <p className='my-6'>
        {job.role.content}
        </p>
        <ol className='list-decimal list-inside'>
        {
            job.role.items.map((item,id)=>{
              return <li key={id} className='py-1 font-medium'>{item}</li>
            })
          }
        </ol>
      </div>
    </section>
    <Footer/>
    </section>
  
  )
}
}

export default JobDescription