import './Form.css';

function Form({infoOrden, obtenerInfoOrden, crearOrden}) {
    return (
        <div className='ia_formulario'>
            <label>Nombre:</label>
            <input type='text' name='nombre' onChange={(e) => obtenerInfoOrden({...infoOrden, nombre:e.target.value})}></input>
            <label>Email:</label>
            <input type='email' name='email' onChange={(e) => obtenerInfoOrden({...infoOrden, email:e.target.value})}></input>
            <label>Telefono:</label>
            <input type='text' name='telefono' onChange={(e) => obtenerInfoOrden({...infoOrden, telefono:e.target.value})}></input>
            <label>Direccion:</label>
            <input type='text' name='direccion' onChange={(e) => obtenerInfoOrden({...infoOrden, direccion:e.target.value})}></input>
            <div>
                <button onClick={() => crearOrden()}>Generar Orden</button>
            </div>
        </div>
    );
}

export default Form;