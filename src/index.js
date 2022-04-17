import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CONSTANTS} from "./utils/constants/constants";
import {THEMES} from "./utils/themes/themes";
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";


const variant = localStorage.getItem(CONSTANTS.WINDY_CRAFT_ADMIN_THEME_KEY) ? JSON.parse(localStorage.getItem(CONSTANTS.WINDY_CRAFT_ADMIN_THEME_KEY)) : 'dark';
ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <ThemeProvider theme={variant === 'dark' ? THEMES.darkTheme : THEMES.lightTheme}>
                  <CssBaseline />
                  <App/>
              </ThemeProvider>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

