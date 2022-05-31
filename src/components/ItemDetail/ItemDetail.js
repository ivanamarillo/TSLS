import './ItemDetail.css';

function ItemDetail(props){
    return(
        <div>
            <div className="ia_picAndPrice">
                <img src={props.producto.imagen}/>
                <p>$ {props.producto.precio}</p>
            </div>
            <p>{props.producto.descripcion}</p>
        </div>
    );
}

export default ItemDetail;