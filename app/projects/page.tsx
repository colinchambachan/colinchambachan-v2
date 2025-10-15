import ProjectsClient from "./ProjectsClient";
import projectsData from "@/public/data/projects.json";

interface Project {
  name: string;
  link: string;
  time: string | null;
  desc: string;
  skills: Array<string>;
}

export default function Projects() {
  const projects = projectsData as Project[];

  return <ProjectsClient projects={projects} />;
}
