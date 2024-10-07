import { useState } from 'react'


function App(){

  const students={
    name:"Yeswanth",
    place:"Reddy",
    age:22}
  const [state,setState]=useState(students)
  return(
        <>
    <h1>React</h1>
    <h2>{state.age}</h2>
   
    <input type="text" value={students.name}/>

        </>
    )
}
export default App