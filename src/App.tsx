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
import HomePage from "mf_atomicdesign_ts/HomePage";

import UserList from "mf_crm_clients_ts/UserList";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import "jquery/dist/jquery.js";
//import "@popperjs/core/dist/umd/popper.min.js";
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

import MenuComponent from './components/MenuComponent';
import { cursosjs, proyectos_realizados_luis } from "./app.state";
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { color, colorListado, handleChangeColor, handleSubmitSaveColor }: UseColorsReturn = useColors();
  
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const language = e.target.value;
    console.log(language);
    i18n.changeLanguage(language);
  };
  return (
    <Router>
        <div className="App">
          <MenuComponent />
          <div className="main-content" style={{ paddingTop: '80px' }}>
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
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/userlist" element={<UserList />} />
              {/* ... otras rutas ... */}
            </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;
// Componente principal con tipado


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

