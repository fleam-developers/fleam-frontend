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
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
//import Copyright from "../component/common/Copyright";
import { Alert } from "@mui/lab";
import { Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import { AuthService } from "../../service/AuthService";
import { delay } from "../../util/async";

import "./Auth.scss";
import FormItem from "../Common/FormItem";
import { useDispatch } from "react-redux";
import { login } from "../../stores/Authentication";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");

  const [open, setSnackbarOpen] = React.useState(false);
  const [severity, setSnackbarSeverity] = React.useState("success");
  const [snackbarMessage, setSnackbarMessage] = React.useState("Welcome back!");

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  const emptyCheck = () => {
    let check = 0;

    if (username !== "" && password !== "") {
      check = 1;
    }
    return check;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emptyCheck()) {
      const data = {
        username: username,
        password: password,
      };

      dispatch(login(data)).then((res) => {
        console.log(res)
        localStorage.setItem("token", res.payload.token);
        localStorage.setItem("username", res.payload.username);
      })

      // axios
      //   .post("/login", data)
      //   .then((res) => {
      //     if (res.data.token) {
      //       localStorage.setItem("token", res.data.token);
      //       localStorage.setItem("username", data.username);
      //       setLoggedIn(true);
      //       props.setUser(username);
      //       props.setTrigger(res.data.token);
      //     } else {
      //       setAlert(true);
      //       setTimeout(() => {
      //         setAlert(false);
      //       }, 2000);
      //     }
      //     setUsername("");
      //     setPassword("");
      //   })
      //   .catch((err) => console.log(err));
    } else {
      console.log("You have to fill in all fields!");
    }
  };

  return (
    <Container component="main" maxWidth="sm" className="cardContainer">
      <Card className="card">
        <CssBaseline />
        <div className="paper">
          <Avatar className="avatar">
            {" "}
            <LockOutlinedIcon />{" "}
          </Avatar>
          <Typography component="h1" variant="h5">
            {" "}
            Login{" "}
          </Typography>

          <form className="form" noValidate>
            <Grid container spacing={2}>
              <FormItem id_name="username" label="Username" value={username} setValue={setUsername}></FormItem>
              <FormItem
                id_name="password"
                type="password"
                label="Password"
                value={password}
                setValue={setPassword}
              ></FormItem>
            </Grid>
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="submit"
              onClick={handleSubmit}
              // onClick={(event) => {
              //   event.preventDefault();
              //   console.log("Sign in button clicked.");
              //   AuthService.login(username, password)
              //     .then((r) => {
              //       console.log("Response: " + JSON.stringify(r.data));
              //       AuthService.saveJwtToken(r.data.token);
              //       AuthService.saveAuthRoles(r.data.auth);
              //       setSnackbarSeverity("success");
              //       setSnackbarMessage("Welcome back!");
              //       setSnackbarOpen(true);

              //       delay(1000).then(() => navigate("/browse"));
              //     })
              //     .catch((e) => {
              //       setSnackbarSeverity("error");
              //       if (e.response !== undefined && e.response.status === 401) {
              //         setSnackbarMessage("Entered credentials are incorrect.");
              //       } else {
              //         setSnackbarMessage("Something went wrong!");
              //       }
              //       setSnackbarOpen(true);
              //     });
              // }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/password-reset" variant="body2">
                  {" "}
                  Forgot password?{" "}
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {" "}
                  {"Don't have an account? Register."}{" "}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        {/* <Box mt={8}>
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
