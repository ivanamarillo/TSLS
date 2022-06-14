import './CartWidget.css';
import CartContext from '../../context/CartContext';
import {useContext} from 'react';

function CartWidget(){
    const {getCantidadEnCarrito} = useContext(CartContext); 
    const cantidad = getCantidadEnCarrito();
    if(cantidad){
        return (
            <div className="ia_cartWidgetContainer">
                <i className="fa-solid fa-cart-shopping"></i>
                <p>{cantidad}</p>
            </div>
        );
    }

}

export default CartWidget;