import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


const Posts = () => {
const data=useSelector(Reducer=>console.log(Reducer.state.isAuthenticated))
let navigate = useNavigate();

const isAuth=()=>{
  if(data=="true"){
    return true
  }
  else{
    navigate("/posts")
  }
}
  return (
    <div>Posts</div>
  )
}

export default Posts