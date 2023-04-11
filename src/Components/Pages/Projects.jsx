import React from "react";
import AnimeBootcamp from "../../Images/anime-bootcamp.png";

export default function Projects() {
  return (
    <section id="projects" className="projects-container">
      <h1>Projects</h1>
      <div className="project-row">
        <div className="project">
          <img src={AnimeBootcamp} alt="" />
          <div className="project-content">
            <h3>Anime Bootcamp</h3>
            <p>
              Our website provides a comprehensive selection of anime and manga
              titles for users to search and explore. Users can create an
              account and save their favorite titles to their watchlist,
              allowing them to easily keep track of what they've watched or want
              to watch.
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
          <img src={AnimeBootcamp} alt="" />
          <div className="project-content">
            <h3></h3>
            <p></p>
            <div className="btn-container">
              <form action="" target="_blank">
                <button type="submit">Live Site</button>
              </form>
              <form action="" target="_blank">
                <button type="submit">Source Code</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="project-row">
        <div className="project">
          <img src={AnimeBootcamp} alt="" />
          <div className="project-content">
            <h3></h3>
            <p></p>
            <div className="btn-container">
              <form action="" target="_blank">
                <button type="submit">Live Site</button>
              </form>
              <form action="" target="_blank">
                <button type="submit">Source Code</button>
              </form>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={AnimeBootcamp} alt="" />
          <div className="project-content">
            <h3></h3>
            <p></p>
            <div className="btn-container">
              <form action="" target="_blank">
                <button type="submit">Live Site</button>
              </form>
              <form action="" target="_blank">
                <button type="submit">Source Code</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
