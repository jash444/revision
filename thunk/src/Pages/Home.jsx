import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../Redux/auth/action'



function Home() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [token,setToken]=useState("QpwL5tke4Pnpja7X4")
    const dispatch= useDispatch()
    let navigate = useNavigate();
    

    const onSubmit=()=>{
      const payload={
        "email": email,
      "password": password
    }
      const res=fetch('https://reqres.in/api/login', {
    method: 'post',
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json'},
    body: JSON.stringify(payload)
   }).then(res=>res.json()).then(dat=>{
    
     setToken(dat)
   })
     
      var data=  {
      
        isAuthenticated: true,
        user: token,
        loading: false
      }
      dispatch(loginSuccess(data));
      navigate("/posts")
    
      
    }
  
    
  return (
    <div>
          
      <input
        type="text"
        placeholder="Email"
  
        onChange={(e)=>setEmail(e.target.value)}/>
      <input
        type="password"
        placeholder="Password"
       
        onChange={(e)=>setPassword(e.target.value)}/>
      <button type="submit" onClick={()=>onSubmit()}>Login</button>
  
    </div>
  )
}

export default Home