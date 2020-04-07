import React from 'react';
import styles from './Content.module.css';
import PersonalInfo from "./leftPart/PersonalInfo";
import AboutMe from "./leftPart/AboutMe";
import EducationInfo from "./rightPart/EducationInfo";

function Content() {
    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.leftPart}>
                    <AboutMe />
                    <PersonalInfo />
                </div>
                <div className={styles.rightPart}>
                    <EducationInfo />
                </div>
            </div>
        </div>
    );
}

export default Content;
