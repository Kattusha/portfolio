import React from 'react';
import styles from './AuthorCard.module.css';

function AuthorCard() {
    return (
        <div className={styles.authorCard}>
            <div className={styles.container}>
                <div className={styles.avatar}>

                </div>
                <div className={styles.authorContent}>
                    <h1 className={styles.authorName}>
                        <strong>Hello!</strong> I am Kate, <br/>
                        I am frontend developer
                    </h1>
                    <div className={styles.skillTags}>
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
                    <div className={styles.authorLink}>
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

export default AuthorCard;
