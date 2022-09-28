import './App.css';
import Balls from './components/Balls';
import Bat from './components/Bat';
import {Provider} from 'react-redux'

function App() {
  return (
    <div>
      <Provider>
      <Balls/>
      <Bat/>
      </Provider>
    </div>
  );
}

export default App;
