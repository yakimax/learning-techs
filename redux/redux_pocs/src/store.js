import {createStore} from 'react-redux'
import {batReducer} from './components/Bat' ;

export let store  = createStore(batReducer);

