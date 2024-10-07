

function App(){
    
  const demo=()=>{
    alert("Hello React")
  }
  
  return(
        <>
    <h1>React</h1>
    {/* <h2>{demo()}</h2> */}
   <button onClick={demo}>Click Here</button>
   <button onMouseOver={demo}>Mouse over</button>
   <button onMouseOut={demo}>Mouse out</button>

        </>
    )
}
export default App