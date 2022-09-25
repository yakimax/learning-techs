import React,{useReducer} from 'react' ;


function reducer(state,action){
    switch(action.type){
        case "increment":
            return state + 1 ;
        case "decrement":
            return state -1 ;
        default :
        console.log("wrong type") ;
    }
}


function Balls() {
    const [balls,dispatch] = useReducer(reducer,0) ;
    // let increment = ()=>{
    //     setBalls(balls + 1) ;
    // }
    // let decrement = ()=>{
    //     setBalls(balls - 1) ;
    // }

  return (
    <>
        <div>Balls</div>
        <div>No fo Balls: {balls} </div>
        <button onClick={dispatch ({type : "increment"})}>+</button>
        <button onClick={dispatch ({type : "decrement"})}>-</button>
    </>
  )
}

export default Balls