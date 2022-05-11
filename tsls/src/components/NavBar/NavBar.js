import './NavBar.css';

const NavBar = _ => {
    return (
        <nav className=''>
            <h1>ECommerce</h1>
            <div className=''>
                <button>Celulares</button>
                <button>Tablets</button>
                <button>Notebook</button>
            </div>
        </nav>
    )
}

export default NavBar();