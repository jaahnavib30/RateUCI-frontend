import './navbar.css'
import Nav from 'react-bootstrap/Nav'

function NavBar() {
    return (
        <Nav className='justify-content-center'>
            <Nav.Item>
                <Nav.Link eventKey='home'>Tab1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='page2'>Tab2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='page3'>Tab3</Nav.Link>
            </Nav.Item>
        </Nav>)
}

export default NavBar;