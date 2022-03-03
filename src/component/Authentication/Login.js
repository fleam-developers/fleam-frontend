import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {makeStyles} from '@mui/styles';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
//import Copyright from "../component/common/Copyright";
import {Alert} from "@mui/lab";
import {Snackbar} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {Card} from '@mui/material';
import {AuthService} from "../../service/AuthService";
import {delay} from "../../util/async";

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        maxWidth: "576px"
    },
    card: {
        marginTop: theme.spacing(8),
        padding: theme.spacing(4),
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));

export default function LoginPage() {
    const classes = useStyles();
    const navigate = useNavigate()

    const [password, setPassword] = React.useState("");
    const [username, setUsername] = React.useState("");

    const [open, setSnackbarOpen] = React.useState(false);
    const [severity, setSnackbarSeverity] = React.useState("success");
    const [snackbarMessage, setSnackbarMessage] = React.useState("Welcome back!");


    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpen(false);
    };

    return (
        <Container component="main" className={classes.cardContainer}>
        <Card className={classes.card}>
            <CssBaseline/>
            <div className={classes.paper}>

                <Avatar className={classes.avatar}> <LockOutlinedIcon/> </Avatar>
                <Typography component="h1" variant="h5"> Login </Typography>

                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        onChange={(event) => {
                            setUsername(event.target.value)
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={(event) => {
                            event.preventDefault();
                            console.log("Sign in button clicked.");
                            AuthService.login(username, password).then(r => {
                                console.log("Response: " + JSON.stringify(r.data));
                                AuthService.saveJwtToken(r.data.token);
                                AuthService.saveAuthRoles(r.data.auth);
                                setSnackbarSeverity("success");
                                setSnackbarMessage("Welcome back!");
                                setSnackbarOpen(true);

                                delay(1000).then(() => navigate("/browse"))
                            }).catch(e => {
                                setSnackbarSeverity("error");
                                if (e.response !== undefined && e.response.status === 401) {
                                    setSnackbarMessage("Entered credentials are incorrect.");
                                } else {
                                    setSnackbarMessage("Something went wrong!");
                                }
                                setSnackbarOpen(true);
                            })
                        }}
                    >
                        Login
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="/password-reset" variant="body2"> Forgot password? </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/register" variant="body2"> {"Don't have an account? Register."} </Link>
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