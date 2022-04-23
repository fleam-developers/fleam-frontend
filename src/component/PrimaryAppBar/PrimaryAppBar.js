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
import { AuthService } from "../../service/AuthService";
import Logo from "../Logo/Logo";

import "./PrimaryAppBar.scss";
import "../Headers/Headers.scss";

export default function PrimaryAppBar() {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(AuthService.hasLoggedIn());

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

          {userLoggedIn ? (
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
          <Button
            className="button "
            color="primary"
            variant="raised"
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
            className="button"
            variant="raised"
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
