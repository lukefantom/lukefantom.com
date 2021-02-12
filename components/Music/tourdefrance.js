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

export default function Tourdefrance() {
  return (
    <GridItem color={"#cf9fb4"} title={"tourdefrance"} fullWidth underline>
      <p className={cn(styles.gridItemText)}>
        An electronic music project started in 2019 between myself and Carson
        Tworow in Vancouver, BC. Featured on Spotify’s Fresh Finds editor's
        playlist, we have garnered support from the likes of Indie Shuffle and
        Left Bank Magazine. Our sound is rooted in lofi-house, disco, and
        afro-house, taking inspiration from hip-hop and jazz.
      </p>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          style={{
            border: 0,
            width: "auto",
            height: "auto",
            marginBottom: "1rem",
          }}
          src="https://bandcamp.com/EmbeddedPlayer/album=4106361356/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://tourdefrance.bandcamp.com/album/tourdefrance-2">
            tourdefrance 2 by tourdefrance
          </a>
        </iframe>
      </div>
      <div className={iconStyles.iconContainer}>
        <a
          href={"https://music.apple.com/gb/artist/tourdefrance/1458889416"}
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faItunes} className={iconStyles.iconSmall} />
        </a>

        <a
          href={"https://open.spotify.com/artist/4Vjb3OJHilpgTWYYNXeJTw"}
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faSpotify} className={iconStyles.iconSmall} />
        </a>
        <a
          href={"https://www.instagram.com/tourdefrancemusic/"}
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
