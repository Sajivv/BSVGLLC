import React from 'react';
import BSVGNavBar from '../components/BSVGNavBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'

class HomePage extends React.Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <BSVGNavBar/>
            </ThemeProvider>
        )
    }


}

export default HomePage