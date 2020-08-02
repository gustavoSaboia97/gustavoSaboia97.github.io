import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import BlockContent from '../block/block';

library.add(faLaptopCode, faChevronDown);

const IntroBlock = (props) => {
    return (
        <BlockContent id="intro-block" color="portfolio-intro-block background-color-black">
            <div class="main-intro-block-text white-text">Gustavo Saboia</div>
            <div class="smaller-intro-block-text  white-text">Fullstack Developer</div>
            <div class="intro-block-computer-icon white-text"><FontAwesomeIcon icon={faLaptopCode} /></div>
            <a href="#who-am-i-block" class="next-page-icon white-text"><div class="white-text"><FontAwesomeIcon icon={faChevronDown} /></div></a>
        </BlockContent>
    );
}

export default IntroBlock;