
import React,{useState} from 'react'
 import './style.css'
export default function App() {
  var [state,setState]=useState("red")
 
 
  const handler=(e)=>{
    setState(e.target.value)
     
  }
 
 
  return (<>
  <h1 className={state}>{state}</h1>
  <select  onChange={handler} >
   <option  >red</option>
   <option  >green</option>
   <option >blue</option>
   <option >yellow</option>
 
  </select>
 
  </>
   
  )
}


