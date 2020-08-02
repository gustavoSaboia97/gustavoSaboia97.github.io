import React from 'react';

import BlockContent from '../block/block';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';


library.add(faLinkedin, faGithub, faEnvelope, faPhoneSquareAlt);

const ContactBlock = (props) => {
    return (
        <BlockContent id="contact-block" color="portfolio-contact-block background-color-white">
            <div class="title">
                Contacts
            </div>
            <div class="icons">
                <a href="https://www.linkedin.com/in/gustavosaboia97/"><div class="black-text icon"><FontAwesomeIcon icon={faLinkedin} /></div></a>
                <a href="https://github.com/gustavoSaboia97/"><div class="black-text icon"><FontAwesomeIcon icon={faGithub} /></div></a>
                <a href="mailto:gustavosaboia97@hotmail.com"><div class="black-text icon"><FontAwesomeIcon icon={faEnvelope} /></div></a>
                <a href="tel:+5522992318796"><div class="black-text icon"><FontAwesomeIcon icon={faPhoneSquareAlt} /></div></a>
            </div>
        </BlockContent>
    );
}

export default ContactBlock;