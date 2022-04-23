import React, { useState } from "react";
import ContentCard from "../ContentCard/ContentCard";
import CategoryGroup from "@mui/material/Card";
import { Grid } from "@mui/material";

import "./CategoryDetails.scss";

export default function CategoryDetails(props) {
  const [selectedCategory, setSelectedCategory] = useState("Selected Category");
  const [movies, setMovies] = React.useState(props.category);

  return (
    <div>
      <div>
        {setSelectedCategory ? <h2 className="search-value">Selected Category: "{selectedCategory}"</h2> : null}
        
        <CategoryGroup className="categoryGroup">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
          >
            {movies.map((item, index) => (
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
