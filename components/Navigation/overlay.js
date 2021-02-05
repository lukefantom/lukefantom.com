import { useState } from "react";
import styles from "./burger.module.css";
import BurgerMenu from "./burger";

export default function Overlay({ children }) {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <div className={styles.overlay}>
        <button onClick={() => setOpen(!open)}>
          {open ? "Close" : "Open"}
        </button>
        <div onClick={() => setOpen(false)}>{children}</div>
      </div>
    );
  }

  return (
    <div onClick={() => setOpen(!open)} className={styles.burgerContainer}>
      <BurgerMenu />
    </div>
  );
}
