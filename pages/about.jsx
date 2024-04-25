import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiFastapi,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiDocker,
  SiGraphql,
  SiPostman,
  SiGit,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import DynamicIconCloud from "../components/IconCloud";
import { Content } from "../components/Content";
const myResume = "./TK-ed.pdf";

export default function AboutPage() {
  return (
    <>
      <h3>About Me</h3>
      <br />
      <ul>
        <li>
          <span role="img" aria-label="book">
            📖
          </span>{" "}
          I am Tharun Kumar, dedicated backend developer that is also skilled in
          creating the user interface for web applications.
        </li>
        <li>
          <span role="img" aria-label="light-bulb">
            💡
          </span>{" "}
          My focus is on helping to improve people’s lives by developing
          applications that are accessible and functional.
        </li>
        <li>
          <span role="img" aria-label="graduate-hat">
            🎓
          </span>
          The experience includes problem solving and testing, working in teams
          with strict deadlines, for projects developed in the Trybe course.
        </li>
        <li>
          <span role="img" aria-label="laptop">
            💻
          </span>{" "}
          Currently working on FastAPI{" "}
          <span>
            <SiFastapi />
          </span>{" "}
          and GraphQL!!{" "}
          <span>
            <SiGraphql />
          </span>{" "}
        </li>
      </ul>
      <br />
      <h2>Relevant skills:</h2>
      <div className="flex flex-row w-full space-y-12">
        <div>
          <h3>Front-end:</h3>
          <br />
          <ul>
            <li>
              <span>
                <AiFillHtml5 />
              </span>
              HTML
            </li>
            <li>
              <span>
                <FaCss3Alt />{" "}
              </span>
              CSS
            </li>
            <li>
              <span>
                <FaReact />/<SiNextdotjs />{" "}
              </span>
              React.js/Next.js
            </li>
            <li>
              <span>
                <SiTypescript />/<SiJavascript />
              </span>{" "}
              TypeScript/JavaScript
            </li>
            <li>
              <span>
                <SiTailwindcss />{" "}
              </span>
              TailwindCSS
            </li>
          </ul>
        </div>
        <br />
        <div>
          <h3>Back-end:</h3>
          <br />
          <ul>
            <li>
              <span>
                <SiFastapi />{" "}
              </span>
              FastAPI
            </li>
            <li>
              <span>
                <SiExpress />{" "}
              </span>
              Express.js
            </li>
            <li>
              <span>
                <IoLogoNodejs />{" "}
              </span>
              Node.js
            </li>
            <li>
              <span>
                <SiMongodb />{" "}
              </span>
              MongoDB
            </li>
            <li>
              <span>
                <SiDocker />{" "}
              </span>
              Docker
            </li>
          </ul>
        </div>
        <br />
        <h3>Tools:</h3><br />
        <ul>
          <li><span><SiVercel /> </span>Vercel</li>
          <li><span><SiGit /> </span>GIT</li>
          <li><span><SiVisualstudiocode /> </span>Vs-code</li>
          <li><span><SiPostman /> </span>Postman</li>
          <li><span><SiDocker /> </span>Docker</li>
        </ul>
        <br />
        <h3 className="mt-8 text-xl font-bold text-center">
          Resume (
          <a
            href={myResume}
            download="Resume-TK-ed.pdf"
            className="text-blue-500 hover:underline"
          >
            Download
          </a>
          )
        </h3>
        <Content>
          <DynamicIconCloud />
        </Content>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}
