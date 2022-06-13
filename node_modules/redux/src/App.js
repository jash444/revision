
import './App.css';
import Counter from './store/components/Counter';
import {Todos} from './store/components/Todos';



function App() {

  return (
    <div className="App">
      <Counter></Counter>
  <Todos ></Todos>
    </div>
  );
}

export default App;
