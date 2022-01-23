import React from "react";
import logoIcon from "../../resource/logo-icon.png";
import logoText from "../../resource/logo-text.png";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: theme.spacing(0),
  },
  logoIcon: {
    height: "50px",
  },
  logoText: {
    height: "20px",
  },
}));
export default function Logo() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div
      className={classes.logo}
      style={{ cursor: "pointer" }}
      onClick={() => navigate("/")}
      alt="fleam"
    >
      <img src={logoIcon}  
      className={classes.logoIcon} 
      />

      <img
        src={logoText}
        className={classes.logoText}
      />
    </div>
  );
}
