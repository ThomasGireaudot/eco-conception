import React, { useState } from 'react';
import Slide1 from '../assets/slide-1.webp';
import Slide2 from '../assets/slide-2.webp';
import Slide3 from '../assets/slide-3.webp';
import Slide4 from '../assets/slide-4.webp';
import Chevronright from '../assets/chevron-right.svg';
import Chevronleft from '../assets/chevron-left.svg';
import './Slideshow.css';

const EcoSlideshow = () => {

    const images = [
        Slide1,
        Slide2,
        Slide3,
        Slide4
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slideshow-container">
            <div className="slide">
                <img 
                src={images[currentIndex].src} 
                alt={images[currentIndex].alt} 
                loading="lazy"
                width="100%" 
                height="auto" 
                />
            </div>
            <div className='slide-btns'>
                <img onClick={prevSlide} src={Chevronleft.src} alt="chevron left" loading="lazy" className="prev-btn" />
                <img onClick={nextSlide} src={Chevronright.src} alt="chevron left" loading="lazy" className="next-btn" />
            </div>
            <div className='slide-texts'>
                <p className='slide-text'>&nbsp;“Nous travaillons à l’émotion</p>
                <p className='slide-text'>pour proposer des pâtisseries inscrites</p>
                <p className='slide-text'>dans la gourmandise et la modernité.“&nbsp;</p>
            </div>
        </div>
    );
};

export default EcoSlideshow;
