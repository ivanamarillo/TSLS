import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {Context} from '../../App';

function ItemDetail(props){
    const [cantidad, setCantidad] = useState(0);
    const {agregarItem} = useContext(Context);

    const handleOnAdd = (cantidad) => {
        console.log('Agregado');
        setCantidad(cantidad);
        agregarItem({id:props.producto.id, nombre:props.producto.nombre, precio:props.producto.precio, cantidad});
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