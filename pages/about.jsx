import { pdfjs, Document, Page, PDFDownloadLink } from 'react-pdf'
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa'
import { SiExpress, SiLinux, SiMongodb, SiFastapi, SiTailwindcss, SiNextdotjs} from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'
import { GrArchlinux } from 'react-icons/gr'
const myResume = './TK-ed.pdf';

const AboutPage = () => {

  return (
    <>
      <h3>About Me</h3><br/>
      <ul>
        <li><span role="img" aria-label="book">📖</span> I am Tharun Kumar, a Pre-Final year devoted student with aspirations of becoming a prosperous developer.</li>
        <li><span role="img" aria-label="graduate-hat">🎓</span> A dedicated backend developer that is also skilled in creating the user interface for web applications.</li>
        <li><span role="img" aria-label="light-bulb">💡</span> An avid user of the Blockchain technology and an excellent team player with attention to detail. </li>
        <li><span role="img" aria-label="laptop">💻</span> Currently working on GraphQL <span><SiGraphql /></span> and Linux!! <span><GrArchlinux/></span> </li>
      </ul>
      <br/>

      <h2>Relevant skills:</h2><br/>
      <h3>Front-end Technologies:</h3><br />
      <ul>
        <li><span><AiFillHtml5 /> </span>HTML</li>
        <li><span><FaCss3Alt /> </span>CSS</li>
        <li><span><FaReact /> </span>React.js</li>
        <li><span><SiNextdotjs /> </span>Next.js</li>
        <li><span><SiTailwindcss /> </span>TailwindCSS</li>
      </ul>
      <br />
      <h3>Back-end Technologies:</h3><br />
      <ul>
      <li><span><SiExpress /> </span>Express.js</li>
        <li><span><IoLogoNodejs /> </span>Node.js</li>
        <li><span><SiMongodb /> </span>MongoDB</li>
        <li><span><SiFastapi /> </span>FastAPI</li>
        <li><span><SiLinux /> </span>Linux</li>
      </ul>
      <br/>
    
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
