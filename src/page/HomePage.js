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

  return (
    <div>
      <HorizontalScrollViews type="home" movies={categories}  />
    </div>
  );
}
