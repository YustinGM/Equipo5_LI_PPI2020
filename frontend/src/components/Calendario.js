import React from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../styles.css";
import "../style/Calendario.css";

const Calendario = (props) => {
  const { history } = props;
  return (
    <div className="Calendario">
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
       <center><h2>Calendario de citas</h2></center>

      <div id="absoluto">
        <form>          
          <div class="nativeDatePicker">
            <label for="bday">Selecciona tu fecha y hora de cita a agendar:</label>
             <center>
             <input type="datetime-local" name="fecha Hora"/>
            </center>
            <img className="foto"  src="./Imagenes-Ppi/Raster.jpg" alt="error" />
            <span class="validity"></span>
            
            <button
      id="Boton"
      class="btn btn-danger"
        type="submit"
        className="btn btn-primary"
        onClick={() => history.push("/Confirmacion")}
      >
        Siguiente
      </button>
      <center>
      <div class="Caja">
            <button
            id="Boton"
             class="btn btn-danger"
             type="submit"
             className="btn btn-primary"
             onClick={() => history.goBack()}
           >
             Atrás
            </button>
            
          </div>
          </center>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default withRouter(Calendario);