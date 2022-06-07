import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function Item(props){
    // const [show, setShow] = useState(false);
    return (
        <div className="ia_item">
            <div className="ia_itemListHeaderContainer">
                <h2>{props.nombre}</h2>
            </div>
            <div className="ia_itemListImageContainer">
                <img src={props.imagen}/>
            </div>
            <div className="ia_itemListPriceContainer">
                <p>${props.precio}</p>
                <h2>{props.tipo}</h2>
            </div>
            {/* <ItemCount inventario={props.inventario}/> */}
            {/* <button onClick={() => setShow(!show)}>Más Detalles del Producto</button>
            {show ? <ItemDetailContainer {...props}/>: null} */}
            <Link className='ia_detailButton' to={`/detail/${props.id}`}>Más Detalles del producto</Link>
        </div>
    );
}

export default Item;