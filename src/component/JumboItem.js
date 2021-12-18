import React from "react";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1),
    padding: theme.spacing(4),
    backgroundColor: "black",
    
  },
  image: {
    width: "100%",
  },
  title: {
      fontSize: "2.5rem",
  },
  subTitle: {
        fontSize: "1.5rem",
  },
  centeredText: {
    textAlign: "center",
    display: "flex",
    flexDirection:"column",
    justifyContent: "center"
  }
}));

export default function JumboItem(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Box >
        <Grid container spacing={4}>
          <Grid item xs={8} className={classes.centeredText} >
            <h1 className={classes.title}>{props.title}</h1>
            <div className={classes.subTitle} >{props.subTitle}</div>
          </Grid>
          <Grid item xs={4}>
            <img src={props.image} alt={props.alt} className={classes.image} />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
