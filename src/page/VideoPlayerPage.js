import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import VideoPlayer from "../component/VideoPlayer/VideoPlayer";

export default function VideoPlayerPage() {
  const { loggedUser } = useSelector((state) => state.authentication);

  if (loggedUser && !loggedUser.userType) return <Navigate to={"/login"}></Navigate>;

  return (
    <div>
      <VideoPlayer></VideoPlayer>
    </div>
  );
}
