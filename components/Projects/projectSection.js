import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import Societly from "./societly";
import SoCFM from "./socFm";
import PokeGet from "./pokeGet";
import SchoolOfCode from "./schoolOfCode";
import Mondays from "./mondays";
import Playermade from "./playermade";

export default function ProjectSection() {
  return (
    <>
      {/* --------Mondays------- */}
      <a href="https://www.mondays.co.uk/" className={utilStyles.containerFlexFull} rel="noreferrer" target="_blank">
        <Mondays />
      </a>

      {/* --------Playermade------- */}
      <a href="https://playermade.online/" className={utilStyles.containerFlexHalf} rel="noreferrer" target="_blank">
        <Playermade />
      </a>

      {/* --------Societly------- */}
      <a href="https://societly.netlify.app/" className={utilStyles.containerFlexHalf} rel="noreferrer" target="_blank">
        <Societly />
      </a>

      {/* --------SoC FM------- */}
      {/* <a
        href="https://soc-fm.netlify.app/"
        className={utilStyles.containerFlexHalf}
        rel="noreferrer"
        target="_blank"
      >
        <SoCFM />
      </a> */}

      {/* --------PokeGet------- */}
      {/* <a
        href="https://pokeget.netlify.app/"
        className={utilStyles.containerFlexHalf}
        rel="noreferrer"
        target="_blank"
      >
        <PokeGet />
      </a> */}

      {/* --------School of Code------- */}
      <a href="https://schoolofcode.com/" className={utilStyles.containerFlexFull} rel="noreferrer" target="_blank">
        <SchoolOfCode />
      </a>
    </>
  );
}
