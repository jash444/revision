import React from 'react'
import { useState } from 'react'

function Home() {
    const [email,setEmail]=useState(" ")
    const [password,setPassword]=useState(" ")

    const onSubmit=()=>{
     console.log(email,password)
      
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