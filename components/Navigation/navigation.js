import ThemeChanger from "../theme";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import utilStyles from "../../styles/utils.module.css";
import cn from "classnames";
import RenderNavigationItems from "./navItems";
import Overlay from "./overlay";

export default function Navigation() {
  const { theme } = useTheme();
  const [burger, setBurger] = useState("");
  const [open, setOpen] = useState(false);

  function changeBurger() {
    burger === undefined ? setBurger("is-active") : setBurger("");
    setOpen(!open);
  }

  return (
    <nav className="absolute dark:text-whitedarktheme h-16 w-full z-50 mb-8 top-0">
      <div className="flex h-full container mx-auto justify-between items-center px-4 md:px-4">
        {/* -----------Site Logo------------- */}
        <Link href={{ pathname: "/" }}>
          <a
            className={cn(
              "logo flex flex-row md:order-1 order-2",
              theme === "dark" ? utilStyles.anchorDark : utilStyles.anchorLight,
              utilStyles.titleSmall
            )}
            style={{ fontWeight: 800, letterSpacing: "-0.05rem" }}
          >
            <div className="letter inline-block top-0 relative">L</div>
            <div className="letter inline-block top-0 relative">u</div>
            <div className="letter inline-block top-0 relative">k</div>
            <div
              className="letter inline-block top-0 relative"
              style={{ marginRight: "0.2rem" }}
            >
              e
            </div>
            <div className="letter inline-block top-0 relative">F</div>
            <div className="letter inline-block top-0 relative">a</div>
            <div className="letter inline-block top-0 relative">n</div>
            <div className="letter inline-block top-0 relative">t</div>
            <div className="letter inline-block top-0 relative">o</div>
            <div className="letter inline-block top-0 relative">m</div>
          </a>
        </Link>

        {/* -----------Nav Menu------------- */}

        <ul className="hidden md:flex md:order-2">
          <RenderNavigationItems setOpen={setOpen} />
        </ul>

        {/* -----------Burger Menu------------- */}

        <div className="order-1 md:hidden">
          <Overlay burger={burger} changeBurger={changeBurger} open={open}>
            <ul>
              <RenderNavigationItems setOpen={setOpen} />
            </ul>
          </Overlay>
        </div>

        {/* -----------Dark Mode------------- */}

        <div className="order-3">
          <ThemeChanger />
        </div>
      </div>
    </nav>
  );
}
