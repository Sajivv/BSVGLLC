import React from 'react';
import BSVGNavBar from '../components/BSVGNavBar/BSVGNavBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'
import Carousel from '../components/Carousel/Carousel';
import './HomePage.css'
import BSVGNavBar2 from '../components/BSVGNavBar/BSVGNavBar2';
import Summaries from '../components/Summaries/Summaries';

function HomePage (props) {
    const images = [
        '/images/MT Employee and Cabin Photos-50.jpg',
        '/images/MT Employee and Cabin Photos-51.jpg',
        '/images/MT Employee and Cabin Photos-49.jpg',
        '/images/MT Employee and Cabin Photos-52.jpg'
    ]
        return (
            <ThemeProvider theme={theme}>
                <div className='parent-div'>
                    <BSVGNavBar/>
                    <Carousel images={images}/>
                    <Summaries/>
                </div>
            </ThemeProvider>
        )


}

export default HomePage