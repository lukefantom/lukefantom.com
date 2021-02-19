import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import cn from "classnames";
import Navigation from "./Navigation/navigation";
import { useTheme } from "next-themes";
import LogoBackground from "../graphics/logoBackground";

const name = "Luke Fantom";
export const siteTitle = "Luke Fantom";

export default function Layout({ children, home }) {
  const { theme } = useTheme();
  return (
    <>
      <Navigation />
      <div className={cn(styles.container)}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Creator, producer and software developer."
          />
          <meta
            property="og:image"
            content={"/public/images/portfolio-home.jpg"}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.homeHeader}>
          {home ? (
            <>
              {/* <Navigation /> */}
              <div className="relative">
                <div className={cn(styles.animate3, "ml-8 md:ml-12")}>
                  <LogoBackground />
                </div>

                <h1
                  className={cn(
                    styles.animate2,
                    utilStyles.title,
                    utilStyles.underline,
                    "absolute"
                  )}
                  style={{
                    transform: "translate(100%, 140%)",
                    bottom: "100%",
                    right: "100%",
                    // color: "#2e465c",
                    lineHeight: 0.8,
                    // fontSize: "calc(20px + 8vw)",
                  }}
                >
                  {name}
                </h1>
              </div>

              <section
                className={utilStyles.headingMd}
                style={{ display: "flex", flexDirection: "row-reverse" }}
              >
                <div className={styles.animate1}>
                  <h2 className={utilStyles.headingXl}>
                    I'm a creator, producer and software developer.
                  </h2>
                </div>
              </section>
            </>
          ) : (
            <>
              {/* <Navigation /> */}
              <Link href="/">
                <a style={{ border: "none" }}>
                  <img
                    src="/images/profile.jpg"
                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a
                className={
                  theme === "dark"
                    ? utilStyles.anchorDark
                    : utilStyles.anchorLight
                }
              >
                ← Back to home
              </a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
