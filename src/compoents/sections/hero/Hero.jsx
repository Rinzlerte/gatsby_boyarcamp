import React from 'react'
import Section from '../elements/Section'
import Container from '../elements/Container'

import './hero.scss'

const Hero = ({ title }) => {
  return (
    <Section id="hero" className="hero-section">
      <Container>
        <div className="hero-row">
          <div className="hero-column-left">
            <h1 className="hero-title">
              <strong>НАЙКРАЩИЙ АНГЛОМОВНИЙ ТАБІР </strong>
            </h1>
            <div className="hero-paragraph-holder">
              <div className="paragraph-hero">
                BOYAR CAMP - табір, де ми створюємо англомовне середовище, щоб діти могли вільно спілкуватися англійською, опанувати розмовну мову та подолати мовний бар'єр
              </div>
              <div className="paragraph-hero">
              З дітьми працюють досвідчені педагоги та носії мови. Для кожного заїзду розробляється спеціальна інтерактивна програма: заняття та розваги проводятся виключно англійською мовою.
              </div>
            </div>

            <br/>
            <a href='#about' className='btn'>
              Детальніше
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Hero