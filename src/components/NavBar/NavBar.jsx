import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CardWidget/CardWidget";

const opcionesMenu = ["Menu", "Productos", "Promos", "Haz tu Pedido"];

function NavBar() {
    return (
        <Navbar className="navBar" expand="lg">
            <Container>
                <Navbar.Brand className="titulo" href="#home">Pizzeria Il Mondo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {opcionesMenu.map((opciones, index) => {
                            return <Nav.Link href="#link" className="opcionesMenu" key={index}>{opciones}</Nav.Link>
                        })}
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    );
}

export default NavBar;