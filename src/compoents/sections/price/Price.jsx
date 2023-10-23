import React from 'react'
import SectionTitle from '../elements/SectionTitle'
import Section from '../elements/Section'
import Container from '../elements/Container'
import Accordion from '../../ui/accordion/Accordion';

import './price.scss'

const Price = () => {
  return (
    <Section id="cost">
        <Container>
            <SectionTitle title="ЦІНИ ТА ДАТА ЗАІЗДУ" description={'price and '} descriptionAdd={'race date'}/>

            <div className="raceprice-wrapper">
                <div className="raceprice-wrapper--box">
                    {costTitle?.map((item, index) =>  (
                        <div key={index} className='race'>
                            <div style={{ alignItems: `center` }} >
                                <div className="cost-icon" style={{ marginRight: `24px` }}>
                                    {renderIcon(index)}
                                </div>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="races">
                    {data.map((item, index) => (
                        <Accordion
                            key={index}
                            title={item.name}
                            about={item.about}
                            timing={item.timing}
                            reservation={item.reservation}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
        </Container>
    </Section>
  )
}

export default Price