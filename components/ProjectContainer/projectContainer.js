import utilStyles from "../../styles/utils.module.css";
import styles from "./projectContainer.module.css";
import cn from "classnames";

export default function ProjectContainer({
  primaryColor,
  leftColor,
  rightColor,
  primaryTitle,
  leftTitle,
  rightTitle,
}) {
  return (
    <div className={cn(styles.gridContainer, "px-4 md:px-3 sm:px-2")}>
      <h2 className={cn(styles.sectionHeader)}>Projects</h2>

      {/* ------------------ Primary Container ------------------ */}
      <div
        className={cn(styles.gridItem, styles.grow)}
        style={{ flex: "1 100%", backgroundColor: primaryColor }}
      >
        <h3 className={cn(styles.gridItemHeader)}>{primaryTitle}</h3>
        <img />
        <p className={cn(styles.gridItemText)}>
          XOXO subway tile tote bag, thundercats lyft vaporware actually hot
          chicken fam bushwick. Beard fam chartreuse banh mi flexitarian
          scenester hot chicken brooklyn freegan.
        </p>
      </div>

      {/* ------------------ Left Container ------------------ */}
      <div
        className={cn(styles.gridItem, styles.grow)}
        style={{ backgroundColor: leftColor }}
      >
        <h3 className={cn(styles.gridItemHeader)}>{leftTitle}</h3>

        <p className={cn(styles.gridItemText)}>
          Church-key wolf gluten-free, tbh street art skateboard art party
          affogato.{" "}
        </p>
      </div>

      {/* ------------------ Right Container ------------------ */}
      <div
        className={cn(styles.gridItem, styles.grow)}
        style={{ backgroundColor: rightColor }}
      >
        <h3 className={cn(styles.gridItemHeader)}>{rightTitle}</h3>
        <p className={cn(styles.gridItemText)}>
          Fashion axe you probably haven't heard of them post-ironic
          asymmetrical glossier raclette poke kickstarter wayfarers.
        </p>
      </div>
    </div>
  );
}
