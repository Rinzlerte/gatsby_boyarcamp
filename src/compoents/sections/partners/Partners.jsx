import React from 'react'
import Section from '../elements/Section'
import Container from '../elements/Container'

import wellandImg from '../../../images/icon.png'
import plaiImg from '../../../images/icon.png'
import knowledge from '../../../images/icon.png'
import SectionTitle from '../elements/SectionTitle'

import './partners.scss'

const Partners = () => {


    const data = [
        {
            "name" : "КЛУБ ГОТЕЛЬ  WELLLAND",
            "url": "http://www.wellland.com.ua/",
            "image": wellandImg
        },
        {
            "name" : "ГІРСЬКО ЛИЖНИЙ КОМПЛЕКС ПЛАЙ",
            "url": "https://play-karpaty.com/",
            "image": plaiImg
        },
        {
            "name" : "ОСВІТНЕ АГЕНТСТВО LINGUA",
            "url": "https://lingua-franca.org.ua/",
            "image": knowledge
        }
    ]

    return (
        <Section id="partners">
            <Container>
                <SectionTitle title={'Партнери'} description={'our '} descriptionAdd={'Partners'}/>
               
                <div className='partners-wrapper'>
                {
                    data.map((item, index)=> ( 
                        <div className="partner-card" key={index}>
                            <div className='partner-card--inner'>
                                <div className="partner-card--cover">
                                    <img className="partner-card--image" src={item.image} alt={item.name} loading='lazy' />
                                </div>
                                <a href={item.url} target='_blank' rel="noopener noreferrer">
                                    <h3> {item.name}</h3>
                                </a>
                            </div>
                        </div>
                    ))
                }
                </div>
               
            </Container>
        </Section>
    )
}

export default Partners