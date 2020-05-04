import React from 'react';
import styles from './ContactInfo.module.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import {far} from "@fortawesome/free-regular-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(far, fas);

function ContactInfo() {
    return (
        <>
            <a name="contact"/>
            <div className="rightBox">
                <div className="titleWithColor">
                    <h2>
                        {/*<FontAwesomeIcon icon={['fas', 'edit']} className="icon"/>*/}
                        Contact</h2>
                </div>
                <div className="text">
                    <div className={styles.contacts}>
                        <div className={styles.info}>
                            <div>
                                <h4>Call Me</h4>
                                <p><FontAwesomeIcon icon={['fas', 'mobile-alt']} className="littleIcon"/>
                                    Mobile : (255) 985-1256</p>
                            </div>
                            <div>
                                <h4>Mail Me &amp; Web</h4>
                                <p><FontAwesomeIcon icon={['far', 'envelope']} className="littleIcon"/>
                                    Email : admin0955@gmail.com</p>
                            </div>
                        </div>
                        <div>
                            <form>
                                <div className={styles.formBlock}>
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" id="name" className={styles.formInput}/>
                                </div>

                                <div className={styles.formBlock}>
                                    <label htmlFor="email">Email address</label>
                                    <input type="text" id="email" className={styles.formInput}/>
                                </div>

                                {/*<div className={styles.formBlock}>*/}
                                {/*    <label htmlFor="subject">Subject</label>*/}
                                {/*    <input type="text" id="subject" className={styles.formInput}/>*/}
                                {/*</div>*/}

                                <div className={styles.formBlock}>
                                    <label htmlFor="comment">Message for Me</label>
                                    <textarea rows="6" id="comment" className={styles.formInput}></textarea>
                                </div>

                                <button className="buttonBlue">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactInfo;
