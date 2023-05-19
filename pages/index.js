import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm David. I am a frontend software developer. </p>
        <p>
          My mission is to develop high quality web solutions that enable my
          clients to establish online presence, increase profitability and
          continually improve productivity.
        </p>
        <p>
          Feel free to contact me on{" "}
          <a href="https://www.linkedin.com/in/davidpedrero/">LinkedIn.</a>{" "}
        </p>
      </section>
    </Layout>
  );
}
