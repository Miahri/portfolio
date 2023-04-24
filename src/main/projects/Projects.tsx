import React from 'react';
import styles from "../projects/Projects.module.css";
import container from "../../common/Container.module.css";
import { v1 } from 'uuid';
import ProjectCard, {ProjectCardType} from "./projectCard/ProjectCard";

let projectsArr: Array<ProjectCardType> = [
    {id: v1(),
        photo: "https://cdn.dribbble.com/users/1235747/screenshots/9252158/media/960ed6830f538a526f7f914079e75dcb.png?compress=1&resize=700x525&vertical=top",
        name: "Plants",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias architecto, asperiores dolor exercitationem quod tempora."},
    {id: v1(),
        photo: "https://imgscf.slidemembers.com/docs/1/1/746/branding_project_pitch_deck_powerpoint_ppt_745504.jpg",
        name: "Branding",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias architecto, asperiores dolor exercitationem quod tempora."}
]

const Projects = () => {
    return (
        <div className={styles.projects}>
            <div className={`${container.container} ${styles.container}`}>
                <h2>Проекты</h2>
                <div className={styles.projectCard}>
                    {projectsArr.map(pr => <ProjectCard projects={pr}/>)}
                </div>
            </div>
        </div>
    );
};

export default Projects;