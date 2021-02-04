import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { useTheme } from "next-themes";
import SectionContainer from "../components/ProjectContainer/sectionContainer";
import GridItem from "../components/ProjectContainer/gridItem";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const { theme } = useTheme();
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* ---------------------------------Container Section--------------------------------- */}
      <SectionContainer sectionHeader={"Projects"}>
        {allPostsData.map(({ title, summary, color }, index) => {
          if (index === 0 || index % 3 === 0) {
            return (
              <GridItem
                key={index}
                title={title}
                color={color}
                text={summary}
                fullWidth
              />
            );
          }
          return (
            <GridItem key={index} title={title} color={color} text={summary} />
          );
        })}
      </SectionContainer>
      {/* ---------------------------------Container Section--------------------------------- */}

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a
                  className={
                    theme === "dark"
                      ? utilStyles.anchorDark
                      : utilStyles.anchorLight
                  }
                >
                  {title}
                </a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
