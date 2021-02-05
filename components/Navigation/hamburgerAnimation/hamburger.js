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
        styles.hamburgerSpring,
        burger === undefined ? "" : styles.isActive
      )}
      type="button"
      onClick={changeBurger}
      style={{ outline: "none" }}
    >
      <span className={styles.hamburgerBox}>
        <span
          className={styles.hamburgerInner}
          //   style={{ backgroundColor: theme === "dark" ? "white" : "black" }}
        ></span>
      </span>
    </button>
  );
}
