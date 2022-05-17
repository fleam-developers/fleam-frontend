import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HorizontalScrollViews from "../component/HorizontalScrollView/HorizontalScrollViews";
import { fetchAllCategories, fetchSearchedCategories } from "../stores/Categories";

export default function SearchPage() {
  const params = useParams()
  console.log(params.searchedKey)
  const { loading, error, categories } = useSelector((state) => state.categories);

  const dispatch = useDispatch();
  

  useEffect(() => {
    //console.log(params.searchedKey)
    dispatch(fetchSearchedCategories(params.searchedKey));
  }, []);

  return (
    <div>
      <HorizontalScrollViews type="search" movies={categories} searchedKey={params.searchedKey} />
    </div>
  );
}
