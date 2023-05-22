import ProjectCard from '../components/ProjectCard';
import {getProjects} from './api/mini-projects';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ pypi_projects }) => {

  // const API = process.env.NEXT_PUBLIC_GITHUB_API
  // console.log(API);
  return (
    <>
      <h3>My recent works!! {process.env.NEXT_PUBLIC_GITHUB_API_KEY} </h3>

      <br/>
      <center><h4>Full-stack Login page</h4></center>
      <hr/>
      <div className={styles.container}>
        {pypi_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br/>
    </>
  );
};

export async function getStaticProps() {
  const pypi_projects = getProjects();

  return {
    props: { title: 'Projects', pypi_projects },
  };
}

export default ProjectsPage;
