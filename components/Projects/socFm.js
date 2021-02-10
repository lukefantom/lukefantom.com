import GridItem from "../ProjectContainer/gridItem";
import styles from "../ProjectContainer/projectContainer.module.css";
import cn from "classnames";

export default function SoCFM() {
  return (
    <GridItem
      color={"#FDF0EC"}
      fontColor={"#2e465c"}
      title={"SoC FM"}
      underline
      grow
    >
      <p className={cn(styles.gridItemText)} style={{ color: "#2e465c" }}>
        A Playlist app created in a single-day Hackathon at the School of Code
        using the Spotify API. The brief outlined 'To create a web experience
        using data from an API'.
      </p>
    </GridItem>
  );
}
