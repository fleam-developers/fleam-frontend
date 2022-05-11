import React from "react";

import "./Comments.scss";
import Comment from "./Comment";

export default function CommentAnswers(props) {

  return (
    <div className="App">
      {props.comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
}
