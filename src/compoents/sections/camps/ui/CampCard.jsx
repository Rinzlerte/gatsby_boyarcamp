import React from 'react'
import {Link} from 'gatsby'

import image from '../../../../images/squarebg.webp'

const Camp = ({item}) => {
  return (
    <div className='camp-card'>
      <div className='camp-card--inner'>
        <div className='camp-card--cover'>
          <img src={image} alt='ff' className='fluid-image'/>
        </div>
          <Link to={item.path || '/'}  style={{color: `inherit`}}>
            <h3 className='camp-card--title'>{item.title}</h3>
            {item.desc &&  <p className='camp-card--desc'>{item.desc}</p> }
          </Link>
         
      </div>
    </div>
  )
}

export default Camp