import { BrowserRouter ,Routes , Route } from "react-router-dom"
function App() {
 
  return (
   <>
  <h1>yeswant</h1>
  <BrowserRouter>
  <Routes>

    <Route path="/" element={<h1>Main Root</h1>}/>
    <Route path="about" element={<h2>Good Moring Yeswanth</h2>}/>
    <Route path="courses" element={<h2>Html Css Js</h2>}/>
    <Route path="contact" element={<h2>Thank you for contact</h2>}/>

  </Routes>
  
  </BrowserRouter>
   </>
  )
}
export default App