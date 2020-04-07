import React from 'react';
import styles from './EducationInfo.module.css';

function EducationInfo() {
    return (
        <div className="rightBox">
            <div className="title">
                <h2>Education</h2>
            </div>
            <div className="text">
                <div className={styles.educationBox}>
                    <h3>Front-end developer (ReactJS)<br/>
                        <span>it-incubator.by</span>
                    </h3>
                    <p>JAN 2020 - MAY 2020</p>
                </div>
                <div className={styles.educationBox}>
                    <h3>Computer software engineer<br/>
                        <span>Belarusian State University, Faculty of Applied Mathematics and Computer Scienc</span>
                    </h3>
                    <p>NOV 2005 - FEB 2010</p>
                </div>
            </div>
        </div>
    );
}

export default EducationInfo;
