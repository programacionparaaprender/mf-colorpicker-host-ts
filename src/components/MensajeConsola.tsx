import { useEffect, useState, type ReactElement } from "react"
import React from 'react';
function MensajeConsola() {
    
  const [mensaje, setMensaje] = useState('');
      let texto:ReactElement = <p>No hay mensaje aun</p>
      if(mensaje){
          texto = <div><p>Tu mensaje es: {mensaje}</p><button type="button" onClick={()=>{alert(`Mensaje Enviado. Mensaje:${mensaje}`)}}>Enviar</button></div>
      }
      useEffect(()=>{
        console.log('el mensaje se ha modificado.')
    },[mensaje]);
      return (
      <div>
        <input onChange={(e)=>setMensaje(e.target.value)} value={mensaje} type="text" placeholder="escribe un mensaje" />
          {texto}
      </div>
    )
}

export default MensajeConsola
