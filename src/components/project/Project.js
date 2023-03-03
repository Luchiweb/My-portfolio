import React from "react";

export function Project({ img, title }) {
  return (
    <li className="project">
      <a href="#">
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </a>
    </li>
  );
}
