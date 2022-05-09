import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Counter";
import SiteReducer from "./Site";
import dashboardReducer from "./dashboardSlice"
import MoviesReducer from "./Movies"

export default configureStore({
  reducer: {
    counter: CounterReducer,
    site: SiteReducer,
    dashboard: dashboardReducer,
    movies: MoviesReducer
  },
});
