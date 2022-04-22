import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
//import Copyright from "../component/common/Copyright";
import { Alert } from "@mui/lab";
import { Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import { AuthService } from "../../service/AuthService";
import FormItem from "./FormItem";

import "./Auth.scss";

export default function ProfileSettings() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");

  const [open, setSnackbarOpen] = React.useState(false);
  const [severity, setSnackbarSeverity] = React.useState("success");
  const [snackbarMessage, setSnackbarMessage] = React.useState("");

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
              <FormItem id_name="email" label="Email Address" value={email} setValue={setEmail}></FormItem>
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
              // onClick={(event) => {
              //     event.preventDefault();
              //     console.log("Sign up button clicked.");
              //     AuthService.register({
              //         "email": email,
              //         "username": username,
              //         "password": password
              //     }).then(r => {
              //         console.log("Response: " + r.data.toString())
              //         setSnackbarSeverity("success");
              //         setSnackbarMessage("You've registered successfully!");
              //         setSnackbarOpen(true);
              //         delay(1000).then(() => {
              //             navigate("/sign-in");
              //             }
              //         );
              //     }).catch(e => {
              //         setSnackbarSeverity("error");
              //         if (e.response.status === 409) {
              //             setSnackbarMessage(e.response.data);
              //         } else {
              //             setSnackbarMessage("Something went wrong: " + e.response.data.toString());
              //         }
              //         setSnackbarOpen(true);
              //     })
              // }}
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
