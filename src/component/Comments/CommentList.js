import React, { useEffect } from "react";

import "./Comments.scss";
import { Divider, Avatar, Grid, Paper } from "@mui/material";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllComments } from "../../stores/CommentList";

export default function CommentAnswer() {

  const dispatch = useDispatch();
  const { loading, error, comments } = useSelector((state) => state.comments);
  
  useEffect(() => {
    dispatch(fetchAllComments());
  }, []);
  if (!comments) {
    if (loading) return <h1>LOADING...</h1>;
    return <div>LOADING...</div>;
  }


  return (
    <div className="App">
      {comments[0].comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
}
