import Link from "next/link";
import styles from "../styles/HomePage.module.css";
import Type from "../pages/Type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export default function HomePage() {
  const quoteRef = React.useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      "#name",
      {
        opacity: 0,
        y: -150,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        delay: 1.3,
        ease: "bounce.out(3)",
      }
    );
    gsap.from("#heading", {
      opacity: 0,
      delay: 1.2,
      x: 500,
      ease: "back.out(2)",
    });
    gsap.from("#box", {
      opacity: 0,
      y: 200,
      delay: 0.7,
      ease: "back.out(3)",
    });
    gsap.fromTo(
      "#batman",
      {
        opacity: 0,
        x: -1000,
        delay: 0.3,
        ease: "back.out(3)",
      },
      {
        opacity: 0.7,
        x: 0,
        duration: 0.5,
        delay: 0.3,
        ease: "expo.out",
      }
    );
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background} id="batman">
          <h1>I am</h1>
          <h1>Batman</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name} id="name">
              Tharun Kumar
            </h1>
            <h3 id="heading">
              <Type />
            </h3>
            <br />
            <div id="box">
              <Link href="/about">
                <button className={styles.button}>About Me</button>
              </Link>
              <Link href="/contact">
                <button className={styles.outlined}>Contact</button>
              </Link>
            </div>
          </div>
          <h4 className={{ textAlign: "bottom" }} id="quote" ref={quoteRef}>
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
