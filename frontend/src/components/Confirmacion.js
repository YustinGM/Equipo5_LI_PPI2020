import React from "react";
import "../styles.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const Confirmacion = (props) => {
  const { history } = props;
  return (
    <div className="Confirmacion">
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
      <div className="Calendario">
       <center><h2>Segur que deseas agendar tu cita para esta fecha y hora??</h2></center>

       <div id="absoluto">
       <div class="nativeDatePicker">
            
             
      <button
        type="checkbox"
        name="casilla"
        value="hola"
        className="btn btn-danger"
        onClick={() => history.goBack()}
      >
        Deseo cambiar hora y fecha
      </button>

      <div className="Confirmacion">
        <center>
          <input type="checkbox" name="ckeckbox" />
          Si, deseo para este dia y a esta hora
        </center>
        <center>
          <button>
            <img
             onClick={() => history.push("/")}
              src="./Imagenes-Ppi/enviar.png"
              alt="imagen"
              width="58"
              height="38"
            />
            Confirmar
          </button>
        </center>
      </div>
    </div>
    </div>
    </div>
    </div>
    
  );
};
export default withRouter(Confirmacion);
