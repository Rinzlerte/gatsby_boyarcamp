import React from 'react'
import Section from '../elements/Section'
import Container from '../elements/Container'
import ContactForm from '../../forms/ContactForm'

const Contact = () => {
  return (
    <Section id="contact">
        <Container addClass="square-bg">

                <div className='contact-section--wrapper'>
                    <div className="getting-camp">
                    <span className="title blue_color">BOYAR</span>
                    <div className="getting_list">
                    <span style={{marginTop: `25px`}}>Забронювати путівку</span>
                    <p>У формі нижче вказати контактні дані</p>
                    <span  style={{marginTop: `25px`}}>Необхідні документи</span>
                    <p>Свідоцтво про народження дитини <br/>
                    Паспорт одного із батьків <br/>Договір<br/>
                    Путівка
                    <br/>Медична довідка(079о)
                    <br/>Квитанція про оплату </p>
                    <span style={{marginTop: `25px`}}>ОПЛАТА</span>
                    <p>Від моменту бронювання необхідно оплатити вартість заїзду протягом 7 днів і надіслати квитанцію</p>
                    </div> 
                    </div>
                </div>

            <ContactForm  />
        </Container>
    </Section>
  )
}

export default Contact