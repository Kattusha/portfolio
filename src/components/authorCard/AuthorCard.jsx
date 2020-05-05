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
                            <li>JavaScript ES5/ES6</li>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>Redux/Flux</li>
                            <li>Hooks</li>
                            <li>Redux-form</li>
                            <li>SPA</li>
                            <li>Rest API</li>
                            <li>axios</li>
                            <li>HTML5 & CSS3</li>
                            <li>Module css</li>
                            <li>Styled Components</li>
                            <li>npm, yarn</li>
                            <li>git</li>
                            <li>C#</li>
                            <li>SQL</li>
                            <li>Agile SCRUM</li>
                        </ul>
                    </div>
                    <div className={styles.authorLink}>
                        <button>
                            <FontAwesomeIcon icon={['fas', 'arrow-circle-down']} className="icon-button"/>
                            Download Resume
                        </button>
                        <div className={styles.social}>
                            <a href="https://github.com/Kattusha" className={styles.github}>
                                <FontAwesomeIcon icon={['fab', 'github']}/>
                            </a>
                            <a href="" className={styles.linkedin}>
                                <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                            </a>
                            {/*<a href="" className={styles.facebook}>*/}
                            {/*    <FontAwesomeIcon icon={['fab', 'facebook']}/>*/}
                            {/*</a>*/}
                            {/*<a href="" className={styles.instagram}>*/}
                            {/*    <FontAwesomeIcon icon={['fab', 'instagram']}/>*/}
                            {/*</a>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthorCard;
