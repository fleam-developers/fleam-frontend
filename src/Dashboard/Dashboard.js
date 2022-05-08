import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardData } from "../stores/dashboardSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.dashboard)

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, []);
  console.log(data)
  return <div>Dashboard</div>;
};

export default Dashboard;
