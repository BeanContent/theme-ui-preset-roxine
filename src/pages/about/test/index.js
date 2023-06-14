import React, { Suspense } from "react";
import Layout from "../../../components/layout/layout";
import Banner from "../../../components/banner/banner";



const Test = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Layout>
        <Banner title={'test'}/>
      </Layout>
    </Suspense>
  );
};

export default Test;
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