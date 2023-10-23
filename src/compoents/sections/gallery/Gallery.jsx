import React from 'react'
import SectionTitle from '../elements/SectionTitle'
import Section from '../elements/Section'
import Container from '../elements/Container'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './gallery.scss'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import GalleryCard from './ui/GalleryCard'

const Gallery = () => {
  return (
    <Section id="gallery">
      <Container>
        <div className='container-row'>
        <SectionTitle title={'галерея'} description={"photo "} descriptionAdd={"Gallery"} />
          {/* <div className='gallery-wrapper'>
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
          </div> */}
          <Swiper
            spaceBetween={20}
            // centeredSlides={true}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            grabCursor={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>

        </div>
      
      </Container>
    </Section>
  )
}

export default Gallery