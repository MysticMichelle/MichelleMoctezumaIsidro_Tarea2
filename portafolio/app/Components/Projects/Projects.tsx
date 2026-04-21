import React from 'react';
import styles from './Projects.module.css';

interface Project {
    title: string;
    description: string;
    icon: string;
    tech: string[];
    link: string;
    github: string;
}

const projects: Project[] = [
    {
        title: 'E-Commerce Platform',
        description: 'Plataforma de comercio electrónico con carrito de compras, autenticación de usuarios y pasarela de pagos integrada.',
        icon: 'fas fa-laptop-code',
        tech: ['React', 'Node.js', 'MongoDB'],
        link: '#',
        github: 'https://github.com/tu-usuario/proyecto-1'
    },
    {
        title: 'Dashboard Analytics',
        description: 'Panel de control interactivo para visualización de datos con gráficos dinámicos y reportes automatizados.',
        icon: 'fas fa-chart-line',
        tech: ['Python', 'Django', 'Chart.js'],
        link: '#',
        github: 'https://github.com/tu-usuario/proyecto-2'
    },
    {
        title: 'AI Chatbot Assistant',
        description: 'Asistente virtual inteligente con procesamiento de lenguaje natural y respuestas contextuales.',
        icon: 'fas fa-robot',
        tech: ['Python', 'TensorFlow', 'Flask'],
        link: '#',
        github: 'https://github.com/tu-usuario/proyecto-3'
    }
];

export default function Projects() {
    return (
        <section className={`${styles.projects} section`} id="projects">
            <div className="container">
                <div className={styles.section__header}>
                    <span className={styles.section__subtitle}>Mi trabajo</span>
                    <h2 className={styles.section__title}>Proyectos Destacados</h2>
                    <p className={styles.section__description}>
                        Una selección de proyectos que demuestran mis habilidades y pasión por el desarrollo
                    </p>
                </div>
                
                <div className={styles.projects__grid}>
                    {projects.map((project, index) => (
                        <article key={index} className={styles.project__card}>
                            <div className={styles.project__image}>
                                <div className={styles.project__placeholder}>
                                    <i className={project.icon}></i>
                                </div>
                                <div className={styles.project__overlay}>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                                        <i className="fas fa-external-link-alt"></i>
                                    </a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className={styles.project__content}>
                                <h3 className={styles.project__title}>{project.title}</h3>
                                <p className={styles.project__description}>{project.description}</p>
                                <div className={styles.project__tech}>
                                    {project.tech.map((tech, techIndex) => (
                                        <span key={techIndex} className={styles.tech}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                
                <div className={styles.projects__more}>
                    <a href="https://github.com/MysticMichelle" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles['btn--outline']}`}>
                        <i className="fab fa-github"></i> Ver más en GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
