import { useState } from "react"

function App(){
const arr=['yes','wan','th','red','dy']
 const [state,setState]=useState(arr)
  return(
        <>
     
     <table border={2} width={300} height={300} style={{color:'white',backgroundColor:'violet'}} align="center">

      {
        state.map((x)=>{
        return <tr><th>{x}</th></tr>
        })
      }
   </table>
   
      </>
    )
}
export default App


