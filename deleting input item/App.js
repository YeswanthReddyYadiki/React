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
    // console.log(updatelist)
    setState('')
    return updatelist
  })
 }
 const remove=(i)=>{
  const updatelistData=data.filter((e,id)=>{
    return i !=id
  })
  setData(updatelistData)
 }

  return (
    <>
    <div>
      <h1>React</h1>
      <input type="text" value={state} onChange={test} placeholder='state' />
      <button onClick={handler}>Add</button>
      </div>
    
      <div className='yes'>
      {data.map((list,i)=>{
        return(
          <>
          <li key={i}>{list}<button className='yes1' onClick={()=>remove(i)}>Remove</button></li>
          </>
        )
      })}
      </div>
    </>
  );
}

export default App;
