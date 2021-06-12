import React from 'react';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MaterialIcon from "material-icons-react";
import { TextField } from '@material-ui/core';
import logo from "../../assets/logo.jpg";
import {Form,NavDropdown,Nav,Navbar} from "react-bootstrap";


const Menu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#"><img src={logo} alt="logo" widht ="75px" height="75px"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '200px' }}
                navbarScroll >
                
                <Form className="d-flex">
                    <TextField id="standard-basic" label="Search"></TextField>
                </Form>
                </Nav>
                <Nav style={{ maxHeight: '100px', maxWidth: "-150px" }}>
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Sobre</Nav.Link>
                    <Nav.Link href="#action2">Usuario</Nav.Link>
                    <Nav.Link href="#action1">Sair</Nav.Link>
                    <MaterialIcon icon="person" size={50}/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Menu;