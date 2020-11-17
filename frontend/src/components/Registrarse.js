import React from "react";
import "../styles.css";
import { withRouter } from "react-router-dom";

const Registrarse = (props) => {
  const { history } = props;

  return (
    <div className="Registrarse">
      <form method="POST"  D />
      <input
        type="hidden"
        name="_token"
        value="iaFjADDX95jl9o5f6qksyf2a71cpnG1tSIQf3iSK"
      />
      <input
        type="hidden"
        name="emailAuthorization"
        value="no"
        id="emailAuthorizationHidden"
      />
      <center>
        <h1> Bienvenido </h1>
      
      <h5>Registro de usuarios</h5>
      </center>


      <div class="boxContent"/>
            <slot name="top"></slot>
      <div className="Form-field" />
      <label for="user">Usuario</label>
      <input id="user" type="text" name="user" class="form-control"/>
      
      <div className="Form-field" />
      <label for="name">Nombres Y Apellidos</label>
      <input id="name" type="text" name="name" class="form-control"/>
      
      <div className="Form-field" />
      <label for="email">Email</label>
      <input id="email" type="text" name="email" class="form-control"/>
      
      <div className="Form-field" />
      <label for="password">Contraseña</label>
      <input id="password" type="password" name="password" class="form-control"/>

      <div className="Form-field" />
      <label for="password">Repite la contraseña</label>
      <input id="password-confirm" type="password" name="password-confirm" class="form-control"/>
      
      <slot></slot>
          
      <input
        class="btn btn-lg btn-primary btn-block"
        type="submit"
        value="Iniciar sesión"
        onClick={() => history.push("/Login")}
      />
      <input
      class="btn btn-lg btn-success btn-block"
      type="submit"
      value="Registrarse"
      onClick={() => history.push("/")}
    />
    <a href="/">¿Olvidaste tu contraseña?</a>
      </div>    
  );
};
export default withRouter(Registrarse);
