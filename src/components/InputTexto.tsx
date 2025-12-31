import { useState } from "react"

function InputTexto() {
  const [texto, setTexto] = useState('');
  const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text:string = event.target.value;
    setTexto(text);
  }
  return (
    <div>
      <input value={texto} type="text" placeholder="Escribe algo" onChange={changeText} />
      <p>Has escrito: {texto}</p>
    </div>
  )
}

export default InputTexto
