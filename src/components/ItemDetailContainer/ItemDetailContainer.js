import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useState, useEffect} from 'react';
import {traerProductoPorId} from '../../asyncmock';
import {useParams} from 'react-router-dom';

function ItemDetailContainer(){
    const [producto, traerProducto] = useState({});
    const {productId} = useParams();

    useEffect(() => {
        traerProductoPorId(Number(productId)).then(res => {
            traerProducto(res);
            console.log(producto);
        })
    }, [])
    return(
        <div className="ia_itemDetailContainer">
            {/* {producto.descripcion} */}
            <ItemDetail producto={producto}/>
        </div>
    );
}

export default ItemDetailContainer;