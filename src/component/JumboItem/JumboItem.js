import React from "react";
import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";

import "./JumboItem.scss";

export default function JumboItem(props) {
  return (
    <div className="jumbo-item-card">
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12} className="centeredText">
            {props.title ? <h1 className="title">{props.title}</h1> : null}
            {props.subTitle ? <div className="subTitle">{props.subTitle}</div> : null}
            {props.subTitle && props.text ? <br></br> : null}
            {props.text ? <div className="portfolioText">{props.text}</div> : null}
          </Grid>
          {/* <Grid item xs={4}>
            <img src={props.image} alt={props.alt} className="image" />
          </Grid> */}
        </Grid>
      </Box>
    </div>
  );
}
