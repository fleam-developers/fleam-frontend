import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { AccountCircle, ExitToApp, PermIdentity } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { InputBase } from "@mui/material";
//import { AuthService } from "../../service/AuthService";
import Logo from "../Logo/Logo";
import { useDispatch, connect, useSelector } from "react-redux";
import { setDarkMode, setLanguage } from "../../stores/Site";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import "./PrimaryAppBar.scss";
import "../Headers/Headers.scss";
import { fetchDashboardData } from "../../stores/dashboardSlice";

function PrimaryAppBar({ dark, language, setDarkMode, setLanguage }) {
  const navigate = useNavigate();
  const data = useSelector((state) => state);
  console.log(data);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(dispatch(fetchDashboardData()));
  // }, []);

  const [searchQuery, setSearchQuery] = useState("");
  //const [userLoggedIn, setUserLoggedIn] = useState(AuthService.hasLoggedIn());
  const { loggedUser, isLogged } = useSelector((state) => state.authentication);

  return (
    <div className="grow">
      <AppBar position="fixed" variant="outlined">
        <Toolbar>
          <Logo />
          <Typography
            variant="h6"
            style={{ color: "#00e3aa", fontWeight: "bold", cursor: "pointer" }}
            className="title"
            onClick={() => navigate("/feed/Popular")}
          ></Typography>
          {isLogged ? (
            <div className="search">
              <div className="searchIcon">
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search anything…"
                className="searchInputRoot searchInput"
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                }}
                onKeyUp={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    navigate(`/search/${searchQuery}`);
                  }
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          ) : (
            <div className="search" />
          )}
          <Button style={{ color: "white", width: 0 }} onClick={() => setDarkMode()}>
            {dark ? <Brightness7Icon /> : <Brightness4Icon />}
          </Button>

          {isLogged ? (
            <>
              <Button variant="raised" onClick={() => navigate(`/profile`)}>
                <AccountCircle />
              </Button>
              {loggedUser === "user" ? (
                <Button className="button" variant="raised" onClick={() => navigate(`/profile`)}>
                  Be Creator
                </Button>
              ) : null}
              {loggedUser === "creator" ? (
                <Button variant="raised" onClick={() => navigate(`/profile`)}>
                  <AccountCircle />
                </Button>
              ) : null}
              {loggedUser === "admin" ? (
                <Button variant="raised" onClick={() => navigate(`/profile`)}>
                  <AccountCircle />
                </Button>
              ) : null}
            </>
          ) : (
            <>
              <Button
                className="button"
                color="primary"
                variant="raised"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register &nbsp; <PermIdentity />
              </Button>
              <Button
                className="button"
                variant="raised"
                onClick={() => {
                  navigate("/login");
                  // if (isLogged) {
                  //   //navigate(`/profile/${AuthService.getUsername()}`);
                  // } else {
                  //   navigate("/login");
                  // }
                }}
              >
                Login &nbsp; <ExitToApp />
                {/* {isLogged ? (
                  <>
                    Profile
                    <AccountCircle />
                  </>
                ) : (
                  <>
                    {" "}
                    Login <ExitToApp />
                  </>
                )} */}
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  dark: state.site.dark,
  language: state.site.language,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    setDarkMode: () => dispatch(setDarkMode()),
    setLanguage: () => dispatch(setLanguage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryAppBar);
