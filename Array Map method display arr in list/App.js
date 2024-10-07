import { useState } from "react"

function App(){
const arr=['yes','wan','th','red','dy']
 const [state,setState]=useState(arr)
  return(
        <>
     
     <ul>

      {
        state.map((x)=>{
        return <li>{x}</li>
        })
      }
     </ul>
   
      </>
    )
}
export default App


