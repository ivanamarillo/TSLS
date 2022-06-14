import './CartListContainer.css';
import {useContext} from 'react';
import CartContext from '../../context/CartContext';
import {Link} from 'react-router-dom';

function CartListContainer() {
    const {cart, limpiarCarrito, removerProducto} = useContext(CartContext);
    if(!cart.length){
        return (
            <div>
                <div>No hay productos en el carrito</div>
                <Link to='/'>Volver a productos</Link>
            </div>
        );
    }
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
                            <button onClick={() => removerProducto(producto.id)}>X</button>
                        </div>
                    )
                })}
                <h2>Total: {cart.map(producto => {
                    return (
                        producto.cantidad * producto.precio
                    )
                }).reduce((val1, val2) => val1 + val2)}</h2>
                <button>Generar Orden</button>
            </div>
        </div>
    );
}

export default CartListContainer;