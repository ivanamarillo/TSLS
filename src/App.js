import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartListContainer from './components/CartListContainer/CartListContainer';
import {useState, createContext} from 'react';

export const Context = createContext();

function App() {
  const [cart, setCart] = useState([]);

  const agregarItem = (productoAAgregar) => {
    let incluido = isInCart(productoAAgregar.id);
    
    if(!incluido){
      setCart([...cart, productoAAgregar]);
    }
  };

  const isInCart = (id) => {
    for(const producto of cart){
      if(producto.id === id){
        return true;
      }
    }
    return false;
  }

  const getCantidadEnCarrito = () => {
    let productosTotales = 0;
    cart.forEach(producto => {
      productosTotales += producto.cantidad;
    })
    return productosTotales;
  };

  console.log(cart);
  return (
    <div>
      <Context.Provider value={{cart, agregarItem, getCantidadEnCarrito}}>
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
      </Context.Provider>
    </div>
  );
}

export default App;
