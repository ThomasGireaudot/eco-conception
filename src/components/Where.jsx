import React, { useState } from 'react';
import Map from '../assets/map-interactive.webp';
import './Where.css';

const Where = () => {
    return (
        <div id='where' className="where">
            <div className='where-wrapper'>
                <h1 className='where-title'>Où nous trouver ?</h1>
                <div className='where-content'>
                    <img src={Map.src} alt="Elle logo" loading="lazy" className="where-content-image" />
                    <div className='where-content-addresses'>
                        <div className='where-content-addresse'>
                            <h2 className='where-content-addresse-title'>Lugnac</h2>
                            <a href='https://maps.app.goo.gl/PydgYYehUL4Nd9GZ6' target="_blank" rel="noopener noreferrer" className='where-content-addresse-text'>4 rue Censier, Paris 7</a>
                        </div>
                        <div className='where-content-addresse'>
                            <h2 className='where-content-addresse-title'>Aux Prés</h2>
                            <a href='https://maps.app.goo.gl/8EEXB2iN7Q8bwKan8' target="_blank" rel="noopener noreferrer" className='where-content-addresse-text'>Boulevard de l’Hôpital, Paris 15</a>
                        </div>
                        <div className='where-content-addresse'>
                            <h2 className='where-content-addresse-title'>Le Chardenoux</h2>
                            <a href='https://maps.app.goo.gl/FDihgpmRh68HdyiU7' target="_blank" rel="noopener noreferrer" className='where-content-addresse-text'>15 rue du Jura, Paris 11</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Where;
