import React from 'react';
import styles from "../../projects/projectCard/ProjectCard.module.css";

export type ProjectCardType = {
    id: string
    photo: any ////////fix
    name: string
    description: string
}

type ProjectCardPropsType = {
    projects: ProjectCardType
}

const ProjectCard: React.FC<ProjectCardPropsType> = (props) => {
    return (
        <div className={styles.projectCard}>
            <img src={props.projects.photo} alt="project-demo"/>
            <h3>{props.projects.name}</h3>
            <div>{props.projects.description}</div>
        </div>
    );
};

export default ProjectCard;