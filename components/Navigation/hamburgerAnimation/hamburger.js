import { useState } from "react";
import styles from "./hamburger.module.css";
import cn from "classnames";
import { useTheme } from "next-themes";

export default function Hamburger({ burger, changeBurger }) {
  const { theme } = useTheme();

  return (
    <button
      className={cn(
        styles.hamburger,
        theme === "dark" ? styles.hamburgerDark : styles.hamburgerLight,
        styles.hamburgerSpring,
        burger === undefined ? "" : styles.isActive
      )}
      type="button"
      onClick={changeBurger}
      style={{ outline: "none" }}
    >
      <span className={styles.hamburgerBox}>
        <span
          className={cn(
            styles.hamburgerInner,
            theme === "dark"
              ? styles.hamburgerInnerDark
              : styles.hamburgerInnerLight
          )}
          //   style={{ backgroundColor: theme === "dark" ? "white" : "black" }}
        ></span>
      </span>
    </button>
  );
}
