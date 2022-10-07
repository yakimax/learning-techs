import './App.css' ;
import Balls from './components/Balls' ;
import Bat from './components/Bat' ;
import {Provider} from 'react-redux' ;
import { store } from './store' ;

function App() {
  return (
    <div>
      <Provider store={store}>
        <Balls/> 
        <Bat/>
      </Provider>
    </div>
  );
}

export default App ;
