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

// all project paths
export const HOME_PATH = '/home';
export const WORK_PATH = '/work';

function Content() {
    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.leftPart}>
                    <AboutMe />
                    <PersonalInfo />
                </div>
                <Route exact path={'/'} render={() => <Redirect to={HOME_PATH}/>}/>
                <Route exact path={HOME_PATH}>
                    <div className={styles.rightPart}>
                        <SkillsInfo />
                        <EmploymentInfo />
                        <EducationInfo />
                        <ContactInfo />
                    </div>
                </Route>

                <Route path={WORK_PATH}>
                    <div className={styles.rightPart}>
                        <Portfolio />
                    </div>
                </Route>
            </div>
        </div>
    );
}

export default Content;
