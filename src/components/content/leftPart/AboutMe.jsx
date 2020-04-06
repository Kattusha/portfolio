import React from 'react';
import styles from './AboutMe.module.css';

function AboutMe() {
    return (
        <div className="leftBox">
            <div className="title">
                <h3>About Me</h3>
            </div>
            <div className={styles.text}>
                <p>I am talanted florist and decorator. I have graduated from International and cultural university of
                    design and arts. Since first year in high school I relized that nature is most powerfull and
                    beautiful gift in the world. I was captivated by beauty and simplicity of flowers and trees. Since
                    then I have started to create and mastering unique and nice bouquets. My 1st masterpiece was garden
                    of ant Ula Lowe decorated by me</p>
            </div>
        </div>
    );
}

export default AboutMe;
