import Tourdefrance from "./tourdefrance";
import Atlas from "./atlas";
import CultureVillain from "./cultureVillain";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";

export default function MusicSection() {
  return (
    <>
      {/* --------tourdefrance------- */}
      <a
        href="https://soundcloud.com/tourdefrancemusic"
        className={utilStyles.containerFlexFull}
        rel="noreferrer"
        target="_blank"
      >
        <Tourdefrance />
      </a>

      {/* --------Atlas------- */}
      <a
        href="https://soundcloud.com/at-las"
        className={utilStyles.containerFlexHalf}
        rel="noreferrer"
        target="_blank"
      >
        <Atlas />
      </a>

      {/* --------Culture Villain------- */}
      <a
        href="https://culturevillain.co.uk"
        className={utilStyles.containerFlexHalf}
        rel="noreferrer"
        target="_blank"
      >
        <CultureVillain />
      </a>
    </>
  );
}

// ------ Anchor Tag -----
{
  /* <a
      style={{ width: "100%" }}
      href={"https://tourdefrance.bandcamp.com/music"}
      rel="noreferrer"
      target="_blank"
    ></a> */
}
