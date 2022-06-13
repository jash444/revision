import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { addcompney, fetchdata } from '../Redux/action'
import { store } from '../Redux/store'

function Compney() {
  //const [compney,setCompney]=useState("")
  const [input,setInput]=useState("")
    
  var data=useSelector((store=>store.company))
  var company=data.products
company.map(e=>console.log(e))
  const dispatch=useDispatch()
  const handelInput=(e)=>{
    
    setInput(e)
  }




  const handelCompany=()=>{
   
    dispatch(fetchdata())
    dispatch(addcompney(input))
  }






  useEffect(()=>{
    dispatch(fetchdata())
  },[useDispatch])
  return (
    <div><h2>Compney  Dropdown</h2>
    
    
    <div className="dropdown">
      <span> Compney Names</span>
      <div className="dropdown-content">
       
      <p>Hello World!</p>
      <p>Hello World!</p>
      <input type="text" onChange={(e)=>{handelInput(e.target.value)}}/><button onClick={()=>{handelCompany()}}>Add compney</button>
      </div>
    </div></div>
  )
}

export default Compney