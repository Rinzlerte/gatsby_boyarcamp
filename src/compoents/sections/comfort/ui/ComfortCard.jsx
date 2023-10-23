import React from 'react'

const ComfortCard = ({title, text, image}) => (
    <div className="comfort-card">
        <div className="comfort-card--inner">
            <img src={image} alt={title}/>
            <span>{title}</span>
            <p>{text}</p>
        </div>
    </div>
)

export default ComfortCard