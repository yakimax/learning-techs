import './App.css';
import Balls from './components/Balls';
import Bat from './components/Bat';
import {provider} from 'redux'

function App() {
  return (
    <div>
      <provider>
      <Balls/>
      <Bat/>
      </provider>
    </div>
  );
}

export default App ;
