import { BrowserRouter ,Routes , Route, Link } from "react-router-dom"
import About from "./About"
import Courses from "./Courses"
function App() {
 
  return (
   <>
  <h1>yeswant</h1>
  <BrowserRouter>
  {/* <a href="/">Home</a>
  <a href="about">about</a>
  <a href="courses">courses</a> */}
  <Link to='/'>Home</Link>
  <Link to='about'>about</Link>
  <Link to='courses'>courses</Link>
  <Routes>

    <Route path="/" element={<h1>Main Root</h1>}/>
    <Route path="about" element={<About/>}/>
    <Route path="courses" element={<Courses/>}/>
  
  </Routes>
  </BrowserRouter>
   </>
  )
}
export default App