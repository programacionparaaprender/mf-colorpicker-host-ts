import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './MenuComponent.css';
import useColors from 'mf_colorpicker/useColors';
import { contactosjs, cursosjs, proyectos_realizados_luis } from '../app.state';

const MenuComponent: React.FC = () => {
    const { t, i18n } = useTranslation();
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

    // Función para inicializar dropdowns de Bootstrap 5
    useEffect(() => {
        // Inicializar todos los dropdowns de Bootstrap 5
        const dropdowns = document.querySelectorAll('.dropdown-toggle');
        dropdowns.forEach(dropdown => {
            // Inicializar con JavaScript de Bootstrap 5 si está disponible
            if ((window as any).bootstrap) {
                new (window as any).bootstrap.Dropdown(dropdown);
            }
        });
    }, []);

    return (
        <header className="container-fluid" style={{ fontStyle: 'italic' }}>
            <nav className={`navbar navbar-expand-lg fixed-top ${temaSeleccionado === 'tema-oscuro' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="https://reactjs.org/logo-og.png" width="50" height="50" alt="Logo" />
                    </a>
                    
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    {t('inicio')}
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/presentacion">
                                    {t('presentacion')}
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/googlemaps">
                                    {t('googlemaps')}
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/homepage">
                                    {t('homepage')}
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/userlist">
                                    {t('userlist')}
                                </Link>
                            </li>

                            {/* Dropdown Cursos con Bootstrap 5 vanilla */}
                            <li className="nav-item dropdown">
                                <a 
                                    className="nav-link dropdown-toggle"
                                    href="#" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                >
                                    Cursos
                                </a>
                                <ul className={`dropdown-menu ${temaSeleccionado === 'tema-oscuro' ? 'dropdown-menu-dark' : ''}`}>
                                    {cursosjs.map((curso) => (
                                        <li key={curso.id}>
                                            <a 
                                                className="dropdown-item"
                                                href={curso.href}
                                                target={curso.target}
                                            >
                                                {curso.nombre}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            {/* Dropdown Proyectos con Bootstrap 5 vanilla */}
                            <li className="nav-item dropdown">
                                <a 
                                    className="nav-link dropdown-toggle"
                                    href="#" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                >
                                    Proyectos
                                </a>
                                <ul className={`dropdown-menu ${temaSeleccionado === 'tema-oscuro' ? 'dropdown-menu-dark' : ''}`}>
                                    {proyectos_realizados_luis.map((proyecto) => (
                                        <li key={proyecto.id}>
                                            <a 
                                                className="dropdown-item"
                                                href={proyecto.href}
                                                target="_blank"
                                            >
                                                {proyecto.nombre}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                        
                        {/* Buscador */}
                        <form className="d-flex fst-italic me-3" onSubmit={handleSearch}>
                            <input
                                type="search"
                                placeholder="Buscar"
                                className="form-control me-2 fst-italic"
                                aria-label="Search"
                            />
                            <button 
                                className="btn btn-outline-secondary fst-italic" 
                                type="submit"
                            >
                                Buscar
                            </button>
                        </form>
                        
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
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default MenuComponent;