import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import ContentDetails from "../component/ContentDetails/ContentDetails";
import ContentImage from "../component/ContentImage/ContentImage";
import HorizontalScrollView from "../component/HorizontalScrollView/HorizontalScrollView";
import CommentSend from "../component/CommentSend/CommentSend";
import CommentAnswers from "../component/Comments/CommentList";
import { useDispatch, useSelector } from "react-redux";
import { fetchSelectedMovie } from "../stores/Movies";
import { Navigate, useParams } from "react-router-dom";

export default function ContentPage() {
  const { contentName } = useParams();

  const dispatch = useDispatch();
  const { loggedUser } = useSelector((state) => state.authentication);
  const { selectedMovie } = useSelector((state) => state.movies);
  // console.log(selectedMovie)

  useEffect(() => {
    dispatch(fetchSelectedMovie(contentName));
  }, [contentName]);
  
  if (!loggedUser) return <h1>LOADING...</h1>;
  if (!loggedUser.userType) return <Navigate to={"/login"}></Navigate>;
  // if (loggedUser.userType === "creator") return <Navigate to={`/creator/${loggedUser.userId}`}></Navigate>;

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
          <ContentImage image={selectedMovie.poster_url} />
          <HorizontalScrollView type="content" movies={selectedMovie.similar_movies} />
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
