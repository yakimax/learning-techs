import React from 'react'
import { useReducer } from 'react';

let initialState = {
    value : "",
    bat : 10
}

function reducer(state = initialState,action){
    switch(action.type){
        case 'buy-bat' :
            return {
                bat : state.bat + state.value ,
                value : "" 
            }
        case 'sell-bat' :
            return {
                bat : state.bat - state.value ,
                value : ""
             }
        case 'set_value' :
            return {
                ...state.bat ,
                value : action.payload
            }
    }
}

function bat() {

    const [ state , dispatch ] = useReducer( reducer , initialState ) ;

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