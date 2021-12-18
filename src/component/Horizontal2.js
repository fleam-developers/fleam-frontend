import React, { useState, useEffect } from "react";
import axios from "axios";
import ScrollContainer from "react-indiana-drag-scroll";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
    rowPosters: {
        display: "flex",
        overflowX: "scroll",
        overflowY: "hidden",
        padding: "20px"
    },
}));


export default function HorizontalScrollView(props) {
  const [movies, setMovies] = useState([]);
  const classes = useStyles();


  return (
    <div className="row">
      <h2>{props.name}</h2>
      <ScrollContainer className={classes.rowPosters}>
        {/* <div className="row__posters"> */}
        {props.movies.map((movie) => (
          <img
            onClick={() => {
              console.log(movie.id);
            }}
            key={movie.id}
            className={`row__poster`}
            alt={movie.name}
            src={movie.image}
          />
        ))}
        {/* </div> */}
      </ScrollContainer>
    </div>
  );
}