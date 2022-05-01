import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
//import Copyright from "../component/common/Copyright";
import { Alert } from "@mui/lab";
import { Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import { AuthService } from "../../service/AuthService";
import FormItem from "../Common/FormItem";
//import {delay} from "../../util/async";

import "./Auth.scss";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");

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
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className="form" noValidate>
            <Grid container spacing={2}>
              <FormItem id_name="uname" label="Username" value={username} setValue={setUsername}></FormItem>
              <FormItem id_name="email" type="email" label="Email Address" value={email} setValue={setEmail}></FormItem>
              <FormItem
                id_name="password"
                type="password"
                label="Password"
                value={password}
                setValue={setPassword}
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
              Register
            </Button>
            <Grid container justify="flex-end">
              <Grid item className="go-to-login">
                Already have an account?
                <Link href="/login" variant="body2" className="link">
                  Login
                </Link>
              </Grid>
            </Grid>
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
