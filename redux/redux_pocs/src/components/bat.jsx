import React from 'react'
import { useReducer } from 'react';

let initialState = {
    value : "",
    bat : 10
}

function bat() {

    const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <>
        <div>Bat</div>
        <input value = {state.value} onChange={(e)=>{
            let val = e.target.value ;
            dispatch({
                type: "set_value",
                payload: val
            })}
        }></input>
        <button type = ></button>
        <div>No of bats : {bats}</div>
    </>
  )
}

export default bat