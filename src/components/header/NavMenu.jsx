import React from 'react';
import styles from './NavMenu.module.css';

function NavMenu() {
    return (
        <div className={styles.navMenu}>
            <a href="/portfolio" >Home</a>
            {/*<a href="/#" >My experience</a>*/}
            <a href="/portfolio/#skills" >My skills</a>
            <a href="/portfolio/works" className={styles.linkWorks} >My works</a>
            <a href="/portfolio/#contact" >Contact Me</a>
        </div>
    );
}

export default NavMenu;
