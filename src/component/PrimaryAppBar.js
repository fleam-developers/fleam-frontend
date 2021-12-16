import React, {useState} from 'react';
import {alpha, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {useNavigate} from 'react-router-dom';
import {InputBase} from "@material-ui/core";
import logo from '../resource/logo.png';
import {AuthService} from "../service/AuthService";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 0,
        marginLeft: theme.spacing(1),
    },
    search: {
        flexGrow: 1,
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.text.primary, 0.05),
        '&:hover': {
            backgroundColor: alpha(theme.palette.text.primary, 0.20),
        },
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(50),
            marginRight: theme.spacing(50),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchInputRoot: {
        color: 'inherit',
    },
    searchInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    logo: {
        maxWidth: '90px',
    },
    appBar: {}
}));

export default function PrimaryAppBar() {
    const classes = useStyles();
    const navigate = useNavigate()

    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className={classes.grow}>
            <AppBar position="fixed" variant="outlined" className={classes.appBar}>
                <Toolbar>
                    <img src={logo} style={{"cursor": "pointer"}} alt="fleam" className={classes.logo}
                         color={'#00e3aa'}
                         onClick={() => navigate("/")}/>
                    <Typography
                        variant="h6"
                        style={{color: '#00e3aa', fontWeight: 'bold', "cursor": "pointer"}}
                        className={classes.title}
                        onClick={() => navigate("/feed/Popular")}
                    >
                    </Typography>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search anything…"
                            classes={{
                                root: classes.searchInputRoot,
                                input: classes.searchInput,
                            }}
                            onChange={(event => {
                                setSearchQuery(event.target.value);
                            })}
                            onKeyUp={(event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    navigate(`/search/${searchQuery}`)
                                }
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>


                    <IconButton

                        onClick={() => {
                            if (AuthService.hasLoggedIn()) {
                                navigate(`/profile/${AuthService.getUsername()}`)
                            } else {
                                navigate("/sign-up")
                            }
                        }}
                    >
                        <AccountCircle/>
                    </IconButton>

                </Toolbar>
            </AppBar>
        </div>
    );
}