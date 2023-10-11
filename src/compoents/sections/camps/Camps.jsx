import React from 'react'
import Section from '../elements/Section'
import Container from '../elements/Container'
import Camp from './ui/CampCard'
import Separator from '../../ui/separator/Separator'

const Camps = () => {

const camps = [
    {
        title: '1',
        desc: 'omg',
        owned: false
    },
    {
        title: '2',
        desc: 'omg',
        owned: false
    },
    {
        title: '3',
        desc: 'omg',
        owned: true
    },
    {
        title: '4',
        desc: 'omg',
        owned: false
    },  {
        title: '5',
        desc: 'omg',
        owned: true
    },  {
        title: '6',
        desc: 'omg',
        owned: true
    }
]
  return (
    <Section id="contact">
        <Container>
            {
                camps.filter((camp)=> camp.owned !== true).map((camp, index)=>{
                    return (
                        <Camp key={index} item={camp} />
                    )
                })
            }
            <Separator/>
            {
                camps.filter((camp)=> camp.owned == true).map((camp, index)=>{
                    return (
                        <Camp key={index} item={camp} />
                    )
                })
            }
        </Container>
    </Section>
  )
}

export default Camps