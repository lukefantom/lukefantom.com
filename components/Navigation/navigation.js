import ThemeChanger from "../theme";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import useWindowSize from "../../hooks/useWindowSize";
import utilStyles from "../../styles/utils.module.css";
import cn from "classnames";
import renderNavigationItems from "./navItems";
import BurgerMenu from "./burger";
import Overlay from "./overlay";

export default function Navigation() {
  const navigationMobileRef = useRef(null);
  const mobileIconRef = useRef(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { width } = useWindowSize();
  const { theme, setTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);

  // const toggleMobileNavigation = () => {
  //   navigationMobileRef.current.classList.add("touched");
  //   navigationMobileRef.current.classList.toggle("translate-x-full");
  //   setMobileNavOpen(!mobileNavOpen);
  // };

  return (
    <nav className="absolute dark:text-whitedarktheme h-16 w-full z-50 mb-8 top-0">
      <div className="flex h-full container mx-auto justify-between items-center px-4 md:px-4">
        <Link href={{ pathname: "/" }}>
          <a
            className={cn(
              "logo flex flex-row",
              utilStyles.titleSmall,
              theme === "dark" ? utilStyles.anchorDark : utilStyles.anchorLight
            )}
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
        <ul className="hidden md:flex">{renderNavigationItems()}</ul>
        {/* <ul
          ref={navigationMobileRef}
          className="md:hidden absolute flex flex-col w-full top-16 left-0 py-3 items-center bg-darkPurple dark:bg-orange transform translate-x-full"
        >
          {renderNavigationItems()}
        </ul> */}
        <div
          // ref={mobileIconRef}
          // onClick={toggleMobileNavigation}
          className="md:hidden order-3 h-6 w-5 cursor-pointer relative"
        >
          {/* <BurgerMenu /> */}
          <Overlay>
            <ul>{renderNavigationItems()}</ul>
          </Overlay>
          {/* <div
          ref={mobileIconRef}
          onClick={toggleMobileNavigation}
          className="md:hidden order-3 h-6 w-5 cursor-pointer relative"
        > */}
          <span
            className={`transform transition duration-300 ease-in-out absolute h-1 w-full bg-darkPurple dark:bg-orange rounded-lg left-0 ${
              mobileNavOpen ? "rotate-135 top-2" : "rotate-0"
            }`}
          ></span>
          <span
            className={`absolute transition duration-300 ease-in-out h-1 w-full bg-darkPurple dark:bg-orange rounded-lg left-0 top-2 ${
              mobileNavOpen ? "opacity-0 -left-40" : "opacity-100"
            }`}
          ></span>
          <span
            className={`transform transition duration-300 ease-in-out absolute h-1 w-full bg-darkPurple dark:bg-orange rounded-lg left-0 ${
              mobileNavOpen ? "-rotate-135 top-2" : "rotate-0 top-4"
            }`}
          ></span>
        </div>
        <ThemeChanger />
      </div>
    </nav>
  );
}

// export default function Navigation() {
//   return (
//     <nav className="bg-purple dark:bg-darkgrey dark:text-whitedarktheme h-16 w-full z-50">
//       <div className="flex h-full flex-row-reverse container mx-auto justify-between items-center px-4 md:px-8">
//         <ThemeChanger />
//       </div>
//     </nav>
//   );
// }
