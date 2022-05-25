import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ProfileSettings from "../component/Authentication/ProfileSettings";

export default function ProfileSettingsPage() {
  const { loggedUser } = useSelector((state) => state.authentication);

  if (!loggedUser) return <h1>LOADING...</h1>;
  if (!loggedUser.userType) return <Navigate to={"/login"}></Navigate>;

  return (
    <div>
      <ProfileSettings></ProfileSettings>
    </div>
  );
}
