import React from "react";
import "../styles.css";
import "../style/Cards.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { withRouter } from 'react-router-dom';


import { Card, Button } from "react-bootstrap";
import { Data } from "../Data.json";

const Cards = (props) => {
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
      
    <div className="card-deck text-center mb-3  ">

      {Data.map((item, index) => {
        return (
          <Card
            key={`item-Data-${index}`}
            border="info"
            style={{ width: "18rem" }}
          >
            <Card.Img
              variant="top"
              src={item.imagen}
              style={{ width: "100%", height: "180px" }}
            />
            <Card.Body>
              <Card.Title>{item.CardTitle}</Card.Title>
              <Card.Text>{item.Parrafo}</Card.Text>
              <Button variant="primary">{item.Boton}</Button>
              
            </Card.Body>
          </Card>
        );
      })}
      <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
          onClick={() => history.push("/Calendario")}
        >
          Entar
        </button>
      <button
          type="submit"
          className="btn btn-danger"
          onClick={() => history.goBack()}
        >
          Atras
        </button>
    </div>
    </div>
  );
};
export default withRouter(Cards);