import {useContext} from 'react';
import {Context} from '../../App';

function CartListContainer() {
    const {cart} = useContext(Context);
    return (
        <div>
            <h1>Carrito de Compras</h1>
            <div>
                {cart.map(producto => <div key={producto.id}>{producto.nombre}</div>)}
            </div>
        </div>
    );
}

export default CartListContainer;