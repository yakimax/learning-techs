import React from 'react' ;
import {connect} from 'react-redux'
import {store} from '../store'


function Bat(props) {
    console.log(props);
  return (
    <>
        <div>Bat</div>
        <div>No of bats : {props.bat}</div>
        <input type = 'text' value = {props.value} onChange={ (e) => {let val = e.target.value;
        props.setValue(val) }
        }/>
        <button onClick={props.sellBat}>Sell</button>
        <button onClick={props.buyBat}>Buy</button>
    </>
  )
}

const mapStateToProps = ( store )=>{
    return store.bat ;
}

const mapDispatchtoProps = (dispatch)=>{
    return {
        sellBat : ()=>{dispatch({type : 'sell-bat'})},
        buyBat : ()=>{dispatch({type : 'buy-bat'})},
        setValue : (val)=>{dispatch({
            type: "set_value",
            payload: val
        })}
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(Bat) ;