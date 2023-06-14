import React, { Suspense } from "react";
import Layout from "../../components/layout/layout";
import Banner from "../../components/banner/banner";
import Describe from "../../components/descripe/describe";
import AlternateList from "../../components/alternate-list/alternate-list";
import { graphql } from "gatsby";
import Quote from "../../components/quote/quote";

const describeData = {
  goals: [
    {
      name: "dream",
      emphasize: false,
    },
    {
      name: "create",
      emphasize: true,
    },
    {
      name: "deliver",
      emphasize: false,
    },
  ],
  content:
    "Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.",
};
const alternateData = [
  {
    title: "Digital experts working for you.",
    contents: [
      "Chapter too parties its letters nor. Cheerful but whatever ladyship disposed yet judgment. Lasted answer oppose to ye months no esteem.",
      "Branched is on an ecstatic directly it. Put off continue you denoting returned juvenile. Looked person sister result mr to. Replied demands charmed do viewing ye colonel to so.",
      "Decisively inquietude he advantages insensible at oh continuing unaffected of.",
    ],
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
  },
  {
    title: "Bring a perfectionist.",
    contents: [
      "New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended.",
      "See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating.",
      "Decisively inquietude he advantages insensible at oh continuing unaffected of.",
    ],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Leave no stone unterned.",
    contents: [
      "New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended.",
      "See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating.",
      "Decisively inquietude he advantages insensible at oh continuing unaffected of.",
    ],
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  },
];
const bannerData = {
  title: "About Business",
  content: ""
}
const quoteData = {
  title: "best ever design",
  content: "Time to enhance your web presence!",
  slug: "/",
  textButton: "get quotation",
  background: {
    file: {
      url: "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    },
  },
};
const AboutPage = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Layout>
        <Banner data={bannerData}/>
        <Describe data={describeData}/>
        <AlternateList data={alternateData}/>
        <Quote quote={quoteData}/>
      </Layout>
    </Suspense>
  );
};

// export const query = graphql`


// `

export default AboutPage;
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