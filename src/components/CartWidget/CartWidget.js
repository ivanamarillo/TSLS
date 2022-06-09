import './CartWidget.css';
import {Context} from '../../App';
import {useContext} from 'react';

function CartWidget(){
    const {getCantidadEnCarrito} = useContext(Context); 
    const cantidad = getCantidadEnCarrito();

    return (
        <div className="ia_cartWidgetContainer">
            <i className="fa-solid fa-cart-shopping"></i>
            <p>{cantidad}</p>
        </div>
    );
}

export default CartWidget;