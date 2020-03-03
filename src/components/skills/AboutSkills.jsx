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
                            <dt>Full Name</dt><dd>Kate Tychuna</dd>
                            <dt>D.o.b.</dt><dd>11 Feb 1988</dd>
                            <dt>Address</dt><dd>Belarus, Minsk</dd>
                            <dt>E-mail</dt><dd><a href="kajra.life@gmail.com">admin@gmail.com</a></dd>
                            <dt>Phone</dt><dd>+375 (29) 583 20 62</dd>
                            <dt>Skype</dt><dd>Quaneila</dd>
                            <dt>Telegram</dt><dd>Kattusha</dd>
                            <dt>Freelance</dt><dd>Available</dd>
                        </dl>

                    </div>
                </div>
                <div className={styles.aboutSkills}>

                </div>
            </div>
        </div>
    );
}

export default AboutSkills;
