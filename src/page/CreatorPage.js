import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import CreatorStatistics from "../component/CreatorStatistics/CreatorStatistics";
import HorizontalScrollView from "../component/HorizontalScrollView/HorizontalScrollView";
import { fetchAllMovies } from "../stores/Movies";

export default function CreatorPage() {
  const dispatch = useDispatch();
  const { loggedUser } = useSelector((state) => state.authentication);
  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, []);

  if (!loggedUser) return <h1>LOADING...</h1>;
  if (!loggedUser.userType) return <Navigate to={"/login"}></Navigate>;
  if (loggedUser.userType === "user") return <Navigate to={`/be-creator`}></Navigate>;

  if (!movies) {
    return <h1>LOADING...</h1>;
  }

  return (
    <div>
      <HorizontalScrollView type="creator" movies={movies} />
      <CreatorStatistics />
    </div>
  );
}
