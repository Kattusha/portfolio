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
                    <div className={styles.tags}>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Git</li>
                            <li>Agile (Scrum)</li>
                        </ul>
                    </div>
                    <div className={styles.link}>
                        <button>View Portfolio</button>
                        <div className={styles.social}>
                            <a href="#" className="github">
                                {/*<i className="fab fa-github"></i>*/}
                            </a>
                            <a href="#" className="github">
                                {/*<i className="fab fa-github"></i>*/}
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
