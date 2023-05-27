import ErrorIcon from "./icons/ErrorIcon";
import WarningIcon from "./icons/WarningIcon";
import BellIcon from "./icons/BellIcon";
import NextjsIcon from "./icons/NextjsIcon";
import CheckIcon from "./icons/CheckIcon";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import { BsDiscord } from "react-icons/bs";
import SourceControlIcon from "./icons/SourceControlIcon";
import styles from "../styles/Bottombar.module.css";

const Bottombar = () => {
  return (
    <footer className={styles.bottomBar}>
      <div className={styles.container}>
        <a
          href="https://github.com/TK-ed/PortFolio"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.section}
        >
          <SourceControlIcon className={styles.icon} />
          <p>main</p>
        </a>
        <div className={styles.section}>
          <ErrorIcon className={styles.icon} />
          <p className={styles.errorText}>0</p>&nbsp;&nbsp;
          <WarningIcon className={styles.icon} />
          <p>0</p>
        </div>
      </div>
      <div className={styles.container}>
        <a
          href="https://www.linkedin.com/in/tharun-kumar-783911250/"
          target="_blank"
          rel="noopener"
        >
          <div className={styles.section}>
            <LinkedinIcon className={styles.icon} />
            <p>Linkedin</p>
          </div>
        </a>
        <a href="https://github.com/TK-ed" target="_blank" rel="noopener">
          <div className={styles.section}>
            <GithubIcon className={styles.icon} />
            <p>Github</p>
          </div>
        </a>
        <a
          href="https://discord.com/invite/Tharun#7991"
          target="_blank"
          rel="noopener"
        >
          <div className={styles.section}>
            <BsDiscord className={styles.icon} />
            <p>Discord</p>
          </div>
        </a>
        <a href="https://nextjs.org/" target="_blank" rel="noopener">
          <div className={styles.section}>
            <NextjsIcon className={styles.icon} />
            <p>Powered by Next.js</p>
          </div>
        </a>
        <div className={styles.section}>
          <CheckIcon className={styles.icon} />
          <p>Prettier</p>
        </div>
        <div className={styles.section}>
          <BellIcon />
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;
