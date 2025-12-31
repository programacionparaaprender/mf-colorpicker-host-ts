import React from 'react';
import { useState, type ReactElement } from "react";
import Logout from "./Logout";
import Login from "./Login";

function Sesion() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let elementLogin:ReactElement = <p>No hay mensaje aun</p>
    if(isLoggedIn){
        elementLogin=<div><Logout /><button type="button" onClick={()=>setIsLoggedIn(!isLoggedIn)}>Cerrar Sessión</button></div>
    }else {
        elementLogin=<div><Login /><button type="button" onClick={()=>setIsLoggedIn(!isLoggedIn)}>Iniciar Sessión</button></div>
    }
    return (
    <div>
      {elementLogin}
    </div>
  )
}

export default Sesion
