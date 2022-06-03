import { createStore } from "redux";
import { reducer } from "./reducer";
import { combineReducers } from "redux";
import {counterReducer }from "./actionreducer";


const rootreducer=combineReducers({
    reducer:reducer,
    counterReducer:counterReducer
  
   
})



export const store=createStore( rootreducer);