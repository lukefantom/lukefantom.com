import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import styles from "./ProjectContainer/projectContainer.module.css";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb as farLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb as fasLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faMoon as fasMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("light");

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className={cn(
          "order-2 md:order-3 focus:outline-none",
          styles.growButton
        )}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {theme === "dark" ? (
          <FontAwesomeIcon
            icon={fasMoon}
            className={cn(styles.darkModeIcon, styles.rotateVertical)}
          />
        ) : (
          <FontAwesomeIcon
            icon={farLightbulb}
            className={cn(styles.darkModeIcon, styles.rotateHorizontal)}
          />
        )}
        {/* </svg> */}
      </button>
    </div>
  );
};

export default ThemeChanger;
