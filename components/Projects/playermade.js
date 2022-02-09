import GridItem from "../ProjectContainer/gridItem";
import styles from "../ProjectContainer/projectContainer.module.css";
import iconStyles from "../Contact/contact.module.css";
import cn from "classnames";
import PostGreSql from "../../graphics/postGreSQL";
import Firebase from "../../graphics/firebase";
import MaterialUI from "../../graphics/materialUi";
import Postman from "../../graphics/postman";
import Heroku from "../../graphics/heroku";
import Next from "../../graphics/next";
import StripeIcon from "../../graphics/stripeIcon";
import SupabaseIcon from "../../graphics/supabaseIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJsSquare, faCss3, faHtml5, faAws, faGithub, faNodeJs } from "@fortawesome/free-brands-svg-icons";

export default function Playermade() {
  return (
    <GridItem color={"#212121"} fontColor={"#f5f5e8"} title={"Playermade"} underline animate grow>
      <p className={cn(styles.gridItemText, styles.animateText)} style={{ color: "#f5f5e8" }}>
        A full-stack greenfield app for a client in the fitness industry. The app aims to deliver bespoke training programmes to schools and pro-club juniors. Built using Next.js and Supabase, integrating with Stripe for payment and subscriptions.
      </p>
      <div className={iconStyles.iconContainer}>
        <FontAwesomeIcon icon={faHtml5} className={iconStyles.iconTech} />
        <FontAwesomeIcon icon={faCss3} className={iconStyles.iconTech} />
        <FontAwesomeIcon icon={faReact} className={iconStyles.iconTech} />
        <FontAwesomeIcon icon={faJsSquare} className={iconStyles.iconTech} />
        <FontAwesomeIcon icon={faGithub} className={iconStyles.iconTech} />
        <Next className={iconStyles.iconTech} />
        <StripeIcon className={iconStyles.iconTech} />
        <SupabaseIcon className={iconStyles.iconTech} />
      </div>
    </GridItem>
  );
}
