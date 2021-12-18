import './App.css';
import MainRouter from "./router/MainRouter";
import React from 'react';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ThemeOptions } from '@material-ui/core/styles/createTheme';


export const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#202020',
    },
    secondary: {
      main: '#ff0000',
    },
  },
};

export const lightTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#202020',
    },
    secondary: {
      main: '#ff0000',
    },
  },
};

function Theme() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme(
        prefersDarkMode ? darkTheme : lightTheme,
      ),
    [prefersDarkMode],
  );
  return theme;

}

function App() {
  return (
    <ThemeProvider theme={Theme()}>
    <div className="App">
      <CssBaseline/>
      <MainRouter />
    </div>
    </ThemeProvider>
  );
}

export default App;
