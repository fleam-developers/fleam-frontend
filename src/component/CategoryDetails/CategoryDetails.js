import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentCard from "../ContentCard/ContentCard";
import CategoryGroup from "@mui/material/Card";
import { Grid } from "@mui/material";
import { fetchAllMovies, fetchSelectedMovie } from "../../stores/Movies";

import "./CategoryDetails.scss";
import { fetchSelectedCategory } from "../../stores/Categories";
import { useParams } from "react-router-dom";

export default function CategoryDetails() {
  const {categoryName} = useParams()
  // const [selectedCategory, setSelectedCategory] = useState("Selected Category");
  //const [movies, setMovies] = React.useState(props.category);

  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(fetchSelectedCategory(categoryName));
  }, []);

  if (!selectedCategory) {
    return <h1>LOADING...</h1>;
  }
  console.log(selectedCategory.movies);
  return (
    <div>
      <div>
        {selectedCategory ? <h2 className="search-value">Selected Category: " {selectedCategory.name} "</h2> : null}

        <CategoryGroup className="category-details-group">
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {selectedCategory.movies.map((item, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <ContentCard
                  itemId={item.id}
                  title={item.name}
                  key={item.id}
                  recommended={false}
                  imageSource={item.image}
                  imageAlt={item.name}
                ></ContentCard>
              </Grid>
            ))}
          </Grid>
        </CategoryGroup>
      </div>
    </div>
  );
}
