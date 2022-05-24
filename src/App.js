import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CountFunction from './components/CountFunction/CountFunction';
import CountClass from './components/CountClass/CountClass';
import MercadoLibre from './components/MercadoLibre/MercadoLibre';

function App() {
  return (
    <div>
      <NavBar/>
      <CountFunction color='blue'/>
      <CountClass color='red'/>
      <MercadoLibre/>
    </div>
  );
}

export default App;
