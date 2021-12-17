import { RandomFactsRender} from '../src/pages/RandomFactsRender';
import { RandomFact } from './components/RandomFact';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Random Useless Facts</h1>
     <RandomFactsRender />
     <RandomFact />
    </div>
  );
}

export default App;
