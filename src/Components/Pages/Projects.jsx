import React from "react";
import AnimeBootcamp from "../../Images/anime-bootcamp.png";
import GitUp from "../../Images/GitUp-Screenshot.png";
import PassGen from "../../Images/passwordGenerator-Screenshot.png";
import NumGuess from "../../Images/Guess-my-number-screenshot.png";

export default function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        <div className="project-row">
          <div className="project">
            <img src={AnimeBootcamp} alt="" />
            <div className="project-content">
              <h3>Anime Bootcamp</h3>
              <p>
                Our website provides a comprehensive selection of anime and
                manga titles for users to search and explore. Users can create
                an account and save their favorite titles to their watchlist,
                allowing them to easily keep track of what they've watched or
                want to watch.
              </p>
              <div className="btn-container">
                <form
                  action="https://anime-bootcamp.herokuapp.com/"
                  target="_blank"
                >
                  <button type="submit">Live Site</button>
                </form>
                <form
                  action="https://github.com/renfunny/anime-bootcamp"
                  target="_blank"
                >
                  <button type="submit">Source Code</button>
                </form>
              </div>
            </div>
          </div>
          <div className="project">
            <img src={GitUp} alt="" />
            <div className="project-content">
              <h3>GitUp.Now</h3>
              <p>
                Our user-friendly platform allows you to choose a specific
                muscle or group of muscles you want to focus on, and we provide
                you with a comprehensive list of exercises specifically designed
                to strengthen and tone those muscles
              </p>
              <div className="btn-container">
                <form
                  action="https://renfunny.github.io/GitUp.Now/"
                  target="_blank"
                >
                  <button type="submit">Live Site</button>
                </form>
                <form
                  action="https://github.com/renfunny/GitUp.Now"
                  target="_blank"
                >
                  <button type="submit">Source Code</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="project-row">
          <div className="project">
            <img src={PassGen} alt="" />
            <div className="project-content">
              <h3>Password Generator</h3>
              <p>
                Our platform allows you to customize your passwords based on
                your specific requirements, such as length, inclusion of special
                characters, numbers, and upper or lower case characters.{" "}
              </p>
              <div className="btn-container">
                <form
                  action="https://renfunny.github.io/password-generator/"
                  target="_blank"
                >
                  <button type="submit">Live Site</button>
                </form>
                <form
                  action="https://github.com/renfunny/password-generator"
                  target="_blank"
                >
                  <button type="submit">Source Code</button>
                </form>
              </div>
            </div>
          </div>
          <div className="project">
            <img src={NumGuess} alt="" />
            <div className="project-content">
              <h3>Guess My Number</h3>
              <p>
                In this game, you are tasked with guessing a randomly generated
                password within a limited number of attempts. The fewer guesses
                you make, the higher your score will be.{" "}
              </p>
              <div className="btn-container">
                <form
                  action="https://renfunny.github.io/guess-my-number/"
                  target="_blank"
                >
                  <button type="submit">Live Site</button>
                </form>
                <form
                  action="https://github.com/renfunny/guess-my-number"
                  target="_blank"
                >
                  <button type="submit">Source Code</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
