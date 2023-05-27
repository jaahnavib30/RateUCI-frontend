import './navbar.css'

function NavBar() {
    return (
        <nav className="navbar-container">
            <div className='tabs-container'>
                <a className='nav-link' href='./home'>tab 1</a>
                <a className='nav-link' href='./page-2'>tab 2</a>
                <a className='nav-link' href='./page-3'>tab 3</a>
            </div>
        </nav>)
}

export default NavBar;