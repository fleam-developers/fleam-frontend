import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import CategoryDetails from "../component/CategoryDetails/CategoryDetails";

export default function CategoryPage() {

  const { loggedUser } = useSelector((state) => state.authentication);

  if (loggedUser && !loggedUser.userType) return <Navigate to={"/login"}></Navigate>;

  return (
    <div>
      <CategoryDetails></CategoryDetails>
    </div>
  );
}
