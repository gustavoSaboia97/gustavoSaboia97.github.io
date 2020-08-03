import React from 'react';

import BlockContent from '../block/block';

import myself from '../../assets/img/myself.jpg';


const WhoAmIBlock = (props) => {
    return (
        <BlockContent id="who-am-i-block" color="portfolio-who-am-i-block background-color-white">
            <div className="picture-block">
                <img className="myself-pic" src={`${myself}`} alt="Smiling Selfie" />
            </div>
            <div className="who-am-i">
                <div className="who-am-i-text">
                    Hi, I'm Gustavo. I am a software developer who lives in Rio de Janeiro. When I lived in Petrópolis, a city close to Rio, 
                    I had the opportunity to study and start working with computational tasks and I loved it.
                </div>
                <div className="who-am-i-text">
                    Since I started working with this, I try to study and improve myself to become a better professional. And I hope that 
                    one day I will be a reference for people who worked with me, just as I had some people as a reference in my career. 
                </div>
            </div>
        </BlockContent>
    );
}

export default WhoAmIBlock;