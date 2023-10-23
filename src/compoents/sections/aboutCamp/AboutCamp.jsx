import React from 'react'
import Section from '../elements/Section'
import Container from '../elements/Container'
import SectionTitle from '../elements/SectionTitle'


const AboutCamp = (props) => {
  return (
    <Section id="aboutcamp">
        <Container>
        <SectionTitle title={'Про табір'}  description={'about'} descriptionAdd={'Camp'}/>

                    {props.children}
        </Container>
    </Section>
  )
}

export default AboutCamp