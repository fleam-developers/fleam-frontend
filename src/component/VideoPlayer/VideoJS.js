import React, { useEffect, useRef } from "react";
import videojs from "video.js";

import "./VideoPlayer.scss";

// import "@videojs/themes/dist/city/index.css"
// import "@videojs/themes/dist/fantasy/index.css"
// import "@videojs/themes/dist/forest/index.css"
import "@videojs/themes/dist/sea/index.css"

export default function VideoJS({ options, themeName = "sea" }) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      playerRef.current = videojs(videoElement, options);
    }

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [options, videoRef, playerRef]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className={`video-js vjs-big-play-centered vjs-theme-${themeName}`} />
    </div>
  );
}
