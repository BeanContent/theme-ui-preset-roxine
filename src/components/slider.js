import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { useEffect } from 'react'
import '../styles/slider.css'
import Swiper from 'swiper';
function Slider({ data}) {

  useEffect(() => {
    const nextElm = document.querySelector('.swiper-button-next');
    const prevElm = document.querySelector('.swiper-button-prev');
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      grabCursor: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 0
        }, 520: {
          slidesPerView: 2,
          spaceBetween: 10
        }, 950: {
          slidesPerView: 3
        }
      }
    });
    nextElm.addEventListener('click', ()=>swiper.slideNext());
    prevElm.addEventListener('click', ()=>swiper.slidePrev());


  })
  return (
    <div className="slider__container">
      <div className='slider mySwiper'>
        <div className="slider__wrapper swiper-wrapper">
          {
            data.map((item, index) => {
              return <div key={index} className="slider__card swiper-slide">
                <div style={{ backgroundImage: `url('${item.profile_img.file.url}')` }} className="slider__card-image"></div>
                <div className="slider__card-content">
                  <h3 className="content__name">{item.fullName}</h3>
                  <h4 className="content__pos">{item.pos}</h4>
                </div>
              </div>
            })
          }
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>

      </div>
    </div>
  )
}

export default Slider