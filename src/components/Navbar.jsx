
import logo from '../assets/desktop/logo.svg'
import bgPatternHeader from '../assets/desktop/bg-pattern-header.svg'
import { useEffect, useState, useCallback} from 'react'
// import {BsFillSunFill,BsToggleOff,BsFillMoonFill } from "react-icons/bs";
const Navbar = () => {
  const [theme,setTheme] =  useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
  ); 
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  
  const options = [
    {
      icon:"sunny-sharp",  
      text:"light",
    },
    {
      icon:"moon-sharp",  
      text:"dark",
    },
    {
      icon:"desktop-sharp",  
      text:"system",
    }
  ];
  const onwindowMatch = useCallback(() => {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [darkQuery.matches, element.classList]);
  
  onwindowMatch ();
  useEffect(()=>{
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
        default:
          localStorage.removeItem("theme");
          onwindowMatch()
          break;
    }
  },[theme,element.classList, onwindowMatch]);
  darkQuery.addEventListener("change", (e)=>{
      if(!("theme" in localStorage)){
        if(e.matches){
          element.classList.add("dark");
        }else{
          element.classList.remove("dark");
        }
      }
  })
  return (
    <div style={{backgroundImage:`url(${bgPatternHeader})`}} className='flex justify-between text-center px-20 py-10 bg-no-repeat bg-cover md:rounded-bl-full '>
        <img src={logo} alt="" />
        <div className='flex text-2xl text-white'>
            {/* <BsFillSunFill className='mx-4'/>
            <BsToggleOff className='mx-4'/>
            <BsFillMoonFill className='mx-4'/> */}

            {
              options?.map(option =>(
                <button key={option.text} className={`mx-4 text-3xl font-bold ${theme === option.text &&' text-slate-900'}`} onClick={()=> setTheme(option.text)}>
                <ion-icon name={option.icon} ></ion-icon>
                </button>
              ))
            }
            

        </div>
    </div>
  )
}

export default Navbar