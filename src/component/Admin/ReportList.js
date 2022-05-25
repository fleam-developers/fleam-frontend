import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import { Button, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import "./Admin.scss";
import { getCreators, removeCreator } from "../../stores/Authentication";
import { useNavigate } from "react-router-dom";
export default function ReportList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { creators } = useSelector((state) => state.authentication);

  useEffect(() => {
    dispatch(getCreators());
  }, []);

  if (!creators) {
    return <h1>LOADING...</h1>;
  }
  console.log(creators);
  return (
    <div>
      <Card className="admin-container">
        <h2 className="title">Creators List</h2>
        <Grid className="card-container" container spacing={{ xs: 2, md: 3 }}>
          {creators.map((item) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
              <div className="report">
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    <span className="low-opacity-text">Creator Name: </span> {item.username}
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    <span className="low-opacity-text">Email: </span> {item.email}
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    <span className="low-opacity-text">ID: </span> {item.id}
                  </Typography>
                  <Typography variant="body2">
                    <span className="low-opacity-text">There are </span> 15{" "}
                    <span className="low-opacity-text">
                      {" "}
                      contents added by this creator. You can see them in details.
                    </span>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    className="report-button"
                    onClick={() => {
                      navigate(`/creator/${item.id}`);
                    }}
                  >
                    Go To Details
                  </Button>
                  <Button
                    className="report-button"
                    onClick={() => {
                      dispatch(removeCreator(item.id))
                    }}
                  >
                    Remove
                  </Button>
                </CardActions>
              </div>
            </Grid>
          ))}
        </Grid>
      </Card>
    </div>
  );
}
