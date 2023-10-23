import React from 'react'
import Section from '../elements/Section'
import Container from '../elements/Container'
import SectionTitle from '../elements/SectionTitle'

const About = ({children}) => {


   
  return (
    <Section id="about" className="blue-bg">
        <Container>
          <SectionTitle title={'Про нас'}  description={'about '} descriptionAdd={'Us'}/>


          <div className='services-wrapper'>

            <div className='services-wrapper--card'>
            <div className="services-item">
            <div className="services-item--icon"></div>
              <h3 className="services-item--title"> Навчання</h3>
              <p className="services-item--description">Усіх учасників ми розподіляємо на підгрупи відповідно до їхнього рівня англійської та віку. Заняття
  проходять в інтерактивній формі з використанням новітніх методик викладання. За умови хорошої
  погоди - в альтанках на вулиці, біля басейну, за столиками в лісі (який включений в територію
  комплексу), якщо дощить – в ігрових кімнатах, лаундж-зоні та конференц-залі.
              </p>
              </div>
            </div>
            <div className='services-wrapper--card'>
            <div className="services-item">
            <div className="services-item--icon"></div>
                <h3 className="services-item--title"> Розваги</h3>
                <p className="services-item--description">Друга половина кожного дня присвячена розвагам: екскурсії, квести, змагання, спортивні ігри,
  майстер-класи, воркшопи, тематичні вечірки, басейн, лазертаг, катання на конях, сплав по річці,
  дискотеки, поїздки на квадроциклах, туристичні походи та поїздки на велосипедах, караоке, кіно...
  Особливістю є те, що усі види дозвілля проводяться англійською мовою.
                </p>
              </div>
</div>
<div className='services-wrapper--card'>
<div className="services-item">
<div className="services-item--icon"></div>
                <h3 className="services-item--title"> Харчування</h3>
                <p className="services-item--description"> 4-разовое харчуваня, повноцінний сніданок, обід та вечеря доповнюється поживним підвечірком.
              Основне меню розроблене у відповідності до рекомендацій Міністерства охорони здоров'я.
              Додаткове харчування потішить дітей фруктами та солодощами.
                </p>
              </div>
</div>
<div className='services-wrapper--card'>
<div className="services-item">
<div className="services-item--icon"></div>
                <h3 className="services-item--title"> Розташування</h3>
                <p className="services-item--description">
                На території таборів розташовані , ресторани, нові спортивні майданчики, дитячі майданчики з
каруселями, батут, настільний теніс, басейни різної глибини - дитячі та дорослі(з підігрівом).
                </p>
              </div>
</div>
<div className='services-wrapper--card'>
<div className="services-item">
<div className="services-item--icon"></div>
                <h3 className="services-item--title">Проживання</h3>
                <p className="services-item--description">У кожному корпусі - 2,3,4 -місні номери зі зручностями. У кімнатах – односпальні та двоспальні ліжка,
              килимове покриття, телевізор, нові меблі, душ, туалет, фен та змінні рушники.
              </p>
              </div>
</div>
<div className='services-wrapper--card'>
<div className="services-item">
                  <div className="services-item--icon"></div>
                  <h3 className="services-item--title"> Здоровя</h3>
                  <p className="services-item--description">В штаті дитячого табору працює лікар. Вчасна медична допомога гарантує безпеку дітей та персоналу. Всі працівники проходять медичний огляд до початку роботи в таборі. Наші табори знаходяться у містах, де є лікарня із всіма необхідними спеціалістами
                  </p>
                </div>
</div>



         


            


            

            


          

            

          </div>
           {children}
        </Container>
    </Section>
  )
}

export default About