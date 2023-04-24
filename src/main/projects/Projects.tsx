import React from 'react';
import styles from "../projects/Projects.module.css";
import container from "../../common/styles/Container.module.css";
import block from "../../common/styles/CardBlock.module.css"
import { v1 } from 'uuid';
import ProjectCard, {ProjectCardType} from "./projectCard/ProjectCard";

let projectsArr: Array<ProjectCardType> = [
    {id: v1(),
        photo: "https://imgscf.slidemembers.com/docs/1/1/957/home_living_interior_ppt_template_for_pitch_deck_956907.jpg",
        name: "Plants",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias architecto, asperiores dolor exercitationem quod tempora."},
    {id: v1(),
        photo: "https://imgscf.slidemembers.com/docs/1/1/746/branding_project_pitch_deck_powerpoint_ppt_745504.jpg",
        name: "Branding",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias architecto, asperiores dolor exercitationem quod tempora."}
]

const Projects = () => {
    return (
        <div className={`${block.cardBlock} ${styles.projects}`}>
            <div className={`${container.container} ${styles.container}`}>
                <h2>Проекты</h2>
                <div className={block.blockEl}>
                    {projectsArr.map(pr => <ProjectCard projects={pr}/>)}
                </div>
            </div>
        </div>
    );
};

export default Projects;