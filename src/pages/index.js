import * as React from "react"
import { Suspense } from "react";
import Layout from "../components/layout"
import 'animate.css';
import '../styles/global.css';
import Categories from "../components/categories";
import Quote from "../components/quote";
import { graphql, Script } from "gatsby";
import Portfolio from "../components/portfolio";
import Story from "../components/story";
import Culture from "../components/culture";
import Team from "../components/team";
import Analysis from "../components/analysis";
import { useState } from "react";
import Dropdown from "../components/dropdown";
import Caption from "../components/caption";



const IndexPage = ({ data }) => {
  const caption = data.allContentfulCaption.nodes[0];
  const categories = data.allContentfulCategoriesExperts.nodes;
  const quotation = data.allContentfulQuotation.nodes[0];
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Layout>
        <Caption data={caption}/>
        <Categories data={categories}/>
        <Quote quote={quotation} />
        <Portfolio />
        <Story />
        <Culture />
        <Team />
        <Analysis />
      </Layout>
    </Suspense>
  )
}

export const query = graphql`
query HomeQuery($language: String!) {
  allContentfulQuotation(filter: {posPage: {eq: "home"},node_locale: {eq:$language}}) {
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
  allContentfulCaption(filter: {node_locale: {eq:$language}}) {
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
  allContentfulCategoriesExperts(sort: {createdAt: ASC},filter: {node_locale: {eq:$language}}) {
    nodes {
      description
      link
      title
      iconClass
    }
  }
}
`

export default IndexPage
export const Head = () => {
  return (
    <>
      <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css" rel="stylesheet" type="text/css" />
    </>
  )
}
