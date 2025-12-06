import React from 'react';
import { useTranslation } from 'react-i18next';

const Presentacion: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mt-4">
      <h1>{t('presentacion')}</h1>
      <p>Este es el componente de presentación</p>
    </div>
  );
};

export default Presentacion;