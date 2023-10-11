import React from 'react'
import Section from '../elements/Section'
import Container from '../elements/Container'

const AboutCamp = (props) => {
  return (
    <Section id="aboutcamp">
        <Container>


                    {props.children}
        </Container>
    </Section>
  )
}

export default AboutCamp