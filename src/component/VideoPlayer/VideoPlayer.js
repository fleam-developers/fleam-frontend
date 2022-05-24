import React, { useEffect } from "react";
import VideoJS from "./VideoJS";
import video from "../../WALL-E.2008.mp4";
import { useParams } from "react-router-dom";

export default function VideoPlayer() {
  const { contentName } = useParams();

  const videoJsOptions = {
    autoplay: false,
    controls: true,

    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    sources: [
      {
        src: `http://159.223.146.42:8080/movie/stream?movieId=${contentName}`,
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
