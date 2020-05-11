import React from 'react';
import styles from './Content.module.css';
import PersonalInfo from "./leftPart/PersonalInfo";
import AboutMe from "./leftPart/AboutMe";
import EducationInfo from "./rightPart/EducationInfo";
import EmploymentInfo from "./rightPart/EmploymentInfo";
import ContactInfo from "./rightPart/ContactInfo";
import {Redirect, Route} from "react-router-dom";
import Portfolio from "./rightPart/Portfolio";
import SkillsInfo from "./rightPart/SkillsInfo";

function Content() {
    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.leftPart}>
                    <AboutMe />
                    <PersonalInfo />
                </div>
                <Route exact path={'/'}>
                    <Redirect to={'/portfolio'}/>
                </Route>
                <Route exact path='/portfolio'>
                    <div className={styles.rightPart}>
                        <SkillsInfo />
                        <EmploymentInfo />
                        <EducationInfo />
                        <ContactInfo />
                    </div>
                </Route>

                <Route path='/portfolio/works'>
                    <div className={styles.rightPart}>
                        <Portfolio />
                    </div>
                </Route>
            </div>
        </div>
    );
}

export default Content;
