import {createTheme} from "@mui/material/styles";
// import EuclidCircularARegular from '../../fonts/EuclidCircularA-Regular.ttf';
import {grey} from "@mui/material/colors";

const lightTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarColor: "#222222 #222222",
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        backgroundColor: "#222222",
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        borderRadius: 8,
                        backgroundColor: "#222222",
                        minHeight: 24,
                        border: "3px solid #FCF9F2",
                    },
                    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                        backgroundColor: "#222222",
                    },
                    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                        backgroundColor: "#222222",
                    },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "#222222",
                    },
                    "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                        backgroundColor: "#222222",
                    },
                },
            }
        }
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: '#f9a34f',
        },
        background: {
            default: '#E5E5E5',
            paper: '#ffffff'
        },
        text: {
            primary: grey["700"],
            secondary: grey["500"]
        }
    },
    typography: {
        fontFamily: 'Chakra Petch, GoogleSansRegular, EuclidCircularA,  PlusJakartaSansExtraBold'
    },
    shape: {
        borderRadius: 32
    }
});

const darkTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarColor: "#222222 #222222",
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        backgroundColor: "#222222",
                        width: 16,
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        borderRadius: 8,
                        backgroundColor: "#f9a34f",
                        border: "4px solid #222222",
                        height: 8
                    },
                    "&::-webkit-scrollbar-track-piece, & *::-webkit-scrollbar-track-piece": {
                        borderRadius: 8,
                        backgroundColor: "#303030",
                    },
                    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                        backgroundColor: "#f48010",
                    },
                    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                        backgroundColor: "#f48010",
                    },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "#f48010",
                    },
                    "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                        backgroundColor: "#f9a34f",
                    },
                },
            }
        }
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#f9a34f',
        },
        background: {
            default: '#222222',
            paper: '#303030',
        },
        text: {
            primary: grey["100"],
            secondary: grey["200"]
        }
    },
    typography: {
        fontFamily: 'Chakra Petch, GoogleSansRegular, EuclidCircularA, PlusJakartaSansExtraBold'
    },
    shape: {
        borderRadius: 4
    }
});


export const THEMES = {
    lightTheme,
    darkTheme
}
