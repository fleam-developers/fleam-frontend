import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

import background from "../../img/cinema2.jpg";

export default function BeCreatorHeader() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Card className="header-card" style={{ backgroundImage: `url(${background})` }}>
        <h1 className="header-title">Do you want to share your content?</h1>
        <h2 className="header-subTitle">Be creator and start sharing.</h2>
        <div className="header-text">
          Click on the Be Creator button, share the movie & series contents with the audience by using the possibilities
          of fleam.
        </div>

        <Button
          className="header-button"
          onClick={() => {
            navigate("/creator");
          }}
        >
          Be Creator
        </Button>
      </Card>
    </div>
  );
}
