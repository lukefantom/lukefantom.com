import utilStyles from "../../styles/utils.module.css";
import styles from "./projectContainer.module.css";
import cn from "classnames";

export default function ProjectContainer() {
  return (
    <div
      className={cn(styles.gridContainer, "px-4 md:px-3 sm:px-2")}
      style={{ backgroundColor: "lightcoral" }}
    >
      <h2 className={cn(styles.sectionHeader)}>Portfolio</h2>
      <div className={cn(styles.gridItem)} style={{ flex: "1 100%" }}>
        Hello
      </div>
      <div className={cn(styles.gridItem)}>Hello</div>
      <div className={cn(styles.gridItem)}>Hello</div>
    </div>
  );
}
