import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Button } from '@mui/material';
import './Carousel.css'

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
        <div className='carousel-div'>
          <Button onClick={goToPrevious}>Previous</Button>
          <img src={images[currentIndex]} alt="Carousel" />
          <Button onClick={goToNext}>Next</Button>
        </div>
    )
}

export default Carousel;