import { useState } from "react";
import styles from "./overlay.module.css";
import Hamburger from "./hamburgerAnimation/hamburger";

export default function Overlay({ children, burger, changeBurger, open }) {
  if (open) {
    return (
      <>
        <div onClick={() => changeBurger}>
          <Hamburger burger={burger} changeBurger={changeBurger} />
        </div>
        <div className={styles.overlay}>
          <div onClick={() => changeBurger}>{children}</div>
        </div>
      </>
    );
  }

  return (
    <div onClick={() => changeBurger} className={styles.burgerContainer}>
      <Hamburger changeBurger={changeBurger} />
    </div>
  );
}
