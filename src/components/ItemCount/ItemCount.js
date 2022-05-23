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
        // <div className="ia_itemCountContainer">
        //     <div className="ia_productHeaderContainer">
        //         <h2>Nombre del Producto</h2>
        //     </div>
        //     <div className="ia_productImageContainer">
        //         <p>Imagen del producto</p>
        //     </div>
            <div className="ia_productCountContainer">
                <div className="ia_counter">
                    <button onClick={decrement}>-</button>
                    <p>{count}</p>
                    <button onClick={increment}>+</button>
                </div>
                <button>Agregar Producto</button>
                <p>Cantidad disponible: <span>{props.inventario}</span></p>
            </div>
        // </div>
    );
}

export default ItemCount;