import React, {useState, useEffect } from 'react'
 
export default function App() {
  var [state,setState]=useState([])
  useEffect(() =>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            // .then(json=>console.log(json))
            .then(json=>setState(json))
  })
   
  return (
    <>
    {state.map((list)=>{
      return(
        <li>{list.title}</li>
      )
    })}
   
 
    </>
  )
}