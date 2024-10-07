import Comp1 from './Comp1'

function App(){
  let z="https://m.media-amazon.com/images/M/MV5BYzc4NjViMzktYTg5ZC00MjJkLTlmNjEtZGJiNWFjYzE3NDgxXkEyXkFqcGdeQXVyMTI2MTI0MjIx._V1_.jpg"
  let pic="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbmVs7AiwFtoQlBQF2rYwg18ezt6IcvOviVEssju-Iez2zcFVy"
    return(
        <>
       <Comp1 name="Ram Charan" y={pic}/>
       <Comp1 name="Ram Charan" y={z}/>
      
       
        </>
    )
}
export default App