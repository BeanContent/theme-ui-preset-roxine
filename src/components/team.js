import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Slider from './slider'
import '../styles/team.css'
import { StaticImage } from 'gatsby-plugin-image'
import divider from '../images/divider.png'
import toCapitalize from '../libs/toCapitalize';

function Team() {
    const query = useStaticQuery(graphql`
  query MemberQuery {
    allContentfulMember {
      nodes {
        fullName
        pos
        profile_img {
          file{
            url
          }
        }
      }
    }
  }
  `)
    const members = query.allContentfulMember.nodes;
    return (
        <section className='team'>
            <div className="team__head">
                <h4 className="team__head-subtitle">who we are</h4>
                <h2 className="team__head-title">team work</h2>
                <p className="team__head-des">{toCapitalize('we really love what we do & our work on every project truly reflects that.')}</p>
                <StaticImage className='team__head-divider' src='../images/divider.png' alt="divider" />
            </div>
            <Slider data={members} />
            <div className="team__foot">
                <p className="team__foot-content">
                    {toCapitalize('Martin loves gossiping code on his iPhone. Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.')}
                </p>
            </div>
        </section>
    )
}

export default Team