import React from 'react'
import Card from '@material-ui/core/Card'

export default function MovieCard(props) {
    return (
        <Card>
            <img
            src={props.image}
            ></img>

            <h3>{props.title}</h3>
        </Card>
    )
}
