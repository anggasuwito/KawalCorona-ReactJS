import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function NavigationBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Link to={"/"}>
                    <Navbar.Brand>
                        <img
                            className="d-block w-100"
                            src="https://avante.io/blog/assets/covid19_response_icon.svg"
                            height="50"
                            alt=""
                        /></Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to={"/"}><button className="btn navbar-btn" >Home</button></Link>
                        <Link to={"/global"}><button className="btn navbar-btn" >Global</button></Link>
                        <Link to={"/indonesia"}><button className="btn navbar-btn" >Indonesia</button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
