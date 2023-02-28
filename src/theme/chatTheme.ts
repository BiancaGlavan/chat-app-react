import { createTheme } from "@mui/material/styles";

const chatTheme = createTheme({
    palette: {
        background: {
            default: "#fff",
            paper: "#fff"
        },
        text :{
            primary: "#2f2e41",
            
        },
        primary: {
            main: "#42516a",
        },
        secondary: {
            main: "#e9d5d8"
        }
    },
    typography : {
        fontFamily: "Poppins",
    }
});


export default chatTheme;