import styles from "./burger.module.css";
import { useTheme } from "next-themes";
import cn from "classnames";

export default function BurgerMenu() {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={cn(
          theme === "dark" ? styles.burgerIconDark : styles.burgerIconLight
        )}
      ></div>
      <div
        className={cn(
          theme === "dark" ? styles.burgerIconDark : styles.burgerIconLight
        )}
      ></div>
      <div
        className={cn(
          theme === "dark" ? styles.burgerIconDark : styles.burgerIconLight
        )}
      ></div>
    </>
  );
}

{
  /* <button onClick={() => setOpen(!open)}>{open ? "open" : "closed"}</button> */
}
