import ProjectCard from "../components/ProjectCard";
import { getProjects } from "./api/mini-projects";
import styles from "../styles/ProjectsPage.module.css";

const ProjectsPage = ({ pypi_projects }) => {
  return (
    <>
      <h3>My recent works!! {process.env.NEXT_PUBLIC_GITHUB_API_KEY} </h3>
      <br />
      <center>
        <a href="ttps://portofolyo-task.vercel.app/">Portfolio!!</a>
      </center>
      <br />
      <hr />
      <div className={styles.container}>
        {pypi_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br />
    </>
  );
};

export async function getStaticProps() {
  const pypi_projects = getProjects();

  return {
    props: { title: "Projects", pypi_projects },
  };
}

export default ProjectsPage;
