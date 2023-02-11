import * as React from "react"
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




const IndexPage = ({ data }) => {
  const quotation = data.allContentfulQuotation.nodes[0];
  const [isActiveIndex, setIsActiveIndex] = useState(null);
  const menu = ['Test', 'Test2']
  return (
    <Layout>
      <Categories />
      <Quote quote={quotation} />
      <Portfolio />
      <Story />
      <Culture />
      <Team />
      <Analysis />
    </Layout>
  )
}

export const query = graphql`
query HomeQuery {
  allContentfulQuotation(filter: {posPage: {eq: "home"}}) {
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
