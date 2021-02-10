import React from "react";
import styles from "./projectContainer.module.css";
import cn from "classnames";

export default function SectionContainer({ children, sectionHeader, id }) {
  return (
    <div className={cn(styles.gridContainer, "px-3 md:px-3 sm:px-2")} id={id}>
      <h2 className={cn(styles.sectionHeader)}>{sectionHeader}</h2>
      {children}
    </div>
  );
}
