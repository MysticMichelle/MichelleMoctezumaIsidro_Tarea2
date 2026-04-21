import React from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className={`${styles.hero} section`} id="home">
            <div className={`${styles.hero__container} container`}>
                <div className={styles.hero__content}>
                    <span className={styles.hero__greeting}>¡Hola! 👋 Soy</span>
                    <h1 className={styles.hero__title}>Michelle Moctezuma Isidro</h1>
                    <h2 className={styles.hero__subtitle}>
                        <span className={styles.highlight}>Lic. Matemáticas Aplicadas y Computación</span> en Crecimiento
                    </h2>
                    <p className={styles.hero__description}>
                        Apasionada por entender cómo funcionan las cosas desde una perspectiva matemática y 
                        convertir ese entendimiento en soluciones prácticas mediante programación. 
                        Disfruto enfrentar problemas desafiantes y encontrar formas eficientes de resolverlos.
                    </p>
                    
                    <div className={styles.hero__buttons}>
                        <Link href="#projects" className={`${styles.btn} ${styles['btn--primary']}`}>
                            <i className="fas fa-rocket"></i> Ver mis proyectos
                        </Link>
                        <Link href="#contact" className={`${styles.btn} ${styles['btn--outline']}`}>
                            <i className="fas fa-envelope"></i> Contáctame
                        </Link>
                    </div>
                </div>
                
                <div className={styles.hero__image}>
                    <div className={styles.hero__blob}>
                        <div className={styles.hero__avatar}>
                            <i className="fas fa-user-astronaut"></i>
                        </div>
                    </div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--1']}`}></div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--2']}`}></div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--3']}`}></div>
                </div>
            </div>
            
            <div className={styles.hero__scroll}>
                <Link href="#interests" className={styles.hero__scroll_link}>
                    <span>Scroll</span>
                    <i className="fas fa-chevron-down"></i>
                </Link>
            </div>
        </section>
    );
}
