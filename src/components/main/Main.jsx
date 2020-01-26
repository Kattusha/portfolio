import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <span>Привет!</span>
                    <span>Меня зовут Екатерина.</span>
                    <span>Я front-end разработчик.</span>
                </div>
                <div className={styles.photo}>
                    <img/>
                </div>
            </div>
        </div>
    );
}

export default Main;
