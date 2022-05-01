import React from "react";
import Card from "@mui/material/Card";
import { Button, Grid } from "@mui/material";

import "./Admin.scss";

export default function CreatorList(props) {
  const [items, setItems] = React.useState(props.movies);
  console.log(items);

  return (
    <div>
      <Card className="admin-container">
        <h2 className="title">Creators List</h2>
        <Grid className="card-container" container spacing={{ xs: 2, md: 3 }}>
          {items.map((item) => (
            <Grid item xs={10} sm={6} md={4} lg={3} xl={3}>
              <div className="creator">
                <div>
                  <h4 className="subtitle">{item.name}</h4>
                </div>
                <div>
                  <hr className="hr" />
                  <Button className="details-button">Go To Details</Button>
                  <Button className="details-button">Remove Creator</Button>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Card>
    </div>
  );
}
