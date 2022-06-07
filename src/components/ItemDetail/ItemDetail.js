import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function ItemDetail(props){
    const [cantidad, setCantidad] = useState(0);

    const handleOnAdd = (cantidad) => {
        console.log('Agregado');
        setCantidad(cantidad)
    }
    return(
        <div>
            <div className="ia_picAndPrice">
                <img src={props.producto.imagen}/>
                <p>$ {props.producto.precio}</p>
            </div>
            {cantidad > 0? <Link to='/cart'>Ir al Carrito</Link>:<ItemCount inventario={props.producto.inventario} agregar={handleOnAdd}/>}
            <p>{props.producto.descripcion}</p>
        </div>
    );
}

export default ItemDetail;