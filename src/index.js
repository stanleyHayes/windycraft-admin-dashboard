import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {THEMES} from "./utils/themes/themes";
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={THEMES.darkTheme}>
                    <CssBaseline/>
                    <App/>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

