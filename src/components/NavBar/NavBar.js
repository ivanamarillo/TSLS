import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <div className='ia_navBarLogo'>
                <h1>TSLS</h1>
            </div>
            <div className='ia_navBarMenu'>
                <li>Hombre</li>
                <li>Mujer</li>
                <li>Casual</li>
                <li>Sport</li>
                <li>Carrito</li>
            </div>
        </nav>
    );
}

export default NavBar;