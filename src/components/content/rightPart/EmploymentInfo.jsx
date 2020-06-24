import React from 'react';
import styles from './EmploymentInfo.module.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(fas);

function EmploymentInfo() {
    return (
        <div className="rightBox">
            <div className="title">
                <h2><FontAwesomeIcon icon={['fas', 'briefcase']} className="icon"/>
                    Experience</h2>
            </div>
            <div className="text">
                <div className={styles.item}>
                    <div className={styles.leftPartItem}>
                        <div className={styles.yearsItem}>FEB 2020 - NOW</div>
                    </div>
                    <div className={styles.rightPartItem}>
                        <h3>Frontend Developer<br/>
                            <span>Freelance</span>
                        </h3>
                        <p>- Implementation of new functional modules(components), new pages using React.</p>
                        <p>- Optimizing app components.</p>
                        <p>- Collaborating with software developers and designers.</p>
                        <p>- Creation of responsive web-pages using HTML/CSS.</p>
                        <p>- Worked on Cross-Browser compatibility and fixed the bugs for several browsers.</p>
                        <p>- Worked in RESTful web services to integrate between Server side and Client Side</p>
                        <p>- Worked using React JS components, Forms, Events, Keys, Router, Animations, and Flux
                            concept.</p>
                        <strong>Tools/Technologies applied: JavaScripts/CSS/HTML, React, Redux, react Hooks, Git, CSS
                            modules, Styled-components</strong>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.leftPartItem}>
                        <div className={styles.yearsItem}>DEC 2010 - NOV 2019</div>
                    </div>
                    <div className={styles.rightPartItem}>
                        <h3>C# Middle Developer<br/>
                            <span>System Technologies, Minsk</span>
                        </h3>
                        <p>- Development and maintenance of financial applications for banks, database design,
                            database optimization.</p>
                        <p>- Participation in implementation projects and development; creation of solutions
                            for the internal processes of the company.</p>
                        <p>- Analysis of existing developments, preparation of recommendations for optimization and
                            refactoring of existing solutions. </p>
                        <p>- Communication with the client to understand the requirements for website, gained experience
                            in project planning, involved in writing the Project Design Document and Project Plan
                            Document.</p>
                        <p>- Worked as a part of an Agile (Scrum) Development Team to deliver regular updates to business team
                            and project managers. Interacted with QA Team, Scrum Masters and Business Analysts
                            for issues fixing.</p>
                        <p>- Used JIRA bug tracking system on everyday basis.</p>
                        <p>- Integrating with third-party services.</p>
                        <p>- Troubleshooting & Bugs fixes.</p>
                        <p>- Mentoring new employees</p>
                        <p>- Consulting users on the functionality of embedded solutions.</p>
                        <strong>Tools/Technologies applied: C#, XML, SQL, MS SQL Server, Visual Studio 2010-2012, Jira,
                            Trello, Agile (SCRUM)</strong>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.leftPartItem}>
                        <div className={styles.yearsItem}>DEC 2017 - JAN 2019</div>
                    </div>
                    <div className={styles.rightPartItem}>
                        <h3>WEB Developer<br/>
                            <span>Freelance</span>
                        </h3>
                        <p>- Created landing pages.</p>
                        <p>- Designed the web pages using HTML/CSS and deploy the script using JavaScript.</p>
                        <p>- Developed the logos and images using Adobe Photoshop.</p>
                        <p>- Set up and maintained contextual advertising using Yandex.Direct, Google AdSense.</p>
                        <strong>Tools/Technologies applied: HTML/CSS/JavaScripts, Yandex.Direct, Google AdSense,
                            Adobe Photoshop.</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmploymentInfo;
