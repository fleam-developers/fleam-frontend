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
  const abstract = [
    {
      id: 1,
      title: "Welcome to Fleam",
      subTitle: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      text: "Fleam is a adfdadafad adgdgaadgadgkdgad gfkfaskghaafhkafhhfakfhkafhafkhafkhfakfhafhkah adgdgaadgadgkdgad gfkfaskghaafhkafhhfakfhkafhafkhafkhfakfhafhk adgdgaadgadgkdgad gfkfaskghaafhkafhhfakfhkafhafkhafkhfakfhafhk af kfahfahkfaafkfha k hak afhkakfh hfakafhkfh",
    },
  ];
  const details = [
    {
      id: 1,
      title: "Frontend Development",

      text: "On the Frontend side, React, a very popular JavaScript library, was preferred. React is used by many giant companies such as Facebook and Netflix. It is also compatible with different libraries and frameworks such as React, Redux, which is a current and widely used technology. Our previous experience is also a factor in our preference for this library. While a modern technology such as React was preferred, a modern method was also preferred for state management. Due to the size and complexity of the project, if the state management were tried to be provided directly through React, it would have caused problems for the project. That's why Redux, a JavaScript library used to manage and centralize application state, was chosen. Redux Toolkit was used to develop Redux more efficiently and easily. In this way, our efficiency in the development process increased and we were able to write code more easily and effectively. \n \n\n Redux Architecture has a central store. It sends actions by connecting to reducers through pure functions. Then the reducer updates the centralized store with new data according to the action type it takes. The store creates a new status and sends an update to view. Immediately afterwards, the view was rebuilt to reflect the update. \n Redux Toolkit is a library that compiles Redux and its plugins and brings together best practices. It simplifies the complexity of Redux. Configuring the Store with the configureStore function in Redux Toolkit is quite simple compared to createStore in Redux. Logical expressions can be created and shared with the createSlice function. In addition, actions can be easily managed with createAsyncThunk. Using this structure made state management in the project easier. \n The Axios library was used to send requests that will establish a connection with the backend side and send and receive data. Using this library has been very useful and convenient. Since the backend and frontend sides were developed separately, it was necessary to test whether the requests were going correctly before the connection was established and to continue the development process accordingly. A json-server setup is provided to control these requests on the frontend. The json-server provided a fake Rest API and the tests were temporarily run through this Rest API.",
    },
    {
      id: 2,
      title: "Backend Development",

      text: "Fleam is a adfdadafad adgdgaadgadgkdgad gfkfaskghaafhkafhhfakfhkafhafkhafkhfakfhafhkah adgdgaadgadgkdgad gfkfaskghaafhkafhhfakfhkafhafkhafkhfakfhafhk adgdgaadgadgkdgad gfkfaskghaafhkafhhfakfhkafhafkhafkhfakfhafhk af kfahfahkfaafkfha k hak afhkakfh hfakafhkfh",
    },
    {
      id: 3,
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
      <JumboItems items={abstract} />
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

      <JumboItems items={details} />
    </div>
  );
}
