import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartListContainer from './components/CartListContainer/CartListContainer';
import {useState, createContext} from 'react';
import {CartContextProvider} from './context/CartContext'; 


function App() {

  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
        {/* <ItemListContainer/> */}
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
            <Route path='/category/:categoryType' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<CartListContainer/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
