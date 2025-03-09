import React, { useState } from 'react';
import ElleImage from '../assets/logo-elle.svg';
import Lemonde from '../assets/logo-lemonde.svg';
import Vogue from '../assets/logo-vogue.svg';
import Cntraveler from '../assets/logo-cntraveler.svg';
import Foupat from '../assets/fou-patesserie.svg';
import './Aboutus.css';

const Aboutus = () => {
    return (
        <div className="aboutus">
            <h1 className='aboutus-title'>On parle de nous</h1>
            <p className='aboutus-text'>Nos dernières parutions dans la presse et sur internet.</p>
            <div className='aboutus-list'>
                <img src={ElleImage.src} alt="Elle logo" loading="lazy" className="aboutus-list-image" />
                <img src={Lemonde.src} alt="Le monde logo" loading="lazy" className="aboutus-list-image" />
                <img src={Vogue.src} alt="Vogue logo" loading="lazy" className="aboutus-list-image" />
                <img src={Cntraveler.src} alt="traveler logo" loading="lazy" className="aboutus-list-image" />
                <img src={Foupat.src} alt="fou patisserie logo" loading="lazy" className="aboutus-list-image" />
            </div>
        </div>
    );
};

export default Aboutus;
