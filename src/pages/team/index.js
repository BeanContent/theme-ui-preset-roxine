import React, { Suspense } from "react";
import Describe from "../../components/descripe/describe";
import Layout from "../../components/layout/layout";
import Banner from "../../components/banner/banner";
import "./style.css";
import Members from "../../components/members/members";
const describeData = {
  goals: [
    {
      name: "learn",
      emphasize: false,
    },
    {
      name: "acheive",
      emphasize: true,
    },
    {
      name: "admire",
      emphasize: false,
    },
  ],
  content:
    "Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.",
};
const bannerData = {
  title: "The A Team",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit porro laudantium sequi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
};

const TeamPage = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Layout className="teampage">
        <Banner data={bannerData} />
        <Describe data={describeData} />
        <Members />
      </Layout>
    </Suspense>
  );
};

// export const query = graphql`

// `

export default TeamPage;
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
