import React from 'react'
import {makeStyles} from '@mui/styles';
import {Card} from '@mui/material';

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: '5px',
    },

}));

export default function PrimaryCard(props) {
    const classes = useStyles();
    
    return (
        <Card className={classes.card}>
            {props.children} 
        </Card>
    )
}
