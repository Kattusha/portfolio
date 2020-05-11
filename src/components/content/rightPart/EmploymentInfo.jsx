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
                    Experience</h2>
            </div>
            <div className="text">
                <div className={styles.item}>
                    <div className={styles.leftPartItem}>
                        <div className={styles.yearsItem}>DEC 2010 - NOV 2019</div>
                    </div>
                    <div className={styles.rightPartItem}>
                        <h3>C# Middle Developer<br/>
                            <span>startup BudgetMatador, Tallinn, Estonia</span>
                        </h3>
                        <p>Development and maintenance of financial applications for banks, database design,
                            database optimization.<br/><br/>
                            Participation in projects for the implementation, development and development of solutions
                            in the internal processes of the company.<br/><br/>
                            Analysis of existing developments, preparation of recommendations for optimization and
                            refactoring of existing solutions. <br/><br/>
                            Development of technical specifications for improvements and the implementation of these
                            improvements. <br/><br/>
                            Consulting users on the functionality of embedded solutions.</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.leftPartItem}>
                        <div className={styles.yearsItem}>JAN 2010 - NOV 2010</div>
                    </div>
                    <div className={styles.rightPartItem}>
                        <h3>Account Manager<br/>
                            <span>VTB Bank (Belarus)</span>
                        </h3>
                        <p>Maintaining a database of bank customers, advising clients by phone.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmploymentInfo;
