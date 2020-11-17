import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { withRouter } from "react-router-dom";
import "../style/Header.css";

const Header = (props) => {
  const { history } = props;
  return (
    <div className="Header">
      <Navbar bg="" expand="lg" className="">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Opciones" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Chat</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Contactos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cancelar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => history.push("/Inicio")}
                >
                  Cerrar sesiòn
                </button>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="Header">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block 0"
              src="../Imagenes-Ppi/ss2.jpg"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block "
              src="../Imagenes-Ppi/s3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block "
              src="../Imagenes-Ppi/s1.jpg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <body>
          <center>
            <div class="caja">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => history.push("/Cards")}
              >
                Selecionar
              </button>
            </div>
          </center>
        </body>
      </div>
    </div>
  );
};
export default withRouter(Header);
