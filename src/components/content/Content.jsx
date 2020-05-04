import React from 'react';
import styles from './Content.module.css';
import PersonalInfo from "./leftPart/PersonalInfo";
import AboutMe from "./leftPart/AboutMe";
import EducationInfo from "./rightPart/EducationInfo";
import EmploymentInfo from "./rightPart/EmploymentInfo";
import ContactInfo from "./rightPart/ContactInfo";
import {Route} from "react-router-dom";
import Portfolio from "./rightPart/Portfolio";

function Content() {
    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.leftPart}>
                    <AboutMe />
                    <PersonalInfo />
                </div>
                <Route exact path='/'>
                    <div className={styles.rightPart}>
                        <EmploymentInfo />
                        <EducationInfo />
                        <ContactInfo />
                    </div>
                </Route>

                <Route path='/works'>
                    <div className={styles.rightPart}>
                        <Portfolio />
                    </div>
                </Route>
            </div>
        </div>
    );
}

export default Content;
