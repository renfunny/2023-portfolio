import React from "react";
import GreetingImg from "../../Images/Palz-Standing.png";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default function Home() {
  return (
    <section>
      <div className="intro-container">
        <div className="intro-img">
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Welcome to my Portfolio!</Tooltip>}
          >
            <img
              src={GreetingImg}
              className="greeting-img slide-in-left"
              alt="Renato's avatar greeting"
            />
          </OverlayTrigger>
        </div>
        <div className="intro-text slide-in-right">
          <h1>Hello World!</h1>
          <p>
            I'm Renato Cordova, a Fullstack Developer who successfully completed
            the <strong>University of Toronto Coding Bootcamp.</strong> My
            passion for programming and eagerness to learn drives me to
            continously improve my skills, so I can further grow my career as a
            Developer and deliver top-quality results.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
