import React from "react";
import "./Footer.css";
import twitter from "../../img/icons/twitter.svg";
import gitHub from "../../img/icons/gitHub.svg";
import linkedIn from "../../img/icons/linkedIn.svg";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                href="https://twitter.com/web_luchi"
                target={"_blank"}
                rel="noopener"
              >
                <img src={twitter} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://github.com/Luchiweb"
                target={"_blank"}
                rel="noopener"
              >
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/svetlana-moiseienko-504535240/"
                target={"_blank"}
                rel="noopener"
              >
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 inspire-frontend.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
