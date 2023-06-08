import React, { createContext, useEffect, useState } from 'react'
import data from '../data.json'
export const JobContext = createContext()
const JobProvider = ({children}) => {
    const[jobs,setJobs]= useState([]);
    useEffect(()=>{
        setJobs(data);
    },[])
  return  <JobContext.Provider value={{jobs}}>{children}</JobContext.Provider>
}

export default JobProvider;