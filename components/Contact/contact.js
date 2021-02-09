import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./contact.module.css";
import utilStyles from "../../styles/utils.module.css";

export default function ContactSection() {
  return (
    <div className={styles.iconContainer}>
      <a
        href={"https://linkedin.com/in/lukefantom"}
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
      </a>
      <a
        href={"https://github.com/lukefantom"}
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} className={styles.icon} />
      </a>
      <a href={"mailto:luke.fantom@gmail.com"} rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
      </a>
    </div>
  );
}
