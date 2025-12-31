import { useState, type ReactElement } from "react"

function MensajeCondicional() {
    const [mensaje, setMensaje] = useState('');
    let texto:ReactElement = <p>No hay mensaje aun</p>
    if(mensaje){
        texto = <div><p>Tu mensaje es: {mensaje}</p><button type="button" onClick={()=>{alert(`Mensaje Enviado. Mensaje:${mensaje}`)}}>Enviar</button></div>
    }
    return (
    <div>
      <input onChange={(e)=>setMensaje(e.target.value)} value={mensaje} type="text" placeholder="escribe un mensaje" />
        {texto}
    </div>
  )
}

export default MensajeCondicional
