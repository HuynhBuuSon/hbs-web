import React from 'react'
import { Nav } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <Nav className="site-header sticky-top py-1">
                <div class="container d-flex flex-column flex-md-row justify-content-between">
                <Nav.Item>
                    <Nav.Link href="/home">Menu 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">Menu 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">Menu 3</Nav.Link>
                </Nav.Item>
                </div>
            </Nav>
        )
    }
}

export default Header