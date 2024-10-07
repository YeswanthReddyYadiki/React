import { useState } from 'react';

function App() {

  const [state, setState] = useState();
  const [data, setData] = useState([]);

 function test(e){
  setState(e.target.value)
 }

 const handler=()=>{
  setData([...data,state])
  // console.log(data)
 }

  return (
    <>
      <h1>React</h1>
      <input type="text" value={state} onChange={test}  />
      <button onClick={handler}>Add</button>
<h1>{data}</h1>
    
      
    </>
  );
}

export default App;
