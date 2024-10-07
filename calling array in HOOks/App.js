import { useState } from 'react'


function App(){

  const students=["Yeswanth","Reddy","Ramcharan","Upasana"]
  const [state,setState]=useState(students)
  return(
        <>
    <h1>React</h1>
    <h2>{state[0]}</h2>
   
    <input type="text" value={state[2]}/>

        </>
    )
}
export default App