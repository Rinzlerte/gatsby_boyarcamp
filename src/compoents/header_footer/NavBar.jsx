import React from 'react'
import Container from '../sections/elements/Container'
import {Link} from 'gatsby'

const NavBar = ({menulist, open, menutoggler }) => {
  return (
    <nav>
     <Container>
        <Link to="/" className='brandname'>
          <h1>BOYAR<span>CAMP</span> </h1>
        </Link>
     {/* <ul>
        <li>
          
        </li>
       </ul> */}

       <div className='menu-side'>

       <ul className='laptop-nav'>
        <li>
          <Link to="/#about">
          ПРО НАС
          </Link>
        </li>
        <li>
          <Link to="/#camps">
          ТАБОРИ
          </Link>
        </li>
        <li>
          <Link to="/#gallery">
          Галерея
          </Link>
        </li>
        <li>
          <Link to="/#bording">
          Бронювання
          </Link>
        </li>
       </ul>

       <div className='menu-btn-wrapper'>
          <span>MEНЮ</span>
          <div className='menu-btn' onClick={menutoggler}>
            <div className='menu-btn--inner'>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
       </div>

     </Container>
    </nav>
  )
}

export default NavBar