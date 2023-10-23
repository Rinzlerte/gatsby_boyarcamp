import React from 'react'
import {Link} from 'gatsby'

const SideMenu = ({menutoggler}) => {

   

  return (
    <div className='backdrop' onClick={menutoggler}>
      <div className="backdrop-wrapper">
      <aside className='side-menu' onClick={(event)=> event.stopPropagation()}>
        <div className='side-menu--conntainer'>
            <ul>
              <li>
                  <Link to="/" onClick={menutoggler}>Головна</Link>
              </li>
            
              <li>
                  <Link to="/#about" onClick={menutoggler}>Про нас</Link>
              </li>
              <li>
                  <Link to="/#camps" onClick={menutoggler}>Табори</Link>
                  <div>
                    <ul>
                      <li>
                          <Link to="/#camps" onClick={menutoggler}>Табір 1</Link>
                      </li>
                      <li>
                          <Link to="/#camps" onClick={menutoggler}>Табір 1</Link>
                      </li>
                      <li>
                          <Link to="/#camps" onClick={menutoggler}>Табір 1</Link>
                      </li>
                    </ul>
                  </div>
              </li>
              <li>
                  <Link to="/#gallery" onClick={menutoggler}>Галерея</Link>
              </li>
              <li>
                  <Link to="/#border" onClick={menutoggler}>Бронювання</Link>
              </li>
            </ul>
        </div>
      </aside>
      </div>
     
    </div>
  )
}

export default SideMenu