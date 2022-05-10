import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import { Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCreators } from "../../stores/CreatorList";

import "./Admin.scss";

export default function CreatorList() {
  
  const dispatch = useDispatch();
  const { loading, error, creators } = useSelector((state) => state.creators);
  
  useEffect(() => {
    dispatch(fetchAllCreators());
  }, []);
  
  if (!creators) {
    if (loading) return <h1>LOADING...</h1>;
    return <div>LOADING...</div>;
  }

  return (
    <div>
      <Card className="admin-container">
        <h2 className="title">Creators List</h2>
        <Grid className="card-container" container spacing={{ xs: 2, md: 3 }}>
          {creators.map((item) => (
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
