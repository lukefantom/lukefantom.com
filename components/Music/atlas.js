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

export default function Atlas() {
  return (
    <GridItem
      color={"#69a99a"}
      title={"Atlas"}
      underline
      animate
      fontColor={"#2e465c"}
    >
      <p
        className={cn(styles.gridItemText, styles.animateText)}
        style={{ color: "#2e465c" }}
      >
        A downtempo electronic music project started in 2011 at University with
        Rem Sutton. Releasing several EP's through US electronic music label
        Symbols and two 12" releases via UK label Coja Records, playing live at
        festivals such as Gottwood and Glastonbury. With support from the likes
        of Kastle, Luvian and Catching Flies, taking influence from artists such
        as J Dilla, Mount Kimbie and Four Tet.
      </p>
      <div className={iconStyles.iconContainer}>
        <a
          href={
            "https://open.spotify.com/artist/2kRw4v7D2K4uyDvC1ChWyi?si=y-i7KQZ7RUOo7r0hVvnCPg"
          }
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faSpotify} className={iconStyles.iconSmall} />
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
