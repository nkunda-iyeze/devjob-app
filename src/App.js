import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

const App=()=>  {
  return (
   <div className="dark:text-gray-100 dark:bg-slate-900 h-screen">
    <Navbar/>
    <SearchBar/>
    <HeroSection/>
   </div>
  )
}
export default App;