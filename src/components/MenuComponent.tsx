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
import { contactosjs, cursosjs, proyectos_realizados_luis } from '../app.state';

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

  const handleSearch = () => {
    
  }
 return (
    <BrowserRouter>
        <header>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <Navbar expand="lg" fixed="top" className='navbar navbar-expand-lg fixed-top navbar-dark bg-dark'>
                    <Container fluid>
                        {/* Logo */}
                        <Navbar.Brand as={Link} to="/">
                            <img 
                            src="./favicon.ico" 
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
                    {/* Dropdown Cursos */}
                    <NavDropdown title="Cursos" id="cursos-dropdown">
                        {cursosjs.map((casa) => (
                        <NavDropdown.Item 
                            key={casa.nombre}
                            as={Link}
                            to={casa.href}
                            target={casa.target}
                        >
                            {casa.nombre}
                        </NavDropdown.Item>
                        ))}
                    </NavDropdown>
                
                        {/* Dropdown Proyectos */}
                        <NavDropdown title="Proyectos" id="proyectos-dropdown">
                            {proyectos_realizados_luis.map((casa) => (
                            <NavDropdown.Item 
                                key={casa.id}
                                as={Link}
                                to={casa.href}
                                target="_blank"
                            >
                                {casa.nombre}
                            </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                            {/* Dropdown Contactos */}
                        <NavDropdown title="Contactos" id="contactos-dropdown">
                            {contactosjs.map((casa) => (
                            <NavDropdown.Item 
                                key={casa.id}
                                as={Link}
                                to={casa.href}
                            >
                                {casa.nombre} - {casa.titulo}
                            </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        {/* Acerca de */}
                        <Nav.Item>
                            <Nav.Link as={Link} to="/contacto">Acerca de</Nav.Link>
                        </Nav.Item>
                        </Nav>
                        {/* Buscador */}
                        <Form className="d-flex fst-italic me-3" onSubmit={handleSearch}>
                            <Form.Control
                                type="search"
                                placeholder="Buscar"
                                className="me-2 fst-italic"
                                aria-label="Search"
                            />
                            <Button 
                                variant="outline-secondary" 
                                className="fst-italic" 
                                type="submit"
                            >
                                Buscar
                            </Button>
                        </Form>
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