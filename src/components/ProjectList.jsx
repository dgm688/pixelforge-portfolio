import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <div>
      <h2>Projects</h2>

      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;