import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
//import Copyright from "../component/common/Copyright";
import { Alert } from "@mui/lab";
import { Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import { AuthService } from "../../service/AuthService";
import FormItem from "../Common/FormItem";

import "./Auth.scss";
import { useSelector } from "react-redux";

export default function ProfileSettings() {
  const { loggedUser } = useSelector((state) => state.authentication);

  const [username, setUsername] = React.useState(loggedUser.username);
  const [email, setEmail] = React.useState(loggedUser.username);
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");

  const [open, setSnackbarOpen] = React.useState(false);
  const [severity, setSnackbarSeverity] = React.useState("success");
  const [snackbarMessage, setSnackbarMessage] = React.useState("");

  console.log(loggedUser);

  if (!loggedUser) {
    return <h1>LOADING...</h1>;
  }

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Container component="main" maxWidth="md" className="cardContainer">
      <Card className="card">
        <CssBaseline />
        <div className="paper">
          <Typography component="h1" variant="h5">
            Update Your Profile
          </Typography>
          <form className="form" noValidate>
            <Grid container spacing={2}>
              <FormItem id_name="uname" label="Username" value={username} setValue={setUsername}></FormItem>
              <FormItem id_name="email" type="email" label="Email Address" value={email} setValue={setEmail}></FormItem>
              <FormItem
                id_name="current_password"
                type="password"
                label="Current Password"
                value={currentPassword}
                setValue={setCurrentPassword}
              ></FormItem>
              <FormItem
                id_name="new_password"
                type="password"
                label="New Password"
                value={newPassword}
                setValue={setNewPassword}
              ></FormItem>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
            >
              UPDATE YOUR PROFILE
            </Button>
          </form>
        </div>
        {/* <Box mt={5}>
                <Copyright/>
            </Box> */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <Alert onClose={handleSnackbarClose} severity={severity}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Card>
    </Container>
  );
}
