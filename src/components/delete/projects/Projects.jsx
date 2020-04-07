import React from 'react';
import styles from './Projects.module.css';

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <span>Мои работы</span>
                <div className={styles.myProjects}>
                    <div className={styles.project}>
                        <div className={styles.photo}>
                            <button>Смотреть</button>
                        </div>
                        <span>Название проекта</span>
                        <span>Краткое описание</span>

                    </div>
                    <div className={styles.project}>
                        <div className={styles.photo}>
                            <button>Смотреть</button>
                        </div>
                        <span>Название проекта</span>
                        <span>Краткое описание</span>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects;
