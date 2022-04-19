import React from "react";

import "./ContentImage.scss";

export default function ContentImage() {
  return (
    <div className="image-card">
      <img
        className="image"
        alt={"imageAlt"}
        src={
          "https://resizing.flixster.com/2UB2wjCooSKgsYX1ds_lVful3eo=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p173532_p_v10_ax.jpg"
        }
      />
    </div>
  );
}
