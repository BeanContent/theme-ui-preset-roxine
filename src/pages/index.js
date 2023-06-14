import "animate.css";
import { graphql } from "gatsby";
import React, { Suspense } from "react";
import Analysis from "../components/analysis/analysis";
import Caption from "../components/caption/caption";
import Categories from "../components/categories/categories";
import Culture from "../components/culture/culture";
import Galleries from "../components/galleries/galleries";
import Layout from "../components/layout/layout";
import Quote from "../components/quote/quote";
import Story from "../components/story/story";
import Team from "../components/team/team";
import Testimonials from "../components/testimonials/testimonials-slider";
import "../styles/global.css";
const HomePage = ({ data }) => {
  const culture = data.allContentfulWork.nodes[0];
  const story = data.allContentfulStory.nodes[0];
  const galleries = data.allContentfulGallery.nodes;
  const caption = data.allContentfulCaption.nodes[0];
  const categories = data.allContentfulCategoriesExperts.nodes;
  const quotation = data.allContentfulQuotation.nodes[0];
  const team = data.allContentfulMember.nodes;
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Layout>
        <Caption data={caption} />
        <Categories data={categories} />
        <Quote quote={quotation} />
        <Galleries data={galleries} />
        <Story data={story} />
        <Culture data={culture} />
        <Team data={team} />
        <Analysis />
        <Testimonials />
      </Layout>
    </Suspense>
  );
};
// ($language: String!)
export const query = graphql`
  query HomeQuery {
    allContentfulQuotation(
      filter: { posPage: { eq: "home" }, node_locale: { eq: "en-US" } }
    ) {
      nodes {
        title
        content
        id
        posPage
        slug
        textButton
        background {
          file {
            url
          }
        }
      }
    }
    allContentfulCaption(filter: { node_locale: { eq: "en-US" } }) {
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
    allContentfulCategoriesExperts(
      sort: { createdAt: ASC }
      filter: { node_locale: { eq: "en-US" } }
    ) {
      nodes {
        description
        link
        title
        iconClass
      }
    }
    allContentfulGallery(filter: { node_locale: { eq: "en-US" } }) {
      nodes {
        name
        id
        slug
        images {
          gatsbyImageData
        }
      }
    }
    allContentfulStory(filter: { node_locale: { eq: "en-US" } }) {
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
    allContentfulWork(filter: { node_locale: { eq: "en-US" } }) {
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
    allContentfulMember(filter: { node_locale: { eq: "en-US" } }) {
      nodes {
        fullName
        pos
        profile_img {
          file {
            url
          }
          gatsbyImageData
        }
      }
    }
  }
`;

export default HomePage;
export const Head = () => {
  return (
    <>

      <link
        href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css"
        rel="stylesheet"
        type="text/css"
      />
    </>
  );
};
