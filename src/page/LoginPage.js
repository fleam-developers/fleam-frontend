import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Login from "../component/Authentication/Login";

export default function LoginPage() {
  const { loggedUser } = useSelector((state) => state.authentication);

  if (loggedUser && loggedUser.userType) return <Navigate to={"/browse"}></Navigate>;
  return (
    <div>
      <Login></Login>
    </div>
  );
}
