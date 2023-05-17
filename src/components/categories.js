
import React from 'react'
import Category from './category'
import divider from '../images/divider.png';
import '../styles/categories.css';
function Categories({data}) {
  return (
    <div className='categories'>
      <div className="categories__subject">
          <h2 className="categories__subject-subtitle">what we do</h2>
          <h1 className="categories__subject-maintitle">experts</h1>
          <p className="categories__subject-description">We build digital solutions.</p>
          <img className='categories__subject-divider' src={divider} alt=''/>
      </div>
      {
        data.map((category,index) => {
          return <Category key={index} category={category} />
        })
      }
    </div>
  )
}

export default Categories