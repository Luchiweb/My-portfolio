import React from "react";
import gitHubIcon from "../../img/icons/gitHub-black.svg";

export function Project({ img, title, skills, gitHubLink }) {
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{title}</h1>

          <img src={img} alt={title} className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: {skills}</p>
          </div>

          {gitHubLink ? (
            <a href={gitHubLink} target="_blank" className="btn-outline">
              <img src={gitHubIcon} alt="gitHubIcon" />
              GitHub repo
            </a>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </main>
  );
}
