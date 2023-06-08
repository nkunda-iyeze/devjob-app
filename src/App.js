import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobDescription from "./pages/JobDescription";
import Navbar from "./components/Navbar";
const App=()=>  {
  return (
  <Router >
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/job/:id" element={<JobDescription/>}></Route>
    </Routes>
  </Router>
  )
}
export default App;