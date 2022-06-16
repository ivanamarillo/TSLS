import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getDoc, doc} from 'firebase/firestore';
import {db} from '../../services/firebase';
// import {traerProductoPorId} from '../../asyncmock';

function ItemDetailContainer(props){
    const [producto, traerProducto] = useState({});
    const {productId} = useParams();

    useEffect(() => {
        getDoc(doc(db, 'productos', productId))
        .then(res => {
            const producto = {id:res.id, ...res.data()};
            traerProducto(producto);
        })
        .catch(err => {
            console.log(err);
        })
        // Esto se reemplaza por Firebase
        // traerProductoPorId(Number(productId)).then(res => {
        //     traerProducto(res);
        // })
    }, [productId])
    return(
        <div className="ia_itemDetailContainer">
            {/* {producto.descripcion} */}
            <ItemDetail producto={producto}/>
        </div>
    );
}

export default ItemDetailContainer;