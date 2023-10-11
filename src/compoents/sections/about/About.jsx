import React from 'react'
import Section from '../elements/Section'
import Container from '../elements/Container'

const About = ({children}) => {
  return (
    <Section id="about">
        <Container>
           {children}
        </Container>
    </Section>
  )
}

export default About