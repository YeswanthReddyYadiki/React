import React  from "react"
import { useState } from "react"
const App=()=>{
 const[state,setState]=useState(0)
 const[state1,setState1]=useState(100)
 
const add=()=>{
  setState(state+1)
}
const sub=()=>{
  setState1(state1-1)
 }

 const multiply =()=>{
  console.log('react')
  return state*5;
 }
  return(
    <>
    
    <h1>{state}</h1>
<h3>{multiply()}</h3>
    <button onClick={add}>Add</button>
    <h1>{state1}</h1>
   
 
    <button onClick={sub}>Sub</button>
 
    </>
  )
}

export default App