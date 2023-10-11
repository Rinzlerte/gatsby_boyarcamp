import React from 'react'
import Section from '../elements/Section'
import Container from '../elements/Container'
const Hero = ({title}) => {
  return (
    <Section id="hero" className="hero-section">
        <Container>
          <h3>{title}</h3>
        </Container>
    </Section>
  )
}

export default Hero