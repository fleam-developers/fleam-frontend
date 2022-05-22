import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import ContentDetails from "../component/ContentDetails/ContentDetails";
import ContentImage from "../component/ContentImage/ContentImage";
import HorizontalScrollView from "../component/HorizontalScrollView/HorizontalScrollView";
import CommentSend from "../component/CommentSend/CommentSend";
import CommentAnswers from "../component/Comments/CommentList";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMovies, fetchSelectedMovie } from "../stores/Movies";
import { useParams } from "react-router-dom";

export default function ContentPage() {
  const { contentName } = useParams();

  const dispatch = useDispatch();
  const { selectedMovie } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchSelectedMovie(contentName));
  }, [contentName]);
  
  if (!selectedMovie) {
    return <div>LOADING...</div>;
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {/* <div  style={{ display: "flex", flexDirection: "row" }}>
            <Grid item xs={4}>
              <ContentImage image={selectedMovie.image} />
            </Grid>
            <Grid item xs={8}>
              <h1>Lord of The Ducks</h1>
              <h3>Warner Bros.</h3>
            </Grid>
          </div> */}
          <ContentImage image={selectedMovie.image} />
          <HorizontalScrollView type="content" movies={selectedMovie.recommendedMovies} />
          <CommentSend />
          <CommentAnswers comments={selectedMovie.comments} />
        </Grid>
        <Grid item xs={4}>
          <ContentDetails details={selectedMovie}></ContentDetails>
        </Grid>
      </Grid>
    </Container>
  );
}
