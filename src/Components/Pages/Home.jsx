import React from "react";
import GreetingImg from "../../Images/Palz-Standing.png";
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

export default function Home() {
  return (
    <section>
      <div className="intro-container">
        <div className="intro-img">
          <img
            src={GreetingImg}
            className="greeting-img slide-in-left"
            alt=""
          />
        </div>
        <div className="intro-text slide-in-right">
          <h1>Hello World!</h1>
          <p>
            My name is Renato Cordova, a Fullstack Developer eager to keep learn
            new technologies and become a person you can rely on.{" "}
          </p>
        </div>
      </div>
      {/* <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div> */}
      <div className="tech-container">
        <h2 className="tech-title">Technologies</h2>
        <div className="tech-groups">
          <div className="tech-class">
            <h3>Font-End</h3>
            <ul className="tech-icons">
              <li>
                <DiHtml5 />
              </li>
              <li>
                <DiCss3 />
              </li>
              <li>
                <DiJsBadge />
              </li>
            </ul>
            <ul className="tech-icons">
              <li>
                <DiReact />
              </li>
              <li>
                <DiJqueryLogo />
              </li>
              <li>
                <DiBootstrap />
              </li>
            </ul>
          </div>
          <div className="tech-class">
            <h3>Back-end</h3>
            <ul className="tech-icons">
              <li>
                <DiNodejs />
              </li>
              <li>
                <DiNpm />
              </li>
              <li>
                <DiMysql />
              </li>
            </ul>
            <ul className="tech-icons">
              <li>
                <DiMongodb />
              </li>
              <li>
                <GrGraphQl />
              </li>
            </ul>
          </div>
          <div className="tech-class">
            <h3>Developer Tools</h3>
            <ul className="tech-icons">
              <li>
                <DiGit />
              </li>
              <li>
                <SiJest />
              </li>
              <li>
                <SiHeroku />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
