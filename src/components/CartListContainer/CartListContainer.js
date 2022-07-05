import './CartListContainer.css';
import {useContext} from 'react';
import CartContext from '../../context/CartContext';
import {Link} from 'react-router-dom';
import {addDoc, collection} from 'firebase/firestore';
import {db} from '../../services/firebase';
import Form from '../Form/Form';
import {useState} from 'react';

function CartListContainer() {
    const {cart, limpiarCarrito, removerProducto, obtenerTotal} = useContext(CartContext);
    const [infoOrden, obtenerInfoOrden] = useState({
        nombre:'',
        email:'',
        tel:'',
        direccion:''
    })
    const crearOrden = () => {
        const objOrder = {...infoOrden, items:cart, total:obtenerTotal()};
        const collectionRef = collection(db, 'ordenes');
        addDoc(collectionRef, objOrder).then(({id}) => {
            alert(`Se creó orden número: ${id}`);
        })
        limpiarCarrito();
    };

    if(!cart.length){
        return (
            <div>
                <div>No hay productos en el carrito</div>
                <Link to='/'>Volver a productos</Link>
            </div>
        );
    }
    return (
        <div>
            <h1>Carrito de Compras</h1>
            <div>
                <button onClick={() => limpiarCarrito()}>Limpiar Carrito</button>
                {cart.map(producto => {
                    return(
                        <div className="ia_productoEnCarrito">
                            <div key={producto.id}>{producto.nombre}</div>
                            <div>Q: {producto.cantidad}</div>
                            <div>$: {producto.precio}</div>
                            <div>Total: {(producto.cantidad * producto.precio)}</div>
                            <button onClick={() => removerProducto(producto.id)}>X</button>
                        </div>
                    )
                })}
                <h2>Total: {obtenerTotal()}</h2>
                <Form infoOrden={infoOrden} obtenerInfoOrden={obtenerInfoOrden} crearOrden={crearOrden}/>
            </div>
        </div>
    );
}

export default CartListContainer;