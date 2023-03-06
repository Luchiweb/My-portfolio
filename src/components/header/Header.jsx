import React from "react";
import cv from "../../img/CV.pdf";

export function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Svetlana</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a
          href={cv}
          className="btn"
          download={"Svitlana_Moiseienko_cv"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}
