import { CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { Card } from "reactstrap";
import CountUp from "react-countup";
import "./Admin.scss";

export default function Statistics() {
  return (
    <div>
      <Card className="admin-container">
        <Grid className="card-container statistic-container" container spacing={3}>
          <Grid item component={Card} xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className="statistics">
              <CardContent>
                <Typography className="head">Total Watch in Hours</Typography>
                <Typography className="content" variant="h5">
                  <CountUp start={0} end={1234231} duration={2.5} separator="." />
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  You can see the total views on the site in hours here.
                </Typography>
              </CardContent>
            </div>
          </Grid>
          <Grid item component={Card} xs={12} sm={6} md={4} lg={4} xl={4}>
            <div className="statistics">
              <CardContent>
                <Typography className="head">Comment Counts</Typography>
                <Typography className="content" variant="h5">
                  <CountUp start={0} end={53533} duration={2.5} separator="." />
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  You can see the total number of comments posted on all content on the site here.
                </Typography>
              </CardContent>
            </div>
          </Grid>
          <Grid item component={Card} xs={12} sm={6} md={4} lg={4} xl={4}>
            <div className="statistics">
              <CardContent>
                <Typography className="head">Total Rating</Typography>
                <Typography className="content" variant="h5">
                  3,8
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  You can see the average rating for all content on the site here.
                </Typography>
              </CardContent>
            </div>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
