import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CountFunction from './components/CountFunction/CountFunction';
import CountClass from './components/CountClass/CountClass';
import Button from './components/Button/Button';

function App() {
  return (
    <div>
      <NavBar/>
      <CountFunction color='blue'>
        Contador 2
        <Button label='BOTON1'/>
      </CountFunction>
      <CountFunction color='green'>
        Contador 1
        <Button label='BOTON2'/>
      </CountFunction>
      <CountClass color='red'/>
    </div>
  );
}

export default App;
