import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Full Stack Portfolio</strong> - Site Created By{" "}
          <a
            href="https://github.com/GunnarSmith2"
            target="_blank"
            rel="noreferrer"
          >
            Gunnar Smith
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/gunnarsmith3/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://www.facebook.com/profile.php?id=100081419712076"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
