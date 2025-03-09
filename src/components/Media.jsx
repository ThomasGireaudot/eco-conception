import React, { useState } from 'react';
import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/facebook.svg'
import Linkedin from '../assets/linkedin.svg'
import './Media.css';

const Media = () => {
    return (
        <div className="media">
            <div className='media-wrapper'>
                <h2 className="media-title">Retrouvez-nous</h2>
                <div className="media-icons">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={Instagram.src} alt="Elle logo" loading="lazy" className="media-icon" /></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src={Linkedin.src} alt="Elle logo" loading="lazy" className="media-icon" /></a>
                    <a href="https://fr-fr.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={Facebook.src} alt="Elle logo" loading="lazy" className="media-icon" /></a>
                </div>
            </div>
        </div>
    );
};

export default Media;
