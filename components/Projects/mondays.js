import GridItem from "../ProjectContainer/gridItem";
import styles from "../ProjectContainer/projectContainer.module.css";
import iconStyles from "../Contact/contact.module.css";
import cn from "classnames";
import PostGreSql from "../../graphics/postGreSQL";
import Firebase from "../../graphics/firebase";
import MaterialUI from "../../graphics/materialUi";
import Postman from "../../graphics/postman";
import Heroku from "../../graphics/heroku";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJsSquare, faCss3, faHtml5, faAws, faGithub, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import GatsbyIcon from "../../graphics/gatsbyIcon";
import NetlifyIcon from "../../graphics/netlifyIcon";
import TailwindIcon from "../../graphics/tailwindIcon";

export default function Mondays() {
  const inlineStyles = { width: "17em", borderRadius: "unset", margin: "60px auto 0.65em" };

  return (
    <GridItem color={"#6ea6cb"} fontColor={"#f5f5e8"} image={"/images/MON - Logo Assets (PNG)-03.png"} imageStyles={inlineStyles} fullWidth underline animate grow>
      <p className={cn(styles.gridItemText, styles.animateText)} style={{ color: "#f5f5e8" }}>
        Mondays is a new product focused on fitness, wellness and nutrition, turning the dogma of the Monday blues into something to get excited about. The site was built from scratch in React, using Gatsby and hosted on Netlify.
      </p>
      <div className={iconStyles.iconContainer}>
        <FontAwesomeIcon icon={faHtml5} className={iconStyles.iconTech} />
        <FontAwesomeIcon icon={faCss3} className={iconStyles.iconTech} />
        <FontAwesomeIcon icon={faReact} className={iconStyles.iconTech} />
        <FontAwesomeIcon icon={faJsSquare} className={iconStyles.iconTech} />
        <FontAwesomeIcon icon={faGithub} className={iconStyles.iconTech} />
        <GatsbyIcon className={iconStyles.iconTech} />
        <NetlifyIcon className={iconStyles.iconTech} />
        <TailwindIcon className={iconStyles.iconTech} />
      </div>
    </GridItem>
  );
}
