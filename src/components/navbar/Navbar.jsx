import React from "react";
import { NavLink } from "react-router-dom";
import { ButtonDarkMode } from "../buttonDarkMode/ButtonDarkMode";
import "./Navbar.css";

export function Navbar() {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  const checkIsLinkActive = () => {
    return ({ isActive }) => (isActive ? activeLink : normalLink);
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Inspire</strong> portfolio
          </NavLink>
          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="My-portfolio/" className={checkIsLinkActive()}>
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/projects" className={checkIsLinkActive()}>
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/contacts" className={checkIsLinkActive()}>
                Contacts
              </NavLink>
            </li>
          </ul>
          <ButtonDarkMode />
        </div>
      </div>
    </nav>
  );
}
