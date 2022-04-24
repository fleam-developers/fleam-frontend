import React from "react";
import HorizontalScrollViews from "../component/HorizontalScrollView/HorizontalScrollViews";

/*
We should generate HorizontalScrollViews into a container
We should generate Cards into every HorizontalScrollView

Card should contain these things:
- Image
- Title

*/

const dummyData = {
  categories: [
    {
      id: 1,
      name: "Fantasy",
      movies: [
        {
          id: 1,
          name: "Lord of The Ducks",
          image:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg?resize=640:*",
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
          {
            id:11,
            name: "Lord of The Rings",
            image:
              "https://resizing.flixster.com/ZLrK7Z-9s5SBmNTbTTn10HTELM0=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p176577_p_v10_ac.jpg",
          },
          {
            id: 12,
            name: "Solomon Kane",
            image:
              "https://resizing.flixster.com/ngeXAOYyG_OhwypP9TxXZb9Dy-0=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p8022770_p_v7_aj.jpg",
          },
          {
            id: 13,
            name: "The Forbidden Kingdom",
            image:
              "https://resizing.flixster.com/2UB2wjCooSKgsYX1ds_lVful3eo=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p173532_p_v10_ax.jpg",
          },
          {
            id: 14,
            name: "The Witches of Eastwick",
            image:
              "https://resizing.flixster.com/edCoXJESAiHxm_I9OglaQY2A7f8=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p10075_p_v10_ad.jpg",
          },
          {
            id: 15,
            name: "Miss Peregrine's Home For Peculiar Children",
            image:
              "https://resizing.flixster.com/a2m0wE6dyGt4beuKJJLQNiPIcEo=/fit-in/180x240/v2/https://resizing.flixster.com/WdXjAj2N97A_y9yLfR46bl1110Y=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzQwZjA0ZjI5LWJiYzctNGYxMy05MzJmLWZkY2MyYjZmNmMyZC53ZWJw",
          },
      ],
    },
    {
      id: 1,
      name: "Fantasy",
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
    },
  ],
};

export default function HomePage(props) {
  return (
    <div>
      <HorizontalScrollViews type="home" categories={dummyData.categories} />
    </div>
  );
}
