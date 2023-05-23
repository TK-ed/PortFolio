import Link from 'next/link';
// import Illustration from '../components/Illustration';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';
import Type from '../pages/Type'

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

              {/* <h3 className={styles.bio} style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </h3> */}

            {/* <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Skill Set</h4>
                  <div className={styles.tags}>
                    <span key='Research' className='Research'>
                      Research
                    </span>
                    <span key='PyTorch' className='PyTorch'>
                      PyTorch
                    </span>
                    <span key='Tensorflow' className='Tensorflow'>
                      Tensorflow
                    </span>
                    <span key='Apache-Spark' className='Apache-Spark'>
                      Apache-Spark
                    </span>
                    <span key='SQL' className='SQL'>
                      SQL
                    </span>
                    <span key='Computer-Vision' className='Computer-Vision'>
                      Computer-Vision
                    </span>
                    <span key='Data-Pipelines' className='Data-Pipelines'>
                      Data-Pipelines
                    </span>
                    <span key='MLOps' className='MLOps'>
                      MLOps
                    </span>
                    <span key='Software-Design' className='Software-Design'>
                      Software-Design
                    </span>
                    <span key='Bots' className='Bots'>
                      Bots
                    </span>
                    <span key='APIs' className='APIs'>
                      APIs
                    </span>
                  </div>
                </div>
              </div>
            </div> */}
            <br />
            <Link href="/about">
              <button className={styles.button}>About Me</button>
            </Link>
            {/* <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link> */}
            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
          </div>
          <h4 className={{textAlign: 'bottom'}}>"There is something mysterious about the life of a developer."</h4>
          {/* <Illustration className={styles.illustration} /> */}
          {/* <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image
                className={styles.picture}
                // src="/coder.gif"
                width={300}
                height={290}
                alt="Picture"
              />
            </div>
            
          </div> */}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
