import React from "react";

import { Link, whitRouter } from "react-router-dom";

const Menu = (props) => {
  const { history } = props;
  return (
    <div className="Menu">
      <img className="Logo" src="./Imagenes-Ppi/Logo.jpg" alt="00" />
      <h1 align="center">Belleza sin límite</h1>
      <button
      id="Boton"
      class="btn btn-danger"
        type="submit"
        className="btn btn-primary"
        onClick={() => history.push("/Registrarse")}
      >
        Inicio
      </button>
      
    </div>
  );
};
export default Menu;
