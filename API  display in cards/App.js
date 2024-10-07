
import { useState } from 'react'
import React from 'react'
export default function App() {
  const [state, setState] = useState([])
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    // .then(json => console.log(json))
    .then(json => setState(json))
  
  return (
    <>
      <div className='container'>
        <div className='row mt-5 '>
          {state.map((list) => {
            return <>
              <div className='col-md-6 text-center'>
                <div class="card bg-success">
                  <div class="card-body">
                    <h1 class="card-title">{list.id}</h1>
                    <h1 class="card-title">{list.name}</h1>
                    <h1 class="card-title">{list.username}</h1>
                    <h1 class="card-title">{list.email}</h1>

                  </div>
                </div>
              </div>
            </>
          })}
        </div>
      </div>
    </>
  )
}