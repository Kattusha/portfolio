import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <span>Екатерина Тычина</span>
                <div className={styles.socialIcon}>
                    <img/>
                    <img/>
                    <img/>
                    <img/>
                </div>
                <span>@2020 Все права защищены</span>
            </div>
        </div>
    );
}

export default Footer;
