import React from "react";
import HorizontalScrollViews from "../component/HorizontalScrollView/HorizontalScrollViews";

/*
We should generate HorizontalScrollViews into a container
We should generate Cards into every HorizontalScrollView

Card should contain these things:
- Image
- Title

*/

export default function HomePage() {
  return (
    <div>
      <HorizontalScrollViews type="home"  />
    </div>
  );
}
