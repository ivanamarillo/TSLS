import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

const NavBar = _ => {
    return (
        <nav className=''>
            <Link to='/'>
                <div className='ia_logo'>
                    <img src='./images/logo.png'/>
                    <h1>TSLS</h1>
                </div>
            </Link>
            <div className='ia_navMenu'>
                <Link to='/category/mujer'>Mujer</Link>
                <Link to='/category/hombre'>Hombre</Link>
                <Link to='/category/sport'>Sport</Link>
                <Link to='/category/casual'>Casual</Link>
                <Link to='/carrito'><CartWidget/></Link>
            </div>
        </nav>
    )
}

export default NavBar;