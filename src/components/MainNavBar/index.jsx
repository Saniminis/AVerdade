import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './index.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const index = () => {
  return (
    <div>
    <Navbar
     expand="lg" 
     className={`${styles.MainNavBar} bg-body-tertiary`}
     
     data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">LOGIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/CadastroProdutos">Cadastro de Produtos</Nav.Link>           
          <Nav.Link href="/listaDeProdutos">Produtos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
export default index