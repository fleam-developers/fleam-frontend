import React from "react";
import Card from "@mui/material/Card";
import { Button, CardActions, CardContent, Grid, Typography } from "@mui/material";

export default function ReportList(props) {
  const [items, setItems] = React.useState(props.movies);
  console.log(items);

  return (
    <div>
      <Card className="admin-container">
        <h2 className="title">Reports List</h2>
        <Grid className="card-container" container spacing={{ xs: 2, md: 3 }}>
          {items.map((item) => (
            <Grid item xs={10} sm={6} md={4} lg={3} xl={3}>
              <div className="report">
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    <span className="low-opacity-text">Report: </span> Reported Person
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    <span  className="low-opacity-text">Reported by: </span> Reporter
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                    continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className="report-button">Approve</Button>
                  <Button className="report-button">Cancel</Button>
                </CardActions>
              </div>
            </Grid>
          ))}
        </Grid>
      </Card>
    </div>
  );
}
