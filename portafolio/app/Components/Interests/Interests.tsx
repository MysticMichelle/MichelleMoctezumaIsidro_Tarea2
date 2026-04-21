import React from 'react';
import styles from './Interests.module.css';

interface InterestCard {
    icon: string;
    title: string;
    description: string;
    tags: string[];
}

const interestCards: InterestCard[] = [
    {
        icon: 'fas fa-code',
        title: 'Desarrollo Web',
        description: 'Creación de aplicaciones web modernas con tecnologías como HTML5, CSS3, JavaScript y frameworks actuales.',
        tags: ['HTML/CSS', 'JavaScript', 'React']
    },
    {
        icon: 'fas fa-shield-halved',
        title: 'Ciberseguridad',
        description: 'Protección de sistemas y datos, análisis de vulnerabilidades y mejores prácticas de seguridad informática.',
        tags: ['Seguridad Web', 'Pentesting', 'Redes']
    },
    {
        icon: 'fas fa-brain',
        title: 'Inteligencia Artificial',
        description: 'Machine Learning, procesamiento de datos y desarrollo de soluciones inteligentes con Python.',
        tags: ['Python', 'ML', 'Data Science']
    },
    {
        icon: 'fas fa-database',
        title: 'Bases de Datos',
        description: 'Diseño, administración y optimización de bases de datos relacionales y NoSQL.',
        tags: ['MySQL', 'PostgreSQL', 'MongoDB']
    },
    {
        icon: 'fas fa-mobile-screen-button',
        title: 'Desarrollo Móvil',
        description: 'Creación de aplicaciones móviles nativas y multiplataforma para Android e iOS.',
        tags: ['Flutter', 'React Native', 'Kotlin']
    },
    {
        icon: 'fas fa-cloud',
        title: 'Cloud Computing',
        description: 'Servicios en la nube, arquitecturas escalables y despliegue de aplicaciones.',
        tags: ['AWS', 'Azure', 'Docker']
    }
];

const subjects = [
    'Programación Orientada a Objetos',
    'Estructuras de Datos',
    'Algoritmos',
    'Redes de Computadoras',
    'Ingeniería de Software',
    'Bases de Datos',
    'Sistemas Operativos',
    'Desarrollo Web'
];

export default function Interests() {
    return (
        <section className={`${styles.interests} section`} id="interests">
            <div className="container">
                <div className={styles.section__header}>
                    <span className={styles.section__subtitle}>Lo que me apasiona</span>
                    <h2 className={styles.section__title}>Intereses & Especialidades</h2>
                    <p className={styles.section__description}>
                        Áreas tecnológicas que me entusiasman y en las que busco especializarme
                    </p>
                </div>
                
                <div className={styles.interests__grid}>
                    {interestCards.map((card, index) => (
                        <article key={index} className={styles.interest__card}>
                            <div className={styles.card__icon}>
                                <i className={card.icon}></i>
                            </div>
                            <h3 className={styles.card__title}>{card.title}</h3>
                            <p className={styles.card__description}>{card.description}</p>
                            <div className={styles.card__tags}>
                                {card.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
                
                {/* Relevant Subjects */}
                <div className={styles.subjects}>
                    <h3 className={styles.subjects__title}>
                        <i className="fas fa-graduation-cap"></i> Materias Relevantes
                    </h3>
                    <div className={styles.subjects__list}>
                        {subjects.map((subject, index) => (
                            <span key={index} className={styles.subject}>{subject}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
