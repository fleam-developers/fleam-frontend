import React from "react";
import PrimaryAppBar from "../component/PrimaryAppBar/PrimaryAppBar";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  // Load app bar information from the theme
  toolbar: theme.mixins.toolbar,
}));

export default function VideoLayout(props) {
  const classes = useStyles();

  return (
    <Box>
      <Box>
        {/* Shift content by appbar width */}
        <div className={classes.toolbar} />
        {props.children}
      </Box>
    </Box>
  );
}
