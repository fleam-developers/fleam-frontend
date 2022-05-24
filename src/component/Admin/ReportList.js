import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import { Button, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllReports } from "../../stores/ReportList";

import "./Admin.scss";
export default function ReportList() {
  const dispatch = useDispatch();
  const { loading, error, reports } = useSelector((state) => state.reports);

  useEffect(() => {
    dispatch(fetchAllReports());
  }, []);

  if (!reports) {
    if (loading) return <h1>LOADING...</h1>;
    return <div>LOADING...</div>;
  }

  return (
    <div>
      <Card className="admin-container">
        <h2 className="title">Creators List</h2>
        <Grid className="card-container" container spacing={{ xs: 2, md: 3 }}>
          {reports.map((item) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
              <div className="report">
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    <span className="low-opacity-text">Creator Name: </span> Username Asd
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    <span className="low-opacity-text">Email: </span> sampleuser16@gmail.com
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    <span className="low-opacity-text">Content Count: </span> 15
                  </Typography>
                  <Typography variant="body2">
                    <span className="low-opacity-text">The contents uploaded by this Creator have a total of</span> 143{" "}
                    <span className="low-opacity-text">hours of views.</span>
                  </Typography>
                  {/* <Typography gutterBottom variant="p" component="div">
                    <span className="low-opacity-text">Report: </span> Reported Person
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    <span  className="low-opacity-text">Reported by: </span> Reporter
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                    continents except Antarctica
                  </Typography> */}
                </CardContent>
                <CardActions>
                  <Button className="report-button">Go To Details</Button>
                  <Button className="report-button">Remove</Button>
                </CardActions>
              </div>
            </Grid>
          ))}
        </Grid>
      </Card>
    </div>
  );
}
