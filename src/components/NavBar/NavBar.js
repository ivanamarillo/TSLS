import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = _ => {
    return (
        <nav className=''>
            <div className='ia_logo'>
                <img src='./images/logo.png'/>
                <h1>TSLS</h1>
            </div>
            <div class='ia_navMenu'>
                <li>Inicio</li>
                <li>Colecciones</li>
                <li>Blog</li>
                <li>Contacto</li>
                {/* <li>Carrito</li> */}
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;