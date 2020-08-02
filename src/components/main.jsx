import React from 'react';

import IntroBlock from './introBlock/introBlock';
import WhoAmIBlock from './whoAmIBlock/whoAmIBlock';
import ProjectsBlock from './projectsBlock/projectsBlock';
import ContactsBlock from './contactBlock/contactBlock';

import '../assets/sass/Main.scss';


const Main = (props) => {
    return (
        <div class="main">
            <IntroBlock></IntroBlock>
            <WhoAmIBlock></WhoAmIBlock>
            <ProjectsBlock></ProjectsBlock>
            <ContactsBlock></ContactsBlock>
        </div>
    );
}

export default Main;