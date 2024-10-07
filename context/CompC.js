import React,{useContext} from "react";
import { context } from "./App";

export default function CompC() {
    let x=useContext(context)
  return (
   <>
   <h3>CompC</h3>
  <h1>Welcme  {x}</h1>
   </>
  )
}

