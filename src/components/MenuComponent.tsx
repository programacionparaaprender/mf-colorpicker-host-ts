import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './MenuComponent.css';
import useColors from 'mf_colorpicker/useColors';
import { contactosjs, cursosjs, proyectos_realizados_luis } from '../app.state';

// ... (definiciones de tipos)

/*
<NavDropdown
  title="Cursos"
  id="cursos-dropdown"
  menuVariant={temaSeleccionado === 'tema-oscuro' ? 'dark' : 'light'}
>
*/

const MenuComponent2: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [expanded, setExpanded] = useState(false);
    const [temaSeleccionado, setTemaSeleccionado] = useState<string>('tema-oscuro');
    const [langs] = useState<string[]>(['es', 'en']);
    const [temas] = useState([
        { valor: 'tema-claro', etiqueta: 'Tema Claro' },
        { valor: 'tema-oscuro', etiqueta: 'Tema Oscuro' }
    ]);

    useEffect(() => {
        const temaGuardado = localStorage.getItem('tema');
        if (temaGuardado) {
            setTemaSeleccionado(temaGuardado);
            aplicarTema(temaGuardado);
        } else {
            aplicarTema('tema-oscuro');
        }
        
        i18n.changeLanguage('es');
    }, [i18n]);

    const aplicarTema = (tema: string) => {
        document.body.classList.remove('tema-claro', 'tema-oscuro');
        document.body.classList.add(tema);
    };

    const cambiarTema = (tema: string) => {
        setTemaSeleccionado(tema);
        aplicarTema(tema);
        localStorage.setItem('tema', tema);
    };

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const language = e.target.value;
        i18n.changeLanguage(language);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Buscando...');
    };

    const getNavbarClasses = () => {
        const baseClass = 'navbar navbar-expand-lg fixed-top';
        if (temaSeleccionado === 'tema-oscuro') {
            return `${baseClass} navbar-light bg-light`;
        } else {
            return `${baseClass} navbar-dark bg-dark`;
        }
    };

    return (
        <header className="container-fluid" style={{ fontStyle: 'italic' }}>
            <Navbar 
                expand="lg" 
                fixed="top" 
                expanded={expanded}
                onToggle={(expanded: boolean) => setExpanded(expanded)}
                className={getNavbarClasses()}
            >
                <Container fluid>
                    {/* Logo */}
                    <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
                        <img 
                            src="https://reactjs.org/logo-og.png" 
                            width="50" 
                            height="50" 
                            alt="Logo"
                            style={{ borderRadius: '5px' }}
                        />
                    </Navbar.Brand>
                    
                    <Navbar.Toggle 
                        aria-controls="navbarSupportedContent" 
                        onClick={() => setExpanded(!expanded)}
                    />

                    
                    
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


                        {/* Dropdown Proyectos */}
                        <NavDropdown title="Proyectos" id="proyectos-dropdown"
                            menuVariant={temaSeleccionado === 'tema-oscuro' ? 'dark' : 'light'}>
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


                        <li className="nav-item dropdown">
                            <a 
                            className="nav-link dropdown-toggle"
                            href="#" 
                            role="button" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false">
                            Proyectos
                            </a>

                            <div className={temaSeleccionado == 'tema-oscuro'?'dropdown-menu dropdown-menu-dark':'dropdown-menu dropdown-menu-light'}>
                            {proyectos_realizados_luis.map((casa) => (
                                <a className="dropdown-item"
                                    target="_blank"
                                    href={casa.href}>
                                    {casa.nombre}
                                </a>
                            ))}
                            </div>
                        </li>


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
                        
                        {/* Selector de Idioma */}
                        <div className="d-flex align-items-center">
                            <select 
                                className="form-select form-select-sm bg-dark text-white border-secondary"
                                onChange={handleLanguageChange}
                                style={{ width: '120px' }}
                                defaultValue="es"
                            >
                                {langs.map((lang) => (
                                    <option key={lang} value={lang}>
                                        {lang.toUpperCase()}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        {/* Selector de Tema */}
                        <div className="d-flex align-items-center ms-3">
                            <select 
                                className="form-select form-select-sm bg-dark text-white border-secondary"
                                value={temaSeleccionado}
                                onChange={(e) => cambiarTema(e.target.value)}
                                style={{ width: '120px' }}
                            >
                                {temas.map((tema) => (
                                    <option key={tema.valor} value={tema.valor}>
                                        {tema.etiqueta}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

const MenuComponent: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [expanded, setExpanded] = useState(false);
    const [temaSeleccionado, setTemaSeleccionado] = useState<string>('tema-oscuro');
    const [langs] = useState<string[]>(['es', 'en']);
    const [temas] = useState([
        { valor: 'tema-claro', etiqueta: 'Tema Claro' },
        { valor: 'tema-oscuro', etiqueta: 'Tema Oscuro' }
    ]);

    useEffect(() => {
        const temaGuardado = localStorage.getItem('tema');
        if (temaGuardado) {
            setTemaSeleccionado(temaGuardado);
            aplicarTema(temaGuardado);
        } else {
            aplicarTema('tema-oscuro');
        }
        
        i18n.changeLanguage('es');
    }, [i18n]);

    const aplicarTema = (tema: string) => {
        document.body.classList.remove('tema-claro', 'tema-oscuro');
        document.body.classList.add(tema);
    };

    const cambiarTema = (tema: string) => {
        setTemaSeleccionado(tema);
        aplicarTema(tema);
        localStorage.setItem('tema', tema);
    };

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const language = e.target.value;
        i18n.changeLanguage(language);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Buscando...');
    };

    const getNavbarClasses = () => {
        const baseClass = 'navbar navbar-expand-lg fixed-top';
        if (temaSeleccionado === 'tema-oscuro') {
            return `${baseClass} navbar-light bg-light`;
        } else {
            return `${baseClass} navbar-dark bg-dark`;
        }
    };

    return (
        <header class="container-fluid" style="font-style: italic;">
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="https://reactjs.org/logo-og.png" width="50" height="50" alt="" />
                    </a>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    t('inicio)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default MenuComponent;