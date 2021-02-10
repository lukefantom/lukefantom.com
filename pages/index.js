import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import gridStyles from "../components/ProjectContainer/projectContainer.module.css";
import iconStyles from "../components/Contact/contact.module.css";
import cn from "classnames";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { useTheme } from "next-themes";
import SectionContainer from "../components/ProjectContainer/sectionContainer";
import GridItem from "../components/ProjectContainer/gridItem";
import HelloGraphic from "../graphics/helloGraphic";
import ContactSection from "../components/Contact/contact";
import MusicSection from "../components/Music/musicSection";
import ProjectSection from "../components/Projects/projectSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

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
          title={"Hey there, I'm Luke."}
          color={"#547f9c"}
          fontColor={"#f5f5e8"}
          text={
            "I am a software developer, designer and music producer who recently graduated from the School of Code. I have a strong passion for creating content and collaborating with others, whether this be through writing, music or technology."
          }
          // image={"/images/profile.jpg"}
          fullWidth
          underline
        >
          <HelloGraphic />
        </GridItem>

        <GridItem color={"#f5efe0"} title={"About me..."} fontColor={"#2e465c"}>
          <p className={gridStyles.gridItemText} style={{ color: "#2e465c" }}>
            After several years working in the technology industry, mainly
            focusing on hardware support for companies such as WeWork and Apple,
            I decided to take the leap and swap the toolkit for JavaScript and
            join the{" "}
            <a
              href="https://www.schoolofcode.co.uk/"
              target="_blank"
              className={cn(
                theme === "dark"
                  ? utilStyles.anchorDark
                  : utilStyles.anchorLight
              )}
            >
              School of Code
            </a>
            .
          </p>
        </GridItem>

        <GridItem
          color={"#f5efe0"}
          text={""}
          image={"/images/profile.jpg"}
        ></GridItem>
        <GridItem
          fullWidth
          title={"Some more text will go here"}
          underline
          color={"#d3dbd9"}
          fontColor={"#2e465c"}
        >
          <p className={gridStyles.gridItemText} style={{ color: "#2e465c" }}>
            I'm a keen hiker and love travelling. After moving to Vancouver for
            two years in 2017, I fell in love with the city and spent the latter
            half of 2018 building a camper van and travelling around North
            America with my girlfriend. We visited over 20 National Parks and
            learnt much more than we ever anticipated. Check out my Instagram
            for more!
          </p>
          <a
            href={"https://www.instagram.com/lukefantom/"}
            rel="noreferrer"
            target="_blank"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className={iconStyles.iconSmall}
            />
          </a>
        </GridItem>
      </SectionContainer>

      {/* ---------------------------------Projects Section--------------------------------- */}
      <SectionContainer sectionHeader={"Projects"} id={"projects"}>
        <ProjectSection />
      </SectionContainer>

      {/* ---------------------------------Music Section--------------------------------- */}

      <SectionContainer sectionHeader={"Music"} id={"music"}>
        <MusicSection />
      </SectionContainer>

      {/* ---------------------------------Contact Section--------------------------------- */}

      <SectionContainer sectionHeader={"Contact"} id={"contact"}>
        <GridItem
          title={"Come say hi..."}
          color={"#d08090ed"}
          fullWidth
          // underline
          text={"Some supporting text here"}
        >
          <ContactSection />
          <br />
          <h3 className={utilStyles.boldText}>Luke Fantom</h3>
          <h4>Birmingham, UK</h4>
        </GridItem>
      </SectionContainer>

      {/* ---------------------------------Blog Section--------------------------------- */}

      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
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
      </section> */}
    </Layout>
  );
}
