import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ContentCard from "../component/ContentCard/ContentCard";
import CategoryGroup from "@mui/material/Card";
import HorizontalScrollView from "../component/HorizontalScrollView/HorizontalScrollView";
import HorizontalScrollViews from "../component/HorizontalScrollView/HorizontalScrollViews";
import { fetchSearchedCategories } from "../stores/Categories";

export default function SearchPage() {
  const params = useParams();
  // const [items, setItems] = React.useState(props.movies);
  const { loading, error, categories } = useSelector((state) => state.categories);
  console.log(categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchedCategories(params.searchedKey));
  }, []);

  if (!categories) {
    return <h1>LOADING...</h1>;
  }
  return (
    <div>
      {/* <HorizontalScrollViews type="search" categories={categories} searchedKey={params.searchedKey} /> */}
      {/* <HorizontalScrollView type="search"  {...categories} /> */}
      <CategoryGroup className="category-details-group">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {categories.map((movie, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              <ContentCard
                itemId={movie.id}
                title={movie.name}
                key={movie.id}
                recommended={false}
                imageSource={movie.poster_url}
                imageAlt={movie.name}
              ></ContentCard>
            </Grid>
          ))}
        </Grid>
      </CategoryGroup>
    </div>
  );
}
