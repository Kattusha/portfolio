import React from 'react';
import styles from './AboutSkills.module.css';

function AboutSkills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.aboutMe}>
                    <div className={styles.title}>
                        <h3>Personal Info</h3>
                    </div>
                    <div className={styles.text}>
                        <dl>
                            <dt>Full Name</dt>
                            <dd>Kate Tychuna</dd>
                            <dt>Birthday</dt>
                            <dd>11 Feb 1988</dd>
                            <dt>Address</dt>
                            <dd>Belarus, Minsk</dd>
                            <dt>E-mail</dt>
                            <dd><a href="kajra.life@gmail.com">admin@gmail.com</a></dd>
                            <dt>Phone</dt>
                            <dd>+375 (29) 583 20 62</dd>
                            <dt>Skype</dt>
                            <dd>Quaneila</dd>
                            <dt>Telegram</dt>
                            <dd>Kattusha</dd>
                            <dt>Freelance</dt>
                            <dd>Available</dd>
                        </dl>

                    </div>
                </div>
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
    );
}

export default AboutSkills;
