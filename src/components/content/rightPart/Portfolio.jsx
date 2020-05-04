import React from 'react';
import styles from './Portfolio.module.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import {far} from "@fortawesome/free-regular-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons"
import project2 from '../../../images/2-2.jpg'
import project1 from '../../../images/3-3.jpg'
import img from '../../../images/portfolio-image.jpg'

library.add(far, fas);

function Portfolio() {
    return (
        <>
            <div className="rightBoxPortfolio">
                <div className="title">
                    <h2>
                        {/*<FontAwesomeIcon icon={['fas', 'folder-open']} className="icon"/>*/}
                        Portfolio</h2>
                </div>
                <div className={styles.whiteBox}>
                    <div className={styles.item}>
                        <div className={styles.itemLeft}>
                            <h3>Puzzle Game</h3>
                            {/*<span className="portfolio-category">Applications</span>*/}
                            <p className="font-primary">Project we will be working with the HTML5 canvas and
                                Javascript to create a dynamic tile swapping game.
                                The
                                result will be a puzzle
                                that works with any given image, and has flexible.</p>
                            <button className="btn">Read more</button>
                        </div>
                    </div>
                </div>
                <div className={styles.whiteBox}>
                    <div className={styles.item2}>
                        <div className={styles.itemLeft}>
                            <h3>Puzzle Game</h3>
                            {/*<span className="portfolio-category">Applications</span>*/}
                            <p className="font-primary">Project we will be working with the HTML5 canvas and
                                Javascript to create a dynamic tile swapping game.
                                The
                                result will be a puzzle
                                that works with any given image, and has flexible.</p>
                            <button className="btn">Read more</button>
                        </div>
                    </div>
                </div>
                <div className={styles.whiteBox}>
                    <div className={styles.item3}>
                        <div className={styles.itemLeft}>
                            <h3>Puzzle Game</h3>
                            {/*<span className="portfolio-category">Applications</span>*/}
                            <p className="font-primary">Project we will be working with the HTML5 canvas and
                                Javascript to create a dynamic tile swapping game.
                                The
                                result will be a puzzle
                                that works with any given image, and has flexible.</p>
                            <button className="btn">Read more</button>
                        </div>
                        <div className={styles.itemRight}>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.whiteBox}>
                    <div className={styles.item}>
                        <div className={styles.itemLeft}>
                            <h3>Puzzle Game</h3>
                            {/*<span className="portfolio-category">Applications</span>*/}
                            <p className="font-primary">Project we will be working with the HTML5 canvas and
                                Javascript to create a dynamic tile swapping game.
                                The
                                result will be a puzzle
                                that works with any given image, and has flexible.</p>
                            <button className="btn">Read more</button>
                        </div>
                    </div>
                </div>



            </div>
        </>
    );
}

export default Portfolio;
