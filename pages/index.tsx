import type { NextPage } from "next";
import Head from "next/head";
import Home from "../components/Home";
const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>خانه</title>
      </Head>
      <Home />
    </>
  );
};
export default HomePage;
