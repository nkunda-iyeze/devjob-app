import React, { useContext,useState } from 'react'
import {BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { JobContext } from '../context/JobContext';
const SearchBar = () => {
  const [checked,setChecked] = useState(true);
  // toggle form on small devices 
  const [toogle, setToggle] = useState(false)
  const [searchData, setSearchData] = useState({
    title: "",
    location: "",
    fullTime: "", // Assuming it's a string value like "Full Time"
  });

  // handle title and location inputs 
  function handleChange(e) {
    setSearchData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

// handle checkbox change

function handleContract() {
  setChecked((prev) => !prev);
  setSearchData((prev) => ({
    ...prev,
    fullTime: `${!checked ? "Full Time" : ""}`, // Toggle the value based on the updated checked state
  }));
}

// jobs and setJobsState from jobContext
const { jobs, setJobs } = useContext(JobContext);

// handleSubmit event when form is submitted
const handleSubmit = (e) => {
  e.preventDefault();
  if (searchData.title === "" && searchData.location === "" && searchData.fullTime === "") {
    return setJobs(jobs); // Reset to the original jobs list
  } else {
    const resultsArray = jobs.filter((job) =>
      job.position.toLowerCase().includes(searchData.title.toLowerCase()) &&
      job.location.toLowerCase().includes(searchData.location.toLowerCase()) &&
      job.contract.toLowerCase().includes(searchData.fullTime.toLowerCase())
    );
    setJobs(resultsArray); // Update the filtered jobs in the context
    setToggle(false); // any time is submited on small screens
  }
};

return (
  <div className='flex justify-center items-center'>
    
    {/* form container */}
    <div className='md:max-w-[1000px] -mt-5 md:-mt-10 shadow-xl min-w-[10px]'>

    {/* form  */}
      <form className='px-4 bg-white flex justify-center items-center rounded  dark:bg-gray-800 '
      onSubmit={handleSubmit}
      >
      <div className='flex items-center'>
      <label htmlFor="search" className='hidden md:flex text-lightBlue font-black text-2xl'>
        <BsSearch/> 
      </label>
      <input type="text" placeholder='Filter by titles,companies,expertise...' id='search' className='py-6 px-4 focus:outline-none md:border-r-2 md:border-gray  bg-transparent dark:border-slate-700 dark:bg-gray-800'
       value={searchData.title}
       onChange={handleChange}
       name="title"
      />
      <label htmlFor="search" className='hidden md:flex text-lightBlue font-black text-2xl'><SlLocationPin/> 
      </label>
      <input type="text" placeholder='Filter by location.' id='location' className='hidden md:flex py-6 px-4 focus:outline-none border-r-2 border-gray  bg-transparent dark:border-slate-700'
       value={searchData.location}
       onChange={handleChange}
       name="location"
      />
      <input id="" className='mx-3 text-2xl cursor-pointer hidden md:flex' 
      type="checkbox"
      name="fullTime"
      defaultValue={searchData.fullTime}
      onChange={handleContract}
      /> <span className='font-bold font-sans mx-3 cursor-pointer hidden md:flex' >Full Job</span>

      <button type='submit' className='bg-lightBlue text-white px-4 py-3 mx-5 font-bold rounded hidden md:flex'>
        Search
      </button>

      {/* on small device */}
      <button className='text-3xl md:hidden flex text-slate-500 dark:text-slate-50' onClick={()=>setToggle(true)}>
      <ion-icon name="funnel"></ion-icon>
      </button>
      {/* on small device */}
      <button type='submit' className='bg-lightBlue text-white text-3xl px-4 py-3 ml-2 font-black rounded md:hidden'>
      <BsSearch/>
      </button>
      </div>
     
  </form>
  </div>

   {/* on smalll devices form to submit  */}
      {
        toogle && 
          <>
          <div className='bg-black opacity-60 absolute  py-5 px-10   md:hidden h-[1400px] w-full flex justify-center items-center' onClick={()=>setToggle(false)}>
       </div>
   
   <div className='md:hidden flex justify-center items-center absolute z-10'>
   <div className='flex justify-center items-center  '>
          <form className='px-10  py-8 bg-white flex flex-col  rounded  dark:bg-gray-800' onSubmit={handleSubmit}>

          <div className='flex items-center'>
          <label htmlFor="search" className='flex text-lightBlue font-black text-2xl'>
        <BsSearch/> 
      </label>
      <input type="text" placeholder='Filter by location.' id='location' className='focus:outline-none  bg-transparent dark:border-slate-700 dark:bg-gray-800 py-6 px-4 '
       value={searchData.location}
       onChange={handleChange}
       name="location"
      />
      </div>
      {/* className=' ' */}
      <div className='flex'>
        {/* checkbox */}
      <input id="" className='mx-3 text-2xl cursor-pointer flex' 
      type="checkbox"
      name="fullTime"
      defaultValue={searchData.fullTime}
      onChange={handleContract}
      /> <span className='font-bold font-sans mx-3 cursor-pointer' >Full Job</span>
      </div>
      <button type='submit' className='bg-lightBlue text-white px-4 py-3  font-bold rounded my-8'>
        Search
      </button>
          
          </form>
        </div>
   </div>
          </>
        
      }
   
  </div>
)
  
  
}

export default SearchBar