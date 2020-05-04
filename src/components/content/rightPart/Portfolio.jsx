import React from 'react';
import styles from './Portfolio.module.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import {far} from "@fortawesome/free-regular-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import project1 from '../../../images/1.jpg'
import project2 from '../../../images/2.jpg'
import project3 from '../../../images/3.jpg'
import project4 from '../../../images/4.jpg'

library.add(far, fas);

function Portfolio() {
    return (
        <>
            <a name="portfolio"/>
            <div className="rightBox">
                <div className="titleWithColor">
                    <h2>
                        {/*<FontAwesomeIcon icon={['fas', 'folder-open']} className="icon"/>*/}
                        Portfolio</h2>
                </div>
                <div className={styles.projectsBlock}>
                    <div className={styles.left}>
                        <a href="">
                            <div className={styles.project}>
                                <img src={project1} alt="project1"/>
                                <div className={styles.projectText}>
                                    <h5 className={styles.projectName}>project name</h5>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className={styles.project}>
                                <img src={project2} alt="project2"/>
                                <div className={styles.projectText}>
                                    <h5 className={styles.projectName}>project name</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={styles.right}>
                        <a href="">
                            <div className={styles.project}>
                                <img src={project3} alt="project3"/>
                                <div className={styles.projectText}>
                                    <h5>project name</h5>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className={styles.project}>
                                <img src={project4} alt="project4"/>
                                <div className={styles.projectText}>
                                    <h5>project name</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
