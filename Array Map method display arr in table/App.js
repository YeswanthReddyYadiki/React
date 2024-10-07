import { useState } from "react"

function App(){
const arr=[1,2,3,4,5,6,7,8,9,10]
 const [state,setState]=useState(arr)
  return(
        <>
    
     <table border={2} width={300} height={300} style={{color:'white',backgroundColor:'violet'}} align="center">
     {
      
        state.map((x)=>{
        return <tr>
          <th>{2}</th>
          <th>X</th>
          <th>{x}</th>
          <th>=</th>
          <th>{2*x}</th>
          </tr>
        })
      
     } 
   </table>
   
      </>
    )
}
export default App

  
               
                
          

