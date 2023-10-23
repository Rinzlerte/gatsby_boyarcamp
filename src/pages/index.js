import * as React from "react"
import Layout from '../compoents/Layout'
import Hero from "../compoents/sections/hero/Hero"
import Camps from "../compoents/sections/camps/Camps"
import About from "../compoents/sections/about/About"
import Gallery from "../compoents/sections/gallery/Gallery"
import Team from "../compoents/sections/team/Team"

const IndexPage = () => {
  return (
    <Layout>
       <article>
          <Hero />
          <About />
          <Camps />
          <Gallery />
          <Team />
       </article>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
