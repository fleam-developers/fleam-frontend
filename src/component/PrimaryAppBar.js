import React, { useState, useEffect } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { AccountCircle, ExitToApp, PermIdentity } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { InputBase } from "@material-ui/core";
import { AuthService } from "../service/AuthService";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 0,
    marginLeft: theme.spacing(1),
  },
  search: {
    flexGrow: 1,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.text.primary, 0.05),
    "&:hover": {
      backgroundColor: alpha(theme.palette.text.primary, 0.2),
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(50),
      marginRight: theme.spacing(50),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchInputRoot: {
    color: "inherit",
  },
  searchInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },

  appBar: {},
}));

export default function PrimaryAppBar() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(AuthService.hasLoggedIn());
  
  return (
    <div className={classes.grow}>
      <AppBar position="fixed" variant="outlined" className={classes.appBar}>
        <Toolbar>
        <Logo/>

          <Typography
            variant="h6"
            style={{ color: "#00e3aa", fontWeight: "bold", cursor: "pointer" }}
            className={classes.title}
            onClick={() => navigate("/feed/Popular")}
          ></Typography>

            {userLoggedIn ? (<div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search anything…"
              classes={{
                root: classes.searchInputRoot,
                input: classes.searchInput,
              }}
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
          </div>) : <div className={classes.search}/>}
          
          
          <Button
            onClick={() => {
                navigate("/register");
            }}
          >
            {userLoggedIn ? null: <> Register  <PermIdentity/></>}
          </Button>

          <Button
            onClick={() => {
              if (userLoggedIn) {
                navigate(`/profile/${AuthService.getUsername()}`);
              } else {
                navigate("/login");
              }
            }}
          >
            {userLoggedIn ? <>Profile<AccountCircle /></>: <> Login  <ExitToApp/></>}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
