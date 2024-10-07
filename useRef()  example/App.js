import React from "react";
import {useRef} from 'react'

export default function App() {
  const data=useRef()
  const handler=(e)=>{
    e.preventDefault()
    console.log(data.current.value)
    data.current.value="Yeswanth reddy"
    console.log(data.current.value)
  }
  return (
    <>
      <form onSubmit={handler}>
        <input type="text" ref={data}/>

        <br/>
        <input type="submit" />
      </form>
    </>
  )
}

