import Data from './Data.json'
import { useState } from "react"

function App(){

 const [state,setState]=useState(Data)
 
  return(
        <>
    <table border={2} align='center' height="300px" width="350px" style={{backgroundColor:'violet'}}>
   <tr style={{color:'white'}}>
    <th>Name</th>
        <th>Place</th>
        <th>Email</th>
        </tr>
    {
      state.map((list)=>{
      
        return <tr>
         
          <th>{list.name}</th> 
        <th>{list.place}</th>
        <th>{list.email}</th></tr>
      })
    }
     </table>
    </>
    )
}
export default App

  
               
                
          

