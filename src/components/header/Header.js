import React from "react";

export function Header() {
  return (
    <header class="header">
      <div class="header__wrapper">
        <h1 class="header__title">
          <strong>
            Hi, my name is <em>Lui</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div class="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href="#!" class="btn">
          Download CV
        </a>
      </div>
    </header>
  );
}
