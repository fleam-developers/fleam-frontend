import React from "react";
import { makeStyles } from "@mui/styles";

import "./ContentCard.scss";

export default function ContentCard(props) {

  console.log(props.recommended)
  return (
    <div className="root">
      <img
        className= {props.recommended ? "content-image recommended-image" : "content-image category-image"}
        key={props.id}
        alt={props.imageAlt}
        src={props.imageSource}
      />
      <div className= {props.recommended ? "textOnImage textOnImage-recommended" : "textOnImage textOnImage-category"}>{props.title}</div>
    </div>
  );
}
