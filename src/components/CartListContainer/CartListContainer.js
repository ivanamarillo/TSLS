import './CartListContainer.css';
import {useContext} from 'react';
import CartContext from '../../context/CartContext';
import {Link} from 'react-router-dom';
import {addDoc, collection} from 'firebase/firestore';
import {db} from '../../services/firebase';

function CartListContainer() {
    const {cart, limpiarCarrito, removerProducto, obtenerTotal} = useContext(CartContext);

    const crearOrden = () => {
        const objOrder = {
            comprador:{
                //esto se reemplazará por el formulario
                nombre:'Ivan Amarillo',
                email:'ivan@mail.com',
                tel:'1234567',
                direccion:'Av siempre viva 745',
                comentarios:'por favor dejar en el primer piso'
            },
            items:cart,
            total:obtenerTotal()
        }
        console.log(objOrder);
        const collectionRef = collection(db, 'ordenes');
        addDoc(collectionRef, objOrder).then(({id}) => {
            console.log(`Se creó ${id}`);
        })
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
                <button onClick={() => crearOrden()}>Generar Orden</button>
            </div>
        </div>
    );
}

export default CartListContainer;