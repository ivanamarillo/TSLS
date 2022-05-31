import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useState, useEffect} from 'react';
import {traerProductoPorId} from '../../asyncmock';

function ItemDetailContainer(props){
    const [producto, traerProducto] = useState({});

    useEffect(() => {
        traerProductoPorId(props.id).then(res => {
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