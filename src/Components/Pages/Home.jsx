import React from "react";
import GreetingImg from "../../Images/avatar.png";
import Cloud from "../../Images/cloud.webp";
import Earth2 from "../../Images/earth2.jpg";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Home() {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url(${Earth2})`,
        backgroundSize: "cover",
        overflowY: "hidden",
      }}
    >
      <Parallax pages={3}>
        <ParallaxLayer
          className="intro-title"
          offset={1}
          speed={1.5}
          sticky={{ start: 1, end: 3 }}
        >
          <h1>Hello World!</h1>
        </ParallaxLayer>
        <ParallaxLayer className="intro-title" offset={1} speed={0.5}>
          <img
            src={Cloud}
            style={{ display: "block", width: "40%", marginLeft: "80%" }}
          />
          <img
            src={Cloud}
            style={{ display: "block", width: "30%", marginLeft: "15%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.95} speed={1.2} style={{ opacity: 0.9 }}>
          <img
            src={Cloud}
            style={{ display: "block", width: "20%", marginLeft: "90%" }}
          />
          <img
            src={Cloud}
            style={{ display: "block", width: "20%", marginLeft: "10%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.3} speed={0.6} style={{ opacity: 0.9 }}>
          <img
            src={Cloud}
            style={{ display: "block", width: "10%", marginLeft: "12%" }}
          />
          <img
            src={Cloud}
            style={{ display: "block", width: "20%", marginLeft: "85%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.9} speed={0.2} style={{ opacity: 0.9 }}>
          <img
            src={Cloud}
            style={{ display: "block", width: "20%", marginLeft: "80%" }}
          />
          <img
            src={Cloud}
            style={{ display: "block", width: "25%", marginLeft: "20%" }}
          />
          <img
            src={Cloud}
            style={{ display: "block", width: "10%", marginLeft: "8%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          className="intro-container"
          offset={1}
          speed={1.8}
          sticky={{ start: 1.2, end: 3 }}
        >
          <div className="intro-img">
            <img
              src={GreetingImg}
              className="greeting-img "
              alt="Renato's avatar greeting"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          className="intro-container"
          offset={1}
          speed={1.8}
          sticky={{ start: 1.2, end: 3 }}
        >
          <img src={Cloud} style={{ width: "30%", marginTop: "48%" }} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1.2}
          sticky={{ start: 1, end: 3 }}
          className="intro-text"
        >
          <div className="intro-textbox">
            <p>
              I'm Renato Cordova, a Fullstack Developer who successfully
              completed the <span>University of Toronto Coding Bootcamp.</span>{" "}
              My passion for programming and eagerness to learn drives me to
              continously improve my skills, so I can further grow my career as
              a Developer and deliver top-quality results.{" "}
            </p>
            <form
              action="#skills"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button>Let's Get Started!</button>
            </form>
          </div>
        </ParallaxLayer>
      </Parallax>
    </section>
  );
}
