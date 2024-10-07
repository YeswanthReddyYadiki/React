import { useState } from "react"
const App=()=>{
 const[state,setState]=useState(0)
 const[state1,setState1]=useState(100)
 
function add(){
  setState(state+1)
}
function sub(){
  setState1(state1-1)
 
 
}
  return(
    <>
    <h1>{state}</h1>
    <button onClick={add}>Add</button>
    <h1>{state1}</h1>
   
 
    <button onClick={sub}>Sub</button>
 
    </>
  )
}
export default App