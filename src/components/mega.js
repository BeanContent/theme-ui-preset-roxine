import { Link } from 'gatsby'
import React from 'react'
import toUpperCase from '../libs/toUpperCase'
import toDOMElm from '../libs/toDOMElm'
import '../styles/mega.css';
import { useState } from 'react';
function MegaMenu({ name, menu }) {

    const [isOpen, setIsOpen] = useState(false);

    function openMega(){
        setIsOpen(!isOpen);
    }

    return (
        <>
            <a onClick={()=>openMega()} href='#' className='mega__toggle'>{name}</a>
            <div className={isOpen ? 'mega__menu animate__animated animate__fadeIn show':'mega__menu animate__animated animate__fadeIn'}>
                {menu.map((item, index) => {
                    return <div key={index} className="mega__menu-group">
                        {
                            item.dropdown.map((subItem, index) => {
                                return <div className='group__item' key={index}>
                                    <div className="group__item-container">
                                        <i className={subItem.icon}></i>
                                        <Link to={subItem.path} className="group__item-link">{toUpperCase(subItem.name)}</Link>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                })}
            </div>
        </>
    )
}

export default MegaMenu