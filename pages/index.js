import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import cn from "classnames";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { useTheme } from "next-themes";
import SectionContainer from "../components/ProjectContainer/sectionContainer";
import GridItem from "../components/ProjectContainer/gridItem";
import HelloGraphic from "../graphics/helloGraphic";

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

      {/* ---------------------------------Personal Section--------------------------------- */}

      <SectionContainer sectionHeader={"Personal"} id={"personal"}>
        <GridItem
          title={"Hey there, I'm Luke 👋"}
          color={"#408fa3"}
          text={
            "I am a software developer, designer and music producer who recently graduated from the School of Code. I have a strong passion for creating content and collaborating with others, whether this be through writing, music or technology."
          }
          link
          // image={"/images/profile.jpg"}
          fullWidth
        >
          <HelloGraphic />
        </GridItem>
      </SectionContainer>

      {/* ---------------------------------Projects Section--------------------------------- */}
      <SectionContainer sectionHeader={"Projects"} id={"projects"}>
        {allPostsData.map(({ id, title, summary, color }, index) => {
          if (index === 0 || index % 3 === 0) {
            return (
              <GridItem
                key={id}
                title={title}
                color={color}
                text={summary}
                link={id}
                grow
                fullWidth
              />
            );
          }
          return (
            <GridItem
              key={id}
              title={title}
              color={color}
              text={summary}
              link={id}
              grow
            />
          );
        })}
      </SectionContainer>

      {/* ---------------------------------Music Section--------------------------------- */}

      <SectionContainer sectionHeader={"Music"} id={"music"}>
        {allPostsData.map(({ id, title, summary, color }, index) => {
          if (index === 0 || index % 3 === 0) {
            return (
              <GridItem
                key={id}
                title={title}
                color={color}
                text={summary}
                link={id}
                fullWidth
                grow
              />
            );
          }
          return (
            <GridItem
              key={id}
              title={title}
              color={color}
              text={summary}
              link={id}
              grow
            />
          );
        })}
      </SectionContainer>

      {/* ---------------------------------Contact Section--------------------------------- */}

      <SectionContainer sectionHeader={"Contact"} id={"contact"}>
        <GridItem
          title={"Come say hi..."}
          color={"#d08090ed"}
          text={"Email links and icons with links to social will go here"}
          link
          fullWidth
        ></GridItem>
      </SectionContainer>

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
