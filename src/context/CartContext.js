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
    
    const limpiarCarrito = () => {
        setCart([]);
    }

    const removerProducto = (id) => {
        let myCart = [...cart];
        for(let i = 0; i < cart.length; i++){
            if(cart[i].id === id){
                myCart.splice(i, 1);
                setCart(myCart);
                break;
            }
        }
    }

    const getCantidadEnCarrito = () => {
        let productosTotales = 0;
        cart.forEach(producto => {
            productosTotales += producto.cantidad;
        })
        return productosTotales;
    };

    const obtenerTotal = () => {
        return cart.map(producto => {
            return producto.cantidad * producto.precio;
        }).reduce((val1, val2) => val1 + val2);
    };

    return (
        <CartContext.Provider value={{cart, agregarItem, getCantidadEnCarrito, limpiarCarrito, removerProducto, obtenerTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;