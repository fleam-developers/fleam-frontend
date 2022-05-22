import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

import background from "../../img/cinema2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addNewCreator, fetchAllCreators } from "../../stores/CreatorList";

export default function BeCreatorHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loggedUser } = useSelector((state) => state.authentication);

  useEffect(() => {
    dispatch(fetchAllCreators());
  }, []);

  if (!loggedUser) {
    return <h1>LOADING...</h1>;
  }

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
            if (loggedUser.userType === "user") {
              addNewCreator(loggedUser.username);
              navigate("/creator");
            }
          }}
        >
          Be Creator
        </Button>
      </Card>
    </div>
  );
}
