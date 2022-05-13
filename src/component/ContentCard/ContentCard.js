import React from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

import "./ContentCard.scss";

export default function ContentCard(props) {
  const navigate = useNavigate();
  
  return (
    <div
      className="root"
      onClick={() => {
        navigate(`/content/${props.itemId}`);
      }}
    >
      <img
        className={props.recommended ? "content-image recommended-image" : "content-image category-image"}
        key={props.itemId}
        alt={props.imageAlt}
        src={props.imageSource}
      />
      <div className={props.recommended ? "textOnImage textOnImage-recommended" : "textOnImage textOnImage-category"}>
        {props.title}
      </div>
    </div>
  );
}
