import {combineReducers, createStore} from 'redux' ;
import {ballReducer} from './redux/ballReducer' ;
import {batReducer} from './redux/batReducer' ;

let rootReducer = combineReducers({
    bat : batReducer ,
    ball : ballReducer,
});

export let store  = createStore(rootReducer) ;