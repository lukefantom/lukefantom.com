import React from "react";
import styles from "./projectContainer.module.css";
import cn from "classnames";

export default function GridItem({ color, fullWidth, title, text }) {
  if (fullWidth) {
    return (
      <div
        className={cn(styles.gridItem, styles.grow)}
        style={{ flex: "1 100%", backgroundColor: color }}
      >
        <h3 className={cn(styles.gridItemHeader)}>{title}</h3>
        <img />
        <p className={cn(styles.gridItemText)}>{text}</p>
      </div>
    );
  }

  return (
    <div
      className={cn(styles.gridItem, styles.grow)}
      style={{ backgroundColor: color }}
    >
      <h3 className={cn(styles.gridItemHeader)}>{title}</h3>
      <img />
      <p className={cn(styles.gridItemText)}>{text}</p>
    </div>
  );
}
