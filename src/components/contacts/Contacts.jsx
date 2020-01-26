import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <span>Контакты</span>

                <form name="contact" className={styles.form}>
                    <div className={styles.formInput}>
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="E-mail"/>
                        <textarea rows="5" placeholder="Message">
                        </textarea>
                    </div>
                    <div className={styles.formButton}>
                        <button>Отправить</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Contacts;
