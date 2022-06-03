import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { add, addCount, asyncAdd, subtract } from '../actions'



function Counter() {
  const count = useSelector((state) =>state.counterReducer.count);
    const dispatch = useDispatch()
  
    // useEffect(() => {
    //   dispatch(addCount())
    // }, [])

  return (
    <>
     <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(subtract())}>-</button>
      <button onClick={() => dispatch(add())}>+</button>
      <button onClick={() => dispatch(asyncAdd())}>async increase</button>
    </div>
    </>
  )
}

export default Counter