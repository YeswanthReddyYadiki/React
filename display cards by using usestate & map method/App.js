import Data from './Data.json'
import { useState } from "react"
import  '../node_modules/bootstrap/dist/css/bootstrap.css'

function App(){

 const [state,setState]=useState(Data)
 
  return(
        <>
       
       <div className='container mt-5 border border-4 '>
      <div className='row'>
        {state.map((list)=>{
          return <>
             <div className='col-md-4 mt-3'>
             <div class="card">
  <img src={list.pic} class="card-img-top img-fluid" alt="..."/>
  <div class="card-body">
    <h3 class="card-title text-center p-2">{list.name}</h3>
    <p class="card-text p-2">{list.text}</p>
  </div>
</div>
             </div>
           
          </>
        })}
        </div>
      </div>
     

       
    </>
    )
}
export default App

  
               
                
          

