import { useState } from 'react'


function App(){

  const students={
    name:"Yeswanth",
    place:"Reddy",
    age:22,
  subscription :{
    package: 150000,
    salary:10000
  }
  }
  const [state,setState]=useState(students)
  return(
        <>
    <h1>React</h1>
    <h2>{state.age}</h2>
   
    <input type="text" value={students.subscription.salary}/>

        </>
    )
}
export default App