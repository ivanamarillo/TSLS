import './CartListContainer.css';
import {useContext} from 'react';
import CartContext from '../../context/CartContext';

function CartListContainer() {
    const {cart, limpiarCarrito} = useContext(CartContext);
    return (
        <div>
            <h1>Carrito de Compras</h1>
            <div>
                <button onClick={() => limpiarCarrito()}>Limpiar Carrito</button>
                {cart.map(producto => {
                    return(
                        <div className="ia_productoEnCarrito">
                            <div key={producto.id}>{producto.nombre}</div>
                            <div>Q: {producto.cantidad}</div>
                            <div>$: {producto.precio}</div>
                            <div>Total: {(producto.cantidad * producto.precio)}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default CartListContainer;