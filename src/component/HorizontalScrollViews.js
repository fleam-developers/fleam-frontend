import React from 'react'
import HorizontalScrollView from "./HorizontalScrollView";


export default function HorizontalScrollViews(props) {
    return (
        <div>
            {props.categories.map(category => (
                <HorizontalScrollView key={category.id} {...category} />
            ))}
        
        </div>
    )
}

