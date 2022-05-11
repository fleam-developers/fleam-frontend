import React from "react";

import "./ContentImage.scss";

export default function ContentImage(props) {
  return (
    <div className="image-card">
      <img className="image" alt={"imageAlt"} src={props.image} />
    </div>
  );
}
