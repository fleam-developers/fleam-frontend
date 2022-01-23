import React from 'react'
import JumboItem from './JumboItem'

export default function JumboItems(props) {
    return (
        <div>
            {props.items.map(item => (
                <JumboItem key={item.id} {...item} />
            ))}
        </div>
    )
}
