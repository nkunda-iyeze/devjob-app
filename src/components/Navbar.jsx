
import logo from '../assets/desktop/logo.svg'
import bgPatternHeader from '../assets/mobile/bg-pattern-header.svg'
import ThemedToggle from './ThemedToggle'
import { useNavigate } from 'react-router-dom'
// import {BsFillSunFill,BsToggleOff,BsFillMoonFill } from "react-icons/bs";
const Navbar = () => {
   const navigate = useNavigate()
  return (
    <div style={{backgroundImage:`url(${bgPatternHeader})`}} className='md:flex md:justify-between justify-center items-center text-center px-20 py-5 bg-no-repeat bg-cover cursor-pointer'>
        <div className='flex items-center justify-center my-6'>
        <img  src={logo} alt="" onClick={()=>{
          navigate('/');
          window.location.reload();
        }}/>
        </div>
        <ThemedToggle className="mb-12"/>
    </div>
  )
}

export default Navbar