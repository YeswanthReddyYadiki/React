import React  from "react"
import { useState, useEffect } from "react"
const App=()=>{
  const [state,setState]=useState([])
 
 fetch("https://api.openweathermap.org/data/2.5/weather?q=kadapa&appid=a483fe81cc8a4619d549c7cd1637811f")
  .then(res=>res.json())
  // .then(json=> console.log(json.main.sea_level))
  .then(json=>setState(json.main))

 return(
    <>
 
 {state.temp}
    </>
  )
}

export default App