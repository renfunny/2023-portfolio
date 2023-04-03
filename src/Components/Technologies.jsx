import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiJqueryLogo,
  DiBootstrap,
  DiNodejs,
  DiNpm,
  DiMysql,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { SiJest, SiHeroku } from "react-icons/si";

export default function Technologies() {
  return (
    <div className="tech-container slide-in-top">
      <h2 className="tech-title">Technologies</h2>
      <div className="tech-groups">
        <div className="tech-class">
          <h3>Font-End</h3>
          <ul className="tech-icons">
            <li>
              <DiHtml5 className="html" title="HTML" />
            </li>
            <li>
              <DiCss3 className="css" title="CSS" />
            </li>
            <li>
              <DiJsBadge className="javascript" title="JavaScript" />
            </li>
          </ul>
          <ul className="tech-icons">
            <li>
              <DiReact className="react" title="React" />
            </li>
            <li>
              <DiJqueryLogo className="jquery" title="jQuery" />
            </li>
            <li>
              <DiBootstrap className="bootstrap" title="Bootstrap" />
            </li>
          </ul>
        </div>
        <div className="tech-class">
          <h3>Back-end</h3>
          <ul className="tech-icons">
            <li>
              <DiNodejs className="nodejs" title="Node.js" />
            </li>
            <li>
              <DiNpm className="npm" title="npm" />
            </li>
            <li>
              <DiMysql className="mysql" title="mySQL" />
            </li>
          </ul>
          <ul className="tech-icons">
            <li>
              <DiMongodb className="mongodb" title="MongoDB" />
            </li>
            <li>
              <GrGraphQl className="graphql" title="GraphQL" />
            </li>
          </ul>
        </div>
        <div className="tech-class">
          <h3>Developer Tools</h3>
          <ul className="tech-icons">
            <li>
              <DiGit className="git" title="Git" />
            </li>
            <li>
              <SiJest className="jest" title="Jest" />
            </li>
          </ul>
          <ul className="tech-icons">
            <li>
              <SiHeroku className="heroku" title="Heroku" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
