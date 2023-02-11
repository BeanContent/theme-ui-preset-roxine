import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'
import '../styles/caption.css'

function Caption() {
  const query = useStaticQuery(graphql`
  query CaptionQuery {
    allContentfulCaption {
      nodes {
        button
        subtitle
        title
        description
        imageCaption {
          gatsbyImageData
        }
      }
    }
  }
  `)
  const caption = query.allContentfulCaption.nodes[0];
  const bgImage = getImage(caption.imageCaption.gatsbyImageData);
  return (
    <div className='caption'>
      <div className="caption__info">
        <div className="caption__subtitle animate__animated animate__fadeInLeft">
          <h2 className='caption__subtitle-text'>{caption.subtitle}</h2>
        </div>
        <div className="caption__maintitle animate__animated animate__zoomIn">
          <h1 className="caption__maintitle-text">{caption.title}</h1>
        </div>
        <div className="caption__description animate__animated animate__fadeInRight">
          <p className="caption__description-text">{caption.description}</p>
        </div>

        <a href="#" className="caption__link-btn animate__animated animate__fadeInUp">{caption.button}</a>

      </div>
      <div className='caption__banner' style={{ backgroundImage: `url(${bgImage.images.fallback.src})` }}> </div>
    </div>
  )
}

export default Caption;