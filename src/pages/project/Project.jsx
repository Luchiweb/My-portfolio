import { useParams } from "react-router-dom";
import { projects } from "../../helpers/projectList";
import gitHubIcon from "../../img/icons/gitHub-black.svg";
import "./Project.css";

export function Project() {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.images.bigImage}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          {project.gitHubLink && (
            <a
              href={project.gitHubLink}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <img src={gitHubIcon} alt="gitHubIcon" />
              GitHub repo
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
