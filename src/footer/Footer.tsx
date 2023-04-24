import React from 'react';
import container from "../common/styles/Container.module.css";
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={`${container.container} ${styles.container}`}>
                <h3>Мяхри Хоммадова</h3>
                <div className={styles.socialMediaDiv}>
                </div>
                <span>&copy; 2023 Все права защищены</span>
            </div>
        </div>
    );
};

export default Footer;