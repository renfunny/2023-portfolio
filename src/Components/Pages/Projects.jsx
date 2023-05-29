import React from "react";
import AnimeBootcamp from "../../Images/anime-bootcamp.png";
import GitUp from "../../Images/GitUp-Screenshot.png";
import JobSeeker from "../../Images/job-seeker.png";
import AiSummarizer from "../../Images/ai-summarizer.png";

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
            <img src={JobSeeker} alt="" />
            <div className="project-content">
              <h3>Job Seeker App</h3>
              <p>
                Discover and apply for diverse job opportunities worldwide with
                our intuitive app. Explore various job types, industries, and
                locations, seamlessly navigating to the job posting of your
                choice to effortlessly apply and advance your career.
              </p>
              <div className="btn-container">
                <form
                  action="https://github.com/renfunny/job_seeker-react_native"
                  target="_blank"
                >
                  <button type="submit">Source Code</button>
                </form>
              </div>
            </div>
          </div>
          <div className="project">
            <img src={AiSummarizer} alt="" />
            <div className="project-content">
              <h3>AI Summarizer</h3>
              <p>
                Experience the power of AI-driven summarization with our
                cutting-edge app. Simply enter the URL of any article, and our
                ChatGPT-powered technology will swiftly provide you with concise
                and accurate summaries, saving you time and ensuring you stay
                informed effortlessly.
              </p>
              <div className="btn-container">
                <form
                  action="https://6451829618e2ca221cd9325c--capable-empanada-23d359.netlify.app/"
                  target="_blank"
                >
                  <button type="submit">Live Site</button>
                </form>
                <form
                  action="https://github.com/renfunny/AI-Summarizer"
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
