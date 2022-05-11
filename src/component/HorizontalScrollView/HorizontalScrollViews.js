import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../../stores/Categories";
import HorizontalScrollView from "./HorizontalScrollView";

import "./HorizontalScrollView.scss";

export default function HorizontalScrollViews(props) {
  const [searchValue, setSearchValue] = useState("Search Value");
  
  const dispatch = useDispatch();
  const { loading, error, categories } = useSelector((state) => state.categories);
  
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);
  
  if (!categories) {
    if (loading) return <h1>LOADING...</h1>;
    return <div>LOADING...</div>;
  }

  return (
    <div>
      {searchValue && props.type === "search" ? <h2 className="search-value">searched content: "{searchValue}"</h2> : null}
      {categories.map((category) => (
        <HorizontalScrollView type={props.type} key={category.id} {...category} />
      ))}
    </div>
  );
}
