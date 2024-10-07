import { useState } from 'react'


function App(){

  const [state,setState]=useState("Single page Application")
  const [age,setAge]=useState(22)
  return(
        <>
    <h1>React</h1>
    <h2>{state}</h2>
    <h2>{age}</h2>
    <input type="text" value={state}/>

        </>
    )
}
export default App