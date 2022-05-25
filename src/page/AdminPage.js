import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ReportList from "../component/Admin/ReportList";
// import Statistics from '../component/CreatorStatistics/Statistics'
import Statistics from "../component/Admin/Statistics";

export default function AdminPage() {
  const { loggedUser } = useSelector((state) => state.authentication);

  if (!loggedUser) return <h1>LOADING...</h1>;
  if (!loggedUser.userType) return <Navigate to={"/login"}></Navigate>;
  if (loggedUser.userType !== "admin") return <Navigate to={"/browse"}></Navigate>;

  return (
    <div>
      {/* <CreatorList /> */}
      <Statistics />
      <ReportList />
      {/* <Statistics /> */}
    </div>
  );
}
