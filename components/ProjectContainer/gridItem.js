import React from "react";
import Link from "next/link";
import styles from "./projectContainer.module.css";
import cn from "classnames";
import utilStyles from "../../styles/utils.module.css";

export default function GridItem({
  color,
  fullWidth,
  title,
  text,
  link,
  children,
  image,
}) {
  if (fullWidth) {
    return (
      <Link href={`/posts/${link}`}>
        <div
          className={cn(styles.gridItem, styles.grow)}
          style={{ flex: "1 100%", backgroundColor: color }}
        >
          <h3 className={cn(styles.gridItemHeader)}>{title}</h3>
          {image && (
            <img
              src={image}
              alt={title}
              className={cn(utilStyles.borderCircle, styles.gridItemImage)}
            />
          )}
          <p className={cn(styles.gridItemText)}>{text}</p>
          {children}
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/posts/${link}`}>
      <div
        className={cn(styles.gridItem, styles.grow)}
        style={{ backgroundColor: color }}
      >
        <h3 className={cn(styles.gridItemHeader)}>{title}</h3>
        <img />
        <p className={cn(styles.gridItemText)}>{text}</p>
        {children}
      </div>
    </Link>
  );
}
