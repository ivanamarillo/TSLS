import {useState, createContext} from 'react';

const CartContext = createContext();

export function CartContextProvider({children}) {
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

    return (
        <CartContext.Provider value={{cart, agregarItem, getCantidadEnCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;