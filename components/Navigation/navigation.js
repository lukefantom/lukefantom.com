import ThemeChanger from "../theme";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import utilStyles from "../../styles/utils.module.css";
import styles from "./navItems.module.css";
import cn from "classnames";
import RenderNavigationItems from "./navItems";
import Overlay from "./overlay";
import { DateTime } from "luxon";
import Contact from "../Contact/contact";

export default function Navigation() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const [burger, setBurger] = useState("");
  const [open, setOpen] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const body = document.querySelector("body");
    open
      ? body.classList.add("preventScroll")
      : body.classList.remove("preventScroll");

    function handleResize() {
      let width = window.innerWidth;
      if (width > 767) {
        setOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  function changeBurger() {
    if (!open) {
      scrollToTop();
    }
    burger === undefined ? setBurger("is-active") : setBurger("");
    setOpen(!open);
  }

  useEffect(() => {
    if (mounted) {
      const nav = document.querySelector("nav");
      let prevScrollpos = window.pageYOffset;

      function handleScroll() {
        let currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
          nav.style.top = "0";
        }
        if (prevScrollpos < currentScrollPos && window.pageYOffset > 0) {
          nav.style.top = "-100px";
        }

        prevScrollpos = currentScrollPos;
      }

      window.onscroll = handleScroll;
    }
  }, []);

  if (!mounted) return null;

  return (
    <nav
      className={cn(
        "fixed dark:text-whitedarktheme h-16 w-full z-50 mb-8 top-0",
        styles.navBar,
        theme === "dark" ? styles.navBgDark : styles.navBgLight
      )}
      style={{ backgroundColor: open && theme === "light" && "#4e7a80" }}
    >
      <div
        className={cn(
          "flex h-full container mx-auto justify-between items-center",
          styles.navPadding
        )}
      >
        {/* -----------Site Logo------------- */}
        <Link href={{ pathname: "/" }}>
          <a
            className={cn(
              "logo flex flex-row md:order-1 order-2",
              theme === "dark" ? utilStyles.anchorDark : utilStyles.anchorLight,
              utilStyles.titleSmall
            )}
            style={{
              fontWeight: 800,
              letterSpacing: "-0.05rem",
              display: open ? "none" : "inline-block",
            }}
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
              <RenderNavigationItems setOpen={setOpen} open={open} />
            </ul>
            <div className="flex flex-col items-center mt-24">
              <Contact small />
              <h3
                className={cn(
                  utilStyles.boldTextLight,
                  utilStyles.anchorFade4,
                  styles.textSlideUp
                )}
                style={{
                  borderBottom: "0.22em solid #e7c2b8",
                  position: "fixed",
                  bottom: "1rem",
                }}
              >
                Luke Fantom © {DateTime.local().year}
              </h3>
            </div>
          </Overlay>
        </div>

        {/* -----------Dark Mode------------- */}

        <div
          className="order-3"
          style={{
            display: open ? "none" : "inline-block",
          }}
        >
          <ThemeChanger />
        </div>
      </div>
    </nav>
  );
}
