import React from 'react';
import BSVGNavBar from '../components/BSVGNavBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'
import Carousel from '../components/Carousel';

function HomePage (props) {
    const images = [
        '/images/MT Employee and Cabin Photos-50.jpg',
        '/images/MT Employee and Cabin Photos-51.jpg',
        '/images/MT Employee and Cabin Photos-49.jpg',
        '/images/MT Employee and Cabin Photos-52.jpg'
    ]
        return (
            <ThemeProvider theme={theme}>
                <BSVGNavBar/>
                <Carousel images={images}/>
            </ThemeProvider>
        )


}

export default HomePage