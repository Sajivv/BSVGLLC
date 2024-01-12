import { deepOrange, yellow } from "@mui/material/colors";
import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#006314'
        },
        secondary: {
            main: '#e8f6e8',
            dark: yellow[900]
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                
            },
            styleOverrides: {
                root: {
                    color: '#e6f6e9',
                    mr: 2,
                    '&:hover': { backgroundColor: 'green' },
                    fontFamily: 'sans-serif',
                    fontSize: '1rem', // Specify font size
                    fontWeight: 500,
                    textTransform: 'none'
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: '#e6f6e9'
                }
            }
        }
    }
})

export default theme;