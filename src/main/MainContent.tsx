import React from 'react';
import styles from './MainContent.module.css'
import Info from "./info/Info";
import SkillsLayout from "./skills/SkillsLayout";
import Projects from "./projects/Projects";
import HirePage from "./hirePage/HirePage";
import Contacts from "./contacts/Contacts";
import Footer from "../footer/Footer";

const MainContent = () => {
    return (
        <div className={styles.mainContent}>
            <Info />
            <SkillsLayout />
            <Projects />
            <HirePage />
            <Contacts />
            <Footer />
        </div>
    );
};

export default MainContent;