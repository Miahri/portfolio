import React from 'react';
import styles from './MainContent.module.css'
import Info from "./info/Info";
import SkillsLayout from "./skills/SkillsLayout";
import Projects from "./projects/Projects";
import HirePage from "./hirePage/HirePage";
import Contacts from "./contacts/Contacts";

const MainContent = () => {
    return (
        <div className={styles.mainContent}>
            <Info />
            <SkillsLayout />
            <Projects />
            <HirePage />
            <Contacts />
        </div>
    );
};

export default MainContent;