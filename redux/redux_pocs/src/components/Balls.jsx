import React,{useState} from 'react' ;

function Balls() {
    const [balls,setBalls] = useState(0) ;
    let increment = ()=>{
        setBalls(balls + 1) ;
    }
    let decrement = ()=>{
        setBalls(balls - 1) ;
    }

  return (
    <>
        <div>Balls</div>
        <div>No fo Balls: {balls} </div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </>
  )
}
export default Balls