import React from 'react';
import container from "../../common/styles/Container.module.css";
import styles from "./HirePage.module.css"
import btn from "../../common/styles/Button.module.css"

const HirePage = () => {
    return (
        <div className={styles.hireBlock}>
            <div className={`${container.container} ${styles.container}`}>
                <h3>Рассматриваю варианты удаленной работы</h3>
                <button className={`${btn.btn} ${styles.hireBtn}`}>Нанять меня</button>
            </div>
        </div>
    );
};

export default HirePage;