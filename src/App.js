import "./App.scss";
import MainRouter from "./router/MainRouter";
import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import './App.scss';
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser } from "./stores/Authentication";

export const darkTheme = {
  palette: {
    mode: "dark",
    primary: {
      main: "#202020",
    },
    secondary: {
      main: "#ff0000"
    },
    text: {
      main: "#0000ff"
    },
  },
};

export const lightTheme = {
  palette: {
    mode: "light",
    primary: {
      main: "#202020",
    },
    secondary: {
      main: "#ff0000",
    },
  },
};

// function Theme() {
//   const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
//   console.log("prefersDarkMode: ", prefersDarkMode);
//   const theme = React.useMemo(() => createTheme(prefersDarkMode ? darkTheme : lightTheme), [prefersDarkMode]);
//   return theme;
// }

function App() {
  const { dark } = useSelector((state) => state.site);
  

  const theme = React.useMemo(() => createTheme(dark ? darkTheme : lightTheme));
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLoggedUser());
  }, []);
  

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <MainRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
