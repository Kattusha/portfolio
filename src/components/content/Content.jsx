import React from 'react';
import styles from './Content.module.css';
import PersonalInfo from "./leftPart/PersonalInfo";
import AboutMe from "./leftPart/AboutMe";

function Content() {
    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.leftPart}>
                    <AboutMe />
                    <PersonalInfo />
                </div>
                <div className={styles.rightPart}>
                    <div className={styles.aboutSkills}>
                        <div className={styles.title}>
                            <h3>Education</h3>
                        </div>
                        <div className={styles.text}>
                            <div className={styles.edubox}>
                                <h3>Front-end developer (ReactJS)<br/>
                                    <span>it-incubator.by</span>
                                </h3>
                                <p>JAN 2020 - MAY 2020</p>
                            </div>
                            <div className={styles.edubox}>
                                <h3>Computer software engineer<br/>
                                    <span>Belarusian State University, Faculty of Applied Mathematics and Computer Scienc</span>
                                </h3>
                                <p>NOV 2005 - FEB 2010</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
