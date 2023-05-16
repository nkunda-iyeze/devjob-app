import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

const App=()=>  {
  return (
   <div>
    <Navbar/>
    <SearchBar/>
    <HeroSection/>
   </div>
  )
}
export default App;