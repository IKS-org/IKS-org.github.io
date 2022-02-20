import type { NextPage } from "next";
import Head from "next/head";
import { TopLogo } from "../components/TopLogo";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IKS-org</title>
        <link rel="icon" href="icon.png" />
      </Head>
      <TopLogo />
    </>
  );
};

export default Home;
