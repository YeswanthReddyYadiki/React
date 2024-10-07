import Comp1 from './Comp1'

function App(){
  let Arr =["Yeswanth","Ram charan","Mahesh Babu","Prabhas"]
  let obj={
    name:"Reddy",
    place:"Pulivensula",
    age:23
  }
    return(
        <>
       <Comp1 Arr={Arr} obj={obj}/>
      
      
       
        </>
    )
}
export default App