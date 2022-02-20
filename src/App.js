import './App.css';
import MainRouter from "./router/MainRouter";
import React from 'react';
import {createTheme, ThemeProvider, adaptV4Theme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from "@mui/material/useMediaQuery";

export const darkTheme = {
  palette: {
    mode: 'dark',
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
    mode: 'light',
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
      createTheme(adaptV4Theme(
        prefersDarkMode ? darkTheme : lightTheme,
      ),
    [prefersDarkMode],
  ));
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
