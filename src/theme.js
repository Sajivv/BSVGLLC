import { deepOrange, yellow } from "@mui/material/colors";
import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: deepOrange,
        secondary: {
            main: yellow[100],
            dark: yellow[900]
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: "contained",
            },
            styleOverrides: {
                root: {
                    color: '#000',
                    mr: 2,
                    '&:hover': { backgroundColor: 'green' },
                }
            }
        }
    }
})

export default theme;