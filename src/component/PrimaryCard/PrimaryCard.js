import React from 'react'
import {makeStyles} from '@mui/styles';
import {Card} from '@mui/material';

import "./PrimaryCard.scss";

export default function PrimaryCard(props) {
    
    return (
        <Card className="primary-card">
            {props.children} 
        </Card>
    )
}
