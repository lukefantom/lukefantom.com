import React from "react";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import styles from "./navItems.module.css";
import cn from "classnames";
import { useTheme } from "next-themes";

export default function RenderNavigationItems({ setOpen }) {
  const { theme } = useTheme();

  return (
    <>
      <li className="sm:mr-6 font-medium">
        <Link href={{ pathname: "/", hash: "personal" }}>
          <a
            className={cn(
              "relative",
              theme === "dark" ? utilStyles.anchorDark : utilStyles.anchorLight,
              styles.navText
            )}
            onClick={() => setOpen(false)}
          >
            Personal
          </a>
        </Link>
      </li>
      <li className="sm:mr-6 font-medium">
        <Link href={{ pathname: "/", hash: "projects" }}>
          <a
            className={cn(
              "relative",
              theme === "dark" ? utilStyles.anchorDark : utilStyles.anchorLight,
              styles.navText
            )}
            onClick={() => setOpen(false)}
          >
            Projects
          </a>
        </Link>
      </li>
      <li className="sm:mr-6 font-medium">
        <Link href={{ pathname: "/", hash: "music" }}>
          <a
            className={cn(
              "relative",
              theme === "dark" ? utilStyles.anchorDark : utilStyles.anchorLight,
              styles.navText
            )}
            onClick={() => setOpen(false)}
          >
            Music
          </a>
        </Link>
      </li>
      <li className="sm:mr-6 font-medium">
        <Link href={{ pathname: "/", hash: "contact" }}>
          <a
            className={cn(
              "relative",
              theme === "dark" ? utilStyles.anchorDark : utilStyles.anchorLight,
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
