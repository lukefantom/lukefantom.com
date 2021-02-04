import React from "react";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import cn from "classnames";
import { useTheme } from "next-themes";

export default function renderNavigationItems() {
  const { theme } = useTheme();

  const linkClicked = (event) => {
    if (event.currentTarget.href.indexOf("cv") > -1) {
      document.querySelectorAll("nav li a").forEach((navEl) => {
        navEl.classList.remove("active");
      });
    }
    // if (width <= 768) {
    //   toggleMobileNavigation();
    // }git ad
  };

  return (
    <React.Fragment>
      <li className="sm:mr-6 font-medium">
        <Link href={{ pathname: "/", hash: "personal" }}>
          <a
            className={cn(
              "relative",
              theme === "dark" ? utilStyles.anchorDark : utilStyles.anchorLight
            )}
            onClick={linkClicked}
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
              theme === "dark" ? utilStyles.anchorDark : utilStyles.anchorLight
            )}
            onClick={linkClicked}
          >
            Projects
          </a>
        </Link>
      </li>
      <li className="sm:mr-6 font-medium">
        <Link href={{ pathname: "/", hash: "contact" }}>
          <a
            className={cn(
              "relative",
              theme === "dark" ? utilStyles.anchorDark : utilStyles.anchorLight
            )}
            onClick={linkClicked}
          >
            Contact
          </a>
        </Link>
      </li>
      <li className="sm:mr-6 font-medium">
        <Link href="/cv">
          <a
            className={cn(
              "relative",
              theme === "dark" ? utilStyles.anchorDark : utilStyles.anchorLight
            )}
            onClick={linkClicked}
          >
            CV
          </a>
        </Link>
      </li>
    </React.Fragment>
  );
}
