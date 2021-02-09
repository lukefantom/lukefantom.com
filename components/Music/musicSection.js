import Tourdefrance from "./tourdefrance";
import Atlas from "./atlas";
import CultureVillain from "./cultureVillain";
import Link from "next/link";

export default function MusicSection() {
  return (
    <>
      <Tourdefrance />
      <Atlas />
      <CultureVillain />
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
