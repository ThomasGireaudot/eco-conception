import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div id='contact' className="contact">
            <h2 className="contact-title">Nous contacter</h2>
            <div className="contact-container">
                <div className="contact-left">
                    <p className='contact-left-text'>Pour toute réservation, nous vous invitions à contacter directement le restaurant par téléphone.</p>
                    <p className='contact-left-text'>* champs obligatoires.</p>

                    <label htmlFor="name">Nom / Prénom*</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="email">Adresse e-mail*</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="message">Message*</label>
                    <textarea id="message" name="message"></textarea>

                    <button type="submit" className="contact-button">Envoyer</button>
                </div>
                <div className="contact-right">
                    <h2>Nos coordonnées</h2>
                    <h3>Siège Lugnac</h3>
                    <p>4 rue Censier, Paris 7</p>
                    <p>Téléphone : +33 (0)1 42 56 11 26</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
