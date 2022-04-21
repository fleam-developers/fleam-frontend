import React from "react";
import VideoJS from "./VideoJS";
import video from "../../WALL-E.2008.mp4";

export default function VideoPlayer() {
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    sources: [
      {
        src: video,
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
