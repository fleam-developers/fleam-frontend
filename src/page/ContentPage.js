import { Container, Grid } from "@mui/material";
import React from "react";
import ContentDetails from "../component/ContentDetails/ContentDetails";
import ContentImage from "../component/ContentImage/ContentImage";
import HorizontalScrollView from "../component/HorizontalScrollView/HorizontalScrollView";

const dummyData = {
  movies: [
    {
      id: 1,
      name: "Fall",
      image:
        "https://resizing.flixster.com/ZLrK7Z-9s5SBmNTbTTn10HTELM0=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p176577_p_v10_ac.jpg",
    },
    {
      id: 2,
      name: "Solomon Kane",
      image:
        "https://resizing.flixster.com/ngeXAOYyG_OhwypP9TxXZb9Dy-0=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p8022770_p_v7_aj.jpg",
    },
    {
      id: 3,
      name: "The Forbidden Kingdom",
      image:
        "https://resizing.flixster.com/2UB2wjCooSKgsYX1ds_lVful3eo=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p173532_p_v10_ax.jpg",
    },
    {
      id: 4,
      name: "The Witches of Eastwick",
      image:
        "https://resizing.flixster.com/edCoXJESAiHxm_I9OglaQY2A7f8=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p10075_p_v10_ad.jpg",
    },
    {
      id: 5,
      name: "Miss Peregrine's Home For Peculiar Children",
      image:
        "https://resizing.flixster.com/a2m0wE6dyGt4beuKJJLQNiPIcEo=/fit-in/180x240/v2/https://resizing.flixster.com/WdXjAj2N97A_y9yLfR46bl1110Y=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzQwZjA0ZjI5LWJiYzctNGYxMy05MzJmLWZkY2MyYjZmNmMyZC53ZWJw",
    },
    {
      id: 6,
      name: "Lord of The Rings",
      image:
        "https://resizing.flixster.com/ZLrK7Z-9s5SBmNTbTTn10HTELM0=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p176577_p_v10_ac.jpg",
    },
    {
      id: 7,
      name: "Solomon Kane",
      image:
        "https://resizing.flixster.com/ngeXAOYyG_OhwypP9TxXZb9Dy-0=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p8022770_p_v7_aj.jpg",
    },
    {
      id: 8,
      name: "The Forbidden Kingdom",
      image:
        "https://resizing.flixster.com/2UB2wjCooSKgsYX1ds_lVful3eo=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p173532_p_v10_ax.jpg",
    },
    {
      id: 9,
      name: "The Witches of Eastwick",
      image:
        "https://resizing.flixster.com/edCoXJESAiHxm_I9OglaQY2A7f8=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p10075_p_v10_ad.jpg",
    },
    {
      id: 10,
      name: "Miss Peregrine's Home For Peculiar Children",
      image:
        "https://resizing.flixster.com/a2m0wE6dyGt4beuKJJLQNiPIcEo=/fit-in/180x240/v2/https://resizing.flixster.com/WdXjAj2N97A_y9yLfR46bl1110Y=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzQwZjA0ZjI5LWJiYzctNGYxMy05MzJmLWZkY2MyYjZmNmMyZC53ZWJw",
    },
  ],
};

export default function ContentPage() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <ContentImage></ContentImage>
          <HorizontalScrollView movies = {dummyData.movies} />

          <div>xs=8</div>
          <div>xs=4</div>
          <div>xs=8</div>
        </Grid>
        <Grid item xs={4}>
          <ContentDetails></ContentDetails>
        </Grid>
      </Grid>
    </Container>
  );
}
