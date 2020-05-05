import React from 'react';
import signature from '../../../images/signature.png'
import styles from './AboutMe.module.css';

function AboutMe() {
    return (
        <div className="leftBox">
            <div className="title">
                <h3>About Me</h3>
            </div>
            <div>
                <p>I am frontend developer interested in building usable, useful, well-constructed websites and
                    applications. Interested in continuation of learning and cooperation with excellent people.
                </p>
            </div>
            <div className={styles.signature}>
                <img src={signature} alt="signature"/>
            </div>
        </div>
    );
}

export default AboutMe;
