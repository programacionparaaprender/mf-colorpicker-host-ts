import { useState } from "react"
import React from 'react';
function Formulario() {
    const [formData, setFormData] = useState({nombre:'', apellido:''});
const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormData(prevState=>({
        ...prevState, [name]:value
    }))
  }
  const onSubmit = () => {
    console.log(`nombre: ${formData.nombre} - ${formData.apellido}`);
  }
  return (
    <form onSubmit={onSubmit}>
      <input onChange={changeText} value={formData.nombre} name="nombre" type="text" placeholder="Escribe tu nombre" />
      <input onChange={changeText} value={formData.apellido} name="apellido" type="text" placeholder="Escribe tu apellido" />
      <p>Nombre completo: {formData.nombre} - {formData.apellido}</p>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default Formulario
