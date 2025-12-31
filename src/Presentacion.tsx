import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Props from './components/Props';
import Contador from './components/Contador';
import Controles from './components/Controles';
import InputTexto from './components/InputTexto';
import Formulario from './components/Formulario';
import MensajeCondicional from './components/MensajeCondicional';
import Sesion from './components/Sesion';
import MensajeConsola from './components/MensajeConsola';
import ConsumoApi from './components/ConsumoApi';

const Presentacion: React.FC = () => {
  const { t } = useTranslation();
  
  const [nombre, setNombre] = useState('Luis');
  const [count, setCount] = useState(0)
  return (
    <div className="container mt-4">
      <div>
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
    </div>
  )
};

export default Presentacion;