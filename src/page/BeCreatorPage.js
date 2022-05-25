import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import BeCreatorHeader from "../component/Headers/BeCreatorHeader";
import JumboItems from "../component/JumboItem/JumboItems";

export default function BeCreatorPage() {
  const dummyData = [
    {
      id: 1,
      title: "Watch everywhere.",
      subTitle: "Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.",
      image: "https://react-netflix-clone-beta.vercel.app/images/misc/home-imac.jpg",
      alt: "Money Heist on Netflix",
    },
    {
      id: 2,
      title: "Download your programmes to watch on the go.",
      subTitle: "Save your data and watch all your favourites offline.",
      image: "https://react-netflix-clone-beta.vercel.app/images/misc/home-mobile.jpg",
      alt: "Tiger King on Netflix",
    },
    {
      id: 3,
      title: "Enjoy on your TV.",
      subTitle: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      image: "https://react-netflix-clone-beta.vercel.app/images/misc/home-tv.jpg",
      alt: "Tiger King on Netflix",
    },
  ];

  const { loggedUser } = useSelector((state) => state.authentication);

  if (loggedUser && !loggedUser.userType) return <Navigate to={"/login"}></Navigate>;
  if (loggedUser && loggedUser.userType === "creator") return <Navigate to={`/creator/${loggedUser.userId}`}></Navigate>;

  return (
    <div>
      <BeCreatorHeader />
      <JumboItems items={dummyData} />
    </div>
  );
}
