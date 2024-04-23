import Link from "next/link";
import styles from "../styles/HomePage.module.css";
import Type from "../pages/Type";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Web</h1>
          <h1>Developer</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Tharun Kumar</h1>
            <h3>
              <Type />
            </h3>
            <br />
            <Link href="/about">
              <button className={styles.button}>About Me</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
          </div>
          <h4 className={{ textAlign: "bottom" }}>
            "There is something mysterious about the life of a developer."
          </h4>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
