import React from "react";
import "./Projects.css";

import { projects } from "../../helpers/projectList";
import { ProjectCard } from "../../components/projectCard/ProjectCard";

export function Projects() {
  const projectItems = projects.map((project, index) => {
    return (
      <ProjectCard
        key={index}
        title={project.title}
        img={project.images.smallImage}
      />
    );
  });

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">{projectItems}</ul>
      </div>
    </main>
  );
}
