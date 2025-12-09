import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import { useTranslation } from 'react-i18next';

import ColorPicker from "mf_colorpicker/ColorPicker";
import ColorList from "mf_colorlist/ColorList";
import useColors from "mf_colorpicker/useColors";
import MyGoogleMap from "mf_googlemaps_ts/MyGoogleMap";
import Presentacion from "./Presentacion";
import i18n from './i18n';
// Ahora:
import { createRoot } from "react-dom/client";

// Definir tipos para los componentes externos (ajusta según sea necesario)
type ColorPickerProps = {
  color: string;
  colorListado: string[];
  handleChangeColor: (color: string) => void;
  handleSubmitSaveColor: () => void;
};

type ColorListProps = {
  lista: string[];
};

// Tipo para el hook useColors (ajusta según la implementación real)
type UseColorsReturn = {
  color: string;
  colorListado: string[];
  handleChangeColor: (color: string) => void;
  handleSubmitSaveColor: () => void;
};

// Componente principal con tipado
const App: React.FC = () => {
  const { color, colorListado, handleChangeColor, handleSubmitSaveColor }: UseColorsReturn = useColors();
  
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const language = e.target.value;
    console.log(language);
    i18n.changeLanguage(language);
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              {t('colorpicker')}
            </Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav"
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    {t('colorpicker')}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/presentacion">
                    {t("presentacion")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/googlemaps">
                    {t("googlemaps")}
                  </Link>
                </li>
              </ul>
             
              {/* Selector de idioma */}
              <div className="d-flex align-items-center ms-3">
                <select
                  className="form-select form-select-sm bg-dark text-white border-secondary"
                  style={{ width: "120px" }}
                  defaultValue={i18n.language}
                  onChange={handleLanguageChange}
                >
                  <option value="es">ESPAÑOL</option>
                  <option value="en">ENGLISH</option>
                </select>
              </div>
            </div>
          </div>
        </nav>
        
        <Routes>
          <Route
            path="/"
            element={
              <div className="container mt-4">
                <div className="row">
                  <div className="col-12 col-md-4 col-xl-4">
                    <ColorList lista={colorListado} />
                  </div>
                  <div className="col-12 col-md-4 col-xl-4">
                    <ColorPicker
                      color={color}
                      colorListado={colorListado}
                      handleChangeColor={handleChangeColor}
                      handleSubmitSaveColor={handleSubmitSaveColor}
                    />
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/presentacion" element={<Presentacion />} />
          <Route path="/googlemaps" element={<MyGoogleMap />} />
        </Routes>
      </div>
    </Router>
  );
};

// Componente wrapper con tipado
const AppWithProvider: React.FC = () => (
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);

// Usar createRoot en lugar de ReactDOM.render
const container = document.getElementById("app");

if (!container) {
  throw new Error("No se encontró el elemento con id 'app'");
}

const root = createRoot(container);
root.render(<AppWithProvider />);

