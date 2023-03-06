import React from "react";
export function Contacts() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Poznan, Poland</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram</h2>
            <p>
              <a
                href="https://t.me/Luchi_web"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Luchi_web
              </a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a
                href="mailto:svetlana.moiseienko.web@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                svetlana.moiseienko.web@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}
