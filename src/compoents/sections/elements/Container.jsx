import React from 'react'

const Container = (props) =>  (
    <div className={`site-container ${props.addClass}`} {...props}>{props.children}</div>
)

export default Container