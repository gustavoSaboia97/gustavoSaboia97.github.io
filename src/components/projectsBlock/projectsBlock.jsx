import React from 'react';

import BlockContent from '../block/block';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import projectsPt from '../../assets/jsons/projects-pt.json';


library.add(faChevronRight, faChevronLeft);


let position = 0;

const getProjectPosition = (arrowDirection, projects) => {
    let next = "next";
    let back = "back";
    let initial = "initial";

    if (initial === arrowDirection){
        position = 0;
        return position;
    }
    if (next === arrowDirection){
        if (position === (projects.length - 1)){
            position = 0;
        }
        else {
            position++;
        }
    }
    if (back === arrowDirection){
        if (position === 0){
            position = projects.length - 1;
        }
        else {
            position--;
        }
    }

    return position;
}

const getProjects = (arrowDirection) => {

    let projects = projectsPt;
    let position = getProjectPosition(arrowDirection, projects);
    let image = projects[position]['img'];

    return (
        <a href={projects[position]['link']}>
            <div className="project">
                <img className="project-img" src={image} alt={projects[position]['alt']} />
                <p> 
                    {projects[position]['description']}
                </p>
            </div>
        </a>
    );
}

let project = getProjects("initial");

const ProjectsBlock = (props) => {
    return (
        <BlockContent id="projects-block" color="portfolio-projects-block background-color-gray">
            <div className="title">Projects</div>
            
            <div className="projects-selector">
                <button onClick={() => getProjects("back")} className="arrow-icon back-icon"><FontAwesomeIcon icon={faChevronLeft} /></button>
                
                {
                    project
                }
                
                <button onClick={() => getProjects("next")} className="arrow-icon next-icon"><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
        </BlockContent>
    );
}

export default ProjectsBlock;