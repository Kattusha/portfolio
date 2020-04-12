import React from 'react';
import styles from './EmploymentInfo.module.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(fas);

function EmploymentInfo() {
    return (
        <div className="rightBox">
            <div className="title">
                <h2><FontAwesomeIcon icon={['fas', 'briefcase']} className="icon"/>
                Employment</h2>
            </div>
            <div className="text">
                <div className={styles.item}>
                    <div className={styles.leftPartItem}>
                        <div className={styles.yearsItem}>2010 - 2019</div>
                    </div>
                    <div className={styles.rightPartItem}>
                        <h3>Front-end developer <br/>
                            <span>startup BudgetMatador, Tallinn, Estonia</span>
                        </h3>
                        <p>Voluntarily helping a not-yet-funded start-up company to develop
                            its product, for self-educational purposes. Includes coding in
                            Javascript (Backbone, jQuery, Underscore), HTML and CSS.</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.leftPartItem}>
                        <div className={styles.yearsItem}>2010 - 2019</div>
                    </div>
                    <div className={styles.rightPartItem}>
                        <h3>Front-end developer <br/>
                            <span>startup BudgetMatador, Tallinn, Estonia</span>
                        </h3>
                        <p>Voluntarily helping a not-yet-funded start-up company to develop
                            its product, for self-educational purposes. Includes coding in
                            Javascript (Backbone, jQuery, Underscore), HTML and CSS.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmploymentInfo;
