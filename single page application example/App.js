import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Courses from "./Courses"
import Contact from "./Contact"

function App() {

  return (
    <>

      <BrowserRouter>
        {/* <a href="/">Home</a>
  <a href="about">about</a>
  <a href="courses">courses</a> */}
        {/* <div className="yes"> 
  <Link to='/'>Home</Link>
  <Link to='about'>About us</Link>
  <Link to='courses'>Courses</Link>
  </div> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <Link class="navbar-brand" to="/" >Home</Link>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="about">About</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="courses" target="blank">courses</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="contact">contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>

              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col-md-9">
              <Routes>

                <Route path="/" element={<h1>Main Root</h1>} />
                <Route path="Home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="courses" element={<Courses />} />
                <Route path="contact" element={<Contact />} />

              </Routes>
            </div>
          </div>

        </div>


      </BrowserRouter>
    </>
  )
}
export default App