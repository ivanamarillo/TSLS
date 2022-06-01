import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
      {/* <ItemListContainer/> */}
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
