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
  children,
  image,
  grow,
  animate,
  underline,
  fontColor,
  hide,
}) {
  if (fullWidth) {
    return (
      <div
        className={cn(
          styles.gridItem,
          grow && styles.grow,
          hide && styles.hide
        )}
        style={{
          flex: "1 100%",
          backgroundColor: color,
        }}
      >
        {title && (
          <h3
            className={cn(
              styles.gridItemHeader,
              animate && styles.animateHeader
            )}
            style={{ color: fontColor && fontColor }}
          >
            {title}
          </h3>
        )}
        {image && (
          <img
            src={image}
            alt={title}
            className={cn(utilStyles.borderCircle, styles.gridItemImage)}
          />
        )}
        {underline && (
          <div
            style={{
              borderBottom: fontColor
                ? `0.2em solid ${fontColor}`
                : "0.2em solid #2e465c",
              width: "4em",
              alignSelf: "center",
              margin: "0 auto 1.5rem",
            }}
          ></div>
        )}
        {text && (
          <p
            className={cn(styles.gridItemText, animate && styles.animateText)}
            style={{ color: fontColor && fontColor }}
          >
            {text}
          </p>
        )}
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(styles.gridItem, grow && styles.grow, hide && styles.hide)}
      style={{ backgroundColor: color }}
    >
      {title && (
        <h3
          className={cn(styles.gridItemHeader, animate && styles.animateHeader)}
          style={{ color: fontColor && fontColor }}
        >
          {title}
        </h3>
      )}
      {image && (
        <img
          src={image}
          alt={title}
          className={cn(utilStyles.borderCircle, styles.gridItemImage)}
        />
      )}
      {underline && (
        <div
          style={{
            borderBottom: fontColor
              ? `0.2em solid ${fontColor}`
              : "0.2em solid #2e465c",
            width: "4em",
            alignSelf: "center",
            margin: "0 auto 1.5rem",
          }}
        ></div>
      )}
      {text && (
        <p
          className={cn(styles.gridItemText, animate && styles.animateText)}
          style={{ color: fontColor && fontColor }}
        >
          {text}
        </p>
      )}
      {children}
    </div>
  );
}
