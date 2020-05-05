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
                    <p> Working on e-commerce web portal. Participating in and monitoring different kind of web projects
                        (mostly websites).
                        Mostly using PHP and Twitter Bootstrap 3.x &amp; 4.x frameworks with LESS.</p>
                    <ul>
                        <li>HTML5, CSS3, LESS, SASS, jQuery</li>
                        <li>Twitter Bootstrap 3.x &amp; 4.x framework</li>
                        <li>Semantic UI framework</li>
                        <li>MySql</li>
                        <li>AngularJs 1.x</li>
                        <li>PHP - Codeigniter framework</li>
                        <li>composer, npm, bower, gruntjs</li>
                        <li>Control Version System - Git</li>
                    </ul>

                </div>
            </div>
        </>
    );
}

export default SkillsInfo;
