import React from 'react';
import styles from './NavMenu.module.css';
import {NavLink} from "react-router-dom";
import {HashLink as Link} from 'react-router-hash-link';
import {HOME_PATH, WORK_PATH} from "../content/Content";

function NavMenu() {
    return (
        <div className={styles.navMenu}>
            <NavLink to={HOME_PATH} activeClassName={styles.activeLink}>Home</NavLink>
            <Link to={HOME_PATH+"#skills"} activeClassName={styles.activeLink}>My skills</Link>
            <NavLink to={WORK_PATH} className={styles.linkWorks} activeClassName={styles.activeLink}>My works</NavLink>
            <Link to={HOME_PATH+"#contact"} activeClassName={styles.activeLink}>Contact Me</Link>
        </div>
    )
}

export default NavMenu;
