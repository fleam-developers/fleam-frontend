import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import ContentCard from "../ContentCard/ContentCard";
import { LeftArrow, RightArrow } from "./Arrow";
import CategoryGroup from "@mui/material/Card";
import { useNavigate } from "react-router-dom";

import "./HorizontalScrollView.scss";

export default function HorizontalScrollView(props) {
  const navigate = useNavigate();
  const [items, setItems] = React.useState(props.movies);
  // const [selected, setSelected] = React.useState([]);
  // const [position, setPosition] = React.useState(0);

  // const isItemSelected = (id) => !!selected.find((el) => el === id);
  // const handleClick =
  //   (id) =>
  //   ({ getItemById, scrollToItem }) => {
  //     const itemSelected = isItemSelected(id);

  //     setSelected((currentSelected) =>
  //       itemSelected ? currentSelected.filter((el) => el !== id) : currentSelected.concat(id)
  //     );
  //   };
  // console.log(props)
  console.log(props)
  if (!items.length) {
    return <></>;
  }
  
  return (
    <CategoryGroup className="categoryGroup">
      {/* {props.name ? (
        <div className="title category">{props.name}</div>
      ) : (
        props.type ? <div className="title category">Manage Your Contents</div> : <div className="title recommended">Recommended</div>
      )} */}

      {props.type === "home" ? (
        <div
          className="title category link"
          onClick={() => {
            navigate(`/category/${props.id}`);
          }}
        >
          {props.name}
        </div>
      ) : null}
      {props.type === "category" ? <div className="title category">{props.name}</div> : null}
      {props.type === "creator" ? <div className="title category">Manage Your Contents</div> : null}
      {props.type === "content" ? <div className="title recommended">Recommended</div> : null}
      {props.type === "search" ? (
        <div
          className="title category link"
          onClick={() => {
            navigate(`/category/${props.id}`);
          }}
        >
          {props.name}
        </div>
      ) : null}

      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        options={{
          ratio: 0.5,
          rootMargin: "5px",
          threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1],
        }}
      >
        {items.map((item) =>
          item.poster_url ? (
            <ContentCard
              itemId={item.id}
              title={item.name}
              key={item.id}
              // selected={isItemSelected(item.id)}
              recommended={props.type === "content" ? true : false}
              imageSource={item.poster_url}
              imageAlt={item.name}
            ></ContentCard>
          ) : (
            <></>
          )
        )}
      </ScrollMenu>
    </CategoryGroup>
  );
}
