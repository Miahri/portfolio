import React from 'react';
import styles from "../../projects/projectCard/ProjectCard.module.css";
import card from "../../../common/Card.module.css"

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
        <div className={`${card.card} ${styles.projectCard}`}>
            <img src={props.projects.photo} alt="project-demo"/>
            <h3>{props.projects.name}</h3>
            <span>{props.projects.description}</span>
        </div>
    );
};

export default ProjectCard;