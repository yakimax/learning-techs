import React from 'react' ;
import {connect} from 'react-redux'

function Bat(props) {
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
    return store.Bat ;
}

const mapDispatchToProps = (dispatch)=>{
    return {
        sellBat : ()=>{dispatch({type : 'sell-bat'})},
        buyBat : ()=>{dispatch({type : 'buy-bat'})},
        setValue : (val)=>{dispatch({
            type: "set_value",
            payload: val
        })}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bat);