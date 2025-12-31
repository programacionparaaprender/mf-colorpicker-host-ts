import React from 'react';
import { useTranslation } from 'react-i18next';

const Presentacion: React.FC = () => {
  const { t } = useTranslation();
  
  const [nombre, setNombre] = useState('Luis');
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="container mt-4">
        <h1>{t('presentacion')}</h1>
        <p>Este es el componente de presentación</p>
      </div>
      <Props nombre={nombre} />
      <hr />
      <Contador count={count} />
      <hr />
      <Controles setCount={setCount} />
      <hr />
      <InputTexto />
      <hr />
      <Formulario />
      <hr />
      <MensajeCondicional />
      <hr />
      <Sesion />
      <hr />
      <MensajeConsola />
      <hr />
      <ConsumoApi />
    </>
  )
};

export default Presentacion;