
import React,{useState} from 'react'
 import './style.css'
export default function App() {
const data=["Apple","Banana","Grapes","Watermelon"]
  const [fruit,setFruit]=useState(data)
 
 
 
  return (<>
{fruit.filter(x=>x.includes('e')).map((list)=>{
  return(
    <>
    <li>{list}</li>
    </>
  )
})}
 
  </>
   
  )
}


