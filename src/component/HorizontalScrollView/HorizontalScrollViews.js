import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAllCategories } from "../../stores/Categories";
import HorizontalScrollView from "./HorizontalScrollView";

import "./HorizontalScrollView.scss";

export default function HorizontalScrollViews(props) {

  

  if (!props.movies) {
    return <div>LOADING...</div>;
  }

  return (
    <div>
      {props.searchedKey && props.type === "search" ? (
        <h2 className="search-value">searched content: "{props.searchedKey}"</h2>
      ) : null}
      {props.movies.map((category) => (
        <HorizontalScrollView type={props.type} key={category.id} {...category} />
      ))}
    </div>
  );
}
