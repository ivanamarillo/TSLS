import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {useState, useEffect} from 'react';
import {db} from '../../services/firebase';
import {useParams} from 'react-router-dom';
import {getDocs, collection, query, where} from 'firebase/firestore';
// import { obtenerProductos, obtenerProductosPorCategoria } from '../../asyncmock';

function ItemListContainer(){
    const [productos, almacenarProductos] = useState([]);
    const {categoryType} = useParams();

    useEffect(() => {
        // Esto ahora pide los datos a firebase
        const valorDeReferencia = categoryType ? query(collection(db, 'productos'), where('tipoGenre', 'array-contains', categoryType)) : collection(db, 'productos');

        getDocs(valorDeReferencia)
        .then(res => {
            const productos = res.docs.map(doc => {
                return {id:doc.id, ...doc.data()}
            });
            almacenarProductos(productos);
        })
        .catch(err => {
            console.log(err);
        })


        // Esto se reemplaza por Firebase
        // if(!categoryType){
        //     obtenerProductos().then(res => {
        //         almacenarProductos(res);
        //     })
        // }else{
        //     obtenerProductosPorCategoria(categoryType).then(res => {
        //         almacenarProductos(res);
        //     })
        // }
    }, [categoryType])

    return (
        <div className='ia_itemListContainer'>
            <ItemList productos={productos}/>
        </div>
    );
}

export default ItemListContainer;