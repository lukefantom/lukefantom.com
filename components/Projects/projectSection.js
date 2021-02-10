import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import Societly from "./societly";
import SoCFM from "./socFm";
import PokeGet from "./pokeGet";

export default function ProjectSection() {
  return (
    <>
      {/* --------Societly------- */}
      <a
        href="https://societly.netlify.app/"
        className={utilStyles.containerFlexFull}
        rel="noreferrer"
        target="_blank"
      >
        <Societly />
      </a>

      {/* --------SoC FM------- */}
      <a
        href="https://soc-fm.netlify.app/"
        className={utilStyles.containerFlexHalf}
        rel="noreferrer"
        target="_blank"
      >
        <SoCFM />
      </a>

      {/* --------PokeGet------- */}
      <a
        href="https://pokeget.netlify.app/"
        className={utilStyles.containerFlexHalf}
        rel="noreferrer"
        target="_blank"
      >
        <PokeGet />
      </a>
    </>
  );
}
