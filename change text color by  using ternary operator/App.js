import React from 'react';
// import Data from './Data.json'
 
import { useState } from 'react';
let App=()=>{
 
const [color,setcolor]=useState('red')
let demo=()=> {
  setcolor (color=='red'? setcolor(color=='blue'):setcolor(color=='yellow'))
 
}
  return (
    <>
      <h1 style={{color}}>yeswanth</h1>

      <button onClick={demo}>update</button>
    </>
  )
 
}
export default App

  
// import React, { useState } from 'react';

// let App = () => {
//   // Initialize the state with color 'red'
//   const [style, setStyle] = useState({ color: 'red' });

//   // Function to toggle color between red and blue
//   let demo = () => {
//     setStyle(Style => ({color: Style.color === 'red' ? 'blue' : 'green'}));
//   };

//   return (
//     <>
//       <h1 style={{ color: style.color }}>Yeswanth</h1>
//       <button onClick={demo}>Update Color</button>
//     </>
//   );
// }

// export default App;
      
                
          

