import React from 'react';
import styles from './Content.module.css';
import PersonalInfo from "./leftPart/PersonalInfo";
import AboutMe from "./leftPart/AboutMe";
import EducationInfo from "./rightPart/EducationInfo";
import EmploymentInfo from "./rightPart/EmploymentInfo";
import Portfolio from "./rightPart/Portfolio";
import ContactInfo from "./rightPart/ContactInfo";

function Content() {
    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.leftPart}>
                    <AboutMe />
                    <PersonalInfo />
                </div>
                <div className={styles.rightPart}>
                    <EmploymentInfo />
                    <EducationInfo />
                    <Portfolio />
                    <ContactInfo />
                </div>
            </div>
        </div>
    );
}

export default Content;
