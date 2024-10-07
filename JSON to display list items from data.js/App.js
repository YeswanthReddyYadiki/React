import Data from './Data.json'
import { useState } from "react"

function App(){

 const [state,setState]=useState(Data)
 
  return(
        <>
    
    {
      state.map((list)=>{
        return <li>{list.name}</li>
      })
    }
     
    </>
    )
}
export default App

  
               
                
          

