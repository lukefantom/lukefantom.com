import React from "react";
import styles from "./projectContainer.module.css";
import cn from "classnames";

export default function SectionContainer({ children, sectionHeader }) {
  return (
    <div className={cn(styles.gridContainer, "px-4 md:px-3 sm:px-2")}>
      <h2 className={cn(styles.sectionHeader)}>{sectionHeader}</h2>
      {children}
    </div>
  );
}
