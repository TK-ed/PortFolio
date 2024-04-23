import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiFastapi, SiTailwindcss, SiNextdotjs, SiTypescript, SiJavascript, SiDocker } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'
import { GrArchlinux } from 'react-icons/gr'
const myResume = './TK-ed.pdf';

const AboutPage = () => {

  return (
    <>
      <h3>About Me</h3><br/>
      <ul>
        <li><span role="img" aria-label="book">📖</span> I am Tharun Kumar, a Final year devoted student with aspirations of becoming a prosperous developer.</li>
        <li><span role="img" aria-label="graduate-hat">🎓</span> A dedicated backend developer that is also skilled in creating the user interface for web applications.</li>
        <li><span role="img" aria-label="light-bulb">💡</span> An avid user of the Blockchain technology and an excellent team player with attention to detail. </li>
        <li><span role="img" aria-label="laptop">💻</span> Currently working on FastAPI <span><SiFastapi /></span> and Linux!! <span><GrArchlinux/></span> </li>
      </ul>
      <br/>
      <h2>Relevant skills:</h2><br/>
      <h3>Front-end Technologies:</h3><br />
      <ul>
        <li><span><AiFillHtml5 /></span>HTML</li>
        <li><span><FaCss3Alt /> </span>CSS</li>
        <li><span><FaReact />/<SiNextdotjs /> </span>React.js/Next.js</li>
        <li><span><SiTypescript />/<SiJavascript /></span> TypeScript/JavaScript</li>
        <li><span><SiTailwindcss /> </span>TailwindCSS</li>
      </ul>
      <br />
      <h3>Back-end Technologies:</h3><br />
      <ul>
        <li><span><SiFastapi /> </span>FastAPI</li>
        <li><span><SiExpress /> </span>Express.js</li>
        <li><span><IoLogoNodejs /> </span>Node.js</li>
        <li><span><SiMongodb /> </span>MongoDB</li>
        <li><span><SiDocker /> </span>Docker</li>
      </ul>
      <br/>
        {/* <h3>Front-end Technologies:</h3><br />
          <ul>
            <li><span><AiFillHtml5 /> </span>HTML</li>
            <li><span><FaCss3Alt /> </span>CSS</li>
            <li><span><FaReact /> </span>React.js</li>
            <li><span><SiNextdotjs /> </span>Next.js</li>
            <li><span><SiTailwindcss /> </span>TailwindCSS</li>
          </ul> */}
      <center>
        <h3>Resume (<a href={myResume} download="Resume-TK-ed.pdf">Download</a>)</h3>
        <br />
        {/* <Document file={myResume}>
          <Page pageIndex={0} />
          <Page pageIndex={1} />
        </Document> */}
      </center>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
