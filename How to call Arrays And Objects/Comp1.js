import React from 'react-dom/client'

export default function Comp1(props) {
  return (
    <div>
      <h1 style={{color:'black'}}>Arrays:- {props.Arr[3]} and <br/> Objects :- {props.obj.name}
       
      </h1>
    </div>
  )
}
