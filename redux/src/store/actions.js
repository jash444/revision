import { ADD_TODO } from "./actiontypes";
import { ADD_TODO_SUCCESS } from "./actiontypes";
import { ADD_TODO_LODING,ADD_TODO_ERROR } from "./actiontypes";
import {INC} from "./actiontypes"
export const addtodo=(data)=>({
        type:ADD_TODO,
        payload: data,
})

export const addTodoSucess=()=>({
    type:ADD_TODO_SUCCESS,
    
})
export const addTodoLoding=()=>({
    type:ADD_TODO_LODING,
    
})
export const addTodoError=()=>({
    type:ADD_TODO_ERROR,
    
})
     
export const add = () => {
   
    return {
      type: "ADD"
    };
  };
  
  export const subtract = () => {
    console.log("decrease");
    return {
      type: "SUBTRACT"
    };
  };
  
  export const asyncAdd = () => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(add());
      }, 1000);
    };
  };
  

