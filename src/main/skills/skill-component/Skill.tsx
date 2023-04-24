import React from 'react';
import styles from './Skill.module.css'

export type SkillType = {
    id: string
    logo: any   /////////////////////fix
    name: string
    description: string
}

type SkillPropsType = {
    skills: SkillType
}

const Skill: React.FC<SkillPropsType> = (props) => {
    return (
        <div className={styles.skillCard}>
            <img src={props.skills.logo} alt="programm-logo"/>
            <h3>{props.skills.name}</h3>
            <div>{props.skills.description}</div>
        </div>
    );
};

export default Skill;