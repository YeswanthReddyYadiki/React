import React from 'react-dom/client'

export default function Comp1(props) {
  return (
    <div>
      <h1 style={{color:'red'}}>{props.name} 
        <img src={props.y} alt=""/>
        <img src={props.z} alt=""/>
      </h1>
    </div>
  )
}
