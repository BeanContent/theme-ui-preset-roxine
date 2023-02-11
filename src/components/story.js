import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import divider from '../images/divider.png';
import '../styles/story.css'

function Story() {
  const query = useStaticQuery(graphql`
  query StoryQuery {
    allContentfulStory {
      nodes {
        content1
        content2
        content3
        description
        subtitle
        title
        slug
        buttonLabel
        contentList {
          slug
          name
        }
      }
    }
  }
  `)
  const { content1, content2, content3, description, subtitle, title, contentList, slug, buttonLabel } = query.allContentfulStory.nodes[0];
  return (
    <section className="story">
      <div className="story__header">
        <h4 className="story__header-subtitle">{subtitle}</h4>
        <h2 className="story__header-maintitle">{title}</h2>
        <p className="story__header-des">
          {description}
        </p>
        <img className='story__header-divider' src={divider} alt="" />
      </div>
      <div className="story__body">
        <div className="story__body-col">
          <p className="stody__body-content1 content">
            {content1}
          </p>
          <p className="story__body-content2 content">
            {content2}
          </p>
          <Link to={slug} className="story__body-slug">{buttonLabel}</Link>
        </div>
        <div className="story__body-col">
          <p className="story__body-content3 content">
            {content3}
          </p>
          <ul className="story__body-list">
            {
              contentList.map((item, index) => {
                return <li key={index} className="list__item">
                  <Link to={item.slug} className="list__item-link">{item.name}</Link>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Story