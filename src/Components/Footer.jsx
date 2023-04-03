import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

function Footer() {
  return (
    <footer>
      <h2>Renato &middot; FullStack Developer</h2>
      <ul className="icons-list">
        <li>
          <a
            href="https://linkedin.com/in/renato-cordova-5bbb84211"
            target="_blank"
            className="footer-icon linkedin link"
            title="LinkedIn"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={brands("linkedin")} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/renfunny"
            target="_blank"
            className="footer-icon github link"
            title="GitHub"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={brands("github")} />
            <span className="sr-only">GitHub</span>
          </a>
        </li>
      </ul>
      <p>
        <small>&copy; 2023 Renato Cordova. All rights reserved</small>
      </p>
    </footer>
  );
}

export default Footer;
