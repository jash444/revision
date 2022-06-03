import { useEffect, useState } from "react"
import { addTodoError, addTodoLoding, addTodoSucess } from "../actions";
import { useDispatch, useSelector } from "react-redux";
export const Todos=()=>{
    const [text,setText] =useState("");
    const [todos,setTodos]=useState([])
    const getdata=()=>{
        fetch('http://localhost:3001/todos')
        .then(response => response.json())
        .then(data => setTodos(data));
    }
    

   
    useEffect(()=>{
        getdata()
    },[])
    const dispatch=useDispatch()
    return (
    <div>
        <input 
        value={text}
         type="text"  
         placeholder="enter todo"
         onChange={(e) => setText(e.target.value )} />
         <button onClick={()=>{
             dispatch(addTodoLoding());
             fetch("http://localhost:3001/todos",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"},
            body:JSON.stringify({status:false,title:text})})
            .then((d)=>d.json())
            .then((res)=>{
                dispatch(addTodoSucess(res));
                getdata()
            })
            .catch((err)=>{
                dispatch(addTodoError)
            })
         }}>ADD todo </button>
         {todos.map((e,i)=>(
             <div key={i}>
                 {e.title}
             </div>
         ))}
    </div>
    )
}