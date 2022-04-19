import { Card, Rating, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

import "./ContentDetails.scss";

export default function ContentDetails() {
  const [value, setValue] = React.useState(2);

  return (
    <Card className="details-card">
      <Button className="play-button">Play</Button>
      {/* <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        size="large"
      /> */}
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={value} readOnly size="large" />

      <div className="information">
        <h5 component="legend" className="title">
          Information about content:
        </h5>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis interdum turpis, eu efficitur tortor
          tristique ac. Aliquam vestibulum purus pharetra aliquet aliquam. Integer commodo quam libero, nec sagittis mi
          suscipit nec. Ut ullamcorper varius felis. Vestibulum vitae lorem ultrices, tempus sapien a, tempor nibh.
          Aenean at est magna. Nunc suscipit libero non rhoncus lacinia. Suspendisse interdum congue finibus. In
          tincidunt arcu ut nibh accumsan, et elementum tellus laoreet. Praesent justo urna, lobortis ac rhoncus non,
          egestas in ipsum. Mauris a mi nec enim hendrerit porttitor sed eu dui. Fusce efficitur dictum metus quis
          feugiat. Curabitur dignissim vestibulum tortor, vel feugiat massa lacinia et. Mauris imperdiet convallis
          volutpat.
        </div>
      </div>

      {/* <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled size="large" />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} size="large" /> */}
    </Card>
  );
}
