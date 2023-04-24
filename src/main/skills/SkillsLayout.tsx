import React from 'react';
import styles from './SkillsLayout.module.css'
import container from '../../common/Container.module.css'
import Skill, {SkillType} from "./skill-component/Skill";
import {v1} from "uuid";

let skills: Array<SkillType> = [
    {id: v1(),
        logo: "https://img.icons8.com/external-beshi-color-kerismaker/256/external-HTML-web-development-beshi-color-kerismaker.png",
        name: "React",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias architecto, asperiores dolor exercitationem quod tempora."},
    {id: v1(),
        logo: "https://img.icons8.com/external-beshi-color-kerismaker/256/external-HTML-web-development-beshi-color-kerismaker.png",
        name: "HTML",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias architecto, asperiores dolor exercitationem quod tempora."},
    {id: v1(),
        logo: "https://img.icons8.com/external-beshi-color-kerismaker/256/external-HTML-web-development-beshi-color-kerismaker.png",
        name: "CSS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias architecto, asperiores dolor exercitationem quod tempora."},
]

const SkillsLayout = () => {
    return (
        <div className={styles.skillsLayout}>
            <div className={`${container.container} ${styles.container}`}>
                <h2>Скиллы</h2>
                <div className={styles.skills}>
                    {skills.map(sk => <Skill skills={sk}/>)}
                </div>
            </div>
        </div>
    );
};

export default SkillsLayout;