import { useState } from "react"


function App(){

    const [state,setState]=useState(0)
   
    const addition=()=>{
  setState(state+1)
  }

  const handler1=()=>{
    setState(state-1)
 }
  return(
        <>
    <h1>React</h1>
    <h2>{state}</h2>
   <button onClick={addition}>+</button>
   <button onClick={handler1}>-</button>
   

        </>
    )
}
export default App


