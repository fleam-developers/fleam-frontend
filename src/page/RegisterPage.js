import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Register from "../component/Authentication/Register";

export default function RegisterPage() {
  const { loggedUser } = useSelector((state) => state.authentication);

  if (!loggedUser) return <h1>LOADING...</h1>;
  if (loggedUser.userType) return <Navigate to={"/browse"}></Navigate>;

  return (
    <div>
      <Register></Register>
    </div>
  );
}
