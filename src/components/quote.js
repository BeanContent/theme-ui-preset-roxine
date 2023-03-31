import { Link } from 'gatsby'
import React from 'react'
import '../styles/quote.css';


function Quote({quote, translation}) {
  const { title, content, posPage, slug, textButton,background } = quote;
  return (
    <section style={{backgroundImage: `url('${background.file.url}')`}} className='quote'>
      <div className="quote__title">
        <h4 className="quote__title-text">{title}</h4>
      </div>
      <div className="quote__content">
        <h1 className="quote__content-text">{content}</h1>
      </div>
      <div className="quote__link">
        <Link className='quote__link-text' to={slug}>{textButton}</Link>
      </div>
    </section>
  )
}

export default Quote