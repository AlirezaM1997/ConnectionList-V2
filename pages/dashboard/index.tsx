import type { NextPage } from "next";
import Head from "next/head";
import Dashboard from "../../components/Dashboard";
const DashboardPage: NextPage = ({data}:any) => {
  return (
    <>
      <Head>
        <title>تنظیمات کاربری</title>
      </Head>
      <Dashboard data={data}/>
    </>
  );
};
export default DashboardPage;
export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/posts", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}