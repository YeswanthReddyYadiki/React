import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";


export default function Forms() {
    let dispatch=useDispatch()
    const [amount ,setAmount]=useState()
    const [fullname ,setFullName]=useState()
    const [mobile ,setMobile]=useState()
  return (
    <>
      <div className="container">
<div>
    <input type="number" value={amount} onChange={(e)=>{
        let data=e.target.value
        setAmount(data)
    }}/>
    <button className="btn btn-success" onClick={()=>{
        dispatch({'type':"deposite",payload:amount})}}>Deposite</button>

<button className="btn btn-danger" onClick={()=>{
        dispatch({'type':"withdraw",payload:amount})}}>withdraw</button>
       
   
</div>
<div>
<input type="text" value={fullname} onChange={(e)=>{
        let data=e.target.value
        setAmount(data)
    }}/>

<button onClick={()=>{
        dispatch({'type':"newUpdate",payload:fullname})}}>udate</button>
</div>

<div>
<input type="text" value={fullname} onChange={(e)=>{
        let data=e.target.value
        setAmount(data)
    }}/>

<button onClick={()=>{
        dispatch({'type':"newUpdate",payload:fullname})}}>udate</button>
</div>

      </div>
    </>
  )
}
