import React from "react";
import JumboItems from "../component/JumboItem/JumboItems";
import LandingHeader from "../component/Headers/LandingHeader";
import { Counter } from "../component/Counter";
import Dashboard from "../Dashboard/Dashboard";
import CategoryGroup from "@mui/material/Card";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Grid } from "@mui/material";
import ContentCard from "../component/ContentCard/ContentCard";
import image1 from "../resource/image1.png";
import image2 from "../resource/image2.png";
import image3 from "../resource/image3.png";
import image4 from "../resource/image4.png";
import image5 from "../resource/image5.png";
import image6 from "../resource/image6.png";
import image7 from "../resource/image7.png";
import image8 from "../resource/image8.png";
import image9 from "../resource/image9.png";
import image10 from "../resource/image10.png";
import image11 from "../resource/image11.png";
import image12 from "../resource/image12.png";

export default function LandingPage() {
  const dummyData = [
    {
      id: 1,
      title: "Welcome to Fleam",
      subTitle: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      text: "Fleam is a adfdadafad adgdgaadgadgkdgad gfkfaskghaafhkafhhfakfhkafhafkhafkhfakfhafhkah adgdgaadgadgkdgad gfkfaskghaafhkafhhfakfhkafhafkhafkhfakfhafhk adgdgaadgadgkdgad gfkfaskghaafhkafhhfakfhkafhafkhafkhfakfhafhk af kfahfahkfaafkfha k hak afhkakfh hfakafhkfh",
    },
    {
      id: 2,
      title: "Frontend Development",

      text: "Fleam is a adfdadafad adgdgaadgadgkdgad gfkfaskghaafhkafhhfakfhkafhafkhafkhfakfhafhkah adgdgaadgadgkdgad gfkfaskghaafhkafhhfakfhkafhafkhafkhfakfhafhk adgdgaadgadgkdgad gfkfaskghaafhkafhhfakfhkafhafkhafkhfakfhafhk af kfahfahkfaafkfha k hak afhkakfh hfakafhkfh",
    },
    {
      id: 3,
      title: "Backend Development",

      text: "Fleam is a adfdadafad adgdgaadgadgkdgad gfkfaskghaafhkafhhfakfhkafhafkhafkhfakfhafhkah adgdgaadgadgkdgad gfkfaskghaafhkafhhfakfhkafhafkhafkhfakfhafhk adgdgaadgadgkdgad gfkfaskghaafhkafhhfakfhkafhafkhafkhfakfhafhk af kfahfahkfaafkfha k hak afhkakfh hfakafhkfh",
    },
    {
      id: 4,
      title: "Recommendation System",

      text: "Fleam is a adfdadafad adgdgaadgadgkdgad gfkfaskghaafhkafhhfakfhkafhafkhafkhfakfhafhkah adgdgaadgadgkdgad gfkfaskghaafhkafhhfakfhkafhafkhafkhfakfhafhk adgdgaadgadgkdgad gfkfaskghaafhkafhhfakfhkafhafkhafkhfakfhafhk af kfahfahkfaafkfha k hak afhkakfh hfakafhkfh",
    },
  ];

  const numberlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const { loggedUser } = useSelector((state) => state.authentication);

  if (loggedUser && loggedUser.userType) return <Navigate to={"/browse"}></Navigate>;

  return (
    <div>
      <LandingHeader />
      {/* <Counter></Counter> */}
      {/* <Dashboard></Dashboard> */}
      <h1 className="search-value">Website Images</h1>
      <CategoryGroup className="category-details-group">
        <Grid className="portfolio" container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h3>Homepage with User Navbar</h3>
            <img className="portfolioImage" alt={"image1"} src={image1} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h3>Homepage with Creator Navbar</h3>
            <img className="portfolioImage" alt={"image2"} src={image2} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h3>Homepage with Admin Navbar</h3>
            <img className="portfolioImage" alt={"image3"} src={image3} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h3>Admin Page</h3>
            <img className="portfolioImage" alt={"image4"} src={image4} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h3>Be Creator Page</h3>
            <img className="portfolioImage" alt={"image5"} src={image5} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h3>Category Page</h3>
            <img className="portfolioImage" alt={"image6"} src={image6} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h3>Search Page</h3>
            <img className="portfolioImage" alt={"image7"} src={image7} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h3>Content Page 1</h3>
            <img className="portfolioImage" alt={"image8"} src={image8} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h3>Content Page 2</h3>
            <img className="portfolioImage" alt={"image9"} src={image9} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h3>Login</h3>
            <img className="portfolioImage" alt={"image10"} src={image10} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h3>Register</h3>
            <img className="portfolioImage" alt={"image11"} src={image11} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h3>Video Player</h3>
            <img className="portfolioImage" alt={"image12"} src={image12} />
          </Grid>
        </Grid>
      </CategoryGroup>

      <JumboItems items={dummyData} />
    </div>
  );
}
