import React from 'react';
import styles from './PersonalInfo.module.css';

function PersonalInfo() {
    return (
        <div className="leftBox">
            <div className="title">
                <h3>Personal Info</h3>
            </div>
            <div>
                <dl>
                    <dt>Full Name</dt>
                    <dd>Kate Tychuna</dd>
                    <dt>Birthday</dt>
                    <dd>11 Feb 1988</dd>
                    <dt>Address</dt>
                    <dd>Belarus, Minsk</dd>
                    <dt>E-mail</dt>
                    <dd>tchn.kate@gmail.com</dd>
                    <dt>Phone</dt>
                    <dd>+375 (29) 583 20 62</dd>
                    <dt>Skype</dt>
                    <dd>Quaneila</dd>
                    <dt>Telegram</dt>
                    <dd>Kattusha</dd>
                </dl>
                <div className={styles.freeAvailable}>
                    {/*<div className={styles.preloader}></div>*/}
                    <div className={styles.circle}></div>
                    <a href="#contact">
                        <span>AVAILABLE FOR FREELANCE</span>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default PersonalInfo;
