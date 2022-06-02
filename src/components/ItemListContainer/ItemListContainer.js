import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {useState, useEffect} from 'react';
import { obtenerProductos, obtenerProductosPorCategoria } from '../../asyncmock';
import {useParams} from 'react-router-dom';

function ItemListContainer(){
    const [productos, almacenarProductos] = useState([]);
    const {categoryType} = useParams();

    useEffect(() => {
        if(!categoryType){
            obtenerProductos().then(res => {
                almacenarProductos(res);
            })
        }else{
            obtenerProductosPorCategoria(categoryType).then(res => {
                almacenarProductos(res);
            })
        }
    }, [categoryType])

    return (
        <div className='ia_itemListContainer'>
            <ItemList productos={productos}/>
        </div>
    );
}

export default ItemListContainer;