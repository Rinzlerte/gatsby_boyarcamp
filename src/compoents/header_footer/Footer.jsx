import React from 'react'
import Container from '../sections/elements/Container'

const Footer = ({nav}) =>  {

//

return  (
        <>
       
        <footer className='site-footer' 
        
        >
            <Container>
                <div className='footer-top'>
                    <h4>BOYAR CAMP</h4>
                </div>
            </Container>
            <Container>
                <div className='footer-bottom '>
                    <p>ТОВ "Смарт Простір Бояр" ©2013-2023</p>
                </div>
            </Container>
        </footer>
        </>
    )
}


export default Footer