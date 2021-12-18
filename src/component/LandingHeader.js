import React from "react";
import { makeStyles } from "@material-ui/core";
import { PermIdentity } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(4),
    backgroundColor: "black",
    textAlign: "center"
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    width: "10rem",
    height: "3rem",
    fontSize: "1.2rem",
    fontWeight: "bold"
  },
  title: {
    fontSize: "2.5rem",
  },
  subTitle: {
    fontSize: "2rem",
  },
  text: {
    fontSize: "1.5rem",
    marginBottom: theme.spacing(4)
  },
}));

export default function LandingHeader() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Card className={classes.card}>
      <h1 className={classes.title}>Unlimited movies, TV shows and more.</h1>
      <h2 className={classes.subTitle}>Watch anywhere. Cancel anytime.</h2>
      <div className={classes.text}>Ready to watch? Click the register button to create or restart your membership.</div>

      <Button
        className={classes.button}
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </Button>
    </Card>
  );
}
