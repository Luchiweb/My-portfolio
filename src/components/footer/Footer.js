import React from "react";
import "./Footer.css";
import instagram from "../../img/icons/instagram.svg";
import twitter from "../../img/icons/twitter.svg";
import gitHub from "../../img/icons/gitHub.svg";
import linkedIn from "../../img/icons/linkedIn.svg";

export function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer__wrapper">
          <ul class="social">
            <li class="social__item">
              <a href="#!">
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li class="social__item">
              <a href="#!">
                <img src={twitter} alt="Link" />
              </a>
            </li>
            <li class="social__item">
              <a href="#!">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li class="social__item">
              <a href="#!">
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div class="copyright">
            <p>© 2023 inspire-frontend.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
