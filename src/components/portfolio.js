import { graphql, Link, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React, { useEffect } from 'react';
import '../styles/portfolio.css';

function Portfolio() {
    const menu = [
        {
            name: 'all',
            slug: '/'
        }, {
            name: 'ui/ux design',
            slug: '/'
        }, {
            name: 'programming',
            slug: '/'
        }, {
            name: 'photography',
            slug: '/'
        }, {
            name: 'ecommerce',
            slug: '/'
        }
    ]
    const query = useStaticQuery(graphql`
    query PortfolioQuery {
        allContentfulGallery {
          nodes {
            name
            id
            slug
            images {
              file {
                url
              }
            }
          }
        }
      }
    `)
    const galleries = query.allContentfulGallery.nodes;



    return (
        <section className="portfolio">
            <div className="portfolio__title">
                <h2 className="portfolio__title-text">The work</h2>
            </div>
            <ul className="portfolio__nav-list">
                {
                    menu.map((item, index) => {
                        return <li key={index} className="list__item">
                            <Link className='list__item-link' to={item.slug}>{item.name}</Link>
                        </li>
                    })
                }
            </ul>
            <div className="portfolio__galleries">
                <div className="portfolio__galleries-list">
                    {
                        galleries.map((item, index) => {
                            return <div key={index} className="portfolio__container">
                                <div style={{ backgroundImage: `url('${item.images[0].file.url}')` }} className="list__gallery">
                                    <a className="list__gallery-fav icon-heart">
                                    </a>
                                    <a className="list__gallery-slug icon-link">
                                    </a>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolio;