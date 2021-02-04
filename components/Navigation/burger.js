import { useState } from "react";
import styles from "./burger.module.css";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>{open ? "open" : "closed"}</button>
    </div>
  );
}
