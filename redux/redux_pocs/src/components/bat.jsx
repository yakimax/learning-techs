import React ,{useReducer} from 'react'

let initialState = {
    bat : 10,
    value : ""
}

function reducer(state,action){
    switch(action.type){
        case 'buy-bat' :
            return {
                bat : state.bat + Number(state.value),
                value : "" 
            }
        case 'sell-bat' :
            return {
                bat : state.bat - (state.value) ,
                value : ""
             }
        case 'set_value' :
            return {
                bat : state.bat ,
                value : action.payload
            }
        default : 
            console.log('aalu') ;
    }
}

function Bat() {

    const [ state , dispatch ] = useReducer( reducer , initialState ) ;

  return (
    <>
        <div>Bat</div>
        <div>No of bats : {state.bat}</div>
        <input type = 'text' value = {state.value} onChange={ (e) => {
            let val = e.target.value ;
            dispatch({
                type: "set_value",
                payload: val
            })}
        }/>
        <button onClick={()=>{dispatch({type : 'sell-bat'})}}>Sell</button>
        <button onClick={()=>{dispatch({type : 'buy-bat'})}}>Buy</button>
    </>
  )
}

export default Bat