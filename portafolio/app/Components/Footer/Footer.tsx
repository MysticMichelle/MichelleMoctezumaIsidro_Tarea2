import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

interface SocialLink {
    icon: string;
    href: string;
    label: string;
}

const socialLinks: SocialLink[] = [
    {
        icon: 'fab fa-linkedin-in',
        href: 'https://linkedin.com/in/michelle-moctezuma-isidro',
        label: 'LinkedIn'
    },
    {
        icon: 'fab fa-github',
        href: 'https://github.com/MysticMichelle',
        label: 'GitHub'
    },
    {
        icon: 'fas fa-envelope',
        href: 'mailto:michellemoctezumais@gmail.com',
        label: 'Email'
    }
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className={styles.footer} id="footer">
                <div className="container">
                    <div className={styles.footer__content}>
                        <div className={styles.footer__brand}>
                            <Link href="#" className={styles.footer__logo}>
                                <span className={styles.logo__bracket}>&lt;</span>Michelle Moctezuma Isidro<span className={styles.logo__bracket}>/&gt;</span>
                            </Link>
                            <p className={styles.footer__text}>
                                Gracias por visitar mi portfolio. ¡Espero que podamos trabajar juntos pronto :)!
                            </p>
                        </div>
                        
                        <div className={styles.footer__social}>
                            {socialLinks.map((link, index) => (
                                <a 
                                    key={index}
                                    href={link.href} 
                                    target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                                    rel={link.href.startsWith('mailto') ? '' : 'noopener noreferrer'}
                                    className={styles.footer__social_link}
                                    aria-label={link.label}
                                >
                                    <i className={link.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    <div className={styles.footer__bottom}>
                        <p className={styles.footer__copyright}>
                            &copy; {currentYear} Michelle Moctezuma Isidro. Todos los derechos reservados.
                        </p>
                        <p className={styles.footer__made}>
                            Hecho con <i className="fas fa-heart"></i> y mucho <i className="fas fa-coffee"></i>
                        </p>
                    </div>
                </div>
            </footer>

            {/* ========== SCROLL TO TOP ========== */}
            <Link href="#home" className={styles['scroll-top']} id="scroll-top">
                <i className="fas fa-arrow-up"></i>
            </Link>
        </>
    );
}
