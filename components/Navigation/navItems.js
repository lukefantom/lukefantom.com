import React from "react";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import styles from "./navItems.module.css";
import cn from "classnames";
import { useTheme } from "next-themes";

export default function RenderNavigationItems({ setOpen, open }) {
  const { theme } = useTheme();

  return (
    <>
      <li className={cn("sm:mr-6 font-medium", open && styles.marginNav)}>
        <Link href={{ pathname: "/", hash: "personal" }}>
          <a
            className={cn(
              "relative",
              theme === "dark" ? utilStyles.anchorDark : utilStyles.anchorLight,
              open && utilStyles.anchorDark,
              open && utilStyles.anchorLarge,
              open && utilStyles.anchorFade1,
              styles.navText
            )}
            onClick={() => setOpen(false)}
          >
            Personal
          </a>
        </Link>
      </li>
      <li className={cn("sm:mr-6 font-medium", open && styles.marginNav)}>
        <Link href={{ pathname: "/", hash: "projects" }}>
          <a
            className={cn(
              "relative",
              theme === "dark" ? utilStyles.anchorDark : utilStyles.anchorLight,
              open && utilStyles.anchorDark,
              open && utilStyles.anchorLarge,
              open && utilStyles.anchorFade2,
              styles.navText
            )}
            onClick={() => setOpen(false)}
          >
            Projects
          </a>
        </Link>
      </li>
      <li className={cn("sm:mr-6 font-medium", open && styles.marginNav)}>
        <Link href={{ pathname: "/", hash: "music" }}>
          <a
            className={cn(
              "relative",
              theme === "dark" ? utilStyles.anchorDark : utilStyles.anchorLight,
              open && utilStyles.anchorDark,
              open && utilStyles.anchorLarge,
              open && utilStyles.anchorFade3,
              styles.navText
            )}
            onClick={() => setOpen(false)}
          >
            Music
          </a>
        </Link>
      </li>
      <li className={cn("sm:mr-6 font-medium", open && styles.marginNav)}>
        <Link href={{ pathname: "/", hash: "contact" }}>
          <a
            className={cn(
              "relative",
              theme === "dark" ? utilStyles.anchorDark : utilStyles.anchorLight,
              open && utilStyles.anchorDark,
              open && utilStyles.anchorLarge,
              open && utilStyles.anchorFade4,
              styles.navText
            )}
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </Link>
      </li>
    </>
  );
}
