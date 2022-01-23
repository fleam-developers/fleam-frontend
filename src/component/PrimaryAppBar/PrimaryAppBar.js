import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { AccountCircle, ExitToApp, PermIdentity } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { InputBase } from "@mui/material";
import { AuthService } from "../../service/AuthService";
import Logo from "../Logo/Logo";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    
    marginLeft: theme.spacing(2)
  },
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
          <Logo />

          <Typography
            variant="h6"
            style={{ color: "#00e3aa", fontWeight: "bold", cursor: "pointer" }}
            className={classes.title}
            onClick={() => navigate("/feed/Popular")}
          ></Typography>

          {userLoggedIn ? (
            <div className={classes.search}>
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
            </div>
          ) : (
            <div className={classes.search} />
          )}

          <Button
            className={classes.button}
            onClick={() => {
              navigate("/register");
            }}
          >
            {userLoggedIn ? null : (
              <>
                {" "}
                Register <PermIdentity />
              </>
            )}
          </Button>

          <Button
            className={classes.button}
            onClick={() => {
              if (userLoggedIn) {
                navigate(`/profile/${AuthService.getUsername()}`);
              } else {
                navigate("/login");
              }
            }}
          >
            {userLoggedIn ? (
              <>
                Profile
                <AccountCircle />
              </>
            ) : (
              <>
                {" "}
                Login <ExitToApp />
              </>
            )}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
