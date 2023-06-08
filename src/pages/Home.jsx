import React, { useContext} from 'react'
import SearchBar from '../components/SearchBar'
// import HeroSection from '../components/HeroSection'
import {JobContext} from '../context/JobContext'
import Job from '../components/Job'
const Home = () => {
  // const [jobs,setJobs] = useState([]);
  // const [searchJobs,setSearchJobs] = useState([]);
  const {jobs}= useContext(JobContext)
  return (
    <div className="dark:text-gray-100 dark:bg-slate-900 h-auto bg-slate-100" >
        <SearchBar/>
        
        <div className='flex justify-center items-center my-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-sm md:max-w-none'>
              {
                jobs.map(job =>{
                  return <Job key={job.id} job={job}/>
                })
              }
          </div>
        </div>
        {/* <HeroSection setJobs={setJobs} jobs={jobs} searchJobs={searchJobs} setSearchJobs={setSearchJobs}  /> */}
        <div className='flex items-center justify-center'>
            <button className='bg-lightBlue text-white px-3 py-4 font-bold font-sans rounded'>Load More</button>
        </div>
    </div>
  )
}

export default Home