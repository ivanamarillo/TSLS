import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from 'react-router-dom';

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
                <NavLink to='/category/mujer' className={({isActive}) => isActive ? 'ia_active':'ia_notActive'}>Mujer</NavLink>
                <NavLink to='/category/hombre' className={({isActive}) => isActive ? 'ia_active':'ia_notActive'}>Hombre</NavLink>
                <NavLink to='/category/sport' className={({isActive}) => isActive ? 'ia_active':'ia_notActive'}>Sport</NavLink>
                <NavLink to='/category/casual' className={({isActive}) => isActive ? 'ia_active':'ia_notActive'}>Casual</NavLink>
                <NavLink to='/cart' className={({isActive}) => isActive ? 'ia_active':'ia_notActive'}><CartWidget/></NavLink>
            </div>
        </nav>
    )
}

export default NavBar;