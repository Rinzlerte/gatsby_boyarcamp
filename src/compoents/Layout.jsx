import React from 'react'
import Header from './header_footer/Header'
import Footer from './header_footer/Footer'
import Partners from "../compoents/sections/partners/Partners"
import Contact from "../compoents/sections/contact/Contact"
import { useRef, useEffect, useState} from 'react'

import '../styles/global.scss'

const getScrollNode = (element) => {
  return element.ownerDocument.scrollingElement || element.ownerDocument.documentElement
}
const isScrolled = (element) => {
  const scrollNode = getScrollNode(element)
  return scrollNode.scrollTop > 0
}

const Layout = ({children}) => {
  const [scrolled, setScrolled] = useState(false);

  const siteContainer = useRef();

  const handleScroll=()=> {
    const element = siteContainer.current
    setScrolled(isScrolled(element))
    console.log("scroll", element)
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
    const element = siteContainer.current
    setScrolled(isScrolled(element));


    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <div ref={siteContainer} id='sitetop'>
        <Header />
        <main>
          {children}
          <Contact title="Contact"/>
          <Partners />
        </main>
      <Footer />
    </div>
  )
}

export default Layout