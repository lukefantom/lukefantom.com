import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import cn from "classnames";
import Layout, { siteTitle } from "../components/layout";
import ThemeChanger from "../components/theme";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a creator, producer and software developer.</p>
        <Link href="/posts/societly">SoCietly</Link>
        <p>
          (This is a sample website - you’ll be building a site like this one{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
