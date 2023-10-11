import React from 'react'
import {Link} from 'gatsby'

const Camp = ({item}) => {
  return (
    <div className='camp'>
        {/* <Link className='camp-card' to={item.path}>
          <div className='camp-card--cover'>
          </div>
          <h3 className='camp-card--title'>{item.title}</h3>
          {item.desc &&   <p className='camp-card--desc'>{item.desc}</p> }
        </Link> */}
    </div>
  )
}

export default Camp