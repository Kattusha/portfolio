import React from 'react';
import styles from './Header.module.css';
import NavMenu from "./NavMenu";

function Header() {
    return (
        <div className={styles.header}>
            <div className="container">
                <NavMenu/>
            </div>
        </div>
    );
}

export default Header;
