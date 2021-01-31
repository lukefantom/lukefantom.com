import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Custom404() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.headingXl}>404 - Page Not Found</h1>
        <p>Oops, looks like this page doesn't exist 😵</p>
      </section>
    </Layout>
  );
}
