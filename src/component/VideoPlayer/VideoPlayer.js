import React, { useEffect } from "react";
import VideoJS from "./VideoJS";
import video from "../../WALL-E.2008.mp4";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStream } from "../../stores/Movies";

export default function VideoPlayer() {
  const { contentName } = useParams();

  const dispatch = useDispatch();
  const { stream } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchStream(contentName));
  }, [contentName]);

  if (!stream) {
    return <div>LOADING...</div>;
  }
  const videoJsOptions = {
    autoplay: false,
    controls: true,

    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    sources: [
      {
        src: stream,
        type: "video/mp4",
      },
    ],
  };
  return (
    <div>
      <VideoJS options={videoJsOptions} />
    </div>
  );
}
