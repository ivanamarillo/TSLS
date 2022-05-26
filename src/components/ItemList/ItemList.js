import './ItemList.css'
import Item from "../Item/Item";

function ItemList(props){
    
    return (
        <div className="ia_itemList">
            {props.productos.map(producto => <Item key={producto.id} {...producto}/>)}
        </div>
    );
}

export default ItemList;