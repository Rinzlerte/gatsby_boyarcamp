import React from 'react'
import Layout from '../compoents/Layout'
import CampHero from '../compoents/sections/campHero/CampHero'
import AboutCamp from '../compoents/sections/aboutCamp/AboutCamp'
import CampDetails from '../compoents/sections/campDetails/CampDetails'
import CampServices from '../compoents/sections/campServices/CampServices'
import CampProgram from '../compoents/sections/campProgram/CampProgram'
import CampGallery from '../compoents/sections/campGallery/CampGallery'

const TestCamp = () => {
  return (
    <Layout iscamp={true}>
        <CampHero />
        <AboutCamp />
        <CampDetails />
        <CampServices />
        <CampProgram />
        <CampGallery />
    </Layout>
  )
}

export default TestCamp

export const Head = () => <title>Camp Page</title>