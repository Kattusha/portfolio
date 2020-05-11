import React from 'react';
import styles from './EmploymentInfo.module.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(fas);

function SkillsInfo() {
    return (
        <>
            <a name="skills"/>
            <div className="rightBox">
                <div className="title">
                    <h2><FontAwesomeIcon icon={['fas', 'check-double']} className="icon"/>
                        Skills</h2>
                </div>
                <div className="text">
                    <strong>PROFESSIONAL SUMMARY:</strong>
                    <ul>
                        <li><strong>Over 5+ years of IT experience</strong></li>
                        <li>Experience in developing web pages using HTML5/CSS3, JavaScript, ReactJS, Redux</li>

                        <li>Experience in ReactJS to develop the SPA, React Flux architecture. Maintained states in the
                            stores and dispatched the actions using Redux. Implemented React container and
                            presentational components (as Stateless and Functional components when applicable)
                        </li>
                        <li>Experience in RESTful web services to integrate between Server side to Client Side. Used
                            Middleware, Redux-Promise in application to retrieve data from Back-End and to also
                            perform RESTful services</li>
                        <li>Experience in analyzing the Document Object Model (DOM) Layout, DOM Functions, and
                            Java Script functions, Cascading Styles across cross-browser using Developer Tool Bar
                        </li>
                        <li>Used Git for version controlling and regularly pushed the code to GitHub</li>
                        <li>Experience with common front-end devtools such as babel, webpack, gulp, npm, yarn</li>
                        <li>Experience in writing SQL scripts, stored procedures, cursors, triggers, jobs</li>
                        <br/>
                        <li>Ability to work effectively while working as a team member as well as individually</li>
                        <li>Excellent communication and Inter-Personal Skills, well organized, goal oriented</li>
                        <li>Good at teamwork and project management, always open to new ideas</li>
                        <li>Responsible, quiet, confident, friendly</li>
                        <br/>
                        <li><strong>English (Intermediate) - Good reading and translating ability</strong></li>
                    </ul>

                    <br/><strong>TECHNICAL SKILLS:</strong>
                    <ul>
                        <li>HTML, CSS, TypeScript, JavaScript(ES5/ES6), C#</li>
                        <li>React, Redux, Flux, Thunk, Hooks, Redux-Form, Reselect, SPA</li>
                        <li>LocalStorage, REST API, axios</li>
                        <li>css, grid, flexbox, module css, styled components</li>
                        <li>SOLID</li>
                        <li>Git, npm, yarn</li>
                        <li>MS SQL Server, MySQL</li>
                        <li>OS: Windows</li>
                        <li>Agile SCRUM, Jira, Trello</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SkillsInfo;
