import React from 'react';
import styles from './AuthorCard.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

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
                        <button><FontAwesomeIcon icon={['fas', 'th-large']} className="icon-button"/>View Portfolio</button>
                        <div className={styles.social}>
                            <a href="https://github.com/Kattusha" className={styles.github}>
                                {/* hover = #F4CBB2;*/}
                                <FontAwesomeIcon icon={['fab', 'github']}/>
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
