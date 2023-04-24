import React from 'react';
import block from "../../common/styles/CardBlock.module.css";
import container from "../../common/styles/Container.module.css";
import styles from "./HirePage.module.css"

const HirePage = () => {
    return (
        <div className={`${block.cardBlock} ${styles.hireBlock}`}>
            <div className={`${container.container} ${styles.container}`}>
                <h2>Рассматриваю варианты удаленной работы</h2>
                <button className={styles.hireBtn}>Нанять меня</button>
            </div>
        </div>
    );
};

export default HirePage;