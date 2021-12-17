import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Card} from '@material-ui/core';

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
