import React from 'react';
import styles from './NavMenu.module.css';

function NavMenu() {
    return (
        <div className={styles.navMenu}>
            {/*<a href="" >About Me</a>*/}
            {/*<a href="" >My experience</a>*/}
            {/*<a href="" >My skills</a>*/}
            <a href="#portfolio" >My works</a>
            <a href="#contact" >Contact Me</a>
        </div>
    );
}

export default NavMenu;
