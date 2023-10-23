import React from 'react'
import Section from '../elements/Section'
import Container from '../elements/Container'
import Camp from './ui/CampCard'
import Separator from '../../ui/separator/Separator'
import SectionTitle from '../elements/SectionTitle'

import './camps.scss'

const Camps = () => {

const camps = [
    {
        title:'BoyarCamp Осінь 2023',
        desc: "Карпати, Яремче 21/10-28/10",
        path: "/testcamp",
        owned: false
    },
    {
        title:'BoyarCamp Осінь 2023',
        desc: "Карпати, Яремче 21/10-28/10",
        path: "/testcamp",
        owned: false
    },
    {
        title:'BoyarCamp Осінь 2023',
        desc: "Карпати, Яремче 21/10-28/10",
        path: "/testcamp",
        owned: true
    },
    {
        title:'BoyarCamp Осінь 2023',
        desc: "Карпати, Яремче 21/10-28/10",
        path: "/testcamp",
        owned: false
    },  {
        title:'BoyarCamp Осінь 2023',
        desc: "Карпати, Яремче 21/10-28/10",
        path: "/testcamp",
        owned: true
    },  {
        title:'BoyarCamp Осінь 2023',
        desc: "Карпати, Яремче 21/10-28/10",
        path: "/testcamp",
        owned: true
    }
]
  return (
    <Section id="camps">
        <Container>
            <SectionTitle 
                title="Наші табори" 
                description={"Adnventures and"} 
                descriptionAdd={" Learning"}
            />
            <h3 className='heading'>
            Осінь 2023
            </h3>
            <div className='camps-wrapper'>
            {
                camps.filter((camp)=> camp.owned !== true).map((camp, index)=>{
                    return (
                        <Camp key={index} item={camp} />
                    )
                })
            }
            </div>
            <br/>
            <Separator/>
            <br/>
            <h3 className='heading'> Минулі табори 2013-2023 </h3>
            <div className='camps-wrapper'>
            {
                camps.filter((camp)=> camp.owned === true).map((camp, index)=>{
                    return (
                        <Camp key={index} item={camp} />
                    )
                })
            }
            </div>
        </Container>
    </Section>
  )
}

export default Camps