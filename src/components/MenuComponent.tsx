import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap';
import { Link, Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom';
import './MenuComponent.css';
import ColorList from 'mf_colorlist/ColorList';
import ColorPicker from 'mf_colorpicker/ColorPicker';
import UserList from 'mf_crm_clients_ts/UserList';
import HomePage from 'mf_atomicdesign_ts/HomePage';
import MyGoogleMap from 'mf_googlemaps_ts/MyGoogleMap';
import Presentacion from '../Presentacion';
import useColors from 'mf_colorpicker/useColors';

// Tipo para el hook useColors (ajusta según la implementación real)
type UseColorsReturn = {
  color: string;
  colorListado: string[];
  handleChangeColor: (color: string) => void;
  handleSubmitSaveColor: () => void;
};

const MenuComponent: React.FC = () => {
    const { color, colorListado, handleChangeColor, handleSubmitSaveColor }: UseColorsReturn = useColors();
  
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const language = e.target.value;
    console.log(language);
    i18n.changeLanguage(language);
  };
 return (
    <BrowserRouter>
        <header>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <Navbar expand="lg" fixed="top" className='navbar navbar-expand-lg fixed-top navbar-dark bg-dark'>
                    <Container fluid>
                        {/* Logo */}
                        <Navbar.Brand as={Link} to="/">
                            <img 
                            src="./assets/images/principal.jpg" 
                            width="50" 
                            height="50" 
                            alt="Logo"
                            />
                        </Navbar.Brand>
                        
                        <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    
                        <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="me-auto mb-2 mb-lg-0">
                        
                        {/* Inicio */}
                        <Nav.Item>
                            <Nav.Link as={Link} to="/">{t('inicio')}</Nav.Link>
                        </Nav.Item>
                        {/* Presentación */}
                        <Nav.Item>
                            <Nav.Link as={Link} to="/presentacion">{t('presentacion')}</Nav.Link>
                        </Nav.Item>
                        {/* Google Maps */}
                        <Nav.Item>
                            <Nav.Link as={Link} to="/googlemaps">{t('googlemaps')}</Nav.Link>
                        </Nav.Item>
                        {/* Home Page */}
                        <Nav.Item>
                            <Nav.Link as={Link} to="/homepage">{t('homepage')}</Nav.Link>
                        </Nav.Item>
                        {/* User list */}
                        <Nav.Item>
                            <Nav.Link as={Link} to="/userlist">{t('userlist')}</Nav.Link>
                        </Nav.Item>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </header>
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
        </Routes>
    </BrowserRouter>
    
  );
};

export default MenuComponent;