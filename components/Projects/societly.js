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

export default function Societly() {
  return (
    <GridItem color={"#3bab87"} fontColor={"#f5f5e8"} title={"Societly"} underline animate grow>
      <p className={cn(styles.gridItemText, styles.animateText)} style={{ color: "#f5f5e8" }}>
        Keeping all bootcampers connected after the School of Code. The platform aims to strengthen the School of Code community, while allowing coaches to gauge the wider impact of the course.
      </p>
      <div className={iconStyles.iconContainer}>
        <FontAwesomeIcon icon={faReact} className={iconStyles.iconTech} />
        <FontAwesomeIcon icon={faJsSquare} className={iconStyles.iconTech} />
        <FontAwesomeIcon icon={faNodeJs} className={iconStyles.iconTech} />
        <FontAwesomeIcon icon={faCss3} className={iconStyles.iconTech} />
        <FontAwesomeIcon icon={faGithub} className={iconStyles.iconTech} />
        <PostGreSql className={iconStyles.iconTech} />
        <Firebase className={iconStyles.iconTech} />
        <MaterialUI className={iconStyles.iconTech} />
        <Postman className={iconStyles.iconTech} />
        <Heroku className={iconStyles.iconTech} />
      </div>
    </GridItem>
  );
}

//   color,
//   fullWidth,
//   title,
//   text,
//   link,
//   children,
//   image,
//   grow,
//   underline,

// <GridItem
//           color={"#3bab87"}
//           fontColor={"#f5f5e8"}
//           fullWidth
//           title={"Societly"}
//           underline
//           grow
//           link={"https://societly.netlify.app/"}
//         >
//           <p className={gridStyles.gridItemText} style={{ color: "#f5f5e8" }}>
//             Keeping all bootcampers connected after the School of Code
//           </p>
//         </GridItem>
