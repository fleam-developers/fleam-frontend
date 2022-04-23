import React, { useState } from "react";
import HorizontalScrollView from "./HorizontalScrollView";

import "./HorizontalScrollView.scss";

export default function HorizontalScrollViews(props) {
  const [searchValue, setSearchValue] = useState("Search Value");

  return (
    <div>
      {searchValue ? <h2 className="search-value">searched content: "{searchValue}"</h2> : null}
      {props.categories.map((category) => (
        <HorizontalScrollView key={category.id} {...category} />
      ))}
    </div>
  );
}
