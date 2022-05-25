import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import HorizontalScrollViews from "../component/HorizontalScrollView/HorizontalScrollViews";
import { fetchAllCategories } from "../stores/Categories";

export default function HomePage() {
  const { loggedUser } = useSelector((state) => state.authentication);
  const { categories } = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);

  if (!loggedUser) return <h1>LOADING...</h1>;
  if (!loggedUser.userType) return <Navigate to={"/login"}></Navigate>;

  if (!categories) {
    return <h1>LOADING...</h1>;
  }
  return (
    <div>
      <HorizontalScrollViews type="home" categories={categories.genres} />
    </div>
  );
}
