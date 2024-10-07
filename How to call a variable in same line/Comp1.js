import React from 'react-dom/client'

export default function Comp1(props) {
  return (
    <div>
      <h1 style={{color:'red'}}>Yadiki {props.name}, place {props.place} and age{props.age}</h1>
    </div>
  )
}
