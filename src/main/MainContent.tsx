import React from 'react';
import styles from './MainContent.module.css'
import Info from "./Info/Info";

const MainContent = () => {
    return (
        <div className={styles.mainContent}>
            <Info />
        </div>
    );
};

export default MainContent;