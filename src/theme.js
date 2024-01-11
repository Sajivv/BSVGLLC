import { deepOrange, yellow } from "@mui/material/colors";
import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#006314'
        },
        secondary: {
            main: yellow[100],
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
                }
            }
        }
    }
})

export default theme;