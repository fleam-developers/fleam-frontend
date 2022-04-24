import React from "react";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";

import BarChart from "./BarChart";

import "./CreatorStatistics.scss";

export default function CreatorStatistics() {
  return (
    <div>
      <Card className="statistics">
        <div className="title">Creator Statistics</div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="statistics-group">
              <h3 className="subtitle">Registration Days Chart</h3>
              <hr className="hr" />
              <BarChart></BarChart>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="statistics-group">
              <h3 className="subtitle">Registration Days Chart</h3>
              <hr className="hr" />
              <BarChart></BarChart>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="statistics-group">
              <h3 className="subtitle">Registration Days Chart</h3>
              <hr className="hr" />
              <BarChart></BarChart>
            </div>
          </Grid>{" "}
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="statistics-group">
              <h3 className="subtitle">Registration Days Chart</h3>
              <hr className="hr" />
              <BarChart></BarChart>
            </div>
          </Grid>{" "}
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="statistics-group">
              <h3 className="subtitle">Registration Days Chart</h3>
              <hr className="hr" />
              <BarChart></BarChart>
            </div>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
