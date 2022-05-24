import { CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Card } from "reactstrap";
import CountUp from "react-countup";
import "./Admin.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAdminStatistics } from "../../stores/Authentication";

export default function Statistics() {
  const dispatch = useDispatch();
  const { adminStatistics } = useSelector((state) => state.authentication);
  console.log(adminStatistics)
  useEffect(() => {
    dispatch(getAdminStatistics());
  }, []);

  if (!adminStatistics) {
    return <h1>LOADING...</h1>;
  }

  return (
    <div>
      <Card className="admin-container">
        <Grid className="card-container statistic-container" container spacing={3}>
          <Grid item component={Card} xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className="statistics">
              <CardContent>
                <Typography className="head">Total Watch Count</Typography>
                <Typography className="content" variant="h5">
                  <CountUp start={0} end={adminStatistics.totalWatchCount} duration={2.5} separator="." />
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  You can see the total views on the site.
                </Typography>
              </CardContent>
            </div>
          </Grid>
          <Grid item component={Card} xs={12} sm={6} md={4} lg={4} xl={4}>
            <div className="statistics">
              <CardContent>
                <Typography className="head">Comment Counts</Typography>
                <Typography className="content" variant="h5">
                  <CountUp start={0} end={adminStatistics.totalCommentCount} duration={2.5} separator="." />
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
                  <CountUp start={0} end={adminStatistics.totalRatingCount} duration={2.5} separator="." />
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  You can see the total rating count for all content on the site here.
                </Typography>
              </CardContent>
            </div>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
