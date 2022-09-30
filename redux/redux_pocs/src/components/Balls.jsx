import React from 'react' ;
import {connect} from 'react-redux'; 


function Balls(props) {
    console.log(props);
  return (
    <>
        <div>Balls</div>
        <div>No fo Balls: {props.balls} </div>
        <button onClick={props.buyball}>+</button>
        <button onClick={props.sellball}>-</button>
    </>
  )
}

const mapStateToProps = (store)=>{
    return store.Balls ;
}

const mapDispatchToProps = (dispatch)=>{
    return {
        buyball : ()=>{dispatch({type : 'increment'})},
        sellball : ()=>{dispatch({type : 'decrement'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Balls);