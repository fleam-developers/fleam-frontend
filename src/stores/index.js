import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Counter";
import SiteReducer from "./Site";
import dashboardReducer from "./dashboardSlice"

export default configureStore({
  reducer: {
    counter: CounterReducer,
    site: SiteReducer,
    dashboard: dashboardReducer
  },
});
