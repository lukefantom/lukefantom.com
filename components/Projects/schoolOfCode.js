import GridItem from "../ProjectContainer/gridItem";
import styles from "../ProjectContainer/projectContainer.module.css";
import iconStyles from "../Contact/contact.module.css";
import cn from "classnames";
import PostGreSql from "../../graphics/postGreSQL";
import Firebase from "../../graphics/firebase";
import Next from "../../graphics/next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faCss3,
  faHtml5,
  faAws,
  faGithub,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

export default function SchoolOfCode() {
  return (
    <GridItem
      color={"#547f9c"}
      fontColor={"#f5f5e8"}
      title={"School of Code"}
      fullWidth
      underline
      animate
      grow
    >
      <p
        className={cn(styles.gridItemText, styles.animateText)}
        style={{ color: "#f5f5e8" }}
      >
        I was selected from over 1700 applicants to join 47 others on a 16-week
        remote bootcamp. The course is an intensive programme covering
        full-stack development, working with a wide range of technologies in an
        agile manner, developing a huge range of technical skills, working in
        groups and pair programming to develop creative solutions to real-world
        problems.
      </p>
      <div className={iconStyles.iconContainer}>
        <FontAwesomeIcon icon={faHtml5} className={iconStyles.iconTech} />
        <FontAwesomeIcon icon={faCss3} className={iconStyles.iconTech} />
        <FontAwesomeIcon icon={faReact} className={iconStyles.iconTech} />
        <FontAwesomeIcon icon={faJsSquare} className={iconStyles.iconTech} />
        <FontAwesomeIcon icon={faNodeJs} className={iconStyles.iconTech} />
        <FontAwesomeIcon icon={faAws} className={iconStyles.iconTech} />
        <FontAwesomeIcon icon={faGithub} className={iconStyles.iconTech} />
        <PostGreSql className={iconStyles.iconTech} />
        <Firebase className={iconStyles.iconTech} />
        <Next className={iconStyles.iconTech} />
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
