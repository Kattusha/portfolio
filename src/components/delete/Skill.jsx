import React from 'react';
import styles from './Skill.module.css';

function Skill() {
    return (
        <div className={styles.skill}>
            <div className={styles.photo}>
                <img/>
            </div>
            <span>React</span>
            <span>Подробное описание навыка</span>
        </div>
    );
}

export default Skill;
