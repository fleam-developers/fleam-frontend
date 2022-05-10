import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Counter";
import SiteReducer from "./Site";
import dashboardReducer from "./dashboardSlice"
import MoviesReducer from "./Movies"
import CreatorListReducer from "./CreatorList"
import ReportListReducer from "./ReportList"
import CommentListReducer from "./CommentList"

export default configureStore({
  reducer: {
    counter: CounterReducer,
    site: SiteReducer,
    dashboard: dashboardReducer,
    movies: MoviesReducer,
    creators: CreatorListReducer,
    reports: ReportListReducer,
    comments: CommentListReducer
  },
});
