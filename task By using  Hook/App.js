import { useState } from "react"


function App(){
    const [state,setState]=useState("Yeswanth Reddy")
    const handler=()=>{
     if(state=="Yeswanth Reddy"){
      setState("Ramcharan")
    }
    else{
      setState("Yeswanth Reddy")
    }
  }
  return(
        <>
    <h1>React</h1>
    <h2>{state}</h2>
   <button onClick={handler}>Click & Update</button>
   

        </>
    )
}
export default App