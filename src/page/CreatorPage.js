import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreatorStatistics from "../component/CreatorStatistics/CreatorStatistics";
import HorizontalScrollView from "../component/HorizontalScrollView/HorizontalScrollView";
import { fetchAllMovies } from "../stores/Movies";

export default function CreatorPage() {

  const dispatch = useDispatch();
  const { loading, error, movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, []);

  if (!movies) {
    if (loading) return <h1>LOADING...</h1>;
    return <div>LOADING...</div>;
  }

  return (
    <div>
      <HorizontalScrollView type="creator" movies={movies} />
      <CreatorStatistics />
    </div>
  );
}
