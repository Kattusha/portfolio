import React from 'react';
import styles from './Portfolio.module.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import {far} from "@fortawesome/free-regular-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(far, fas);

function Portfolio() {
    return (
        <div className="rightBox">
            <div className="title">
                <h2><FontAwesomeIcon icon={['fas', 'folder-open']} className="icon"/>
                Portfolio</h2>
            </div>
            <div className="text">

            </div>
        </div>
    );
}

export default Portfolio;
