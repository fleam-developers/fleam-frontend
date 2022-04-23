import React from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

import "./Headers.scss";

export default function LandingHeader() {
  const navigate = useNavigate();

  return (
    <Card className="header-card">
      <h1 className="header-title">Unlimited movies, TV shows and more.</h1>
      <h2 className="header-subTitle">Watch anywhere. Cancel anytime.</h2>
      <div className="header-text">Ready to watch? Click the register button to create or restart your membership.</div>

      <Button
        className="header-button"
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </Button>
    </Card>
  );
}
