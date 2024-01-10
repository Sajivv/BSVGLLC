import { deepOrange, yellow } from "@mui/material/colors";
import {createTheme} from "@mui/material/styles";

const carouselTheme = createTheme({
    carouselDiv: {
        width: "100px", 
        height: "200px"

    },
    img: {
        width: "100%",
        height: "100%",
        "object-fit": "cover"
    },
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

export default carouselTheme;