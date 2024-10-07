import { useState } from 'react';

function App() {

  const [state, setState] = useState();
  const [data, setData] = useState([]);

 function test(e){
  setState(e.target.value)
 }

 const handler=()=>{
  setData((data)=>{
    const updatelist=[...data,state]
    console.log(updatelist)
    return updatelist
  })
 }

  return (
    <>
    <div>
      <h1>React</h1>
      <input type="text" value={state} onChange={test}  />
      <button onClick={handler}>Add</button>
      </div>
    
      {data.map((list)=>{
        return(
          <>
          <li>{list}</li>
          </>
        )
      })}
    </>
  );
}

export default App;
