import './Item.css';
import ItemCount from '../ItemCount/ItemCount';

function Item(props){
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
            <ItemCount inventario={props.inventario}/>
            <button>Más Detalles del Producto</button>
        </div>
    );
}

export default Item;