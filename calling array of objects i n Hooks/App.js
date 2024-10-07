import { useState } from 'react'
import Data, { users} from './Data'

function App(){

  const [state,setState]=useState(Data)
  const [user,setUser]=useState(users)
  return(
        <>
    <h1>React</h1>
    <h2>{state}</h2>
   
    <h1>{user[0].name}</h1>
    <h1>{user[1].name}</h1>

        </>
    )
}
export default App