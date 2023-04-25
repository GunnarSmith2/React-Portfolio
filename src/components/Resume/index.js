import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Resume</p>
        <hr />

        <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + "/Gunnar-Smith-Resume.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download Resume Here</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />
        <ul>
          <li>HTML, CSS, Javascript</li>
          <li>Web API, Server-Side API, JSON</li>
          <li>Node, Express, MySQL, MongoDB</li>
          <li>React, PWA, State</li>
          <li>Git</li>
          <li>Github Repo Management</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
