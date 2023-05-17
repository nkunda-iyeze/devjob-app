
import logo from '../assets/desktop/logo.svg'
import bgPatternHeader from '../assets/desktop/bg-pattern-header.svg'
import {BsFillSunFill,BsToggleOff,BsFillMoonFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <div style={{backgroundImage:`url(${bgPatternHeader})`}} className='flex justify-between text-center  px-36 py-10 bg-no-repeat bg-cover rounded-bl-full ' >
        <img src={logo} alt="" />
        <div className='hidden  text-2xl text-white md:flex'>
            <BsFillSunFill className='mx-4'/>
            <BsToggleOff className='mx-4'/>
            <BsFillMoonFill className='mx-4'/>
        </div>
    </div>
  )
}

export default Navbar