import React from 'react';
import styles from './CV.module.css';
import Link from 'next/link';

interface SocialLink {
    name: string;
    username: string;
    icon: string;
    href: string;
    iconClass: string;
}

const socialLinks: SocialLink[] = [
    {
        name: 'LinkedIn',
        username: '@michelle-moctezuma-isidro',
        icon: 'fab fa-linkedin-in',
        href: 'https://linkedin.com/in/michelle-moctezuma-isidro',
        iconClass: 'linkedin'
    },
    {
        name: 'GitHub',
        username: '@MysticMichelle',
        icon: 'fab fa-github',
        href: 'https://github.com/MysticMichelle',
        iconClass: 'github'
    },
    {
        name: 'Email',
        username: 'michellemoctezumais@gmail.com',
        icon: 'fas fa-envelope',
        href: 'mailto:michellemoctezumais@gmail.com',
        iconClass: 'email'
    }
];

export default function CV() {
    return (
        <section className={`${styles.cv} section`} id="cv">
            <div className="container">
                <div className={styles.cv__content}>
                    <div className={styles.cv__info}>
                        <span className={styles.section__subtitle}>Conoce mi trayectoria</span>
                        <h2 className={styles.section__title}>Mi Currículum</h2>
                        <p className={styles.cv__description}>
                            Descarga mi CV para conocer mi formación académica, habilidades 
                            técnicas y experiencia. También puedes conectar conmigo en mis 
                            redes profesionales.
                        </p>
                        
                        <div className={styles.cv__buttons}>
                            <a href="https://www.overleaf.com/gallery/tagged/cv" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles['btn--primary']} ${styles['btn--large']}`}>
                                <i className="fas fa-download"></i> Descargar CV
                            </a>
                            <a href="https://mysticmichelle.github.io/Lab05MichelleMoctezumaIsidro" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles['btn--secondary']} ${styles['btn--large']}`}>
                                <i className="fas fa-eye"></i> Ver CV Digital
                            </a>
                        </div>
                    </div>
                    
                    <div className={styles.cv__social}>
                        <h3 className={styles.cv__social_title}>Conectemos</h3>
                        <div className={styles.cv__social_links}>
                            {socialLinks.map((link, index) => (
                                <a 
                                    key={index}
                                    href={link.href} 
                                    target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                                    rel={link.href.startsWith('mailto') ? '' : 'noopener noreferrer'}
                                    className={styles.social__card}
                                >
                                    <div className={`${styles.social__icon} ${styles[`social__icon--${link.iconClass}`]}`}>
                                        <i className={link.icon}></i>
                                    </div>
                                    <div className={styles.social__info}>
                                        <span className={styles.social__name}>{link.name}</span>
                                        <span className={styles.social__user}>{link.username}</span>
                                    </div>
                                    <i className={`fas fa-arrow-right ${styles.social__arrow}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
