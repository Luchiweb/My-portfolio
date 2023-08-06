import React from "react";
import { Header } from "../../components/header/Header";
import "./Home.css";

export function Home() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                Next.js, RTK Query, ReactJS, Redux, TypeScript, JavaScript, HTML5, CSS3, BootStrap,
                TailwindCSS, MaterialUI, Webpack
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Web Design</h2>
              <p>Figma, Adobe Photoshop, UX/UI, Visual Design</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
