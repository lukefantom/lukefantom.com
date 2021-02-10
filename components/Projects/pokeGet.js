import GridItem from "../ProjectContainer/gridItem";
import styles from "../ProjectContainer/projectContainer.module.css";
import cn from "classnames";

export default function PokeGet() {
  return (
    <GridItem
      color={"#98bec8"}
      fontColor={"#2e465c"}
      title={"PokéGet"}
      underline
      grow
    >
      <p className={cn(styles.gridItemText)} style={{ color: "#2e465c" }}>
        A simple and fun Pokémon generator. This was the first project I built
        using React, which utilises the PokeAPI, and was also a good opportunity
        dig deeper into CSS and the box model in order to build the Pokemon card
        framework from scratch.
      </p>
    </GridItem>
  );
}
