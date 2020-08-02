import React from 'react';

import BlockContent from '../block/block';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import myself from '../../assets/img/myself.jpg';


library.add(faChevronRight, faChevronLeft);


const ProjectsBlock = (props) => {
    return (
        <BlockContent id="projects-block" color="portfolio-projects-block background-color-gray">
            <div class="title">Projects</div>
            
            <div class="projects-selector">
                <div class="arrow-icon back-icon"><FontAwesomeIcon icon={faChevronLeft} /></div>
                
                <div class="project">
                    <img class="project-img" src={myself} alt="Assine Globo" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 
1500s, when an unknown printer took a galley of type and scrambled it to 
make a type specimen book. It has survived not only five centuries, but also 
the leap into electronic typesettingm.</p>
                </div>
                
                <div class="arrow-icon next-icon"><FontAwesomeIcon icon={faChevronRight} /></div>
            </div>
        </BlockContent>
    );
}

export default ProjectsBlock;