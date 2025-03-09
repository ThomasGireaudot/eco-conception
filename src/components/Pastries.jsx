import React, { useState } from 'react';
import PastriesImage from '../assets/nos-patisseries.webp'
import './Pastries.css';

const Pastries = () => {

    return (
        <div id='pastries' className="pastries">
            <div className="pastries-wrapper">
                <div className='pastries-imagew'><img src={PastriesImage.src} alt="Cook" loading="lazy" className='pastries-image' /></div>
                <div className='pastries-content'>
                    <p className='pastries-content-title'>Nos <br/>pâtisseries</p>
                    <p className='pastries-content-text'>Créations originales, grands classiques revisités, gâteaux de voyage ou pour vos événements, découvrez le catalogue de nos produits disponibles en boutique...</p>
                </div>
            </div>
        </div>
    );
};

export default Pastries;
