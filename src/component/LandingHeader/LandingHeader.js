import React from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

import "./LandingHeader.scss";

export default function LandingHeader() {
  const navigate = useNavigate();

  return (
    <Card className="landing-header-card">
      <h1 className="landing-header-title">Unlimited movies, TV shows and more.</h1>
      <h2 className="landing-header-subTitle">Watch anywhere. Cancel anytime.</h2>
      <div className="landing-header-text">Ready to watch? Click the register button to create or restart your membership.</div>

      <Button
        className="landing-header-button"
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </Button>
    </Card>
  );
}
