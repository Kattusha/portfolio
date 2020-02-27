import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.photo}>
                    <img/>
                </div>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <h1>
                            <strong>Hello!</strong> I am Kate, <br/>
                            I am frontend developer
                        </h1>
                    </div>
                    <div className={styles.link}>
                        <button>Download Resume</button>
                        <div className={styles.social}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
