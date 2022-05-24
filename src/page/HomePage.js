import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HorizontalScrollViews from "../component/HorizontalScrollView/HorizontalScrollViews";
import { fetchAllCategories } from "../stores/Categories";


export default function HomePage() {
  
  const { loading, error, categories } = useSelector((state) => state.categories);

  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);

  if (!categories) {
    return <h1>LOADING...</h1>;
  }
  return (
    <div>
      <HorizontalScrollViews type="home" categories={categories.genres}  />
    </div>
  );
}
