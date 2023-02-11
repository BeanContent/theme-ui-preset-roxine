import { Link } from 'gatsby'
import React, { useEffect, useRef, useState } from 'react'
import '../styles/sidebar.css'

function Sidebar({ isOpenPanel, setIsOpen }) {
  const socialList = [
    {
      name: 'facebook',
      path: '',
      icon: 'fab fa-facebook-f'
    }, {
      name: 'twitter',
      path: '',
      icon: 'fab fa-twitter'
    }, {
      name: 'google+',
      path: '',
      icon: 'fab fa-google-plus-g'
    }, {
      name: 'pinterest',
      path: '',
      icon: 'fab fa-pinterest'
    }, {
      name: 'dribble',
      path: '',
      icon: 'fas fa-basketball-ball'
    },
  ]
  const navList = [
    {
      name: 'Home',
      path: '/'
    }, {
      name: 'About',
      path: '/about'
    }, {
      name: 'Blog',
      path: '/blog'
    }, {
      name: 'Contact',
      path: 'contact'
    }, {
      name: 'Login',
      path: '/login'
    }, {
      name: 'Register',
      path: '/regis'
    },
  ]


  useEffect(() => {

  })
  return (
    <div className='sidebar' style={{right: isOpenPanel ? '0':'-100%',visibility: isOpenPanel ? 'visible' : 'hidden'}}>
      <div className="sidebar__top">
        <div className="sidebar__top-close">
          <a href='#' onClick={setIsOpen} id='close__btn' className='close__btn'>Close Panel  <i className="far fa-long-arrow-right"></i></a>
        </div>
        <div className="sidebar__top-social">
          <a href="httpsh://facebook.com" className="facebook">
            <i className="fab fa-facebook-f"></i>
            <p>LOGIN WITH FACEBOOK</p>
          </a>
          <a href="https://google.com" className="google">
            <i className="fab fa-google-plus-g"></i>
            <p>LOGIN WITH GOOGLE</p>
          </a>
        </div>
      </div>
      <div className="sidebar__middle">
        {
          navList.map((item, index) => {
            return (
              <Link style={isOpenPanel ? { '--animate-duration': `${((index+3.5)/5)}s` } : null} className={isOpenPanel ? 'sidebar__middle-link animate__animated animate__fadeInRight' : 'sidebar__middle-link'} key={index} to={item.path}>{item.name}</Link>
            )
          })
        }
      </div>
      <div className="sidebar__bottom">
        {
          socialList.map((item, index) => {
            return (
              <a key={index} className='sidebar__bottom-link' href={item.path}>
                <i className={item.icon}></i>
              </a>
            )
          })
        }
      </div>
    </div>
  )
}

export default Sidebar