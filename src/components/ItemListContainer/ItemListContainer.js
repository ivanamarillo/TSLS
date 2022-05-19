import './ItemListContainer.css';

function ItemListContainer(props){
    return (
        <div className='ia_itemListContainer'>
            <h2>{props.greeting}</h2>
        </div>
    );
}

export default ItemListContainer;