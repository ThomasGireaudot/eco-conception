import React, { useState } from 'react';
import Chief1 from '../assets/le-chef-1.webp'
import Chief2 from '../assets/le-chef-2.webp'
import './Chief.css';

const Chief = () => {

    return (
        <div id='chief' className="chief">
            <div className='chief-content'>
                <p className='chief-content-title'>Le chef</p>
                <p className='chief-content-text'>Philippe Lugnac s’amuse autant à inventer qu’à réinventer, faire briller le répertoire classique parisien, visiter de nouvelles terres avec attention et donner de l’éclat aux soirées festives qui se prolongent.</p>
                <img src={Chief1.src} alt="Cook" loading="lazy" className='chief-content-image' />
            </div>
            <div className='chief-imagew'>
            <img src={Chief2.src} alt="Cook" loading="lazy" className='chief-image' />
            </div>
        </div>
    );
};

export default Chief;
