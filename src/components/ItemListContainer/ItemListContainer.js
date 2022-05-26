import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {useState, useEffect} from 'react';
import { obtenerProductos } from '../../asyncmock';

function ItemListContainer(){
    const [productos, almacenarProductos] = useState([]);

    useEffect(() => {
        obtenerProductos().then(res => {
            almacenarProductos(res);
        })
    })

    return (
        <div className='ia_itemListContainer'>
            <ItemList productos={productos}/>
        </div>
    );
}

export default ItemListContainer;