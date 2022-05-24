import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Rating, Typography } from "@mui/material";
import Button from "@mui/material/Button";

import "./ContentDetails.scss";

function average(stars) {
  var sum = 0;
  for (var i = 0; i < stars.length; i++) sum += stars[i];
  return parseFloat(sum / stars.length);
}

export default function ContentDetails(props) {
  const navigate = useNavigate();
  const { contentName } = useParams();
  const [value, setValue] = React.useState(2);
  
  // console.log(props.details);
  return (
    <Card className="details-card">
      <h2 style={{ marginBottom: "8px" }}>{props.details.name}</h2>
      <div>
        <span style={{ opacity: "0.6" }}>who shared: </span>
        {props.details.contentCreator}
      </div>
      <Button
        className="play-button"
        onClick={() => {
          navigate(`/video/${props.details.id}`);
        }}
      >
        Play
      </Button>
      {/* <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        size="large"
      /> */}
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={props.details.averageRating} precision={0.1} readOnly size="large" />

      <div className="information">
        <h5 component="legend" className="title">
          Information about content:
        </h5>
        <div className="text">{props.details.description}</div>
      </div>

      {/* <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled size="large" />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} size="large" /> */}
    </Card>
  );
}
