import GridItem from "../ProjectContainer/gridItem";
import styles from "../ProjectContainer/projectContainer.module.css";
import iconStyles from "../Contact/contact.module.css";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSoundcloud,
  faItunes,
  faSpotify,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function CultureVillain() {
  return (
    <GridItem
      color={"#f5efe0"}
      fontColor={"#2e465c"}
      title={"Culture Villain"}
      underline
      animate
      link={"https://culturevillain.co.uk"}
    >
      <p
        className={cn(styles.gridItemText, styles.animateText)}
        style={{ color: "#2e465c" }}
      >
        Co-founder of alternative music blog Culture Villain, building a network
        of followers and reaching an average of 1k views per month. Covered
        major festivals events across Europe including Dimensions Festival,
        Primavera and Open Source Festival. Comprised a network of contacts in
        the industry, contributing to interviews with artists from an array of
        major labels and events.
      </p>

      <div className={iconStyles.iconContainer}>
        <a
          href={"https://www.instagram.com/culturevillain/"}
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className={iconStyles.iconSmall}
          />
        </a>
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
