import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer(props){
    return (
        <div className='ia_itemListContainer'>
            {/* <h2>{props.greeting}</h2> */}
            <ItemCount inventario={20}/>
        </div>
    );
}

export default ItemListContainer;