import React from 'react'
import {Link} from 'gatsby'

const Button = (props) => {

    if (props.isLink) return (
        <Link to={props.url} className='site-btn'>
            {props.children}
        </Link>
    )

    return (
        <button type='button' className='site-btn' {...props}>{props.children}</button>
    )
}

export default Button