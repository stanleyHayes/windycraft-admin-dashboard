import {createTheme} from "@mui/material/styles";
// import EuclidCircularARegular from '../../fonts/EuclidCircularA-Regular.ttf';
import GoogleSansRegular from '../../fonts/GoogleSans-Regular.ttf';
import {grey} from "@mui/material/colors";

const lightTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
              font-family: 'GoogleSansRegular';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('GoogleSansRegular'), local('GoogleSansRegular'), url(${GoogleSansRegular}) format('truetype');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
            `
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
        fontFamily: 'GoogleSansRegular, EuclidCircularA,  PlusJakartaSansExtraBold'
    },
    shape: {
        borderRadius: 32
    }
});

const darkTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
              font-family: 'GoogleSansRegular';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('EuclidCircularA'), local('GoogleSansRegular'), url(${GoogleSansRegular}) format('truetype');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
            `
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
        fontFamily: 'GoogleSansRegular, EuclidCircularA, PlusJakartaSansExtraBold'
    },
    shape: {
        borderRadius: 4
    }
});


export const THEMES = {
    lightTheme,
    darkTheme
}
