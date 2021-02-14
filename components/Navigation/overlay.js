import { useTheme } from "next-themes";
import styles from "./overlay.module.css";
import cn from "classnames";
import Hamburger from "./hamburgerAnimation/hamburger";

export default function Overlay({ children, burger, changeBurger, open }) {
  const { theme } = useTheme();

  if (open) {
    return (
      <>
        <div onClick={() => changeBurger}>
          <Hamburger burger={burger} changeBurger={changeBurger} />
        </div>
        <div
          className={cn(
            styles.overlay,
            theme === "dark" ? styles.overlayDark : styles.overlayLight
          )}
        >
          <div onClick={() => changeBurger}>{children}</div>
        </div>
      </>
    );
  }

  return (
    <div onClick={() => changeBurger}>
      <Hamburger changeBurger={changeBurger} />
    </div>
  );
}
