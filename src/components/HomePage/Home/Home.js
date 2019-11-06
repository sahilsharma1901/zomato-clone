import React from 'react';
import {ReactComponent as Card1svg} from '../../../assets/images/card1.svg';
import {ReactComponent as Card2svg} from '../../../assets/images/card2.svg';
import {ReactComponent as Card3svg} from '../../../assets/images/card3.svg';
import styles from './Home.module.css';

const Home = () => (
    <React.Fragment>
        <div className={styles.Image}>
            <div className={styles.Tagline}>
                <h3>Order Food Online</h3>
                <p>Best restaurants in Sonipat delivering to your doorstep</p>
            </div>
            <div className={styles.Explore}>
                <button>Order Now</button>
            </div>
        </div>
        <div className={styles.Filler}>
            <p>How our App works</p>
            <p>Enjoy a hassle-free food delivery at your doorstep</p>
        </div>
        <div className={styles.CardsContainer}>
            <div className={styles.Card}><Card1svg style={{marginBottom:'20px'}}/><br/><strong>Explore various dishes across Menus</strong> of your favourite restaurants</div>
            <div className={styles.Card}><Card2svg style={{marginBottom:'20px'}}/><br/><strong>Select your favourite dishes</strong> or customize according to your taste</div>
            <div className={styles.Card}><Card3svg style={{marginBottom:'20px'}}/><br/><strong>Get notified via E-mail</strong> once the order has reached the restaurant owner</div>
        </div>
    </React.Fragment>
);

export default Home;

