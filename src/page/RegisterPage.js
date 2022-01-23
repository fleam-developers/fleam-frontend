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
//import Copyright from "../component/common/Copyright";
import {AuthService} from "../service/AuthService";
import {Alert} from "@mui/lab";
import {Snackbar} from "@mui/material";
import {useNavigate} from "react-router-dom";
//import {delay} from "../util/async";
import {Card} from '@mui/material';

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
        maxWidth: "576px"
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

export default function RegisterPage() {
    const classes = useStyles();
    const navigate = useNavigate();

    const [password, setPassword] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");

    const [open, setSnackbarOpen] = React.useState(false);
    const [severity, setSnackbarSeverity] = React.useState("success");
    const [snackbarMessage, setSnackbarMessage] = React.useState("");

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpen(false);
    };

    return (
        <Container component="main" className={classes.cardContainer} >
        <Card className={classes.card}>
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="uname"
                                label="Username"
                                name="uname"
                                autoComplete="username"
                                value={username}
                                onChange={(event) => {
                                    setUsername(event.target.value)
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email address"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
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
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
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
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Login.
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