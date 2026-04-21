import React from 'react';
import styles from './Header.module.css';

let HeaderData: String = 'Michelle Moctezuma Isidro';

export default function Header() {

    return (
        <>
            <header className={styles.header} id="header">
                <nav className="nav container">
                    <a href="#home" className="nav__logo">
                        <span className="logo__bracket">&lt;</span>{HeaderData}<span className="logo__bracket">/&gt;</span>
                    </a>

                    {/* <!-- Checkbox para menú móvil (CSS only) --> */}
                    <input type="checkbox" id="nav-toggle" className="nav__checkbox"/> 
                        <label htmlFor="nav-toggle" className="nav__toggle">
                            <i className="fas fa-bars"></i>
                        </label>

                        <div className="nav__menu" id="nav-menu">
                            <label htmlFor="nav-toggle" className="nav__close">
                                <i className="fas fa-times"></i>
                            </label>

                            <ul className="nav__list">
                                <li className="nav__item">
                                    <label htmlFor="nav-toggle">
                                        <a href="#home" className="nav__link">Inicio</a>
                                    </label>
                                </li>
                                <li className="nav__item">
                                    <label htmlFor="nav-toggle">
                                        <a href="#interests" className="nav__link">Intereses</a>
                                    </label>
                                </li>
                                <li className="nav__item">
                                    <label htmlFor="nav-toggle">
                                        <a href="#cv" className="nav__link">CV</a>
                                    </label>
                                </li>
                                <li className="nav__item">
                                    <label htmlFor="nav-toggle">
                                        <a href="#projects" className="nav__link">Proyectos</a>
                                    </label>
                                </li>
                                <li className="nav__item">
                                    <label htmlFor="nav-toggle">
                                        <a href="#contact" className="nav__link">Contacto</a>
                                    </label>
                                </li>
                            </ul>
                        </div>
                </nav>
            </header>

        </>
    );

}