import React from "react";
import HorizontalScrollView from "./HorizontalScrollView";

import "./HorizontalScrollView.scss";

export default function HorizontalScrollViews(props) {

  if (!props.categories) {
    return <h1>LOADING...</h1>;
  }
  return (
    <div>
      {props.searchedKey && props.type === "search" ? (
        <h2 className="search-value">searched content: "{props.searchedKey}"</h2>
      ) : null}
      {props.categories.map((category) => (
        <HorizontalScrollView type={props.type} key={category.id} {...category} />
      ))}
    </div>
  );
}
