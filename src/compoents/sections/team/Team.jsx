import React from 'react'
import SectionTitle from '../elements/SectionTitle'
import Section from '../elements/Section'
import Container from '../elements/Container'
import './team.scss';

const Team = () => {
  const basic = '#f9f9f9'
  return (
    <>
 <svg xmlns="http://www.w3.org/2000/svg" 
        style={{
             width: `100%`, height: `6rem`, marginTop: `3rem`
        }}  
        viewBox="0 0 1440 320" preserveAspectRatio="none"  
        ><path fill={basic} fillOpacity="1" d="M0,64L60,58.7C120,53,240,43,360,69.3C480,96,600,160,720,186.7C840,213,960,203,1080,186.7C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

<Section id="team" style={{
             position: `relative`, marginTop: `-1rem`
         }} className="grey-bg">
      <Container  addClass="white-bg">
        <SectionTitle  title={"команда"} description={"our "} descriptionAdd={"Team"}/> 
          <div className='team-wrapper square-bg'>

          </div>
      </Container>
    </Section>
    </>
 
  )
}

export default Team