
import React,{useState} from 'react'
 
export default function App() {
    const[city,setCity]=useState([])
    const[resultapi,setResultApi]=useState('')
    const changeHandler=(e)=>{
        setCity(e.target.value)
      }
   const submitHandler=(e)=>{
          e.preventDefault()
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4b79ac4c07246081fa4fe84d53ba8ff4`)
          .then(res => res.json())
          .then(data=>{
            const kelvin=data.main.temp;
            const celsius=kelvin-273.15
            setResultApi(Math.round(celsius))
          })
        }
  return (
   <>
   <h1>Enter a city</h1>
   <h1>{city.temp}</h1>
   {resultapi+"deg"}
   <form onSubmit={submitHandler}>
    <input type='text' value={city} onChange={changeHandler}/>
    <br/>
    <input type='submit'/>
   </form>
   </>
  )
}