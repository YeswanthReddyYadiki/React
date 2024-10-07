import React from "react";
import { useSelector } from "react-redux";

export default function Account() {
    let data=useSelector((state)=>{
        return state;
    })
  return (
    <>
      <div className="container">
        <table className="table">
            <tr>
                <th>Balance</th>
                <th>Name</th>
                <th>Mobile</th>
            </tr>

           <tr>
           <th>{data.balance}</th>
           <th>{data.fullName}</th>
           <th>{data.mobile}</th>

            </tr> 
        </table>

      </div>
    </>
  )
}
