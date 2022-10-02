import {combineReducers, createStore} from 'redux' ;
import {ballReducer} from './redux/ballReducer' ;
import {batReducer} from './redux/batReducer' ;

const rootReducer = combineReducers({
    bat : batReducer ,
    ball : ballReducer,
});
export const store  = createStore(rootReducer) ;