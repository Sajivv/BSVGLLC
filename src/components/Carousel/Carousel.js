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
      <div className='carousel-parent-div'>
        <div className='imgs-div'>
          <img src={images[currentIndex]} alt="Carousel" style={{width: "100%", objectFit: "fill"}}/>
        </div>
        <div className='buttons-div'>
          <Button onClick={goToPrevious} color="success">Previous</Button>
          <Button onClick={goToNext} color="success">Next</Button>
        </div>
      </div>
    )
}

export default Carousel;