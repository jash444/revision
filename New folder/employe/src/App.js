import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Employe from './components/Employe';
import Compney from './components/Compney';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/employee" element={<Employe />} />
    <Route path="/company" element={<Compney/>} />
  </Routes>
 
 
    </div>
  );
}

export default App;
