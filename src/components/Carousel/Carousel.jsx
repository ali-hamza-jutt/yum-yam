// src/Carousel.js
import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ photos, textArray }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % photos.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + photos.length) % photos.length
    );
  };

  // To display 9 photos in a circular manner
  const visiblePhotos = [];
  for (let i = 0; i < 9; i++) {
    visiblePhotos.push(photos[(currentIndex + i) % photos.length]);
  }

  // To display corresponding text from textArray
  const visibleTexts = [];
  for (let i = 0; i < 9; i++) {
    visibleTexts.push(textArray[(currentIndex + i) % photos.length]);
  }

  return (
    <div className="carousel-container">
        <h4>Personalize you Experience</h4>
        <h1>Tell us your favourite cuisines</h1>
    <div className="carousel">
      <button className="arrow left-arrow" onClick={handlePrev}>❮</button>
      <div className="photo-container">
        <div
          className="photo-list"
          style={{
            transform: `translateX(0%)`,
            transition: 'transform 0.5s ease'
          }}
        >
          {visiblePhotos.map((photo, index) => (
            <div key={index} className="photo">
              <img src={photo} alt={`Slide ${index}`} />
              <div className="text-overlay">{visibleTexts[index]}</div>
            </div>
          ))}
        </div>
      </div>
      <button className="arrow right-arrow" onClick={handleNext}>❯</button>
    </div>
    <button className='find-cuisine'>Find Your Ideal Cuisines</button>
    </div>
  );
};

export default Carousel;
