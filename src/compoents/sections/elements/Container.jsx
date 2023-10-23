import React from 'react'

const Container = (props) =>  (
    <div className={ props.addClass? `site-container ${props.addClass}` : `site-container` } >{props.children}</div>
)

export default Container