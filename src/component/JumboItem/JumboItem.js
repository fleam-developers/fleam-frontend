import React from "react";
import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";

import "./JumboItem.scss";

export default function JumboItem(props) {
  return (
    <div className="jumbo-item-card">
      <Box >
        <Grid container spacing={4}>
          <Grid item xs={8} className="centeredText" >
            <h1 className="title">{props.title}</h1>
            <div className="subTitle" >{props.subTitle}</div>
          </Grid>
          <Grid item xs={4}>
            <img src={props.image} alt={props.alt} className="image" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
