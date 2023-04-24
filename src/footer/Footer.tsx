import React from 'react';
import block from "../common/styles/CardBlock.module.css";
import container from "../common/styles/Container.module.css";
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={`${block.cardBlock} ${styles.footer}`}>
            <div className={`${container.container} ${styles.container}`}>
                <h2>Мяхри Хоммадова</h2>
                <div className={styles.socialMediaDiv}>
                    <button>vk</button>
                    <button>vk</button>
                    <button>vk</button>
                    <button>vk</button>
                </div>
                <span>&copy; 2023 Все права защищены</span>
            </div>
        </div>
    );
};

export default Footer;