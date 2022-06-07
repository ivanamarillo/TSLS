import './ItemCount.css'
import {useState} from 'react';

function ItemCount(props){
    const [count, setCount] = useState(0);

    const decrement = () => {
        if(count != 0)
        setCount(count - 1);
    }

    const increment = () => {
        if(count < props.inventario)
        setCount(count + 1);
    }
    return (
            <div className="ia_productCountContainer">
                <div className="ia_counter">
                    <button onClick={decrement}>-</button>
                    <p>{count}</p>
                    <button onClick={increment}>+</button>
                </div>
                <button onClick={() => props.agregar(count)}>Agregar Producto</button>
                <p>Cantidad disponible: <span>{props.inventario}</span></p>
            </div>
    );
}

export default ItemCount;