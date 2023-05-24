
import logo from '../assets/desktop/logo.svg'
import bgPatternHeader from '../assets/desktop/bg-pattern-header.svg'
import ThemedToggle from './ThemedToggle'
import { useNavigate } from 'react-router-dom'
// import {BsFillSunFill,BsToggleOff,BsFillMoonFill } from "react-icons/bs";
const Navbar = () => {
   const navigate = useNavigate()
  return (
    <div style={{backgroundImage:`url(${bgPatternHeader})`}} className='flex justify-between text-center px-20 py-10 bg-no-repeat bg-cover md:rounded-bl-full '>
        <img src={logo} alt="" onClick={()=>{
          navigate('/');
          window.location.reload();
        }}/>
        <ThemedToggle/>
    </div>
  )
}

export default Navbar