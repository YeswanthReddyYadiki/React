import React, {useState} from 'react'
 import './style.css'

export default function App() {
  var [state,setState]=useState('React')
  const handler =(a)=>{
setState(a.target.value)
  }
 return(
  <>
  <h1>{state}</h1>
  <input type='text' value={state} onChange={handler}/>
  
  </>
 )
}
