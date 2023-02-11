import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import '../styles/culture.css'
import divider from '../images/divider.png';
function Culture() {
  const query = useStaticQuery(graphql`
  query MyQuery {
    allContentfulWork {
      nodes {
        description
        bgImage {
          file {
            url
          }
        
        }
        title
        description
        subtitle
        content {
          content
        }
      }
    }
  }
  `)
  const { description, bgImage, title, subtitle, content } = query.allContentfulWork.nodes[0];
  return (
    <section className="culture">
      <div style={{ backgroundImage: `url('${bgImage.file.url}')` }} className="culture__background"></div>
      <div className="culture__container">
        <h4 className="culture__subtitle">{subtitle}</h4>
        <h2 className="culture__maintitle">{title}</h2>
        <p className="culture__des">{description}</p>
        <img className='culture__divider' src={divider} alt="" />
        <p className="culture__content">{content.content}</p>
      </div>
    </section>
  )
}

export default Culture