import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import ContentCard from "../ContentCard/ContentCard";
import { LeftArrow, RightArrow } from "./Arrow";
import "./HorizontalScrollView.css";
import CategoryGroup from "@mui/material/Card";

const useStyles = makeStyles((theme) => ({
  categoryGroup: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(4, 0),
    backgroundColor: "black"
  },
  categoryTitle: {
    margin: theme.spacing(0, 0, 4, 8),
    fontSize: "2rem",
    fontWeight: "bold"
  }
}));

export default function HorizontalScrollView(props) {
  const [items, setItems] = React.useState(props.movies);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);
  const classes = useStyles();

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <CategoryGroup className={classes.categoryGroup}>
      <div className={classes.categoryTitle}>{props.name}</div>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}
      options={{
        ratio: 0.5,
        rootMargin: "5px",
        threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1]
      }}
      >
        {items.map((item) => (
          <ContentCard
            itemId={item.id} // NOTE: itemId is required for track items
            title={item.name}
            key={item.id}
            selected={isItemSelected(item.id)}
            imageSource={item.image}
            imageAlt={item.name}

          >
            
          </ContentCard>
        ))}
      </ScrollMenu>
    </CategoryGroup>
  );
}
