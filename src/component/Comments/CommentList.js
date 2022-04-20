import React from "react";

import "./Comments.scss";
import { Divider, Avatar, Grid, Paper } from "@mui/material";
import Comment from "./Comment";
const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const dummyData = {
  comments: [
    {
      id: 1,
      username: "Fall",
      image:
        "https://resizing.flixster.com/ZLrK7Z-9s5SBmNTbTTn10HTELM0=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p176577_p_v10_ac.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet. Suspendisse congue vulputate lobortis. Pellentesque at interdum tortor. Quisque arcu quam, malesuada vel mauris et, posuere sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit metus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam lectus vitae ex.",
    },
    {
      id: 2,
      username: "Solomon Kane",
      image:
        "https://resizing.flixster.com/ngeXAOYyG_OhwypP9TxXZb9Dy-0=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p8022770_p_v7_aj.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet. Suspendisse congue vulputate lobortis. Pellentesque at interdum tortor. Quisque arcu quam, malesuada vel mauris et, posuere sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit metus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam lectus vitae ex.",
    },
    {
      id: 3,
      username: "The Forbidden Kingdom",
      image:
        "https://resizing.flixster.com/2UB2wjCooSKgsYX1ds_lVful3eo=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p173532_p_v10_ax.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet. Suspendisse congue vulputate lobortis. Pellentesque at interdum tortor. Quisque arcu quam, malesuada vel mauris et, posuere sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit metus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam lectus vitae ex.",
    },
    {
      id: 4,
      username: "The Witches of Eastwick",
      image:
        "https://resizing.flixster.com/edCoXJESAiHxm_I9OglaQY2A7f8=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p10075_p_v10_ad.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet. Suspendisse congue vulputate lobortis. Pellentesque at interdum tortor. Quisque arcu quam, malesuada vel mauris et, posuere sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit metus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam lectus vitae ex.",
    },
    {
      id: 5,
      username: "Miss Peregrine's Home For Peculiar Children",
      image:
        "https://resizing.flixster.com/a2m0wE6dyGt4beuKJJLQNiPIcEo=/fit-in/180x240/v2/https://resizing.flixster.com/WdXjAj2N97A_y9yLfR46bl1110Y=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzQwZjA0ZjI5LWJiYzctNGYxMy05MzJmLWZkY2MyYjZmNmMyZC53ZWJw",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet. Suspendisse congue vulputate lobortis. Pellentesque at interdum tortor. Quisque arcu quam, malesuada vel mauris et, posuere sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit metus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam lectus vitae ex.",
    },
    {
      id: 6,
      username: "Lord of The Rings",
      image:
        "https://resizing.flixster.com/ZLrK7Z-9s5SBmNTbTTn10HTELM0=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p176577_p_v10_ac.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet. Suspendisse congue vulputate lobortis. Pellentesque at interdum tortor. Quisque arcu quam, malesuada vel mauris et, posuere sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit metus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam lectus vitae ex.",
    },
    {
      id: 7,
      username: "Solomon Kane",
      image:
        "https://resizing.flixster.com/ngeXAOYyG_OhwypP9TxXZb9Dy-0=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p8022770_p_v7_aj.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet. Suspendisse congue vulputate lobortis. Pellentesque at interdum tortor. Quisque arcu quam, malesuada vel mauris et, posuere sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit metus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam lectus vitae ex.",
    },
    {
      id: 8,
      username: "The Forbidden Kingdom",
      image:
        "https://resizing.flixster.com/2UB2wjCooSKgsYX1ds_lVful3eo=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p173532_p_v10_ax.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet. Suspendisse congue vulputate lobortis. Pellentesque at interdum tortor. Quisque arcu quam, malesuada vel mauris et, posuere sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit metus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam lectus vitae ex.",
    },
    {
      id: 9,
      username: "The Witches of Eastwick",
      image:
        "https://resizing.flixster.com/edCoXJESAiHxm_I9OglaQY2A7f8=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p10075_p_v10_ad.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet. Suspendisse congue vulputate lobortis. Pellentesque at interdum tortor. Quisque arcu quam, malesuada vel mauris et, posuere sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit metus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam lectus vitae ex.",
    },
    {
      id: 10,
      username: "Miss Peregrine's Home For Peculiar Children",
      image:
        "https://resizing.flixster.com/a2m0wE6dyGt4beuKJJLQNiPIcEo=/fit-in/180x240/v2/https://resizing.flixster.com/WdXjAj2N97A_y9yLfR46bl1110Y=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzQwZjA0ZjI5LWJiYzctNGYxMy05MzJmLWZkY2MyYjZmNmMyZC53ZWJw",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet. Suspendisse congue vulputate lobortis. Pellentesque at interdum tortor. Quisque arcu quam, malesuada vel mauris et, posuere sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit metus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam lectus vitae ex.",
    },
  ],
};

export default function CommentAnswer() {
  return (
    <div className="App">
      {dummyData.comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
}
