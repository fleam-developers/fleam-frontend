import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(1),
    transition: "opacity 0.1s ease-out 20ms",
    "&:hover": {
      opacity: 0.5,
    },
  },

  image: {
    width: "200px",
    height: "300px",
    overflow: "hidden",
    objectFit: "cover",
  },
  textOnImage: {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export default function ContentCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        key={props.id}
        alt={props.imageAlt}
        src={props.imageSource}
      />
      <div className={classes.textOnImage}>{props.title}</div>
    </div>
  );
}
