import React from "react";

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
          href="../../img/CV.pdf"
          className="btn"
          download={"Svitlana_Moiseienko_cv"}
        >
          Download CV
        </a>
      </div>
    </header>
  );
}
