import React from "react";

import Menu from "../component/Menu";
import Header from "../component/Header";
import Cards from "../component/Cards";
import Footer from "../component/Footer";
import Inicio from "../component/Inicio";
import Registrarse from "../component/Registrarse";
import Login from "../component/Login";
import Calendario from "../component/Calendario";
import Confirmacion from "../component/Confirmacion";


import { BrowserRouter, Route } from "react-router-dom";

export default function Ppicontainer() {
  
  return (
    
    <BrowserRouter>
      <Route path="/" exact component={Menu} />
      <Route path="/Inicio" exact component={Inicio} />
      <Route path="/Cards" exact component={Cards} />
      <Route path="/Header" exact component={Header} />
      <Route path="/Footer" exact component={Footer} />
      <Route path="/Registrarse" exact component={Registrarse} />
      <Route path="/Login" exact component={Login} />
      <Route path="/Calendario" exact component={Calendario} />

      <Route path="/Confirmacion" exact component={Confirmacion} />

    </BrowserRouter>
  );
}