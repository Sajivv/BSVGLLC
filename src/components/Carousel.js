import React, { useState } from 'react';

function Carousel({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
      const isFirstImage = currentIndex === 0;
      const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const goToNext = () => {
      const isLastImage = currentIndex === images.length - 1;
      const newIndex = isLastImage ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    return (
      <div>
        <button onClick={goToPrevious}>Previous</button>
        <img src={images[currentIndex]} alt="Carousel" />
        <button onClick={goToNext}>Next</button>
      </div>
    )
}

export default Carousel;